import { GraphicsSystem } from "./graphics/system";
import { Entity } from "./entity";
import { Nodo } from "./common/nodo";

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
            instance.OnInit();
            this._instances.push(instance);
        });
    }

    public start() {

        this.OnInit();

        requestAnimationFrame(this.tick.bind(this));
    }

    public tick(): void {

    }
}