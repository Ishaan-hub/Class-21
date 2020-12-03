var fixedRect, movingRect
var gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(800,400);
  fixedRect =  createSprite(200, 200, 50, 50);
  movingRect = createSprite(600,200, 80,30);
  
  gameObject1 = createSprite( 20, 100 , 50, 30);
  gameObject2 = createSprite(120, 80, 50, 30);
  gameObject3 = createSprite(600, 100, 50, 30);
  gameObject4 = createSprite(100, 80, 50, 30);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  
  gameObject1.shapeColor = "lime"
  gameObject2.shapeColor = "cyan"
  gameObject3.shapeColor = "blue"
  gameObject4.shapeColor = "orange"


  // fixedRect.debug = true;
  // movingRect.debug = true;

  // fixedRect.velocityX=3;
  //movingRect.velocityX=-3;

  gameObject1.velocityX = 3;
  gameObject3.velocityX = -3;

}

function draw() {

  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  // gameObject1.x = mouseX;
  // gameObject1.y = mouseY;

  if(isTouching(gameObject1, gameObject3)){
    gameObject1.shapeColor = "blue";
    gameObject3.shapeColor = "lime";
  }
  else{
    gameObject1.shapeColor = "lime";
    gameObject3.shapeColor = "blue";
  }

  bounceOff(gameObject1, gameObject3);

   

  background(0);  
  drawSprites();
}

