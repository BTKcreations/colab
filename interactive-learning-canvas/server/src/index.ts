import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { setupSocket } from './socket';
import { setupYjs } from './yjsServer';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware to serve static files
app.use(express.static('public'));

// Setup Socket.IO
setupSocket(io);

// Setup Yjs for real-time collaboration
setupYjs(io);

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});