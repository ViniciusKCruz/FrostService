import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Adicionei o ícone IoStar
import { IoArrowBack, IoNotifications, IoStar } from 'react-icons/io5';
import './SolicitarServico.css';
import NotificacoesModal from '../components/NotificacoesModal';

function SolicitarServico() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceSelection = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="servico-container-visual">
        <header className="servico-header-visual">
          <button onClick={() => navigate('/')} className="header-icon-button">
            <IoArrowBack size={24} />
          </button>
          <h1 className="servico-title-visual">Solicitar Serviço</h1>
          
          <div className="header-actions">
            {/* BOTÃO NOVO PARA AVALIAÇÃO */}
            <button 
                onClick={() => navigate('/cliente/avaliar')} 
                className="header-icon-button"
                title="Avaliar Serviços"
            >
                <IoStar size={24} color="#f5a623" />
            </button>

            <button onClick={() => setIsModalOpen(true)} className="header-icon-button notificacoes-button">
              <IoNotifications size={24} />
            </button>
          </div>
        </header>

        <main className="servico-main-grid">
          {/* Cards de Serviço (Mantidos iguais) */}
          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/refrigeracao')}>
            <img src="/images/geladeira.jpg" alt="Refrigeração Residencial" />
            <div className="card-info">
              <h3>Refrigeração Residencial</h3>
              <p>Geladeiras, freezers, etc.</p>
            </div>
          </div>

          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/refrigeracao')}>
            <img src="/images/balcao-frio.jpg" alt="Refrigeração Comercial" />
            <div className="card-info">
              <h3>Refrigeração Comercial</h3>
              <p>Câmera frigorífica, VRF, Balcões refrigerados, etc.</p>
            </div>
          </div>

          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/refrigeracao-industrial')}>
            <img src="/images/chiller-grande-porte.jpg" alt="Refrigeração Industrial" />
            <div className="card-info">
              <h3>Refrigeração Industrial</h3>
              <p>Water Chiller de grande porte, Câmaras frigoríficas industriais</p>
            </div>
          </div>

          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/climatizacao')}>
            <img src="/images/arcondicionado.jpg" alt="Climatização Residencial" />
            <div className="card-info">
              <h3>Climatização Residencial</h3>
              <p>Ar-condicionado Split, de janela, etc.</p>
            </div>
          </div>

          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/climatizacao')}>
            <img src="/images/sistema-vrf.jpg" alt="Climatização Comercial" />
            <div className="card-info">
              <h3>Climatização Comercial</h3>
              <p>Ar central, sistemas VRF, etc.</p>
            </div>
          </div>
        </main>
      </div>

      <NotificacoesModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default SolicitarServico;