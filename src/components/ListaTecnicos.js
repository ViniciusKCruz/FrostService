import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import PerfilTecnicoModal from './PerfilTecnicoModal';
import ConfirmacaoModal from './ConfirmacaoModal';
import './ListaTecnicos.css';

// A constante 'avatars' foi removida, pois usaremos o profilePicUrl
// A constante 'initialColors' foi removida, pois não há mais lista de texto

const ListaTecnicos = ({ especialidade, featuredTecnicos, todosTecnicos }) => {
  const navigate = useNavigate();

  // --- LÓGICA DOS MODAIS (Mantida) ---
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedTecnico, setSelectedTecnico] = useState(null);

  const handleTecnicoClick = (tecnico) => {
    setSelectedTecnico(tecnico);
    setPerfilModalOpen(true);
  };

  const handleEscolherTecnico = () => {
    setPerfilModalOpen(false);
    setConfirmModalOpen(true);

    setTimeout(() => {
      setConfirmModalOpen(false);
      navigate('/servicos-cliente'); 
    }, 3000);
  };
  // --- FIM DA LÓGICA DOS MODAIS ---

  return (
    <div className="tecnicos-page-container">
        {/* Este wrapper cria o "cartão" branco centralizado */}
        <div className="tecnicos-content-wrapper">
          <header className="tecnicos-header">
            <button onClick={() => navigate(-1)} className="back-button">
              <IoArrowBack size={24} />
            </button>
            {/* Título atualizado para usar a 'especialidade' */}
            <h1>Especialistas em {especialidade}</h1>
          </header>

          <main className="tecnicos-content">
            {/* Secção principal agora é a grelha de perfis */}
            <section className="tecnico-grid-section">
              <div className="tecnico-grid">
                {/* Iteramos sobre TODOS os técnicos */}
                {todosTecnicos.map((tec) => (
                  // O onClick agora passa o objeto 'tec' completo
                  <div key={tec.id} className="tecnico-perfil-card" onClick={() => handleTecnicoClick(tec)}>
                    {/* Usamos a 'profilePicUrl' de cada técnico */}
                    <img src={tec.profilePicUrl} alt={tec.nome} />
                    {/* Exibimos apenas o primeiro nome */}
                    <span>{tec.nome.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* A SECÇÃO "list-section" (lista de texto) FOI REMOVIDA */}
            
          </main>
        </div>

      {/* RENDERIZAÇÃO DOS MODAIS (Mantida) */}
      <PerfilTecnicoModal
        isOpen={perfilModalOpen}
        onRequestClose={() => setPerfilModalOpen(false)}
        tecnico={selectedTecnico}
        onEscolher={handleEscolherTecnico}
      />
      
      <ConfirmacaoModal isOpen={confirmModalOpen} />
    </div>
  );
};

export default ListaTecnicos;