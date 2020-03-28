const {app, BrowserWindow} = require('electron');
const fs = require('fs');
const path = require('path');
const projectPath = "C:/Users/Alexandr/Desktop/PROJECTS/READY/testGame";

function CreateWindow() {
    const mainWindow = new BrowserWindow({
        fullscreen: true,
        frame: false,
        show: false,
        webPreferences: {
			nodeIntegration: true
        }
    });
    let htmlRenderer = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <canvas id="window"></canvas>
        <script>
        let __enginePath = "${__dirname.split("\\").join("/")}/Engine/";
        let __projectPath = "${projectPath}/";
        </script>
            <script src="${projectPath + "/index.js"}"></script>
        </body>
    </html>
    `;
    fs.writeFileSync(__dirname + "/Renderer.html", htmlRenderer, 'utf8');
    mainWindow.loadFile("Renderer.html");
    mainWindow.once("ready-to-show", function() {
        mainWindow.show();
    });
}
app.whenReady().then(CreateWindow);