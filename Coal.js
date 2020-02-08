class Coal{
    constructor() {
        var coal = createSprite(1200,100,50,50);
    coal.y = random(100,300);
    coal.velocityX = -2;
    coal.addImage("coal",coalImage);
    coal.scale = 0.1;
    coal.lifetime = 600;
    coalGroup.add(coal);
    }
}