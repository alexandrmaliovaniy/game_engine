class Scene {
    static currentScene = null;
    /**
     * Set given scene to current
     * @param {Scene} scene - link on the class extended of Scene
     */
    static Enable(scene) {
        if (Scene.currentScene) {
            Scene.currentScene.enable = false;
        }
        scene.gameObjects = scene.gameObjects || [];
        Scene.currentScene = scene;
        Scene.currentScene.enable = true;
        Scene.currentScene.Start();
    }
}
module.exports = Scene;