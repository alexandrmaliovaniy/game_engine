let Collider = require('./Collider');

class Rect extends Collider.Rect {
    /**
     * Set rectangle trigger area
     * @param {Transform} transform 
     * @param {Number} width 
     * @param {Number} height 
     */
    constructor(transform = new Transform(), width = 0, height = 0) {
        super(transform, width, height);
        this.trigger = true;
    }
}
class Circle extends Collider.Circle {
    /**
     * Set circle trigger area
     * @param {Transform} transform 
     * @param {Number} radius 
     */
    constructor(transform = new Transform(), radius = 0) {
        super(transform, radius);
        this.trigger = true;
    }
}
module.exports = {
    Rect: Rect,
    Circle: Circle
}
