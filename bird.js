class Bird {

  // properties
  constructor() {
    this.birdImage = new Image();
    this.birdImage.src = "./images/flappy.png";
    this.width = 50;
    this.height = 50;
    this.birdX = canvas.width / 6;
    this.birdY = canvas.height / 2;
    this.birdSpeed = 20;
  }

  // methods
  drawBird = () => {
    ctx.drawImage( this.birdImage, this.birdX, this.birdY, this.width, this.height );
  };

  birdGravity = () => {
    // posY ?
    this.birdY++;
  };

  birdJump = () => {
    this.birdY -= this.birdSpeed;
  };


};