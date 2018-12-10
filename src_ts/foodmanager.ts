import { Container } from "pixi.js";

import Food from "./food";
import Hero from "./hero";
import SliceParticles from "./sliceparticles";

export default class FoodManager extends Container {
    public active: boolean = true;

    private distBetweenSpawns: number = 20;
    private startingVelVariance: number = 0;

    private gravity: number = 0.02;

    private foods: Food[] = [];
    private foodOnTop: Food;

    private foodsToSlice: Food[] = [];

    constructor() {
        super();

        for (let i = 0; i < 30; i++) {
            const food = new Food();

            food.x = 50 + Math.random() * 220;
            food.y = -50;
            this.foods.push(food);

            this.addChild(food);

            if (i > 0) {
                food.prevFood = this.foods[i - 1];
            }

        }
        this.foodOnTop = this.foods[this.foods.length - 1];

        this.foods[0].falling = true;
        this.foods[0].prevFood = this.foodOnTop;
    }

    public tick(delta: number, hero: Hero): void {
        const rect = hero.getGlobalCollisionRect();

        this.foods.forEach((food) => {
            food.tick(delta, this.gravity);

            // if should spawn in case it is not falling currently
            const enoughDist: boolean = food.prevFood.y - food.y > this.distBetweenSpawns;
            if (this.active && !food.falling && food.prevFood.falling && enoughDist) {
                food.vy =  Math.random() * this.startingVelVariance;
                food.falling = true;
                this.startingVelVariance += 0.01;
                this.distBetweenSpawns -= 0.01;

                this.distBetweenSpawns = Math.max(10, this.distBetweenSpawns);
            }

            // if should be counted as missed
            if (food.y > rect.bottom && !food.markedAsMissed) {
                food.markedAsMissed = true;

                const particles: SliceParticles = new SliceParticles(this, food.x, food.y, 1.5, 0.5, "#ff0000");

                this.placeOnStart(food);
                this.emit("food-missed");
            }

            // if should be actually sliced
            // doesn't happen directly on collision for better visual feeling
            if (food.markedToSlice) {
                // actual slice in the middle of collision box of below
                if (food.y >= (rect.top + rect.bottom) / 2) {
                    const particles: SliceParticles = new SliceParticles(this, food.x, food.y);

                    this.placeOnStart(food);
                    this.emit("food-sliced");
                }
            }
        });
    }

    public checkCollisionsWithHero(hero: Hero): void {

        const rect = hero.getGlobalCollisionRect();

        this.foods.forEach((food) => {
            if (food.x > rect.left && food.x < rect.right && food.y > rect.top && food.y < rect.bottom) {
                hero.slice();
                food.markedToSlice = true;
            }
        });
    }

    public placeOnStart(food: Food): void {
        food.reset();

        food.x = 50 + Math.random() * 220;
        food.y = -50;

        food.prevFood = this.foodOnTop;
        this.foodOnTop = food;
    }
}
