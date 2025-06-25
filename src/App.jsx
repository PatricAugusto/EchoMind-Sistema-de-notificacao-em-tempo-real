// src/App.jsx
import React, { useEffect, useState, useMemo, useRef, Suspense, lazy } from 'react'; // <--- Suspense e lazy devem estar aqui
import { useNotifications } from './context/useNotifications';
import FilterStream from './components/FilterStream';
import VoiceCommandButton from './components/VoiceCommandButton';
import UrgencyWaveDisplay from './components/UrgencyWaveDisplay';

// Otimização de Performance: Carregamento dinâmico do NotificationTile
// ESTA LINHA DEVE ESTAR AQUI, FORA DA FUNÇÃO 'App'
const LazyNotificationTile = lazy(() => import('./components/NotificationTile'));

// Dados de exemplo para simular notificações (mantidos os mesmos)
const mockNotifications = [
  {
    type: 'email',
    category: 'Essencial',
    title: 'Nova Mensagem: Reunião Urgente',
    message: 'Por favor, revise os detalhes da reunião de emergência amanhã às 9h.',
    urgency: 'high',
    icon: '✉️'
  },
  {
    type: 'calendar',
    category: 'Rotina',
    title: 'Lembrete: Apresentação Projeto X',
    message: 'Sua apresentação do Projeto X começa em 30 minutos na sala 203.',
    urgency: 'medium',
    icon: '📅'
  },
  {
    type: 'reminder',
    category: 'Pessoal',
    title: 'Comprar Leite',
    message: 'Não se esqueça de passar no supermercado e comprar leite e pão.',
    urgency: 'low',
    icon: '🛒'
  },
  {
    type: 'social',
    category: 'Social',
    title: 'Novo Comentário: Sua Postagem',
    message: '@usuario_xyz comentou em sua foto recente.',
    urgency: 'low',
    icon: '💬'
  },
  {
    type: 'email',
    category: 'Essencial',
    title: 'Fatura Vencida: Serviço Cloud',
    message: 'Sua fatura de serviço cloud venceu. Regularize para evitar interrupções.',
    urgency: 'high',
    icon: '⚠️'
  },
];

function App() {
  const { notifications, addNotification } = useNotifications();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const notificationIndexRef = useRef(0);
  const categories = ['Essencial', 'Rotina', 'Social', 'Pessoal'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (notificationIndexRef.current < mockNotifications.length) {
        const newNotification = mockNotifications[notificationIndexRef.current];
        addNotification(newNotification);
        notificationIndexRef.current++;
      } else {
        notificationIndexRef.current = 0;
        console.log('Reiniciando a simulação de notificações...');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [addNotification]);

  const filteredNotifications = useMemo(() => {
    if (activeFilter === 'Todos') {
      return notifications;
    }
    return notifications.filter((notif) => notif.category === activeFilter);
  }, [notifications, activeFilter]);

  return (
    <div className="App">
      <h1>EchoMind - Painel de Notificações</h1>
      {/* Adicione o UrgencyWaveDisplay aqui */}
      <UrgencyWaveDisplay notifications={notifications.filter(n => !n.read)} /> {/* Passa apenas notificações não lidas */}

      <p>Total de notificações: {notifications.length}</p>

      <FilterStream
        categories={categories}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

     <div className="notification-panel">
        {filteredNotifications.length > 0 ? (
          <Suspense fallback={<div>Carregando Notificações...</div>}>
            {filteredNotifications.map((notif) => (
              // E ESTA LINHA AQUI USA O QUE FOI DEFINIDO LÁ EM CIMA
              <LazyNotificationTile key={notif.id} notification={notif} />
            ))}
          </Suspense>
        ) : (
          <p>Nenhuma notificação encontrada para esta categoria.</p>
        )}
      </div>

      <VoiceCommandButton />
    </div>
  );
}

export default App;