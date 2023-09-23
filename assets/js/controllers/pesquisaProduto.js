import { conectaApi } from '../services/produtos-services.js'
import cardProduto from "./exibePesquisa-controllers.js"

async function buscarProduto(event){
    event.preventDefault();
    const termoDeBusca = document.querySelector("[data-input-pesquisa]").value
    const listaProdutos = await conectaApi.listaProdutos()
    
    
    const secaoProdutos = document.querySelector(".products__container")
    secaoProdutos.removeChild(secaoProdutos.firstChild);  
    const containerProdutos = document.querySelector("[data-produtos]")

    const produtosFiltrados = listaProdutos.filter(product => {
        const infoCombinadas = `${product.id ? product.id : ""} 
                                ${product.price ? product.price : ""} 
                                ${product.name ? product.name.toLowerCase() : ""} 
                                ${product.section ? product.section.toLowerCase() : ""}
                            `;
        return infoCombinadas.includes(termoDeBusca);
    })

    containerProdutos.innerHTML = "";

    produtosFiltrados.forEach(product => {
        const card = cardProduto(product.name, product.id, product.imageUrl, product.price)
        containerProdutos.style.flexDirection = "row"
        containerProdutos.style.gap = "24px"
        containerProdutos.style.flexWrap = "wrap"
        containerProdutos.appendChild(card)
    })

    const mensagem = document.createElement("div")
    mensagem.className = "category__header"
    const mensagemResultados = `<h2>Resultado(s) de busca</h2>`
    const mensagemErro = `<h2>Produto não encontrado</h2>`
    
    produtosFiltrados.length === 0 ? mensagem.innerHTML = mensagemErro : mensagem.innerHTML = mensagemResultados;
    secaoProdutos.insertBefore(mensagem, secaoProdutos.firstChild);
}

const botaoDePesquisa = document.querySelector(".btn__pesquisa__img");
botaoDePesquisa.addEventListener("click", event => buscarProduto(event));