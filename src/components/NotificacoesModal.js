import React from 'react';
import Modal from 'react-modal';
import { IoChevronForward } from 'react-icons/io5'; // Para a seta de avançar
import './NotificacoesModal.css';

Modal.setAppElement('#root'); // Certifique-se que o id 'root' existe no seu index.html

// Dados de exemplo para as notificações
const mockNotifications = [
  { id: 1, tecnico: 'Henrique Marciel', servico: 'refrigeração' },
  { id: 2, tecnico: 'Jailson Pereira', servico: 'refrigeração' },
  { id: 3, tecnico: 'Jorge Matias', servico: 'refrigeração' },
  { id: 4, tecnico: 'Hamilton Ferreira', servico: 'refrigeração' },
  { id: 5, tecnico: 'Leonardo Magalhães', servico: 'refrigeração' },
  { id: 6, tecnico: 'Anderson Silva', servico: 'refrigeração' },
];

const NotificacoesModal = ({ isOpen, onRequestClose }) => {

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '';

  // Cores para as iniciais (pode ser as mesmas do ListaTecnicos ou personalizar)
  const initialColors = ['#a6bbf4', '#d4a2f4', '#a1f4a1', '#f4a1a1', '#f4d2a1', '#a1e4f4'];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="notificacoes-modal"
      overlayClassName="notificacoes-overlay"
      contentLabel="Notificações"
    >
      <div className="notificacoes-container">
        <h2 className="notificacoes-title">Notificações</h2>
        <h3 className="notificacoes-subtitle">Visualize os serviços solicitados</h3>

        <div className="notificacoes-list">
          {mockNotifications.map((notif, index) => (
            <div key={notif.id} className="notificacao-item">
              <div 
                className="notificacao-initial"
                style={{ backgroundColor: initialColors[index % initialColors.length] }}
              >
                {getInitial(notif.tecnico)}
              </div>
              <div className="notificacao-info">
                <span className="notificacao-tecnico-nome">{notif.tecnico}</span>
                <span className="notificacao-servico">serviço de {notif.servico}</span>
              </div>
              <IoChevronForward size={20} className="notificacao-icon-forward" />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default NotificacoesModal;