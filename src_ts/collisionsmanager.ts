import Hero from './hero';
import FoodManager from './foodmanager';

export default class CollisionsManager {
    hero: Hero;
    foodManager: FoodManager;

    constructor(hero: Hero, foodManager: FoodManager) { 
        this.hero = hero;
        this.foodManager = foodManager;
    }

    public checkCollisions (): void {
        
    }
}