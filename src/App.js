import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginTecnicoEmpresa from './pages/LoginTecnicoEmpresa';
import PaginaCadastro from './pages/PaginaCadastro';
import SolicitarServico from './pages/SolicitarServico';
import TecnicosRefrigeracao from './pages/TecnicosRefrigeracao';
import TecnicosClimatizacao from './pages/TecnicosClimatizacao';
// O import para TecnicosRefrigeracaoIndustrial foi REMOVIDO
import DashboardEmpresa from './pages/DashboardEmpresa';
import CadastroTecnicosPage from './pages/CadastroTecnicosPage';
import RecursosTecnicosPage from './pages/RecursosTecnicosPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-tecnico-empresa" element={<LoginTecnicoEmpresa />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/servicos-cliente" element={<SolicitarServico />} />
        
        {/* As duas rotas de refrigeração apontam para o mesmo componente */}
        <Route path="/tecnicos/refrigeracao" element={<TecnicosRefrigeracao />} />
        {/* ==================================================================== */}
        {/* CORREÇÃO: Esta rota agora renderiza a página correta                  */}
        {/* ==================================================================== */}
        <Route path="/tecnicos/refrigeracao-industrial" element={<TecnicosRefrigeracao />} />
        
        <Route path="/tecnicos/climatizacao" element={<TecnicosClimatizacao />} />
        <Route path="/empresa/dashboard" element={<DashboardEmpresa />} />
        <Route path="/empresa/cadastro-tecnicos" element={<CadastroTecnicosPage />} />
        <Route path="/empresa/recursos" element={<RecursosTecnicosPage />} />
      </Routes>
    </Router>
  );
}

export default App;