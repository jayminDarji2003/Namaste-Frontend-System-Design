import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 4000;
let data = "Initial data";
let num = 1;

// Get the current file path and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/get-data", (req, res) => {
    res.send({
        data
    })
})

app.get("/update-data", (req, res) => {
    ++num;
    data = "updated data " + num;
    res.send({
        data
    })
})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
