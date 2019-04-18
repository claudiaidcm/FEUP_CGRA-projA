/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene, height, topTexture, bottomTexture, sideTexture) {
		super(scene);
		this.init(scene, topTexture, bottomTexture, sideTexture);
		this.scene = scene;
		this.height = height;
	}
	init(scene, topTexture, bottomTexture, sideTexture) {
		this.cube = new MyUnitCubeQuad(scene, topTexture, bottomTexture, sideTexture);

	}

	display() {
		for (var h = 0; h < this.height; h++) {
			var nCubes = 1 + (this.height - h - 1) * 2;
			for (var i = 0; i < nCubes; i++) {
				for (var j = 0; j < nCubes; j++) {
					this.scene.pushMatrix();
					this.scene.translate(nCubes / 2 - 0.5 - i, nCubes / 2 - 0.5 - j, h);
					this.cube.display();
					this.scene.popMatrix();
				}
			}
		}

	}


	updateBuffers() { }
}

