const path = require('path');
const express = require('express');

const app = express();
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');

// Socket.IO server
const io = new Server(httpServer);

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

// In-memory messages (simple for demo)
const messages = [];
const MAX_MESSAGES = 20;

io.on('connection', (socket) => {
  // Notify clients about current online count
  io.emit('onlineCount', io.engine.clientsCount);

  // Send recent messages to the new client only
  socket.emit('recentMessages', messages);

  // Custom event: postMessage (NOT workshop default)
  socket.on('postMessage', (payload) => {
    // Basic validation
    const text = (payload?.text || '').trim();
    const name = (payload?.name || 'Anonymous').trim();

    if (!text) {
      socket.emit('errorMessage', 'Message cannot be empty.');
      return;
    }

    const msg = {
      name: name.slice(0, 20) || 'Anonymous',
      text: text.slice(0, 200),
      time: new Date().toLocaleString()
    };

    messages.push(msg);
    if (messages.length > MAX_MESSAGES) messages.shift();

    // Broadcast new message to everyone
    io.emit('newMessage', msg);
  });

  socket.on('disconnect', () => {
    io.emit('onlineCount', io.engine.clientsCount);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
