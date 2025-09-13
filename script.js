const body = document.body;
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

body.onload = function() {
    // pegar o modo salvo no localstorage
    const mode = localStorage.getItem("mode");
    
    // verificar se há um modo salvo
    // se tiver um mode salvo, adiciona no body
    if (mode) {
        body.className = mode;
        return;
    }

    // não tem um mode salvo, vamos salvar
    localStorage.setItem("mode", "light");
}

lightBtn.onclick = function() {
    body.className = "light";
    localStorage.setItem("mode", "light");
}

darkBtn.onclick = function() {
    body.className = "dark";
    localStorage.setItem("mode", "dark");
}