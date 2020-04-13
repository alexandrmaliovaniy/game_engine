let Vector2 = require("./Vector2");
let SpriteLoader = require("./SpriteLoader");
class Animation extends Image {
    constructor(name = "", src = "", frameWidth = 0, frameHeight = 0) {
        if (!SpriteLoader.handler[name]) {
            super();
            this.loaded = false;
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            this.offset = new Vector2(0, 0);
            this.onload = () => {
                this.loaded = true;
            };
            this.src = src;
            this.name = name;
            SpriteLoader.handler[this.name] = this;
        } else {
            throw new Error("Animation with this name is already exist");
        }
    }
}
module.exports = Animation;