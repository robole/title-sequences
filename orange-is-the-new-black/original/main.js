// let closeAudio = new Audio("audio/jail-close.mp3");
let closeAudio = new Audio(
  "https://github.com/robole/title-sequences/raw/main/orange-is-the-new-black/original/audio/jail-close.mp3"
);

closeAudio.muted = true;
closeAudio.playbackRate = 1.5;
closeAudio.play();

const volume = document.querySelector("input");
volume.addEventListener("click", toggleMute);

let bars = document.querySelectorAll(".moving-bar");
let writing = document.querySelectorAll(".writing");

const logo = document.getElementById("logo");
logo.addEventListener("click", replay);

let timeout;

function replay() {
  clearTimeout(timeout); // in case it hasnt run yet
  reset();

  timeout = setTimeout(() => {
    bars[0].classList.add("animation1");
    bars[1].classList.add("animation2");

    for (instance of writing) {
      instance.classList.add("appear-animation");
    }

    playAudio();
  }, 20);
}

function toggleMute() {
  closeAudio.muted = !closeAudio.muted;
}

function reset() {
  stopAudio();
  bars[0].classList.remove("animation1");
  bars[1].classList.remove("animation2");
  for (instance of writing) {
    instance.classList.remove("appear-animation");
  }
}

function stopAudio() {
  closeAudio.pause();
  closeAudio.currentTime = 0;
}

function playAudio() {
  closeAudio.play();
}
