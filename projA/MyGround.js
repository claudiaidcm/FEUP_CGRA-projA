/**
 * MyGroung
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyGround extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

    init(scene) {

        var texCoords = [
			0, 30,
			30, 30,
			0, 0,
			30, 0
        ]
        
        this.ground = new MyQuad(this.scene, texCoords);

        this.groundTexture = new CGFtexture(this.scene, 'images/ground.png');
        this.groundMaterial = new CGFappearance(this.scene);
        this.groundMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.groundMaterial.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.groundMaterial.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.groundMaterial.setShininess(10.0);
        this.groundMaterial.setTexture(this.groundTexture);
        this.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        //HOUSE GROUND
        this.groundMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2 , 1, 0, 0);
        this.scene.rotate(-Math.PI/4 , 0, 0, 1);
        this.scene.scale(30, 30, 30);
        this.ground.display();
        this.scene.popMatrix();   
    }
    updateBuffer() { }
}
