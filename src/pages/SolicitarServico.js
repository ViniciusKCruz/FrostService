import React, { useState } from 'react'; // Importar useState
import { useNavigate } from 'react-router-dom';
import './SolicitarServico.css';
import { IoArrowBack, IoNotifications } from 'react-icons/io5'; // MUDAR IoSettingsSharp para IoNotifications
import NotificacoesModal from '../components/NotificacoesModal'; // IMPORTAR O NOVO MODAL

function SolicitarServico() {
  const navigate = useNavigate();

  // Estado para controlar o modal de notificações
  const [notificacoesModalOpen, setNotificacoesModalOpen] = useState(false);

  // Função para o botão de voltar
  const handleGoBack = () => {
    navigate('/login-cliente');
  };

  // ATUALIZADO: Navega para a página correta
  const handleSelectService = (serviceType) => {
    if (serviceType === 'Refrigeração') {
      navigate('/tecnicos/refrigeracao');
    } else if (serviceType === 'Climatização') {
      navigate('/tecnicos/climatizacao');
    }
  };

  return (
    <div className="servico-container">
      <div className="servico-content-wrapper"> {/* Mantém o wrapper para centralizar */}
        <header className="servico-header">
          <button onClick={handleGoBack} className="header-icon-button">
            <IoArrowBack size={24} />
          </button>
          <h1 className="servico-title">SOLICITE O SEU SERVIÇO</h1>
          {/* BOTÃO DE NOTIFICAÇÕES - Adicionado onClick */}
          <button 
            className="header-icon-button notificacoes-button" // Adicionei uma classe para estilização específica, se precisar
            onClick={() => setNotificacoesModalOpen(true)} // Abre o modal
          >
            <IoNotifications size={24} /> {/* NOVO ÍCONE */}
          </button>
        </header>

        <main className="servico-main-content"> {/* Mudei para main-content para não confundir com o wrapper */}
          <div className="servico-item">
            <button 
              className="servico-button"
              onClick={() => handleSelectService('Refrigeração')}
            >
              SERVIÇO DE REFRIGERAÇÃO
            </button>
            <p className="servico-subtitle">VEJA TÉCNICOS DISPONÍVEIS</p>
          </div>

          <div className="separator"></div>

          <div className="servico-item">
            <button 
              className="servico-button"
              onClick={() => handleSelectService('Climatização')}
            >
              SERVIÇO DE CLIMATIZAÇÃO
            </button>
            <p className="servico-subtitle">VEJA TÉCNICOS DISPONÍVEIS</p>
          </div>
        </main>
      </div> {/* Fim do servico-content-wrapper */}

      {/* MODAL DE NOTIFICAÇÕES */}
      <NotificacoesModal
        isOpen={notificacoesModalOpen}
        onRequestClose={() => setNotificacoesModalOpen(false)}
      />
    </div>
  );
}

export default SolicitarServico;