import { Sprite, Graphics, Container, Point } from 'pixi.js';
import {TexturesCache} from './types';

export default class Food extends Container {
    public vy: number = 0;
    public falling: boolean = false;

    public markedToSlice: boolean = false;

    public prevFood: Food;

    sprite: Sprite;
    constructor(texturesCache: TexturesCache) { 
        super();
        let frameIndex: number = Math.floor(Math.random() * 64);
        let frameName: string = 'food_' + frameIndex + '.png';

        this.sprite = new Sprite(texturesCache[frameName]);
        this.sprite.anchor.set(0.5);

        this.addChild(this.sprite);
    }

    public tick (delta: number, gravity: number): void {
        if (!this.falling) {
            return;
        }
        this.vy += gravity * delta;
        this.y += this.vy * delta;
    }
}