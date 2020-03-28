class Scene {
    static currentScene = null;
    constructor() {
        this.enable = false;
        this.gameObjectList = [];
    }
    static Enable(scene) {
        if (Scene.currentScene) {
            Scene.currentScene.enable = false;
        }
        Scene.currentScene = scene;
        Scene.currentScene.enable = true;
        Scene.currentScene.Start();
    }
    Start() {

    }
    Update() {
        
    }
    FixedUpdate() {

    }
    Add(gameObject = new GameObject) {
        this.gameObjectList.push(gameObject);
    }
}
module.exports = Scene;