import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddTecnicoModal.css';

Modal.setAppElement('#root');

const AddTecnicoModal = ({ isOpen, onRequestClose, onSave }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [especializacao, setEspecializacao] = useState('Refrigeração');
  // 1. NOVO ESTADO PARA O TIPO DE ATENDIMENTO
  const [tipoServico, setTipoServico] = useState('Residencial'); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome || !email || !contato || !especializacao || !tipoServico) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // 2. ENVIAR O NOVO DADO 'tipoServico' AO SALVAR
    onSave({ nome, email, contato, especializacao, tipoServico });

    // Limpa o formulário
    setNome('');
    setEmail('');
    setContato('');
    setEspecializacao('Refrigeração');
    setTipoServico('Residencial'); // Reseta para o padrão
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="add-tecnico-modal"
      overlayClassName="add-tecnico-overlay"
      contentLabel="Adicionar Novo Técnico"
    >
      <div className="add-tecnico-container">
        <h2 className="add-tecnico-title">Cadastrar Novo Funcionário</h2>
        <form onSubmit={handleSubmit} className="add-tecnico-form">
          <div className="form-group-modal">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome do técnico"
              required
            />
          </div>

          <div className="form-group-modal">
            <label htmlFor="especializacao">Especialização Principal</label>
            <select
              id="especializacao"
              value={especializacao}
              onChange={(e) => setEspecializacao(e.target.value)}
              required
            >
              <option value="Refrigeração">Refrigeração</option>
              <option value="Climatização">Climatização</option>
            </select>
          </div>
          
          {/* 3. NOVO CAMPO DE SELEÇÃO NO FORMULÁRIO */}
          <div className="form-group-modal">
            <label htmlFor="tipoServico">Tipo de Atendimento</label>
            <select
              id="tipoServico"
              value={tipoServico}
              onChange={(e) => setTipoServico(e.target.value)}
              required
            >
              <option value="Residencial">Residencial</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>

          <div className="form-group-modal">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              required
            />
          </div>
          <div className="form-group-modal">
            <label htmlFor="contato">Contato (Telefone)</label>
            <input
              type="tel"
              id="contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onRequestClose} className="cancel-btn">
              Cancelar
            </button>
            <button type="submit" className="save-btn">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTecnicoModal;