import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());  // to parse data to json formate. when user send POST/PUT/PATCH request and where he/she make your data like : JSON.stringify({data})

app.all("/", (req, res) => {
    //     console.log("Request => ", req);
    //     console.log("Response => ", res);
    res.send("<h1>hello world!</h1>");
})

// our todos
const todos = [
    {
        id: "1",
        title: "Task 1",
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        completed: true,
    },
    {
        id: "3",
        title: "Task 3",
        completed: false,
    },
]

// read
app.get("/todos", (req, res) => {
    res.json(todos);
})

// create 
app.post("/create-todo", (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json({  // 201 - created
        success: true,
        message: "todo created successfully"
    })
})

// update
app.put("/update-todo/:id", (req, res) => {
    // get id of todo
    const { id } = req.params;
    const newTodoData = req.body;

    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
        todos[todoIndex] = {
            id: id,
            ...newTodoData
        }
    }

    res.json({
        success: true,
        message: "todo updated successfully"
    })
})


// delete todo
app.delete("/delete-todo/:id", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
    }

    res.json({
        success: true,
        message: "todo deleted successfully"
    })
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

     