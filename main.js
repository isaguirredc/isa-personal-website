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

    music.play().catch(() => console.log("Poxa, o autoplay bloqueado! Clica no botão de música para curtir o sonzinho :)"));
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
        musicBtn.textContent = "🔊";
    } else {
        music.pause();
        musicBtn.textContent = "🔇";
    }
});

function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
