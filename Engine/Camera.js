let Vector2 = require('./Vector2');
let Transform = require('./Transfrom');
class Camera {
    static currentCamera = null;
    /**
     * Create new Camera disabled by default. Only one camera can be enabled at one time
     * @param {Transform} transfrom - global coords and rotation camera's center. (0, 0) by default
     */
    constructor(transform = new Transform()) {
        this.enable = false;
        this.transform = transform;
    }
    /**
     * Enable passed camera and disable last one
     * @param {Camera} camera - target camera
     */
    static Enable(camera = new Camera()) {
        if (Camera.currentCamera) {
            Camera.currentCamera.enable = false;
        }
        Camera.currentCamera = camera;
        Camera.currentCamera.enable = true;
    }
}
module.exports = Camera;