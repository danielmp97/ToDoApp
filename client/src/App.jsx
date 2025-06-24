import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add a new todo
  const addTodo = (newTodo) => {
    axios.post('http://localhost:5000/api/todos', newTodo)
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem' }}>
      <h1>📝 Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
