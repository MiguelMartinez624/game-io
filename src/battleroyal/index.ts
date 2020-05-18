import { MainScene } from "./main_scene";
import { Engine } from "../core/engine";


export function BattleRoyale() {
    const engine = new Engine();
    engine.register([
        MainScene
    ])
    engine.OnInit();
    engine.start();
    console.log(engine)
}