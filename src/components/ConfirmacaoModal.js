import React from 'react';
import Modal from 'react-modal';
import './ConfirmacaoModal.css';
import { IoCheckmark } from 'react-icons/io5';

Modal.setAppElement('#root');

const ConfirmacaoModal = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      className="confirm-modal"
      overlayClassName="confirm-overlay"
      contentLabel="Confirmação de Escolha"
    >
      <div className="confirm-content">
        <div className="confirm-icon-wrapper">
          <IoCheckmark size={80} color="white" />
        </div>
        <p className="confirm-text">Aguarde o retorno do técnico</p>
      </div>
    </Modal>
  );
};

export default ConfirmacaoModal;