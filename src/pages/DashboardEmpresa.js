import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// O ícone IoSchool (educação/recursos) foi reimportado
import { IoArrowBack, IoSchool, IoPeople } from 'react-icons/io5';
import './DashboardEmpresa.css';

function DashboardEmpresa() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <button onClick={() => navigate('/')} className="dashboard-back-button">
          <IoArrowBack size={24} />
          Voltar
        </button>
        <h1>Painel da Empresa</h1>
        <div/>
      </header>

      <section className="dashboard-section">
        <h2>Ferramentas e Gestão</h2>
        <div className="ferramentas-grid">
          <Link to="/empresa/cadastro-tecnicos" className="ferramenta-card">
            <IoPeople size={32} />
            <span>Cadastro de Técnicos</span>
          </Link>
          {/* TEXTO, ÍCONE E LINK CORRIGIDOS */}
          <Link to="/empresa/recursos" className="ferramenta-card">
            <IoSchool size={32} />
            <span>Recursos Técnicos</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DashboardEmpresa;