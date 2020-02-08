class Tree {
    constructor() {
        var tree = createSprite(1200,100,50,50);
        tree.y = random(100,300);
        tree.velocityX = -2;
        tree.addImage("tree",treeImage);
        tree.scale = 0.1;
        tree.lifetime = 600;
        treeGroup.add(tree);
    }
}