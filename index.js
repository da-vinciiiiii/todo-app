const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = { task, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
