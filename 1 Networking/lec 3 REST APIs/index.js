import express from 'express';

const app = express();
const PORT = 4000;

app.all("/", (req, res) => {
    console.log("Request => ", req);
    console.log("Response => ", res);
    res.send("Namaste Frontend System Design")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
