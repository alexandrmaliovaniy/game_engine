let Vector2 = require("./Vector2");
let Transfrom = require("./Transfrom");
let Collider = require("./Collider");
let Scene = require('./Scene');

class GameObject {
    /**
     * Create empty game object.
     * @param {Transfrom} transfrom - GameObject's transfrom
     * @param {Number} layer - id of sorting layer
     */
    constructor(transfrom = new Transfrom(), layer = 0) {
        this.enable = true;
        this.transfrom = transfrom;
        this.collider = null;
        this.material = null;
        this.layer = layer;
        if (Scene.currentScene) {
            Scene.currentScene.Add(this);
        }
    }
}

class Line {
    
}

class Rect extends GameObject {
    constructor(transfrom = new Transfrom(), width = 0, height = 0, layer = 0) {
        super(transfrom, layer);
        this.width = width;
        this.height = height;
        this.collider = new Collider.Rect(this.transfrom, this.width, this.height);
    }
}

class Cirlce extends GameObject {
    constructor(transfrom = new Transfrom(), radius = 0, layer = 0) {
        super(transfrom, layer);
        this.radius = radius;
        this.collider = new Collider.Cirlce(this.transfrom, this.radius);
    }
}

class Mesh {

}
module.exports = {
    GameObject: GameObject,
    Rect: Rect,
    Cirlce: Cirlce
}