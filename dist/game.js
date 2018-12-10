/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src_ts/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src_ts/food.ts":
/*!************************!*\
  !*** ./src_ts/food.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Food = (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super.call(this) || this;
        _this.vy = 0;
        _this.falling = false;
        _this.markedToSlice = false;
        _this.markedAsMissed = false;
        _this.cumulTime = Math.random() * 100;
        _this.rotationSpeed = Math.random() * 0.1 + 0.1;
        _this.rotationDirection = Math.random() > 0.5 ? -1 : 1;
        _this.sprite = new pixi_js_1.Sprite(PIXI.Texture.EMPTY);
        _this.addChild(_this.sprite);
        _this.chooseRandomTexture();
        return _this;
    }
    Food.prototype.tick = function (delta, gravity) {
        if (!this.falling) {
            return;
        }
        this.vy += gravity * delta;
        this.y += this.vy * delta;
        this.rotation += this.rotationSpeed * this.rotationDirection;
        this.sprite.rotation -= (this.rotationSpeed * this.rotationDirection) / 2;
        this.cumulTime += 1;
        this.scale.x = Math.sin(this.cumulTime / 10) * 0.3 + 1.3;
        this.scale.y = Math.cos(this.cumulTime / 15) * 0.15 + 1.15;
    };
    Food.prototype.reset = function () {
        this.vy = 0;
        this.falling = false;
        this.markedToSlice = false;
        this.markedAsMissed = false;
        this.chooseRandomTexture();
    };
    Food.prototype.chooseRandomTexture = function () {
        var frameIndex = Math.floor(Math.random() * 64);
        var frameName = 'food_' + frameIndex + '.png';
        this.sprite.texture = PIXI.utils.TextureCache[frameName];
        this.sprite.anchor.set(0.5);
    };
    return Food;
}(pixi_js_1.Container));
exports["default"] = Food;


/***/ }),

/***/ "./src_ts/foodmanager.ts":
/*!*******************************!*\
  !*** ./src_ts/foodmanager.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
__webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/dist/pixi-particles.min.js");
var food_1 = __webpack_require__(/*! ./food */ "./src_ts/food.ts");
var sliceparticles_1 = __webpack_require__(/*! ./sliceparticles */ "./src_ts/sliceparticles.ts");
var FoodManager = (function (_super) {
    __extends(FoodManager, _super);
    function FoodManager() {
        var _this = _super.call(this) || this;
        _this.active = true;
        _this.difficultySpaceBetweenFoods = 20;
        _this.difficultyStartingVelYVar = 0;
        _this.foods = [];
        _this.foodsToSlice = [];
        for (var i = 0; i < 10; i++) {
            var food = new food_1["default"]();
            food.x = 50 + Math.random() * 220;
            food.y = -50;
            _this.foods.push(food);
            _this.addChild(food);
            if (i > 0) {
                food.prevFood = _this.foods[i - 1];
            }
        }
        _this.foodOnTop = _this.foods[_this.foods.length - 1];
        _this.foods[0].falling = true;
        _this.foods[0].prevFood = _this.foodOnTop;
        return _this;
    }
    FoodManager.prototype.tick = function (delta, hero) {
        var _this = this;
        this.foods.forEach(function (food) {
            food.tick(delta, 0.02);
            var y1 = hero.y + hero.collisionRect.y + hero.collisionRect.height;
            if (food.y > y1 && !food.markedAsMissed) {
                food.markedAsMissed = true;
                new sliceparticles_1["default"](_this, food.x, food.y, 1.5, 0.5, '#ff0000');
                _this.placeOnStart(food);
                _this.emit('food-missed');
            }
            if (_this.active && !food.falling && food.prevFood.falling && food.prevFood.y - food.y > _this.difficultySpaceBetweenFoods) {
                food.vy = Math.random() * _this.difficultyStartingVelYVar;
                food.falling = true;
                _this.difficultyStartingVelYVar += 0.01;
                _this.difficultySpaceBetweenFoods -= 0.01;
                _this.difficultySpaceBetweenFoods = Math.max(10, _this.difficultySpaceBetweenFoods);
            }
            if (food.markedToSlice) {
                var y0 = hero.y + hero.collisionRect.y;
                var y1_1 = hero.y + hero.collisionRect.y + hero.collisionRect.height;
                if (food.y >= (y0 + y1_1) / 2) {
                    new sliceparticles_1["default"](_this, food.x, food.y);
                    _this.placeOnStart(food);
                    _this.emit('food-sliced');
                }
            }
        });
    };
    FoodManager.prototype.checkCollisionsWithHero = function (hero) {
        var x0 = hero.x + hero.collisionRect.x;
        var y0 = hero.y + hero.collisionRect.y;
        var x1 = hero.x + hero.collisionRect.x + hero.collisionRect.width;
        var y1 = hero.y + hero.collisionRect.y + hero.collisionRect.height;
        this.foods.forEach(function (food) {
            if (food.x > x0 && food.x < x1 && food.y > y0 && food.y < y1) {
                hero.slice();
                food.markedToSlice = true;
            }
        });
    };
    FoodManager.prototype.placeOnStart = function (food) {
        food.reset();
        food.x = 50 + Math.random() * 220;
        food.y = -50;
        food.prevFood = this.foodOnTop;
        this.foodOnTop = food;
    };
    return FoodManager;
}(pixi_js_1.Container));
exports["default"] = FoodManager;


/***/ }),

/***/ "./src_ts/gameoveroverlay.ts":
/*!***********************************!*\
  !*** ./src_ts/gameoveroverlay.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var gsap_1 = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var GameOverOverlay = (function (_super) {
    __extends(GameOverOverlay, _super);
    function GameOverOverlay() {
        var _this = _super.call(this) || this;
        var style = new PIXI.TextStyle({});
        style.fill = 0x000000;
        style.align = 'center';
        style.stroke = 0xffffff;
        style.strokeThickness = 6;
        style.fontSize = 40;
        style.miterLimit = 3;
        _this.gameOverText = new pixi_js_1.Text('GAME OVER', style);
        _this.gameOverText.anchor.set(0.5);
        _this.addChild(_this.gameOverText);
        _this.gameOverText.alpha = 0;
        var style2 = new PIXI.TextStyle({});
        style2.fill = 0x000000;
        style2.align = 'center';
        style2.stroke = 0xffffff;
        style2.strokeThickness = 0;
        style2.fontSize = 20;
        style2.miterLimit = 3;
        _this.tapToPlayText = new pixi_js_1.Text('Tap to play again!', style2);
        _this.tapToPlayText.anchor.set(0.5);
        _this.tapToPlayText.y = 50;
        _this.addChild(_this.tapToPlayText);
        _this.tapToPlayText.alpha = 0;
        return _this;
    }
    GameOverOverlay.prototype.show = function (cb) {
        this.gameOverText.y -= 200;
        this.gameOverText.scale.set(0.75);
        new gsap_1.TimelineLite()
            .to(this.gameOverText, 0.3, { alpha: 1 });
        new gsap_1.TimelineLite()
            .to(this.gameOverText, 1, { y: 0, ease: gsap_1.Back.easeOut });
        new gsap_1.TimelineLite()
            .to(this.gameOverText.scale, 0.5, { x: 1, y: 1, ease: gsap_1.Back.easeOut }).delay(0.5);
        this.tapToPlayText.x = 300;
        new gsap_1.TimelineLite()
            .to(this.tapToPlayText, 0.25, { alpha: 1 }).delay(1.15);
        new gsap_1.TimelineLite()
            .to(this.tapToPlayText, 0.65, { x: 0, ease: gsap_1.Back.easeOut })
            .call(cb).delay(1);
    };
    return GameOverOverlay;
}(pixi_js_1.Container));
exports["default"] = GameOverOverlay;


/***/ }),

/***/ "./src_ts/gamescene.ts":
/*!*****************************!*\
  !*** ./src_ts/gamescene.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var hero_1 = __webpack_require__(/*! ./hero */ "./src_ts/hero.ts");
var foodmanager_1 = __webpack_require__(/*! ./foodmanager */ "./src_ts/foodmanager.ts");
var healthbar_1 = __webpack_require__(/*! ./healthbar */ "./src_ts/healthbar.ts");
var pointsdisplay_1 = __webpack_require__(/*! ./pointsdisplay */ "./src_ts/pointsdisplay.ts");
var screeneffect_1 = __webpack_require__(/*! ./screeneffect */ "./src_ts/screeneffect.ts");
var gameoveroverlay_1 = __webpack_require__(/*! ./gameoveroverlay */ "./src_ts/gameoveroverlay.ts");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(restartCallback) {
        var _this = _super.call(this) || this;
        _this.lives = 2;
        _this.points = 0;
        _this.gameEnded = false;
        _this.canRestart = false;
        _this.restartCallback = restartCallback;
        _this.background = new pixi_js_1.Sprite(PIXI.utils.TextureCache['background_a.png']);
        _this.addChild(_this.background);
        _this.background.interactive = true;
        _this.background.on('pointermove', _this.onPointerMove.bind(_this));
        _this.background.on('pointerdown', _this.onPointerDown.bind(_this));
        _this.hero = new hero_1["default"]();
        _this.addChild(_this.hero);
        _this.foodManager = new foodmanager_1["default"]();
        _this.addChild(_this.foodManager);
        _this.foodManager.on('food-missed', _this.onFoodMissed.bind(_this));
        _this.foodManager.on('food-sliced', _this.onFoodSliced.bind(_this));
        _this.healthBar = new healthbar_1["default"]();
        _this.addChild(_this.healthBar);
        _this.healthBar.x = 5;
        _this.healthBar.y = 5;
        _this.pointsDisplay = new pointsdisplay_1["default"]();
        _this.addChild(_this.pointsDisplay);
        _this.pointsDisplay.x = 320 - 5;
        _this.pointsDisplay.y = 0;
        _this.gameOverOverlay = new gameoveroverlay_1["default"]();
        _this.addChild(_this.gameOverOverlay);
        _this.gameOverOverlay.x = 320 / 2;
        _this.gameOverOverlay.y = 480 / 2 - 100;
        _this.screenEffects = new screeneffect_1["default"](_this, 320, 480, 0xff0000);
        _this.addChild(_this.screenEffects);
        _this.screenEffects.fadeOut(0x000000);
        return _this;
    }
    GameScene.prototype.onPointerMove = function (e) {
        if (this.gameEnded)
            return;
        var pos = e.data.getLocalPosition(this.background);
        pos.x = Math.max(Math.min(320, pos.x), 0);
        pos.y = Math.max(Math.min(480, pos.y), 0);
        this.hero.updateTargetPosition(pos.x);
    };
    GameScene.prototype.onPointerDown = function (e) {
        if (this.canRestart) {
            this.restartGame();
            this.canRestart = false;
        }
    };
    GameScene.prototype.tick = function (delta) {
        this.hero.tick(delta);
        this.foodManager.tick(delta, this.hero);
        if (this.gameEnded)
            return;
        this.foodManager.checkCollisionsWithHero(this.hero);
    };
    GameScene.prototype.onFoodMissed = function () {
        if (this.gameEnded)
            return;
        this.lives -= 1;
        this.healthBar.setHealth(this.lives / 2 * 100);
        this.screenEffects.flush(0xff0000);
        this.screenEffects.shake(5);
        if (this.lives === 0) {
            this.onGameOver();
        }
    };
    GameScene.prototype.onFoodSliced = function () {
        if (this.gameEnded)
            return;
        this.points += 10;
        this.pointsDisplay.setPoints(this.points);
        this.screenEffects.shake(3, true);
    };
    GameScene.prototype.onGameOver = function () {
        var _this = this;
        this.gameEnded = true;
        this.foodManager.active = false;
        this.gameOverOverlay.show(function () {
            _this.canRestart = true;
        });
    };
    GameScene.prototype.restartGame = function () {
        var _this = this;
        this.background.off('pointermove', this.onPointerMove.bind(this));
        this.background.off('pointerdown', this.onPointerDown.bind(this));
        this.foodManager.off('food-missed', this.onFoodMissed.bind(this));
        this.foodManager.off('food-sliced', this.onFoodSliced.bind(this));
        this.screenEffects.clear();
        this.screenEffects.fadeIn(0x000000, function () {
            _this.restartCallback();
        });
    };
    return GameScene;
}(pixi_js_1.Container));
exports["default"] = GameScene;


/***/ }),

/***/ "./src_ts/healthbar.ts":
/*!*****************************!*\
  !*** ./src_ts/healthbar.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var HealthBar = (function (_super) {
    __extends(HealthBar, _super);
    function HealthBar() {
        var _this = _super.call(this) || this;
        _this.decoration = new pixi_js_1.Sprite(PIXI.utils.TextureCache['health_bar_decoration.png']);
        _this.addChild(_this.decoration);
        _this.bar = new pixi_js_1.Sprite(PIXI.utils.TextureCache['health_bar.png']);
        _this.addChild(_this.bar);
        _this.bar.x = 14;
        _this.setHealth(100);
        return _this;
    }
    HealthBar.prototype.setHealth = function (percent) {
        percent = Math.max(0, Math.min(100, percent));
        this.bar.texture.trim.width = this.bar.texture.orig.width * percent / 100;
        this.bar.texture.update();
        this.bar.texture.requiresUpdate = true;
        this.bar.texture._updateUvs();
    };
    return HealthBar;
}(pixi_js_1.Container));
exports["default"] = HealthBar;


/***/ }),

/***/ "./src_ts/hero.ts":
/*!************************!*\
  !*** ./src_ts/hero.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Walk"] = 1] = "Walk";
    State[State["Slice"] = 2] = "Slice";
})(State || (State = {}));
;
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.currentState = State.Idle;
        _this.anims = [];
        _this.targetX = 160;
        _this.isSlicing = false;
        _this.lastTargetUpdate = 0;
        _this.collisionRect = new PIXI.Rectangle(-30, -10, 60, 40);
        _this.debugCollisionGraphics = new PIXI.Graphics();
        _this.idleAnim = _this.createAnimatedSprite('idle', [0, 1, 2, 3]);
        _this.walkAnim = _this.createAnimatedSprite('walk', [0, 1, 2, 3, 4]);
        _this.sliceAnim = _this.createAnimatedSprite('slice', [0, 1, 2, 2, 2, 2, 2]);
        _this.walkAnim.animationSpeed = 0.6;
        _this.sliceAnim.loop = false;
        _this.sliceAnim.animationSpeed = 0.4;
        _this.sliceAnim.onComplete = function () {
            _this.isSlicing = false;
            _this.setState(State.Idle);
        };
        _this.setState(State.Idle);
        _this.x = 160;
        _this.y = 350;
        _this.debugCollisionGraphics.beginFill(0xff0000, 0.4);
        _this.debugCollisionGraphics.drawRect(_this.collisionRect.x, _this.collisionRect.y, _this.collisionRect.width, _this.collisionRect.height);
        return _this;
    }
    Hero.prototype.tick = function (delta) {
        this.x += (this.targetX - this.x) / 3;
        if (this.shouldChangeToIdleWhileWalk()) {
            this.setState(State.Idle);
        }
        if (this.shouldChangeToWalkWhileIdle()) {
            this.setState(State.Walk);
        }
    };
    Hero.prototype.shouldChangeToIdleWhileWalk = function () {
        var notSlicing = !this.isSlicing;
        var state = this.currentState === State.Walk;
        var position = this.isOnTargetPosition();
        var time = this.lastTargetUpdate + 250 < Date.now();
        return notSlicing && state && position && time;
    };
    Hero.prototype.shouldChangeToWalkWhileIdle = function () {
        var notSlicing = !this.isSlicing;
        var state = this.currentState === State.Idle;
        var position = !this.isOnTargetPosition();
        return notSlicing && state && position;
    };
    Hero.prototype.updateTargetPosition = function (x) {
        this.targetX = x;
        this.lastTargetUpdate = Date.now();
    };
    Hero.prototype.slice = function () {
        this.setState(State.Slice);
        this.isSlicing = true;
    };
    Hero.prototype.isOnTargetPosition = function () {
        return Math.abs(this.x - this.targetX) < 1;
    };
    Hero.prototype.createAnimatedSprite = function (name, frameIndexes) {
        var frames = [];
        frameIndexes.forEach(function (val) {
            var frameName = 'hero_' + name + '_' + val + '.png';
            frames.push(PIXI.utils.TextureCache[frameName]);
        });
        var animatedSprite = new PIXI.extras.AnimatedSprite(frames);
        this.addChild(animatedSprite);
        animatedSprite.play();
        animatedSprite.animationSpeed = 0.2;
        animatedSprite.anchor.set(0.5);
        this.anims.push(animatedSprite);
        return animatedSprite;
    };
    Hero.prototype.setState = function (state) {
        if (state === State.Idle) {
            this.playAnimation(this.idleAnim);
        }
        else if (state === State.Slice) {
            this.playAnimation(this.sliceAnim);
        }
        else if (state === State.Walk) {
            this.playAnimation(this.walkAnim);
        }
        this.currentState = state;
    };
    Hero.prototype.playAnimation = function (animation) {
        this.anims.forEach(function (anim) {
            if (anim === animation) {
                anim.gotoAndPlay(0);
                anim.visible = true;
            }
            else {
                anim.stop();
                anim.visible = false;
            }
        });
    };
    return Hero;
}(pixi_js_1.Container));
exports["default"] = Hero;


/***/ }),

/***/ "./src_ts/main.ts":
/*!************************!*\
  !*** ./src_ts/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var gamescene_1 = __webpack_require__(/*! ./gamescene */ "./src_ts/gamescene.ts");
new (function () {
    function Main() {
        this.settings = {
            backgroundColor: 0x000000,
            antialias: false
        };
        PIXI.loader
            .add('images/atlases.json')
            .load(this.loaded.bind(this));
    }
    Main.prototype.loaded = function (loader, resources) {
        var _this = this;
        this.app = new pixi_js_1.Application(320, 480, this.settings);
        document.body.appendChild(this.app.view);
        this.gameScene = new gamescene_1["default"](this.restart.bind(this));
        this.app.stage.addChild(this.gameScene);
        this.app.ticker.add(function (delta) {
            _this.gameScene.tick(delta);
        });
    };
    Main.prototype.restart = function () {
        this.app.stage.removeChildren();
        this.gameScene = new gamescene_1["default"](this.restart.bind(this));
        this.app.stage.addChild(this.gameScene);
    };
    return Main;
}());


/***/ }),

/***/ "./src_ts/pointsdisplay.ts":
/*!*********************************!*\
  !*** ./src_ts/pointsdisplay.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var PointsDisplay = (function (_super) {
    __extends(PointsDisplay, _super);
    function PointsDisplay() {
        var _this = _super.call(this) || this;
        _this.style = new PIXI.TextStyle({});
        _this.style.fill = 0xffffff;
        _this.style.align = 'right';
        _this.style.stroke = 0x000000;
        _this.style.strokeThickness = 5;
        _this.style.fontSize = 20;
        _this.anchor.set(1, 0);
        _this.text = '0000';
        return _this;
    }
    PointsDisplay.prototype.setPoints = function (points) {
        this.text = points + '';
        if (points < 10)
            this.text = '000' + points;
        else if (points < 100)
            this.text = '00' + points;
        else if (points < 1000)
            this.text = '0' + points;
    };
    return PointsDisplay;
}(pixi_js_1.Text));
exports["default"] = PointsDisplay;


/***/ }),

/***/ "./src_ts/screeneffect.ts":
/*!********************************!*\
  !*** ./src_ts/screeneffect.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var gsap_1 = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var ScreenEffects = (function (_super) {
    __extends(ScreenEffects, _super);
    function ScreenEffects(shakeView, width, height, color) {
        var _this = _super.call(this, PIXI.Texture.WHITE) || this;
        _this.shakeTimeline = new gsap_1.TimelineLite();
        _this.flushTimeline = new gsap_1.TimelineLite();
        _this.scale.set(width / _this.texture.width, height / _this.texture.height);
        _this.tint = color;
        _this.alpha = 0;
        _this.shakeView = shakeView;
        return _this;
    }
    ScreenEffects.prototype.flush = function (color) {
        this.tint = color;
        this.alpha = .5;
        this.flushTimeline.clear();
        this.flushTimeline.to(this, 0.2, { alpha: 0 });
    };
    ScreenEffects.prototype.shake = function (strength, short, angle) {
        if (short === void 0) { short = false; }
        if (angle === undefined) {
            angle = Math.random() * Math.PI * 2;
        }
        var ampX = Math.cos(angle) * strength;
        var ampY = Math.sin(angle) * strength;
        this.shakeTimeline.clear();
        this.shakeTimeline
            .to(this.shakeView, 0.1, { x: ampX, y: ampY })
            .to(this.shakeView, 0.1, { x: -ampX, y: -ampY });
        if (!short) {
            this.shakeTimeline
                .to(this.shakeView, 0.1, { x: ampX, y: ampY })
                .to(this.shakeView, 0.1, { x: -ampX, y: -ampY });
        }
        this.shakeTimeline
            .to(this.shakeView, 0.1, { x: 0, y: 0 });
    };
    ScreenEffects.prototype.fadeIn = function (color, cb) {
        this.tint = color;
        this.flushTimeline.clear();
        this.flushTimeline.to(this, 0.75, { alpha: 1 });
        if (cb) {
            this.flushTimeline.call(cb);
        }
    };
    ScreenEffects.prototype.fadeOut = function (color) {
        this.tint = color;
        this.alpha = 1;
        this.flushTimeline.clear();
        this.flushTimeline.to(this, 0.75, { alpha: 0 });
    };
    ScreenEffects.prototype.clear = function () {
        this.shakeTimeline.clear();
        this.flushTimeline.clear();
    };
    return ScreenEffects;
}(pixi_js_1.Sprite));
exports["default"] = ScreenEffects;


/***/ }),

/***/ "./src_ts/sliceparticles.ts":
/*!**********************************!*\
  !*** ./src_ts/sliceparticles.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var pixi_particles_1 = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/dist/pixi-particles.min.js");
var SliceParticles = (function (_super) {
    __extends(SliceParticles, _super);
    function SliceParticles(view, x, y, scaleMultip, speedMultip, color) {
        if (scaleMultip === void 0) { scaleMultip = 1; }
        if (speedMultip === void 0) { speedMultip = 1; }
        if (color === void 0) { color = '#ffffff'; }
        var _this = this;
        var settings = {
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
        _this = _super.call(this, view, [PIXI.Texture.WHITE], settings) || this;
        _this.autoUpdate = true;
        return _this;
    }
    return SliceParticles;
}(pixi_particles_1.Emitter));
exports["default"] = SliceParticles;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2RtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9nYW1lb3Zlcm92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVzY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvaGVhbHRoYmFyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyY190cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyY190cy9wb2ludHNkaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyY190cy9zY3JlZW5lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL3NsaWNlcGFydGljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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Q0QsUUFBUSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2FBQ1g7WUFDRCxTQUFTLEVBQUUsUUFBUTtZQUNuQixTQUFTLEVBQUUsS0FBSztZQUNoQixlQUFlLEVBQUUsSUFBSTtZQUNyQixZQUFZLEVBQUUsRUFBRTtZQUNoQixHQUFHLEVBQUU7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUDtZQUNELFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxPQUFPO1NBQ3JCLENBQUM7UUFDRiwwQkFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFDO1FBRTVDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztJQUMzQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBdkQyQyx3QkFBTyxHQXVEbEQiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyY190cy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgU3ByaXRlLCBDb250YWluZXIgfSBmcm9tICdwaXhpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHVibGljIHZ5OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBmYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbWFya2VkVG9TbGljZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG1hcmtlZEFzTWlzc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgcHJldkZvb2Q6IEZvb2Q7XG5cbiAgICBjdW11bFRpbWU6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgcm90YXRpb25TcGVlZDogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIDAuMSArIDAuMTtcbiAgICByb3RhdGlvbkRpcmVjdGlvbjogbnVtYmVyID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMTtcblxuICAgIHNwcml0ZTogU3ByaXRlID0gbmV3IFNwcml0ZShQSVhJLlRleHR1cmUuRU1QVFkpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IFxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5jaG9vc2VSYW5kb21UZXh0dXJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2sgKGRlbHRhOiBudW1iZXIsIGdyYXZpdHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZmFsbGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudnkgKz0gZ3Jhdml0eSAqIGRlbHRhO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkICogdGhpcy5yb3RhdGlvbkRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gLT0gKHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMucm90YXRpb25EaXJlY3Rpb24pIC8gMjtcblxuICAgICAgICB0aGlzLmN1bXVsVGltZSArPSAxO1xuICAgICAgICB0aGlzLnNjYWxlLnggPSBNYXRoLnNpbih0aGlzLmN1bXVsVGltZS8xMCkgKiAwLjMgKyAxLjM7XG4gICAgICAgIHRoaXMuc2NhbGUueSA9IE1hdGguY29zKHRoaXMuY3VtdWxUaW1lLzE1KSAqIDAuMTUgKyAxLjE1O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCAoKTogdm9pZCB7XG4gICAgICAgXG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXJrZWRUb1NsaWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFya2VkQXNNaXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNob29zZVJhbmRvbVRleHR1cmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hvb3NlUmFuZG9tVGV4dHVyZSAoKTogdm9pZCB7XG4gICAgICAgIGxldCBmcmFtZUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2NCk7XG4gICAgICAgIGxldCBmcmFtZU5hbWU6IHN0cmluZyA9ICdmb29kXycgKyBmcmFtZUluZGV4ICsgJy5wbmcnO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtmcmFtZU5hbWVdO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0ICdwaXhpLXBhcnRpY2xlcyc7XG5cbmltcG9ydCBGb29kIGZyb20gJy4vZm9vZCc7XG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IFNsaWNlUGFydGljbGVzIGZyb20gJy4vc2xpY2VwYXJ0aWNsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kTWFuYWdlciBleHRlbmRzIENvbnRhaW5lciB7XG4gXG4gICAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGRpZmZpY3VsdHlTcGFjZUJldHdlZW5Gb29kczogbnVtYmVyID0gMjA7XG4gICAgZGlmZmljdWx0eVN0YXJ0aW5nVmVsWVZhcjogbnVtYmVyID0gMDtcblxuICAgIGZvb2RzOiBGb29kW10gPSBbXTtcbiAgICBmb29kT25Ub3A6IEZvb2Q7XG5cbiAgICBmb29kc1RvU2xpY2U6IEZvb2RbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IFxuICAgICAgICBzdXBlcigpO1xuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm9vZCA9IG5ldyBGb29kKCk7XG5cbiAgICAgICAgICAgIGZvb2QueCA9IDUwICsgTWF0aC5yYW5kb20oKSAqIDIyMDtcbiAgICAgICAgICAgIGZvb2QueSA9IC01MDtcbiAgICAgICAgICAgIHRoaXMuZm9vZHMucHVzaChmb29kKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChmb29kKTtcblxuICAgICAgICAgICAgaWYgKGkgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvb2QucHJldkZvb2QgPSB0aGlzLmZvb2RzW2kgLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9vZE9uVG9wID0gdGhpcy5mb29kc1t0aGlzLmZvb2RzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIHRoaXMuZm9vZHNbMF0uZmFsbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZHNbMF0ucHJldkZvb2QgPSB0aGlzLmZvb2RPblRvcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayAoZGVsdGE6IG51bWJlciwgaGVybzogSGVybyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuZm9vZHMuZm9yRWFjaChmb29kID0+IHtcbiAgICAgICAgICAgIGZvb2QudGljayhkZWx0YSwgMC4wMik7XG5cbiAgICAgICAgICAgIGxldCB5MTogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0LnkgKyBoZXJvLmNvbGxpc2lvblJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGZvb2QueSA+IHkxICYmICFmb29kLm1hcmtlZEFzTWlzc2VkKXtcbiAgICAgICAgICAgICAgICBmb29kLm1hcmtlZEFzTWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBuZXcgU2xpY2VQYXJ0aWNsZXModGhpcywgZm9vZC54LCBmb29kLnksIDEuNSwgMC41LCAnI2ZmMDAwMCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VPblN0YXJ0KGZvb2QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZm9vZC1taXNzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICFmb29kLmZhbGxpbmcgJiYgZm9vZC5wcmV2Rm9vZC5mYWxsaW5nICYmIGZvb2QucHJldkZvb2QueSAtIGZvb2QueSA+IHRoaXMuZGlmZmljdWx0eVNwYWNlQmV0d2VlbkZvb2RzKXtcbiAgICAgICAgICAgICAgICBmb29kLnZ5ID0gIE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpZmZpY3VsdHlTdGFydGluZ1ZlbFlWYXI7XG4gICAgICAgICAgICAgICAgZm9vZC5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHlTdGFydGluZ1ZlbFlWYXIgKz0gMC4wMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHlTcGFjZUJldHdlZW5Gb29kcyAtPSAwLjAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5U3BhY2VCZXR3ZWVuRm9vZHMgPSBNYXRoLm1heCgxMCwgdGhpcy5kaWZmaWN1bHR5U3BhY2VCZXR3ZWVuRm9vZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm9vZC5tYXJrZWRUb1NsaWNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB5MDogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0Lnk7XG4gICAgICAgICAgICAgICAgbGV0IHkxOiBudW1iZXIgPSBoZXJvLnkgKyBoZXJvLmNvbGxpc2lvblJlY3QueSArIGhlcm8uY29sbGlzaW9uUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYoZm9vZC55ID49ICh5MCArIHkxKS8yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbGljZVBhcnRpY2xlcyh0aGlzLCBmb29kLngsIGZvb2QueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZU9uU3RhcnQoZm9vZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdmb29kLXNsaWNlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAvLy8gdGhpcy5jaGVja0NvbGxpc2lvbnNXaXRoSGVybyhoZXJvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tDb2xsaXNpb25zV2l0aEhlcm8gKGhlcm86IEhlcm8pOiB2b2lkIHtcbiAgICAgICAgbGV0IHgwOiBudW1iZXIgPSBoZXJvLnggKyBoZXJvLmNvbGxpc2lvblJlY3QueDtcbiAgICAgICAgbGV0IHkwOiBudW1iZXIgPSBoZXJvLnkgKyBoZXJvLmNvbGxpc2lvblJlY3QueTtcbiAgICAgICAgbGV0IHgxOiBudW1iZXIgPSBoZXJvLnggKyBoZXJvLmNvbGxpc2lvblJlY3QueCArIGhlcm8uY29sbGlzaW9uUmVjdC53aWR0aDtcbiAgICAgICAgbGV0IHkxOiBudW1iZXIgPSBoZXJvLnkgKyBoZXJvLmNvbGxpc2lvblJlY3QueSArIGhlcm8uY29sbGlzaW9uUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5mb29kcy5mb3JFYWNoKGZvb2QgPT4ge1xuICAgICAgICAgICAgaWYgKGZvb2QueCA+IHgwICYmIGZvb2QueCA8IHgxICYmIGZvb2QueSA+IHkwICYmIGZvb2QueSA8IHkxKSB7XG4gICAgICAgICAgICAgICAgaGVyby5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGZvb2QubWFya2VkVG9TbGljZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGFjZU9uU3RhcnQgKGZvb2Q6IEZvb2QpOiB2b2lkIHtcbiAgICAgICAgZm9vZC5yZXNldCgpO1xuXG4gICAgICAgIGZvb2QueCA9IDUwICsgTWF0aC5yYW5kb20oKSAqIDIyMDtcbiAgICAgICAgZm9vZC55ID0gLTUwO1xuXG4gICAgICAgIGZvb2QucHJldkZvb2QgPSB0aGlzLmZvb2RPblRvcDtcbiAgICAgICAgdGhpcy5mb29kT25Ub3AgPSBmb29kO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250YWluZXIsIFRleHQgfSBmcm9tICdwaXhpLmpzJztcblxuaW1wb3J0IHsgVGltZWxpbmVMaXRlLCBCYWNrIH0gZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3Zlck92ZXJsYXkgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGdhbWVPdmVyVGV4dDogVGV4dDtcbiAgICB0YXBUb1BsYXlUZXh0OiBUZXh0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IFxuICAgICAgICBcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHt9KTtcblxuICAgICAgICBzdHlsZS5maWxsID0gMHgwMDAwMDA7XG4gICAgICAgIHN0eWxlLmFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHN0eWxlLnN0cm9rZSA9IDB4ZmZmZmZmO1xuICAgICAgICBzdHlsZS5zdHJva2VUaGlja25lc3MgPSA2O1xuICAgICAgICBzdHlsZS5mb250U2l6ZSA9IDQwO1xuICAgICAgICBzdHlsZS5taXRlckxpbWl0ID0gMztcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dCA9IG5ldyBUZXh0KCdHQU1FIE9WRVInLCBzdHlsZSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdhbWVPdmVyVGV4dCk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQuYWxwaGEgPSAwO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlMiA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgc3R5bGUyLmZpbGwgPSAweDAwMDAwMDtcbiAgICAgICAgc3R5bGUyLmFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHN0eWxlMi5zdHJva2UgPSAweGZmZmZmZjtcbiAgICAgICAgc3R5bGUyLnN0cm9rZVRoaWNrbmVzcyA9IDA7XG4gICAgICAgIHN0eWxlMi5mb250U2l6ZSA9IDIwO1xuICAgICAgICBzdHlsZTIubWl0ZXJMaW1pdCA9IDM7XG5cbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0ID0gbmV3IFRleHQoJ1RhcCB0byBwbGF5IGFnYWluIScsIHN0eWxlMik7XG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dC5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dC55ID0gNTA7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50YXBUb1BsYXlUZXh0KTtcblxuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQuYWxwaGEgPSAwO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93IChjYjogKCk9PnZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQueSAtPSAyMDA7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQuc2NhbGUuc2V0KDAuNzUpO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy5nYW1lT3ZlclRleHQsIDAuMywge2FscGhhOiAxfSk7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLmdhbWVPdmVyVGV4dCwgMSwge3k6IDAsIGVhc2U6IEJhY2suZWFzZU91dH0pO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy5nYW1lT3ZlclRleHQuc2NhbGUsIDAuNSwge3g6IDEsIHk6MSwgZWFzZTogQmFjay5lYXNlT3V0fSkuZGVsYXkoMC41KTtcblxuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQueCA9IDMwMDtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMudGFwVG9QbGF5VGV4dCwgMC4yNSwge2FscGhhOiAxfSkuZGVsYXkoMS4xNSlcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMudGFwVG9QbGF5VGV4dCwgMC42NSwge3g6IDAsIGVhc2U6IEJhY2suZWFzZU91dH0pXG4gICAgICAgIC5jYWxsKGNiKS5kZWxheSgxKVxuICAgICAgICBcbiAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlLCBDb250YWluZXIsIFBvaW50IH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IEZvb2RNYW5hZ2VyIGZyb20gJy4vZm9vZG1hbmFnZXInO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tICcuL2hlYWx0aGJhcic7XG5pbXBvcnQgUG9pbnRzRGlzcGxheSBmcm9tICcuL3BvaW50c2Rpc3BsYXknO1xuaW1wb3J0IFNjcmVlbkVmZmVjdHMgZnJvbSAnLi9zY3JlZW5lZmZlY3QnO1xuaW1wb3J0IEdhbWVPdmVyT3ZlcmxheSBmcm9tICcuL2dhbWVvdmVyb3ZlcmxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgbGl2ZXM6IG51bWJlciA9IDI7XG4gICAgcG9pbnRzOiBudW1iZXIgPSAwO1xuXG4gICAgZ2FtZUVuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY2FuUmVzdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYmFja2dyb3VuZDogU3ByaXRlO1xuICAgIGhlcm86IEhlcm87XG4gICAgZm9vZE1hbmFnZXI6IEZvb2RNYW5hZ2VyO1xuICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xuICAgIHBvaW50c0Rpc3BsYXk6IFBvaW50c0Rpc3BsYXk7XG4gICAgc2NyZWVuRWZmZWN0czogU2NyZWVuRWZmZWN0cztcbiAgICBnYW1lT3Zlck92ZXJsYXk6IEdhbWVPdmVyT3ZlcmxheTtcblxuICAgIHJlc3RhcnRDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihyZXN0YXJ0Q2FsbGJhY2s6IEZ1bmN0aW9uKSB7IFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucmVzdGFydENhbGxiYWNrID0gcmVzdGFydENhbGxiYWNrO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IFNwcml0ZShQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVsnYmFja2dyb3VuZF9hLnBuZyddKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJhY2tncm91bmQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm9uKCdwb2ludGVybW92ZScsIHRoaXMub25Qb2ludGVyTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm9uKCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSGVybygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaGVybyk7XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlciA9IG5ldyBGb29kTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZm9vZE1hbmFnZXIpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLm9uKCdmb29kLW1pc3NlZCcsIHRoaXMub25Gb29kTWlzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLm9uKCdmb29kLXNsaWNlZCcsIHRoaXMub25Gb29kU2xpY2VkLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaGVhbHRoQmFyKTtcblxuICAgICAgICB0aGlzLmhlYWx0aEJhci54ID0gNTtcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIueSA9IDU7XG5cbiAgICAgICAgdGhpcy5wb2ludHNEaXNwbGF5ID0gbmV3IFBvaW50c0Rpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBvaW50c0Rpc3BsYXkpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS54ID0gMzIwIC0gNTtcbiAgICAgICAgdGhpcy5wb2ludHNEaXNwbGF5LnkgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nYW1lT3Zlck92ZXJsYXkgPSBuZXcgR2FtZU92ZXJPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5nYW1lT3Zlck92ZXJsYXkpO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnggPSAzMjAvMjtcbiAgICAgICAgdGhpcy5nYW1lT3Zlck92ZXJsYXkueSA9IDQ4MC8yIC0gMTAwO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cyA9IG5ldyBTY3JlZW5FZmZlY3RzKHRoaXMsIDMyMCwgNDgwLCAweGZmMDAwMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zY3JlZW5FZmZlY3RzKTtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMuZmFkZU91dCgweDAwMDAwMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJNb3ZlIChlOiBQSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQpIHtcblxuICAgICAgICBpZih0aGlzLmdhbWVFbmRlZCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwb3M6IFBvaW50ID0gZS5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgXG4gICAgICAgIHBvcy54ID0gTWF0aC5tYXgoTWF0aC5taW4oMzIwLCBwb3MueCksIDApO1xuICAgICAgICBwb3MueSA9IE1hdGgubWF4KE1hdGgubWluKDQ4MCwgcG9zLnkpLCAwKTtcblxuICAgICAgICB0aGlzLmhlcm8udXBkYXRlVGFyZ2V0UG9zaXRpb24ocG9zLngpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qb2ludGVyRG93biAoZTogUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jYW5SZXN0YXJ0KXtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuUmVzdGFydCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6IG51bWJlcikgXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRlbHRhKTtcbiAgICAgICAgdGhpcy5oZXJvLnRpY2soZGVsdGEpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLnRpY2soZGVsdGEsIHRoaXMuaGVybyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5jaGVja0NvbGxpc2lvbnNXaXRoSGVybyh0aGlzLmhlcm8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Gb29kTWlzc2VkICgpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5nYW1lRW5kZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5saXZlcyAtPSAxO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnNldEhlYWx0aCh0aGlzLmxpdmVzIC8gMiAqIDEwMCk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZsdXNoKDB4ZmYwMDAwKTtcbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLnNoYWtlKDUpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpdmVzID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMub25HYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkZvb2RTbGljZWQgKCk6IHZvaWQge1xuICAgICAgICBpZih0aGlzLmdhbWVFbmRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucG9pbnRzICs9IDEwO1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS5zZXRQb2ludHModGhpcy5wb2ludHMpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSgzLCB0cnVlKTtcbiAgICB9IFxuXG4gICAgcHVibGljIG9uR2FtZU92ZXIgKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVFbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5nYW1lT3Zlck92ZXJsYXkuc2hvdygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhblJlc3RhcnQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydEdhbWUgKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKCdwb2ludGVybW92ZScsIHRoaXMub25Qb2ludGVyTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm9mZigncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5vZmYoJ2Zvb2QtbWlzc2VkJywgdGhpcy5vbkZvb2RNaXNzZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKCdmb29kLXNsaWNlZCcsIHRoaXMub25Gb29kU2xpY2VkLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5mYWRlSW4oMHgwMDAwMDAsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydENhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGUsIENvbnRhaW5lciB9IGZyb20gJ3BpeGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGhCYXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIFxuICAgIGRlY29yYXRpb246IFNwcml0ZTtcbiAgICBiYXI6IFNwcml0ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVjb3JhdGlvbiA9IG5ldyBTcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbJ2hlYWx0aF9iYXJfZGVjb3JhdGlvbi5wbmcnXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kZWNvcmF0aW9uKTtcblxuICAgICAgICB0aGlzLmJhciA9IG5ldyBTcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbJ2hlYWx0aF9iYXIucG5nJ10pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFyKTtcbiAgICAgICAgdGhpcy5iYXIueCA9IDE0O1xuXG4gICAgICAgIHRoaXMuc2V0SGVhbHRoKDEwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhlYWx0aChwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgcGVyY2VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgcGVyY2VudCkpO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLnRyaW0ud2lkdGggPSB0aGlzLmJhci50ZXh0dXJlLm9yaWcud2lkdGggKiBwZXJjZW50IC8gMTAwO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLnJlcXVpcmVzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYXIudGV4dHVyZS5fdXBkYXRlVXZzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRhaW5lciwgVGV4dHVyZSB9IGZyb20gJ3BpeGkuanMnO1xuXG5lbnVtIFN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgU2xpY2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGN1cnJlbnRTdGF0ZTogU3RhdGUgPSBTdGF0ZS5JZGxlO1xuXG4gICAgaWRsZUFuaW06IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuICAgIHdhbGtBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBzbGljZUFuaW06IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuXG4gICAgYW5pbXM6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlW10gPSBbXTtcblxuICAgIHRhcmdldFg6IG51bWJlciA9IDE2MDtcblxuICAgIGlzU2xpY2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbGFzdFRhcmdldFVwZGF0ZTogbnVtYmVyID0gMDtcblxuICAgIGNvbGxpc2lvblJlY3Q6IFBJWEkuUmVjdGFuZ2xlID0gbmV3IFBJWEkuUmVjdGFuZ2xlKC0zMCwgLTEwLCA2MCwgNDApO1xuICAgIGRlYnVnQ29sbGlzaW9uR3JhcGhpY3M6IFBJWEkuR3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaWRsZUFuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKCdpZGxlJywgWzAsIDEsIDIsIDNdKTtcbiAgICAgICAgdGhpcy53YWxrQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoJ3dhbGsnLCBbMCwgMSwgMiwgMywgNF0pO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoJ3NsaWNlJywgWzAsIDEsIDIsIDIsIDIsIDIsIDJdKTtcblxuICAgICAgICB0aGlzLndhbGtBbmltLmFuaW1hdGlvblNwZWVkID0gMC42O1xuXG4gICAgICAgIHRoaXMuc2xpY2VBbmltLmxvb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbGljZUFuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjQ7XG5cbiAgICAgICAgdGhpcy5zbGljZUFuaW0ub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJaYWtvxYRjem9uYSFcIik7XG4gICAgICAgICAgICB0aGlzLmlzU2xpY2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuSWRsZSk7XG5cbiAgICAgICAgdGhpcy54ID0gMTYwO1xuICAgICAgICB0aGlzLnkgPSAzNTA7XG5cbiAgICAgICAgdGhpcy5kZWJ1Z0NvbGxpc2lvbkdyYXBoaWNzLmJlZ2luRmlsbCgweGZmMDAwMCwgMC40KTtcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbGxpc2lvbkdyYXBoaWNzLmRyYXdSZWN0KHRoaXMuY29sbGlzaW9uUmVjdC54LCBcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uUmVjdC55LCB0aGlzLmNvbGxpc2lvblJlY3Qud2lkdGgsIHRoaXMuY29sbGlzaW9uUmVjdC5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgLy90aGlzLmFkZENoaWxkKHRoaXMuZGVidWdDb2xsaXNpb25HcmFwaGljcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpLzM7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5zaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hhbmdlVG9XYWxrV2hpbGVJZGxlKCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5XYWxrKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvSWRsZVdoaWxlV2FsaygpIHtcbiAgICAgICAgbGV0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5XYWxrO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDI1MCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb24gJiYgdGltZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpIHtcbiAgICAgICAgbGV0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5JZGxlO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAhdGhpcy5pc09uVGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgLy9sZXQgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDEwMCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRhcmdldFBvc2l0aW9uICh4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRYID0geDtcbiAgICAgICAgdGhpcy5sYXN0VGFyZ2V0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuU2xpY2UpO1xuICAgICAgICB0aGlzLmlzU2xpY2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc09uVGFyZ2V0UG9zaXRpb24gKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50YXJnZXRYKSA8IDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmltYXRlZFNwcml0ZShuYW1lOnN0cmluZywgZnJhbWVJbmRleGVzOiBudW1iZXJbXSk6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlIHtcbiAgICAgICAgbGV0IGZyYW1lczpUZXh0dXJlW10gPSBbXTtcblxuICAgICAgICBmcmFtZUluZGV4ZXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgbGV0IGZyYW1lTmFtZSA9ICdoZXJvXycgKyBuYW1lICsgJ18nICsgdmFsICsgJy5wbmcnO1xuICAgICAgICAgICAgZnJhbWVzLnB1c2goUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVOYW1lXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhbmltYXRlZFNwcml0ZTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGUgPSBuZXcgUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGUoZnJhbWVzKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKGFuaW1hdGVkU3ByaXRlKTtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUucGxheSgpO1xuICAgICAgICBhbmltYXRlZFNwcml0ZS5hbmltYXRpb25TcGVlZCA9IDAuMjtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIHRoaXMuYW5pbXMucHVzaChhbmltYXRlZFNwcml0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1hdGVkU3ByaXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKTogdm9pZCB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU3RhdGUuSWRsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMuaWRsZUFuaW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSBTdGF0ZS5TbGljZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMuc2xpY2VBbmltKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuV2FsaylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMud2Fsa0FuaW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5QW5pbWF0aW9uIChhbmltYXRpb246IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbXMuZm9yRWFjaChhbmltID0+IHtcbiAgICAgICAgICAgIGlmKGFuaW0gPT09IGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIGFuaW0uZ290b0FuZFBsYXkoMCk7XG4gICAgICAgICAgICAgICAgYW5pbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW0uc3RvcCgpO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL2dhbWVzY2VuZSc7XG5cbm5ldyBjbGFzcyBNYWluIHtcbiAgICBhcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgc2V0dGluZ3M6IEFwcGxpY2F0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDAwMDAwMCxcbiAgICAgICAgYW50aWFsaWFzOiBmYWxzZVxuICAgIH07XG5cbiAgICBnYW1lU2NlbmU6IEdhbWVTY2VuZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBQSVhJLmxvYWRlclxuICAgICAgICAgICAgLmFkZCgnaW1hZ2VzL2F0bGFzZXMuanNvbicpXG4gICAgICAgICAgICAubG9hZCh0aGlzLmxvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBsb2FkZWQobG9hZGVyOlBJWEkubG9hZGVycy5Mb2FkZXIsIHJlc291cmNlczogUElYSS5sb2FkZXJzLlJlc291cmNlRGljdGlvbmFyeSkge1xuXG4gICAgICAgIHRoaXMuYXBwID0gbmV3IEFwcGxpY2F0aW9uKDMyMCwgNDgwLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KTtcblxuICAgICAgICB0aGlzLmdhbWVTY2VuZSA9IG5ldyBHYW1lU2NlbmUodGhpcy5yZXN0YXJ0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmdhbWVTY2VuZSk7XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZGVsdGE6IG51bWJlcik9PntcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnRpY2soZGVsdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLmdhbWVTY2VuZSA9IG5ldyBHYW1lU2NlbmUodGhpcy5yZXN0YXJ0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmdhbWVTY2VuZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFRleHQgfSBmcm9tICdwaXhpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRzRGlzcGxheSBleHRlbmRzIFRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHt9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmZpbGwgPSAweGZmZmZmZjtcbiAgICAgICAgdGhpcy5zdHlsZS5hbGlnbiA9ICdyaWdodCc7XG4gICAgICAgIHRoaXMuc3R5bGUuc3Ryb2tlID0gMHgwMDAwMDA7XG4gICAgICAgIHRoaXMuc3R5bGUuc3Ryb2tlVGhpY2tuZXNzID0gNTtcbiAgICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9IDIwO1xuICAgIFxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMSwgMCk7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gJzAwMDAnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb2ludHMgKHBvaW50czogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dCA9IHBvaW50cyArICcnO1xuXG4gICAgICAgIGlmKHBvaW50cyA8IDEwKSB0aGlzLnRleHQgPSAnMDAwJyArIHBvaW50cztcbiAgICAgICAgZWxzZSBpZihwb2ludHMgPCAxMDApIHRoaXMudGV4dCA9ICcwMCcgKyBwb2ludHM7XG4gICAgICAgIGVsc2UgaWYocG9pbnRzIDwgMTAwMCkgdGhpcy50ZXh0ID0gJzAnICsgcG9pbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGUsIERpc3BsYXlPYmplY3QgfSBmcm9tICdwaXhpLmpzJztcblxuaW1wb3J0IHsgVGltZWxpbmVMaXRlIH0gZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5FZmZlY3RzIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBwcml2YXRlIHNoYWtlVGltZWxpbmU6IFRpbWVsaW5lTGl0ZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICBwcml2YXRlIGZsdXNoVGltZWxpbmU6IFRpbWVsaW5lTGl0ZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuICAgIHByaXZhdGUgc2hha2VWaWV3OiBEaXNwbGF5T2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3Ioc2hha2VWaWV3OiBEaXNwbGF5T2JqZWN0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IG51bWJlcikgeyBcbiAgICAgICAgc3VwZXIoUElYSS5UZXh0dXJlLldISVRFKTtcblxuICAgICAgICB0aGlzLnNjYWxlLnNldCh3aWR0aC90aGlzLnRleHR1cmUud2lkdGgsIGhlaWdodC90aGlzLnRleHR1cmUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmFscGhhID0gMDtcblxuICAgICAgICB0aGlzLnNoYWtlVmlldyA9IHNoYWtlVmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmx1c2ggKGNvbG9yOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IC41O1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC4yLCB7YWxwaGE6IDB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hha2UgKHN0cmVuZ3RoOiBudW1iZXIsIHNob3J0OiBib29sZWFuID0gZmFsc2UsIGFuZ2xlPzogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGFuZ2xlID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYW1wWDogbnVtYmVyID0gTWF0aC5jb3MoYW5nbGUpICogc3RyZW5ndGg7XG4gICAgICAgIGxldCBhbXBZOiBudW1iZXIgPSBNYXRoLnNpbihhbmdsZSkgKiBzdHJlbmd0aDtcblxuICAgICAgICB0aGlzLnNoYWtlVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lXG4gICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogYW1wWCwgeTogYW1wWX0pXG4gICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogLWFtcFgsIHk6IC1hbXBZfSlcblxuICAgICAgICBpZighc2hvcnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2hha2VUaW1lbGluZVxuICAgICAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiBhbXBYLCB5OiBhbXBZfSlcbiAgICAgICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogLWFtcFgsIHk6IC1hbXBZfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lXG4gICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogMCwgeTogMH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIGZhZGVJbiAoY29sb3I6IG51bWJlciwgY2I/OiAoKCkgPT4gdm9pZCkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS50byh0aGlzLCAwLjc1LCB7YWxwaGE6IDF9KTtcblxuICAgICAgICBpZiAoY2IpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jYWxsKGNiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmYWRlT3V0IChjb2xvcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGludCA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC43NSwge2FscGhhOiAwfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyICgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAncGl4aS1wYXJ0aWNsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGljZVBhcnRpY2xlcyBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFBJWEkuQ29udGFpbmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgXG4gICAgICAgIHNjYWxlTXVsdGlwOiBudW1iZXIgPSAxLCBzcGVlZE11bHRpcDogbnVtYmVyID0gMSwgY29sb3I6IHN0cmluZyA9ICcjZmZmZmZmJykge1xuICAgICAgICBsZXQgc2V0dGluZ3M6IG9iamVjdCA9IHtcbiAgICAgICAgICAgIGFscGhhOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IDEsXG4gICAgICAgICAgICAgICAgZW5kOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogMC42ICogc2NhbGVNdWx0aXAsXG4gICAgICAgICAgICAgICAgZW5kOiAwLjAxICogc2NhbGVNdWx0aXAsXG4gICAgICAgICAgICAgICAgbWluaW11bVNjYWxlTXVsdGlwbGllcjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IGNvbG9yLFxuICAgICAgICAgICAgICAgIGVuZDogY29sb3JcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiAzNTAgKiBzcGVlZE11bHRpcCxcbiAgICAgICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICAgICAgbWluaW11bVNwZWVkTXVsdGlwbGllcjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMTAwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heFNwZWVkOiAwLFxuICAgICAgICAgICAgc3RhcnRSb3RhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vUm90YXRpb246IGZhbHNlLFxuICAgICAgICAgICAgcm90YXRpb25TcGVlZDoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaWZldGltZToge1xuICAgICAgICAgICAgICAgIG1pbjogMC4zLFxuICAgICAgICAgICAgICAgIG1heDogMC40XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgZnJlcXVlbmN5OiAwLjAwMSxcbiAgICAgICAgICAgIGVtaXR0ZXJMaWZldGltZTogMC4wMSxcbiAgICAgICAgICAgIG1heFBhcnRpY2xlczogMTAsXG4gICAgICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICAgIHk6IHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRBdEJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgc3Bhd25UeXBlOiBcInBvaW50XCJcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIodmlldywgW1BJWEkuVGV4dHVyZS5XSElURV0sIHNldHRpbmdzKTtcblxuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSB0cnVlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9