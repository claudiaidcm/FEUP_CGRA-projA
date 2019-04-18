/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, topTexture, bottomTexture, sideTexture) {
		super(scene);
		this.init(scene, topTexture, bottomTexture, sideTexture);
		this.scene = scene;
	}
	init(scene, topTexture, bottomTexture, sideTexture) {
		this.quad = new MyQuad(scene);

		this.topTexture = new CGFtexture(this.scene, topTexture);
		this.topMaterial = new CGFappearance(this.scene);
		this.topMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.topMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
		this.topMaterial.setSpecular(0.5, 0.5, 0.5, 1);
		this.topMaterial.setShininess(10.0);
		this.topMaterial.setTexture(this.topTexture);
		this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.bottomTexture = new CGFtexture(this.scene, bottomTexture);
		this.bottomMaterial = new CGFappearance(this.scene);
		this.bottomMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.bottomMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
		this.bottomMaterial.setSpecular(0.5, 0.5, 0.5, 1);
		this.bottomMaterial.setShininess(10.0);
		this.bottomMaterial.setTexture(this.bottomTexture);
		this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.sideTexture = new CGFtexture(this.scene, sideTexture);
		this.sideMaterial = new CGFappearance(this.scene);
		this.sideMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.sideMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
		this.sideMaterial.setSpecular(0.5, 0.5, 0.5, 1);
		this.sideMaterial.setShininess(10.0);
		this.sideMaterial.setTexture(this.sideTexture);
		this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	display() {

		this.topMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();


		this.sideMaterial.apply();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0)
		this.scene.translate(0, 0.5, 0);
		this.scene.rotate(-Math.PI / 2, 1, 0, 0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.5, 0);
		this.scene.rotate(Math.PI / 2, 1, 0, 0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI / 2, 1, 0, 0)
		this.scene.translate(0.5, 0, 0);
		this.scene.rotate(Math.PI / 2, 0, 1, 0)
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI / 2, 1, 0, 0)
		this.scene.translate(-0.5, 0, 0);
		this.scene.rotate(-Math.PI / 2, 0, 1, 0)
		this.quad.display();
		this.scene.popMatrix();

	}


	updateBuffers() { }
}
