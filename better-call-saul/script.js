let tl1 = new TimelineMax();
let tl2 = new TimelineMax();

// for lady liberity swaying in background
tl1.to("#animatable-background", {
  duration: 0.75,
  delay: 1,
  repeat: 20,
  yoyo: true,
  x: 3,
  y: 1,
  ease: "power2.in",
});

// main animation
tl2.set(".diamond", { transformOrigin: "center", scale: 0 });

tl2.to("#title-container", {
  duration: 2,
  filter: "blur(0px)",
  ease: "power2.inOut",
});

tl2.to("#title", {
  delay: 1,
  duration: 0.1,
  opacity: 1,
});

tl2.to(".bg-layer", {
  duration: 0.25,
  repeat: 12,
  yoyo: true,
  x: 2,
  ease: "power2.in",
});

tl2.to(".bg-layer", {
  duration: 0.3,
  opacity: 0,
  ease: "power2.in",
});

tl2.to("#title", {
  duration: 0.2,
  filter: "blur(0)",
  ease: "power2.in",
});

tl2.to("#title", {
  delay: 0.3,
  duration: 0.1,
  opacity: 0,
});

tl2.to("#color-card", {
  duration: 0.1,
  opacity: 1,
});

tl2.to("#color-card", {
  delay: 0.1,
  duration: 0.1,
  opacity: 0,
});

tl2.to("#diamondUse", {
  duration: 0.1,
  opacity: 1,
});

tl2.to("#credits-sequence", {
  duration: 0.1,
  opacity: 1,
});

tl2.to(".diamond", {
  duration: 2,
  scale: 5,
  ease: "power4.out",
});

tl2.to("#credit-name", {
  delay: 0.5,
  duration: 0.3,
  opacity: 0,
  repeatDelay: 1,
  repeat: 3,
  yoyo: true,
  ease: "power2.in",
});

let container = document.getElementById("title-container");

container.addEventListener("click", replay);

function replay() {
  tl1.restart();
  tl2.restart();
}
