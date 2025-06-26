import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const URL  = 'http://localhost:5000'

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos on load
  useEffect(() => {
    axios.get(`${URL}/api/todos`)
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add a new todo
  const addTodo = (newTodo) => {
    axios.post(`${URL}/api/todos`, newTodo)
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
  };

  // Toggle complete status
  const toggleTodo = (id) => {
    axios.put(`${URL}/api/todos/${id}`)
      .then(res => {
        setTodos(prev =>
          prev.map(todo => (todo._id === id ? res.data : todo))
        );
      })
      .catch(err => console.error(err));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    axios.delete(`${URL}/api/todos/${id}`)
      .then(() => {
        setTodos(prev => prev.filter(todo => todo._id !== id));
      })
      .catch(err => console.error(err));
  };


  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem' }}>
      <h1>📝 Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
