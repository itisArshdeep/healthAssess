import React, { useState } from 'react';
import { useTimers } from '../../context/TimerContext';
import Header from '../Header/Header';

const AddTimer = () => {
  const { timers, addTimer } = useTimers();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('Workout');
  const [error, setError] = useState('');

  const categories = ['Workout', 'Study', 'Break', 'Cooking', 'Meditation'];

  const handleAddTimer = () => {
    if (!name.trim()) {
      setError('Please enter a timer name');
      return;
    }
    if (!duration || isNaN(duration) || Number(duration) <= 0) {
      setError('Please enter a valid duration (positive number)');
      return;
    }

    const newTimer = {
      id: Date.now(),
      name: name.trim(),
      duration: Math.floor(Number(duration)),
      remaining: Math.floor(Number(duration)),
      category: category.trim(),
      status: 'Paused',
      createdAt: new Date().toISOString()
    };

    addTimer(newTimer);
    
    setName('');
    setDuration('');
    setCategory('Workout');
    setError('');
  };

  return (
    <>
    <Header/>
    <div className="max-w-md mt-12 mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Timer</h2>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Timer Name</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Morning Routine"
          maxLength={50}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Duration (seconds)</label>
        <input
          type="number"
          min="1"
          className="w-full border px-3 py-2 rounded-md"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="300"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          className="w-full border px-3 py-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAddTimer}
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition font-medium"
      >
        Add Timer
      </button>

      {timers.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">Recent Timers</h3>
          <ul className="space-y-2">
            {timers.slice(-3).reverse().map((timer) => (
              <li key={timer.id} className="border p-3 rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">{timer.name}</span>
                  <span className="text-gray-600">{timer.duration}s</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{timer.category}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default AddTimer;