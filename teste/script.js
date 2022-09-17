const add = document.getElementById("adicionar");
const remove = document.getElementById("remover");
const qntItens = document.getElementById("qntItens");

let contador = 0;

qntItens.innerHTML = contador;

function adicionar (){
    qntItens.innerHTML = ++contador
}

function remover (){
    qntItens.innerHTML = --contador

    if(contador < 0){
        adicionar();
    }
}



