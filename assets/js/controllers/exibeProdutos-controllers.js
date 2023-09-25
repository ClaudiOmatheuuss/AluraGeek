import {produtoServices} from "../services/produtos-services.js"

const containerStarWars = document.getElementById("starwars__products")
const containerConsoles = document.getElementById("consoles__products")
const containerDiversos = document.getElementById("diversos__products")

async function exibeProdutos() {
    try {
        const listaApi = await produtoServices.listaProdutos();

        let listaStarWars = listaApi.filter(product => product.section === "starWars")
        listaStarWars = listaStarWars.slice(0, 6)

        let listaConsoles = listaApi.filter(product => product.section === "consoles")
        listaConsoles = listaConsoles.slice(0, 6)

        let listaDiversos = listaApi.filter(product => product.section === "diversos")
        listaDiversos = listaDiversos.slice(0, 6)

        const listasProdutos = [listaStarWars, listaConsoles, listaDiversos]
        
        listasProdutos.forEach((lista, index) => {
            const container = [containerStarWars, containerConsoles, containerDiversos][index]
            lista.forEach(product => {
                const card = criaCard(product.name, product.id, product.imageUrl, product.price)
                container.appendChild(card)
            })
        })
        
    } catch (error) {
        console.log(error);
    }
}

function criaCard(name, id, imageUrl, price) {
    const card = document.createElement("li")
    card.className = `product-card`
    const conteudo = `
                        <a href="./views/produto.html?id=${id}">
                            <img src="${imageUrl}"
                            alt="imagem do produto">
                        </a>
                        <p class="card-nome">${name}</p>
                        <p class="card-preco">R$ ${price},99</p>
                        <a href="./views/produto.html?id=${id}" class="card-link">Ver produto</a>
        `

    card.innerHTML = conteudo
    return card
}

exibeProdutos()