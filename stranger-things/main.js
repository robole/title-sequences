let tl = gsap.timeline();

tl.set("#word1-a", { x: -20 });
tl.set("#word1-n", { x: 20 });
tl.set("#word1-r1", { x: -50 });
tl.set("#word1-g, #word2-g", { x: 50 });
tl.set("#word1-s", { x: -150 });
tl.set("#word1-r2", { x: 150 });
tl.set("#word2-i", { x: -200 });
tl.set("#word2-n", { y: 150 });

tl.set("#word1-t, #word1-e", { y: -180 });
tl.set("#word2-h, #word2-s", { y: 180 });

tl.set("#top-box", { scaleX: 0, transformOrigin: "50% 50%" });
tl.set("#bottom-left-box", { scaleX: 0, transformOrigin: "100% 0%" });
tl.set("#bottom-right-box", { scaleX: 0, transformOrigin: "0% 100%" });
tl.set("#title", { opacity: 1 });

tl.addLabel("start", 0)
  .addLabel("vertical-placement", 7)
  .addLabel("big-letter", 11)
  .addLabel("box-reveal", 15)
  .fromTo(
    "#title",
    { scale: 17 },
    { duration: 18, scale: 1, ease: "expoScale(17, .6)" }
  )
  .to("#word1-a", { x: 0, duration: 6 }, "start")
  .to("#word1-n", { x: 0, duration: 7.5 }, "start")
  .to("#word2-i", { x: 0, duration: 6.5 }, "start+=.5")
  .to("#word2-n", { y: 0, duration: 5 }, "start+=4")
  .to("#word1-r1", { x: 0, duration: 6 }, "start+=5")
  .to("#word1-g, #word2-g", { x: 0, duration: 7.5 }, "start+=5")
  .to("#word1-t", { y: 0, duration: 8 }, "vertical-placement")
  .to("#word1-e", { y: 0, duration: 9.5 }, "vertical-placement")
  .to("#word2-h", { y: 0, duration: 8 }, "vertical-placement")
  .to("#word2-s", { y: 0, duration: 9.5 }, "vertical-placement")
  .to("#word1-s", { x: 0, duration: 5 }, "big-letter")
  .to("#word1-r2", { x: 0, duration: 5 }, "big-letter")
  .to("#top-box", { scaleX: 1, duration: 1 }, "box-reveal")
  .to(
    "#bottom-left-box, #bottom-right-box",
    { scaleX: 1, duration: 0.75 },
    "box-reveal+=.75"
  )
  .to("#title", { opacity: 0, duration: 1.5 }, "box-reveal+=2");
