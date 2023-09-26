import { produtoServices } from "../services/produtos-services.js";

async function deletarProduto(evento) {
    evento.preventDefault();
    const escolhidoNome = await produtoSelecionado()
    try {
        await produtoServices.deletaProdutos(escolhidoNome);
        window.location.href = "./adm.html";
    } catch (error) {
        console.error(error);
    }
}



const formulario = document.querySelector("[data-form]");
const categoriaSelecionada = document.querySelector("[data-categoria]");

async function criaOpcoes() {
    //pega valor de categoria selecionada e para cada 
    //produto em categoria selecionada cria uma tag option com valor igual ao seu id e o seu textContent = ao seu nome 
    const valorCategoria = categoriaSelecionada.value;
    console.log("categoria:", valorCategoria);
    
    try {
        const lista = await listaProdutos(valorCategoria)

        const campoProdutos = document.getElementById("selecionaProduto")

        campoProdutos.innerHTML = ""
        const opcaoInicial = document.createElement("option")
        opcaoInicial.value = ""

        campoProdutos.appendChild(opcaoInicial)

        lista.forEach(produto => {
            const opcao = document.createElement("option");
            opcao.id = "opcaoProduto"
            opcao.value = `${produto.name}`;

            const conteudo = `${produto.name}`;
            opcao.innerHTML = conteudo;
            campoProdutos.appendChild(opcao);
        });

    } catch (error) {
        console.error(error);
    }
}

async function listaProdutos(categoria) {
    try {
        const listaApi = await fetch("https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos");

        const produtosApi = await listaApi.json()
        
        const produtosFiltrados = produtosApi.filter((produto) => {
            return categoria === produto.section
        });
        
        console.log("Produtos filtrados:", produtosFiltrados)
        return produtosFiltrados

    } catch (error) {
        console.error(error)
    }
}

const inputProduto = document.querySelector("[data-produto]")

function produtoSelecionado() {
    const produtoEscolhido = inputProduto.value;
    console.log("produto escolhido:", produtoEscolhido);
    return produtoEscolhido
}

if(formulario) {
    categoriaSelecionada.addEventListener("change", criaOpcoes);
    inputProduto.addEventListener("change", produtoSelecionado)
    formulario.addEventListener("submit", evento => deletarProduto(evento));
}