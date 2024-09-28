import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };
  return (
    <div className="App">
      <h1>Student To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => e.key === 'Enter' && addTodo(e.target.value)}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
