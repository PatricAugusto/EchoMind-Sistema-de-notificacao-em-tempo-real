// src/context/NotificationContext.jsx
import React, { createContext, useState, useRef } from 'react'; // <--- Adicione useRef

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  markAsRead: () => {},
  removeNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  // Substitua useState por useRef para o contador de IDs
  const notificationIdCounter = useRef(0); // <--- Use useRef aqui

  const addNotification = (newNotification) => {
    setNotifications((prevNotifications) => {
      // Incrementa o contador do useRef imediatamente
      notificationIdCounter.current += 1; // <--- Incrementa o valor de .current

      // Gera o ID ÚNICO usando o valor ATUALIZADO do useRef
      const uniqueId = `${Date.now()}-${notificationIdCounter.current}`; 

      const notificationToAdd = { ...newNotification, id: uniqueId, read: false };

      // Opcional: Adicione este console.log para inspecionar os IDs gerados
      // console.log('Adicionando notificação com ID:', uniqueId, 'e contador:', notificationIdCounter.current); 

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