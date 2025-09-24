import React from 'react';
import { useNavigate } from 'react-router-dom';
// O caminho do CSS foi corrigido para apontar para o App.css na pasta src
import '../App.css'; 

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = (userType) => {
    if (userType === 'CLIENTE') {
      navigate('/login-cliente');
    } else if (userType === 'TÉCNICO/EMPRESA') {
      // CORREÇÃO: A rota foi ajustada para a correta
      navigate('/login-tecnico-empresa'); 
    }
  };

  return (
    <div className="login-container">
      <img src="/images/logo-frost-service.png" alt="Logo Frost Service" className="login-logo" />
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
      <p className="signup-link">
        Não tem conta? <a href="/cadastro">Cadastre-se</a>
      </p>
    </div>
  );
}

export default HomePage;
