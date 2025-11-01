/* Em src/pages/TecnicosRefrigeracaoIndustrial.js */
import React from 'react';
import ListaTecnicos from '../components/ListaTecnicos';

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
    profilePicUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia33/refrigeracao-cursos-cpt.jpg',
    cft: 'CFT: 987654-C',
    servicos: ['Manutenção de Water Chillers', 'Operação de Câmaras Frias Industriais', 'Sistemas de Amônia'],
    certificados: ['NR 13 - Vasos de Pressão', 'Refrigeração Industrial Avançada', 'Operador de Caldeira']
  },
  { 
    id: 2, 
    nome: 'Heitor de Oliveira Marques', 
    telefone: '(75) 989898-7474',
    email: 'heitooliveira27@gmail.com',
    profilePicUrl: 'https://polocentralcursos.com.br/wp-content/uploads/2022/03/tecnico-refrigeracao-4866-3014.jpg',
    cft: 'CFT: 778899-I',
    servicos: ['Manutenção Preventiva de Chillers', 'Controle de Fluidos Refrigerantes', 'Reparo em Balcões'],
    certificados: ['NR 35 - Trabalho em Altura', 'Comandos Elétricos', 'Credenciamento Daikin']
  },
  { 
    id: 3, 
    nome: 'Marcos de Andrade Silva', 
    telefone: '(73) 996515-1312',
    email: 'marcos.silva@gmail.com',
    profilePicUrl: 'https://arcondicionadoparaempresas.com.br/wp-content/uploads/2023/03/Victor.jpg',
    cft: 'CFT: 202020-K',
    servicos: ['Instalação de Câmaras Frigoríficas', 'Manutenção de Chillers', 'Automação Industrial (Refrigeração)'],
    certificados: ['NR 10 - Básico', 'Refrigeração Industrial (SENAI)']
  },
  { 
    id: 4, 
    nome: 'Gabriel Queiroz Andrade', 
    telefone: '(74) 99852-0101',
    email: 'gabriel.andrade@hotmail.com',
    profilePicUrl: 'https://escolaprofissional.com.br/wp-content/uploads/2023/03/tecnico-refrigeracao-e-climatizacao-1024x683.jpg',
    cft: 'CFT: 753159-F',
    servicos: ['Operação de Sistemas de Amônia', 'Manutenção Corretiva em Chillers', 'Balanceamento de Sistema'],
    certificados: ['NR 13 - Vasos de Pressão', 'NR 33 - Espaço Confinado']
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