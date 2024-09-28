import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.task}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
