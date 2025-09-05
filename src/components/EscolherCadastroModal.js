import React from 'react';
import Modal from 'react-modal';
import './EscolherCadastroModal.css';

// Vincula o modal ao elemento raiz do seu app para acessibilidade
Modal.setAppElement('#root');

function EscolhaCadastroModal({ isOpen, onClose, onSelectTipo }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
      contentLabel="Escolha o Tipo de Cadastro"
    >
      <h2 className="modal-title">Escolha o tipo de cadastro</h2>
      <p className="modal-subtitle">Você está se cadastrando como cliente ou como um profissional?</p>
      <div className="modal-button-group">
        <button
          className="modal-button cliente"
          onClick={() => onSelectTipo('cliente')}
        >
          SOU CLIENTE
        </button>
        <button
          className="modal-button tecnico"
          onClick={() => onSelectTipo('tecnico')}
        >
          SOU TÉCNICO/EMPRESA
        </button>
      </div>
    </Modal>
  );
}

export default EscolhaCadastroModal;