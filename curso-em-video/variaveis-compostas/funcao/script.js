//CRIAR UM PROGRAMA ONDE VOU DIGITAR UM NOME E ELE VAI ALOCAR NO SELECT, TODO NUMERO ALOCADO DEVE SER ENVADO PARA UMA ARRAY, SE O NUMERO JA EXISTIR EXIBIR UM ALERT NA TELA, SE FOR ACIMA DE 100 OU MENOR QUE 1, EXIBIR UMA MENSAGEM.

//CRIAR OPTION DE FORMA DINAMICA

const numberInput = document.querySelector("#numberInput");

const inputButton = document.querySelector("#inputButton");

const buttonFinalizar = document.querySelector("#buttonFinalizar");

let vetorArray = [];

function enviarDados(finalizarDados) {
  let mudarNumber = Number(numberInput.value);
  if (
    mudarNumber < 1 ||
    mudarNumber > 100 ||
    mudarNumber == "" ||
    vetorArray.includes(mudarNumber)
  ) {
    alert("[ERRO] valor inválido ou vazio.");

    return;
  } else {
    vetorArray.push(mudarNumber);

    console.log(vetorArray);

    const selectInput = document.querySelector("#select");

    let criarOption = document.createElement("option");

    selectInput.appendChild(criarOption);

    criarOption.innerText = mudarNumber;

    numberInput.value = "";


    return;
  }

  
}

function finalizarDados() {
  
  let criarParagrafo = document.createElement("p");
  const divParagrafo = document.querySelector("#divParagrafo");
  divParagrafo.appendChild(criarParagrafo);

  criarParagrafo.innerText = `Você digitou um total de ${vetorArray.length} números. `;
  criarParagrafo = ''

}


function ativarFuncao() {
  inputButton.addEventListener("click", enviarDados);
}

function ativarFuncaoFinalizar() {
  
  buttonFinalizar.addEventListener("click", finalizarDados);
}

ativarFuncaoFinalizar();

ativarFuncao();


