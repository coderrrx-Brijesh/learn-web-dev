import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { Container, TextField, Button, Box, Typography, Stack } from "@mui/material";

export default function App() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketId, setSocketId] = useState("");
  const socketRef = useRef(null);
  const [connectedRooms, setConnectedRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (socketRef.current) {
      if (userId) {
        socketRef.current.emit("user-message", { message, userId });
      }
      if (currentRoom) {
        socketRef.current.emit("room-message", { message, roomId: currentRoom });
      }
      setMessage("");
    }
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    if (socketRef.current && roomId.trim()) {
      socketRef.current.emit("join-room", { userId: socketId, roomId });
      setCurrentRoom(roomId);
      setConnectedRooms((prevRooms) => [...prevRooms, roomId]);
      setRoomId("");
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:8000");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[Frontend] Connected to server:", socket.id);
      setSocketId(socket.id);
    });

    socket.on("alluser-message", (msg) => {
      console.log(msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on("room-user-message", (msg) => {
      console.log(msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
      console.log("[Frontend] Socket disconnected");
    };
  }, []);

  return (
    <Container>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}
      >
        <TextField
          label="Enter your message"
          variant="outlined"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          fullWidth
        />
        <TextField
          label="Enter User ID"
          variant="outlined"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          fullWidth
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={submitHandler}
        >
          Send
        </Button>
      </Box>

      <Typography variant="body1" sx={{ mt: 2 }}>
        {socketId ? `Connected: ${socketId}` : "Connecting..."}
      </Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}
      >
        <TextField
          label="Enter Room ID"
          variant="outlined"
          value={roomId}
          onChange={(event) => setRoomId(event.target.value)}
          fullWidth
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={joinRoomHandler}
        >
          Join
        </Button>
      </Box>

      <Typography variant="body1" sx={{ mt: 2 }}>
        {currentRoom ? `Current Room: ${currentRoom}` : "Not in any room"}
      </Typography>

      <Typography variant="body1">
        {connectedRooms.length > 0 
          ? `Connected Rooms: ${connectedRooms.join(", ")}` 
          : "Not connected to any rooms"}
      </Typography>

      <Stack spacing={1} sx={{ mt: 3 }}>
        {messages.map((msg, index) => (
          <Typography key={index} variant="body2">
            {msg}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}