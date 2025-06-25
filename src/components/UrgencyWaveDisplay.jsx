import React from 'react';
import './UrgencyWaveDisplay.css'; // Criaremos este arquivo de estilos

const UrgencyWaveDisplay = ({ notifications }) => {
  // Calcula o nível de urgência agregado
  // Mapeia urgências para valores numéricos: low=1, medium=2, high=3
  const urgencyValues = notifications.map(notif => {
    if (notif.urgency === 'high') return 3;
    if (notif.urgency === 'medium') return 2;
    return 1; // 'low' ou qualquer outro
  });

  // Soma os valores de urgência
  const totalUrgency = urgencyValues.reduce((sum, value) => sum + value, 0);

  // Define classes baseadas no total de urgência ou na presença de notificações de alta urgência
  let displayClass = '';
  if (notifications.some(notif => notif.urgency === 'high' && !notif.read)) {
    displayClass = 'critical'; // Há pelo menos uma notificação de alta urgência não lida
  } else if (totalUrgency > 5 || notifications.length > 3) { // Regra arbitrária para "ativo"
    displayClass = 'active';
  } else if (notifications.length > 0) {
    displayClass = 'low-activity';
  } else {
    displayClass = 'inactive';
  }

  return (
    <div className={`urgency-wave-display ${displayClass}`}>
      <div className="wave-line wave-line-1"></div>
      <div className="wave-line wave-line-2"></div>
      <div className="wave-line wave-line-3"></div>
      <p className="urgency-status-text">
        {displayClass === 'critical' && 'ALERTA CRÍTICO!'}
        {displayClass === 'active' && 'Atividade Moderada'}
        {displayClass === 'low-activity' && 'Tudo Calmo'}
        {displayClass === 'inactive' && 'Sistema Ocioso'}
      </p>
    </div>
  );
};

export default UrgencyWaveDisplay;