/* Em src/components/PerfilTecnicoModal.js */
import React, { useState } from 'react';
import Modal from 'react-modal';
import './PerfilTecnicoModal.css';
import { IoChevronForward, IoChevronDown, IoCall, IoMail, IoShieldCheckmark } from 'react-icons/io5';

Modal.setAppElement('#root');

const PerfilTecnicoModal = ({ isOpen, onRequestClose, tecnico, onEscolher }) => {
  const [showServicos, setShowServicos] = useState(false);
  const [showCertificados, setShowCertificados] = useState(false);

  if (!tecnico) return null; 

  const handleClose = () => {
    setShowServicos(false);
    setShowCertificados(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="perfil-modal"
      overlayClassName="perfil-overlay"
      contentLabel="Perfil do Técnico"
    >
      <div className="perfil-container">
        <h2 className="perfil-title">Perfil</h2>
        <img src={tecnico.profilePicUrl} alt={tecnico.nome} className="perfil-pic" />
        <h3 className="perfil-name">{tecnico.nome}</h3>
        
        <div className="perfil-contato-info">
          <div className="contato-item">
            <IoMail size={16} /> <span>{tecnico.email}</span>
          </div>
          <div className="contato-item">
            <IoCall size={16} /> <span>{tecnico.telefone}</span>
          </div>
          <div className="contato-item">
            <IoShieldCheckmark size={16} /> <span>{tecnico.cft}</span>
          </div>
        </div>

        <div className="perfil-info-section">
          
          <div className="info-card" onClick={() => setShowServicos(!showServicos)}>
            <div className="info-card-text">
              <h5>Serviços Prestados</h5>
              <p>Veja os principais serviços deste técnico</p>
            </div>
            {showServicos ? <IoChevronDown size={24} className="info-card-icon" /> : <IoChevronForward size={24} className="info-card-icon" />}
          </div>
          {showServicos && (
            <div className="info-card-content">
              <ul>
                {tecnico.servicos && tecnico.servicos.length > 0 ? (
                  tecnico.servicos.map((servico, index) => (
                    <li key={index}>{servico}</li>
                  ))
                ) : (
                  <li>Nenhum serviço listado.</li>
                )}
              </ul>
            </div>
          )}

          <div className="info-card" onClick={() => setShowCertificados(!showCertificados)}>
            <div className="info-card-text">
              <h5>Certificados</h5>
              <p>Veja os certificados deste colaborador</p>
            </div>
            {showCertificados ? <IoChevronDown size={24} className="info-card-icon" /> : <IoChevronForward size={24} className="info-card-icon" />}
          </div>
          {showCertificados && (
            <div className="info-card-content">
              <ul>
                {tecnico.certificados && tecnico.certificados.length > 0 ? (
                  tecnico.certificados.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))
                ) : (
                  <li>Nenhum certificado listado.</li>
                )}
              </ul>
            </div>
          )}
          
        </div>

        <button className="escolher-tecnico-btn" onClick={onEscolher}>
          Escolher Técnico
        </button>
      </div>
    </Modal>
  );
};

export default PerfilTecnicoModal;