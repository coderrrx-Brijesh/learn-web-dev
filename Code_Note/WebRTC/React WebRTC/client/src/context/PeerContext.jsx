import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";

export const PeerContext = React.createContext();

export const usePeer = () => {
  return useContext(PeerContext);
};

export const PeerProvider = ({ children }) => {
  const [remoteStream, setRemoteStream] = useState(null);

  // Initialize the peer connection with ICE servers
  const peer = useMemo(
    () =>
      new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      }),
    []
  );

  // Create an offer
  const createOffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    return offer;
  };

  // Create an answer
  const createAnswer = async (offer) => {
    try {
      if (!offer || !offer.type || !offer.sdp) {
        throw new Error("Invalid offer received");
      }
      await peer.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);
      return answer;
    } catch (error) {
      console.error("Error in createAnswer:", error.message);
      throw error;
    }
  };

  // Set remote answer
  const setRemoteAns = async (answer) => {
    await peer.setRemoteDescription(new RTCSessionDescription(answer));
  };

  // Send local stream to the peer
  const sendStream = async (stream) => {
    const tracks = stream.getTracks();
    for (const track of tracks) {
      peer.addTrack(track, stream);
    }
  };

  // Handle incoming tracks and set the remote stream
  const handleTracksEvent = useCallback((event) => {
    const streams = event.streams;
    setRemoteStream(streams[0]);
  }, []);

  // Handle ICE candidates
  useEffect(() => {
    peer.onicecandidate = (event) => {
      if (event.candidate) {
        // Emit the candidate to the signaling server
        console.log("New ICE candidate:", event.candidate);
      }
    };

    peer.addEventListener("track", handleTracksEvent);

    return () => {
      peer.removeEventListener("track", handleTracksEvent);
    };
  }, [handleTracksEvent, peer]);

  return (
    <PeerContext.Provider
      value={{ peer, createOffer, createAnswer, setRemoteAns, sendStream, remoteStream }}
    >
      {children}
    </PeerContext.Provider>
  );
};
