const storeMap = new Map();

const items = [
  {
    id: "d5bf7c00-8fa1-4530-bbcd-261240e59143",
    titulo: "Saia Curta de Lã",
    price: 200,
    descricao: "Descrição do Produto 18343",
    quantidade: 1
  },
  {
    id: "51804393-c04e-4c4f-a640-fcbf2c932101",
    titulo: "Suspensórios Acinturada",
    price: 300,
    descricao: "Descrição do Produto 18344",
    quantidade: 1
  },
  {
    id: "663f7603-9932-4409-9aa3-14ff63a873be",
    titulo: "Gravata Slim Samba",
    price: 200,
    descricao: "Descrição do Produto 18345",
    quantidade: 1
  },
  {
    id: "663f7603-9932-4409-9aa3-14ff63a873be",
    titulo: "Gravata Slim Elina",
    price: 200,
    descricao: "Descrição do Produto 18345",
    quantidade: 1
  }
];

items.forEach(item => {
  if (storeMap.has(item.id)) {
    const existingItem = storeMap.get(item.id);
    existingItem.quantidade += item.quantidade;
    storeMap.set(item.id, existingItem);
  } else {
    storeMap.set(item.id, { ...item });
  }
});

//TODO: Calcular preço total da ordem
const totalPrice = Array.from(storeMap.values()).reduce((total, item) => {
  console.log(total)
  return total + (item.price * item.quantidade);
}, 0);

//TODO: Criar a ordem com os produtos somados e o preço total
const order = {
  items: Array.from(storeMap.values()), // Lista de produtos somados
  totalItems: Array.from(storeMap.values()).reduce((total, item) => total + item.quantidade, 0), // Total de itens na ordem
  totalPrice // Preço total da ordem
};

console.log(order);
