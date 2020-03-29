let Vector2 = require("./Vector2");
class Transform {
    /**
     * Create Transform component to manipulate object's position, rotation and scale
     * @param {Vector2} position - position of the object from coords center
     * @param {Number} rotation - angle in radians. If you work in degrees use Math.RadToDegree(rad)
     * @param {Vector2} scale - x and y scale multiply
     */
    constructor(position = new Vector2(0, 0), rotation = 0, scale = new Vector2(1, 1)) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
    /**
     * Push it's position by vector
     * @param {Vector2} v - local distance
     */
    Translate(v = new Vector2()) {
        if (v instanceof Vector2) {
            this.position = this.position.add(v);
        } else {
            throw new Error("Unexpected argument");
        }
    }
    /**
     * Set global position
     * @param {Vector2} v - global coords
     */
    SetPosition(v = new Vector2()) {
        if (v instanceof Vector2) {
            this.position = v.clone();
        } else {
            throw new Error("Unexpected argument");
        }
    }
    /**
     * Rotate by angle in Radians
     * @param {Number} angle - angle in radians. If you use degree use Math.RadToDegree(rad)
     */
    Rotate(angle = 0) {
        if (typeof angle == "number") {
            this.rotation += angle;
        } else {
            throw new Error("Unexpected argument");
        }
    }
    /**
     * Set rotation to angle in Radians
     * @param {Number} angle - angle in radians. If you use degree use Math.RadToDegree(rad)
     */
    SetRotation(angle = 0) {
        if (typeof angle == "number") {
            this.rotation = angle;
        } else {
            throw new Error("Unexpected argument");
        }
    }
}
module.exports = Transform;