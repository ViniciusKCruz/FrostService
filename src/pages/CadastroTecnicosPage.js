import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoPersonAdd, IoTrash, IoArrowBack } from 'react-icons/io5';
import AddTecnicoModal from '../components/AddTecnicoModal';
// O CSS do dashboard pode ser reutilizado aqui
import './DashboardEmpresa.css';

const tecnicosIniciais = [
  { id: 1, nome: 'Heitor de Oliveira', especializacao: 'Refrigeração', tipoServico: 'Residencial' },
  { id: 2, nome: 'Emanuel Fernandes', especializacao: 'Climatização', tipoServico: 'Comercial' },
  { id: 3, nome: 'Vitor da Silva', especializacao: 'Refrigeração', tipoServico: 'Comercial' },
];

function CadastroTecnicosPage() {
  const [tecnicos, setTecnicos] = useState(tecnicosIniciais);
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  
  const handleAdicionarTecnico = () => setIsAddModalOpen(true);

  const handleSalvarTecnico = (novoTecnicoData) => {
    const novoTecnico = { id: Date.now(), ...novoTecnicoData };
    setTecnicos([...tecnicos, novoTecnico]);
    setIsAddModalOpen(false);
  };

  const handleExcluirTecnico = (idParaExcluir) => {
    setTecnicos(tecnicos.filter(tec => tec.id !== idParaExcluir));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        {/* Botão para voltar ao painel principal */}
        <button onClick={() => navigate('/empresa/dashboard')} className="dashboard-back-button">
          <IoArrowBack size={24} />
          Voltar ao Painel
        </button>
        <h1>Cadastro dos Técnicos</h1>
        <div/>
      </header>

      <section className="dashboard-section">
        <div className="tecnicos-grid">
          {tecnicos.map(tecnico => (
            <div key={tecnico.id} className={`tecnico-card ${tecnico.especializacao.toLowerCase()}`}>
              <div className="card-content">
                <span className="tecnico-card-nome">{tecnico.nome}</span>
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

export default CadastroTecnicosPage;