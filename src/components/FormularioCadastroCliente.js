import React from 'react';
import { Link } from 'react-router-dom';
import './FormularioCadastro.css'; // O CSS compartilhado continua o mesmo

function FormularioCadastroCliente() {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="form-title">REALIZE O SEU CADASTRO</h1>
        <span className="form-subtitle">Cadastro do Cliente</span>
      </div>
      <form className="form-body">
        <div className="input-group">
          <label htmlFor="nome">NOME</label>
          <input type="text" id="nome" placeholder="DIGITE AQUI" />
        </div>
        
        {/* ADICIONADO */}
        <div className="input-group">
          <label htmlFor="telefone">TELEFONE</label>
          <input type="tel" id="telefone" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" placeholder="DIGITE AQUI" />
        </div>

        {/* ADICIONADO */}
        <div className="input-group">
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="senha">SENHA</label>
          <input type="password" id="senha" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="confirme_senha">CONFIRME SUA SENHA</label>
          <input type="password" id="confirme_senha" placeholder="DIGITE AQUI" />
        </div>

        <button type="submit" className="form-submit-button">ENTRAR</button>
      </form>
      <p className="form-footer-link">
        Tem cadastro? <Link to="/">clique aqui</Link>
      </p>
    </div>
  );
}

export default FormularioCadastroCliente;