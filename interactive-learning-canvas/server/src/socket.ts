import { Server } from "socket.io";
import { Y } from "yjs";
import { WebsocketProvider } from "y-websocket";

const socketHandler = (server) => {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("A user connected");

        const ydoc = new Y.Doc();
        const provider = new WebsocketProvider("ws://localhost:1234", "whiteboard", ydoc);

        const yText = ydoc.getText("whiteboard");

        // Broadcast updates to all clients
        yText.observe(() => {
            io.emit("drawing-update", yText.toJSON());
        });

        socket.on("drawing", (data) => {
            yText.insert(0, data);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
            provider.destroy();
        });
    });
};

export default socketHandler;