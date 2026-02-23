/* ANIMAÇÃO SCROLL PROFISSIONAL */

const elementos =
document.querySelectorAll(".animar");

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("ativo");
}

});

},
{
threshold:0.2
}
);

elementos.forEach(el=>{
observer.observe(el);
});


/* PARALLAX HERO */

window.addEventListener("scroll",()=>{

const hero = document.querySelector(".hero");

let scroll = window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

});