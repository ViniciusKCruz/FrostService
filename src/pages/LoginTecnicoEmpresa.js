import React from 'react';
import { Link } from 'react-router-dom';
import './LoginTecnicoEmpresa.css'; 

function LoginTecnico() {
  return (
    <div className="login-tecnico-container">
      <img src="/images/logo-frost-service.png" alt="Logo Frost Service" className="login-logo" />
      <h2 className="login-tecnico-title">Login do Técnico/Empresa</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="cnpj">CPNJ</label>
          <input type="text" id="cnpj" placeholder="CNPJ" required />
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

export default LoginTecnico;