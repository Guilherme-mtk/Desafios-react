import { useState } from 'react';
import React from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [todoId, setTodoId] = useState('');

  function handleClick() {
    if (!todoId) {
      setTodos([
        { id: Math.floor(Math.random() * 100), text: currentText },
        ...todos,
      ]);
    }
    if (todoId) {
      const usersEdite = todos.map((todo) => {
        return todo.id === todoId ? { ...todo, text: currentText } : todo;
      });
      setTodos(usersEdite);
      setTodoId('');
    }
    setCurrentText('');
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function handleEdit(todo) {
    setTodoId(todo.id);
    setCurrentText(todo.text);
  }
  return (
    <div className="container">
      <div className="list-container">
        <div className="div-input">
          <input
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            type="text"
          />
          <button className="btn" onClick={handleClick}>
            {!todoId ? 'Add' : 'Save'}
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleDelete(todo)}>Remove</button>
              <button onClick={() => handleEdit(todo)}>Edite</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
