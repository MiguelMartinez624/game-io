import { GameObject } from "../core/game_object";
import { Mesh } from "../core/graphics/mesh";
import { Material } from "../core/graphics/material";


export class Player extends GameObject {
    public mesh = new Mesh('box', { x: 1, y: 1, z: 1 },new Material("red"));
}