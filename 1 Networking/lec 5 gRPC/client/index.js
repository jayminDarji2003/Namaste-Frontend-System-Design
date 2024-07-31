const client = require("./client");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// TODO to expose REST call
// which internally call gRPC server functions using gRPC client

const PORT = 4000;

app.listen(PORT, () => {
    console.log("server listening on port 4000")
})