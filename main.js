const music = document.getElementById("bg-music");
const startScreen = document.getElementById("start-screen");
const siteContent = document.getElementById("site-content");
const musicBtn = document.getElementById("music-toggle");

let siteStarted = false;

function startSite() {
    if (siteStarted) return;
    siteStarted = true;

    startScreen.style.display = "none";
    siteContent.style.display = "block";
    setTimeout(() => siteContent.style.opacity = 1, 10);

    music.play().catch(() => console.log("Poxa, o autoplay está bloqueado! Clica no botão de música para curtir o sonzinho :)"));
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startSite();
    }
});

startScreen.addEventListener("click", startSite);

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        // muda o ícone para volume-2
        musicBtn.innerHTML = '<i data-lucide="volume-2"></i>';
    } else {
        music.pause();
        // muda o ícone para volume-off
        musicBtn.innerHTML = '<i data-lucide="volume-off"></i>';
    }
    // atualiza os ícones do lucide
    lucide.createIcons();
});


// CURSOR
const cursor = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

const starsContainer = document.querySelector('.stars-container');

for (let i = 0; i < 150; i++) { // AJUSTAR QUANTIDADE 
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.width = star.style.height = Math.random() * 6 + 2 + 'px'; // AJUSTAR TAMANHO
    star.style.animationDuration = (Math.random() * 2 + 1) + 's';
    starsContainer.appendChild(star);
    star.style.boxShadow = "0 0 18px white, 0 0 14px #bbf2dc";

}

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

function updateNavbarIcons() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom > 0) {
        // ainda no hero
        navbar.classList.add('scrolled');
    } else {
        // saiu do hero
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbarIcons);
window.addEventListener('load', updateNavbarIcons);
