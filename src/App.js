import { useState } from 'react';
import './App.css';

function App() {
  
  // Função para lidar com o clique nos botões de login
  const handleLoginClick = (userType) => {
    // Exibe a informação no console do navegador para teste
    console.log(`Botão de login clicado para: ${userType}`);
    
    // No futuro, você pode adicionar a lógica para navegar para outra página aqui.
    // Por exemplo: alert(`Abrindo tela de login para ${userType}`);
  };

  return(
    <div className="login-container">

      {/* IMAGEM DO LOGO ADICIONADA AQUI */}
      <img src="/logo.png" alt="Logo Frost Service" className="login-logo" />

      <h1 className="login-title">LOGIN</h1>
      
      <div className="button-group">
        <button 
          className="login-button"
          onClick={() => handleLoginClick('CLIENTE')}
        >
          CLIENTE
        </button>
        <button 
          className="login-button"
          onClick={() => handleLoginClick('TÉCNICO/EMPRESA')}
        >
          TÉCNICO/EMPRESA
        </button>
      </div>

      {/* FRASE E LINK DE CADASTRO ADICIONADOS AQUI */}
      <p className="signup-link">
        Não tem conta? <a href="/cadastro">Cadastre-se</a>
      </p>

    </div>
  );
}

export default App;
