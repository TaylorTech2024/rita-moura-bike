const elementos = document.querySelectorAll(".card, h2");

window.addEventListener("scroll", () => {

const topoTela = window.innerHeight * 0.85;

elementos.forEach(el => {

const posicao = el.getBoundingClientRect().top;

if(posicao < topoTela){
el.classList.add("mostrar");
}

});

});