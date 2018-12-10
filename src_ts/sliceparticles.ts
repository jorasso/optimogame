import { Emitter } from 'pixi-particles';

export default class SliceParticles extends Emitter {
    constructor(view: PIXI.Container, x: number, y: number, 
        scaleMultip: number = 1, speedMultip: number = 1, color: string = '#ffffff') {
        let settings: object = {
            alpha: {
                start: 1,
                end: 1
            },
            scale: {
                start: 0.6 * scaleMultip,
                end: 0.01 * scaleMultip,
                minimumScaleMultiplier: 1
            },
            color: {
                start: color,
                end: color
            },
            speed: {
                start: 350 * speedMultip,
                end: 0,
                minimumSpeedMultiplier: 1
            },
            acceleration: {
                x: 0,
                y: 1000
            },
            maxSpeed: 0,
            startRotation: {
                min: 0,
                max: 360
            },
            noRotation: false,
            rotationSpeed: {
                min: 0,
                max: 0
            },
            lifetime: {
                min: 0.3,
                max: 0.4
            },
            blendMode: "normal",
            frequency: 0.001,
            emitterLifetime: 0.01,
            maxParticles: 10,
            pos: {
                x: x,
                y: y
            },
            addAtBack: false,
            spawnType: "point"
        };
        super(view, [PIXI.Texture.WHITE], settings);

        this.autoUpdate = true;
    }
}