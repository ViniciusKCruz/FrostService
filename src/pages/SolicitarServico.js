import React, { useState } from 'react'; // 1. useState foi importado
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoNotifications } from 'react-icons/io5';
import './SolicitarServico.css';
// 2. O seu componente de Modal de Notificações é importado
import NotificacoesModal from '../components/NotificacoesModal';

function SolicitarServico() {
  const navigate = useNavigate();
  // 3. Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceSelection = (serviceType) => {
    console.log(`Serviço selecionado: ${serviceType}`);
    if (serviceType.includes('Refrigeração')) {
      navigate('/tecnicos/refrigeracao');
    } else if (serviceType.includes('Climatização')) {
      navigate('/tecnicos/climatizacao');
    }
  };

  return (
    // Usamos um Fragment <> para permitir que o Modal fique fora do container principal
    <>
      <div className="servico-container">
        <div className="servico-content-wrapper">
          <header className="servico-header">
            <button onClick={() => navigate('/login-cliente')} className="header-icon-button">
              <IoArrowBack size={24} />
            </button>
            <h1 className="servico-title">Solicitar Serviço</h1>
            {/* 4. O botão agora chama a função para abrir o modal */}
            <button onClick={() => setIsModalOpen(true)} className="header-icon-button notificacoes-button">
              <IoNotifications size={24} />
            </button>
          </header>

          <main className="servico-main-content">
            {/* Categoria Refrigeração */}
            <div className="servico-item">
              <button 
                className="servico-button"
                onClick={() => handleServiceSelection('Refrigeração Residencial')}
              >
                Refrigeração Residencial
              </button>
              <p className="servico-subtitle">Geladeiras, freezers, etc.</p>
            </div>
            <div className="servico-item">
              <button 
                className="servico-button"
                onClick={() => handleServiceSelection('Refrigeração Industrial')}
              >
                Refrigeração Industrial
              </button>
              <p className="servico-subtitle">Câmaras frias, balcões, etc.</p>
            </div>

            <div className="separator"></div>

            {/* Categoria Climatização */}
            <div className="servico-item">
              <button 
                className="servico-button"
                onClick={() => handleServiceSelection('Climatização Residencial')}
              >
                Climatização Residencial
              </button>
              <p className="servico-subtitle">Ar-condicionado Split, de janela, etc.</p>
            </div>
            <div className="servico-item">
              <button 
                className="servico-button"
                onClick={() => handleServiceSelection('Climatização Industrial')}
              >
                Climatização Industrial
              </button>
              <p className="servico-subtitle">Ar central, sistemas VRF, etc.</p>
            </div>
          </main>
        </div>
      </div>

      {/* 5. O componente do modal é renderizado aqui */}
      <NotificacoesModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default SolicitarServico;