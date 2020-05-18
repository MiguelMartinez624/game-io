import THREE = require("three");
import { Material } from "./material";

export class Mesh {

    constructor(
        public geometry: string,
        public scale: { x: number, y: number, z: number },
        public material: Material) { }

    public data(): any {
        const { x, y, z } = this.scale;
        switch (this.geometry) {
            case "box":
                return new THREE.Mesh(
                    new THREE.BoxGeometry(x, y, z),
                    new THREE.MeshBasicMaterial({ color: this.material.color }));


            default:
                break;
        }

    }
}