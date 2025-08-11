let pessoa = {
    nome: 'Johann',
    idade: 19,
}

console.log (pessoa.nome)
console.log (pessoa.idade)

var quadrado = {
    lados: 4,
    area: function (lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado
    }
}