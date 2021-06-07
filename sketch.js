var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redGroup,greenGroup,blueGroup,pinkGroup;
var red,green,blue,pink;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redGroup=new Group();
  blueGroup=new Group();
  pinkGroup=new Group();
  greenGroup=new Group();
  arrowGroup=new Group();
}

function draw() {
 background(0);

 drawSprites();

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
  }
  
  // Collision of arrow and balloon, ballon explodes

  arrowHit(blueGroup);
  arrowHit(redGroup);
  arrowHit(greenGroup);
  arrowHit(pinkGroup);

  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon) {
      case 1 :redBalloon();
              break;
      case 2 :blueBalloon();
              break;
      case 3 :greenBalloon();
              break;
      case 4 :pinkBalloon();
              break;
    }
  }
  
  fill("black");
  text("Score - " + score,340,20);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.scale=1.3;
  pink.lifetime = 150;
  pinkGroup.add(pink);
}

function arrowHit(group) {
  if(arrowGroup.collide(group)) {
    arrowGroup.setVelocityEach(-4,0)
    group.destroyEach();
    score+=3;
    arrowGroup.destroyEach();
  }
}