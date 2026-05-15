const design = new URL(
  '../../../../../img/Sobrancelha/Design.png',
  import.meta.url
).href;

const designComHenna = new URL(
  '../../../../../img/Sobrancelha/Designcom-henna.png',
  import.meta.url
).href;

export const Sobrancelhas = [
  {
    id: 1,
    nome: 'DESIGN',
    preco: 'R$ 50,00',
    img: design,
  },
  {
    id: 2,
    nome: 'DESIGN COM HENNA',
    preco: 'R$ 75,00',
    img: designComHenna,
  },
];