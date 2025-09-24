import React from 'react';
import { Link } from 'react-router-dom';
import './TutoriaisPage.css';

function TutoriaisPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Vídeo de Treinamento</h1>
        {/* CORREÇÃO: O link agora aponta para a rota correta */}
        <Link to="/empresa/dashboard" className="back-link">Voltar ao Dashboard</Link>
      </header>
      <main className="video-content">
        <p>Assista ao tutorial completo sobre a manutenção de sistemas de refrigeração.</p>
        <div className="video-wrapper">
          <iframe 
            // CORREÇÃO: Use o link "embed" do YouTube
            src="https://www.youtube.com/embed/VHrfwDax3GA" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </main>
    </div>
  );
}

export default TutoriaisPage;

