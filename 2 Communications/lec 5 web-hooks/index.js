// File: server.js
const express = require('express');
const bodyParser = require('body-parser');
const { join } = require("path")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"));
})

// Webhook endpoint
app.post('/webhook', (req, res) => {
    setTimeout(() => {
        const event = req.body;

        // Log the event for debugging purposes
        console.log('Received webhook event:', event);

        // Perform an action based on the event
        if (event.type === 'order.placed') {
            console.log(`Order received with ID: ${event.data.orderId}`);
            // You could update your database, notify users, etc.
        }

        // Respond with a 200 status code to acknowledge receipt of the webhook
        res.status(200).json({
            orderId: event.data.orderId,
            customerName: event.data.customerName
        })
    }, 5000);

});

app.listen(PORT, () => {
    console.log(`Webhook listener running on port ${PORT}`);
});
