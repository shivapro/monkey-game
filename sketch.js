
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey= createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400,378,900,10)
  ground.velocityX=-4
  
  //console.log(ground.x)
 
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {
background("white");
  ground.x=ground.width/2
  stroke("black");
  textSize(20);
  fill("black")
  text("score: "+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime  ,100,50 );
  
  
  //if (keyDown("space")) {
    
  monkey.velocityY = monkey.velocityY + 0.8;
  //
  //monkey.collide(ground);
   
  monkey.collide(ground);

if (keyDown("space")){
    monkey.velocityY=-10;
    
  }
obstacle();
  
  banana();
  
  drawSprites();
}
/*
function banana(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(400,220,40,10);
    banana.x = Math.round(random(80,120));
    banana.addImage(bananaImage);
   banana.scale = 0.5;
    banana.velocityX = -3;
    
     
    banana.lifetime = 200;
  }
  
  FoodGroup.add(banana)
}*/
 function banana(){ if (frameCount % 120 === 0) { 
   console.log("banana")
   var banana = createSprite(400,120,40,10); 
   banana.y = Math.round(random(120,200)); banana.addImage(bananaImage); 
   banana.scale = 0.1;
   banana.velocityX = -3;
   banana.lifetime = 140;
   FoodGroup.add(banana)}
 }



function obstacle (){ if (frameCount % 120 === 0) { 
   console.log("obstacle")
   var obstacle = createSprite(400,335,40,10); 
   obstacle.y = Math.round(random(335,335));           obstacle.addImage(obstacleImage); 
   obstacle.scale = 0.2;
   obstacle.velocityX = -4;
  obstacle.lifetime = 140;
   obstacleGroup.add(obstacle)}
 }