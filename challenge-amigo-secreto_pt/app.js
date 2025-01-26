//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = "";
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`;
    } else {
        document.getElementById('resultado').textContent = "Adicione amigos para sortear!";
    }
}
    //function sortearAmigo(){
