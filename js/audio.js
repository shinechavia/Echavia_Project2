function toggleAudio() {
    const audio = document.getElementById("myAudio");
    const icon = document.getElementById("audioIcon");
    
    if (audio.paused) {
        audio.play();
        icon.style.display = "block"; // Show the icon when audio is playing
    } else {
        audio.pause();
        icon.style.display = "none"; // Hide the icon when audio is paused
    }
}
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

