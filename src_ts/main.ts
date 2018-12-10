import { Application, ApplicationOptions, MaskManager } from "pixi.js";
import GameScene from "./gamescene";

class Main {
    private app: Application;

    private settings: ApplicationOptions = {
        antialias: false,
        backgroundColor: 0x000000 };

    private gameScene: GameScene;

    constructor() {
        PIXI.loader
            .add("images/atlases.json")
            .load(this.loaded.bind(this));
    }

    public loaded(loader: PIXI.loaders.Loader, resources: PIXI.loaders.ResourceDictionary) {

        this.app = new Application(320, 480, this.settings);
        document.body.appendChild(this.app.view);

        this.gameScene = new GameScene(this.restart.bind(this));
        this.app.stage.addChild(this.gameScene);

        this.app.ticker.add((delta: number) => {
            this.gameScene.tick(delta);
        });
    }

    public restart(): void {
        this.app.stage.removeChildren();

        this.gameScene = new GameScene(this.restart.bind(this));
        this.app.stage.addChild(this.gameScene);
    }
}

const main = new Main();
