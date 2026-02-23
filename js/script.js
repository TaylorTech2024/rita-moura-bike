// SCROLL SUAVE ESTILO APPLE

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});


// ANIMAÇÃO AO ROLAR

const elementos = document.querySelectorAll(".card");

function animar(){

const topoTela = window.innerHeight * 0.85;

elementos.forEach(el=>{

const posicao = el.getBoundingClientRect().top;

if(posicao < topoTela){
el.classList.add("mostrar");
}

});

}

window.addEventListener("scroll", animar);
animar();