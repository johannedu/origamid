// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let idadeJohann = 19;
let idadeMarilda = 40;

if (idadeJohann > idadeMarilda){
    console.log ("Johann é mais velho")
}   else if (idadeJohann === idadeMarilda){
    console.log ("Os dois tem a mesma idade")
}   else {
    console.log("A Marilda é mais velha")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log (expressao)

console.log ('NaN')

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log (!!nome)
console.log (!!idade)
console.log (!!possuiDoutorado)
console.log (!!empregoFuturo)
console.log (!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil < china){
    console.log (`O que tudo indica, na CHINA tem uma população de: ${china} em quanto no Brasil tem uma população de ${brasil}`)
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}