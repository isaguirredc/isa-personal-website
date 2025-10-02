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
    // atualiza os ícones do Lucide
    lucide.createIcons();
});


// CURSOR
const cursor = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});
