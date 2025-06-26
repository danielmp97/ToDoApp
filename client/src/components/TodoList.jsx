function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p>No todos yet!</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo._id} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo._id)}
          />
          <span
            style={{
              marginLeft: '0.5rem',
              textDecoration: todo.completed ? 'line-through' : 'none',
              flexGrow: 1
            }}
          >
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo._id)} style={{ marginLeft: '1rem' }}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
