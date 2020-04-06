// Require components
let Vector2 = require("./Vector2");
let Transform = require('./Transform');
let {GameObject, Rect, Circle} = require("./GameObject");
let Collider = require('./Collider');
let Trigger = require('./Trigger');
let Scene = require("./Scene");
let Camera = require("./Camera");
let Electron = require('electron');
let Renderer = require("./Renderer");
let Math = require("./Math");


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


document.addEventListener("DOMContentLoaded", function() {
    Renderer.Update(Window);
});


global.Vector2 = Vector2;
global.Window = Window;
global.Transform = Transform;
global.GameObject = GameObject;
global.Rect = Rect;
global.Circle = Circle;
global.Scene = Scene;
global.Camera = Camera;
global.Collider = Collider;
global.Trigger = Trigger;
global.Electron = Electron;

// module.exports = {
//     Vector2: Vector2,
//     Window: Window,
//     Transform: Transform,
//     GameObject: GameObject,
//     Rect: Rect,
//     Cirlce: Cirlce,
//     Scene: Scene,
//     Camera: Camera,
//     Electron: Electron,
// }