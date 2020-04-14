let Vector2 = require("./Vector2");
let transform = require("./Transform");
let Collider = require("./Collider");
let Scene = require('./Scene');
let Camera = require("./Camera");
let Material = require("./Material");
let Coroutine = require('./Coroutine');

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
    Disable() {
        this.enable = false;
    }
    Enable() {
        this.enable = true;
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
        this.defaultSprite = sprite;
        this.animations = {};
    }
    Draw(Window) {
        Window.context.save();
        Window.context.translate(Window.center.x + this.transform.position.x - Camera.currentCamera.transform.position.x, Window.center.y - (this.transform.position.y - Camera.currentCamera.transform.position.y));
        Window.context.rotate(this.transform.rotation);
        let width = this.sprite.width * this.transform.scale.x;
        let height = this.sprite.height * this.transform.scale.y;
        if (this.sprite instanceof Animation) {
            Window.context.drawImage(this.sprite, this.sprite.offset.x * this.sprite.frameWidth, this.sprite.offset.y * this.sprite.frameHeight, this.sprite.frameWidth, this.sprite.frameHeight, -this.sprite.frameWidth/2,  -this.sprite.frameHeight/2, this.sprite.frameWidth, this.sprite.frameHeight);
        } else {
            Window.context.drawImage(this.sprite, -width/2, -height/2, width, height);
        }
        Window.context.restore();
    }
    addAnimation(anim) {
        if (typeof anim === "string") {

        } else if (anim instanceof Animation) {
            this.animations[anim.name] = anim;
        }
    }
    playAnimation(name = "", speed = 100, loop = false) {        
        this.sprite = this.animations[name];
        let that = this;
        function* anim() {            
            for (let y = 0; y < that.sprite.height / that.sprite.frameHeight; y++) {
                for (let x = 0; x < that.sprite.width / that.sprite.frameWidth; x++) {
                    that.sprite.offset = new Vector2(x, y);                    
                    yield new Coroutine.WaitForSeconds(speed);
                }
            }
            if (loop) {
                Coroutine.StartCoroutine(anim());
            }
        }
        Coroutine.StartCoroutine(anim());
    }
}
class ParticleSystem extends GameObject {
    constructor(transform = new Transform(), config = {}, layer = 0) {
        super(transform, layer);
        this.config = config;
        this.direction = this.GetDirection(this.config.count);
        this.start = performance.now();
    }
    GetVelocity(deltaTime) {
        return (this.config.velocity + deltaTime * this.config.acceleration) * deltaTime;
    }
    GetDirection(objCount) {
        let res = [];
        for (let i = 0; i < objCount; i++) {
            let rand = Math.random();
            res[i] = new Vector2(Math.cos(rand * 2 * Math.PI), Math.sin(rand * 2 * Math.PI));
        }
        return res;
    }
    Draw() {
        Window.context.save();
        Window.context.translate(Window.center.x + this.transform.position.x - Camera.currentCamera.transform.position.x, Window.center.y - (this.transform.position.y - Camera.currentCamera.transform.position.y));
        Window.context.rotate(this.transform.rotation);
        let width = this.config.sprite.width * this.transform.scale.x;
        let height = this.config.sprite.height * this.transform.scale.y;
        let delta = (performance.now() - this.start) / 1000;
        if (delta > this.config.lifeTime) {
            return;
        }
        for(let i = 0; i < this.config.count; i++) {
            let distance = this.direction[i].multiply(this.GetVelocity(delta));
            console.log(distance.x, distance.y);
            
            Window.context.drawImage(this.config.sprite, distance.x, distance.y, this.config.width, this.config.height);
        }
        Window.context.restore();

    }
}
module.exports = {
    GameObject: GameObject,
    Rect: Rect,
    Mesh: Mesh,
    ParticleSystem: ParticleSystem,
    Circle: Circle
}