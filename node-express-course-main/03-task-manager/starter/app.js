const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/task");

//middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Task Mannager app");
});

// app.get("/api/v1/tasks", (req, res)) // get all the tasks
// app.post("/api/v1/tasks", (req, res)) // create a new task
// app.

app.listen(port, () => {
  console.log(`server is good ${port}`);
});
