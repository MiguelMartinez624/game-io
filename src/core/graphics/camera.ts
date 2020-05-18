import THREE = require("three");


export class Camera {
    private _camera: any
    constructor(public type: string = "perspective") {
        switch (type) {
            case 'perspective':
                this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                break;
            default:
                throw new Error(`Invalid camera type ${type}`)
                break;
        }
    }
}