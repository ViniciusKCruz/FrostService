import React from 'react';
import Modal from 'react-modal';
import './PerfilTecnicoModal.css';
import { IoChevronForward } from 'react-icons/io5';

Modal.setAppElement('#root');

const PerfilTecnicoModal = ({ isOpen, onRequestClose, tecnico, onEscolher }) => {
  if (!tecnico) return null; // Não renderiza nada se não houver um técnico selecionado

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="perfil-modal"
      overlayClassName="perfil-overlay"
      contentLabel="Perfil do Técnico"
    >
      <div className="perfil-container">
        <h2 className="perfil-title">Perfil</h2>
        <img src={tecnico.profilePicUrl} alt={tecnico.nome} className="perfil-pic" />
        <h3 className="perfil-name">{tecnico.nome}</h3>
        <p className="perfil-email">{tecnico.email}</p>

        <div className="perfil-info-section">
          <h4>Saiba um pouco mais:</h4>
          <div className="info-card">
            <div className="info-card-text">
              <h5>Formação acadêmica</h5>
              <p>Saiba um pouco sobre a formação do nosso colaborador {tecnico.nome.split(' ')[0]}</p>
            </div>
            <IoChevronForward size={24} className="info-card-icon" />
          </div>
          <div className="info-card">
            <div className="info-card-text">
              <h5>Certificados</h5>
              <p>Veja alguns dos certificados do nosso colaborador {tecnico.nome.split(' ')[0]}</p>
            </div>
            <IoChevronForward size={24} className="info-card-icon" />
          </div>
        </div>

        <button className="escolher-tecnico-btn" onClick={onEscolher}>
          Escolher Técnico
        </button>
      </div>
    </Modal>
  );
};

export default PerfilTecnicoModal;