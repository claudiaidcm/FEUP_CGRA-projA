/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

    init(scene) {
        this.base = new MyUnitCubeQuad(this.scene, 'images/houseWall.png', 'images/houseWall.png', 'images/houseWall.png');
        this.top = new MyPyramid(this.scene, 4, 4);
        this.column = new MyPrism(this.scene, 5);
        this.door = new MyQuad(this.scene);
        this.window = new MyQuad(this.scene);

        this.doorTexture = new CGFtexture(this.scene, 'images/door.png');
        this.doorMaterial = new CGFappearance(this.scene);
        this.doorMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.doorMaterial.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.doorMaterial.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.doorMaterial.setShininess(10.0);
        this.doorMaterial.setTexture(this.doorTexture);
        this.doorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.windowTexture = new CGFtexture(this.scene, 'images/window.png');
        this.windowMaterial = new CGFappearance(this.scene);
        this.windowMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.windowMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.windowMaterial.setSpecular(1, 1, 1, 1.0);
        this.windowMaterial.setShininess(10.0);
        this.windowMaterial.setTexture(this.windowTexture);
        this.windowMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.columnTexture = new CGFtexture(this.scene, 'images/houseColumn.png');
        this.columnMaterial = new CGFappearance(this.scene);
        this.columnMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.columnMaterial.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.columnMaterial.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.columnMaterial.setShininess(10.0);
        this.columnMaterial.setTexture(this.columnTexture);
        this.columnMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.roofTexture = new CGFtexture(this.scene, 'images/houseRoof.png');
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.roofMaterial.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.roofMaterial.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.setTexture(this.roofTexture);
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        //HOUSE DOOR
        this.doorMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(1.5, 2.5, 1);
        this.scene.translate(0, -0.3, 2.1);
        this.door.display();
        this.scene.popMatrix();

        //HOUSE WINDOW
        this.windowMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(2, 2, 2);
        this.scene.translate(0, 0, 1.1);
        this.door.display();
        this.scene.popMatrix();
        

        //HOUSE COLUMNS
        this.columnMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.translate(8, -0.5, 8);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.translate(-8, -0.5, -8);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.translate(-8, -0.5, 8);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.translate(8, -0.5, -8);
        this.column.display();
        this.scene.popMatrix();


        //HOUSE TOP
        this.roofMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(4, 4, 4);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.top.display();
        this.scene.popMatrix();

        //HOUSE BASE
        this.scene.pushMatrix();
        this.scene.scale(4, 4, 4);
        this.base.display();
        this.scene.popMatrix();

    }
    updateBuffer() { }
}
