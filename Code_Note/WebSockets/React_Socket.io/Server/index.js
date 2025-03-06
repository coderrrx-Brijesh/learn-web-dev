import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const port = 8000;

// Create HTTP server and Socket.io instance and CORS Handle
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(cors({ origin: "*", methods: ["GET", "POST"], credentials: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle user message
  socket.on('user-message', ({ message, userId }) => {
    const newMsg = message + " from: " + socket.id;
    socket.to(userId).emit('alluser-message', newMsg);
    console.log("got user message: ", message);
  });

  // Handle room message
  socket.on('room-message', ({ message, roomId }) => {
    console.log("got room message: ", message, "for room:", roomId);
    const newMsg = message + " from: " + socket.id;
    // Broadcast to all in room including sender
    io.in(roomId).emit('room-user-message', newMsg);
  });

  // Handle joining a room
  socket.on('join-room', ({ userId, roomId }) => {
    socket.join(roomId);
    console.log(`User ${userId} joined room: ${roomId}`);
    // Notify room members of new join
    io.in(roomId).emit('room-user-message', `User ${socket.id} joined the room`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});