import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
// import { setupYjsServer } from './yjsServer';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware to serve static files
app.use(express.static('public'));

// Setup Yjs server for conflict-free syncing
setupYjsServer(io);

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Additional socket events can be handled here
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export setupYjsServer if not already exported
export function setupYjsServer(io: import('socket.io').Server) {
    // Implementation here or ensure this function matches your actual logic
}