// GET

async function listaProdutos () {
    const listaApi = await fetch("https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos")
    .then(resposta => resposta.json())
    .catch(error => console.log(error))

    return listaApi
}

// POST

async function criaProdutos (imageUrl, section, name, price, description) {
    await fetch("https://651067693ce5d181df5d387c.mockapi.io/api/v1/produtos", {
        method: "POST",//metodo do fetch
        headers: {//tipo do conteudo
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({ //objeto esperado
            imageUrl: imageUrl,
            section: section,
            name: name,
            alt: "imagem do produto",
            price: `${price}`,
            description: description
        })
    }).then(resposta => {
        if (resposta.ok) { //se resposta tiver correta retorna o body
            window.location.href = "../views/adm.html"
            return resposta.body
        } else {
            throw new Error("Não foi possível criar o produto.")
        }
    })
}

export const produtoServices = {
    listaProdutos,
    criaProdutos,
}