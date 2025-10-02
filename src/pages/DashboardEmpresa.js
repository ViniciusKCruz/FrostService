import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoPersonAdd, IoTrash, IoArrowBack, IoBook, IoVideocam } from 'react-icons/io5';
import AddTecnicoModal from '../components/AddTecnicoModal';
import './DashboardEmpresa.css';

// 1. DADOS INICIAIS ATUALIZADOS COM 'tipoServico'
const tecnicosIniciais = [
  { id: 1, nome: 'Heitor de Oliveira', email: 'heitor@example.com', contato: '(62) 99999-1111', especializacao: 'Refrigeração', tipoServico: 'Residencial' },
  { id: 2, nome: 'Emanuel Fernandes', email: 'emanuel@example.com', contato: '(62) 99999-2222', especializacao: 'Climatização', tipoServico: 'Industrial' },
  { id: 3, nome: 'Vitor da Silva', email: 'vitor@example.com', contato: '(62) 99999-3333', especializacao: 'Refrigeração', tipoServico: 'Industrial' },
];

function DashboardEmpresa() {
  const [tecnicos, setTecnicos] = useState(tecnicosIniciais);
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  
  const handleAdicionarTecnico = () => setIsAddModalOpen(true);

  const handleSalvarTecnico = (novoTecnicoData) => {
    const novoTecnico = {
      id: Date.now(),
      ...novoTecnicoData,
    };
    setTecnicos([...tecnicos, novoTecnico]);
    setIsAddModalOpen(false);
  };

  const handleExcluirTecnico = (idParaExcluir) => {
    setTecnicos(tecnicos.filter(tec => tec.id !== idParaExcluir));
  };

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
        <h2>Ferramentas Rápidas</h2>
        <div className="ferramentas-grid">
          <Link to="/manuais" className="ferramenta-card">
            <IoBook size={32} />
            <span>Manuais</span>
          </Link>
          <Link to="/tutoriais" className="ferramenta-card">
            <IoVideocam size={32} />
            <span>Tutoriais</span>
          </Link>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Cadastro dos Técnicos</h2>
        <div className="tecnicos-grid">
          {tecnicos.map(tecnico => (
            <div key={tecnico.id} className={`tecnico-card ${tecnico.especializacao.toLowerCase()}`}>
              <div className="card-content">
                <span className="tecnico-card-nome">{tecnico.nome}</span>
                {/* 2. EXIBIÇÃO ATUALIZADA PARA MOSTRAR A INFORMAÇÃO COMPLETA */}
                <span className="especializacao-tag">
                  {tecnico.especializacao} {tecnico.tipoServico}
                </span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleExcluirTecnico(tecnico.id);
                }}
                className="excluir-btn"
              >
                <IoTrash size={20} />
              </button>
            </div>
          ))}
          <button className="tecnico-card add-card" onClick={handleAdicionarTecnico}>
            <IoPersonAdd size={24} />
            <span>ADICIONE AQUI</span>
          </button>
        </div>
      </section>

      <AddTecnicoModal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        onSave={handleSalvarTecnico}
      />
    </div>
  );
}

export default DashboardEmpresa;