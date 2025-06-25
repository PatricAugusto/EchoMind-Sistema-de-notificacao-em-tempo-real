import React from 'react';
import { useNotifications } from '../context/useNotifications'; // Importe o hook
import './NotificationTile.css';

const NotificationTile = ({ notification }) => {
  // Desestruturamos as propriedades da notificação
  const { title, message, urgency, category, icon, read, id } = notification;

  // Acessamos as funções do nosso NotificationContext
  const { markAsRead, removeNotification } = useNotifications();

  // Define a classe CSS com base na urgência e no status de leitura
  const tileClasses = `notification-tile ${urgency} ${read ? 'read' : ''}`;

  // Lógica para lidar com o clique no botão "Marcar como Lido"
  const handleMarkAsRead = () => {
    markAsRead(id);
  };

  // Lógica para lidar com o clique no botão "Remover"
  const handleRemove = () => {
    removeNotification(id);
  };

  return (
    <div className={tileClasses}>
      <div className="notification-header">
        <span className="notification-icon">{icon}</span>
        <h3 className="notification-title">{title}</h3>
      </div>
      <p className="notification-message">{message}</p>
      <div className="notification-footer">
        <span className="notification-category">{category}</span>
        <div className="notification-actions">
          {/* Só mostra o botão "Marcar como Lido" se a notificação não estiver lida */}
          {!read && (
            <button onClick={handleMarkAsRead} className="action-button mark-read">
              Marcar como Lido
            </button>
          )}
          <button onClick={handleRemove} className="action-button remove">
            Arquivar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationTile;