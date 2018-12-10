import { Sprite, Graphics, Container, Point } from 'pixi.js';
import {TexturesCache} from './types';
import Hero from './hero';
import FoodManager from './foodmanager';

export default class GameScene extends Container {
    background: Sprite;
    hero: Hero;
    foodManager: FoodManager;

    constructor(texturesCache: TexturesCache) { 
        super();
        this.background = new Sprite(texturesCache['background_a.png']);
        this.addChild(this.background);
        
        this.background.interactive = true;
        this.background.on('pointermove', this.onPointerMove.bind(this));
        this.background.on('pointerdown', this.onPointerDown.bind(this));

        this.hero = new Hero(texturesCache);
        this.addChild(this.hero);

        this.foodManager = new FoodManager(texturesCache);
        this.addChild(this.foodManager);
    }

    private onPointerMove (e: PIXI.interaction.InteractionEvent) {
        let pos: Point = e.data.getLocalPosition(this.background);
        

        pos.x = Math.max(Math.min(320, pos.x), 0);
        pos.y = Math.max(Math.min(480, pos.y), 0);

        this.hero.updateTargetPosition(pos.x);
    }

    private onPointerDown (e: PIXI.interaction.InteractionEvent)
    {
        this.hero.slice();
    }

    public tick(delta: number) 
    {
        //console.log(delta);
        this.hero.tick(delta);
        this.foodManager.tick(delta, this.hero);
    }
}