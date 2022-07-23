let lettersTimeline = gsap.timeline();

lettersTimeline.set("#title", { transformOrigin: "48% 70%", scale: 4.9 });

let batch1Distance = 30;
let batch3Distance = 50;
let batch6and8Distance = 180;
let batch9and10Distance = 150;

// first word: STRANGER
lettersTimeline.set("#word1-s", { x: `-${batch9and10Distance}` });
lettersTimeline.set("#word1-t", { y: `-${batch6and8Distance}` });
lettersTimeline.set("#word1-r1", { x: -60 });
lettersTimeline.set("#word1-a", { x: `-${batch1Distance}` });
lettersTimeline.set("#word1-n", { x: `${batch1Distance}` });
lettersTimeline.set("#word1-g", { x: `${batch3Distance}` });
lettersTimeline.set("#word1-e", { y: -180 });
lettersTimeline.set("#word1-r2", { x: `${batch9and10Distance}` });

// second word: THINGS
// 'T' is static
lettersTimeline.set("#word2-h", { y: `${batch6and8Distance}` });
lettersTimeline.set("#word2-i", { x: -130 });
lettersTimeline.set("#word2-n", { y: 140 });
lettersTimeline.set("#word2-g", { x: `${batch3Distance}` });
lettersTimeline.set("#word2-s", { y: 180 });

lettersTimeline
  .addLabel("start", 0)
  .addLabel("batch2", 0.2)
  .addLabel("batch3", 1)
  .addLabel("batch4", 4)
  .addLabel("batch5", 5)
  .addLabel("batch6", 9)
  .addLabel("batch7", 9.5)
  .addLabel("batch8", 10)
  .addLabel("batch9", 11)
  .addLabel("batch10", 12.75)

  .to(
    "#title",
    {
      duration: 20,
      scale: 1,
      ease: ExpoScaleEase.config(4.9, 1),
    },
    "start"
  )
  .to("#word1-a, #word1-n", { x: 0, duration: 6 }, "start")
  .to("#word2-i", { x: 0, duration: 9 }, "batch2")
  .to("#word1-g, #word2-g", { x: 0, duration: 11 }, "batch3")
  .to("#word1-r1", { x: 0, duration: 6 }, "batch4")
  .to("#word2-n", { y: 0, duration: 5 }, "batch5")
  .to("#word1-t", { y: 0, duration: 6 }, "batch6")
  .to("#word2-h", { y: 0, duration: 4.5 }, "batch7")
  .to("#word1-e, #word2-s", { y: 0, duration: 7 }, "batch8")
  .to("#word1-r2", { x: 0, duration: 6 }, "batch9")
  .to("#word1-s", { x: 0, duration: 4.25 }, "batch10");

// let boxesTimeline = gsap.timeline();

// boxesTimeline
//   .set("#top-box", { scaleX: 0, transformOrigin: "50% 50%" })
//   .set("#bottom-left-box", { scaleX: 0, transformOrigin: "100% 50%" })
//   .set("#bottom-right-box", { scaleX: 0, transformOrigin: "0% 50%" });

// // in the complete animation, this happens after a delay of 14 seconds
// boxesTimeline
//   .to("#top-box", { scaleX: 1, duration: 1, delay: 14 })
//   .to(
//     "#bottom-left-box, #bottom-right-box",
//     { scaleX: 1, duration: 0.75 },
//     "+=.75"
//   );

// let visibilityTimeline = gsap.timeline({ delay: 19 });

// visibilityTimeline.set("#spotReveal ellipse", {
//   transformOrigin: "50% 50%",
// });

// visibilityTimeline.to("#spotReveal ellipse", {
//   scale: 0.6,
//   opacity: 0,
//   duration: 2,
// });
