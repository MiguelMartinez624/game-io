import { Renderer } from "./renderer";
import { Scene } from "./scene";

export class GraphicsSystem {
    constructor(public renderer: Renderer = new Renderer()) { }
    // Scenes
    public scenes: Scene[] = [];
    public currentScene: Scene = null;

    public tick(): void {
        this.renderer.render(this.currentScene)
    }

    public addScene(scene: Scene) {
        this.scenes.push(scene);
        //Set as current the activated scene
        if (scene.ItsActive === true) {
            this.currentScene = scene;
            this.currentScene.OnInit();
        }
    }
}