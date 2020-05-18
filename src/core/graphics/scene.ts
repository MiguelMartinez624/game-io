import { Nodo } from "../common/nodo";
import THREE = require("three");
import { NodoTypes } from "../common/types";
import { GameObject } from "../game_object";
import { Camera } from "./camera";


export class Scene extends Nodo {

    private _scene: THREE.Scene = new THREE.Scene();
    //
    public ItsActive: boolean = false;
    public ItsScene: boolean = true;

    public _camera: Camera;


    public OnInit(): void {
        console.log("initializing scenes")
        for (let i = 0; i < this.childs.length; i++) {
            const element = this.childs[i];

            switch (element.type) {
                case 'GameObject':
                    let go = <GameObject>element

                    this._scene.add(go.mesh.data());
                    break;

                case 'Camera':
                    let cam = <Camera>element
                    this._camera = cam;
                    this._camera.lookAt(this._scene.position);
                    // this._scene.add(go.mesh.data());
                    break;

                default:
                    break;
            }


        }



    }

    //Return the actual scene from three js
    public Data(): any {
        return this._scene
    }

    public Camera(): any {
        return this._camera.data();
    }

}