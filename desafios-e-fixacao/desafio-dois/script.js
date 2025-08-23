//CRIAR UMA LISTA DE COMPRAS ONDE CADA ITEM QUER FOR ADICIONADO SEJA DIRECIONADO PARA A LISTA

//PARA MANIPULARMOS ESSE VALOR FUTURAMENTE, PRECISAMOS DE UMA ARRAY QUE ARMAZENE ESSES VALORES

let arrayArmazenador = []; //LISTA COM INDICE 0
function adicionarItem() {
  const paragrafo = document.querySelector("p");

  const input = document.querySelector("#inputTarefa");
  const capturaValorInput = input.value.trim();

  if (capturaValorInput === "") {
    const mensagemErro = "Digite novamente, valor vazio.";

    paragrafo.innerText = mensagemErro;
  } else {
    const mensagemSucesso = "Item adicionado com sucesso!";

    paragrafo.innerText = mensagemSucesso;
    const listaCompras = document.querySelector(".listaCompras");
    let listaComprasLi = document.createElement("li");
    listaCompras.appendChild(listaComprasLi);
    listaComprasLi.innerText = capturaValorInput;
    arrayArmazenador.push(capturaValorInput); //DANDO .PUSH PARA QUE CADA ITEM ADICIONADO DENTRO DESSE INPUT SEJA REDIRECIONADO A ARRAY
    console.log(arrayArmazenador);
    let botaoApagar = document.createElement("button");
    botaoApagar.classList.add('botaoApagar')
    botaoApagar.innerText = "Remover";
    listaComprasLi.appendChild(botaoApagar);
  }
}

//QUERO CRIAR UM BOTAO DENTRO DE CADA LI PARA QUE EU POSSA APAGAR DETERMINADO ITEM ADICIONADO
function apagarItem() {
  
}
