import THREE = require("three");
import { Scene } from "./scene";
import { Camera } from "./camera";

export class Renderer {
    private _renderer: THREE.WebGLRenderer;
    constructor() {
        // THREEjs render standar configuration
        this._renderer = new THREE.WebGLRenderer();
        // set size
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        // add canvas to dom
        document.body.appendChild(this._renderer.domElement);

    }

    public render(scene: Scene): void {
        this._renderer.render(scene.Data(), scene.Camera())
    }
}