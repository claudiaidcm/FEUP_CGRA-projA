/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

    init(scene) {
        //Initializing the objcts
        this.tree = new MyTree(this.scene, 1, 0.5, 2, 1,'images/treeTrunk.png' , 'images/treeTop.png');
        
        this.randomXs = [
            (Math.random()), (Math.random()), (Math.random()),
            (Math.random()), (Math.random()), (Math.random())
        ];

        this.randomZs = [
            (Math.random()), (Math.random()), (Math.random()),
            (Math.random()), (Math.random()), (Math.random())
        ];       
    }
	display () {
        //Display trees
        for (var i = 0; i < 6; i++) {
            this.scene.pushMatrix();
            this.scene.translate(this.randomXs[i]+(i*3), 0, this.randomZs[i] );
            this.tree.display();
            this.scene.popMatrix();
        }
    }
}
