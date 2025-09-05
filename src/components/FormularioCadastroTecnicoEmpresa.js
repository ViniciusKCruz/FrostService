import React from 'react';
import { Link } from 'react-router-dom';
import './FormularioCadastro.css'; // Continua usando o mesmo CSS

function FormularioCadastroTecnicoEmpresa() {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="form-title">REALIZE O SEU CADASTRO</h1>
        <span className="form-subtitle">Cadastro da Empresa</span>
      </div>
      <form className="form-body">
        <div className="input-group">
          <label htmlFor="nome_social">NOME SOCIAL</label>
          <input type="text" id="nome_social" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="nome_fantasia">NOME FANTASIA</label>
          <input type="text" id="nome_fantasia" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" id="cnpj" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="senha">SENHA</label>
          <input type="password" id="senha" placeholder="CRIE UMA SENHA" />
        </div>

        {/* Adicionado por segurança e boa prática */}
        <div className="input-group">
          <label htmlFor="confirme_senha">CONFIRME SUA SENHA</label>
          <input type="password" id="confirme_senha" placeholder="DIGITE A SENHA NOVAMENTE" />
        </div>

        <button type="submit" className="form-submit-button">CADASTRAR</button>
      </form>
      <p className="form-footer-link">
        Tem cadastro? <Link to="/">clique aqui</Link>
      </p>
    </div>
  );
}

export default FormularioCadastroTecnicoEmpresa;