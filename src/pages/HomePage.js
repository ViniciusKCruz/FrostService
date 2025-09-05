import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function HomePage() {
  const navigate = useNavigate();

  // Função para lidar com o clique nos botões de login
  const handleLoginClick = (userType) => {
    if (userType === 'CLIENTE') {
      navigate('/login-cliente');
    } else if (userType === 'TÉCNICO/EMPRESA') { // <-- MUDE O 'ELSE' PARA 'ELSE IF'
      // Navega para a rota do login do técnico/empresa
      navigate('/login-tecnico'); // <-- ADICIONE A NAVEGAÇÃO AQUI
    }
  };

  return (
    <div className="login-container">
      {/* O resto do seu componente JSX continua igual... */}
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