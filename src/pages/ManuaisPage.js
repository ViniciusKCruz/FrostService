import React from 'react';
import { Link } from 'react-router-dom';
import './ManuaisPage.css';

// A lista agora usa uma propriedade 'link' com a URL completa do Google Drive
const manuais = [
  { nome: 'Guia Rápido SHW Inverter 2023-2024', link: 'https://drive.google.com/file/d/1HGRpl8vf5l5DI6hL-tBPTmizcQLqnYJv/view' },
  { nome: 'Manual Serviços Refrigeradores DFN39/DFX39', link: 'https://drive.google.com/file/d/1gPUjEApcjigfv58etsTIuU2Og_--SvIB/view' },
  { nome: 'Sistemas de Climatização (Senai)', link: 'https://drive.google.com/file/d/11CpiHoOzCkvRp_-PViaKvOlLSv0LE8LZ/view' },
  { nome: 'Apostila Câmara Fria', link: 'https://drive.google.com/file/d/1cG1QK2MOAnJIIWUnhdpukDby8VGXFo9U/view'},
  { nome: 'Códigos de Erro - Midea', link: 'https://drive.google.com/file/d/1caEATNjJQgmY_8bJcfOD58-uNVvU2Bq-/view'}
];

function ManuaisPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Manuais Técnicos</h1>
        <Link to="/empresa/dashboard" className="back-link">Voltar ao Dashboard</Link>
      </header>
      <main className="content">
        <p>Acesse os manuais em PDF para consulta e download.</p>
        <ul className="manuals-list">
          {manuais.map((manual, index) => (
            <li key={index} className="manual-item">
              {/* O href agora usa diretamente a propriedade 'link', sem a barra inicial */}
              <a href={manual.link} target="_blank" rel="noopener noreferrer">
                {manual.nome}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ManuaisPage;
