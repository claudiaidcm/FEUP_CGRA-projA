/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
		super(scene);
		this.init(scene, trunkTexture, treeTopTexture);
		this.scene = scene;
		this.trunkHeight = trunkHeight;
		this.trunkRadius = trunkRadius;
		this.treeTopHeight = treeTopHeight;
		this.treeTopRadius = treeTopRadius;
	}
	init(scene, trunkTexture, treeTopTexture) {

		this.cylinder = new MyCylinder(this.scene, 10);
		this.cone = new MyCone(this.scene, 10, 10);

		this.trunkTexture = new CGFtexture(this.scene, trunkTexture);
		this.trunkMaterial = new CGFappearance(this.scene);
		this.trunkMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
		this.trunkMaterial.setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.trunkMaterial.setSpecular(0.3, 0.3, 0.3, 1.0);
		this.trunkMaterial.setShininess(10.0);
		this.trunkMaterial.setTexture(this.trunkTexture);
		this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.treeTopTexture = new CGFtexture(this.scene, treeTopTexture);
		this.treeTopMaterial = new CGFappearance(this.scene);
		this.treeTopMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
		this.treeTopMaterial.setDiffuse(0.5, 0.5, 0.5, 1.0);
		this.treeTopMaterial.setSpecular(0.5, 0.5, 0.5, 1.0);
		this.treeTopMaterial.setShininess(10.0);
		this.treeTopMaterial.setTexture(this.treeTopTexture);
		this.treeTopMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}

	display() {

		// ---- BEGIN Primitive drawing section

		this.trunkMaterial.apply();
		this.scene.pushMatrix();
		this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
		this.cylinder.display();
		this.scene.popMatrix();

		this.treeTopMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, this.trunkHeight, 0);
		this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
		this.cone.display();
		this.scene.popMatrix();


		// ---- END Primitive drawing section
	}
	updateBuffer() { }
}
