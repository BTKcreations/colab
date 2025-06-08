import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000'; // Update with your server URL

const useSocket = () => {
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = io(SOCKET_SERVER_URL);

        socketRef.current.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socketRef.current.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendMessage = (message) => {
        if (socketRef.current) {
            socketRef.current.emit('message', message);
        }
    };

    const onMessage = (callback) => {
        if (socketRef.current) {
            socketRef.current.on('message', callback);
        }
    };

    return { sendMessage, onMessage };
};

export default useSocket;