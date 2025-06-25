// src/context/NotificationContext.jsx
import React, { createContext, useState } from 'react';

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  markAsRead: () => {},
  removeNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  // Adiciona um contador para gerar IDs únicos garantidos
  const [idCounter, setIdCounter] = useState(0); 

  const addNotification = (newNotification) => {
  setNotifications((prevNotifications) => {
    // Garanta que uniqueId seja uma string simples, como '1750623855807-0'
    const uniqueId = `${Date.now()}-${idCounter}`; 
    const notificationToAdd = { ...newNotification, id: uniqueId, read: false };
    
    setIdCounter(prevCounter => prevCounter + 1); 

    return [notificationToAdd, ...prevNotifications];
  });
};

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };

  const contextValue = {
    notifications,
    addNotification,
    markAsRead,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext };