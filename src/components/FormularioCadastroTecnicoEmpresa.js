import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircle, IoArrowBack } from 'react-icons/io5';
import './FormularioCadastro.css';

function FormularioCadastroTecnicoEmpresa() {
  const [step, setStep] = useState(1); // 1: Seleção de Plano, 2: Formulário
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plano) => {
    setSelectedPlan(plano);
    setStep(2); // Avança para o formulário
    // Rola para o topo para garantir que o usuário veja o início do formulário
    window.scrollTo(0, 0);
  };

  // Se estiver no passo 1, mostra os planos
  if (step === 1) {
    return (
      <div className="form-container plans-mode">
        <div className="form-header">
          <h1 className="form-title">ESCOLHA SEU PLANO</h1>
          <span className="form-subtitle">Para continuar o cadastro</span>
        </div>

        <div className="planos-grid-mini">
          {/* Plano Básico */}
          <div className="plano-card-mini">
            <div className="plano-header">
              <h3>Básico</h3>
              <span className="preco">R$ 49<small>/mês</small></span>
            </div>
            <ul className="plano-features">
              <li><IoCheckmarkCircle className="icon-check" /> Acesso ao Painel</li>
              <li><IoCheckmarkCircle className="icon-check" /> Até <strong>3 técnicos</strong></li>
            </ul>
            <button className="plano-btn" onClick={() => handleSelectPlan('Básico')}>Selecionar</button>
          </div>

          {/* Plano Profissional */}
          <div className="plano-card-mini destaque">
            <div className="badge-popular">POPULAR</div>
            <div className="plano-header">
              <h3>Profissional</h3>
              <span className="preco">R$ 70<small>/mês</small></span>
            </div>
            <ul className="plano-features">
              <li><IoCheckmarkCircle className="icon-check" /> Acesso Completo</li>
              <li><IoCheckmarkCircle className="icon-check" /> Até <strong>10 técnicos</strong></li>
              <li><IoCheckmarkCircle className="icon-check" /> Tutoriais em Vídeo</li>
            </ul>
            <button className="plano-btn destaque-btn" onClick={() => handleSelectPlan('Profissional')}>Selecionar</button>
          </div>

          {/* Plano Industrial */}
          <div className="plano-card-mini">
            <div className="plano-header">
              <h3>Industrial</h3>
              <span className="preco">R$ 150<small>/mês</small></span>
            </div>
            <ul className="plano-features">
              <li><IoCheckmarkCircle className="icon-check" /> Tudo Ilimitado</li>
              <li><IoCheckmarkCircle className="icon-check" /> Gestão de Frota</li>
            </ul>
            <button className="plano-btn" onClick={() => handleSelectPlan('Industrial')}>Selecionar</button>
          </div>
        </div>
      </div>
    );
  }

  // Se estiver no passo 2, mostra o formulário (Seu código original + Botão Voltar)
  return (
    <div className="form-container">
      <div className="form-header">
        {/* Botão para voltar à seleção de planos */}
        <button onClick={() => setStep(1)} className="back-step-btn">
            <IoArrowBack size={24} /> 
        </button>
        <h1 className="form-title">REALIZE O SEU CADASTRO</h1>
        <span className="form-subtitle">Plano Selecionado: <strong>{selectedPlan}</strong></span>
      </div>
      
      <form className="form-body">
        <div className="input-group">
          <label htmlFor="nome_social">NOME SOCIAL</label>
          <input type="text" id="nome_social" placeholder="DIGITE AQUI" required />
        </div>

        <div className="input-group">
          <label htmlFor="nome_fantasia">NOME FANTASIA</label>
          <input type="text" id="nome_fantasia" placeholder="DIGITE AQUI" required />
        </div>

        <div className="input-group">
          <label htmlFor="cnpj">CNPJ/CPF</label>
          <input type="text" id="cnpj" placeholder="DIGITE AQUI" required />
        </div>

        <div className="input-group">
          <label htmlFor="crt">CRT</label>
          <input type="text" id="crt" placeholder="DIGITE AQUI" />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" placeholder="DIGITE AQUI" required />
        </div>

        <div className="input-group">
          <label htmlFor="senha">SENHA</label>
          <input type="password" id="senha" placeholder="CRIE UMA SENHA" required />
        </div>

        <div className="input-group">
          <label htmlFor="confirme_senha">CONFIRME SUA SENHA</label>
          <input type="password" id="confirme_senha" placeholder="DIGITE A SENHA NOVAMENTE" required />
        </div>

        <button type="submit" className="form-submit-button">CADASTRAR</button>
      </form>
      <p className="form-footer-link">
        Tem cadastro? <Link to="/login-tecnico-empresa">clique aqui</Link>
      </p>
    </div>
  );
}

export default FormularioCadastroTecnicoEmpresa;