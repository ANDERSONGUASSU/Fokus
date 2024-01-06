const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/img/foco.png')
})
curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'short')
    banner.setAttribute('src', '/img/short.png')

})
longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'long')
    banner.setAttribute('src', '/img/long.png')

})