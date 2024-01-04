const html =  document.querySelector('html');
const buttons = document.querySelectorAll('.app__card-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contexto = button.dataset.contexto;
        html.setAttribute('data-contexto', contexto)
    })
})