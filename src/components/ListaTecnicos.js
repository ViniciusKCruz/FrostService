import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import PerfilTecnicoModal from './PerfilTecnicoModal';
import ConfirmacaoModal from './ConfirmacaoModal';
import './ListaTecnicos.css';

// Dados dos avatares (placeholders)
const avatars = {
  Emanuel: 'https://cursocaprerj.com.br/wp-content/uploads/2023/03/Quanto-ganha-um-profissional-instalador-de-ar-condicionado-split.jpeg', // Exemplo de imagem real
  Caio: 'https://static.wixstatic.com/media/11eec5_f0b2d630ebd041adbed01369b0322391~mv2.png/v1/fill/w_640,h_1022,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11eec5_f0b2d630ebd041adbed01369b0322391~mv2.png',
  Carlos: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia33/refrigeracao-cursos-cpt.jpg',
  Rian: 'https://escolaprofissional.com.br/wp-content/uploads/2022/12/trabalhador-usando-equipamento-de-seguranca--1024x682.jpg',
  Vitor: 'https://blogdofrio.com.br/wp-content/uploads/2023/08/tecnico-em-refrigeracao-limpando-ar-condicionado.jpg',
  Francisco: 'https://escolaprofissional.com.br/wp-content/uploads/2022/08/5_razoes_mecanico_refrigeracao.jpeg',
  Heitor: 'https://polocentralcursos.com.br/wp-content/uploads/2022/03/tecnico-refrigeracao-4866-3014.jpg',
  Diego: 'https://gattiquimica.com.br/wp-content/uploads/2020/05/post079.webp',
};

// Cores para as iniciais da lista principal
const initialColors = ['#a695e1', '#f4a2e0', '#82e1d7', '#f4a1a1', '#a4bcf4', '#f4d2a1'];

const ListaTecnicos = ({ especialidade, featuredTecnicos, todosTecnicos }) => {
  const navigate = useNavigate();

  // --- INÍCIO DA LÓGICA DOS MODAIS ---
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedTecnico, setSelectedTecnico] = useState(null);

  const handleTecnicoClick = (tecnico) => {
    setSelectedTecnico(tecnico);
    setPerfilModalOpen(true);
  };

  const handleEscolherTecnico = () => {
    setPerfilModalOpen(false); // Fecha o modal de perfil
    setConfirmModalOpen(true); // Abre o modal de confirmação

    // Fecha o modal de confirmação e volta para a tela de serviços após 3 segundos
    setTimeout(() => {
      setConfirmModalOpen(false);
      navigate('/servicos-cliente'); 
    }, 3000);
  };
  // --- FIM DA LÓGICA DOS MODAIS ---

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '';

  return (
    <div className="tecnicos-page-container">
       <div className="tecnicos-content-wrapper">
          <header className="tecnicos-header">
            <button onClick={() => navigate(-1)} className="back-button">
              <IoArrowBack size={24} />
            </button>
            <h1>Técnicos disponíveis</h1>
          </header>

          <main className="tecnicos-content">
            <section className="featured-section">
              <h2>Especialistas em {especialidade}</h2>
              <div className="featured-scroller">
                {featuredTecnicos.map((tec) => (
                  // Adiciona o onClick para abrir o perfil também nos destaques
                  <div key={tec.id} className="featured-card" onClick={() => handleTecnicoClick(todosTecnicos.find(t => t.nome.startsWith(tec.nome)))}>
                    <img src={avatars[tec.nome]} alt={tec.nome} />
                    <span>{tec.nome}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="list-section">
              <h3>Entre em contato para contratar nossos serviços</h3>
              <div className="tecnicos-list">
                {todosTecnicos.map((tec, index) => (
                  // Adiciona o onClick em cada item da lista para abrir o modal
                  <div key={tec.id} className="tecnico-item" onClick={() => handleTecnicoClick(tec)}>
                    <div 
                      className="tecnico-initial"
                      style={{ backgroundColor: initialColors[index % initialColors.length] }}
                    >
                      {getInitial(tec.nome)}
                    </div>
                    <div className="tecnico-info">
                      <span className="tecnico-name">{tec.nome}</span>
                      <span className="tecnico-phone">{tec.telefone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
      </div>

      {/* RENDERIZAÇÃO DOS MODAIS (ficam fora do wrapper para cobrir a tela toda) */}
      <PerfilTecnicoModal
        isOpen={perfilModalOpen}
        onRequestClose={() => setPerfilModalOpen(false)}
        tecnico={selectedTecnico}
        onEscolher={handleEscolherTecnico}
      />
      
      <ConfirmacaoModal isOpen={confirmModalOpen} />
    </div>
  );
};

export default ListaTecnicos;