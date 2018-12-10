import { Sprite, DisplayObject } from 'pixi.js';

import { TimelineLite } from "gsap"

export default class ScreenEffects extends Sprite {
    private shakeTimeline: TimelineLite = new TimelineLite();
    private flushTimeline: TimelineLite = new TimelineLite();

    private shakeView: DisplayObject;

    constructor(shakeView: DisplayObject, width: number, height: number, color: number) { 
        super(PIXI.Texture.WHITE);

        this.scale.set(width/this.texture.width, height/this.texture.height);

        this.tint = color;

        this.alpha = 0;

        this.shakeView = shakeView;
    }

    public flush (color: number): void {
        this.tint = color;

        this.alpha = .5;

        this.flushTimeline.clear();
        this.flushTimeline.to(this, 0.2, {alpha: 0});
    }

    public shake (strength: number, short: boolean = false, angle?: number): void {

        if (angle === undefined){
            angle = Math.random() * Math.PI * 2;
        }

        let ampX: number = Math.cos(angle) * strength;
        let ampY: number = Math.sin(angle) * strength;

        this.shakeTimeline.clear();
        this.shakeTimeline
        .to(this.shakeView, 0.1, {x: ampX, y: ampY})
        .to(this.shakeView, 0.1, {x: -ampX, y: -ampY})

        if(!short)
        {
            this.shakeTimeline
            .to(this.shakeView, 0.1, {x: ampX, y: ampY})
            .to(this.shakeView, 0.1, {x: -ampX, y: -ampY})
        }
        
        this.shakeTimeline
        .to(this.shakeView, 0.1, {x: 0, y: 0});
    }


    public fadeIn (color: number, cb?: (() => void)): void {
        this.tint = color;

        this.flushTimeline.clear();
        this.flushTimeline.to(this, 0.75, {alpha: 1});

        if (cb)
        {
            this.flushTimeline.call(cb);
        }
    }

    public fadeOut (color: number): void {
        this.tint = color;

        this.alpha = 1;

        this.flushTimeline.clear();
        this.flushTimeline.to(this, 0.75, {alpha: 0});
    }

    public clear (): void {
        this.shakeTimeline.clear();
        this.flushTimeline.clear();
    }
}