// =======================
// SYSTEM EASTER EGGÓW
// =======================

let clickCount = 0;
const secretSequence = "batyr";
let typed = "";

// Linki do plików wideo
const videoClickUrl = "https://pis-cord.github.io/film.mp4";  // Dla kliknięć
const videoTypedUrl = "https://pis-cord.github.io/batyr.mp4"; // Dla wpisania hasła

// Obsługa wielokrotnego kliknięcia (np. w logo lub obrazek)
function playEasterEgg() {
    clickCount++;
    if (clickCount === 5) { 
        openEasterEgg(videoClickUrl); // Używa film.mp4
        clickCount = 0; 
    }
    // Resetuj licznik jeśli użytkownik klika zbyt wolno
    setTimeout(() => { clickCount = 0; }, 2000);
}

// Otwieranie odtwarzacza wideo
function openEasterEgg(videoFile) {
    const overlay = document.getElementById("video-overlay");
    const video = document.getElementById("easter-video-player");
    if(overlay && video) { 
        video.src = videoFile; 
        overlay.style.display = "flex"; 
        video.play().catch(error => {
            console.warn("Autoplay zablokowany. Użytkownik musi wejść w interakcję ze stroną.");
        }); 
    }
}

// Zamykanie odtwarzacza
function closeEasterEgg() {
    const overlay = document.getElementById("video-overlay");
    const video = document.getElementById("easter-video-player");
    if(overlay && video) { 
        video.pause(); 
        video.src = ""; 
        overlay.style.display = "none"; 
    }
}

// Obsługa klawiatury
document.addEventListener("keydown", function(e) {
    typed += e.key.toLowerCase();
    
    if (typed.length > secretSequence.length) {
        typed = typed.slice(-secretSequence.length);
    }

    if (typed === secretSequence) {
        openEasterEgg(videoTypedUrl); // Używa batyr.mp4
        typed = ""; 
    }
});

