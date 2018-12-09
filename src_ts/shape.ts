import { Sprite, Graphics } from 'pixi.js';

export default class Circle extends Sprite {

    graphics: Graphics;

    constructor() { 
        super();

        this.graphics = new Graphics();
        this.graphics.beginFill(0xffafaf, 0.7);
        this.graphics.drawCircle(100, 100, 20);

        this.addChild(this.graphics);
    }
}