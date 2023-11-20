// Estrutura de exemplo para os produtos
// export const produtos = [
//     {
//       id: 1,
//       titulo: 'Calça Jeans',
//       descricao: 'Uma bela calça jeans para qualquer ocasião.',
//       categorias: ['Roupas', 'Jeans']
//     },
//     {
//       id: 2,
//       titulo: 'Tênis Esportivo',
//       descricao: 'Um tênis ideal para prática esportiva.',
//       categorias: ['Calçados', 'Esportes']
//     },
//   ];
import {v4 as uuid } from 'uuid';
import{ gerarNomeRoupa } from './clouths'



export const produtos = [];

for (let i = 1; i <= 20000; i++) {
  const produto = {
    id: uuid(),
    titulo: `${gerarNomeRoupa()}`,
    descricao: `Descrição do Produto ${i}`,
    categorias: [`Categoria ${i}`, `Outra Categoria ${i}`]
  };

  produtos.push(produto);
}

console.log(produtos)




