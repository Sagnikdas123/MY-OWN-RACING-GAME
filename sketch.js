
var car1,car1Image;
var car2,car2Image;
var scooter,scooterImage;
var truck,truckImage;
var car1Group,car2Group,scooterGroup,truckGroup;
var road,roadImage;
var player,playerImage;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameover,gameoverImage
var restart,restartImage


function preload(){
  playerImage=loadImage("player.png");
  roadImage=loadImage("Road.jpg");
  car1Image=loadImage("car1.png");
  car2Image=loadImage("car2.png");
  scooterImage=loadImage("scooter.png");
   truckImage=loadImage("truck.png");
  gameoverImage=loadImage("gameover.png");
  restartImage=loadImage("restart.png");

}

function setup() {
  createCanvas(550,600);
  
  road=createSprite(285,300,550,600);
  road.addImage(roadImage);
  road.scale=4.52;
  
  
  player=createSprite(270,530,30,30);
  player.addImage(playerImage);
  player.scale=0.3;
  
  gameover=createSprite(270,300,30,30)
  gameover.addImage(gameoverImage);
  gameover.scale=0.6;
  
  restart=createSprite(270,400,30,30)
  restart.addImage(restartImage);
  restart.scale=0.2;
  
  
  car1Group= new Group();
  car2Group= new Group();
  scooterGroup=new Group();
  truckGroup=new Group();
  
  
  score=0;
  
}


function draw() {
 background("lightgreen");
  
  if(gameState===PLAY){
    
  
  
  
  road.velocityY=7;
  
  score = score + Math.round(getFrameRate()/30);
    console.log(frameCount)
  
  if (road.y > 650){
      road.y = road.height/2;
    }
  
  if(keyDown("right_arrow")){
    player.x= player.x+8;
  }
  
  if(keyDown("left")){
     player.x= player.x-8;
  }
  
  spawncar1();
   spawncar2();
  spawnscooter();
  spawntruck();
  
  if(car1Group.isTouching(car2Group)){
    car2Group.destroyEach();
  }
  
  if(car1Group.isTouching(truckGroup)){
    car1Group.destroyEach();
  }
  
  if(car1Group.isTouching(scooterGroup)){
    scooterGroup.destroyEach();
  }
   if(car2Group.isTouching(scooterGroup)){
    car2Group.destroyEach();
  }
   if(car2Group.isTouching(truckGroup)){
    truckGroup.destroyEach();
  }
  if(truckGroup.isTouching(scooterGroup)){
    scooterGroup.destroyEach();
  }
    if(player.isTouching(car1Group)||player.isTouching(car2Group)||
       player.isTouching(scooterGroup)||player.isTouching(truckGroup)){
      gameState=END;
    }
    
  gameover.visible=false;
  restart.visible=false;
  }
  
  if(gameState===END){
     road.velocityY=0;
    car1Group.destroyEach();
    car2Group.destroyEach();
    scooterGroup.destroyEach();
    truckGroup.destroyEach();
    player.visible=false;
    gameover.visible=true;
    restart.visible=true;
    
    if(mousePressedOver(restart)) {
      reset();
    }

  }
  
  
  drawSprites();
  
  fill("black");
  textFont("Cooper black")
  textSize(20);
  text("Score: "+ score, 400,50);
  
}

function reset(){
  gameState=PLAY;
  gameover.visible=false;
  restart.visible=false;
  player.visible=true;
  score=0;
  
}

function spawncar1(){
  
  if(frameCount%250===0){
 var car1=createSprite(100,-100,30,30);
    car1.addImage(car1Image);
    car1.scale=0.3;
    car1.velocityY=4;
    car1.x=Math.round(random(40,300));
     car1.lifetime=300;
    car1Group.add(car1);
   
  
  }
  
  
}

function spawncar2(){
  
  if(frameCount%167===0){
 var car2=createSprite(100,-100,30,30);
    car2.addImage(car2Image);
    car2.scale=0.3;
    car2.velocityY=5;
    car2.x=Math.round(random(250,500));
     car2.lifetime=300;
    car2Group.add(car2);
   }
  }


function spawnscooter(){
  
  if(frameCount%350===0){
 var scooter=createSprite(100,-100,30,30);
    scooter.addImage(scooterImage);
    scooter.scale=0.2;
    scooter.velocityY=4;
    scooter.x=Math.round(random(40,330));
     scooter.lifetime=300;
    scooterGroup.add(scooter);
   
  
  }
}


function spawntruck(){
if(frameCount%600===0){
 var truck=createSprite(100,-100,30,30);
    truck.addImage(truckImage);
    truck.scale=0.4;
    truck.velocityY=5;
    truck.x=Math.round(random(50,500));
     truck.lifetime=300;
    truckGroup.add(truck);
   }
  }