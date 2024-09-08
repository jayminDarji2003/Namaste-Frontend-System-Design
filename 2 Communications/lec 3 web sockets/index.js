const express = require('express');
const { createServer } = require("http");
const { join } = require('path');
const { Server } = require("socket.io");

const PORT = 4000;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on("message", (msg) => {
        console.log("received message", msg);
        io.emit("message", msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Our app is listening at ${PORT}`);
});
