import { Nodo } from "./common/nodo";
import { Mesh } from "./graphics/mesh";


export class GameObject extends Nodo {
    public mesh: Mesh;
    public type: string = 'GameObject'



}