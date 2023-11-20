const storeMap = new Map();
const orders = [];

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
        quantidade: 2
      },

      {
        id: "663f7603-9932-4409-9aa3-14ff63a873be",
        titulo: "Gravata Slim Elina",
        descricao: "Descrição do Produto 18345",
        quantidade: 3
      }
]

// items.map(item => {
//     storeMap.set(item.id, item);
//     if(storeMap.has(item.id)) {
//        const result = storeMap.set(item.id, item.quantidade += 1)
    
//         console.log(result)
//     }
// })


items.map(item => {
      storeMap.set(item.id, item);
      if(storeMap.has(item.id)) {
         const result = storeMap.set(item.id, item)
      
          console.log(result)
      }
  })

storeMap.forEach(item => console.log(item))
// orders.map(order => {
//   console.log(order.keys())
// })
const store = Array.from(storeMap.values())
console.log(store)
