const elementos =
document.querySelectorAll(".card, h2, .contato p");

function animarScroll(){

const topoTela = window.innerHeight * 0.85;

elementos.forEach(el => {

const posicao = el.getBoundingClientRect().top;

if(posicao < topoTela){
el.classList.add("mostrar");
}

});

}

window.addEventListener("scroll", animarScroll);

animarScroll();