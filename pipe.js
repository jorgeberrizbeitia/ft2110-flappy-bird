class Pipe {

  // properties
  constructor( srcImage, yPos ) {
    this.image = new Image();
    this.image.src = srcImage; // dynamic
    this.width = 100;
    this.height = canvas.height / 2;
    this.x = canvas.width;
    this.y = yPos; // dynamic
  }

  // methods
  drawPipe = () => {
    ctx.drawImage( this.image, this.x, this.y, this.width, this.height );
  };

  pipeMove = () => {
    this.x -= 2;
  }

}


// ? to explain parameters in classes
// new Pipe( "./images/obstacle_bottom.png" )
// new Pipe( "./images/obstacle_top.png" )