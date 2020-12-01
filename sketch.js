
var car,wall
var speed,weight




function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  speed =random(55,90)
  weight =random(440,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(500,200,60,height/2)

 
}

function draw() {
  background(255,255,255);  
  car. velocityX = speed;


  if (wall.x-car.x<(car.width+wall.width)/2){

car.velocityX = 0;
var d = 0.5*weight*speed*speed/22500;
if (d>180){
  car.shapeColor = "red"
}
if (d>180 && d<100){
  car.shapeColor = "yellow"
}

if (d<100){
  car.shapeColor ="green"
}
}
 
  drawSprites();
}


