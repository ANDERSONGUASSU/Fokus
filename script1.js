const html =  document.querySelector('html');
const buttons = document.querySelectorAll('.app__card-button');
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contexto = button.dataset.contexto;
        buttons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active')
        html.setAttribute('data-contexto', contexto)
        banner.setAttribute('src', `/img/${contexto}.png`)
        switch (contexto) {
            case "foco":
                title.innerHTML = `
                Otimize sua produtividade,<br />
          <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
                break;

            case "short":
                title.innerHTML = `
                Que tal dar uma respirada,<br />
        <strong class="app__title-strong">Faça uma pausa curta.</strong>`
                break;

            case "long":
                title.innerHTML = `
                Hora de voltar á superfície.<br />
        <strong class="app__title-strong">Faça uma pausa longa.</strong>`
                break;
        
            default:
                break;
        }
    })
})
