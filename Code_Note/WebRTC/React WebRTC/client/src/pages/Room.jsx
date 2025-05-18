import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSocket } from '../context/SocketContext';
import { usePeer } from '../context/PeerContext';
import { Button } from '@mui/material';

export default function Room() {
  const socket = useSocket();
  const { peer, createOffer, createAnswer, setRemoteAns, sendStream, remoteStream } = usePeer();
  const [myStream, setMyStream] = useState(null);

  const handleNewUser = useCallback(async ({ emailId }) => {
    console.log("New user connected: ", emailId);
    const offer = await createOffer(); // Ensure the offer is awaited
    console.log("Generated offer: ", offer); // Debug log
    socket.emit("[FRONTEND]call-user", { emailId, offer });
  }, [createOffer, socket]);

  const handleIncomingCall = useCallback(async ({ from, offer }) => {
    console.log("Incoming call: ", from, offer);
    if (!offer || !offer.type || !offer.sdp) {
      console.error("Invalid or empty offer received");
      return;
    }
    const answer = await createAnswer(offer);
    console.log("Generated answer: ", answer); // Debug log
    socket.emit("[FRONTEND]answer-call", { emailId: from, answer });
  }, [createAnswer, socket]);

  const handleCallAccepted = useCallback(async ({ emailId, answer }) => {
    console.log("Answer to accepted call: ", emailId, answer);
    await setRemoteAns(answer);
  }, [setRemoteAns]);

  useEffect(() => {
    socket.on("[SERVER]user-connected-room", handleNewUser);
    socket.on("[SERVER]call-made", handleIncomingCall);
    socket.on("[SERVER]call-accepted", handleCallAccepted);
  
    return () => {
      socket.off("[SERVER]call-made", handleIncomingCall);
      socket.off("[SERVER]call-accepted", handleCallAccepted);
    };
  }, [ handleNewUser, handleIncomingCall, handleCallAccepted]);
  
  

  const getUserMediaStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setMyStream(stream);
  }, []);

  useEffect(() => {
    getUserMediaStream();
  }, []);

  return (
    <div>
      <Button fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }} onClick={() => sendStream(myStream)}>Share Camera</Button>
          <div>
            MY STREAM
            {myStream && <ReactPlayer url={myStream} playing muted />}
          </div>
          <div>
            REMOTE STREAM
            {remoteStream && <ReactPlayer url={remoteStream} playing />}
          </div>
    </div>
  );
}
