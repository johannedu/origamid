function areaQuadrado (lado){
    return lado * lado;
}

console.log (areaQuadrado(100))

function imc (peso, altura){
    let imc =  peso / (altura * altura);
    return imc;
}

console.log(imc(80 , 1.7))

//COR FAVORITA

function corFavorita (cor) {
    if(cor === 'Verde'){
        return("A cor favorita do usuario é VERDE")
    } else if (cor === 'Vermelho'){
        return ("A cor favorita do úsuario é VERMELHO")
    } else {
        return 'EU NÃO GOSTO DE CORES'
    }
}

console.log (corFavorita('Verde'))

addEventListener('click', function (){
    console.log('oi')
})


function idadeDoUsuario (idades){
    if (typeof idades !== 'number'){
        return'Você não digitou um número, tente novamente:'
    }   else if (idades >= 18){
        return 'Você é maior de idade'
    }   else {
        return'Você é menor de idade'
    }
}

console.log (idadeDoUsuario(18))

