import { Application, ApplicationOptions } from 'pixi.js';
import GameScene from './gamescene';

new class Main {
    app: Application;

    settings: ApplicationOptions = {
        backgroundColor: 0x000000,
        antialias: false
    };

    gameScene: GameScene;

    constructor() {
        PIXI.loader
            .add('images/atlases.json')
            .load(this.loaded.bind(this));
    }

    loaded(loader:PIXI.loaders.Loader, resources: PIXI.loaders.ResourceDictionary) {

        this.app = new Application(320, 480, this.settings);
        document.body.appendChild(this.app.view);

        this.gameScene = new GameScene(this.restart.bind(this));
        this.app.stage.addChild(this.gameScene);

        this.app.ticker.add((delta: number)=>{
            this.gameScene.tick(delta);
        });
    }

    public restart(): void {
        this.app.stage.removeChildren();

        this.gameScene = new GameScene(this.restart.bind(this));
        this.app.stage.addChild(this.gameScene);
    }
}