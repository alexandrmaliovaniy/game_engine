class Scene {
    static currentScene = null;
    static gameObjects = [];
    static Enable(scene) {
        console.log(scene);
        
        if (Scene.currentScene) {
            Scene.currentScene.enable = false;
        }
        Scene.currentScene = scene;
        Scene.currentScene.enable = true;
        Scene.currentScene.Start();
    }
}
module.exports = Scene;