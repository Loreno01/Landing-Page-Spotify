function alterarTexto(id) {
    var conteudoUm = document.getElementById("principal-um");
    var conteudoDois = document.getElementById("principal-dois");

    if (conteudoUm.style.display === "none") {
        conteudoUm.style.display = "block";
    } else {
        conteudoUm.style.display = "none";
    }

    if (conteudoDois.style.display === "none") {
        conteudoDois.style.display = "block";
    } else {
        conteudoDois.style.display = "none";
    }
}

function deslizarEsquerda() {
    var um = document.getElementById("animado-principal-um");
    var dois = document.getElementById("animado-principal-dois");

    um.classList.add("deslizar-esquerda");
    dois.classList.add("deslizar-esquerda");

    setTimeout(() => {
        um.classList.remove("deslizar-esquerda");
        dois.classList.remove("deslizar-esquerda");
    }, 500);
}

function deslizarDireita() {
    var um = document.getElementById("animado-principal-um");
    var dois = document.getElementById("animado-principal-dois");

    um.classList.add("deslizar-direita");
    dois.classList.add("deslizar-direita");

    setTimeout(() => {
        um.classList.remove("deslizar-direita");
        dois.classList.remove("deslizar-direita");
    }, 500);
}

function divSelecionada(id) {
    var textos = document.getElementsByClassName("conteudo-section-two");
    for (var i = 0; i < textos.length; i++) {
        textos[i].style.display = "none";
    }

    var div = document.getElementById(id);
    if (div) {
        div.style.display = "block";
    }
}

