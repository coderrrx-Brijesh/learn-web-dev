const express = require("express");
const socketio = require("socket.io");
const bodyParser = require("body-parser");

const io = new socketio.Server({ cors: { origin: "*" } });
const app = express();

app.use(bodyParser.json());

// Maps to track email to socket ID and vice versa
const emailToSocket = new Map();
const socketToEmail = new Map();

io.on("connection", (socket) => {
  console.log("New user connected to SERVER");

  // Handle user joining a room
  socket.on("[CLIENT]join-room", ({ roomId, emailId }) => {
    socket.join(roomId);
    console.log(`User ${emailId} joined room: ${roomId}`);

    // Ensure emailId is not already mapped
    if (emailToSocket.has(emailId)) {
      console.error(`Email ${emailId} is already mapped to a socket.`);
      return; // Don't proceed if the email is already mapped
    }

    // Map the email to the socket and vice versa
    emailToSocket.set(emailId, socket.id);
    socketToEmail.set(socket.id, emailId);

    console.log(`Mapped ${emailId} to socket ID: ${socket.id}`);

    // Notify the user that they joined the room
    socket.emit("[SERVER]joined-room", { emailId, roomId });

    // Notify other users in the room of the new connection
    socket.broadcast.to(roomId).emit("[SERVER]user-connected-room", { emailId });

    // Handle user disconnection
    socket.on("disconnect", () => {
      console.log(`User ${emailId} disconnected from room: ${roomId}`);

      // Notify other users in the room of the disconnection
      socket.broadcast.to(roomId).emit("[SERVER]user-disconnected", { emailId });

      // Clean up the mappings
      emailToSocket.delete(emailId);
      socketToEmail.delete(socket.id);

      console.log(`Cleaned up mappings for ${emailId}`);
    });
  });

  // Handle user making a call
  socket.on("[FRONTEND]call-user", ({ emailId, offer }) => {
    console.log(`Attempting to make call to ${emailId}`);

    const toSocketId = emailToSocket.get(emailId);
    const fromEmailId = socketToEmail.get(socket.id);

    if (toSocketId) {
      console.log(`Sending offer to ${emailId} via socket ID: ${toSocketId}`);
      socket.to(toSocketId).emit("[SERVER]call-made", { from: fromEmailId, offer });
      console.log(`Call made from ${fromEmailId} to ${emailId} with offer: ${offer}`);
    } else {
      console.error(`No socket found for emailId: ${emailId}`);
    }
  });

  // Handle call answer
  socket.on("[FRONTEND]answer-call", ({ emailId, answer }) => {
    console.log(`Attempting to answer call from ${emailId}`);

    const toSocketId = emailToSocket.get(emailId);

    if (toSocketId) {
      console.log(`Sending answer to ${emailId} via socket ID: ${toSocketId}`);
      socket.to(toSocketId).emit("[SERVER]call-accepted", { emailId, answer });
      console.log(`Call answered for ${emailId}`);
    } else {
      console.error(`No socket found for emailId: ${emailId}`);
    }
  });
});

// Start the Express server
app.listen(3000, () => console.log("HTTP Server started at: 3000"));
io.listen(3001, () => console.log("WebSocket Server started at: 3001"));
