function TodoList({ todos }) {
  if (!todos.length) return <p>No todos yet!</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo._id} style={{ padding: '0.5rem 0' }}>
          <input type="checkbox" checked={todo.completed} readOnly />
          <span style={{ marginLeft: '0.5rem', textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
