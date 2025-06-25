// src/context/useNotifications.js
import { useContext } from 'react';
import { NotificationContext } from './NotificationContext'; // Importe o Contexto do outro arquivo

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};