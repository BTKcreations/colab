import { WebSocketServer } from 'ws';
import { Y } from 'yjs';
import { WebsocketProvider } from 'y-websocket';

const wss = new WebSocketServer({ port: 1234 });

wss.on('connection', (ws) => {
  const doc = new Y.Doc();
  const provider = new WebsocketProvider('ws://localhost:1234', 'my-roomname', doc);

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    // Handle incoming messages and update Yjs document
    if (data.type === 'update') {
      const update = Y.encodeStateAsUpdate(doc);
      ws.send(JSON.stringify({ type: 'update', update }));
    }
  });

  ws.on('close', () => {
    provider.destroy();
  });
});

console.log('Yjs WebSocket server is running on ws://localhost:1234');