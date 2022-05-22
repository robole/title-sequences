let tl = gsap.timeline();

tl.to(".bg", {
  duration: 0.4,
  x: -1200,
  ease: "power1.out",
  stagger: 0.3,
});
