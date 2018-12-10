import { Sprite, Container } from 'pixi.js';

export default class HealthBar extends Container {
    
    decoration: Sprite;
    bar: Sprite;

    constructor() { 
        super();
        
        this.decoration = new Sprite(PIXI.utils.TextureCache['health_bar_decoration.png']);
        this.addChild(this.decoration);

        this.bar = new Sprite(PIXI.utils.TextureCache['health_bar.png']);
        this.addChild(this.bar);
        this.bar.x = 14;

        this.setHealth(100);
    }

    public setHealth(percent: number): void {
        percent = Math.max(0, Math.min(100, percent));
        this.bar.texture.trim.width = this.bar.texture.orig.width * percent / 100;
        this.bar.texture.update();
        this.bar.texture.requiresUpdate = true;
        this.bar.texture._updateUvs();
    }
}