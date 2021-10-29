// * GLOBAL VARIABLES

// canvas setup
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// dom elements
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");

// game object
let game;

// * FUNCTIONS
const startGame = () => {
  // hide splash screen
  splashScreen.style.display = "none";
  // show canvas screen
  canvas.style.display = "flex";
  // start the game

  // we will have a class for the Game that when I click this button, we will create one element of that class
  game = new Game();
  game.gameLoop()
}


// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame)

canvas.addEventListener( "click", () => {
  game.bird.birdJump(); // here I wanna make the bird jump!
} )
