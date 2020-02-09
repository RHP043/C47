var homeImage,cutter,saplingImage,treeImage;
var coalImage,plasticImage;
var sapling,bag;
var windImage1,windImage3,windImage6;
var count=0,num=0;
var score = 0;
var positionX, positionY;
function preload() {
  homeImage = loadImage("House.png");
  cutterImage = loadImage("woodcutter.jpg");
  saplingImage = loadImage("sapling.jpg");
  treeImage = loadImage("Tree.png");
  bagImage = loadImage("bag.jpg");
  coalImage = loadImage("coal.jpg");
  plasticImage = loadImage("plasticc.jpg");
  windImage1 = loadImage("Wind1.png");
  windImage3 = loadImage("Wind3.png");
  windImage6 = loadImage("Wind6.jpg");
  factoryImage = loadImage("factory.jpg");
}

function setup() {
  createCanvas(1200,500);
  wall1 = createSprite(1190,250,10,1200);
  wall1.visible = false;
  wall2 = createSprite(600,400,1200,10);
  wall2.visible = false;
  wall3 = createSprite(600,10,1200,10);
  wall3.visible = false;
  wall4 = createSprite(10,250,10,1200);
  wall4.visible = false;
  cutter = createSprite(400,450,50,50);
  cutter.addImage("cutter",cutterImage);
  cutter.scale = 0.06;
  bag = createSprite(600,300,50,50);
  bag.addImage(bagImage);
  bag.scale = 0.05;
  
  saplingGroup = new Group();
  treeGroup = new Group();
  coalGroup = new Group();
  plasticGroup = new Group();
}



function draw() {
  background("#FFFFF");  
00
  image(homeImage,600,400,100,100);
  if(positionX>width || positionX<0) {
    ball.velocityX = ball.velocityX * -1
  }

  if(positionY>height || positionY<0) {
    ball.velocityY = ball.velocityY * -1
  }
  

  if (keyDown("UP_ARROW")) {
    bag.velocityX = 0;
    bag.velocityY = -5;
  }
  if (keyDown("DOWN_ARROW")) {
    bag.velocityX = 0;
    bag.velocityY = 5;
  }
  if (keyDown("LEFT_ARROW")) {
    bag.velocityX = -5;
    bag.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    bag.velocityX = 5;
    bag.velocityY = 0;
       
  }

  bag.bounceOff(wall1);
  bag.bounceOff(wall2);
  bag.bounceOff(wall3);
  bag.bounceOff(wall4);

  if(bag.isTouching(saplingGroup)){
    saplingGroup.destroyEach();
    plasticGroup.destroyEach();
    coalGroup.destroyEach();
    count = count+1;
  }
  

  if(count < 5) {
    collection();
  }

  if(count >= 5 && count < 10) {
    collectTree(); 
  }

  if(count >= 10) {
    cutter.remove();
    image(windImage1,400,450,60,60);
    fill("Blue");
    text("You have finished this level, here is a reward",500,250);

  }

  if(bag.isTouching(treeGroup)){
    treeGroup.destroyEach();
    plasticGroup.destroyEach();
    coalGroup.destroyEach();
    count = count+1;
  }

  if(bag.isTouching(coalGroup)){
    coalGroup.destroyEach();
    treeGroup.destroyEach();
    plasticGroup.destroyEach();
    saplingGroup.destroyEach();
    count = count-1;
  }

  if(bag.isTouching(plasticGroup)){
    coalGroup.destroyEach();
    treeGroup.destroyEach();
    plasticGroup.destroyEach();
    saplingGroup.destroyEach();
    count = count-1;
  }
  
  console.log(count);
  drawSprites();
}

function collection() {
  if(frameCount%80 === 0) {
    sapling = new Sapling();
  }
   if(frameCount%160===0) {
    coal = new Coal();
  }
  if(frameCount%40===0) {
    plastic = new Plastic();
  }
  

}
function collectTree() {
  if(frameCount%60 === 0) {
    tree = new Tree();
  }
  if(frameCount%160===0) {
    coal = new Coal();
  }
  if(frameCount%40===0) {
    plastic = new Plastic();
  }
}
