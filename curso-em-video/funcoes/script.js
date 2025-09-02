const txtn1 = document.querySelector('#txtn1');
const botao = document.querySelector('#botao');

function multiplicar(){
    let n1 = Number(txtn1.value)
    
    for (let i = 1; i < 11 ; i++){
        let paragrafo = document.querySelector("#resultado").innerHTML += 
        `<p>${n1} * ${i}: <strong> ${n1 * i } </strong></p> `
    }
}



function ativarMultiplicar (){
botao.addEventListener ('click', multiplicar)
}



ativarMultiplicar()
