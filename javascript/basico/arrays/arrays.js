let videoGame = ["Switch", "PS4", "Xbox"];

// let pops = videoGame.pop();

// let pushs = videoGame.push("PS3");

//  

videoGame.forEach(function(item, indice){
  console.log(item, indice )
})


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brasilCampeao.forEach(function(j){
  console.log(`O Brasil foi campeão nos anos de: ${j}`)
})
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if (frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let ultimaFruta = frutas.pop();

console.log(ultimaFruta, ultimaFruta)
console.log(frutas)
