export default function cardProdutoInicial (name, id, imageUrl, price) {
    const card = document.createElement("li")
    card.className = `product-card` 
    const conteudo = `
                    <a href="./views/produto.html?id=${id}">
                        <img src="${imageUrl}"
                        alt="imagem do produto">
                    </a>
                    <p class="card-nome">${name}</p>
                    <p class="card-preco">R$ ${price}</p>
                    <a href="./views/produto.html?id=${id}" class="card-link">Ver produto</a>
    `

    card.innerHTML = conteudo
    console.log(card) //exibe cards criados
    return card
}