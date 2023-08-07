import item from "./item.js";
import memoria from "./memoria.js";
import criaElemento from "./criaElemento.js";

const form = document.getElementById("novoItem");
const lista = document.getElementById("lista-1");
const botaoLimpar = document.getElementById("botaoLimpar");
const botaoEditar = document.getElementById('botao-submit');

const novaMemoria = new memoria();

const listaDeItems = [];

const condicaoDoItem = {condicao: true, index: 0};


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

    botaoEditar.value = "Adicionar";

    const nomeDoItem = event.target.elements["nome"];
    const quantidade = event.target.elements["quantidade"];

    const novoItem = new item(nomeDoItem.value, quantidade.value);
    
    if (condicaoDoItem.condicao){
        listaDeItems.push(novoItem);
    }else{
        listaDeItems[condicaoDoItem.index] = novoItem;
    }

    condicaoDoItem.condicao = true;
    

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
    
    if (event.target.dataset.deleteItem) {

        const itemExcluido = event.target.dataset.deleteItem;
        listaDeItems.splice(itemExcluido, 1);
        exibirLista(listaDeItems);
        novaMemoria.salvar(listaDeItems);

    }else if (event.target.dataset.item){

        const nomeDoItem = document.getElementById('nome');
        const quantidadeDosItems = document.getElementById('quantidade');
        const itemEditado = event.target.dataset.item;
    
        botaoEditar.value = "Editar";

        nomeDoItem.value = listaDeItems[itemEditado].nome;
        quantidadeDosItems.value = listaDeItems[itemEditado].quantidade;
        condicaoDoItem.condicao = false;
        condicaoDoItem.index = itemEditado;

    }

})


