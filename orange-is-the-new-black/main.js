let closeAudio = new Audio("audio/jail-close.mp3");

let muteButton = document.querySelector("button");
let muteOnIcon = muteButton.querySelector(".mute-on");
let muteOffIcon = muteButton.querySelector(".mute-off");

let bars = document.querySelectorAll(".moving-bar");
let writing = document.querySelector("#writing");
let logo = document.getElementById("logo");

let timeout;

closeAudio.muted = true;
closeAudio.playbackRate = 1.5;
playAudio();

muteButton.addEventListener("click", toggleMute);
logo.addEventListener("click", replay);

function replay() {
  clearTimeout(timeout); // in case it hasnt run yet
  reset();

  timeout = setTimeout(() => {
    bars[0].classList.add("close-animation");
    bars[1].classList.add("close-animation");
    writing.classList.add("appear-animation");

    playAudio();
  }, 20);
}

function toggleMute() {
  // initiate playing the song if it was blocked
  if (closeAudio.currentTime === 0) {
    playAudio();
    closeAudio.pause();
  }

  muteOnIcon.classList.toggle("hide");
  muteOffIcon.classList.toggle("hide");

  closeAudio.muted = !closeAudio.muted;
}

function reset() {
  stopAudio();

  bars[0].classList.remove("close-animation");
  bars[1].classList.remove("close-animation");

  writing.classList.remove("appear-animation");
}

function stopAudio() {
  closeAudio.pause();
  closeAudio.currentTime = 0;
}

function playAudio() {
  try {
    closeAudio.play();
  } catch (error) {
    console.error(error);
  }
}
