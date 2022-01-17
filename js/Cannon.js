class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canonImg = loadImage("assets/canon.png");
    this.canonBaseImg = loadImage("assets/cannonBase.png");
    
  }

  display(){
    push();
    imageMode(CENTER);
    image(this.canonImg,this.x,this.y,this.width,this.height,this.angle);
    pop();

    image(this.canonBaseImg,70,20,200,200);
  }
  
}
