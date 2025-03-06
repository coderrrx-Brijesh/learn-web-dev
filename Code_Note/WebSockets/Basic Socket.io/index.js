const express = require('express');
const http = require('node:http');
const path = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io= new Server(server);

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, './public/index.html'));
});

//Socket.io
io.on('connection', (socket) => {
  console.log('a new client connected:',socket.id);
  socket.on('user-message', (msg) => {
    io.emit('user-message', msg); 
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

