// Selecione todas as imagens da página e:
// Mostre no console a largura de cada uma.
// Calcule a largura total da galeria (somando todas).
// Dica: getBoundingClientRect().width


const imgs = document.querySelectorAll('img');


let soma = 0;
imgs.forEach ( (i) => {
    const tamanho = i.offsetWidth;
    soma += tamanho
})

console.log(`a soma de todos juntos é: ${soma}`)


// Imagine um menu de links (<a>).
// Adicione uma classe "ativo" no link clicado.
// Remova "ativo" dos outros.
// Use forEach + addEventListener.


const linksInternos = document.querySelectorAll('a');


function callback (event){
    event.preventDefault();
    linksInternos.forEach((i)=>{
        i.classList.remove('ativo')
    })
    event.target.classList.add('ativo')
}


linksInternos.forEach( ( i ) => {
 i.addEventListener('click', callback)
})