# Orange is the New Black

[Orange Is the New Black](https://en.wikipedia.org/wiki/Orange_Is_the_New_Black) is an American comedy-drama television series created by Jenji Kohan for Netflix. The series is based on [Piper Kerman's memoir Orange Is the New Black: My Year in a Women's Prison (2010)](https://en.wikipedia.org/wiki/Orange_Is_the_New_Black:_My_Year_in_a_Women%27s_Prison), about her experiences at FCI Danbury, a minimum-security federal prison.

I took the final sequence in the [opening title](https://www.youtube.com/watch?v=fBITGyJynfA).

![screenshot Orange Is The New Black](original/img/screenshot.gif)

The animation is a CSS animation, but uses JavaScript to toggle a class to trigger the animation.

See [live demo](https://codepen.io/robjoeol/full/VwKLPRR).

## Design Decisions

- The original typeface is _Damaged Guts_. I chose a free alternative called _CF Punk Fashion_ as a basis for making my own text. I converted the text to SVG paths and added more "damage" to get closer to the look of the original!
- I chose to do the animation in CSS, but have it triggered by JavaScript. I did begin by using GSAP and noticed that the equivalent of `translateX(50%)` didn't work as expected. It works as expected in CSS. I don't know why!

## Attribution

- [Photo](https://unsplash.com/photos/WWX2bPqP-z4) by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).
- [Door closing sound effect](https://freesound.org/people/TurtleLG/sounds/80449/).
