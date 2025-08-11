// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

let dadosPessoais = {
    nome: 'Johann',
    sobrenome: 'Eduardo',
    nomeCompleto (){
        return `Seu nome completo é: ${this.nome + ' ' + this.sobrenome}`
    }
}

console.log (dadosPessoais.nomeCompleto())


// Modifique o valor da propriedade preco para 3000
let carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log (carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: 'Vibrador',
    idade: 10,
    cor : 'Preto',
    verHomem (homem){
        if (homem === "Passou"){
            return "AUAUAUAUAUAUA"
        } else {
            return "Não passou"
        }
    }
}