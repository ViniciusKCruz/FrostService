import React from 'react';
import { Link } from 'react-router-dom';
import './ManuaisPage.css';

const manuais = [
  { nome: 'Guia Rápido SHW Inverter 2023-2024', arquivo: 'Guia_Rapido_SHW_Inverter-2023-2024-2023-03_Rev01.pdf' },
  { nome: 'Manual Serviços Refrigeradores DFN39/DFX39', arquivo: 'Manual_Servicos_Refrigeradores_DFN39_DFX39-TF39-TF39S_Rev04_Fevereiro2023.pdf' },
  { nome: 'Sistemas de Climatização (Senai)', arquivo: 'Sistemas de Climatização (Senai).pdf' },
  {nome: 'Apostila Câmara Fria', arquivo: 'Apostila Câmara Fria.pdf'},
  {nome: 'Códigos de Erro - Midea', arquivo: 'midea-codigos-de-erro.pdf'}
];

function ManuaisPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Manuais Técnicos</h1>
        {/* CORREÇÃO: Garantindo que o link aponta para a rota correta */}
        <Link to="/empresa/dashboard" className="back-link">Voltar ao Dashboard</Link>
      </header>
      <main className="content">
        <p>Acesse os manuais em PDF para consulta e download.</p>
        <ul className="manuals-list">
          {manuais.map((manual, index) => (
            <li key={index} className="manual-item">
              <a href={`/${manual.arquivo}`} target="_blank" rel="noopener noreferrer">
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