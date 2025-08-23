// const animais = document.getElementById('animais')

// console.log(animais)

// const linksInternos = document.querySelector('[href^="#"')

// console.log(linksInternos)

// // console.log(document.querySelector('ul').innerHTML)

// const animaisImg = document.querySelectorAll ('.animais img')

// console.log(animaisImg)

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

function activeTab (index){
    tabContent.forEach((section)=>{
        section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index)=> {
    itemMenu.addEventListener('click', function(){
        activeTab(index)
    })
})

