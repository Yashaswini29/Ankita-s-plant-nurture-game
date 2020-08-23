var backimage,scene;
var Rarrow;
var mainB;
var mbadge;
var RarrowSprite , mbadgeSprite;
var gameState;
var seed,cloud,can,can1,cloud1;
var seedSprite,cloudSprite,canSprite,can1Sprite,bubbleSprite,cloud1Sprite;
var grownPlant;
var sun,sunSprite;
var bubble,o2;
var block1,block2;
var sac,f;
var sacSprite,fSprite;

var count; 
var startT, deltaT = 900
var gasGroup;
var pressCount;
var canreplace;
var timer = 10;
function preload(){
  backimage=loadImage("images/back.jpg");
  Rarrow=loadImage("images/next.png");
  mbadge=loadImage("images/organic.png");
 // mainB=loadImage("images/background-scene---the-sky.jpg");
 mainB=loadImage("images/landsky.jpg");
 seed=loadImage("images/plant.png");
 co2=loadImage("images/co2.png");
 o2=loadImage("images/oxygen.png");
 cloud=loadAnimation("images/cloud.png");
 cloudreplace = loadAnimation("images/cloudreplace.png");
sun=loadImage("images/sun.png");
can=loadAnimation("images/watering-can.png");
 can1=loadImage("images/watering-can1.png");
 bubble=loadImage("images/co2.png");
 sac=loadImage("images/fertiliser sac.png");
 f=loadImage("images/f.png");
 canreplace = loadAnimation("images/fact 4.jpg");
 
 //grownPlant = loadImage("");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  scene=createSprite(displayWidth/2,displayHeight/2,displayWidth-20,displayHeight-30);
  scene.addAnimation("start",backimage);
  scene.addAnimation("main",mainB);
  scene.scale=2.5;

  sunSprite=createSprite(500,200,20,20);
  sunSprite.addImage("sun",sun);
  sunSprite.scale=0.3;
 sunSprite.visible=false;


  RarrowSprite=createSprite(1200,600,20,20);
  RarrowSprite.addImage("arrow",Rarrow);
  RarrowSprite.scale=0.1;

  mbadgeSprite=createSprite(650,300,20,20);
  mbadgeSprite.addImage("badge",mbadge);
  mbadgeSprite.scale=0.1;
  
  seedSprite=createSprite(600,580,20,20);
  //seedSprite=addImage("seed1",seed);
  seedSprite.addImage("badge",seed);
  seedSprite.scale=0.3;
  seedSprite.visible=false;

  cloudSprite=createSprite(550,200,20,20);
  cloudSprite.addAnimation("cloud",cloud);
  cloudSprite.addAnimation("cloudreplace",cloudreplace);
  cloudSprite.scale=0.3;
  cloudSprite.visible=false;

  cloud1Sprite=createSprite(450 ,200,20,20);
  cloud1Sprite.addAnimation("cloud",cloud);
  cloud1Sprite.scale=0.2;
  cloud1Sprite.visible=false;

  canSprite=createSprite(1000,600,20,20);
  canSprite.addAnimation("can",can);
  canSprite.addAnimation("canreplace", canreplace)
  
  canSprite.scale=0.2;
  canSprite.visible=false;
 
  can1Sprite=createSprite(650,460,20,20);
  can1Sprite.addImage("can",can1);
  can1Sprite.scale=0.2;
  can1Sprite.visible=false;

  
  bubbleSprite=createSprite(1000,310,20,20);
  bubbleSprite.addImage("bubble",bubble);
  bubbleSprite.scale=0.2;
  bubbleSprite.visible=false;

  sacSprite=createSprite(1000,450,20,20);
  sacSprite.addImage("sac",sac);
  sacSprite.scale=0.2;
  sacSprite.visible=false;

  fSprite=createSprite(700,580,20,20);
  fSprite.addImage("fertiliser",f);
  fSprite.scale=0.2;
  fSprite.visible=false;

 
gameState="start";
count=60;

startT=millis();
gasGroup= createGroup();

pressCount = 0;
}

function draw() {
  background(255,255,255); 
  drawSprites();
  if(gameState==="start"){
//co2();
  
  textSize(20);
  fill("blue");
  stroke("white");
  strokeWeight(3);
  text("We have given you one seedling",displayWidth/4,displayHeight/4) ;
  text("Nuture it and become an ENVIORNMENTAL CHAMPION",displayWidth/4,displayHeight/4+50);
  }
  
  

  if(frameCount%50==0 && timer > 0){ 
    timer = timer - 1; 
  } 
  if(timer === 0){ 
    gameState = "end";
  fill("yellow"); 
  textSize(40); 
  text("GAME OVER!!", 450,350); 
   
}

if(timer<10 && timer>6){
  fill("blue"); 
  textSize(20); 
  textFont('Verdana');
  textStyle(BOLD)
  stroke("white");
  text("'Remember to protect the ", 150,400); 
  text("plant from harmful gases'", 150,420); 
}
  if (mousePressedOver(RarrowSprite)) {
    gameState="play";
   scene.changeAnimation("main",mainB);
  scene.scale=1.5;
  mbadgeSprite.visible = false;
  RarrowSprite.visible=false;
  seedSprite.visible=true;
  //setInterval(timer,200,0);
  
 // co2.visible=true;
 cloudSprite.visible=true;
 canSprite.visible=true;
bubbleSprite.visible=true;
 cloud1Sprite.visible=true;
 sunSprite.visible=true;
 sacSprite.visible=true;

      }
    if(gameState==="play") {
      fill("yellow");
      textSize(40);
      text("TIME LEFT:" + timer, 800,200);
      
      if (World.frameCount%50===0) {
        
        var co=createSprite(random(900,1100),300,20,20);
        co.addImage("bubble",bubble);
        co.scale=random(0.09,0.1);
        co.velocityX=-1;
        co.velocityY=0.5;
       
        gasGroup.add(co);
        var o=createSprite(random(900,1100),300,20,20);
        o.addImage("o",o2);
        o.scale=random(0.01,0.1);
        o.velocityX=-1;
        o.velocityY=0.5;
        
        gasGroup.add(o)
        
        
         }

         for(var i = 0;i<gasGroup.length;i++){ 
           if(gasGroup.get(i).isTouching(seedSprite)){
              gameState = "end"
              timer = 0;
              fill("yellow"); 
              textSize(40); 
              text("GAME OVER!!", 450,350); 

           }
          if (mousePressedOver(gasGroup.get(i))) {
            gasGroup.get(i).destroy();
            //score = score -1;
            //reset();
            //gameState = "serve";
            }
       }
    
      if (mousePressedOver(canSprite)) {
       // canSprite.visible=false;
       //
       canSprite.scale = 0.16;
      canSprite.changeAnimation("canreplace",canreplace);
       can1Sprite.visible=true;
       pressCount = pressCount + 1;
      }
     
      if (mousePressedOver(sacSprite)) {
        
       sacSprite.visible=false;
       fSprite.visible=true;
       pressCount = pressCount + 1;
       textSize(20);
       textFont("Comic Sans MS")
       text("Caffine serves the function of a pesticide in coffee plant",1000,450);
       }
      
       
      //}
      if(mousePressedOver(cloudSprite)|| mousePressedOver(cloud1Sprite)){
        pressCount = pressCount + 1;
        //block1=createSprite(250,200,20,20);
       // block1.visible=true;
      // cloud1Sprite.velocityX=0;
        if(cloudSprite.isTouching(sunSprite)|| cloud1Sprite.isTouching(sunSprite)){
        
        
        cloudSprite.velocityX=0.5;
        cloud1Sprite.velocityX=-0.5;
        cloudSprite.changeAnimation("cloudreplace",cloudreplace);

        }else{
         
        
          cloudSprite.velocityX=0;
          cloud1Sprite.velocityX=0; 
        }
       
      } 
      }
     
    }

      function timer(){
        count=count-1
      }
     /* function co2() {
        if(World.frameCount % 60 === 0) {
        co2 = createSprite(randomNumber(150,220),1,10,10);
        co2.y=randomNumber(36,370);
       co2.setAnimation("co2",co2);
       co2.scale = 0.2;
       co2.velocityX = randomNumber(5,12);
       co2group.add(Gco2);
       co2.lifetime = 110;
       co2.setCollider("rectangle",20,20);
       co2.visible=false;
       }     
      
        
}*/
   
