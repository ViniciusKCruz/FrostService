import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginCliente from './pages/LoginCliente';
import LoginTecnico from './pages/LoginTecnicoEmpresa';
import PaginaCadastro from './pages/PaginaCadastro'; 
import SolicitarServico from './pages/SolicitarServico';
import TecnicosRefrigeracao from './pages/TecnicosRefrigeracao'; 
import TecnicosClimatizacao from './pages/TecnicosClimatizacao';
import DashboardEmpresa from './pages/DashboardEmpresa';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-tecnico" element={<LoginTecnico />} />
        <Route path="/cadastro" element={<PaginaCadastro />} /> 
        <Route path="/servicos-cliente" element={<SolicitarServico />} />
        <Route path="/tecnicos/refrigeracao" element={<TecnicosRefrigeracao />} />
        <Route path="/tecnicos/climatizacao" element={<TecnicosClimatizacao />} />
        <Route path="/empresa/dashboard" element={<DashboardEmpresa />} />
      </Routes>
    </Router>
  );
}

export default App;