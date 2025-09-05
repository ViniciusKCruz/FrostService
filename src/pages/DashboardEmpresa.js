import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoPersonAdd, IoTrash, IoArrowBack } from 'react-icons/io5';
import AddTecnicoModal from '../components/AddTecnicoModal';
import ViewTecnicoModal from '../components/ViewTecnicoModal';
import './DashboardEmpresa.css';

// Dados iniciais com a especialização
const tecnicosIniciais = [
  { id: 1, nome: 'Heitor de Oliveira', email: 'heitor@example.com', contato: '(62) 99999-1111', especializacao: 'Refrigeração' },
  { id: 2, nome: 'Emanuel Fernandes', email: 'emanuel@example.com', contato: '(62) 99999-2222', especializacao: 'Climatização' },
  { id: 3, nome: 'Vitor da Silva', email: 'vitor@example.com', contato: '(62) 99999-3333', especializacao: 'Refrigeração' },
];

function DashboardEmpresa() {
  const [tecnicos, setTecnicos] = useState(tecnicosIniciais);
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedTecnico, setSelectedTecnico] = useState(null);

  const handleAdicionarTecnico = () => setIsAddModalOpen(true);

  const handleViewTecnico = (tecnico) => {
    setSelectedTecnico(tecnico);
    setIsViewModalOpen(true);
  };

  const handleSalvarTecnico = (novoTecnicoData) => {
    const novoTecnico = {
      id: Date.now(),
      ...novoTecnicoData,
    };
    setTecnicos([...tecnicos, novoTecnico]);
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
        <h1>Cadastro dos Técnicos</h1>
      </header>

      <div className="tecnicos-grid">
        {tecnicos.map(tecnico => (
          <div key={tecnico.id} className={`tecnico-card ${tecnico.especializacao.toLowerCase()}`} onClick={() => handleViewTecnico(tecnico)}>
            <div className="card-content">
              <span className="tecnico-card-nome">{tecnico.nome}</span>
              <span className="especializacao-tag">{tecnico.especializacao}</span>
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

        {/* =============================================================== */}
        {/* O CARD DE ADICIONAR QUE ESTAVA FALTANDO FOI RECOLOCADO AQUI */}
        {/* =============================================================== */}
        <button className="tecnico-card add-card" onClick={handleAdicionarTecnico}>
          <IoPersonAdd size={24} />
          <span>ADICIONE AQUI</span>
        </button>
      </div>

      <AddTecnicoModal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        onSave={handleSalvarTecnico}
      />

      <ViewTecnicoModal
        isOpen={isViewModalOpen}
        onRequestClose={() => setIsViewModalOpen(false)}
        tecnico={selectedTecnico}
      />
    </div>
  );
}

export default DashboardEmpresa;