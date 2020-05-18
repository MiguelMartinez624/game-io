import { Nodo } from "../common/nodo";
import THREE = require("three");


export class Scene extends Nodo {

    private _scene: THREE.Scene = new THREE.Scene();


    public OnInit(): void {
        super.OnInit(); // Call on init on the tree;
    }


}