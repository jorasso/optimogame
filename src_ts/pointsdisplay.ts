import { Text } from "pixi.js";

export default class PointsDisplay extends Text {
    constructor() {

        super();

        this.style = new PIXI.TextStyle({});

        this.style.fill = 0xffffff;
        this.style.align = "right";
        this.style.stroke = 0x000000;
        this.style.strokeThickness = 5;
        this.style.fontSize = 20;

        this.anchor.set(1, 0);

        this.text = "0000";
    }

    public setPoints(points: number): void {
        this.text = points + "";

        if (points < 10) {
            this.text = "000" + points;
        } else if (points < 100) {
            this.text = "00" + points;
        } else if (points < 1000) {
            this.text = "0" + points;
        }
    }
}
