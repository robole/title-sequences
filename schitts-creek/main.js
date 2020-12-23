let tl1 = new TimelineMax();

tl1.to(".word:nth-of-type(1)", {
  duration: 0.1,
  opacity: 1,
});
tl1.to(".word:nth-of-type(1)", {
  duration: 1.5,
  ease: "elastic.out(1, .8).out",
  rotateX: 0,
});

tl1.to(".word:nth-of-type(2)", {
  duration: 0.1,
  opacity: 1,
});
tl1.to(".word:nth-of-type(2)", {
  duration: 1.5,
  ease: "elastic.out(1, .8).out",
  rotateX: 0,
});

tl1.to(".bar", {
  duration: 0.5,
  scale: 1,
});

let superscriptBefore = CSSRulePlugin.getRule(".superscript:before");
tl1.to(superscriptBefore, {
  duration: 0.3,
  opacity: 1,
  delay: 0.3,
});

let glow = document.getElementById("glow");
let glowBefore = CSSRulePlugin.getRule("#glow:before");
let glowAfter = CSSRulePlugin.getRule("#glow:after");
let glowDelay = 4;

let tl2 = new TimelineMax({ delay: glowDelay });

tl2.to(glow, {
  duration: 0.1,
  opacity: 0.5,
});
tl2.to(glow, {
  duration: 0.3,
  opacity: 0.9,
  scale: 1,
});
tl2.to(glow, {
  duration: 0.1,
  opacity: 0,
});

let tl3 = new TimelineMax({ delay: glowDelay });

tl3.to(glowBefore, {
  duration: 0.1,
  opacity: 0.5,
});

let tl4 = new TimelineMax({ delay: glowDelay });

tl4.to(glowAfter, {
  duration: 0.1,
  opacity: 0.5,
});

let h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("click", replay);

function replay() {
  tl1.restart();
  tl2.restart(glowDelay);
  tl3.restart(glowDelay);
  tl4.restart(glowDelay);
}
