import { produtoServices } from "../services/produtos-services.js"

const starwarsProdutos = document.getElementById("starwars__products")
const consolesProdutos = document.getElementById("consoles__products")
const diversosProdutos = document.getElementById("diversos__products")

async function exibeTodosProdutos() {
    try {
        const listaApi = await produtoServices.listaProdutos();

        listaApi.forEach(element => {
            if (element.section === "starWars") {
                starwarsProdutos.appendChild(criaTodosProdutos(element.name, element.id, element.imageUrl, element.price));
            } else if (element.section === "consoles") {
                consolesProdutos.appendChild(criaTodosProdutos(element.name, element.id, element.imageUrl, element.price));
            } else if (element.section === "diversos") {
                diversosProdutos.appendChild(criaTodosProdutos(element.name, element.id, element.imageUrl, element.price));
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function criaTodosProdutos(name, id, imageUrl, price) {
    const card = document.createElement("li")
    card.className = `product-card`
    const conteudo = `
                            <a href="./produto.html?id=${id}">
                                <img src="${imageUrl}"
                                alt="imagem do produto">
                            </a>
                            <p class="card-nome">${name}</p>
                            <p class="card-preco">R$ ${price},99</p>
                            <a href="./produto.html?id=${id}" class="card-link">Ver produto</a>
            `

    card.innerHTML = conteudo
    return card
}

exibeTodosProdutos();