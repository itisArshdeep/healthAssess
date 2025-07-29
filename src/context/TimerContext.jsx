import React, { createContext, useState, useEffect, useContext } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([]);
  const [completedTimer, setCompletedTimer] = useState(null);

  useEffect(() => {
    const storedTimers = localStorage.getItem('timers');
    if (storedTimers) {
      setTimers(JSON.parse(storedTimers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
  }, [timers]);

  const addTimer = (newTimer) => {
    setTimers(prev => [...prev, newTimer]);
  };

  const updateTimer = (id, updates) => {
    setTimers(prev =>
      prev.map(timer => {
        if (timer.id !== id) return timer;
        
        const updatedTimer = { ...timer, ...updates };
        
        // Check for completion
        if (updatedTimer.remaining <= 0 && updatedTimer.status === 'Running') {
          updatedTimer.status = 'Completed';
          updatedTimer.remaining = 0;
          setCompletedTimer(updatedTimer);
        }
        
        return updatedTimer;
      })
    );
  };

  const deleteTimer = (id) => {
    setTimers(prev => prev.filter(timer => timer.id !== id));
  };

  const bulkUpdateCategory = (category, updates) => {
    setTimers(prev =>
      prev.map(timer => 
        timer.category === category ? { ...timer, ...updates } : timer
      )
    );
  };

  return (
    <TimerContext.Provider 
      value={{ 
        timers, 
        completedTimer,
        addTimer, 
        updateTimer, 
        deleteTimer,
        bulkUpdateCategory,
        clearCompletedTimer: () => setCompletedTimer(null)
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimers = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimers must be used within a TimerProvider');
  }
  return context;
};