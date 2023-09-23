import { conectaApi } from '../services/produtos-services.js'

function carregaCategoria() {
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

        if (parametroSection === "starWars") {
            secaoTitulo.textContent = "Star Wars"
        } else if (parametroSection === "consoles") {
            secaoTitulo.textContent = "Consoles"
        } else {
            secaoTitulo.textContent = "Diversos"
        }

        categoriaSelecionada.forEach(produto => {
            secaoProdutos.appendChild(criaProdutos(produto.name, produto.id, produto.imageUrl, produto.price))
        })

    } catch (error) {
        console.log(error);
    }
}

function criaProdutos(name, id, imageUrl, price) {
    const card = document.createElement("li")
    card.className = `product-card`
    const conteudo = `
                        <a href="./produto.html?id=${id}">
                            <img src=".${imageUrl}"
                            alt="imagem do produto">
                        </a>
                        <p class="card-nome">${name}</p>
                        <p class="card-preco">R$ ${price}</p>
                        <a href="./produto.html?id=${id}" class="card-link">Ver produto</a>
        `

    card.innerHTML = conteudo
    return card
}

carregaCategoria();