/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init(scene);
		this.scene=scene;
    }

	init(scene) {
		this.tree = new MyTree(this.scene, 1, 0.5, 2, 1,'images/treeTrunk.png' , 'images/treeTop.png');      
        this.randomXs = [
            (Math.random()*2), (Math.random()*2), (Math.random()*2)
        ];

        this.randomZs = [
            (Math.random()*3), (Math.random()*3), (Math.random()*3),
        ]; 
    }

	display() {

        // ---- BEGIN Primitive drawing section
        //POS XZ = 00
        this.scene.pushMatrix();
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 10
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.8, 0.8);
        this.scene.translate(-0.3, 0, 2.5);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 20
        this.scene.pushMatrix();
        this.scene.scale(1.2, 1.2, 1.2);
        this.scene.translate(-0.3, 0, 3.5);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 01
        this.scene.pushMatrix();
        this.scene.scale(1.2, 0.8, 1.2);
        this.scene.translate(2.0, 0, -0.4);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 11
        this.scene.pushMatrix();
        this.scene.scale(1.2, 1.4, 1.0);
        this.scene.translate(2.0, 0, 2.2);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 21
        this.scene.pushMatrix();
        this.scene.scale(1.0, 0.8, 1.0);
        this.scene.translate(2.5, 0, 4.8);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 02
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.translate(3.5, 0, 0.2);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 12
        this.scene.pushMatrix();
        this.scene.scale(0.7, 0.7, 0.9);
        this.scene.translate(7, 0, 3.0);
        this.tree.display();
        this.scene.popMatrix();

        //POS XZ = 22
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.8, 0.8);
        this.scene.translate(6.5, 0, 6.5);
        this.tree.display();
        this.scene.popMatrix();
		// ---- END Primitive drawing section
	}
	updateBuffer() { }
}

