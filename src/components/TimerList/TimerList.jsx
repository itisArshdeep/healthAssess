import React, { useState, useEffect, useRef } from 'react';
import { useTimers } from '../../context/TimerContext';
import Header from '../Header/Header';


const TimerList = () => {
  const { 
    timers, 
    completedTimer, 
    updateTimer, 
    deleteTimer, 
    bulkUpdateCategory,
    clearCompletedTimer 
  } = useTimers();
  
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const intervalRef = useRef(null);

  // Handle timer completion
  useEffect(() => {
    if (completedTimer) {
      setShowCompletionModal(true);
    }
  }, [completedTimer]);

  // Timer countdown logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      timers.forEach(timer => {
        if (timer.status === 'Running' && timer.remaining > 0) {
          updateTimer(timer.id, { remaining: timer.remaining - 1 });
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timers, updateTimer]);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleTimerAction = (id, action) => {
    switch (action) {
      case 'start':
        updateTimer(id, { status: 'Running' });
        break;
      case 'pause':
        updateTimer(id, { status: 'Paused' });
        break;
      case 'reset':
        const timer = timers.find(t => t.id === id);
        if (timer) {
          updateTimer(id, { 
            remaining: timer.duration, 
            status: 'Paused' 
          });
        }
        break;
      default:
        break;
    }
  };

  const handleBulkAction = (category, action) => {
    switch (action) {
      case 'start':
        bulkUpdateCategory(category, { status: 'Running' });
        break;
      case 'pause':
        bulkUpdateCategory(category, { status: 'Paused' });
        break;
      case 'reset':
        bulkUpdateCategory(category, prev => ({ 
          remaining: prev.duration, 
          status: 'Paused' 
        }));
        break;
      default:
        break;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const calculateProgress = (remaining, duration) => {
    return Math.max(0, Math.min(100, (remaining / duration) * 100));
  };

  const groupedTimers = timers.reduce((acc, timer) => {
    if (!acc[timer.category]) acc[timer.category] = [];
    acc[timer.category].push(timer);
    return acc;
  }, {});

  return (
    <>
    <Header/>
    <div className="max-w-3xl mt-12 mx-auto p-4">
      {/* Completion Modal */}
      {showCompletionModal && completedTimer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Timer Complete!</h3>
            <p className="text-lg mb-4">
              Your timer "<span className="font-semibold">{completedTimer.name}</span>" has completed!
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowCompletionModal(false);
                  clearCompletedTimer();
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-8 text-center">Your Timers</h1>
      
      {Object.keys(groupedTimers).length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No timers created yet. Add some timers to get started!
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedTimers).map(([category, categoryTimers]) => (
            <div key={category} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
                <button
                  className="flex-1 text-left font-semibold text-lg"
                  onClick={() => toggleCategory(category)}
                >
                  {category} ({categoryTimers.length})
                </button>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBulkAction(category, 'start')}
                    className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                  >
                    Start All
                  </button>
                  <button
                    onClick={() => handleBulkAction(category, 'pause')}
                    className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                  >
                    Pause All
                  </button>
                  <button
                    onClick={() => handleBulkAction(category, 'reset')}
                    className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                  >
                    Reset All
                  </button>
                </div>
              </div>

              {expandedCategories[category] && (
                <div className="divide-y">
                  {categoryTimers.map(timer => (
                    <div key={timer.id} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-lg">{timer.name}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              timer.status === 'Running' ? 'bg-green-100 text-green-800' :
                              timer.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {timer.status}
                            </span>
                            <span className="text-gray-600">
                              {formatTime(timer.remaining)} / {formatTime(timer.duration)}
                            </span>
                            <span className="text-sm font-medium">
                              {calculateProgress(timer.remaining, timer.duration).toFixed(0)}%
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {timer.status !== 'Completed' && (
                            <>
                              {timer.status !== 'Running' && (
                                <button
                                  onClick={() => handleTimerAction(timer.id, 'start')}
                                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm"
                                >
                                  Start
                                </button>
                              )}
                              {timer.status === 'Running' && (
                                <button
                                  onClick={() => handleTimerAction(timer.id, 'pause')}
                                  className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-sm"
                                >
                                  Pause
                                </button>
                              )}
                              <button
                                onClick={() => handleTimerAction(timer.id, 'reset')}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                              >
                                Reset
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => deleteTimer(timer.id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div 
                          className={`h-2.5 rounded-full ${
                            timer.status === 'Completed' ? 'bg-blue-500' :
                            timer.status === 'Running' ? 'bg-green-500' : 'bg-gray-400'
                          }`} 
                          style={{ 
                            width: `${calculateProgress(timer.remaining, timer.duration)}%`,
                            transition: 'width 1s linear'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default TimerList;