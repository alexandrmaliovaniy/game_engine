let Vector2 = require("./Vector2");
let transform = require("./Transform");
let Collider = require("./Collider");
let Scene = require('./Scene');
let Camera = require("./Camera");

class GameObject {
    /**
     * Create empty game object.
     * @param {transform} transform - GameObject's transform
     * @param {Number} layer - id of sorting layer
     */
    constructor(transform = new transform(), layer = 0) {
        this.enable = true;
        this.transform = transform;
        this.collider = null;
        this.material = null;
        this.layer = layer;
        if (Scene.currentScene) {
            Scene.currentScene.gameObjects.push(this);
        }
    }
}

class Line {
    
}

class Rect extends GameObject {
    constructor(transform = new transform(), width = 0, height = 0, layer = 0) {
        super(transform, layer);
        this.width = width;
        this.height = height;
        //this.collider = new Collider.Rect(this.transform, this.width, this.height);
    }
    Draw(Window) {
        Window.context.save();
        Window.context.beginPath();
        Window.context.strokeStyle = "#000";
        Window.context.translate(Window.center.x + this.transform.position.x - Camera.currentCamera.transform.position.x, Window.center.y - (this.transform.position.y - Camera.currentCamera.transform.position.y));
        Window.context.rotate(this.transform.rotation);
        Window.context.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
        Window.context.restore();
    }
}

class Cirlce extends GameObject {
    constructor(transform = new transform(), radius = 0, layer = 0) {
        super(transform, layer);
        this.radius = radius;
        this.collider = new Collider.Cirlce(this.transform, this.radius);
    }
}

class Mesh {

}
module.exports = {
    GameObject: GameObject,
    Rect: Rect,
    Cirlce: Cirlce
}