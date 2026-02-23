// PRELOADER
window.addEventListener("load",()=>{
document.body.classList.add("loaded");
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click", function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
});
});

// ANIMAÇÃO AO ROLAR
const elementos=document.querySelectorAll(".card, section");
function animar(){
const topo=window.innerHeight*0.85;
elementos.forEach(el=>{
const pos=el.getBoundingClientRect().top;
if(pos<topo){el.classList.add("mostrar");}
});
}
window.addEventListener("scroll",animar);
animar();

// BOTÃO WHATSAPP
document.querySelectorAll(".btn, .btn-menu").forEach(btn=>{
btn.addEventListener("click",()=>{
window.open("https://wa.me/5581984970358","_blank");
});
});