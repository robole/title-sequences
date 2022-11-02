let song = new Audio("audio/intro.mp3");
song.muted = true;

const muteToggle = document.querySelector("input");
muteToggle.addEventListener("click", toggleMute);

function toggleMute() {
  song.muted = !song.muted;
  song.play();
}

song.play();
