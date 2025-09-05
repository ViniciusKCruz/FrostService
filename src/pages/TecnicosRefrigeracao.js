import React from 'react';
import ListaTecnicos from '../components/ListaTecnicos';

// DADOS MOCK (simulando uma busca no banco de dados)
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
    profilePicUrl: 'https://cursocaprerj.com.br/wp-content/uploads/2023/03/Quanto-ganha-um-profissional-instalador-de-ar-condicionado-split.jpeg'
  },
  { 
    id: 2, 
    nome: 'Caio Almeida Santos', 
    telefone: '(72) 98831-3032',
    email: 'caio.santos@hotmail.com',
    profilePicUrl: 'https://static.wixstatic.com/media/11eec5_f0b2d630ebd041adbed01369b0322391~mv2.png/v1/fill/w_640,h_1022,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11eec5_f0b2d630ebd041adbed01369b0322391~mv2.png'
  },
  { 
    id: 3, 
    nome: 'Carlos de Oliveira Marques', 
    telefone: '(71) 99090-6465',
    email: 'carlos.marques@gmail.com',
    profilePicUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia33/refrigeracao-cursos-cpt.jpg'
  },
  { 
    id: 4, 
    nome: 'Rian Marciel Carvalho', 
    telefone: '(71) 98645-2211',
    email: 'rian.carvalho@gmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2022/12/trabalhador-usando-equipamento-de-seguranca--1024x682.jpg'
  },
  { 
    id: 5, 
    nome: 'Vitor Quadros da Silva', 
    telefone: '(71) 98456-1320',
    email: 'vitor.silva@hotmail.com',
    profilePicUrl: 'https://images.tcdn.com.br/img/img_prod/417495/noticia_137458511865dc7fa355a07.jpg'
  },
  { 
    id: 6, 
    nome: 'Gabriel Queiroz Andrade', 
    telefone: '(74) 99852-0101',
    email: 'gabriel.andrade@hotmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2023/03/tecnico-refrigeracao-e-climatizacao-1024x683.jpg'
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