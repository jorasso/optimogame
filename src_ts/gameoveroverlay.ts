import { Container, Text } from 'pixi.js';

import { TimelineLite, Back, Sine } from "gsap"

export default class GameOverOverlay extends Container {
    gameOverText: Text;
    tapToPlayText: Text;

    constructor() { 
        
        super();
        
        const style = new PIXI.TextStyle({});

        style.fill = 0x000000;
        style.align = 'center';
        style.stroke = 0xffffff;
        style.strokeThickness = 6;
        style.fontSize = 50;
        style.miterLimit = 3;

        this.gameOverText = new Text('GAME OVER', style);
        this.gameOverText.anchor.set(0.5);
        this.addChild(this.gameOverText);

        this.gameOverText.alpha = 0;

        const style2 = new PIXI.TextStyle({});

        style2.fill = 0x000000;
        style2.align = 'center';
        style2.stroke = 0xffffff;
        style2.strokeThickness = 0;
        style2.fontSize = 20;
        style2.miterLimit = 3;

        this.tapToPlayText = new Text('Tap to play again!', style2);
        this.tapToPlayText.anchor.set(0.5);
        this.tapToPlayText.y = 50;
        this.addChild(this.tapToPlayText);

        this.tapToPlayText.alpha = 0;

        
    }

    public show (cb: ()=>void): void {
        this.gameOverText.y -= 200;

        this.gameOverText.scale.set(0.75);

        new TimelineLite()
        .to(this.gameOverText, 0.3, {alpha: 1});

        new TimelineLite()
        .to(this.gameOverText, 1, {y: 0, ease: Back.easeOut});

        new TimelineLite()
        .to(this.gameOverText.scale, 0.5, {x: 1, y:1, ease: Back.easeOut}).delay(0.5);

        this.tapToPlayText.x = 300;

        new TimelineLite()
        .to(this.tapToPlayText, 0.25, {alpha: 1}).delay(1.15)

        new TimelineLite()
        .to(this.tapToPlayText, 0.65, {x: 0, ease: Back.easeOut})
        .call(cb).delay(1)
        
    
    }
}