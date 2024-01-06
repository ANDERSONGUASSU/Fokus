const html =  document.querySelector('html');
const buttons = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contexto = button.dataset.contexto;
        html.setAttribute('data-contexto', contexto)
        banner.setAttribute('src', `/img/${contexto}.png`)
    })
})