import React from 'react';
import ListaTecnicos from '../components/ListaTecnicos';

// DADOS MOCK
const featuredIndustrial = [
  { id: 1, nome: 'Carlos' },
  { id: 2, nome: 'Heitor' },
  { id: 3, nome: 'Marcos' },
  { id: 4, nome: 'Gabriel' },
];

const todosIndustrial = [
  { 
    id: 1, 
    nome: 'Carlos de Oliveira Marques', 
    telefone: '(71) 99090-6465',
    email: 'carlos.marques@gmail.com',
    profilePicUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia33/refrigeracao-cursos-cpt.jpg'
  },
  { 
    id: 2, 
    nome: 'Heitor de Oliveira Marques', 
    telefone: '(75) 989898-7474',
    email: 'heitooliveira27@gmail.com',
    profilePicUrl: 'https://polocentralcursos.com.br/wp-content/uploads/2022/03/tecnico-refrigeracao-4866-3014.jpg'
  },
  { 
    id: 3, 
    nome: 'Marcos de Andrade Silva', 
    telefone: '(73) 996515-1312',
    email: 'marcos.silva@gmail.com',
    profilePicUrl: 'https://arcondicionadoparaempresas.com.br/wp-content/uploads/2023/03/Victor.jpg'
  },
  { 
    id: 4, 
    nome: 'Gabriel Queiroz Andrade', 
    telefone: '(74) 99852-0101',
    email: 'gabriel.andrade@hotmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2023/03/tecnico-refrigeracao-e-climatizacao-1024x683.jpg'
  },
];


function TecnicosRefrigeracaoIndustrial() {
  return (
    <ListaTecnicos
      especialidade="refrigeração industrial"
      featuredTecnicos={featuredIndustrial}
      todosTecnicos={todosIndustrial}
    />
  );
}

export default TecnicosRefrigeracaoIndustrial;