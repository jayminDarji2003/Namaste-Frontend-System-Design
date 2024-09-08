const express = require('express');
const { join } = require("path");

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

// sse - server sent event
app.get("/sse", (req, res) => {
    // sse logic goes here
    res.setHeader("content-type", "text/event-stream");
    res.setHeader("connection", "keep-alive");
    res.setHeader("Cache-Control", "no-cache");

    res.write(`data: welcome to server sent event \n\n`);

    const intervalId = setInterval(() => {
        res.write(`data: server time ${new Date().toLocaleTimeString()} \n\n`);
    }, 1000);

    req.on("close", () => {
        clearInterval(intervalId);
    });
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
