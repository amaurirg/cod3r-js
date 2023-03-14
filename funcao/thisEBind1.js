const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// O bind vai referenciar o this, no caso pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()