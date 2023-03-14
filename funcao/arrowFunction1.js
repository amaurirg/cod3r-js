let dobro = function (a) {
    return 2 * a
}
// Reescrevendo com arrow function
dobro = (a) => {
    return 2 * a 
}
// Mais reduzida
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}
// Reescrevendo com arrow function
ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())
