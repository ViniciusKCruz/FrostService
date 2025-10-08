import React, { useState } from 'react';
import Modal from 'react-modal';
// O ícone IoArrowBack foi importado para o botão de voltar
import { IoChevronForward, IoArrowBack } from 'react-icons/io5'; 
import './NotificacoesModal.css';

Modal.setAppElement('#root');

// Dados de exemplo atualizados com detalhes do serviço
const mockNotifications = [
  { id: 1, tecnico: 'Henrique Marciel', servico: 'refrigeração', data: '05/10/2025', status: 'Concluído', descricao: 'Troca do compressor da geladeira Brastemp.', valor: 'R$ 450,00' },
  { id: 2, tecnico: 'Jailson Pereira', servico: 'climatização', data: '02/10/2025', status: 'Em andamento', descricao: 'Instalação de ar-condicionado Split no quarto.', valor: 'R$ 700,00' },
  { id: 3, tecnico: 'Jorge Matias', servico: 'refrigeração', data: '28/09/2025', status: 'Agendado', descricao: 'Manutenção preventiva em freezer comercial.', valor: 'R$ 250,00' },
  // ...pode adicionar mais notificações detalhadas aqui
];

const NotificacoesModal = ({ isOpen, onRequestClose }) => {
  // Estado para controlar a vista atual: 'lista' ou 'detalhes'
  const [view, setView] = useState('lista'); 
  // Estado para guardar os dados do serviço selecionado
  const [selectedService, setSelectedService] = useState(null);

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '';
  const initialColors = ['#a6bbf4', '#d4a2f4', '#a1f4a1', '#f4a1a1', '#f4d2a1', '#a1e4f4'];
  
  // Função para mudar para a vista de detalhes
  const handleViewDetails = (notificacao) => {
    setSelectedService(notificacao);
    setView('detalhes');
  };

  // Função para voltar para a lista de notificações
  const handleBackToList = () => {
    setView('lista');
    setSelectedService(null);
  };
  
  // Função para fechar o modal e resetar a vista
  const handleCloseModal = () => {
    onRequestClose();
    // Garante que o modal sempre abra na lista da próxima vez
    setTimeout(() => {
        setView('lista');
        setSelectedService(null);
    }, 300); // Um pequeno atraso para a animação de fecho
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal} // Usa a nova função de fecho
      className="notificacoes-modal"
      overlayClassName="notificacoes-overlay"
      contentLabel="Notificações"
    >
      <div className="notificacoes-container">
        {/* Renderização condicional: mostra a lista ou os detalhes */}
        {view === 'lista' ? (
          <>
            <h2 className="notificacoes-title">Notificações</h2>
            <h3 className="notificacoes-subtitle">Visualize os serviços solicitados</h3>
            <div className="notificacoes-list">
              {mockNotifications.map((notif, index) => (
                // Adiciona o onClick para ver os detalhes
                <div key={notif.id} className="notificacao-item" onClick={() => handleViewDetails(notif)}>
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
          </>
        ) : (
          <>
            <header className="detalhes-header">
                <button onClick={handleBackToList} className="detalhes-back-button">
                    <IoArrowBack size={24} />
                </button>
                <h2 className="notificacoes-title">Detalhes do Serviço</h2>
            </header>
            <div className="detalhes-content">
                <div className="detalhe-item">
                    <strong>Técnico:</strong>
                    <span>{selectedService.tecnico}</span>
                </div>
                <div className="detalhe-item">
                    <strong>Data:</strong>
                    <span>{selectedService.data}</span>
                </div>
                <div className="detalhe-item">
                    <strong>Status:</strong>
                    <span className={`status-tag ${selectedService.status.toLowerCase()}`}>{selectedService.status}</span>
                </div>
                <div className="detalhe-item-column">
                    <strong>Descrição:</strong>
                    <p>{selectedService.descricao}</p>
                </div>
                <div className="detalhe-item">
                    <strong>Valor:</strong>
                    <span>{selectedService.valor}</span>
                </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default NotificacoesModal;