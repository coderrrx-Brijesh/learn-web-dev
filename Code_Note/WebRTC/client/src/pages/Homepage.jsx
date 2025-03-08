import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useSocket } from '../context/SocketContext';

const Homepage = () => {
  const socket = useSocket();
  const [roomId, setRoomId] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();

  // Handle joining a room
  const handleJoin = (e) => {
    e.preventDefault();
    if (roomId && emailId) {
      socket.emit("[CLIENT]join-room", { roomId, emailId });
    } else {
      alert("Both Room ID and Email ID are required");
    }
  };

  // Handle successful room joining
  const handleRoomJoined = useCallback(
    ({ roomId }) => {
      navigate(`/room/${roomId}`);
    },
    [navigate]
  );

  // Set up socket listeners
  useEffect(() => {
    socket.on('[SERVER]joined-room', handleRoomJoined);

    return () => {
      socket.off('[SERVER]joined-room', handleRoomJoined);
    };
  }, [socket, handleRoomJoined]);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Join a Room
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Room ID"
          variant="outlined"
          margin="normal"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email ID"
          variant="outlined"
          margin="normal"
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
          onClick={handleJoin}
        >
          Join
        </Button>
      </Box>
    </Container>
  );
};

export default Homepage;
