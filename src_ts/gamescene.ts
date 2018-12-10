import { Container, Point, Sprite } from "pixi.js";
import Hero from "./hero";

import FoodManager from "./foodmanager";
import GameOverOverlay from "./gameoveroverlay";
import GameParams from "./gameparams";
import HealthBar from "./healthbar";
import PointsDisplay from "./pointsdisplay";
import ScreenEffects from "./screeneffect";

export default class GameScene extends Container {
    private lives: number = GameParams.getInstance().lives;
    private points: number = 0;

    private gameEnded: boolean = false;
    private canRestart: boolean = false;

    private background: Sprite;
    private hero: Hero;
    private foodManager: FoodManager;
    private healthBar: HealthBar;
    private pointsDisplay: PointsDisplay;
    private screenEffects: ScreenEffects;
    private gameOverOverlay: GameOverOverlay;

    private restartCallback: (() => void);

    constructor(restartCallback: () => void) {
        super();

        this.restartCallback = restartCallback;

        this.background = new Sprite(PIXI.utils.TextureCache["background_a.png"]);
        this.addChild(this.background);

        this.background.interactive = true;
        this.background.on("pointermove", this.onPointerMove.bind(this));
        this.background.on("pointerdown", this.onPointerDown.bind(this));

        this.hero = new Hero();
        this.addChild(this.hero);

        this.foodManager = new FoodManager();
        this.addChild(this.foodManager);
        this.foodManager.on("food-missed", this.onFoodMissed.bind(this));
        this.foodManager.on("food-sliced", this.onFoodSliced.bind(this));

        this.healthBar = new HealthBar();
        this.addChild(this.healthBar);

        this.healthBar.x = 5;
        this.healthBar.y = 5;

        this.pointsDisplay = new PointsDisplay();
        this.addChild(this.pointsDisplay);

        this.pointsDisplay.x = GameParams.getInstance().width - 5;
        this.pointsDisplay.y = 0;

        this.gameOverOverlay = new GameOverOverlay();
        this.addChild(this.gameOverOverlay);

        this.gameOverOverlay.x = GameParams.getInstance().width / 2;
        this.gameOverOverlay.y = GameParams.getInstance().height / 2 - 100;

        this.screenEffects = new ScreenEffects(this, 320, 480, 0xff0000);
        this.addChild(this.screenEffects);

        this.screenEffects.fadeOut(0x000000);
    }

    public tick(delta: number) {

        this.hero.tick(delta);
        this.foodManager.tick(delta, this.hero);

        if (this.gameEnded) {
            return;
        }

        this.foodManager.checkCollisionsWithHero(this.hero);
    }

    public onFoodMissed(): void {

        if (this.gameEnded) {
            return;
        }
        this.lives -= 1;

        this.healthBar.setHealth(this.lives / GameParams.getInstance().lives * 100);

        this.screenEffects.flush(0xff0000);
        this.screenEffects.shake(5);

        if (this.lives === 0) {
            this.onGameOver();
        }
    }

    public onFoodSliced(): void {
        if (this.gameEnded) {
            return;
        }

        this.points += 10;

        this.pointsDisplay.setPoints(this.points);

        this.screenEffects.shake(3, true);
    }

    public onGameOver(): void {
        this.gameEnded = true;
        this.foodManager.active = false;

        this.gameOverOverlay.show(() => {
            this.canRestart = true;
        });
    }

    public restartGame(): void {
        this.background.off("pointermove", this.onPointerMove.bind(this));
        this.background.off("pointerdown", this.onPointerDown.bind(this));

        this.foodManager.off("food-missed", this.onFoodMissed.bind(this));
        this.foodManager.off("food-sliced", this.onFoodSliced.bind(this));

        this.screenEffects.clear();

        this.screenEffects.fadeIn(0x000000, () => {
            this.restartCallback();
        });
    }

    private onPointerMove(e: PIXI.interaction.InteractionEvent) {

        if (this.gameEnded) {
            return;
        }

        const pos: Point = e.data.getLocalPosition(this.background);

        pos.x = Math.max(Math.min(GameParams.getInstance().width, pos.x), 0);
        pos.y = Math.max(Math.min(GameParams.getInstance().height, pos.y), 0);

        this.hero.updateTargetPosition(pos.x);
    }

    private onPointerDown(e: PIXI.interaction.InteractionEvent) {
        if (this.canRestart) {
            this.restartGame();
            this.canRestart = false;
        }
    }
}
