/* Crie três variáveis: nome (string), idade (número) e temCarteiraMotorista (boolean).

Mostre no console uma frase que use todas essas variáveis.*/

const nome = 'Johann';
const idade = 19;
let temCarteiraMotorista = false

const fraseCompleta = `Meu nome é: ${nome}, tenho ${idade} e minha habilitação é: ${temCarteiraMotorista}`

console.log(fraseCompleta

)

/* Crie uma função que receba um número e retorne o dobro dele.

Crie outra função que receba dois números e retorne a soma.*/

function dobro (x){
    let duplicar = x * 2;
    return duplicar
}

function soma (x , y){
    let soma = x + y;
    return soma
}

console.log(dobro(2))
console.log(soma(2 , 10))

/*Crie uma variável temDinheiro = true.

Use o ternário para mostrar "Pode comprar" se for true, ou "Sem grana" se for false.*/

let temDinheiro = true;

let verificacao = (temDinheiro);

console.log(verificacao)