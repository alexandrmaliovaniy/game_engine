class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static get left() {
        return new Vector2(-1, 0);
    }
    static get up() {
        return new Vector2(0, 1);
    }
    static get right() {
        return new Vector2(1, 0);
    }
    static get down() {
        return new Vector2(0, -1);
    }
    static get one() {
        return new Vector2(1, 1);
    }
    static get zero() {
        return new Vector2(0, 0);
    }
    static angle(from = new Vector2(), to = new Vector2()) {
        let a = from.magnitude;
        let b = to.magnitude
        return Math.acos((Math.pow(to.substract(from).magnitude, 2) - Math.pow(a, 2) - Math.pow(b, 2)) / (-2 * a * b));
    }
    get magnitude() {
        return Math.sqrt(this.dot(this));
    }
    get normalized() {
        return this.divide(this.magnitude);
    }
    get sqrMagnitude() {
        return Math.sqrt(this.magnitude);
    }
    get negative() {
        return new Vector2(-this.x, -this.y);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    abs() {
        return new Vector2(Math.abs(this.x), Math.abs(this.y));
    }
    dot(v = new Vector2()) {
        if (v instanceof Vector2) {
            return this.x * v.x + this.y * v.y;
        } else {
            throw new Error("Vector2.dot(Vector2) Invalid argument");
        }
    }
    add(v = new Vector2()) {
        if (v instanceof Vector2) {
            return new Vector2(this.x + v.x, this.y + v.y);
        } else {
            throw new Error("Vector2.add(Vector2) Invalid argument");
        }
    }
    substract(v = new Vector2()) {
        if (v instanceof Vector2) {
            return new Vector2(this.x - v.x, this.y - v.y);
        } else {
            throw new Error("Vector2.substract(Vector2) Invalid argument");
        }
    }
    multiply(v = 1) {
        if (typeof v == "number") {
            return new Vector2(this.x * v, this.y * v);
        } else {
            throw new Error("Vector2.multiply(number) Invalid argument");
        }
    }
    divide(v = new Vector2()) {
        if (typeof v == "number") {
            return new Vector2(this.x / v, this.y / v);
        } else {
            throw new Error("Vector2.divide(number) Invalid argument");
        }
    }
    equals(v = new Vector2()) {
        if (v instanceof Vector2) {
            return this.x == v.x && this.y == v.y;
        } else {
            throw new Error("Vector2.equals(Vector2) Invalid argument");
        }
    }
}
module.exports = Vector2;