let SpriteLoader = require("./SpriteLoader");
class Sprite extends Image {
    constructor(name = "", src = "") {
        if (!SpriteLoader.handler[name]) {
            super();
            this.offset = new Vector2(0, 0);
            this.loaded = false;
            this.onload = () => {
                this.frameWidth = this.width;
                this.frameHeight = this.height;
                this.loaded = true;
            };
            this.src = src;
            this.name = name;
            SpriteLoader.handler[this.name] = this;
        } else {
            throw new Error("Sprite with this name is already exist");
        }
    }
}
module.exports = Sprite;