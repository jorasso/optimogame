import { Emitter } from "pixi-particles";

export default class SliceParticles extends Emitter {
    constructor(view: PIXI.Container, x: number, y: number,
                scaleMultip: number = 1, speedMultip: number = 1,
                color: string = "#ffffff") {
        const settings: object = {
            acceleration: {
                x: 0,
                y: 1000 },
            addAtBack: false,
            alpha: {
                end: 1,
                start: 1 },
            blendMode: "normal",
            color: {
                end: color,
                start: color },
            emitterLifetime: 0.01,
            frequency: 0.001,
            lifetime: {
                max: 0.4,
                min: 0.3 },
            maxParticles: 10,
            maxSpeed: 0,
            noRotation: false,
            pos: {
                x,
                y },
            rotationSpeed: {
                max: 0,
                min: 0 },
            scale: {
                end: 0.01 * scaleMultip,
                minimumScaleMultiplier: 1,
                start: 0.6 * scaleMultip },
            spawnType: "point",
            speed: {
                end: 0,
                minimumSpeedMultiplier: 1,
                start: 350 * speedMultip },
            startRotation: {
                max: 360,
                min: 0 }};

        super(view, [PIXI.Texture.WHITE], settings);

        this.autoUpdate = true;
    }
}
