import {Graphics, Application, ApplicationOptions, SHAPES } from 'pixi.js';
import Circle from './shape';

new class Main {
    app: Application;

    settings: ApplicationOptions = {
        backgroundColor: 0xFFFFFF,
        antialias: true
    };

    constructor() {
        this.app = new Application(window.innerWidth, window.innerHeight, this.settings);
        document.body.appendChild(this.app.view);

        let circle: Graphics= new Graphics();
        circle.beginFill(0x0000ff, 0.7);
        circle.drawCircle(100, 100, 20);

        let circle2 : Circle = new Circle();
        this.app.stage.addChild(circle2);


        this.app.stage.addChild(circle);

        // Animation loop
        this.app.ticker.add((delta) => {
            circle.position.x += delta * 0.3;
            circle.position.y += delta * 0.3; 
        });
    }
}