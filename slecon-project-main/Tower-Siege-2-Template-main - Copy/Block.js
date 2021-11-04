class Block{
  constructor(x,y,width,height){

    var options = {
      restitution:0.8,
      density:0.3,
      friction:0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.image = loadImage("block.png");
  }
display()
{ var pos = this.body.position;
  push ();
  translate(pos.x,pos.y);
  angleMode(RADIANS);
  rotate (this.body.angle);
 image(this.image,0,0,this.width,this.height);

pop ();

}
}