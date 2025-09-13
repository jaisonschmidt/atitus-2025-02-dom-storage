const body = document.body;
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

lightBtn.onclick = function() {
    body.className = "light";
}

darkBtn.onclick = function() {
    body.className = "dark";
}