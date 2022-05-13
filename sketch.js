var bg,bgImg;
var girl,girlrunning,girldead;
var zombie,zombierunning,zombieattack;
var invisibleGround;
var obGroup,ob1,ob2,ob3,ob4;
var s=0;

function preload(){
bgImg=loadImage("BG.jpg");

girlrunning=loadAnimation("assets/Run (1).png","assets/Run (2).png","assets/Run (3).png","assets/Run (4).png","assets/Run (5).png","assets/Run (6).png","assets/Run (7).png","assets/Run (8).png","assets/Run (9).png","assets/Run (10).png","assets/Run (11).png");

zombierunning=loadAnimation("assets/Walk (1).png","assets/Walk (2).png","assets/Walk (3).png","assets/Walk (4).png","assets/Walk (5).png","assets/Walk (6).png","assets/Walk (7).png","assets/Walk (8).png","assets/Walk (9).png","assets/Walk (10).png");

ob1=loadImage("assets/obstacle1.png");
 ob2=loadImage("assets/obstacle2.png");
 ob3=loadImage("assets/obstacle3.png");
 ob4=loadImage("assets/obstacle4.png");


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

invisibleGround=createSprite(750,690,1500,10);
invisibleGround.visible=false;

obGroup=new Group();


}

function draw() {
 background(0);

if(bg.x<600){
    bg.x=bg.width/1.5;
}
s=s+Math.round(getFrameRate()/60);

if(keyDown("space")&& girl.y>=550){
    girl.velocityY=-12;
}
 girl.velocityY=girl.velocityY+0.6;
 girl.collide(invisibleGround);

 zombie.velocityY=zombie.velocityY+0.6;
 zombie.collide(invisibleGround);

spawnObstacles();

if(obGroup.isTouching(zombie)){
    zombie.velocityY=-12;
}
 drawSprites();

 fill("pink");
 textFont("cursive");
 textSize(28);
 text(" SCORE: "+s,120,100);


}

function spawnObstacles(){
if(frameCount % 90===0){
    var ob=createSprite(1500,670,10,40);
    ob.velocityX=-6;
    var k=Math.round(random(1,4));
    switch(k){
        case 1:ob.addImage(ob1);
        break;

        case 2:ob.addImage(ob2);
        break;

        case 3:ob.addImage(ob3);
        break;

        case 4:ob.addImage(ob4);
        break;

        default:break;
    }
    ob.scale=0.2;

    obGroup.add(ob);

//    ob.debug=true;

    ob.setCollider("circle",0,0,0.5);
    
}
}