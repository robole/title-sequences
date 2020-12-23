let dripDuration = 5;

let track;

// let audioTracks = [
//   new Audio("audio/killer-shangrilah-sample.mp3"),
//   new Audio("audio/xpectations-sample.mp3"),
//   new Audio("audio/voodoo-voodoo-sample.mp3"),
// ];

let audioTracks = [
  new Audio(
    "https://github.com/robole/title-sequences/raw/main/killing-eve/audio/killer-shangrilah-sample.mp3"
  ),
  new Audio(
    "https://github.com/robole/title-sequences/raw/main/killing-eve/audio/voodoo-voodoo-sample.mp3"
  ),
  new Audio(
    "https://github.com/robole/title-sequences/raw/main/killing-eve/audio/xpectations-sample.mp3"
  ),
];

let isMuted = true;
const volume = document.querySelector("input");
volume.addEventListener("click", toggleMute);

runDripAnimation();
setInterval(runDripAnimation, 5500);

function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

function toggleMute() {
  isMuted = !isMuted;
  track.muted = isMuted;
}

function setRandomAudio() {
  let randomSelection = Math.floor(Math.random() * audioTracks.length);
  track = audioTracks[randomSelection];
  track.volume = 0.5;
  track.muted = isMuted;
}

function setRandomColorSet() {
  let colorSets = [
    { bg: "#2fc2ba", text: "#ceccb5" },
    { bg: "#202f3c", text: "#f4f5d7" },
    { bg: "#0c4734", text: "#fbfbdb" },
    { bg: "#050506", text: "#6a7a88" },
    { bg: "#92a1b0", text: "#1a3346" },
    { bg: "#040404", text: "#3d513d" },
    { bg: "#ababa3", text: "#667465" },
    { bg: "#6e6d62", text: "#bb9b4e" },
    { bg: "#43738b", text: "#f09daf" },
    { bg: "#040404", text: "#af8946" },
  ];

  let randomSelection = Math.floor(Math.random() * colorSets.length);
  let colorSet = colorSets[randomSelection];

  let root = document.documentElement;
  root.style.setProperty("--background-color", colorSet.bg);
  root.style.setProperty("--text-color", colorSet.text);
}

function runDripAnimation() {
  const random = getRandomNumber();
  setRandomColorSet();
  setRandomAudio();

  gsap.set("#titleSvg", { z: -100 });

  let tl = new TimelineMax({
    delay: 0.3,
    onStart: () => {
      track.currentTime = 0;
      track.play();
    },
    onComplete: () => {
      track.pause();
    },
  });
  tl.to(`#drip${random}`, {
    duration: 0.01,
    opacity: 1,
  });
  tl.to(
    "#titleSvg",
    {
      duration: dripDuration,
      ease: "none",
      z: 0,
    },
    "drip"
  );
  tl.to(
    `#drip${random} rect`,
    {
      duration: dripDuration,
      ease: "none",
      y: 75,
    },
    "drip"
  );
  tl.to(
    `#drip${random} path`,
    {
      duration: dripDuration,
      ease: "none",
      scaleY: 1.3,
      y: 52,
      delay: 0.1,
    },
    "drip"
  );
  tl.to(
    `#drip${random}`,
    {
      duration: 0.05,
      opacity: 0,
    },
    "reset"
  );
  tl.to(
    `#drip${random} rect`,
    {
      duration: 0.05,
      y: 0,
    },
    "reset"
  );
  tl.to(
    `#drip${random} path`,
    {
      duration: 0.05,
      scaleY: 1,
      y: 0,
    },
    "reset"
  );
  tl.to(
    "#titleSvg",
    {
      duration: 0.05,
      z: -100,
    },
    "reset"
  );
}

TweenLite.from();
