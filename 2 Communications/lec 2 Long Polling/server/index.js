const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');

let data = "initial data";
const waitingClient = [];

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("we are live!!");
})

app.get("/getData", (req, res) => {
    if (data !== req.query.lastData) {
        res.json({
            data
        })
    } else {
        waitingClient.push(res)
    }
})

app.get("/updateData", (req, res) => {
    data = req.query.data;

    while (waitingClient.length > 0) {
        const client = waitingClient.pop();
        client.json({
            data
        })
    }

    res.send({ success: "data updated successfully" })
})

app.listen(PORT, () => {
    console.log(`our app listening on port ${PORT}`);
})
