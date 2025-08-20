// Retorne no console todas as imagens do site

const img = document.querySelectorAll('img')

console.log(img)


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgSelecionada = document.querySelectorAll('.animais-lista img')

console.log(imgSelecionada)


// Selecione todos os links internos (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]')

console.log(linkInterno)


// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroAga = document.querySelector('.animais-descricao h2')

console.log(primeiroAga)

// Selecione o último p do site

const paragrafo = document.querySelectorAll ('p')

console.log(paragrafo[paragrafo.length - 1])
console.log("========================================================")

img.forEach ((item, indice) => {
    console.log(item, indice)
})



