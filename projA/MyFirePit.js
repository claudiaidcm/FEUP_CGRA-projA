/**
 * MyFirePit
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFirePit extends CGFobject {
  constructor(scene) {
    super(scene);
    this.init(scene);
    this.scene = scene;
  }

  init(scene) {
    this.wood = new MyPrism(this.scene, 5);
    this.fire = new MyCone(this.scene, 10, 10);

    this.woodTexture = new CGFtexture(this.scene, 'images/treeTrunk.png');
    this.woodMaterial = new CGFappearance(this.scene);
    this.woodMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
    this.woodMaterial.setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.woodMaterial.setSpecular(0,3, 0,3, 0,3, 1.0);
    this.woodMaterial.setShininess(100.0);
    this.woodMaterial.setTexture(this.woodTexture);
    this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');

    this.fireTexture = new CGFtexture(this.scene, 'images/fire.png');
    this.fireMaterial = new CGFappearance(this.scene);
    this.fireMaterial.setAmbient(1, 1, 1, 1.0);
    this.fireMaterial.setDiffuse(1, 1, 1, 1.0);
    this.fireMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
    this.fireMaterial.setShininess(100.0);
    this.fireMaterial.setTexture(this.fireTexture);
    this.fireMaterial.setTextureWrap('REPEAT', 'REPEAT');
  }

  display() {

    this.woodMaterial.apply();
    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2, 0, 0, 1);
    this.scene.translate(0, -1.5, 0);
    this.scene.scale(0.3, 3, 0.3);
    this.wood.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI / 2, 1, 0, 1);
    this.scene.translate(0, -1.5, 0);
    this.scene.scale(0.3, 3, 0.3);
    this.wood.display();
    this.scene.popMatrix();

    this.fireMaterial.apply();
    this.scene.pushMatrix();
    this.scene.scale(1, 1.2, 1);
    this.scene.translate(0, 0.1, 0);
    this.fire.display();
    this.scene.popMatrix();
  }
  updateBuffer() { }
}
