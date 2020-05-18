import { Renderer } from "./renderer";

export class GraphicsSystem {
    constructor(public renderer: Renderer = new Renderer()) { }
}