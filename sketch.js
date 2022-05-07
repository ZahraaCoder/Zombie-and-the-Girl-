var bg,bgImg;
var girl,girlrunning,girldead;
var zombie,zombierunning,zombieattack;

function preload(){
bgImg=loadImage("BG.jpg");
girlrunning=loadAnimation("assets\Run (1).png","assets\Run (2).png","assets\Run (3).png","assets\Run (4).png","assets\Run (5).png","assets\Run (6).png","assets\Run (7).png","assets\Run (8).png","assets\Run (9).png","assets\Run (10).png","assets\Run (11).png","assets\Run (12).png","assets\Run (13).png","assets\Run (14).png","assets\Run (15).png","assets\Run (16).png","assets\Run (17).png","assets\Run (18).png","assets\Run (19).png","assets\Run (20).png");

}

function setup() {
 createCanvas(1500,720);
bg=createSprite(750,360);
bg.addImage(bgImg);
bg.scale=1.6;
bg.velocityX=-2;

}

function draw() {
 background(0);

if(bg.x<600){
    bg.x=bg.width/1.5;
}


 drawSprites();
}