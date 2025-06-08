import { WebSocketServer } from 'ws';
import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';
import { Doc } from 'yjs';

const wss = new WebSocketServer({ port: 1234 });
const ydoc = new Doc();
const persistence = new IndexeddbPersistence('collabboard', ydoc);

wss.on('connection', (ws) => {
  const awareness = new Awareness(ydoc);

  // Send the current state to the newly connected client
  ws.send(JSON.stringify({ type: 'init', data: ydoc.toJSON() }));

  // Handle incoming messages
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    if (data.type === 'update') {
      Y.applyUpdate(ydoc, data.update);
      // Broadcast the update to all clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'update', update: data.update }));
        }
      });
    }
  });

  // Handle client disconnect
  ws.on('close', () => {
    awareness.removeLocalState(ws);
  });
});

// Persistence for Yjs document
persistence.on('synced', () => {
  console.log('Yjs document synced with IndexedDB');
});