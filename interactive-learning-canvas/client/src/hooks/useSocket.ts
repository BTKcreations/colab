import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = (roomId) => {
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(process.env.REACT_APP_SOCKET_URL);

        socketRef.current.emit('joinRoom', roomId);

        socketRef.current.on('drawing', (data) => {
            // Handle drawing updates from other clients
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId]);

    const sendDrawingUpdate = (data) => {
        socketRef.current.emit('drawing', data);
    };

    return { sendDrawingUpdate };
};

export default useSocket;