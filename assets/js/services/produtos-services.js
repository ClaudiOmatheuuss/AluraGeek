// GET

async function listaProdutos () {
    const listaApi = await fetch("http://localhost:3000/produtos")
    .then(resposta => resposta.json())
    .catch(error => console.log(error))

    return listaApi
}

// POST

async function criaProdutos (imageUrl, section, name, price, description) {
    await fetch("http://localhost:3000/produtos", {
        method: "POST",//metodo do fetch
        headers: {//tipo do conteudo
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({ //objeto esperado
            imageUrl: imageUrl,
            section: section,
            name: name,
            price: `${price},00`,
            description: description
        })
    }).then(resposta => {
        if (resposta.ok) { //se resposta tiver correta retorna o body
            return resposta.body
        } else {
            throw new Error("Não foi possível criar o produto.")
        }
    })
}

export const produtoServices = {
    listaProdutos,
    criaProdutos
}