# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Obehi Candace Ehimen

Time spent: 2.5 hours to complete requirements and 2.5 hours to complete optional features ~ 5 hours spent in total

Link to project: https://glitch.com/edit/#!/available-vine-drop

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [N/A] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
[X] https://cdn.glitch.com/3049841a-28a1-4932-b7b9-7b5562616401%2Fezgif.com-gif-maker.gif?v=1616110325317

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   https://css-tricks.com/snippets/javascript/select-random-item-array/
   https://coolors.co/
   https://cssreference.io/
   https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
   https://www.w3schools.com/js/js_output.asp

2) What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   My biggest challenge I encountered when creating this submission, was finding a way to speed up the time after each turn to make
   the game a bit harder. I know I had to change "clueHoldTime" from a constant to a variable and find a way to update it in the playSequence
   function so that it decreased on each turn. I had to play around with updating the "clueHoldTime" variable a few times to get it
   right. Sometimes the timing would go way too quick after each turn and sometimes it would go a bit slow, so I ultimatly decided to shave off 13 each
   turn.

   One interesting thing I learned completing the submission was that JavaScript has a built in library called AudioContext. This library helped generate the
   sounds for the buttons. At first it looked a bit intimidating, but clicking the link provided to read more about it led me to become more interested in it
   and made me curious on how programming and coding has impacted the music industry.

3) What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   How can you connect the front-end to the back-end part of web development?
   What are some other things a web developer should know apart from HTML, CSS, and JavaScript?
   Would you recommend web development to someone who loves tech and creativity and visuals?
   What would you consider the biggest learning block in learning web development?
   What’s the biggest difference between developing for mobile and developing for desktop? or PC?
   What's the best part of being in web development?
   What are some of the most essential skills every web developer should have?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   This project helped me to learn a lot about HTML, CSS, and JavaScript, that I even wrote down some notes on them. If I had a few more hours to work on this project, it would have
   been great to make this game a bit more personal to whoever is playing, such as letting the user enter his/her name in a form. And whether
   or not the user won or not it print out "Congrats 'user name' you won!" or "Sorry 'user name' you lost." I would also had liked to complete the optional
   ticking clock feature and some more CSS designs to make the app look even more appealing.

## License

    Copyright Obehi Candace Ehimen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
