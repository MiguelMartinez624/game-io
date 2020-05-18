import THREE = require("three");
import { Nodo } from "../common/nodo";


export class Camera extends Nodo {
    private _camera: THREE.Camera
    public readonly type: string = "Camera";

    constructor(public style: string = "perspective") {
        super();
        switch (style) {
            case 'perspective':
                this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                this._camera.position.x = 5;
                this._camera.position.y = 5;
                this._camera.position.z = 5;
                break;
            default:
                throw new Error(`Invalid camera type ${style}`)
                break;
        }
    }

    public lookAt(position: any): void {
        this._camera.lookAt(position)
    }

    public data(): any {
        return this._camera;
    }
}