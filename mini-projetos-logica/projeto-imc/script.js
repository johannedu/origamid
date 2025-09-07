const calcular = document.querySelector("#calcular");

function imc() {
  const nome = document.querySelector("#nome").value;
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  const resultado = document.querySelector("#resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (valorIMC < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorIMC < 25){
      classificacao = 'Peso ideal'
    } else if (valorIMC < 30) {
      classificacao = 'Levemente acima do peso'
    } else if (valorIMC < 35){
      classificacao= 'Obesidade grau 1'
    } else if (valorIMC < 40){
      classificacao = 'Obesidade grau 2'
    } else {
      classificacao = 'Com obesidade grau 3. CUIDADO!!!'
    }


    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;
    
  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
