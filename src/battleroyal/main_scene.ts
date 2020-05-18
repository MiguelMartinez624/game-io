import { Scene } from "../core/graphics/scene";
import { Player } from "./player";
import { Camera } from "../core/graphics/camera";

export class MainScene extends Scene {

    constructor() {
        super();

        super.childs = [
            new Player(),
            new Camera()
        ]

        //Set as default sceneks
        super.ItsActive = true;
    }



}