const inicio = document.querySelector("#inicio");
const fim = document.querySelector("#fim");
const intervalo = document.querySelector("#intervalo");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#botao");

function intervaloFuncao() {
  const inicioValor = Number(inicio.value);
  const fimValor = Number(fim.value);
  const intervalorValor = Number(intervalo.value);

  if (inicioValor === 0 || fimValor === 0 || intervalorValor === 0){
    alert('Valor nulo ou igual a 0, tente novamente!')
  } else{
    for (let i = inicioValor; i < fimValor; i += intervalorValor) {
    resultado.innerHTML += `${i} > `;
  }
  resultado.innerHTML += "🏁";
}
  }
  

function ativarFuncao() {
  botao.addEventListener("click", intervaloFuncao);
}

ativarFuncao();
