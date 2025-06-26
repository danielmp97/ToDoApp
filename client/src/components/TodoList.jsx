function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p>No todos yet!</p>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo._id)}
          />
          <span>
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo._id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
