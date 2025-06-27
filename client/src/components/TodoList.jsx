function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p className="flex justify-center flex-col items-center space-y-4 text-lg">No To-Do's yet!</p>;

  return (
    <ul className="flex justify-center flex-col items-center space-y-4 text-lg">
      {todos.map(todo => (
        <li key={todo._id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo._id)}
            className="mr-2 size-4 accent-blue-500 dark:accent-blue-700"
          />
          <span>
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo._id)}
            className="ml-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200">
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
