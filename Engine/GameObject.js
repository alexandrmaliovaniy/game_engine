let Vector2 = require("./Vector2");
let transform = require("./Transform");
let Collider = require("./Collider");
let Scene = require('./Scene');
let Camera = require("./Camera");
let Material = require("./Material")

class GameObject {
    /**
     * Create empty game object.
     * @param {Transform} transform - GameObject's transform
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
        this.material = new Material();
        this.collider = new Collider.Rect(new Transform(), this.width / 2, this.height / 2);
    }
    Draw(Window) {
        Window.context.save();
        Window.context.beginPath();
        Window.context.strokeStyle = this.material.getRGBA();
        Window.context.translate(Window.center.x + this.transform.position.x - Camera.currentCamera.transform.position.x, Window.center.y - (this.transform.position.y - Camera.currentCamera.transform.position.y));
        Window.context.rotate(this.transform.rotation);
        Window.context.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
        Window.context.restore();
    }
}

class Circle extends GameObject {
    constructor(transform = new Transform(), radius = 0, layer = 0) {
        super(transform, layer);
        this.radius = radius;
        this.collider = new Collider.Circle(this.transform, this.radius);
        this.material = new Material();
        this.renderProps = {
            startAngle: 0,
            sector: Math.PI * 2,
            anticlockwise: false
        }
    }
    Draw(Window) {
        Window.context.save();
        Window.context.translate(Window.center.x + this.transform.position.x - Camera.currentCamera.transform.position.x, Window.center.y - (this.transform.position.y - Camera.currentCamera.transform.position.y));
        Window.context.rotate(this.transform.rotation);
        Window.context.strokeStyle = this.material.getRGBA();
        Window.context.beginPath();
        Window.context.arc(0, 0, this.radius, this.renderProps.startAngle, this.renderProps.sector, this.renderProps.anticlockwise);
        Window.context.stroke();
        Window.context.restore();
    }
}

class Mesh extends GameObject {
    constructor(transform = new Transform(), sprite, layer) {
        super(transform, layer);
        this.sprite = sprite;
    }
    Draw(Window) {
        Window.context.save();
        Window.context.translate(Window.center.x + this.transform.position.x - Camera.currentCamera.transform.position.x, Window.center.y - (this.transform.position.y - Camera.currentCamera.transform.position.y));
        Window.context.rotate(this.transform.rotation);
        let width = this.sprite.width * this.transform.scale.x;
        let height = this.sprite.height * this.transform.scale.y;
        Window.context.drawImage(this.sprite, -width/2, -height/2, width, height);
        Window.context.restore();
    }
}
module.exports = {
    GameObject: GameObject,
    Rect: Rect,
    Mesh: Mesh,
    Circle: Circle
}