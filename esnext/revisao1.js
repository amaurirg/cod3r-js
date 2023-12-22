// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
// l = C
// e = o
// tras = ['d', '3', 'r']

const [x, , y] = [1, 2, 3]
console.log(x, y)
// O 2 será ignorado porque não tem variável associada

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)
// Renomeando idade para i
// const { idade: i, nome } = { nome: 'Ana', idade: 9 }
// console.log(i, nome)
