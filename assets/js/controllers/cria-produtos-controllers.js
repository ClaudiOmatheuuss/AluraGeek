import { produtoServices } from "../services/produtos-services.js";

const formulario = document.querySelector("[data-form]");


async function adicionarProduto(evento) {

    evento.preventDefault();

    const imageUrl = document.querySelector("[data-imageUrl]").value;
    const section = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nome]").value;
    const price = document.querySelector("[data-preco]").value;
    const description = document.querySelector("[data-descricao]").value;


    await produtoServices.criaProdutos(imageUrl, section, name, price, description); 
}

formulario.addEventListener("submit", evento => adicionarProduto(evento));