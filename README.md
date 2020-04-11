# Node js game engine

# Install

## Requirements:
    - Node js

1. Clone on github
2. Open installation folder in console
3. In console: npm install

Now we have to create project folder, you can have it anywhere but i must consist index.js file - main file of our project.

Well, you are ready to start coding.

First of all we need to include engine code. This file is in game engine folder, for easier access to engines file we have special variable "____enginePath" and after it you sould write a name of package "Engine", "Vector2" or anything else which engine folder contains


```javascript
require(__enginePath + "Engine");
```

To have any render result we need Camera and scene with game objects.

```javascript
// Init camera
let mainCam = new Camera();

// Init scene
class Level1 extends Scene {
    static Start() { // This method will be called in the first frame when scene will be shown
        // Lets create a box. Use Constructor Rect(new Transform, width, height)
        this.box = new Rect(new Transform(), 100, 100);
        // Transform is class wich handles position rotation and scale data
    }
    static Update() { // Update calls every frame while this scene is visible
        //We can try to move new object by calling GameObject.transform.Translate(Vector2)
        this.box.transform.Translate(new Vector2(1, 0)); // The box have to move right
    }
}
// Scene can't be applied by default, so you have do i by yourself every time
Scene.Enable(Level1);
```

Now we can start our project.

npm start /path to project folder/

