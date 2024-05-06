const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let counter = 0;
let interval;

io.on('connection', (socket) => {
  console.log('Student details:', socket.handshake.query);

  interval = setInterval(() => {
    counter += 2;
    socket.emit('number', counter);
  }, 2000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log('Thank you');
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/socketio.html');
});
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});