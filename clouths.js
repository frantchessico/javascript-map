// Arrays de palavras para montar os nomes aleatórios
const prefixos = [
    'Camisa', 'Calça', 'Vestido', 'Blusa', 'Jaqueta', 'Saia', 'Shorts', 'Macacão',
    'Colete', 'Sobretudo', 'Cardigã', 'Suéter', 'Parka', 'Cropped', 'Body', 'Jardineira',
    'Legging', 'Bermuda', 'Terno', 'Gravata', 'Maiô', 'Camiseta', 'Pijama', 'Roupa Íntima',
    'Sapato', 'Biquíni', 'Jaqueta Jeans', 'Blazer', 'Top', 'Fato de Banho', 'Uniforme', 'Lenço',
    'Capa', 'Moleton', 'Calça Jeans', 'Macacão Jeans', 'Saia Jeans', 'Blusa de Manga Longa',
    'Blusa de Manga Curta', 'Vestido Longo', 'Vestido Curto', 'Saia Longa', 'Saia Curta',
    'Jaqueta de Couro', 'Jaqueta de Moletom', 'Meia', 'Chapéu', 'Touca', 'Viseira', 'Turbante',
    'Gravata Borboleta', 'Cinto', 'Suspensórios', 'Bandelete', 'Colar', 'Brinco', 'Anel',
    'Pulseira', 'Carteira', 'Óculos de Sol', 'Óculos de Grau', 'Lenço de Pescoço', 'Luvas',
    'Guarda-Chuva', 'Gorro', 'Sarongue', 'Kimono', 'Poncho', 'Cachecol', 'Coleira',
    'Gravata Slim', 'Gravata Skinny', 'Gravata Tradicional', 'Cueca', 'Calcinha', 'Bolsa',
    'Sapatilha', 'Sandália', 'Rasteirinha', 'Salto Alto', 'Salto Baixo', 'Salto Médio',
    'Salto Anabela', 'Salto Plataforma', 'Scarpin', 'Mocassim', 'Oxford', 'Tamanco', 'Tênis',
    'Bota', 'Botina', 'Pantufa', 'Chinelo', 'Espadrille', 'Alpargata', 'Tênis Casual', 'Sapatênis',
    'Sapato Social', 'Sapato de Noiva', 'Sapato de Festa', 'Sapato de Trabalho', 'Sapato Esportivo',
    'Sapato de Couro', 'Sapato de Veludo', 'Sapato de Verniz', 'Sapato Oxford', 'Sapato Derby',
    'Sapato Monkstrap', 'Sapato Mocassim', 'Sapato Loafer', 'Sapato Brogue', 'Sapato Chelsea'
  ];


  const sufixos = [
    'de Algodão', 'de Linho', 'de Lã', 'Esportiva', 'Casual', 'Elegante', 'Estampada', 'Listrada',
    'Floral', 'Geométrica', 'Xadrez', 'Liso', 'Bordada', 'Despojada', 'Clássica', 'Colorida',
    'Vintage', 'Moderninha', 'Minimalista', 'Arrojada', 'Simples', 'Sofisticada', 'Original',
    'Divertida', 'Feminina', 'Masculina', 'Unissex', 'Térmica', 'Leve', 'Confortável', 'Chique',
    'Boho', 'Retrô', 'Tropical', 'Rústica', 'Sensual', 'Exclusiva', 'Descolada', 'Eco-friendly',
    'Básica', 'Fashion', 'Festa', 'Trabalho', 'Dia a Dia', 'Verão', 'Inverno', 'Primavera',
    'Outono', 'Hippie', 'Punk', 'Gótica', 'Boêmia', 'Glamour', 'Esportiva', 'Urbana', 'Country',
    'Grunge', 'Rock', 'Samba', 'Funk', 'Rap', 'Reggae', 'Pop', 'Clássico', 'Artesanal', 'Brilhante',
    'Impermeável', 'Refletiva', 'Acinturada', 'Oversized', 'Retilínea', 'Comfy', 'Soltinha', 'Justa',
    'Acinturada', 'Assimétrica', 'Camuflada', 'Decotada', 'Bufante', 'Midi', 'Maxi', 'Mini',
    'Destroyed', 'Evase', 'Envelope', 'Bodycon', 'Peplum', 'Longa', 'Curta', 'Mangas Longas',
    'Mangas Curtas', 'Cropped', 'Assimétrica', 'Godê', 'Envelope', 'Reta', 'Rodada', 'Slip Dress',
    'Tubinho', 'Amplo', 'Túnica', 'Ciganinha', 'Tomara-que-caia', 'Envelope', 'Trapézio', 'Evase'
  ];
  


// Função para gerar um nome de roupa aleatório
export function gerarNomeRoupa() {
  const prefixoAleatorio = prefixos[Math.floor(Math.random() * prefixos.length)];
  const sufixoAleatorio = sufixos[Math.floor(Math.random() * sufixos.length)];
  const name = `${prefixoAleatorio} ${sufixoAleatorio}`;

  return name
}

