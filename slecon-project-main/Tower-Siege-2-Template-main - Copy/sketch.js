const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground,block1,blocks = [];
var stand1,stand2;
var polygon;
var slingShot;
var background_img,x,y;
var score = 0,kpress = 0;
function preload(){
  background_img=loadImage("background.jpg")
}
function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
 
  
  
}
function draw() {
  Engine.update(engine);
  background("white");
  
  
  ground.display(); 
  for(var j = 0;j<blocks.length;j++)
  {
    blocks[j].display();
//    if(blocks[j].body.speed>1 && kpress ===1)
//  { 
//    score =score-1;
//    kpress = 0;
//  }
//  else if(blocks[j].body.speed <1 && kpress ===1)
//  {
 
//  score = score +1;
//  kpress = 0;
 
//  }
 }
  
 textSize(20);
 text("Score:"+score,800,50);
  
}
function keyPressed(){
  
  if(keyCode === 32)
  {
 blocks.push(new Block(mouseX,mouseY,30,40));
  
 
kpress = 1;
Engine.update(engine);
}}
