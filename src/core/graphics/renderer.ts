import THREE = require("three");

export class Renderer {
    _renderer: any;
    constructor() {
        this._renderer = new THREE.WebGLRenderer();

        // set size
        this._renderer.setSize(window.innerWidth, window.innerHeight);

        // add canvas to dom
        document.body.appendChild(this._renderer.domElement);
    }

    public render(scene, cam): void { }
}