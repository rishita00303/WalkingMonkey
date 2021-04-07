var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group;
  obstacleGroup=new Group;
}

function draw() {
  background("lightblue");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") ){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  banana();
  obstacle();
  drawSprites();
  
}

function banana() {
  if(World.frameCount%80===0){
   var banana = createSprite(400,200,20,20);
    banana.addAnimation("moving",bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX=-8
    banana.scale=0.1;
    banana.setLifetime=50;
    
    bananaGroup.add(banana);
  }
}

function obstacle() {
  if(World.frameCount%300===0){
   var obstacle = createSprite(400,200,20,20);
    obstacle.addAnimation("moving",obstacleImage);
    obstacle.y = Math.round(random(325,325));
    obstacle.velocityX=-8
    obstacle.scale=0.2;
    obstacle.setLifetime=50;
    
    obstacleGroup.add(obstacle);
  }
}




