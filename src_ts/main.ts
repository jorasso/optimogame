import {Graphics, Application, ApplicationOptions, SHAPES } from 'pixi.js';
import GameScene from './gamescene';
import {TexturesCache} from './types';

new class Main {
    app: Application;

    settings: ApplicationOptions = {
        backgroundColor: 0xffff00,
        antialias: true
    };

    textures: TexturesCache;

    gameScene: GameScene;

    constructor() {
        PIXI.loader
            .add('images/atlases.json')
            .load(this.loaded.bind(this));
    }

    loaded(loader:PIXI.loaders.Loader, resources: PIXI.loaders.ResourceDictionary) {
        this.textures = resources['images/atlases.json'].textures

        this.app = new Application(320, 480, this.settings);
        document.body.appendChild(this.app.view);

        this.gameScene = new GameScene(this.textures);
        this.app.stage.addChild(this.gameScene);

        this.app.ticker.add(this.gameScene.tick.bind(this.gameScene));
    }
}