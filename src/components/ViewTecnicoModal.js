import React from 'react';
import Modal from 'react-modal';
import './ViewTecnicoModal.css'; // Vamos criar este CSS

Modal.setAppElement('#root');

const ViewTecnicoModal = ({ isOpen, onRequestClose, tecnico }) => {
  if (!tecnico) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="view-tecnico-modal"
      overlayClassName="view-tecnico-overlay"
      contentLabel="Informações do Funcionário"
    >
      <div className="view-tecnico-container">
        <h2 className="view-tecnico-title">Detalhes do Funcionário</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Nome Completo</span>
            <span className="info-value">{tecnico.nome}</span>
          </div>

          {/* ADICIONAR CAMPO DE ESPECIALIZAÇÃO */}
          <div className="info-item">
            <span className="info-label">Especialização</span>
            <span className="info-value">{tecnico.especializacao}</span>
          </div>
          
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">{tecnico.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Contato</span>
            <span className="info-value">{tecnico.contato}</span>
          </div>
        </div>
        <button onClick={onRequestClose} className="close-btn-modal">
          Fechar
        </button>
      </div>
    </Modal>
  );
};

export default ViewTecnicoModal;