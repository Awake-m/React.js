import React, { useState, useEffect } from 'react';


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() !== '') {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask('');
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div><br/><br/>
      <h1>Local-Storage Todo List</h1><br/><br/>
      <input type="text" value={task} onChange={handleInputChange} placeholder="Add a value"/><br/><br/><br/>
      <button onClick={addTodo}>Add</button><br/><br/>
      <div>
        {todos.map((todo, index) => (
          <h3 key={index}>{todo}</h3>
        ))}
      </div>
    </div>
  );
};

export default Todo;
