import { GraphicsSystem } from "./graphics/system";
import { Nodo } from "./common/nodo";
import { Scene } from "./graphics/scene";

type Constructor<Nodo> = new (...args: any[]) => Nodo;
export class Engine {
    private _graphicSystem: GraphicsSystem;
    private _nodos: Constructor<Nodo>[];
    private _instances: Nodo[] = [];


    constructor() {
        this._graphicSystem = new GraphicsSystem()
    }

    public register(nodos: Constructor<Nodo>[]) {
        this._nodos = nodos;
    }



    public OnInit(): void {
        this._nodos.forEach(c => {

            let instance = new c();

            if (instance['ItsScene'] !== undefined) {
                this._graphicSystem.addScene(<Scene>instance);

            }

            // Anything that its not a scene like controllers or managers
            else {

                this._instances.push(instance);
            }

        });
    }

    public start() {

        this.OnInit();

        requestAnimationFrame(this.tick.bind(this));
    }

    public tick(): void {
        requestAnimationFrame(this.tick.bind(this));
        this._graphicSystem.tick();
    }
}