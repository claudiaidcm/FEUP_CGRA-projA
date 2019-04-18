/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.scaleFactor = 0.5;
        this.light = 0;
        this.enable_textures = true;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        // Labels and ID's for object selection on MyInterface
        this.lightIDs = { 'Day': 0, 'Night': 1 };

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.cubeMap = new MyCubeMap(this);

        this.finalScene = new MyFinalScene(this);
        //Objects connected to MyInterface

        this.canyonMaterial = new CGFappearance(this);
        this.canyonMaterial.setAmbient(1, 1, 1, 1.0);
        this.canyonMaterial.setDiffuse(1, 1, 1, 1.0);
        this.canyonMaterial.setSpecular(1, 1, 1, 1.0);
        this.canyonMaterial.setShininess(10.0);
        this.canyonMaterial.loadTexture('images/canyon.jpg');

        this.nightMaterial = new CGFappearance(this);
        this.nightMaterial.setAmbient(1, 1, 1, 1.0);
        this.nightMaterial.setDiffuse(1, 1, 1, 1.0);
        this.nightMaterial.setSpecular(1, 1, 1, 1.0);
        this.nightMaterial.setShininess(10.0);
        this.nightMaterial.loadTexture('images/canyonNight.jpg');
    }

    initLights() {
        this.setGlobalAmbientLight(0.1, 0.1, 0.1, 1.0);

        //Day light
        this.lights[0].setConstantAttenuation(0.3);
        this.lights[0].setPosition(3, 15, 3, 1);
        this.lights[0].setDiffuse(225 / 255, 216 / 255, 185 / 255, 1.0);
        this.lights[0].setSpecular(225 / 255, 216 / 255, 185 / 255, 1.0);
        this.lights[0].setVisible(true);
        this.lights[0].enable();
        this.lights[0].update();

        //Night light
        this.lights[1].setConstantAttenuation(0.7);
        this.lights[1].setPosition(5, 9, 5, 1);
        this.lights[1].setDiffuse(0.5, 0.5, 0.7, 1.0);
        this.lights[1].setSpecular(0.5, 0.5, 0.7, 1.0);
        this.lights[1].setVisible(true);
        this.lights[1].update();

        //Fire pit light
        this.lights[2].setConstantAttenuation(1.0);
        this.lights[2].setPosition(4.2, 0.2, 0, 1);
        this.lights[2].setDiffuse(255 / 255, 216 / 255, 138 / 255, 1.0);
        this.lights[2].setSpecular(255 / 255, 216 / 255, 138 / 255, 1.0);
        this.lights[2].setAmbient(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setVisible(true);
        this.lights[2].enable();
        this.lights[2].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    updateLights() {
        this.lights[0].disable();
        this.lights[1].disable();
        this.lights[this.light].enable();

        if (this.light == 0) {
            this.canyonMaterial.apply();
        }
        else {
            this.nightMaterial.apply();
            this.setGlobalAmbientLight(0, 0, 0, 1.0);
        }
            

    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        if (this.enable_textures)
            this.enableTextures(true);
        else
            this.enableTextures(false);

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.finalScene.display();

        if (this.light == 0)
            this.canyonMaterial.apply();

        else
            this.nightMaterial.apply();

        this.pushMatrix();
        this.translate(0, 14.9, 0);
        this.scale(30, 30, 30);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.rotate(-Math.PI / 4, 0, 0, 1);

        

        this.cubeMap.display();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}
