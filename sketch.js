var bg,bgImg;
var girl,girlrunning,girldead;
var zombie,zombierunning,zombieattack;

function preload(){
bgImg=loadImage("BG.jpg");
girlrunning=loadAnimation("assets/Run (1).png","assets/Run (2).png","assets/Run (3).png","assets/Run (4).png","assets/Run (5).png","assets/Run (6).png","assets/Run (7).png","assets/Run (8).png","assets/Run (9).png","assets/Run (10).png","assets/Run (11).png");
zombierunning=loadAnimation("assets/Walk (1).png","assets/Walk (2).png","assets/Walk (3).png","assets/Walk (4).png","assets/Walk (5).png","assets/Walk (6).png","assets/Walk (7).png","assets/Walk (8).png","assets/Walk (9).png","assets/Walk (10).png");
 



}

function setup() {
 createCanvas(1500,720);
bg=createSprite(750,360);
bg.addImage(bgImg);
bg.scale=1.6;
bg.velocityX=-2;

girl=createSprite(900,600);
girl.addAnimation("running",girlrunning);
girl.scale=0.4;

zombie=createSprite(230,550);
zombie.addAnimation("running",zombierunning);
zombie.scale=0.5;

}

function draw() {
 background(0);

if(bg.x<600){
    bg.x=bg.width/1.5;
}


 drawSprites();
}