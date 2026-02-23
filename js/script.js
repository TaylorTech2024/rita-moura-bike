// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").classList.add("hide");
});

// Mobile menu
const burger = document.getElementById("burger");
const menuMobile = document.getElementById("menuMobile");

function closeMobileMenu() {
  burger.classList.remove("active");
  burger.setAttribute("aria-expanded", "false");
  menuMobile.classList.remove("open");
  menuMobile.setAttribute("aria-hidden", "true");
}

burger.addEventListener("click", () => {
  const isOpen = menuMobile.classList.toggle("open");
  burger.classList.toggle("active");
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  menuMobile.setAttribute("aria-hidden", isOpen ? "false" : "true");
});

// Header on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Smooth scroll (Apple-like easing)
function easeInOutCubic(t){ return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2; }

function smoothScrollTo(targetY, duration = 950) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();

  function step(now){
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + diff * eased);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function getOffsetTop(el){
  const rect = el.getBoundingClientRect();
  return rect.top + window.scrollY;
}

document.querySelectorAll("[data-scroll]").forEach(a => {
  a.addEventListener("click", (e) => {
    const sel = a.getAttribute("data-scroll");
    const el = document.querySelector(sel);
    if (!el) return;

    e.preventDefault();
    closeMobileMenu();

    const headerOffset = 86;
    const y = getOffsetTop(el) - headerOffset;
    smoothScrollTo(y, 980);
  });
});

// Efeito ao rolar (Reveal)
const revealEls = document.querySelectorAll(".anim");
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.18 });

revealEls.forEach(el => obs.observe(el));