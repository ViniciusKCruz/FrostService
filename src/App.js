import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginCliente from './pages/LoginCliente';
import LoginTecnico from './pages/LoginTecnicoEmpresa';
import PaginaCadastro from './pages/PaginaCadastro'; // <-- IMPORTE A NOVA PÁGINA

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-tecnico" element={<LoginTecnico />} />
        <Route path="/cadastro" element={<PaginaCadastro />} /> {/* <-- ADICIONE A ROTA DE CADASTRO */}
      </Routes>
    </Router>
  );
}

export default App;