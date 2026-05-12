import React from 'react';

const Detalhes: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📍 Detalhes da Cidade</h1>

      <p>
        Aqui serão exibidas informações detalhadas da previsão do tempo.
      </p>

      <ul>
        <li>🌡️ Temperatura</li>
        <li>💧 Umidade</li>
        <li>🌬️ Velocidade do vento</li>
        <li>☁️ Condição climática</li>
      </ul>
    </div>
  );
};

export default Detalhes;