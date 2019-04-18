/**
 * MyFinalScene
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFinalScene extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

    init(scene) {
        this.ground = new MyGround(this.scene);
        this.house = new MyHouse(this.scene);
        this.treeGroupPatch = new MyTreeGroupPatch(this.scene);      
        this.treeRowPatch = new MyTreeRowPatch(this.scene);
        this.firepit = new MyFirePit(this.scene);
        this.voxelHill = new MyVoxelHill(this.scene, 6, 'images/hill.png', 'images/hill.png', 'images/hill.png');
    }

    display() {

        //GROUND
        this.scene.pushMatrix();
        this.ground.display();
        this.scene.popMatrix();   

        //HOUSE
        this.scene.pushMatrix();
        this.scene.scale(1, 0.8, 1);
        this.scene.rotate(Math.PI / 2, -1, 0, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(0, 0, 2);
        this.house.display();
        this.scene.popMatrix();


        //TREES
        this.scene.pushMatrix();
        this.scene.translate(-7, 0, 5);
        this.treeGroupPatch.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.8, 0.8);
        this.scene.translate(-8, 0, 15);
        this.treeRowPatch.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.scale(0.6, 0.6, 0.6);
        this.scene.translate(-2, 0, 24);
        this.treeGroupPatch.display();
        this.scene.popMatrix(); 


        //FIREPIT
        this.scene.pushMatrix();
        this.scene.translate(8, 0, 0);
        this.firepit.display();
        this.scene.popMatrix(); 
        

        //HILLS
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -16);
        this.scene.rotate(Math.PI/2, -1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, -1);
        this.scene.scale(0.6, 0.6, 0.6);
        this.voxelHill.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-4, 0, -9);
        this.scene.rotate(Math.PI/2, -1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, -1);
        this.scene.scale(0.8, 0.8, 0.8);
        this.voxelHill.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-10, 0, -6);
        this.scene.rotate(Math.PI/2, -1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, -1);
        this.scene.scale(0.5, 0.5, 0.5);
        this.voxelHill.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-14, 0, 0);
        this.scene.rotate(Math.PI/2, -1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, -1);
        this.scene.scale(0.8, 0.8, 0.8);
        this.voxelHill.display();
        this.scene.popMatrix();
           
    }

    updateBuffer() { }
}
