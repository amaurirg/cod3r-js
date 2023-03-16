const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
// Sem reduce
const mapAlunos = alunos.filter(aluno => aluno.bolsista === true)
const todosBolsistas = alunos.length === mapAlunos
console.log('Todos os alunos são bolsistas?', todosBolsistas)

// Com reduce
const todosBolsistas2 = (resultado, bolsista) => resultado && bolsista
console.log('Com reduce - todosBolsistas =', alunos.map(a => a.bolsista).reduce(todosBolsistas2))

// Desafio 2: Algum aluno é bolsista?
// Sem reduce
console.log('Algum aluno é bolsista?', mapAlunos.length > 0)

// Com reduce
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log('Com reduce - algumBolsista =', alunos.map(a => a.bolsista).reduce(algumBolsista))
