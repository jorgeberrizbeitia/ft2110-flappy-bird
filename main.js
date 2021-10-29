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

const restartGame = () => {
  gameoverScreen.style.display = "none";
  canvas.style.display = "flex";
  // you will need to create a new instance of the game
  // game = new Game();
  // you might need to restart some default variables
  game.gameLoop();
}


// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", restartGame)

canvas.addEventListener( "click", () => {
  game.bird.birdJump(); // here I wanna make the bird jump!
} )
