let tl1 = new TimelineMax();
let symbolRevealDuration = 3;
let symbolRevealOverlap = 2.5;
let symbolEase = "slow(0.7, 0.7, false)";

tl1.set("#vertical-line", {
  transformOrigin: "center",
  scaleY: 0,
});

tl1.set("#horizontal-line", {
  transformOrigin: "center",
  scaleX: 0,
});

tl1.to("#o-letter", {
  duration: 3,
  opacity: 1,
  ease: "power1.in",
});
tl1.to(
  "#vertical-line",
  {
    duration: 0.1,
    opacity: 1,
  },
  "-=0.76"
);
tl1.to(
  "#vertical-line",
  {
    duration: 2.5,
    ease: "power1.in",
    scaleY: 1,
  },
  "-=0.75"
);
tl1.to(
  "#horizontal-line",
  {
    duration: 0.1,
    opacity: 1,
  },
  "-=2.1"
);

tl1.to(
  "#horizontal-line",
  {
    duration: 2.5,
    ease: "power1.in",
    scaleX: 1,
  },
  "-=2"
);

tl1.to(
  "#symbol1",
  {
    duration: symbolRevealDuration,
    ease: symbolEase,
    opacity: 1,
  },
  `-=1.25`
);

tl1.to(
  "#symbol2",
  {
    duration: symbolRevealDuration,
    ease: symbolEase,
    opacity: 1,
  },
  `-=${symbolRevealOverlap}`
);

tl1.to(
  "#symbol3",
  {
    duration: symbolRevealDuration,
    ease: symbolEase,
    opacity: 1,
  },
  `-=${symbolRevealOverlap}`
);

tl1.to(
  "#symbol4",
  {
    duration: symbolRevealDuration,
    ease: symbolEase,
    opacity: 1,
  },
  `-=${symbolRevealOverlap}`
);

let svg = document.getElementsByTagName("svg")[0];

svg.addEventListener("click", replay);

function replay() {
  tl1.restart();
}
