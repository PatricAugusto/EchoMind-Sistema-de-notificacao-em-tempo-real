import React, { useState } from 'react';
import './VoiceCommandButton.css'; // Vamos criar este arquivo de estilos em seguida

const VoiceCommandButton = () => {
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState('');

  const handleVoiceCommand = () => {
    if (!listening) {
      setListening(true);
      setMessage('Ouvindo...');

      // Simula o processamento do comando de voz
      setTimeout(() => {
        setMessage('Comando Reconhecido: Notificação Arquivada!'); // Mensagem de exemplo
        setListening(false);
        // Limpa a mensagem após um tempo
        setTimeout(() => {
          setMessage('');
        }, 2000); // Mensagem visível por 2 segundos
      }, 1500); // Simula 1.5 segundos de "processamento"
    }
  };

  return (
    <div className="voice-command-container">
      <button
        className={`voice-button ${listening ? 'listening' : ''}`}
        onClick={handleVoiceCommand}
        aria-label="Ativar comando de voz"
      >
        🎤
        {/* Opcional: Adicionar um elemento para a animação de ondas */}
        {listening && <span className="wave wave-1"></span>}
        {listening && <span className="wave wave-2"></span>}
        {listening && <span className="wave wave-3"></span>}
      </button>
      {message && <p className="voice-message">{message}</p>}
    </div>
  );
};

export default VoiceCommandButton;