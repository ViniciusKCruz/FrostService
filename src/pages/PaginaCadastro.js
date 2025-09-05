import React, { useState, useEffect } from 'react';
import EscolherCadastroModal from '../components/EscolherCadastroModal';
import FormularioCadastroCliente from '../components/FormularioCadastroCliente';
// MODIFICADO: Importa o novo componente de empresa
import FormularioCadastroTecnicoEmpresa from '../components/FormularioCadastroTecnicoEmpresa';
import { useNavigate } from 'react-router-dom';

function PaginaCadastro() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [tipoCadastro, setTipoCadastro] = useState(null);
  const navigate = useNavigate();

  const handleSelectTipo = (tipo) => {
    setTipoCadastro(tipo);
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    if (!tipoCadastro) {
      navigate('/');
    }
    setModalIsOpen(false);
  };

  const renderFormulario = () => {
    if (tipoCadastro === 'cliente') {
      return <FormularioCadastroCliente />;
    }
    if (tipoCadastro === 'tecnico') {
      // MODIFICADO: Renderiza o novo formulário de empresa
      return <FormularioCadastroTecnicoEmpresa />;
    }
    return null;
  };

  return (
    <div>
      <EscolherCadastroModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        onSelectTipo={handleSelectTipo}
      />
      {renderFormulario()}
    </div>
  );
}

export default PaginaCadastro;