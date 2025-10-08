import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = (userType) => {
    if (userType === 'CLIENTE') {
      // ALTERAÇÃO: Navega diretamente para a solicitação de serviço
      navigate('/servicos-cliente');
    } else if (userType === 'TÉCNICO/EMPRESA') {
      navigate('/login-tecnico-empresa');
    }
  };

  return (
    <div className="login-container">
      <img src="/images/logo-frost-service.png" alt="Logo Frost Service" className="login-logo" />
      <h1 className="login-title">SEJA BEM-VINDO</h1>
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