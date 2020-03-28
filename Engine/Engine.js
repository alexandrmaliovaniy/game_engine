// Require components
let Vector2 = require("./Vector2");
let Transfrom = require('./Transfrom');
let {GameObject, Rect, Cirlce} = require("./GameObject");
let Scene = require("./Scene");
let Camera = require("./Camera");
let Electron = require('electron');


// Init Game Window
let Window = document.getElementById("window");
document.body.style.overflow = "hidden";
let windowSize = Electron.remote.getCurrentWindow().getSize();
Window.width = windowSize[0];
Window.height = windowSize[1];
Window.context = Window.getContext("2d");

document.addEventListener("DOMContentLoaded", function() {
    
});


module.exports = {
    Vector2: Vector2,
    Window: Window,
    Transfrom: Transfrom,
    GameObject: GameObject,
    Rect: Rect,
    Cirlce: Cirlce,
    Scene: Scene,
    Electron: Electron,
}