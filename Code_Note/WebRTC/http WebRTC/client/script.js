
const socket = io();
let localStream;
let peerConnection;
const iceServers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
document.getElementById('startCall').addEventListener('click', async () => {
// Capture media from camera and microphone.
localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
localVideo.srcObject = localStream;
// Create RTCPeerConnection.
peerConnection = new RTCPeerConnection(iceServers);
// Add local media tracks to the peer connection.
localStream.getTracks().forEach(track => {
peerConnection.addTrack(track, localStream);
});
// Listen for remote tracks and display them.
peerConnection.ontrack = event => {
remoteVideo.srcObject = event.streams[0];
};
// Exchange ICE candidates.
peerConnection.onicecandidate = event => {
if (event.candidate) {
socket.emit('ice-candidate', event.candidate);
}
};
// Create an offer, set local description, and send the offer.
const offer = await peerConnection.createOffer();
await peerConnection.setLocalDescription(offer);
socket.emit('offer', offer);
});
// When an offer is received from a remote peer:
socket.on('offer', async (offer) => {
if (!peerConnection) {
peerConnection = new RTCPeerConnection(iceServers);
// Add your local stream tracks if available.
if (localStream) {
localStream.getTracks().forEach(track => {
peerConnection.addTrack(track, localStream);
});
}
// Listen for remote tracks
peerConnection.ontrack = event => {
remoteVideo.srcObject = event.streams[0];
};
// Exchange ICE candidates.
peerConnection.onicecandidate = event => {
if (event.candidate) {
socket.emit('ice-candidate', event.candidate);
}
};
}
await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
const answer = await peerConnection.createAnswer();
await peerConnection.setLocalDescription(answer);
socket.emit('answer', answer);
});
// When an answer is received:
socket.on('answer', async (answer) => {
await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
});
// When an ICE candidate is received:
socket.on('ice-candidate', async (candidate) => {
await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
})