import { conectaApi } from '../services/produtos-services.js'
import criaCard from './criaCard-controllers.js'

function carregaCategoria () {
    const url = new URL(window.location)
    let parametroSection = url.searchParams.get("section") //pega parametroSection id na url

    criaCategoria(parametroSection);
}

async function criaCategoria(parametroSection) {
    try {
        const listaProdutos = await conectaApi.listaProdutos()
        const secaoProdutos = document.querySelector(".category__content")
        const categoriaSelecionada = listaProdutos.filter(produto => produto.section === parametroSection)

        const secaoTitulo = document.querySelector(".category__title")

        if ( parametroSection === "starWars" ) {
            secaoTitulo.textContent = "Star Wars"
        } else if ( parametroSection === "consoles" ) {
            secaoTitulo.textContent = "Consoles"
        } else {
            secaoTitulo.textContent = "Diversos"
        }

        categoriaSelecionada.forEach(produto => {
            secaoProdutos.appendChild(criaCard(produto.name, produto.id, produto.imageUrl, produto.price))
        })

        } catch (error) {
            console.log(error);
        }
}

carregaCategoria();