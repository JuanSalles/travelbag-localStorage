import item from "./item.js";
import memoria from "./memoria.js";

const form = document.getElementById("novoItem");
const lista = document.getElementById("lista-1");
const botaoLimpar = document.getElementById("botaoLimpar");

const novaMemoria = new memoria();

const listaDeItems = [];


function criaElemento (nome, quantidade){

    const numeroItem = document.createElement('strong');
    const novoItem = document.createElement('li');

    novoItem.classList.add("item");

    numeroItem.textContent = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    return novoItem;
}

function exibirLista (array){

    console.log(array)
    lista.textContent = "";
    
    array.forEach(element => {

        console.log(element.nome);

        const elementoHTML = criaElemento(element.nome, element.quantidade);
        lista.appendChild(elementoHTML);

    });
}

if(novaMemoria.ler()){

    console.log("tinha algo", novaMemoria.ler());
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

botaoLimpar.addEventListener('click', () =>{

    listaDeItems.splice(0, listaDeItems.length);
    localStorage.removeItem("mochila");
    console.log("limpo")

})


