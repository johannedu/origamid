// const img = document.querySelector('img');

// function callback (event){
//     console.log(event)
// }

// img.addEventListener('click', callback)

// function handleKeyboard(event) {
//   if(event.key === 'a')
//     document.body.classList.toggle('azul');
//   else if(event.key === 'v')
//     document.body.classList.toggle('vermelho');
// }

// window.addEventListener('keydown', handleKeyboard);

// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function callback (event){
    event.preventDefault();
    linksInternos.forEach((i) => {
        i.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
}


linksInternos.forEach ((i) => {
    i.addEventListener('click', callback)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

 function corpoSite (event){
     console.log(event.target)
 }

 window.addEventListener('click', corpoSite)

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

function corpoSite (event){     console.log(event.target.remove()) }

window.addEventListener('click', corpoSite)

// // Se o usuário clicar na tecla (t), aumente todo o texto do site.

 function fonteMaior (event){
     if (event.key === 't'){
         document.body.classList.toggle('aumentarFonte');
     }
 }

 window.addEventListener('keydown', fonteMaior)
