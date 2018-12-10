import { Container } from 'pixi.js';
import 'pixi-particles';

import {TexturesCache} from './types';
import Food from './food';
import Hero from './hero';
import SliceParticles from './sliceparticles';

export default class FoodManager extends Container {

    foods: Food[] = [];
    foodOnTop: Food;

    foodsToSlice: Food[] = [];

    constructor(texturesCache: TexturesCache) { 
        super();

        for (let i = 0; i < 10; i++)
        {
            let food = new Food(texturesCache);

            food.x = 50 + Math.random() * 220;
            food.y = -50;
            this.foods.push(food);

            this.addChild(food);

            if (i > 0)
            {
                food.prevFood = this.foods[i - 1];
            }

        }
        this.foodOnTop = this.foods[this.foods.length - 1];

        this.foods[0].falling = true;
        this.foods[0].prevFood = this.foodOnTop;
    }

    public tick (delta: number, hero: Hero): void {

        this.foods.forEach(food => {
            food.tick(delta, 0.02);

            if(food.y > 500){
                this.placeOnStart(food);
            }

            if (!food.falling && food.prevFood.falling && food.prevFood.y - food.y > 10){
                food.vy = 0;
                food.falling = true;
            }

            if (food.markedToSlice)
            {
                let y0: number = hero.y + hero.collisionRect.y;
                let y1: number = hero.y + hero.collisionRect.y + hero.collisionRect.height;
                if(food.y >= (y0 + y1)/2) {
                    new SliceParticles(this, food.x, food.y);

                    this.placeOnStart(food);
                }
            }
        });

        this.checkCollisionsWithHero(hero);
    }

    public checkCollisionsWithHero (hero: Hero): void {
        let x0: number = hero.x + hero.collisionRect.x;
        let y0: number = hero.y + hero.collisionRect.y;
        let x1: number = hero.x + hero.collisionRect.x + hero.collisionRect.width;
        let y1: number = hero.y + hero.collisionRect.y + hero.collisionRect.height;

        this.foods.forEach(food => {
            if (food.x > x0 && food.x < x1 && food.y > y0 && food.y < y1) {
                hero.slice();
                food.markedToSlice = true;
            }
        });
    }


    public placeOnStart (food: Food): void {
        food.y = -50;
        food.prevFood = this.foodOnTop;
        this.foodOnTop = food;
        food.vy = 0;
        food.falling = false;
        food.markedToSlice = false;
    }
}