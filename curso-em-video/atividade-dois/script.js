function carregar() {
  const mensagem = document.querySelector("#mensagem");

  const img = document.querySelector("#imagem");

  const agora = new Date();

  const mensagemAparece = agora.getHours();

  if (mensagemAparece > 0 && mensagemAparece < 12) {
    document.body.style.backgroundColor = "#00f2ffff";
    mensagem.innerHTML = `O horário com base na sua localização é: ${mensagemAparece} horas`;
  } else if (mensagemAparece > 12 && mensagemAparece < 17) {
    document.body.style.backgroundColor = "#a45807ff";
    mensagem.innerHTML = `O horário com base na sua localização é: ${mensagemAparece} horas`;
    img.src = "tarde.jpg";
  } else {
    document.body.style.backgroundColor = "#030100ff";
    mensagem.innerHTML = `O horário com base na sua localização é: ${mensagemAparece} horas`;
    img.src = "noite.jpg";
  }
}

carregar();
