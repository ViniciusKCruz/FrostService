import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
// Importa o nome correto do ficheiro CSS
import './RecursosTecnicosPage.css';

const manuais = [
    { nome: 'Guia Rápido SHW Inverter 2023-2024', link: 'https://drive.google.com/file/d/1HGRpl8vf5l5DI6hL-tBPTmizcQLqnYJv/view?usp=drive_link' },
    { nome: 'Manual Serviços Refrigeradores DFN39/DFX39', link: 'https://drive.google.com/file/d/1gPUjEApcjigfv58etsTIuU2Og_--SvIB/view?usp=drive_link' },
    { nome: 'Sistemas de Climatização (Senai)', link: 'https://drive.google.com/file/d/11CpiHoOzCkvRp_-PViaKvOlLSv0LE8LZ/view' },
    { nome: 'Apostila Câmara Fria', link: 'https://docs.google.com/document/d/1q_aZ7O87U0O5fNtWwlEX0E2MrESOlkH0/edit?usp=drive_link&ouid=116250304533082516177&rtpof=true&sd=true'},
    { nome: 'Códigos de Erro - Midea', link: 'https://drive.google.com/file/d/1caEATNjJQgmY_8bJcfOD58-uNVvU2Bq-/view?usp=drive_link'}
];

// NOME DO COMPONENTE CORRIGIDO
function RecursosTecnicosPage() {
    const navigate = useNavigate();

    return (
        <div className="recursos-container">
            <header className="recursos-header">
                <button onClick={() => navigate('/empresa/dashboard')} className="recursos-back-button">
                    <IoArrowBack size={24} />
                    Voltar ao Painel
                </button>
                {/* TÍTULO DA PÁGINA CORRIGIDO */}
                <h1>Recursos Técnicos</h1>
                <div />
            </header>

            <main>
                <section className="recursos-section">
                    <h2>Vídeo de Treinamento</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/VHrfwDax3GA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>

                <section className="recursos-section">
                    <h2>Manuais Técnicos</h2>
                    <ul className="manuals-list">
                        {manuais.map((manual, index) => (
                            <li key={index} className="manual-item">
                                <a href={manual.link} target="_blank" rel="noopener noreferrer">
                                    {manual.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default RecursosTecnicosPage;
