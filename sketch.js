var ball,img,paddle;
function preload() {
   paddleImage = loadImage("paddle.png")
  ballImage = loadImage("ball.png")
 
}
function setup() {
  createCanvas(400, 400);
 
  paddle = createSprite(380,200,20,20)
  paddle.addImage("paddle",paddleImage)
   ball = createSprite(200,200,20,20)
  ball.addImage("ball",ballImage)
  
  ball.velocityX = -9;
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);
  
  

 
  paddle.collide(edges);
  
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y -10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y +10;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-9,9)
 
}

