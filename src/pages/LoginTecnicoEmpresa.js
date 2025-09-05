import React from 'react';
// 1. IMPORTAR 'useNavigate' JUNTO COM O 'Link'
import { Link, useNavigate } from 'react-router-dom';
import './LoginTecnicoEmpresa.css'; 

function LoginTecnico() {
  // 2. INICIALIZAR O HOOK DE NAVEGAÇÃO
  const navigate = useNavigate();

  // 3. CRIAR A FUNÇÃO QUE SERÁ CHAMADA NO LOGIN
  const handleLogin = (event) => {
    // Impede que a página seja recarregada (comportamento padrão do form)
    event.preventDefault(); 
    
    console.log("Simulando login e redirecionando...");

    // Navega para a página de dashboard da empresa
    navigate('/empresa/dashboard');
  };

  return (
    <div className="login-tecnico-container">
      <img src="/images/logo-frost-service.png" alt="Logo Frost Service" className="login-logo" />
      <h2 className="login-tecnico-title">Login do Técnico/Empresa</h2>
      
      {/* 4. ADICIONAR o 'onSubmit' AO FORMULÁRIO */}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ</label> {/* Corrigido de CPNJ */}
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