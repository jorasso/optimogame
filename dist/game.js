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
        style.fontSize = 50;
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
        if (this.lives === 0) {
            this.onGameOver();
        }
    };
    GameScene.prototype.onFoodSliced = function () {
        if (this.gameEnded)
            return;
        this.points += 10;
        this.pointsDisplay.setPoints(this.points);
        this.screenEffects.shake(3);
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
    ScreenEffects.prototype.shake = function (strength) {
        var angle = Math.random() * Math.PI * 2;
        var ampX = Math.cos(angle) * strength;
        var ampY = Math.sin(angle) * strength;
        this.shakeTimeline.clear();
        this.shakeTimeline
            .to(this.shakeView, 0.1, { x: ampX, y: ampY })
            .to(this.shakeView, 0.1, { x: -ampX, y: -ampY })
            .to(this.shakeView, 0.1, { x: ampX, y: ampY })
            .to(this.shakeView, 0.1, { x: -ampX, y: -ampY })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2RtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9nYW1lb3Zlcm92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVzY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvaGVhbHRoYmFyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyY190cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyY190cy9wb2ludHNkaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyY190cy9zY3JlZW5lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL3NsaWNlcGFydGljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBLDBGQUE0QztBQUU1QztJQUFrQyx3QkFBUztJQWdCdkM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFuQk0sUUFBRSxHQUFXLENBQUMsQ0FBQztRQUNmLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFJdkMsZUFBUyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDeEMsbUJBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsRCx1QkFBaUIsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpELFlBQU0sR0FBVyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUk1QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7SUFDL0IsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBYSxLQUFhLEVBQUUsT0FBZTtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxFQUFFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUM3RCxDQUFDO0lBRU0sb0JBQUssR0FBWjtRQUVJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFFNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLGtDQUFtQixHQUExQjtRQUNJLElBQUksVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxHQUFXLE9BQU8sR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRXRELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0F0RGlDLG1CQUFTLEdBc0QxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REQsMEZBQW9DO0FBQ3BDLHNHQUF3QjtBQUV4QixtRUFBMEI7QUFFMUIsaUdBQThDO0FBRTlDO0lBQXlDLCtCQUFTO0lBWTlDO1FBQUEsWUFDSSxpQkFBTyxTQXVCVjtRQWxDRCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGlDQUEyQixHQUFXLEVBQUUsQ0FBQztRQUN6QywrQkFBeUIsR0FBVyxDQUFDLENBQUM7UUFFdEMsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQU10QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUMzQjtZQUNJLElBQUksSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1lBRXRCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDbEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNiLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNUO2dCQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FFSjtRQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuRCxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQzs7SUFDNUMsQ0FBQztJQUVNLDBCQUFJLEdBQVgsVUFBYSxLQUFhLEVBQUUsSUFBVTtRQUF0QyxpQkFxQ0M7UUFuQ0csSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBSTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV2QixJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQzNFLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDO2dCQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSwyQkFBYyxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDOUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM1QjtZQUVELElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsMkJBQTJCLEVBQUM7Z0JBQ3JILElBQUksQ0FBQyxFQUFFLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyx5QkFBeUIsSUFBSSxJQUFJLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQywyQkFBMkIsSUFBSSxJQUFJLENBQUM7Z0JBRXpDLEtBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUNyRjtZQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFDdEI7Z0JBQ0ksSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxJQUFFLEdBQVcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDM0UsSUFBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRTtvQkFDdEIsSUFBSSwyQkFBYyxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFekMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDNUI7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVNLDZDQUF1QixHQUE5QixVQUFnQyxJQUFVO1FBQ3RDLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFFLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFFM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBSTtZQUNuQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQ0FBWSxHQUFuQixVQUFxQixJQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBcEd3QyxtQkFBUyxHQW9HakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dELDBGQUEwQztBQUUxQyw2RUFBK0M7QUFFL0M7SUFBNkMsbUNBQVM7SUFJbEQ7UUFBQSxZQUVJLGlCQUFPLFNBa0NWO1FBaENHLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN4QixLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUVyQixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksY0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFakMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN6QixNQUFNLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUV0QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBSSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUdqQyxDQUFDO0lBRU0sOEJBQUksR0FBWCxVQUFhLEVBQVk7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBRTNCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQyxJQUFJLG1CQUFZLEVBQUU7YUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFeEMsSUFBSSxtQkFBWSxFQUFFO2FBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksbUJBQVksRUFBRTthQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTNCLElBQUksbUJBQVksRUFBRTthQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRXJELElBQUksbUJBQVksRUFBRTthQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDeEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFHdEIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxDQW5FNEMsbUJBQVMsR0FtRXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFRCwwRkFBbUQ7QUFDbkQsbUVBQTBCO0FBQzFCLHdGQUF3QztBQUN4QyxrRkFBb0M7QUFDcEMsOEZBQTRDO0FBQzVDLDJGQUEyQztBQUMzQyxvR0FBZ0Q7QUFFaEQ7SUFBdUMsNkJBQVM7SUFpQjVDLG1CQUFZLGVBQXlCO1FBQXJDLFlBQ0ksaUJBQU8sU0F5Q1Y7UUExREQsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFleEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFFdkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzFFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9CLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztRQUVqRSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx3QkFBVyxFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFFakUsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwwQkFBYSxFQUFFLENBQUM7UUFDekMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDRCQUFlLEVBQUUsQ0FBQztRQUM3QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVwQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRXJDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5QkFBYSxDQUFDLEtBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUN6QyxDQUFDO0lBRU8saUNBQWEsR0FBckIsVUFBdUIsQ0FBb0M7UUFFdkQsSUFBRyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFFMUIsSUFBSSxHQUFHLEdBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHMUQsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxpQ0FBYSxHQUFyQixVQUF1QixDQUFvQztRQUV2RCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRU0sd0JBQUksR0FBWCxVQUFZLEtBQWE7UUFHckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUUzQixJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sZ0NBQVksR0FBcEI7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFTyxnQ0FBWSxHQUFwQjtRQUNJLElBQUcsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDaEMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQTVJc0MsbUJBQVMsR0E0SS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKRCwwRkFBNEM7QUFFNUM7SUFBdUMsNkJBQVM7SUFLNUM7UUFBQSxZQUNJLGlCQUFPLFNBVVY7UUFSRyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDbkYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVoQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUN4QixDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBaUIsT0FBZTtRQUM1QixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0F6QnNDLG1CQUFTLEdBeUIvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsMEZBQTZDO0FBRTdDLElBQUssS0FJSjtBQUpELFdBQUssS0FBSztJQUNOLGlDQUFJO0lBQ0osaUNBQUk7SUFDSixtQ0FBSztBQUNULENBQUMsRUFKSSxLQUFLLEtBQUwsS0FBSyxRQUlUO0FBQUEsQ0FBQztBQUVGO0lBQWtDLHdCQUFTO0lBa0J2QztRQUFBLFlBQ0ksaUJBQU8sU0E0QlY7UUE5Q0Qsa0JBQVksR0FBVSxLQUFLLENBQUMsSUFBSSxDQUFDO1FBTWpDLFdBQUssR0FBaUMsRUFBRSxDQUFDO1FBRXpDLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFFdEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFN0IsbUJBQWEsR0FBbUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRSw0QkFBc0IsR0FBa0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFLeEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNFLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUVuQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBRXBDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHO1lBRXhCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFRCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQixLQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNiLEtBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRWIsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFDckQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFJbkYsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFFTCxDQUFDO0lBRU8sMENBQTJCLEdBQW5DO1FBQ0ksSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVwRCxPQUFPLFVBQVUsSUFBSSxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRU8sMENBQTJCLEdBQW5DO1FBQ0ksSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRzFDLE9BQU8sVUFBVSxJQUFJLEtBQUssSUFBSSxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVNLG1DQUFvQixHQUEzQixVQUE2QixDQUFTO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLG9CQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRU8saUNBQWtCLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sbUNBQW9CLEdBQTVCLFVBQTZCLElBQVcsRUFBRSxZQUFzQjtRQUM1RCxJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFFMUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQ3BCLElBQUksU0FBUyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxjQUFjLEdBQStCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsY0FBYyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDcEMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEMsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVPLHVCQUFRLEdBQWhCLFVBQWlCLEtBQVk7UUFDekIsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksRUFDeEI7WUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQzthQUNJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7YUFDSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxFQUM3QjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVPLDRCQUFhLEdBQXJCLFVBQXVCLFNBQXFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQUk7WUFDbkIsSUFBRyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFDSTtnQkFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxDQTlJaUMsbUJBQVMsR0E4STFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEpELDBGQUEwRDtBQUMxRCxrRkFBb0M7QUFFcEM7SUFVSTtRQVBBLGFBQVEsR0FBdUI7WUFDM0IsZUFBZSxFQUFFLFFBQVE7WUFDekIsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQztRQUtFLElBQUksQ0FBQyxNQUFNO2FBQ04sR0FBRyxDQUFDLHFCQUFxQixDQUFDO2FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQU8sTUFBMEIsRUFBRSxTQUEwQztRQUE3RSxpQkFXQztRQVRHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxxQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQWE7WUFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0QsMEZBQStCO0FBRS9CO0lBQTJDLGlDQUFJO0lBQzNDO1FBQUEsWUFFSSxpQkFBTyxTQWFWO1FBWEcsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzNCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMzQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUV6QixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFrQixNQUFjO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUV4QixJQUFHLE1BQU0sR0FBRyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO2FBQ3RDLElBQUcsTUFBTSxHQUFHLEdBQUc7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7YUFDM0MsSUFBRyxNQUFNLEdBQUcsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNwRCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBekIwQyxjQUFJLEdBeUI5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsMEZBQWdEO0FBRWhELDZFQUFtQztBQUVuQztJQUEyQyxpQ0FBTTtJQU03Qyx1QkFBWSxTQUF3QixFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBYTtRQUFsRixZQUNJLGtCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBUzVCO1FBZk8sbUJBQWEsR0FBaUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDakQsbUJBQWEsR0FBaUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFPckQsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJFLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWxCLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWYsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0lBQy9CLENBQUM7SUFFTSw2QkFBSyxHQUFaLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sNkJBQUssR0FBWixVQUFjLFFBQWdCO1FBQzFCLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVoRCxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUU5QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhO2FBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxDQUFDO2FBQzNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQzthQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUMzQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7YUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sOEJBQU0sR0FBYixVQUFlLEtBQWEsRUFBRSxFQUFpQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVsQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUU5QyxJQUFJLEVBQUUsRUFDTjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQ0FuRTBDLGdCQUFNLEdBbUVoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUQsNkhBQXlDO0FBRXpDO0lBQTRDLGtDQUFPO0lBQy9DLHdCQUFZLElBQW9CLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFDbEQsV0FBdUIsRUFBRSxXQUF1QixFQUFFLEtBQXlCO1FBQTNFLDZDQUF1QjtRQUFFLDZDQUF1QjtRQUFFLHlDQUF5QjtRQUQvRSxpQkFxREM7UUFuREcsSUFBSSxRQUFRLEdBQVc7WUFDbkIsS0FBSyxFQUFFO2dCQUNILEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxDQUFDO2FBQ1Q7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEdBQUcsR0FBRyxXQUFXO2dCQUN4QixHQUFHLEVBQUUsSUFBSSxHQUFHLFdBQVc7Z0JBQ3ZCLHNCQUFzQixFQUFFLENBQUM7YUFDNUI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLEtBQUs7YUFDYjtZQUNELEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUsR0FBRyxHQUFHLFdBQVc7Z0JBQ3hCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLHNCQUFzQixFQUFFLENBQUM7YUFDNUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLElBQUk7YUFDVjtZQUNELFFBQVEsRUFBRSxDQUFDO1lBQ1gsYUFBYSxFQUFFO2dCQUNYLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxHQUFHO2FBQ1g7WUFDRCxVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUU7Z0JBQ1gsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7YUFDVDtZQUNELFFBQVEsRUFBRTtnQkFDTixHQUFHLEVBQUUsR0FBRztnQkFDUixHQUFHLEVBQUUsR0FBRzthQUNYO1lBQ0QsU0FBUyxFQUFFLFFBQVE7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsZUFBZSxFQUFFLElBQUk7WUFDckIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsR0FBRyxFQUFFO2dCQUNELENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsT0FBTztTQUNyQixDQUFDO1FBQ0YsMEJBQU0sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBQztRQUU1QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7SUFDM0IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQXZEMkMsd0JBQU8sR0F1RGxEIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmNfdHMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFNwcml0ZSwgQ29udGFpbmVyIH0gZnJvbSAncGl4aS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb2QgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHB1YmxpYyB2eTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZmFsbGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG1hcmtlZFRvU2xpY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBtYXJrZWRBc01pc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHByZXZGb29kOiBGb29kO1xuXG4gICAgY3VtdWxUaW1lOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgIHJvdGF0aW9uU3BlZWQ6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAwLjEgKyAwLjE7XG4gICAgcm90YXRpb25EaXJlY3Rpb246IG51bWJlciA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG5cbiAgICBzcHJpdGU6IFNwcml0ZSA9IG5ldyBTcHJpdGUoUElYSS5UZXh0dXJlLkVNUFRZKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hvb3NlUmFuZG9tVGV4dHVyZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrIChkZWx0YTogbnVtYmVyLCBncmF2aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmZhbGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZ5ICs9IGdyYXZpdHkgKiBkZWx0YTtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiBkZWx0YTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMucm90YXRpb25EaXJlY3Rpb247XG4gICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uIC09ICh0aGlzLnJvdGF0aW9uU3BlZWQgKiB0aGlzLnJvdGF0aW9uRGlyZWN0aW9uKSAvIDI7XG5cbiAgICAgICAgdGhpcy5jdW11bFRpbWUgKz0gMTtcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gTWF0aC5zaW4odGhpcy5jdW11bFRpbWUvMTApICogMC4zICsgMS4zO1xuICAgICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmNvcyh0aGlzLmN1bXVsVGltZS8xNSkgKiAwLjE1ICsgMS4xNTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQgKCk6IHZvaWQge1xuICAgICAgIFxuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFya2VkVG9TbGljZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hcmtlZEFzTWlzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jaG9vc2VSYW5kb21UZXh0dXJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNob29zZVJhbmRvbVRleHR1cmUgKCk6IHZvaWQge1xuICAgICAgICBsZXQgZnJhbWVJbmRleDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjQpO1xuICAgICAgICBsZXQgZnJhbWVOYW1lOiBzdHJpbmcgPSAnZm9vZF8nICsgZnJhbWVJbmRleCArICcucG5nJztcblxuICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVOYW1lXTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdwaXhpLmpzJztcbmltcG9ydCAncGl4aS1wYXJ0aWNsZXMnO1xuXG5pbXBvcnQgRm9vZCBmcm9tICcuL2Zvb2QnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCBTbGljZVBhcnRpY2xlcyBmcm9tICcuL3NsaWNlcGFydGljbGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZE1hbmFnZXIgZXh0ZW5kcyBDb250YWluZXIge1xuIFxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBkaWZmaWN1bHR5U3BhY2VCZXR3ZWVuRm9vZHM6IG51bWJlciA9IDIwO1xuICAgIGRpZmZpY3VsdHlTdGFydGluZ1ZlbFlWYXI6IG51bWJlciA9IDA7XG5cbiAgICBmb29kczogRm9vZFtdID0gW107XG4gICAgZm9vZE9uVG9wOiBGb29kO1xuXG4gICAgZm9vZHNUb1NsaWNlOiBGb29kW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgc3VwZXIoKTtcblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvb2QgPSBuZXcgRm9vZCgpO1xuXG4gICAgICAgICAgICBmb29kLnggPSA1MCArIE1hdGgucmFuZG9tKCkgKiAyMjA7XG4gICAgICAgICAgICBmb29kLnkgPSAtNTA7XG4gICAgICAgICAgICB0aGlzLmZvb2RzLnB1c2goZm9vZCk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoZm9vZCk7XG5cbiAgICAgICAgICAgIGlmIChpID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb29kLnByZXZGb29kID0gdGhpcy5mb29kc1tpIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvb2RPblRvcCA9IHRoaXMuZm9vZHNbdGhpcy5mb29kcy5sZW5ndGggLSAxXTtcblxuICAgICAgICB0aGlzLmZvb2RzWzBdLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RzWzBdLnByZXZGb29kID0gdGhpcy5mb29kT25Ub3A7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2sgKGRlbHRhOiBudW1iZXIsIGhlcm86IEhlcm8pOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmZvb2RzLmZvckVhY2goZm9vZCA9PiB7XG4gICAgICAgICAgICBmb29kLnRpY2soZGVsdGEsIDAuMDIpO1xuXG4gICAgICAgICAgICBsZXQgeTE6IG51bWJlciA9IGhlcm8ueSArIGhlcm8uY29sbGlzaW9uUmVjdC55ICsgaGVyby5jb2xsaXNpb25SZWN0LmhlaWdodDtcbiAgICAgICAgICAgIGlmIChmb29kLnkgPiB5MSAmJiAhZm9vZC5tYXJrZWRBc01pc3NlZCl7XG4gICAgICAgICAgICAgICAgZm9vZC5tYXJrZWRBc01pc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbmV3IFNsaWNlUGFydGljbGVzKHRoaXMsIGZvb2QueCwgZm9vZC55LCAxLjUsIDAuNSwgJyNmZjAwMDAnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlT25TdGFydChmb29kKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Zvb2QtbWlzc2VkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhZm9vZC5mYWxsaW5nICYmIGZvb2QucHJldkZvb2QuZmFsbGluZyAmJiBmb29kLnByZXZGb29kLnkgLSBmb29kLnkgPiB0aGlzLmRpZmZpY3VsdHlTcGFjZUJldHdlZW5Gb29kcyl7XG4gICAgICAgICAgICAgICAgZm9vZC52eSA9ICBNYXRoLnJhbmRvbSgpICogdGhpcy5kaWZmaWN1bHR5U3RhcnRpbmdWZWxZVmFyO1xuICAgICAgICAgICAgICAgIGZvb2QuZmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5U3RhcnRpbmdWZWxZVmFyICs9IDAuMDE7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5U3BhY2VCZXR3ZWVuRm9vZHMgLT0gMC4wMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eVNwYWNlQmV0d2VlbkZvb2RzID0gTWF0aC5tYXgoMTAsIHRoaXMuZGlmZmljdWx0eVNwYWNlQmV0d2VlbkZvb2RzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvb2QubWFya2VkVG9TbGljZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgeTA6IG51bWJlciA9IGhlcm8ueSArIGhlcm8uY29sbGlzaW9uUmVjdC55O1xuICAgICAgICAgICAgICAgIGxldCB5MTogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0LnkgKyBoZXJvLmNvbGxpc2lvblJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmKGZvb2QueSA+PSAoeTAgKyB5MSkvMikge1xuICAgICAgICAgICAgICAgICAgICBuZXcgU2xpY2VQYXJ0aWNsZXModGhpcywgZm9vZC54LCBmb29kLnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VPblN0YXJ0KGZvb2QpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZm9vZC1zbGljZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgLy8vIHRoaXMuY2hlY2tDb2xsaXNpb25zV2l0aEhlcm8oaGVybyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQ29sbGlzaW9uc1dpdGhIZXJvIChoZXJvOiBIZXJvKTogdm9pZCB7XG4gICAgICAgIGxldCB4MDogbnVtYmVyID0gaGVyby54ICsgaGVyby5jb2xsaXNpb25SZWN0Lng7XG4gICAgICAgIGxldCB5MDogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0Lnk7XG4gICAgICAgIGxldCB4MTogbnVtYmVyID0gaGVyby54ICsgaGVyby5jb2xsaXNpb25SZWN0LnggKyBoZXJvLmNvbGxpc2lvblJlY3Qud2lkdGg7XG4gICAgICAgIGxldCB5MTogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0LnkgKyBoZXJvLmNvbGxpc2lvblJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZm9vZHMuZm9yRWFjaChmb29kID0+IHtcbiAgICAgICAgICAgIGlmIChmb29kLnggPiB4MCAmJiBmb29kLnggPCB4MSAmJiBmb29kLnkgPiB5MCAmJiBmb29kLnkgPCB5MSkge1xuICAgICAgICAgICAgICAgIGhlcm8uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBmb29kLm1hcmtlZFRvU2xpY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxhY2VPblN0YXJ0IChmb29kOiBGb29kKTogdm9pZCB7XG4gICAgICAgIGZvb2QucmVzZXQoKTtcblxuICAgICAgICBmb29kLnggPSA1MCArIE1hdGgucmFuZG9tKCkgKiAyMjA7XG4gICAgICAgIGZvb2QueSA9IC01MDtcblxuICAgICAgICBmb29kLnByZXZGb29kID0gdGhpcy5mb29kT25Ub3A7XG4gICAgICAgIHRoaXMuZm9vZE9uVG9wID0gZm9vZDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAncGl4aS5qcyc7XG5cbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSwgQmFjaywgU2luZSB9IGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJPdmVybGF5IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBnYW1lT3ZlclRleHQ6IFRleHQ7XG4gICAgdGFwVG9QbGF5VGV4dDogVGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgc3R5bGUuZmlsbCA9IDB4MDAwMDAwO1xuICAgICAgICBzdHlsZS5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICBzdHlsZS5zdHJva2UgPSAweGZmZmZmZjtcbiAgICAgICAgc3R5bGUuc3Ryb2tlVGhpY2tuZXNzID0gNjtcbiAgICAgICAgc3R5bGUuZm9udFNpemUgPSA1MDtcbiAgICAgICAgc3R5bGUubWl0ZXJMaW1pdCA9IDM7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQgPSBuZXcgVGV4dCgnR0FNRSBPVkVSJywgc3R5bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5nYW1lT3ZlclRleHQpO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LmFscGhhID0gMDtcblxuICAgICAgICBjb25zdCBzdHlsZTIgPSBuZXcgUElYSS5UZXh0U3R5bGUoe30pO1xuXG4gICAgICAgIHN0eWxlMi5maWxsID0gMHgwMDAwMDA7XG4gICAgICAgIHN0eWxlMi5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICBzdHlsZTIuc3Ryb2tlID0gMHhmZmZmZmY7XG4gICAgICAgIHN0eWxlMi5zdHJva2VUaGlja25lc3MgPSAwO1xuICAgICAgICBzdHlsZTIuZm9udFNpemUgPSAyMDtcbiAgICAgICAgc3R5bGUyLm1pdGVyTGltaXQgPSAzO1xuXG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dCA9IG5ldyBUZXh0KCdUYXAgdG8gcGxheSBhZ2FpbiEnLCBzdHlsZTIpO1xuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQuYW5jaG9yLnNldCgwLjUpO1xuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQueSA9IDUwO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGFwVG9QbGF5VGV4dCk7XG5cbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0LmFscGhhID0gMDtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdyAoY2I6ICgpPT52b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnkgLT0gMjAwO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnNjYWxlLnNldCgwLjc1KTtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMuZ2FtZU92ZXJUZXh0LCAwLjMsIHthbHBoYTogMX0pO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy5nYW1lT3ZlclRleHQsIDEsIHt5OiAwLCBlYXNlOiBCYWNrLmVhc2VPdXR9KTtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMuZ2FtZU92ZXJUZXh0LnNjYWxlLCAwLjUsIHt4OiAxLCB5OjEsIGVhc2U6IEJhY2suZWFzZU91dH0pLmRlbGF5KDAuNSk7XG5cbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0LnggPSAzMDA7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLnRhcFRvUGxheVRleHQsIDAuMjUsIHthbHBoYTogMX0pLmRlbGF5KDEuMTUpXG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLnRhcFRvUGxheVRleHQsIDAuNjUsIHt4OiAwLCBlYXNlOiBCYWNrLmVhc2VPdXR9KVxuICAgICAgICAuY2FsbChjYikuZGVsYXkoMSlcbiAgICAgICAgXG4gICAgXG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSwgQ29udGFpbmVyLCBQb2ludCB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCBGb29kTWFuYWdlciBmcm9tICcuL2Zvb2RtYW5hZ2VyJztcbmltcG9ydCBIZWFsdGhCYXIgZnJvbSAnLi9oZWFsdGhiYXInO1xuaW1wb3J0IFBvaW50c0Rpc3BsYXkgZnJvbSAnLi9wb2ludHNkaXNwbGF5JztcbmltcG9ydCBTY3JlZW5FZmZlY3RzIGZyb20gJy4vc2NyZWVuZWZmZWN0JztcbmltcG9ydCBHYW1lT3Zlck92ZXJsYXkgZnJvbSAnLi9nYW1lb3Zlcm92ZXJsYXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGxpdmVzOiBudW1iZXIgPSAyO1xuICAgIHBvaW50czogbnVtYmVyID0gMDtcblxuICAgIGdhbWVFbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNhblJlc3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGJhY2tncm91bmQ6IFNwcml0ZTtcbiAgICBoZXJvOiBIZXJvO1xuICAgIGZvb2RNYW5hZ2VyOiBGb29kTWFuYWdlcjtcbiAgICBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcbiAgICBwb2ludHNEaXNwbGF5OiBQb2ludHNEaXNwbGF5O1xuICAgIHNjcmVlbkVmZmVjdHM6IFNjcmVlbkVmZmVjdHM7XG4gICAgZ2FtZU92ZXJPdmVybGF5OiBHYW1lT3Zlck92ZXJsYXk7XG5cbiAgICByZXN0YXJ0Q2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocmVzdGFydENhbGxiYWNrOiBGdW5jdGlvbikgeyBcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnJlc3RhcnRDYWxsYmFjayA9IHJlc3RhcnRDYWxsYmFjaztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBTcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbJ2JhY2tncm91bmRfYS5wbmcnXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5vbigncG9pbnRlcm1vdmUnLCB0aGlzLm9uUG9pbnRlck1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5vbigncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmhlcm8pO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIgPSBuZXcgRm9vZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvb2RNYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5vbignZm9vZC1taXNzZWQnLCB0aGlzLm9uRm9vZE1pc3NlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5vbignZm9vZC1zbGljZWQnLCB0aGlzLm9uRm9vZFNsaWNlZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmhlYWx0aEJhcik7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIueCA9IDU7XG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnkgPSA1O1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheSA9IG5ldyBQb2ludHNEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wb2ludHNEaXNwbGF5KTtcblxuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkueCA9IDMyMCAtIDU7XG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS55ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5ID0gbmV3IEdhbWVPdmVyT3ZlcmxheSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ2FtZU92ZXJPdmVybGF5KTtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyT3ZlcmxheS54ID0gMzIwLzI7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnkgPSA0ODAvMiAtIDEwMDtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMgPSBuZXcgU2NyZWVuRWZmZWN0cyh0aGlzLCAzMjAsIDQ4MCwgMHhmZjAwMDApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuRWZmZWN0cyk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZhZGVPdXQoMHgwMDAwMDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qb2ludGVyTW92ZSAoZTogUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50KSB7XG5cbiAgICAgICAgaWYodGhpcy5nYW1lRW5kZWQpIHJldHVybjtcblxuICAgICAgICBsZXQgcG9zOiBQb2ludCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgICAgIFxuXG4gICAgICAgIHBvcy54ID0gTWF0aC5tYXgoTWF0aC5taW4oMzIwLCBwb3MueCksIDApO1xuICAgICAgICBwb3MueSA9IE1hdGgubWF4KE1hdGgubWluKDQ4MCwgcG9zLnkpLCAwKTtcblxuICAgICAgICB0aGlzLmhlcm8udXBkYXRlVGFyZ2V0UG9zaXRpb24ocG9zLngpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qb2ludGVyRG93biAoZTogUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jYW5SZXN0YXJ0KXtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FuUmVzdGFydCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6IG51bWJlcikgXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRlbHRhKTtcbiAgICAgICAgdGhpcy5oZXJvLnRpY2soZGVsdGEpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLnRpY2soZGVsdGEsIHRoaXMuaGVybyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5jaGVja0NvbGxpc2lvbnNXaXRoSGVybyh0aGlzLmhlcm8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Gb29kTWlzc2VkICgpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5nYW1lRW5kZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5saXZlcyAtPSAxO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnNldEhlYWx0aCh0aGlzLmxpdmVzIC8gMiAqIDEwMCk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZsdXNoKDB4ZmYwMDAwKTtcblxuICAgICAgICBpZiAodGhpcy5saXZlcyA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLm9uR2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Gb29kU2xpY2VkICgpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5nYW1lRW5kZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBvaW50cyArPSAxMDtcblxuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkuc2V0UG9pbnRzKHRoaXMucG9pbnRzKTtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMuc2hha2UoMyk7XG4gICAgfSBcblxuICAgIHB1YmxpYyBvbkdhbWVPdmVyICgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnNob3coKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5SZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnRHYW1lICgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm9mZigncG9pbnRlcm1vdmUnLCB0aGlzLm9uUG9pbnRlck1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5vZmYoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKCdmb29kLW1pc3NlZCcsIHRoaXMub25Gb29kTWlzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLm9mZignZm9vZC1zbGljZWQnLCB0aGlzLm9uRm9vZFNsaWNlZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMuY2xlYXIoKTtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMuZmFkZUluKDB4MDAwMDAwLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRDYWxsYmFjaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlLCBDb250YWluZXIgfSBmcm9tICdwaXhpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoQmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBcbiAgICBkZWNvcmF0aW9uOiBTcHJpdGU7XG4gICAgYmFyOiBTcHJpdGU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRlY29yYXRpb24gPSBuZXcgU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlWydoZWFsdGhfYmFyX2RlY29yYXRpb24ucG5nJ10pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZGVjb3JhdGlvbik7XG5cbiAgICAgICAgdGhpcy5iYXIgPSBuZXcgU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlWydoZWFsdGhfYmFyLnBuZyddKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJhcik7XG4gICAgICAgIHRoaXMuYmFyLnggPSAxNDtcblxuICAgICAgICB0aGlzLnNldEhlYWx0aCgxMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIZWFsdGgocGVyY2VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHBlcmNlbnQpKTtcbiAgICAgICAgdGhpcy5iYXIudGV4dHVyZS50cmltLndpZHRoID0gdGhpcy5iYXIudGV4dHVyZS5vcmlnLndpZHRoICogcGVyY2VudCAvIDEwMDtcbiAgICAgICAgdGhpcy5iYXIudGV4dHVyZS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5iYXIudGV4dHVyZS5yZXF1aXJlc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUuX3VwZGF0ZVV2cygpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250YWluZXIsIFRleHR1cmUgfSBmcm9tICdwaXhpLmpzJztcblxuZW51bSBTdGF0ZSB7XG4gICAgSWRsZSxcbiAgICBXYWxrLFxuICAgIFNsaWNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBjdXJyZW50U3RhdGU6IFN0YXRlID0gU3RhdGUuSWRsZTtcblxuICAgIGlkbGVBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICB3YWxrQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgc2xpY2VBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcblxuICAgIGFuaW1zOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZVtdID0gW107XG5cbiAgICB0YXJnZXRYOiBudW1iZXIgPSAxNjA7XG5cbiAgICBpc1NsaWNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxhc3RUYXJnZXRVcGRhdGU6IG51bWJlciA9IDA7XG5cbiAgICBjb2xsaXNpb25SZWN0OiBQSVhJLlJlY3RhbmdsZSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtMzAsIC0xMCwgNjAsIDQwKTtcbiAgICBkZWJ1Z0NvbGxpc2lvbkdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkbGVBbmltID0gdGhpcy5jcmVhdGVBbmltYXRlZFNwcml0ZSgnaWRsZScsIFswLCAxLCAyLCAzXSk7XG4gICAgICAgIHRoaXMud2Fsa0FuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKCd3YWxrJywgWzAsIDEsIDIsIDMsIDRdKTtcbiAgICAgICAgdGhpcy5zbGljZUFuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKCdzbGljZScsIFswLCAxLCAyLCAyLCAyLCAyLCAyXSk7XG5cbiAgICAgICAgdGhpcy53YWxrQW5pbS5hbmltYXRpb25TcGVlZCA9IDAuNjtcblxuICAgICAgICB0aGlzLnNsaWNlQW5pbS5sb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2xpY2VBbmltLmFuaW1hdGlvblNwZWVkID0gMC40O1xuXG4gICAgICAgIHRoaXMuc2xpY2VBbmltLm9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiWmFrb8WEY3pvbmEhXCIpO1xuICAgICAgICAgICAgdGhpcy5pc1NsaWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuSWRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuXG4gICAgICAgIHRoaXMueCA9IDE2MDtcbiAgICAgICAgdGhpcy55ID0gMzUwO1xuXG4gICAgICAgIHRoaXMuZGVidWdDb2xsaXNpb25HcmFwaGljcy5iZWdpbkZpbGwoMHhmZjAwMDAsIDAuNCk7XG4gICAgICAgIHRoaXMuZGVidWdDb2xsaXNpb25HcmFwaGljcy5kcmF3UmVjdCh0aGlzLmNvbGxpc2lvblJlY3QueCwgXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvblJlY3QueSwgdGhpcy5jb2xsaXNpb25SZWN0LndpZHRoLCB0aGlzLmNvbGxpc2lvblJlY3QuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy5hZGRDaGlsZCh0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KS8zO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hhbmdlVG9JZGxlV2hpbGVXYWxrKCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuV2Fsayk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSB7XG4gICAgICAgIGxldCBub3RTbGljaW5nID0gIXRoaXMuaXNTbGljaW5nO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuV2FsaztcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5pc09uVGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmxhc3RUYXJnZXRVcGRhdGUgKyAyNTAgPCBEYXRlLm5vdygpO1xuXG4gICAgICAgIHJldHVybiBub3RTbGljaW5nICYmIHN0YXRlICYmIHBvc2l0aW9uICYmIHRpbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG91bGRDaGFuZ2VUb1dhbGtXaGlsZUlkbGUoKSB7XG4gICAgICAgIGxldCBub3RTbGljaW5nID0gIXRoaXMuaXNTbGljaW5nO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuSWRsZTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gIXRoaXMuaXNPblRhcmdldFBvc2l0aW9uKCk7XG4gICAgICAgIC8vbGV0IHRpbWUgPSB0aGlzLmxhc3RUYXJnZXRVcGRhdGUgKyAxMDAgPCBEYXRlLm5vdygpO1xuXG4gICAgICAgIHJldHVybiBub3RTbGljaW5nICYmIHN0YXRlICYmIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUYXJnZXRQb3NpdGlvbiAoeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IHg7XG4gICAgICAgIHRoaXMubGFzdFRhcmdldFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLlNsaWNlKTtcbiAgICAgICAgdGhpcy5pc1NsaWNpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNPblRhcmdldFBvc2l0aW9uICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHRoaXMudGFyZ2V0WCkgPCAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQW5pbWF0ZWRTcHJpdGUobmFtZTpzdHJpbmcsIGZyYW1lSW5kZXhlczogbnVtYmVyW10pOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSB7XG4gICAgICAgIGxldCBmcmFtZXM6VGV4dHVyZVtdID0gW107XG5cbiAgICAgICAgZnJhbWVJbmRleGVzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIGxldCBmcmFtZU5hbWUgPSAnaGVyb18nICsgbmFtZSArICdfJyArIHZhbCArICcucG5nJztcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW2ZyYW1lTmFtZV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYW5pbWF0ZWRTcHJpdGU6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlID0gbmV3IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKGZyYW1lcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChhbmltYXRlZFNwcml0ZSk7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLnBsYXkoKTtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjI7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICB0aGlzLmFuaW1zLnB1c2goYW5pbWF0ZWRTcHJpdGUpO1xuXG4gICAgICAgIHJldHVybiBhbmltYXRlZFNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlLklkbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLmlkbGVBbmltKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuU2xpY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLnNsaWNlQW5pbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IFN0YXRlLldhbGspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLndhbGtBbmltKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUFuaW1hdGlvbiAoYW5pbWF0aW9uOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1zLmZvckVhY2goYW5pbSA9PiB7XG4gICAgICAgICAgICBpZihhbmltID09PSBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBhbmltLmdvdG9BbmRQbGF5KDApO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhbmltLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICdwaXhpLmpzJztcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9nYW1lc2NlbmUnO1xuXG5uZXcgY2xhc3MgTWFpbiB7XG4gICAgYXBwOiBBcHBsaWNhdGlvbjtcblxuICAgIHNldHRpbmdzOiBBcHBsaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwMDAwMDAsXG4gICAgICAgIGFudGlhbGlhczogZmFsc2VcbiAgICB9O1xuXG4gICAgZ2FtZVNjZW5lOiBHYW1lU2NlbmU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgUElYSS5sb2FkZXJcbiAgICAgICAgICAgIC5hZGQoJ2ltYWdlcy9hdGxhc2VzLmpzb24nKVxuICAgICAgICAgICAgLmxvYWQodGhpcy5sb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgbG9hZGVkKGxvYWRlcjpQSVhJLmxvYWRlcnMuTG9hZGVyLCByZXNvdXJjZXM6IFBJWEkubG9hZGVycy5SZXNvdXJjZURpY3Rpb25hcnkpIHtcblxuICAgICAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbigzMjAsIDQ4MCwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XG5cbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5nYW1lU2NlbmUpO1xuXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGRlbHRhOiBudW1iZXIpPT57XG4gICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS50aWNrKGRlbHRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLnJlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5nYW1lU2NlbmUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAncGl4aS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50c0Rpc3BsYXkgZXh0ZW5kcyBUZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIFxuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5maWxsID0gMHhmZmZmZmY7XG4gICAgICAgIHRoaXMuc3R5bGUuYWxpZ24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnN0eWxlLnN0cm9rZSA9IDB4MDAwMDAwO1xuICAgICAgICB0aGlzLnN0eWxlLnN0cm9rZVRoaWNrbmVzcyA9IDU7XG4gICAgICAgIHRoaXMuc3R5bGUuZm9udFNpemUgPSAyMDtcbiAgICBcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDEsIDApO1xuXG4gICAgICAgIHRoaXMudGV4dCA9ICcwMDAwJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9pbnRzIChwb2ludHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHQgPSBwb2ludHMgKyAnJztcblxuICAgICAgICBpZihwb2ludHMgPCAxMCkgdGhpcy50ZXh0ID0gJzAwMCcgKyBwb2ludHM7XG4gICAgICAgIGVsc2UgaWYocG9pbnRzIDwgMTAwKSB0aGlzLnRleHQgPSAnMDAnICsgcG9pbnRzO1xuICAgICAgICBlbHNlIGlmKHBvaW50cyA8IDEwMDApIHRoaXMudGV4dCA9ICcwJyArIHBvaW50cztcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlLCBEaXNwbGF5T2JqZWN0IH0gZnJvbSAncGl4aS5qcyc7XG5cbmltcG9ydCB7IFRpbWVsaW5lTGl0ZSB9IGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuRWZmZWN0cyBleHRlbmRzIFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBzaGFrZVRpbWVsaW5lOiBUaW1lbGluZUxpdGUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgcHJpdmF0ZSBmbHVzaFRpbWVsaW5lOiBUaW1lbGluZUxpdGUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICBwcml2YXRlIHNoYWtlVmlldzogRGlzcGxheU9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHNoYWtlVmlldzogRGlzcGxheU9iamVjdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHsgXG4gICAgICAgIHN1cGVyKFBJWEkuVGV4dHVyZS5XSElURSk7XG5cbiAgICAgICAgdGhpcy5zY2FsZS5zZXQod2lkdGgvdGhpcy50ZXh0dXJlLndpZHRoLCBoZWlnaHQvdGhpcy50ZXh0dXJlLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG5cbiAgICAgICAgdGhpcy5zaGFrZVZpZXcgPSBzaGFrZVZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGZsdXNoIChjb2xvcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGludCA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuYWxwaGEgPSAuNTtcblxuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLnRvKHRoaXMsIDAuMiwge2FscGhhOiAwfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNoYWtlIChzdHJlbmd0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuXG4gICAgICAgIGxldCBhbXBYOiBudW1iZXIgPSBNYXRoLmNvcyhhbmdsZSkgKiBzdHJlbmd0aDtcbiAgICAgICAgbGV0IGFtcFk6IG51bWJlciA9IE1hdGguc2luKGFuZ2xlKSAqIHN0cmVuZ3RoO1xuXG4gICAgICAgIHRoaXMuc2hha2VUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLnNoYWtlVGltZWxpbmVcbiAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiBhbXBYLCB5OiBhbXBZfSlcbiAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiAtYW1wWCwgeTogLWFtcFl9KVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IGFtcFgsIHk6IGFtcFl9KVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IC1hbXBYLCB5OiAtYW1wWX0pXG4gICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogMCwgeTogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWRlSW4gKGNvbG9yOiBudW1iZXIsIGNiPzogKCgpID0+IHZvaWQpKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGludCA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC43NSwge2FscGhhOiAxfSk7XG5cbiAgICAgICAgaWYgKGNiKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2FsbChjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZU91dCAoY29sb3I6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmFscGhhID0gMTtcblxuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLnRvKHRoaXMsIDAuNzUsIHthbHBoYTogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhciAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hha2VUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJ3BpeGktcGFydGljbGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpY2VQYXJ0aWNsZXMgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBQSVhJLkNvbnRhaW5lciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIFxuICAgICAgICBzY2FsZU11bHRpcDogbnVtYmVyID0gMSwgc3BlZWRNdWx0aXA6IG51bWJlciA9IDEsIGNvbG9yOiBzdHJpbmcgPSAnI2ZmZmZmZicpIHtcbiAgICAgICAgbGV0IHNldHRpbmdzOiBvYmplY3QgPSB7XG4gICAgICAgICAgICBhbHBoYToge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxuICAgICAgICAgICAgICAgIGVuZDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAuNiAqIHNjYWxlTXVsdGlwLFxuICAgICAgICAgICAgICAgIGVuZDogMC4wMSAqIHNjYWxlTXVsdGlwLFxuICAgICAgICAgICAgICAgIG1pbmltdW1TY2FsZU11bHRpcGxpZXI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBjb2xvcixcbiAgICAgICAgICAgICAgICBlbmQ6IGNvbG9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogMzUwICogc3BlZWRNdWx0aXAsXG4gICAgICAgICAgICAgICAgZW5kOiAwLFxuICAgICAgICAgICAgICAgIG1pbmltdW1TcGVlZE11bHRpcGxpZXI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEwMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXhTcGVlZDogMCxcbiAgICAgICAgICAgIHN0YXJ0Um90YXRpb246IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub1JvdGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHJvdGF0aW9uU3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlmZXRpbWU6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAuMyxcbiAgICAgICAgICAgICAgICBtYXg6IDAuNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGZyZXF1ZW5jeTogMC4wMDEsXG4gICAgICAgICAgICBlbWl0dGVyTGlmZXRpbWU6IDAuMDEsXG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXM6IDEwLFxuICAgICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkQXRCYWNrOiBmYWxzZSxcbiAgICAgICAgICAgIHNwYXduVHlwZTogXCJwb2ludFwiXG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKHZpZXcsIFtQSVhJLlRleHR1cmUuV0hJVEVdLCBzZXR0aW5ncyk7XG5cbiAgICAgICAgdGhpcy5hdXRvVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==