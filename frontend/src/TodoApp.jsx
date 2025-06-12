import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Load tasks on mount
  useEffect(() => {
    axios.get(API_URL).then(res => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    const res = await axios.post(API_URL, { title });
    setTasks([...tasks, res.data]);
    setTitle('');
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">📝 To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 w-full"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1">Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="flex justify-between items-center mb-2 border-b pb-1">
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
