let Scene = require('./Scene');
let Camera = require("./Camera");
/**
 * Clear scene view and execute Draw method in each GameObject in current scene
 * @param {Object} Window - Game window link 
 */
function DrawCall(Window) {
    ClearScene(Window);
    let objs = Scene.currentScene.gameObjects;
    for (let i = 0; i < objs.length; i++) {
        if (objs[i].enable) {
            objs[i].Draw(Window);
        }
    }
}
/**
 * Clear screen
 * @param {Object} Window - Game window target 
 */
function ClearScene(Window) {
    Window.context.clearRect(0, 0, Window.width, Window.height);
}
/**
 * Apply rendering logic for each frame
 * @param {Object} Window - Game window
 */
function Update(Window) {
    let start = performance.now();
    requestAnimationFrame(function frame(time) {
        let deltaTime = time - start;
        start = time;
        if (Scene.currentScene) {
            Scene.currentScene.Update(deltaTime);
            if (Camera.currentCamera) {
                DrawCall(Window);
            }
        }
        requestAnimationFrame(frame);
    });
}

function FixedUpdate(Window) {

}

module.exports = {
    Update: Update,
    FixedUpdate: FixedUpdate,
    ClearScene: ClearScene,
    DrawCall: DrawCall
}