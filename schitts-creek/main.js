let song = new Audio("audio/intro.mp3");
song.muted = true;

const muteToggle = document.querySelector("input");
muteToggle.addEventListener("click", toggleMute);

function toggleMute() {
  song.muted = !song.muted;
}

let tl = gsap.timeline({
  onStart: () => {
    song.currentTime = 0;
    song.play();
  },
});

// part 1 - propping up of words
gsap.set("h1", {
  perspective: "500px",
});

gsap.set(".word", {
  rotationX: 120,
  transformOrigin: "50% 100%",
});

tl.to(".word:nth-of-type(1)", {
  duration: 0.01,
  opacity: 1,
});
tl.to(".word:nth-of-type(1)", {
  duration: 1.5,
  rotationX: 0,
  ease: "elastic.out(1, .8).out",
});
tl.to(".word:nth-of-type(2)", {
  duration: 0.01,
  opacity: 1,
});
tl.to(".word:nth-of-type(2)", {
  duration: 1.5,
  ease: "elastic.out(1, .8).out",
  rotationX: 0,
});

// part 2 - extend bars to make dollar sign of superscript S
tl.to("html", {
  "--bar-scale-y": 1,
  duration: 0.5,
});

// part 3 - sparkle effect
tl.to(
  "html",
  {
    "--sparkle-scale": 1,
    duration: 0.25,
  },
  "sparkle"
);
tl.to("html", {
  "--sparkle-scale": 0,
  duration: 0.15,
});
tl.to(
  "html",
  {
    "--sparkle-x-position": "4px",
    "--sparkle-y-position": "1px",
    "--sparkle-rotation": "8deg",
    duration: 0.2,
  },
  "sparkle+=0.1"
);
tl.to(
  ".superscript",
  {
    textShadow: "0 0 8px rgb(247 241 220 / 40%)",
    duration: 0.2,
  },
  "sparkle+=0.1"
);
tl.to(
  ".superscript",
  {
    textShadow: "unset",
    duration: 0.01,
  },
  "sparkle+=0.3"
);

// click title to restart animation
let h1 = document.getElementsByTagName("h1")[0];
h1.addEventListener("click", () => tl.restart());
