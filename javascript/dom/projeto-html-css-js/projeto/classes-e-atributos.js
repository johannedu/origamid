// const contato = document.querySelector('.contato');

// console.log(contato.classList)
// contato.classList.remove('contato')
// console.log(contato.classList)
// contato.classList.add('neymar')
// console.log(contato.classList)
// contato.classList.toggle('pele')
// console.log(contato.classList)



// const img = document.querySelector('img');

// console.log(img.setAttribute('alt', 'Raposa'))


// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => {
     item.classList.add('ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// menu.forEach((item) => {
//      item.classList.remove('ativo')
// });

// menu[0].classList.add('ativo')

// // Verifique se as imagens possuem o atributo alt

// const img = document.querySelectorAll('img');

// img.forEach((i) => {
//     console.log(i.hasAttribute('alt'))
// })

// // Modifique o href do link externo no menu

// const modificandoLink = document.querySelector('[href^="https://www.origamid.com/"')

// modificandoLink.setAttribute('href', 'https://www.google.com')

// const small = window.matchMedia('(max-width:600px)').matches ? 'Usuario mobile': 'Usuario dekstop';

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');

const verificacaoDistancia = primeiraImg.offsetTop;

console.log(verificacaoDistancia)

console.log("=====================================================")

// Retorne a soma da largura de todas as imagens

const todasImagens = document.querySelectorAll('img');

todasImagens.forEach((item) => {
    
})

console.log("=====================================================")

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');


links.forEach((i) => {
    const linkHeigth = i.offsetHeight;
    const linkWidth = i.offsetWidth;
    if (linkHeigth >= 48 && linkWidth >= 48){
        console.log(i, 'Link acessivel')
    } else {
        console.log(i, 'link inacessivel')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const janela = window.matchMedia('(max-width: 720px)').matches;

if (janela){
    console.log('Menor ou igual a 720px')
    const menuMobile = document.querySelector('.menu');
    menuMobile.classList.add('menu-mobile')
} 

