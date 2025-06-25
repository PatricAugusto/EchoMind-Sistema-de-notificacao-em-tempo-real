import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Mantenha seus estilos globais
import { NotificationProvider } from './context/NotificationContext'; // Importe o Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider> {/* Envolva o App com o Provider */}
      <App />
    </NotificationProvider>
  </React.StrictMode>,
);