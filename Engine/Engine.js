// Require components
const {Vector2, LinkedList} = require("./Generics");
const Transform = require('./Transform');
const SpriteLoader = require("./SpriteLoader");
const Sprite = require("./Sprite");
const {GameObject, Rect, Circle, Mesh, ParticleSystem} = require("./GameObject");
const Collider = require('./Collider');
const Trigger = require('./Trigger');
const Scene = require("./Scene");
const Camera = require("./Camera");
const Electron = require('electron');
const Renderer = require("./Renderer");
const Math = require("./Math");
const Animation = require('./Animation');
const Input = require("./Input");

// Init Game Window
let Window = document.getElementById("window");
Window.style = "display:block;";
document.body.style = "overflow:hidden;padding:0;margin:0;";
let windowSize = Electron.remote.getCurrentWindow().getSize();
Window.width = windowSize[0];
Window.height = windowSize[1];
Window.center = new Vector2(Window.width / 2, Window.height / 2);
Window.fov = (Window.width * Window.width + Window.height * Window.height) / 2;
Window.context = Window.getContext("2d");
Window.context.imageSmoothingEnabled = false;


document.addEventListener("DOMContentLoaded", function() {
    SpriteLoader.Load(function() {
        Renderer.Update(Window);
    });
});

global.Vector2 = Vector2;
global.Input = Input;
global.Window = Window;
global.Animation = Animation;
global.Transform = Transform;
global.GameObject = GameObject;
global.Rect = Rect;
global.Circle = Circle;
global.Scene = Scene;
global.Camera = Camera;
global.Mesh = Mesh;
global.ParticleSystem = ParticleSystem;
global.Collider = Collider;
global.Trigger = Trigger;
global.Sprite = Sprite;
global.Electron = Electron;

// module.exports = {
//     Vector2: Vector2,
//     Window: Window,
//     Transform: Transform,
//     GameObject: GameObject,
//     Rect: Rect,
//     Cirlce: Cirlce,
//     Scene: Scene,
//     Trigger: Trigger,
//     Collider: Collider,
//     Camera: Camera,
//     Electron: Electron,
// }