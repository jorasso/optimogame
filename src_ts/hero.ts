import { Container, Texture } from "pixi.js";

enum State {
    Idle,
    Walk,
    Slice }

export default class Hero extends Container {

    public isSlicing: boolean = false;

    private currentState: State = State.Idle;

    private idleAnim: PIXI.extras.AnimatedSprite;
    private walkAnim: PIXI.extras.AnimatedSprite;
    private sliceAnim: PIXI.extras.AnimatedSprite;

    private anims: PIXI.extras.AnimatedSprite[] = [];

    private targetX: number = 160;

    private lastTargetUpdate: number = 0;

    private localCollisionRect: PIXI.Rectangle = new PIXI.Rectangle(-30, -10, 60, 40);
    private debugCollisionGraphics: PIXI.Graphics = new PIXI.Graphics();

    constructor() {
        super();

        this.idleAnim = this.createAnimatedSprite("idle", [0, 1, 2, 3]);
        this.walkAnim = this.createAnimatedSprite("walk", [0, 1, 2, 3, 4]);
        this.sliceAnim = this.createAnimatedSprite("slice", [0, 1, 2, 2, 2, 2, 2]);

        this.walkAnim.animationSpeed = 0.6;

        this.sliceAnim.loop = false;
        this.sliceAnim.animationSpeed = 0.4;

        this.sliceAnim.onComplete = () => {
            this.isSlicing = false;
            this.setState(State.Idle);
        };

        this.setState(State.Idle);

        this.x = 160;
        this.y = 350;

        this.debugCollisionGraphics.beginFill(0xff0000, 0.4);
        this.debugCollisionGraphics.drawRect(this.localCollisionRect.x,
            this.localCollisionRect.y, this.localCollisionRect.width, this.localCollisionRect.height);
    }

    public tick(delta: number) {
        this.x += (this.targetX - this.x) / 3;

        if (this.shouldChangeToIdleWhileWalk()) {
            this.setState(State.Idle);
        }

        if (this.shouldChangeToWalkWhileIdle()) {
            this.setState(State.Walk);
        }

    }

    public updateTargetPosition(x: number): void {
        this.targetX = x;
        this.lastTargetUpdate = Date.now();
    }

    public slice(): void {
        this.setState(State.Slice);
        this.isSlicing = true;
    }

    public getGlobalCollisionRect(): PIXI.Rectangle {
        return new PIXI.Rectangle (
            this.x + this.localCollisionRect.x,
            this.y + this.localCollisionRect.y,
            this.localCollisionRect.width,
            this.localCollisionRect.height);
    }

    private shouldChangeToIdleWhileWalk() {
        const notSlicing = !this.isSlicing;
        const state = this.currentState === State.Walk;
        const position = this.isOnTargetPosition();
        const time = this.lastTargetUpdate + 250 < Date.now();

        return notSlicing && state && position && time;
    }

    private shouldChangeToWalkWhileIdle() {
        const notSlicing = !this.isSlicing;
        const state = this.currentState === State.Idle;
        const position = !this.isOnTargetPosition();

        return notSlicing && state && position;
    }

    private isOnTargetPosition(): boolean {
        return Math.abs(this.x - this.targetX) < 1;
    }

    private createAnimatedSprite(name: string, frameIndexes: number[]): PIXI.extras.AnimatedSprite {
        const frames: Texture[] = [];

        frameIndexes.forEach((val) => {
            const frameName = "hero_" + name + "_" + val + ".png";
            frames.push(PIXI.utils.TextureCache[frameName]);
        });

        const animatedSprite: PIXI.extras.AnimatedSprite = new PIXI.extras.AnimatedSprite(frames);

        this.addChild(animatedSprite);
        animatedSprite.play();
        animatedSprite.animationSpeed = 0.2;
        animatedSprite.anchor.set(0.5);

        this.anims.push(animatedSprite);

        return animatedSprite;
    }

    private setState(state: State): void {

        if (state === State.Idle) {
            this.playAnimation(this.idleAnim);
        } else if (state === State.Slice) {
            this.playAnimation(this.sliceAnim);
        } else if (state === State.Walk) {
            this.playAnimation(this.walkAnim);
        }

        this.currentState = state;
    }

    private playAnimation(animation: PIXI.extras.AnimatedSprite): void {
        this.anims.forEach((anim) => {
            if (anim === animation) {
                anim.gotoAndPlay(0);
                anim.visible = true;
            } else {
                anim.stop();
                anim.visible = false;
            }
        });
    }
}
