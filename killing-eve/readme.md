# Killing Eve

This is a reference of what I want to replicate.

![reference screenshot of title](img/reference.gif)

[This video compilation](https://www.youtube.com/watch?v=Ef9VRTJ63_U) shows the different incarnations of the title.

For each episode, the title varies in the following ways:

- The background color and the text color;
- The oozing blood trail is runs down a different characters (either the 'K', 'N', or 'V');
- The accompanying song. The music selection is exemplary.

What I want to do is create a similar montage to the video, but make it random. The colors, the oozing blood trail character, and the song will be chosen at random each time.

## Design Decisions

I wrote an article about [this topic](https://roboleary.net/2020/12/24/title-sequences.html).

## What I learned

I learned a bit more about [GSAP](https://greensock.com/gsap/):

- You can have simultaneous tweens execute on the same timeline by using a label or specifying a time variable. Prior to that, I was creating separate timelines.
- You can't repeat an animation if you want to use a random function to change the selector for a tween each time it repeats. The best solution I found is to wrap the call to the random function and the associated timeline in a `setInterval` call. You can check the code to see what I did!
- If you want to randomise a tween value, you can use built-in random functions.

## Attribution

Audio sampled from:

1. Xpectation by Unloved.
1. Voodoo Voodoo by Etienne Daho.
1. Killer Shangri-Lah by Pshycotic Beats.

The audio is the property of the copyright holders. Samples are used here as a commentary of how well-chosen the songs are for the title sequence. It is deemed to be fair usage with no copyright infringement intended.
