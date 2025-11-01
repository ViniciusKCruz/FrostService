import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginTecnicoEmpresa.css'; 

function LoginTecnicoEmpresa() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log("Simulando login e redirecionando...");
    // CORREÇÃO: Navegando para a rota exata definida no App.js
    navigate('/empresa/dashboard');
  };

  return (
    <div className="login-tecnico-container">
      <img src="/images/logo-frost-service.png" alt="Logo Frost Service" className="login-logo" />
      <h2 className="login-tecnico-title">Login do Técnico/Empresa</h2>
      
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ/CPF</label>
          <input type="text" id="cnpj" placeholder="Digite seu CNPJ/CPF" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Sua senha" required />
        </div>
        <button type="submit" className="submit-button">
          ENTRAR
        </button>
      </form>
      <Link to="/" className="back-link">
        &larr; Voltar
      </Link>
    </div>
  );
}


export default LoginTecnicoEmpresa;

