
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista-1");

const listaDeItems = [];

if (localStorage.mochila){
    listaDeItems.push(JSON.parse(localStorage.mochila));
    exibirLista();
}else{
    localStorage.setItem("mochila", "");
}

function exibirLista (){
    
    listaDeItems.forEach(element => {
        lista.appendChild(element);
    });
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const nomeDoItem = event.target.elements["nome"];
    const quantidade = event.target.elements["quantidade"];

    criaElemento(nomeDoItem.value, quantidade.value)

    nomeDoItem.value = "";
    quantidade.value = "";

    

})

function criaElemento (nome, quantidade){

    const numeroItem = document.createElement('strong');
    const novoItem = document.createElement('li');

    novoItem.classList.add("item");

    numeroItem.textContent = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    listaDeItems.push(novoItem);

    localStorage.setItem("mochila", JSON.stringify(listaDeItems));

    exibirLista();
}


