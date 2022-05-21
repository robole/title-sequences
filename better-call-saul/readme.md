# Better Call Saul

Title sequence for the TV Series [Better Call Saul](https://www.amc.com/shows/better-call-saul--16). This instance is based on Season 1 Episode 1.

![demo](img/screenshot.gif)

You can watch [this video to see a montage of the title sequences for season 1](https://www.youtube.com/watch?v=ybobdx-H_Jc).

I used the [Greensock (GSAP)](https://greensock.com/) library for the animation.

## Typography

Two typefaces are used for the title of the TV series. The text “Better Call” uses [_Script1 Script Casual_](https://fontmeme.com/fonts/script1-script-casual-font/) in italics. The text “Saul” uses a cursive font that is very similar to [_Dancing Script_](https://fonts.google.com/specimen/Dancing+Script?preview.text_type=custom).

The credits use [VCR OSD Mono](https://www.dafont.com/vcr-osd-mono.font).

## Optimizing animation

The animation could be optimized further. The following could be done:

1. At the beginning of the animation, the title is blurry and comes into focus. This is done by animating `filter:blur()`. It would probably be more performant to overlay a blurry version of the background, and animate the opacity on that instead.
1. There is a separate animation timeline that moves a duplicate of the background image (Lady Liberity) to create some subtle movement. It may be more performant to turn this into a GIF, but for a large GIF the file size might be significant. This tradeoff may not be worth making.
