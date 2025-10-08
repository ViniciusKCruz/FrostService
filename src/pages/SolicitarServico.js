import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoNotifications } from 'react-icons/io5';
import './SolicitarServico.css';
import NotificacoesModal from '../components/NotificacoesModal';

function SolicitarServico() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceSelection = (path) => {
    console.log(`Navegando para: ${path}`);
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
          <button onClick={() => setIsModalOpen(true)} className="header-icon-button notificacoes-button">
            <IoNotifications size={24} />
          </button>
        </header>

        <main className="servico-main-grid">
          {/* Card: Refrigeração Residencial */}
          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/refrigeracao')}>
            {/* Caminho da imagem atualizado para geladeira.jpg */}
            <img src="/images/geladeira.jpg" alt="Refrigeração Residencial" />
            <div className="card-info">
              <h3>Refrigeração Residencial</h3>
              <p>Geladeiras, freezers, etc.</p>
            </div>
          </div>

          {/* Card: Refrigeração Comercial */}
          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/refrigeracao')}>
            {/* Caminho da imagem atualizado para balcao-frio.jpg */}
            <img src="/images/balcao-frio.jpg" alt="Refrigeração Comercial" />
            <div className="card-info">
              <h3>Refrigeração Comercial</h3>
              <p>Câmera frigorífica, VRF, Balcões refrigerados, etc.</p>
            </div>
          </div>

          {/* Card: Refrigeração Industrial */}
          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/refrigeracao-industrial')}>
            {/* Caminho da imagem atualizado para chiller-grande-porte.jpg */}
            <img src="/images/chiller-grande-porte.jpg" alt="Refrigeração Industrial" />
            <div className="card-info">
              <h3>Refrigeração Industrial</h3>
              <p>Water Chiller de grande porte, Câmaras frigoríficas industriais</p>
            </div>
          </div>

          {/* Card: Climatização Residencial */}
          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/climatizacao')}>
            {/* Caminho da imagem atualizado para arcondicionado.jpg */}
            <img src="/images/arcondicionado.jpg" alt="Climatização Residencial" />
            <div className="card-info">
              <h3>Climatização Residencial</h3>
              <p>Ar-condicionado Split, de janela, etc.</p>
            </div>
          </div>

          {/* Card: Climatização Comercial */}
          <div className="servico-card-visual" onClick={() => handleServiceSelection('/tecnicos/climatizacao')}>
            {/* Caminho da imagem atualizado para sistema-vrf.jpg */}
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