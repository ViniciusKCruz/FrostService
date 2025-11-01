/* Em src/pages/TecnicosRefrigeracao.js */
import React from 'react';
import ListaTecnicos from '../components/ListaTecnicos';

const featuredRefrigeracao = [
  { id: 1, nome: 'Emanuel' },
  { id: 2, nome: 'Caio' },
  { id: 3, nome: 'Carlos' },
  { id: 4, nome: 'Rian' },
];

const todosRefrigeracao = [
  { 
    id: 1, 
    nome: 'Emanuel Fernandes da Silva', 
    telefone: '(70) 99665-0702',
    email: 'emanuel.fernandes@gmail.com',
    profilePicUrl: 'https://ibqpead.com.br/uploads/_thumb/cedoc_doc_2016684/img2016684_2bnzw4q48djkjy5wvwbbiisfhv4rr4q8ql2ij7lnbll3pwx5tlc7773povd5tms4jn9c1745wmxz72iin8eysd10t4buzi3rdiuh.jpg',
    cft: 'CFT: 123456-A',
    servicos: ['Manutenção de Geladeiras', 'Conserto de Freezers', 'Troca de Compressor', 'Carga de Gás (Residencial)'],
    certificados: ['Boas Práticas em Refrigeração (BPR)', 'NR 10 - Básico', 'Certificado de Refrigeração Comercial']
  },
  { 
    id: 2, 
    nome: 'Caio Almeida Santos', 
    telefone: '(72) 98831-3032',
    email: 'caio.santos@hotmail.com',
    profilePicUrl: 'https://static.wixstatic.com/media/11eec5_f0b2d630ebd041adbed01369b0322391~mv2.png/v1/fill/w_640,h_1022,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11eec5_f0b2d630ebd041adbed01369b0322391~mv2.png',
    cft: 'CFT: 654321-B',
    servicos: ['Reparo de Balcões Frigoríficos', 'Manutenção de Câmaras Frias', 'Conserto de Bebedouros'],
    certificados: ['Refrigeração e Ar Condicionado (SENAI)', 'NR 35 - Trabalho em Altura']
  },
  { 
    id: 3, 
    nome: 'Carlos de Oliveira Marques', 
    telefone: '(71) 99090-6465',
    email: 'carlos.marques@gmail.com',
    profilePicUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia33/refrigeracao-cursos-cpt.jpg',
    cft: 'CFT: 987654-C',
    servicos: ['Manutenção de Geladeiras', 'Carga de Gás', 'Limpeza de Sistema'],
    certificados: ['Boas Práticas em Refrigeração (BPR)', 'NR 10 - Básico']
  },
  { 
    id: 4, 
    nome: 'Rian Marciel Carvalho', 
    telefone: '(71) 98645-2211',
    email: 'rian.carvalho@gmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2022/12/trabalhador-usando-equipamento-de-seguranca--1024x682.jpg',
    cft: 'CFT: 456789-D',
    servicos: ['Conserto de Freezers', 'Troca de Compressor', 'Manutenção Preventiva'],
    certificados: ['Refrigeração e Ar Condicionado (SENAI)']
  },
  { 
    id: 5, 
    nome: 'Vitor Quadros da Silva', 
    telefone: '(71) 98456-1320',
    email: 'vitor.silva@hotmail.com',
    profilePicUrl: 'https://images.tcdn.com.br/img/img_prod/417495/noticia_137458511865dc7fa355a07.jpg',
    cft: 'CFT: 159357-E',
    servicos: ['Manutenção de Geladeiras', 'Reparo de Balcões Frigoríficos'],
    certificados: ['NR 10 - Básico']
  },
  { 
    id: 6, 
    nome: 'Gabriel Queiroz Andrade', 
    telefone: '(74) 99852-0101',
    email: 'gabriel.andrade@hotmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2023/03/tecnico-refrigeracao-e-climatizacao-1024x683.jpg',
    cft: 'CFT: 753159-F',
    servicos: ['Manutenção de Câmaras Frias', 'Carga de Gás'],
    certificados: ['Boas Práticas em Refrigeração (BPR)']
  },
];

function TecnicosRefrigeracao() {
  return (
    <ListaTecnicos
      especialidade="refrigeração"
      featuredTecnicos={featuredRefrigeracao}
      todosTecnicos={todosRefrigeracao}
    />
  );
}

export default TecnicosRefrigeracao;