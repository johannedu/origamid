// Crie uma função para verificar se um valor é Truthy

function verificacao (dado){
    if (dado){
        return !!dado
    } else {
        return !!dado
    }
}

console.log (verificacao(10));
console.log (verificacao(0));



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function ladoQuadrado (valor){
    let perimetro = valor * 4;
    return `O perimetro deste quadrado é aproximadamente: ${perimetro}`
}

console.log (ladoQuadrado(10))



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome (nome , sobrenome){
    let nomeCompleto = nome + " " + sobrenome
    return `Confirme, seu nome e sobrenome: ${nomeCompleto}`
}

console.log (nomeSobrenome("Johann", "Eduardo"))

// Crie uma função que verifica se um número é par

function verificarPar (x){
    if (x % 2 === 0){
        return "È par"
    } else {
        return "Impar"
    }
    
}

console.log (verificarPar(3))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado (j){
    return `Com base no dado que você nos deu, seu dado é: ${typeof j}`
}

console.log (tipoDeDado(1))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('scroll', function(){
    console.log ("Johann Eduardo Gonçalves Vieira")
})

// Corrija o erro abaixo
  var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}


console.log(precisoVisitar(20));
console.log(jaVisitei(20));