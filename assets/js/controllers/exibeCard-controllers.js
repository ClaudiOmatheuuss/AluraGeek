import { conectaApi } from "../services/produtos-services.js"
import criaCard from "./criaCard-controllers.js"

const starwarsProdutos = document.getElementById("starwars__products")
const consolesProdutos = document.getElementById("consoles__products")
const diversosProdutos = document.getElementById("diversos__products")

async function exibeCards() {
    try {
        const listaApi = await conectaApi.listaProdutos();

        listaApi.forEach(element => {
            if (element.section === "starWars") {
                starwarsProdutos.appendChild(criaCard( element.name, element.id, element.imageUrl, element.price, element.sectionId ));
            } else if (element.section === "consoles") {
                consolesProdutos.appendChild(criaCard( element.name, element.id, element.imageUrl, element.price, element.sectionId ));
            } else if (element.section === "diversos") {
                diversosProdutos.appendChild(criaCard( element.name, element.id, element.imageUrl, element.price, element.sectionId ));
            }
        });
    } catch (error) {
        console.log(error);
    }
}

exibeCards();