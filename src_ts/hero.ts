import { Container, Texture } from 'pixi.js';

enum State {
    Idle,
    Walk,
    Slice
};

export default class Hero extends Container {
    currentState: State = State.Idle;

    idleAnim: PIXI.extras.AnimatedSprite;
    walkAnim: PIXI.extras.AnimatedSprite;
    sliceAnim: PIXI.extras.AnimatedSprite;

    anims: PIXI.extras.AnimatedSprite[] = [];

    targetX: number = 160;

    isSlicing: boolean = false;

    lastTargetUpdate: number = 0;

    collisionRect: PIXI.Rectangle = new PIXI.Rectangle(-30, -10, 60, 40);
    debugCollisionGraphics: PIXI.Graphics = new PIXI.Graphics();

    constructor() { 
        super();

        this.idleAnim = this.createAnimatedSprite('idle', [0, 1, 2, 3]);
        this.walkAnim = this.createAnimatedSprite('walk', [0, 1, 2, 3, 4]);
        this.sliceAnim = this.createAnimatedSprite('slice', [0, 1, 2, 2, 2, 2, 2]);

        this.walkAnim.animationSpeed = 0.6;

        this.sliceAnim.loop = false;
        this.sliceAnim.animationSpeed = 0.4;

        this.sliceAnim.onComplete = () => {
            //console.log("Zakończona!");
            this.isSlicing = false;
            this.setState(State.Idle);
        }

        this.setState(State.Idle);

        this.x = 160;
        this.y = 350;

        this.debugCollisionGraphics.beginFill(0xff0000, 0.4);
        this.debugCollisionGraphics.drawRect(this.collisionRect.x, 
            this.collisionRect.y, this.collisionRect.width, this.collisionRect.height);
        
        //this.addChild(this.debugCollisionGraphics);

    }

    public tick(delta:number) {
        this.x += (this.targetX - this.x)/3;
        
        if (this.shouldChangeToIdleWhileWalk()){
            this.setState(State.Idle);
        }

        if (this.shouldChangeToWalkWhileIdle()){
            this.setState(State.Walk);
        }
        
    }

    private shouldChangeToIdleWhileWalk() {
        let notSlicing = !this.isSlicing;
        let state = this.currentState === State.Walk;
        let position = this.isOnTargetPosition();
        let time = this.lastTargetUpdate + 250 < Date.now();

        return notSlicing && state && position && time;
    }

    private shouldChangeToWalkWhileIdle() {
        let notSlicing = !this.isSlicing;
        let state = this.currentState === State.Idle;
        let position = !this.isOnTargetPosition();
        //let time = this.lastTargetUpdate + 100 < Date.now();

        return notSlicing && state && position;
    }

    public updateTargetPosition (x: number): void {
        this.targetX = x;
        this.lastTargetUpdate = Date.now();
    }

    public slice(): void {
        this.setState(State.Slice);
        this.isSlicing = true;
    }

    private isOnTargetPosition (): boolean {
        return Math.abs(this.x - this.targetX) < 1;
    }

    private createAnimatedSprite(name:string, frameIndexes: number[]): PIXI.extras.AnimatedSprite {
        let frames:Texture[] = [];

        frameIndexes.forEach(val => {
            let frameName = 'hero_' + name + '_' + val + '.png';
            frames.push(PIXI.utils.TextureCache[frameName]);
        });

        let animatedSprite: PIXI.extras.AnimatedSprite = new PIXI.extras.AnimatedSprite(frames);

        this.addChild(animatedSprite);
        animatedSprite.play();
        animatedSprite.animationSpeed = 0.2;
        animatedSprite.anchor.set(0.5);

        this.anims.push(animatedSprite);

        return animatedSprite;
    }

    private setState(state: State): void {
        if (state === State.Idle)
        {
            this.playAnimation(this.idleAnim);
        }
        else if (state === State.Slice)
        {
            this.playAnimation(this.sliceAnim);
        }
        else if (state === State.Walk)
        {
            this.playAnimation(this.walkAnim);
        }
        this.currentState = state;
    }

    private playAnimation (animation: PIXI.extras.AnimatedSprite): void {
        this.anims.forEach(anim => {
            if(anim === animation) {
                anim.gotoAndPlay(0);
                anim.visible = true;
            }
            else {
                anim.stop();
                anim.visible = false;
            }
        });
    }
}