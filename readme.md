# Title sequences (TV shows and movies)

This project creates web versions of the title sequences from TV Shows and Movies. The aim is to improve my CSS and animation chops.

You can **view all of the title sequences in [this collection on codepen](https://codepen.io/collection/nNmwgP)**.

## Run the project

You can run the **project locally as a mini-website**. To run the project: clone the repo, install the dependencies with your package manager of choice, and run the dev server with `dev` npm script:

```shell
#npm
npm i 
npm run dev
```

The website is run by default on: <http://localhost:3000/>.

## Title sequences

So far, these are the title sequences:

<!-- TOC -->
1. [Alien](#alien)
1. [Better Call Saul](#better-call-saul)
1. [Jackie Brown](#jackie-brown)
1. [Killing Eve](#killing-eve)
1. [Ozark](#ozark)
1. [Schitts Creek](#schitts-creek)
1. [Orange Is The New Black](#orange-is-the-new-black)
1. [The Marvelous Mrs Maisel](#the-marvelous-mrs-maisel)
1. [Upload](#upload)
1. [Stranger Things](#stranger-things)
<!-- /TOC -->

### Alien

Alien is a 1979 science fiction horror film directed by Ridley Scott.

![screenshot of title of alien. letters fade into view in segments.](/alien/img/title-reference.webp)

View the [codepen](https://codepen.io/robjoeol/full/ZEZXabR).

### Better Call Saul

[Better Call Saul](https://en.wikipedia.org/wiki/Better_Call_Saul) is an American crime drama television series.

![screenshot Better Call Saul title](better-call-saul/img/screenshot.png)

View the [codepen](https://codepen.io/robjoeol/full/rNWRoBO).

#### Implementation notes

I used the [Greensock (GSAP)](https://greensock.com/) library for the animation. You can read my [notes](http://roboleary.net/animation/2023/05/15/a-slick-animation-better-call-saul-title-sequence.html) for more details.

### Jackie Brown

Jackie Brown is an American crime film written and directed by Quentin Tarantino.

![screenshot of title of jackie brown](/jackie-brown/img/title-reference.png)

View the [codepen](https://codepen.io/robjoeol/pen/BaEdVwj).

### Killing Eve

[Killing Eve](https://en.wikipedia.org/wiki/Killing_Eve) is a British spy thriller television series. The series follows Eve Polastri (Sandra Oh), a British intelligence investigator tasked with capturing psychopathic assassin Villanelle (Jodie Comer).

![screenshot Killing Eve title](killing-eve/img/screenshot.png)

View the [codepen](https://codepen.io/robjoeol/full/gOwGojN).

#### Implementation notes

I used the [Greensock (GSAP)](https://greensock.com/) library for the animation. You can read my [notes](https://www.roboleary.net/2020/12/24/title-sequences.html) for more info.

#### Attribution

The audio is sampled from:

1. Xpectation by Unloved.
1. Voodoo Voodoo by Etienne Daho.
1. Killer Shangri-Lah by Pshycotic Beats.

The audio is the property of the copyright holders. Samples are used here as a commentary of how well-chosen the songs are for the title sequence. It is deemed to be fair usage. No copyright infringement is intended.

### Ozark

[Ozark](<https://en.wikipedia.org/wiki/Ozark_(TV_series)>) is an American crime drama. The series follows Marty and Wendy Byrde, a married couple who move their family to the Lake of the Ozarks to create a big money laundering operation for a Mexican drug cartel.

This instance is based on Season 1 Episode 1.

![screenshot Ozark title](ozark/img/screenshot.png)

View the [codepen](https://codepen.io/robjoeol/full/yLVZbwQ).

#### Implementation notes

I used the [Greensock (GSAP)](https://greensock.com/) library for the animation. You can read my [notes](https://www.roboleary.net/2022/01/22/ozark-animation.html) for more info.

### Schitts Creek

[Schitt's Creek](https://en.wikipedia.org/wiki/Schitt's_Creek) is a Canadian sitcom television series created by Dan Levy and Eugene Levy, that aired from 2015 to 2020. The series follows the formerly wealthy Rose family's trials and tribulations.

![screenshot schitts creek](schitts-creek/gsap/img/screenshot.png)

View the [codepen](https://codepen.io/robjoeol/full/dypyEdJ).

#### Implementation notes

I created 2 versions:
1. Using the [Greensock (GSAP)](https://greensock.com/) library that features the soundtrack. See [schitts-creek/gsap folder](schitts-creek/gsap) for code.
1. A CSS version without the soundtrack. See [schitts-creek/css folder](schitts-creek/css) for code.

You can read my [notes)](https://www.roboleary.net/animation/2022/10/31/how-to-make-a-slick-animation-schitts-creek-title-sequence.html) for more info.

### Orange Is The New Black

[Orange Is the New Black](https://en.wikipedia.org/wiki/Orange_Is_the_New_Black) is an American comedy-drama television series.

I took the final sequence in the [opening title](https://www.youtube.com/watch?v=fBITGyJynfA).

![screenshot Orange Is The New Black](orange-is-the-new-black/img/screenshot.png)

View the [codepen](https://codepen.io/robjoeol/full/VwKLPRR).

#### Implementation notes

The animation is a CSS animation, but uses JavaScript to toggle a class to trigger the animation.

- The original typeface is _Damaged Guts_. I chose a free alternative called _CF Punk Fashion_ as a basis for making my own text. I converted the text to SVG paths and added more "damage" to get closer to the look of the original!
- I chose to do the animation in CSS, but have it triggered by JavaScript. I did begin by using GSAP and noticed that the equivalent of `translateX(50%)` didn't work as expected. It works as expected in CSS. I don't know why!

### The Marvelous Mrs Maisel

[The Marvelous Mrs. Maisel](https://en.wikipedia.org/wiki/The_Marvelous_Mrs._Maisel) is an American period comedy-drama television series. It is set in the late 1950s and early 1960s, it stars Rachel Brosnahan as Miriam "Midge" Maisel, a New York housewife who discovers she has a knack for stand-up comedy and pursues a career in it.

This instance is the opening title from Episode 2 of Season 4

<img
	src="the-marvelous-mrs-maisel/img/screenshot.png"
	alt="demo of The Marvelous Mrs. Maisel sequence"
	loading="lazy"
/>

View the [codepen](https://codepen.io/robjoeol/full/yLvopZe).

#### Implementation notes

It is a CSS animation. You can my [notes](https://www.roboleary.net/2022/05/23/how-to-make-a-slick-animation-the-marvelous-mrs-maisel-title-sequence.html) for more info.

#### Attribution

I use the font [Fontdinerdotcom](https://fontmeme.com/fonts/fontdinerdotcom-font/). This is free for personal use only.

### Upload

[Upload](<https://en.wikipedia.org/wiki/Upload_(TV_series)>) is an American science fiction comedy-drama television series created by Greg Daniels. The story takes place in 2033, when humans can "upload" themselves into a virtual afterlife of their choosing.

<img src="upload/img/screenshot.png"
	alt="screenshot of Upload title sequence"
	loading="lazy"
/>

View the [codepen](https://codepen.io/robjoeol/full/PoQRgLG).

#### Implementation notes

It is a CSS animation. You can my [notes](https://www.roboleary.net/2022/06/06/how-to-make-a-slick-css-animation-upload-title-sequence.html) for more info!

### Stranger Things

[Stranger Things](https://en.wikipedia.org/wiki/Stranger_Things) is an American science fiction horror drama television series created by the Duffer Brothers. The story centers on a number of mysteries and supernatural events occurring in a small town and their impact on an ensemble of child and adult characters.

![screenshot of title of stranger things](/stranger-things/img/title-reference.png)

View the [codepen](https://codepen.io/robjoeol/pen/xxyNJWP).

#### Implementation notes

I used the [Greensock (GSAP)](https://greensock.com/) library for the animation. You can read my [notes](https://www.roboleary.net/animation/2023/05/30/how-to-make-a-slick-animation-stranger-things-title-sequence.html) for more info!

#### Attribution

The audio is sampled from Strangers Thing Theme by Kyle Dixon and Michael Stein.

The audio is the property of the copyright holders. The samples used here are to provide commentary of how complementary the songs are with the title sequence. It is deemed to be fair usage. No copyright infringement is intended.
