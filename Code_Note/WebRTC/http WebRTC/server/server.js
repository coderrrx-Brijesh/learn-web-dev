const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
// Create an Express application
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// Serve static files from the client directory
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
// Handle socket connections
io.on('connection', (socket) => {
console.log('User connected:', socket.id);
// Handle offer from a client
socket.on('offer', (offer) => {
console.log('Offer received:', offer);
socket.broadcast.emit('offer', offer);
});
// Handle answer from a client
socket.on('answer', (answer) => {
console.log('Answer received:', answer);
socket.broadcast.emit('answer', answer);
});
// Handle ICE candidate from a client
socket.on('ice-candidate', (candidate) => {
console.log('ICE candidate received:', candidate);
socket.broadcast.emit('ice-candidate', candidate);
});
// Handle disconnection
socket.on('disconnect', () => {
console.log('User disconnected:', socket.id);
});
});
// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});