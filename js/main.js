import item from "./item.js";
import memoria from "./memoria.js";
import criaElemento from "./criaElemento.js";

const form = document.getElementById("novoItem");
const lista = document.getElementById("lista-1");
const botaoLimpar = document.getElementById("botaoLimpar");

const novaMemoria = new memoria();

const listaDeItems = [];


function exibirLista(array) {

    lista.textContent = "";

    array.forEach((element, index) => {

        const elementoHTML = criaElemento(element.nome, element.quantidade, index);
        lista.appendChild(elementoHTML);

    });
}


if (novaMemoria.ler()) {

    listaDeItems.push(...novaMemoria.ler())
    exibirLista(listaDeItems);

};

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const nomeDoItem = event.target.elements["nome"];
    const quantidade = event.target.elements["quantidade"];

    const novoItem = new item(nomeDoItem.value, quantidade.value);

    listaDeItems.push(novoItem);

    exibirLista(listaDeItems);

    novaMemoria.salvar(listaDeItems);

    nomeDoItem.value = "";
    quantidade.value = "";

})

botaoLimpar.addEventListener('click', () => {

    listaDeItems.splice(0, listaDeItems.length);
    localStorage.removeItem("mochila");
    

})

lista.addEventListener('click', (event) => {
    
    if (event.target.dataset.item) {
        const itemExcluido = event.target.dataset.item;
        listaDeItems.splice(itemExcluido, 1);
        exibirLista(listaDeItems);
        novaMemoria.salvar(listaDeItems);
    }

})


