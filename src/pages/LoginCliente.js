import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginCliente.css';

function LoginCliente() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Simulando login do cliente...');
    // A rota está correta, levará para a página de serviços
    navigate('/servicos-cliente');
  };

  return (
    <div className="login-cliente-container">
      <img src="/images/logo-frost-service.png" alt="Logo Frost Service" className="login-logo" />
      <h2 className="login-cliente-title">Login do Cliente</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="seuemail@exemplo.com" required />
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

export default LoginCliente;