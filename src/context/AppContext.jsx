// src/context/AppContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('posts')) || [];
    } catch {
      return [];
    }
  });

  const [participants, setParticipants] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('participants')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);
  useEffect(() => {
    localStorage.setItem('participants', JSON.stringify(participants));
  }, [participants]);

  return (
    <AppContext.Provider
      value={{ posts, setPosts, participants, setParticipants }}
    >
      {children}
    </AppContext.Provider>
  );
};
