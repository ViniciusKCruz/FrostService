import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginCliente from './pages/LoginCliente';
import LoginTecnicoEmpresa from './pages/LoginTecnicoEmpresa';
import PaginaCadastro from './pages/PaginaCadastro';
import SolicitarServico from './pages/SolicitarServico';
import TecnicosRefrigeracao from './pages/TecnicosRefrigeracao';
import TecnicosClimatizacao from './pages/TecnicosClimatizacao';
import DashboardEmpresa from './pages/DashboardEmpresa';
import ManuaisPage from './pages/ManuaisPage';
import TutoriaisPage from './pages/TutoriaisPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-tecnico-empresa" element={<LoginTecnicoEmpresa />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/servicos-cliente" element={<SolicitarServico />} />
        <Route path="/tecnicos/refrigeracao" element={<TecnicosRefrigeracao />} />
        <Route path="/tecnicos/climatizacao" element={<TecnicosClimatizacao />} />
        <Route path="/empresa/dashboard" element={<DashboardEmpresa />} />
        <Route path="/manuais" element={<ManuaisPage />} />
        <Route path="/tutoriais" element={<TutoriaisPage />} />

      </Routes>
    </Router>
  );
}

export default App;