/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();

	}
	initBuffers() {
		this.vertices = [
			//back face
			-0.5, -0.5, -0.5,	//0
			-0.5, 0.5, -0.5,	//1
			-0.5, 0.5, 0.5,		//2
			-0.5, -0.5, 0.5,	//3

			//front face
			0.5, -0.5, -0.5,	//4
			0.5, 0.5, 0.5,		//5
			0.5, -0.5, 0.5,		//6
			0.5, 0.5, -0.5,		//7
			
			//top
			-0.5, -0.5, 0.5,	//8 - 3
			-0.5, 0.5, 0.5,		//9 - 2
			0.5, 0.5, 0.5,		//10 - 5
			0.5, -0.5, 0.5,		//11 - 6

			//bottom
			-0.5, -0.5, -0.5,	//12 - 0
			-0.5, 0.5, -0.5,	//13 - 1
			0.5, 0.5, -0.5,		//14 - 7
			0.5, -0.5, -0.5,	//15 - 4

			//right
			-0.5, 0.5, -0.5,	//16 -1
			-0.5, 0.5, 0.5,		//17 -2
			0.5, 0.5, 0.5,		//18 - 5
			0.5, 0.5, -0.5,		//19 -7

			//left
			-0.5, -0.5, -0.5,	//20 - 0
			-0.5, -0.5, 0.5,	//21 - 3
			0.5, -0.5, 0.5,		//22 - 6
			0.5, -0.5, -0.5,	//23 - 4
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//back face
			0, 1, 2,
			3,0,2,

			//front face
			6,5,7,
			7,4,6,

			//top face
			8,9,10,
			10,11,8,

			//bottom
			12,15,14,
			14,13,12,
			
			//right
			16,18,17,
			16,19,18,

			//left
			20,21,22,
			22,23,20
		];

		this.normals = [
			
			//back face
			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,

			//front face
			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0,

			//top face
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,

			//bottom
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,

			//right
			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0,

			//left
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0

		];
		
		this.texCoords=[
			//back face
			0.25,2.0/3,
			0.5, 2.0/3,
			0.5,1.0/3,
			0.25, 1.0/3,

			//front face
			1, 2.0/3,
			0.75, 1.0/3,
			1, 1.0/3,
			0.75, 2.0/3,
			

			//top face
			0.25,1.0/3,
			0.5, 1.0/3,
			0.5,0,
			0.25,0,

			//bottom
			0.25, 2/3,
			0.5, 2/3,
			0.5, 1,
			0.25, 1,

			//right
			0.5,2/3,
			0.5,1/3,
			0.75,1/3,
			0.75,2/3,

			//left
			0.25,2/3,
			0.25,1/3,
			0,1/3,
			0, 2/3
		]

		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}


	updateBuffers() {}
}

