let audioPlayed = false; // Flag to track if the audio has been played

// Function to change the audio source
function changeAudioSource(passed) {
    if (!audioPlayed) { // Check if the audio has not been played yet
        const audio = document.getElementById("myAudio");
        const audioSource = document.getElementById("audioSource");

        audioSource.src = passed ? "audio/victory.mp3" : "audio/failed.mp3";
        audio.load();
        audio.play();

        // Add an event listener to track when the audio has ended
        audio.addEventListener("ended", function() {
            audioPlayed = true; // Set the flag to indicate that the audio has been played
        });
    }
}

// Modify your toggleAudio function to show/hide the audio icon
function toggleAudio() {
    const audioIcon = document.getElementById("audioIcon");
    const audio = document.getElementById("myAudio");

    if (audio.paused) {
        audio.play();
        audioIcon.classList.remove("fa-volume-off");
        audioIcon.classList.add("fa-volume-up");
    } else {
        audio.pause();
        audioIcon.classList.remove("fa-volume-up");
        audioIcon.classList.add("fa-volume-off");
    }
}
const audio = document.getElementById("myAudio");
const audioIcon = document.getElementById("audioIcon");

// Function to play audio and show the icon
function playAudio() {
    if (audio.paused) {
        audio.play().then(() => {
            audioIcon.style.display = "block";
        }).catch(error => {
            console.error("Autoplay failed:", error);
            // Handle the error or display a message to the user
        });
    } else {
        audio.pause();
        audioIcon.style.display = "none";
    }
}

// Initial call to playAudio to try autoplaying
playAudio();
