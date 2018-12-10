import { Sprite, Container } from 'pixi.js';

export default class Food extends Container {
    public vy: number = 0;
    public falling: boolean = false;

    public markedToSlice: boolean = false;

    public markedAsMissed: boolean = false;

    public prevFood: Food;

    cumulTime: number = Math.random() * 100;
    rotationSpeed: number = Math.random() * 0.1 + 0.1;
    rotationDirection: number = Math.random() > 0.5 ? -1 : 1;

    sprite: Sprite = new Sprite(PIXI.Texture.EMPTY);

    constructor() { 
        super();
        this.addChild(this.sprite);
        this.chooseRandomTexture();
    }

    public tick (delta: number, gravity: number): void {
        if (!this.falling) {
            return;
        }
        this.vy += gravity * delta;
        this.y += this.vy * delta;

        this.rotation += this.rotationSpeed * this.rotationDirection;
        this.sprite.rotation -= (this.rotationSpeed * this.rotationDirection) / 2;

        this.cumulTime += 1;
        this.scale.x = Math.sin(this.cumulTime/10) * 0.3 + 1.3;
        this.scale.y = Math.cos(this.cumulTime/15) * 0.15 + 1.15;
    }

    public reset (): void {
       
        this.vy = 0;
        this.falling = false;
        this.markedToSlice = false;
        this.markedAsMissed = false;

        this.chooseRandomTexture();
    }

    public chooseRandomTexture (): void {
        let frameIndex: number = Math.floor(Math.random() * 64);
        let frameName: string = 'food_' + frameIndex + '.png';

        this.sprite.texture = PIXI.utils.TextureCache[frameName];
        this.sprite.anchor.set(0.5);
    }
}