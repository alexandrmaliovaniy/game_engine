let Transform = require("./Transform");
class Rect {
    constructor(transform = new Transform(), width = 0, height = 0) {
        this.enable = true;
        this.trigger = false;
        this.transform = transform;
        this.width = width;
        this.height = height;
    }
}
class Circle {
    constructor(transform = new Transform(), radius = 0) {
        this.enable = true;
        this.trigger = false;
        this.transform = transform;
        this.radius = radius;
    }
}
module.exports = {
    Rect: Rect,
    Circle: Circle,
}