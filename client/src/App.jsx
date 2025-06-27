import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const URL  = 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);

  const [darkMode, setDarkMode] = useState(() => {
    // Read saved value from localStorage or default to false
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  // Sync <html> class and localStorage when darkMode changes
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
    <div className="bg-white dark:bg-black font-sans text-black dark:text-amber-50 h-screen">
      <button className="p-3 m-4 bg-gray-200 dark:bg-gray-800 dark:text-amber-50 rounded-2xl float-right"
        onClick={() => setDarkMode(prev => !prev)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div className='max-w-2xl mx-auto p-4'>
        <h1 className='text-4xl text-center font-bold'>My To-Do App</h1>
        <AddTodo onAdd={addTodo} />
        <div className='mt-4'>
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
} 

export default App;
