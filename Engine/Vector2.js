class Vector2 {
    /**
     * Create new Vector2
     * @param {Number} x 
     * @param {Number} y
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * Returns new Vector2(-1, 0)
     */
    static get left() {
        return new Vector2(-1, 0);
    }
    /**
     * returns new Vector2(0, 1)
     */
    static get up() {
        return new Vector2(0, 1);
    }
    /**
     * returns new Vector2(1, 0)
     */
    static get right() {
        return new Vector2(1, 0);
    }
    /**
     * returns new Vector2(0, -1)
     */
    static get down() {
        return new Vector2(0, -1);
    }
    /**
     * returns zero vector (0, 0)
     */
    static get zero() {
        return new Vector2(0, 0);
    }
    /**
     * returns angle in radians betwen two vectors
     * @param {Vector2} from 
     * @param {Vector2} to 
     */
    static angle(from = new Vector2(), to = new Vector2()) {
        let a = from.magnitude;
        let b = to.magnitude
        return Math.acos((Math.pow(to.substract(from).magnitude, 2) - Math.pow(a, 2) - Math.pow(b, 2)) / (-2 * a * b));
    }
    /**
     * returns length of vector
     */
    get magnitude() {
        return Math.sqrt(this.dot(this));
    }
    /**
     * returns normalized vector: Vector / Vector.length
     */
    get normalized() {
        return this.divide(this.magnitude);
    }
    /**
     * returns square root from vector's magnitude
     */
    get sqrMagnitude() {
        return Math.sqrt(this.magnitude);
    }
    /**
     * returns negative vector: new Vector2(-v.x, -v.y)
     */
    get negative() {
        return new Vector2(-this.x, -this.y);
    }
    /**
     * returns copy of vector
     */
    clone() {
        return new Vector2(this.x, this.y);
    }
    /**
     * Applys Math method abs to x and y component and return vector
     */
    abs() {
        return new Vector2(Math.abs(this.x), Math.abs(this.y));
    }
    /**
     * Multiply to given vector: this.x * v.x + this.y * v.y
     * @param {Vector2} v 
     */
    dot(v = new Vector2()) {
        if (v instanceof Vector2) {
            return this.x * v.x + this.y * v.y;
        } else {
            throw new Error("Vector2.dot(Vector2) Invalid argument");
        }
    }
    /**
     * returns sum of vectors
     * @param {Vector2} v 
     */
    add(v = new Vector2()) {
        if (v instanceof Vector2) {
            return new Vector2(this.x + v.x, this.y + v.y);
        } else {
            throw new Error("Vector2.add(Vector2) Invalid argument");
        }
    }
    /**
     * returns subraction of vectors
     * @param {Vector2} v 
     */
    substract(v = new Vector2()) {
        if (v instanceof Vector2) {
            return new Vector2(this.x - v.x, this.y - v.y);
        } else {
            throw new Error("Vector2.substract(Vector2) Invalid argument");
        }
    }
    /**
     * Multiply vector by number
     * @param {Number} v 
     */
    multiply(v = 1) {
        if (typeof v == "number") {
            return new Vector2(this.x * v, this.y * v);
        } else {
            throw new Error("Vector2.multiply(number) Invalid argument");
        }
    }
    /**
     * Divide vector by a number
     * @param {Number} v 
     */
    divide(v = new Vector2()) {
        if (typeof v == "number") {
            return new Vector2(this.x / v, this.y / v);
        } else {
            throw new Error("Vector2.divide(number) Invalid argument");
        }
    }
    /**
     * returns true if vectors are equal and false if don't
     * @param {Vector2} v 
     */
    equals(v = new Vector2()) {
        if (v instanceof Vector2) {
            return this.x == v.x && this.y == v.y;
        } else {
            throw new Error("Vector2.equals(Vector2) Invalid argument");
        }
    }
}
module.exports = Vector2;