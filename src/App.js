import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginTecnicoEmpresa from './pages/LoginTecnicoEmpresa';
import PaginaCadastro from './pages/PaginaCadastro';
import SolicitarServico from './pages/SolicitarServico';
import TecnicosRefrigeracao from './pages/TecnicosRefrigeracao';
import TecnicosClimatizacao from './pages/TecnicosClimatizacao';
import DashboardEmpresa from './pages/DashboardEmpresa';
import CadastroTecnicosPage from './pages/CadastroTecnicosPage';
import RecursosTecnicosPage from './pages/RecursosTecnicosPage';
// IMPORTS DAS NOVAS PÁGINAS
import AvaliarServicoPage from './pages/AvaliarServicoPage';
import PlanosEmpresaPage from './pages/PlanosEmpresaPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-tecnico-empresa" element={<LoginTecnicoEmpresa />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/servicos-cliente" element={<SolicitarServico />} />
        
        {/* Rotas de Técnicos */}
        <Route path="/tecnicos/refrigeracao" element={<TecnicosRefrigeracao />} />
        <Route path="/tecnicos/refrigeracao-industrial" element={<TecnicosRefrigeracao />} />
        <Route path="/tecnicos/climatizacao" element={<TecnicosClimatizacao />} />
        
        {/* Rotas da Empresa */}
        <Route path="/empresa/dashboard" element={<DashboardEmpresa />} />
        <Route path="/empresa/cadastro-tecnicos" element={<CadastroTecnicosPage />} />
        <Route path="/empresa/recursos" element={<RecursosTecnicosPage />} />
        {/* NOVA ROTA DE PLANOS */}
        <Route path="/empresa/planos" element={<PlanosEmpresaPage />} />

        {/* NOVA ROTA DE AVALIAÇÃO (CLIENTE) */}
        <Route path="/cliente/avaliar" element={<AvaliarServicoPage />} />

        <Route path="/manuais" element={<RecursosTecnicosPage />} />
        <Route path="/tutoriais" element={<RecursosTecnicosPage />} />
      </Routes>
    </Router>
  );
}

export default App;