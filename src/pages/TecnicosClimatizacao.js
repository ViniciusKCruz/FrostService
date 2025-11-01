/* Em src/pages/TecnicosClimatizacao.js */
import React from 'react';
import ListaTecnicos from '../components/ListaTecnicos';

const featuredClimatizacao = [
  { id: 1, nome: 'Vitor' },
  { id: 2, nome: 'Francisco' },
  { id: 3, nome: 'Heitor' },
  { id: 4, nome: 'Diego' },
];

const todosClimatizacao = [
  { 
    id: 1, 
    nome: 'Vitor Fernandes da Silva', 
    telefone: '(71) 988184-1111',
    email: 'vitor.silva@gmail.com',
    profilePicUrl: 'https://blogdofrio.com.br/wp-content/uploads/2023/08/tecnico-em-refrigeracao-limpando-ar-condicionado.jpg',
    cft: 'CFT: 112233-G',
    servicos: ['Instalação de Ar-Condicionado Split', 'Limpeza e Higienização', 'Manutenção Preventiva', 'Recarga de Gás'],
    certificados: ['NR 35 - Trabalho em Altura', 'Credenciamento LG', 'Instalador de Split (SENAI)']
  },
  { 
    id: 2, 
    nome: 'Francisco Almeida Santos', 
    telefone: '(74) 984845-6632',
    email: 'francisco.santos@hotmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2022/08/5_razoes_mecanico_refrigeracao.jpeg',
    cft: 'CFT: 445566-H',
    servicos: ['Reparo de Placa Eletrônica (Inverter)', 'Instalação de Ar de Janela', 'Manutenção Corretiva'],
    certificados: ['Eletrônica para Climatização', 'NR 10 - Básico', 'Credenciamento Samsung']
  },
  { 
    id: 3, 
    nome: 'Heitor de Oliveira Marques', 
    telefone: '(75) 989898-7474',
    email: 'heitooliveira27@gmail.com',
    profilePicUrl: 'https://polocentralcursos.com.br/wp-content/uploads/2022/03/tecnico-refrigeracao-4866-3014.jpg',
    cft: 'CFT: 778899-I',
    servicos: ['Instalação de Ar-Condicionado Split', 'Manutenção de Sistemas VRF', 'Limpeza e Higienização'],
    certificados: ['NR 35 - Trabalho em Altura', 'Comandos Elétricos', 'Credenciamento Daikin']
  },
  { 
    id: 4, 
    nome: 'Diego Marciel Carvalho', 
    telefone: '(71)988566-7744',
    email: 'diego.carvalho@hotmail.com',
    profilePicUrl: 'https://gattiquimica.com.br/wp-content/uploads/2020/05/post079.webp',
    cft: 'CFT: 101010-J',
    servicos: ['Instalação de Ar de Janela', 'Limpeza de Dutos', 'Manutenção Preventiva'],
    certificados: ['Instalador de Split (SENAI)', 'NR 10 - Básico']
  },
  { 
    id: 5, 
    nome: 'Marcos de Andrade Silva', 
    telefone: '(73) 996515-1312',
    email: 'marcos.silva@gmail.com',
    profilePicUrl: 'https://arcondicionadoparaempresas.com.br/wp-content/uploads/2023/03/Victor.jpg',
    cft: 'CFT: 202020-K',
    servicos: ['Manutenção de Ar Central', 'Instalação de Split', 'Manutenção Corretiva'],
    certificados: ['Credenciamento Midea', 'NR 10 - Básico']
  },
  { 
    id: 6, 
    nome: 'Vinicius Queiroz Merces', 
    telefone: '(72) 99216-1414',
    email: 'vinicius.merces@gmail.com',
    profilePicUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10446/slide/3ar-condicionado-cursos-cpt.jpg',
    cft: 'CFT: 303030-L',
    servicos: ['Limpeza e Higienização', 'Manutenção Preventiva', 'Reparo de Placa Eletrônica'],
    certificados: ['NR 35 - Trabalho em Altura', 'Eletrônica para Climatização']
  },
];


function TecnicosClimatizacao() {
  return (
    <ListaTecnicos
      especialidade="climatização"
      featuredTecnicos={featuredClimatizacao}
      todosTecnicos={todosClimatizacao}
    />
  );
}

export default TecnicosClimatizacao;