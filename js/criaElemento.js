export default function criaElemento (nome, quantidade, index){

    const numeroItem = document.createElement('strong');
    const novoItem = document.createElement('li');
    const botao = document.createElement('button')
    const div = document.createElement('div');
    
    div.classList.add("container-lista");

    botao.textContent = "X";

    novoItem.classList.add("item");
    botao.setAttribute("type", "button");
    botao.setAttribute("data-deleteItem", index);
    novoItem.setAttribute("data-Item", index);
    botao.classList.add("excluir-item");

    numeroItem.textContent = quantidade;

    div.appendChild(numeroItem);
    div.innerHTML += nome;
    novoItem.appendChild(div);
    novoItem.appendChild(botao);

    return novoItem;
}