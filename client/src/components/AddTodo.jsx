import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add new todo..."
        className=' my-8 p-2 border border-gray-300 dark:border-gray-700 rounded w-full mb-4 bg-gray-50 dark:bg-gray-800 dark:text-amber-50'
      />
      <div className='flex justify-center'>
        <button type="submit"
        className="bg-blue-500 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full">Add</button>
      </div>
    </form>
  );
}

export default AddTodo;
