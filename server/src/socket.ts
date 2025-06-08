import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);

    socket.on("draw", (data) => {
        socket.broadcast.emit("draw", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    });
});

export default io;