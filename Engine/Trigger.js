let Collider = require('./Collider');

class Rect extends Collider.Rect {
    constructor(transform = new Transform(), width = 0, height = 0) {
        super(transform, width, height);
        this.trigger = true;
    }
}
class Circle extends Collider.Circle {
    constructor(transform = new Transform(), radius = 0) {
        super(transform, radius);
        this.trigger = true;
    }
}
module.exports = {
    Rect: Rect,
    Circle: Circle
}
