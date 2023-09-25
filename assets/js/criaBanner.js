const banner = document.querySelector(".banner");

function criaBanner() {
    const novoBanner = document.createElement("div")
    novoBanner.className = "banner__content";
    const conteudo = `
                        <h2>Dezembro Promocional</h2>
                        <h4>Produtos selecionados com 33% de desconto</h4>
                        <a href="#consoles"><button>Ver Consoles</button></a>
                    `
    
    novoBanner.innerHTML = conteudo;
    banner.appendChild(novoBanner);

    return banner;
}

criaBanner();