class Material {
    /**
     * 
     * @param {Number} r - 0 - 255 red channel
     * @param {Number} g - 0 - 255 green channel
     * @param {Number} b - 0 - 255 blue channel
     * @param {Number} a - 0 - 1 alpha channel
     */
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    static Red() {
        return new Material(255, 0, 0, 1);
    }
    static Green() {
        return new Material(0, 255, 0, 1);
    }
    static Blue() {
        return new Material(0, 0, 255, 1);
    }
    static White() {
        return new Material(255, 255, 255, 1);
    }
    static Black() {
        return new Material(0, 0, 0, 1);
    }
    getRGBA() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    getRGB() {
        return `rgb(${this.r}, ${this.g}, ${this.b}, 1)`;
    }
    getHEX() {

    }
}
module.exports = Material;