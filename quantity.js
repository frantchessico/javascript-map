const storeMap = new Map();
let order = []
const items = [
  {
    id: "d5bf7c00-8fa1-4530-bbcd-261240e59143",
    titulo: "Saia Curta de Lã",
    descricao: "Descrição do Produto 18343",
    quantidade: 1
  },
  {
    id: "51804393-c04e-4c4f-a640-fcbf2c932101",
    titulo: "Suspensórios Acinturada",
    descricao: "Descrição do Produto 18344",
    quantidade: 1
  },
  {
    id: "663f7603-9932-4409-9aa3-14ff63a873be",
    titulo: "Gravata Slim Samba",
    descricao: "Descrição do Produto 18345",
    quantidade: 1
  },
  {
    id: "663f7603-9932-4409-9aa3-14ff63a873be",
    titulo: "Gravata Slim Elina",
    descricao: "Descrição do Produto 18345",
    quantidade: 1
  },

  {
    id: "663f7603-9932-4409-9aa3-14ff63a873be",
    titulo: "Gravata Slim Elina",
    descricao: "Descrição do Produto 18345",
    quantidade: 1
  }
];

//TODO: Iterando para Elina
items.forEach(item => {
  if (storeMap.has(item.id)) {
    const existingItem = storeMap.get(item.id);
    existingItem.quantidade += item.quantidade;
    storeMap.set(item.id, existingItem);
  } else {
    storeMap.set(item.id, { ...item });
  }
});

//TODO: Mostrar a soma das quantidades dos produtos
storeMap.forEach(item => {
  console.log(`${item.titulo}: Quantidade total - ${item.quantidade}`);
});
