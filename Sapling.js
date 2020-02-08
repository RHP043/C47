class Sapling {
    constructor() {
        var sapling = createSprite(1200,100,50,50);
    sapling.y = random(100,300);
    sapling.velocityX = -2;
    sapling.addImage("sapling",saplingImage);
    sapling.scale = 0.1;
    sapling.lifetime = 600;
    saplingGroup.add(sapling);
    }
}