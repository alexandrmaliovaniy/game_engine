class SpriteLoader {
    static handler = {}
    static Load(cb = function(){}) {
        for (let i in SpriteLoader.handler) {
            console.log(SpriteLoader.handler[i].name, SpriteLoader.handler[i].loaded);
            if (!SpriteLoader.handler[i].loaded) {                
                setTimeout(SpriteLoader.Load, 100, cb);
                return;
            }
        }
        cb();
    }
}
module.exports = SpriteLoader;