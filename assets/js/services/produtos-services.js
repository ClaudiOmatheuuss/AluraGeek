// GET

async function listaProdutos () {
    const listaApi = await fetch("http://localhost:3000/produtos")
    .then(resposta => resposta.json())
    .catch(error => console.log(error))

    return listaApi
}

export const conectaApi = {
    listaProdutos
}