const carrinho = [
    {"nome": "Borracha", "preco": 3.45},
    {"nome": "Caderno", "preco": 13.90},
    {"nome": "Kit de Lapis", "preco": 41.22},
    {"nome": "Caneta", "preco": 7.50},
]


// Retornar um array apenas com os preços

const novoArray = carrinho.map(item => item.preco)
novoArray

const filterArray = carrinho.filter(item => item.preco > 10.0)
filterArray