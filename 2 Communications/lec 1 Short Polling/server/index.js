import express from 'express';

const app = express();
const PORT = 4000;

const data = [
    {
        name: "Aaradhya Patel",
        course: "Namaste React"
    },
    {
        name: "Deep Patel",
        course: "Namaste React"
    },
    {
        name: "Jeel Darji",
        course: "Namaste Frontend System Design"
    },
    {
        name: "Mayannk Goel",
        course: "Namaste React"
    },
    {
        name: "Adhya Patel",
        course: "Namaste Frontend System Design"
    },
    {
        name: "Aditya Patel",
        course: "Namaste React"
    },
    {
        name: "Shivani Patel",
        course: "Namaste Frontend System Design"
    },
    {
        name: "Adash Patel",
        course: "Namaste React"
    },
    {
        name: "Devang Darji",
        course: "Namaste React"
    },
    {
        name: "Ayush Nayak",
        course: "Namaste Frontend System Design"
    },
]

let num = 0;

app.get("/", (req, res) => {
    res.send("Hello server is started!!");
});

app.get("/get-data", (req, res) => {
    if (num === 9) {
        num = 0;
    }
    num++;
    res.json({
        data: data[num],
        num: num
    })
})

// app.get("/update-data", (req, res) => {
//     ++num;
//     data = "updated data " + num;
//     res.send({
//         data
//     })
// })

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
