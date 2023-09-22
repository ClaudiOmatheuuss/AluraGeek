const rodape = document.querySelector("footer");

function criaRodape() {
    const novoRodape = document.createElement("div")
    novoRodape.className = "footer";
    const conteudo = `<div class="footer__content">

            <div class="footer__logo">
                <a href="./index.html"><img src="../assets/img/footer/logo.png" alt="Controle de videogame azul e texto Alura Geek"></a>
            </div>
            <div class="footer__links">
                <nav>
                    <ul>
                        <li><a href="#">Quem somos nós</a></li>
                        <li><a href="#">Politica de privacidade</a></li>
                        <li><a href="#">Programa fidelidade</a></li>
                        <li><a href="#">Nossas lojas</a></li>
                        <li><a href="#">Quero ser franqueado</a></li>
                        <li><a href="#">Anuncie Aqui</a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="footer__form">
            <h2 class="footer__form__title">Fale conosco</h2>
            <form class="form">
                <div class="form__field">
                    <label for="nome" class="footer__form__label">Nome</label>
                    <input class="footer__form__input" type="text" name="nome" id="nome" placeholder="Seu nome" required minlength="3" >
                </div>
                <div class="form__field">
                    <textarea class="footer__form__textarea" rows="5" cols="40" id="mensagem" name="mensagem" placeholder="Escreva sua mensagem" required maxlength="300"></textarea>
                </div>
                <button class="footer__form__btn" id="formcontato__botao" type="submit">Enviar mensagem</button>
            </form>
        </div>`
    
    novoRodape.innerHTML = conteudo;
    rodape.appendChild(novoRodape);

    return rodape;
}

criaRodape();