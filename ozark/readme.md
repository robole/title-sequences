# Ozark

Title sequence for the TV Series [Ozark](https://www.netflix.com/my-en/title/80117552). This instance is based on Season 1 Episode 1.

![screenshot](img/screenshot.gif)

You can watch [this video to see a montage of the title sequences for season 1](https://www.youtube.com/watch?v=DJQxWhRIQE0).

## Firefox bug

I wrote the code initially as a series of CSS animations, but noticed inconsistent behaviour in Firefox. Firefox runs the animations for the revealing of the symbols out of order. For some reason, the animation for the second symbol ran third. The code is included below.

```css
:root {
  --symbol-animation-duration: 1.5s;
  --symbol-animation-start: 4s;
}

.symbol {
  opacity: 0;
  animation: fadeIn var(--symbol-animation-duration);
  animation-timing-function: cubic-bezier(0.64, 0, 0.78, 0);
  animation-fill-mode: forwards;
}

#symbol1 {
  animation-delay: var(--symbol-animation-start);
}

#symbol2 {
  animation-delay: calc(var(--symbol-animation-start) + 0.25s);
}

#symbol3 {
  animation-delay: calc(var(--symbol-animation-start) + 0.5s);
}

#symbol4 {
  animation-delay: calc(var(--symbol-animation-start) + 0.75s);
}
```
