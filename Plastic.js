class Plastic{
    constructor() {
        var plastic = createSprite(1200,100,50,50);
    plastic.y = random(100,300);
    plastic.velocityX = -2;
    plastic.addImage("plastic",plasticImage);
    plastic.scale = 0.1;
    plastic.lifetime = 600;
    plasticGroup.add(plastic);
    }
}
