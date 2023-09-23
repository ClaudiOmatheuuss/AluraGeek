import { conectaApi } from '../services/produtos-services.js'
import criaCard from './criaCard-controllers.js'

async function carregaProdutos () {
    const listaProdutos = await conectaApi.listaProdutos()
    //armazena lista de produstos da API

    const url = new URL(window.location)
    let idParametro = url.searchParams.get("id") //pega parametro id na url

    let produtoSelecionado = listaProdutos.find(item => item.id === Number(idParametro)) //procura o produto na lista da API com mesmo id do valor passado na URL
    console.log(produtoSelecionado)

    chamaProdutoSelecionado(produtoSelecionado);
    carregaSimilares(produtoSelecionado, listaProdutos);
}

function chamaProdutoSelecionado(produtoSelecionado) {
    const secaoProduto = document.querySelector(".selected__container");

    const produtoEscolhido = document.createElement("div");
    produtoEscolhido.classList.add("selected__product");

    const imagemProduto = document.createElement("div");
    imagemProduto.classList.add("selected__img");
    imagemProduto.style.backgroundImage = `url('.${produtoSelecionado.imageUrl}')`;

    const conteudo = `
        <div class="selected__info">
            <h1 class="selected__title">${produtoSelecionado.name}</h1>
            <p class="selected__price">R$ ${produtoSelecionado.price}</p>
            <p class="selected__description">${produtoSelecionado.description}</p>
        </div>`;

    produtoEscolhido.appendChild(imagemProduto);
    produtoEscolhido.innerHTML += conteudo;

    secaoProduto.appendChild(produtoEscolhido);

}

function carregaSimilares(produtoSelecionado, listaProdutos) {
    const similaresSection = document.querySelector(".similar__products");

    //filtra produtos da api com a mesma categoria em comum do produto selecionado
    let produtosSimilares = listaProdutos.filter( item => item.section === produtoSelecionado.section )
    //filtra entre os produtos da mesma categoria apenas os produtos com id diferente do produto selecionado
    produtosSimilares = produtosSimilares.filter( item => item.id !== Number(produtoSelecionado.id) )

    //recorta itens filtrados da mesma categoria do indice 0 até 5, ou seja, retorna 6 objetos de produtos
    produtosSimilares = produtosSimilares.slice(0,5)

    //para cada produto similar cria um card
    produtosSimilares.forEach( product =>
        similaresSection.appendChild(criaCard( product.name, product.id, product.imageUrl, product.price ))
    )

}

carregaProdutos();