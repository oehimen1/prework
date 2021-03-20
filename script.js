// global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


var clueHoldTime = 1000; //how long to hold each clue's light/sound //used to be constant

//Global Variables
var pattern = [2, 6, 4, 1, 5, 2, 3, 6];

/*progress is assigned an integer that represents how far
along the player is in guessing the pattern. By starting at 0,
we can use progress as an index into the pattern array.
*/
var progress = 0; 

/*gamePlaying is assigned a Boolean value that will keep track of 
whether the game is currently active. It will be true 
once the user presses Start, and remain true until they win or lose, 
or press Stop
*/
var gamePlaying = false;

/* keeps track of whether or not there is a tone playing */
var tonePlaying = false;

var volume = 0.5;  //must be between 0.0 and 1.0

//keep track of where the user is in the clue sequence.
var guessCounter = 0;

//keeps track of number of mistakes
var numMistakes;



//function for generating the pattern
function randomPattern(){
  for(let i=0; i<8; i++){
    var r = Math.floor(Math.random()*6)+1
    pattern[i]=r;
  }
}


function startGame(){
  //initialize game variables
    progress = 0;
    gamePlaying = true;
    numMistakes = 0;
 //swap the Start and Stop buttons
  //Now when the games has started the Start button will dissapear and the Stop button will appear
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    randomPattern();
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
// swap the Start and Stop buttons
  //Now when the game is ended, the Start button will appear and the Stop button will dissapear
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter=0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime-=13;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(pattern[guessCounter] ==btn){
    if(guessCounter==progress){
      if(progress==pattern.length-1){
        //Game is over: you won
        winGame();
      }
      else{
        //This pattern is correct, add next segment
        progress++;
        playClueSequence();
      }
    }
    else{
      //check the next guess
      guessCounter++;
    }
  }
  else{
    //Your guess was incorrect, count the number of Mistakes
    numMistakes++;
    alert("You have made " + numMistakes + " out of 3 mistakes");
    playClueSequence();
  }
  //If you've made 3 mistakes Game is over: you lost
  if(numMistakes==3){
    loseGame();
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. Congrats, You won!!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 290.8,
  6: 376.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

