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

menu.forEach((item) => {
     item.classList.remove('ativo')
});

menu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img');

img.forEach((i) => {
    console.log(i.hasAttribute('alt'))
})

// Modifique o href do link externo no menu

const modificandoLink = document.querySelector('[href^="https://www.origamid.com/"')

modificandoLink.setAttribute('href', 'https://www.google.com')




