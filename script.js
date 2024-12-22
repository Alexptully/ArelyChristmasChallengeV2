// Reference the audio element
const morseAudio = document.getElementById("morseAudio");

// Try to autoplay when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
    // Attempt autoplay
    const playPromise = morseAudio.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // If autoplay fails, wait for user interaction
            console.log("Autoplay prevented. Waiting for user interaction...");
            document.body.addEventListener("click", () => {
                morseAudio.play();
            }, { once: true });
        });
    }
});

// Handle input and validation
document.getElementById("submitBtn").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value.trim();
    const correctPassword = "Italian Italian, and I love you";
    const resultDiv = document.getElementById("result");
    const hintParagraph = document.getElementById("hint");

    if (userInput === correctPassword) {
        hintParagraph.textContent = "🎁 Your next clue: 44 23 15  14 11 54  44 23";
        resultDiv.classList.remove("hidden");
    } else {
        hintParagraph.textContent = "❌ Incorrect, try again!";
        resultDiv.classList.remove("hidden");
    }
});
