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
        _this.sprite = new pixi_js_1.Sprite(PIXI.Texture.EMPTY);
        _this.addChild(_this.sprite);
        _this.reset();
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
        this.cumulTime = Math.random() * 100;
        this.rotationSpeed = Math.random() * 0.1 + 0.1;
        this.rotationDirection = Math.random() > 0.5 ? -1 : 1;
        this.vy = 0;
        this.falling = false;
        this.markedToSlice = false;
        this.markedAsMissed = false;
        this.chooseRandomTexture();
    };
    Food.prototype.chooseRandomTexture = function () {
        var frameIndex = Math.floor(Math.random() * 64);
        var frameName = "food_" + frameIndex + ".png";
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
var food_1 = __webpack_require__(/*! ./food */ "./src_ts/food.ts");
var sliceparticles_1 = __webpack_require__(/*! ./sliceparticles */ "./src_ts/sliceparticles.ts");
var FoodManager = (function (_super) {
    __extends(FoodManager, _super);
    function FoodManager() {
        var _this = _super.call(this) || this;
        _this.active = true;
        _this.distBetweenSpawns = 20;
        _this.startingVelVariance = 0;
        _this.gravity = 0.02;
        _this.foods = [];
        _this.foodsToSlice = [];
        for (var i = 0; i < 30; i++) {
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
        var rect = hero.getGlobalCollisionRect();
        this.foods.forEach(function (food) {
            food.tick(delta, _this.gravity);
            var enoughDist = food.prevFood.y - food.y > _this.distBetweenSpawns;
            if (_this.active && !food.falling && food.prevFood.falling && enoughDist) {
                food.vy = Math.random() * _this.startingVelVariance;
                food.falling = true;
                _this.startingVelVariance += 0.01;
                _this.distBetweenSpawns -= 0.01;
                _this.distBetweenSpawns = Math.max(10, _this.distBetweenSpawns);
            }
            if (food.y > rect.bottom && !food.markedAsMissed) {
                food.markedAsMissed = true;
                var particles = new sliceparticles_1["default"](_this, food.x, food.y, 1.5, 0.5, "#ff0000");
                _this.placeOnStart(food);
                _this.emit("food-missed");
            }
            if (food.markedToSlice) {
                if (food.y >= (rect.top + rect.bottom) / 2) {
                    var particles = new sliceparticles_1["default"](_this, food.x, food.y);
                    _this.placeOnStart(food);
                    _this.emit("food-sliced");
                }
            }
        });
    };
    FoodManager.prototype.checkCollisionsWithHero = function (hero) {
        var rect = hero.getGlobalCollisionRect();
        this.foods.forEach(function (food) {
            if (food.x > rect.left && food.x < rect.right && food.y > rect.top && food.y < rect.bottom) {
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
        style.align = "center";
        style.stroke = 0xffffff;
        style.strokeThickness = 6;
        style.fontSize = 40;
        style.miterLimit = 3;
        _this.gameOverText = new pixi_js_1.Text("GAME OVER", style);
        _this.gameOverText.anchor.set(0.5);
        _this.addChild(_this.gameOverText);
        _this.gameOverText.alpha = 0;
        var style2 = new PIXI.TextStyle({});
        style2.fill = 0x000000;
        style2.align = "center";
        style2.stroke = 0xffffff;
        style2.strokeThickness = 0;
        style2.fontSize = 20;
        style2.miterLimit = 3;
        _this.tapToPlayText = new pixi_js_1.Text("Tap to play again!", style2);
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
var gameoveroverlay_1 = __webpack_require__(/*! ./gameoveroverlay */ "./src_ts/gameoveroverlay.ts");
var healthbar_1 = __webpack_require__(/*! ./healthbar */ "./src_ts/healthbar.ts");
var pointsdisplay_1 = __webpack_require__(/*! ./pointsdisplay */ "./src_ts/pointsdisplay.ts");
var screeneffect_1 = __webpack_require__(/*! ./screeneffect */ "./src_ts/screeneffect.ts");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(restartCallback) {
        var _this = _super.call(this) || this;
        _this.lives = 2;
        _this.points = 0;
        _this.gameEnded = false;
        _this.canRestart = false;
        _this.restartCallback = restartCallback;
        _this.background = new pixi_js_1.Sprite(PIXI.utils.TextureCache["background_a.png"]);
        _this.addChild(_this.background);
        _this.background.interactive = true;
        _this.background.on("pointermove", _this.onPointerMove.bind(_this));
        _this.background.on("pointerdown", _this.onPointerDown.bind(_this));
        _this.hero = new hero_1["default"]();
        _this.addChild(_this.hero);
        _this.foodManager = new foodmanager_1["default"]();
        _this.addChild(_this.foodManager);
        _this.foodManager.on("food-missed", _this.onFoodMissed.bind(_this));
        _this.foodManager.on("food-sliced", _this.onFoodSliced.bind(_this));
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
    GameScene.prototype.tick = function (delta) {
        this.hero.tick(delta);
        this.foodManager.tick(delta, this.hero);
        if (this.gameEnded) {
            return;
        }
        this.foodManager.checkCollisionsWithHero(this.hero);
    };
    GameScene.prototype.onFoodMissed = function () {
        if (this.gameEnded) {
            return;
        }
        this.lives -= 1;
        this.healthBar.setHealth(this.lives / 2 * 100);
        this.screenEffects.flush(0xff0000);
        this.screenEffects.shake(5);
        if (this.lives === 0) {
            this.onGameOver();
        }
    };
    GameScene.prototype.onFoodSliced = function () {
        if (this.gameEnded) {
            return;
        }
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
        this.background.off("pointermove", this.onPointerMove.bind(this));
        this.background.off("pointerdown", this.onPointerDown.bind(this));
        this.foodManager.off("food-missed", this.onFoodMissed.bind(this));
        this.foodManager.off("food-sliced", this.onFoodSliced.bind(this));
        this.screenEffects.clear();
        this.screenEffects.fadeIn(0x000000, function () {
            _this.restartCallback();
        });
    };
    GameScene.prototype.onPointerMove = function (e) {
        if (this.gameEnded) {
            return;
        }
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
        _this.decoration = new pixi_js_1.Sprite(PIXI.utils.TextureCache["health_bar_decoration.png"]);
        _this.addChild(_this.decoration);
        _this.bar = new pixi_js_1.Sprite(PIXI.utils.TextureCache["health_bar.png"]);
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
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.isSlicing = false;
        _this.currentState = State.Idle;
        _this.anims = [];
        _this.targetX = 160;
        _this.lastTargetUpdate = 0;
        _this.localCollisionRect = new PIXI.Rectangle(-30, -10, 60, 40);
        _this.debugCollisionGraphics = new PIXI.Graphics();
        _this.idleAnim = _this.createAnimatedSprite("idle", [0, 1, 2, 3]);
        _this.walkAnim = _this.createAnimatedSprite("walk", [0, 1, 2, 3, 4]);
        _this.sliceAnim = _this.createAnimatedSprite("slice", [0, 1, 2, 2, 2, 2, 2]);
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
        _this.debugCollisionGraphics.drawRect(_this.localCollisionRect.x, _this.localCollisionRect.y, _this.localCollisionRect.width, _this.localCollisionRect.height);
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
    Hero.prototype.updateTargetPosition = function (x) {
        this.targetX = x;
        this.lastTargetUpdate = Date.now();
    };
    Hero.prototype.slice = function () {
        this.setState(State.Slice);
        this.isSlicing = true;
    };
    Hero.prototype.getGlobalCollisionRect = function () {
        return new PIXI.Rectangle(this.x + this.localCollisionRect.x, this.y + this.localCollisionRect.y, this.localCollisionRect.width, this.localCollisionRect.height);
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
    Hero.prototype.isOnTargetPosition = function () {
        return Math.abs(this.x - this.targetX) < 1;
    };
    Hero.prototype.createAnimatedSprite = function (name, frameIndexes) {
        var frames = [];
        frameIndexes.forEach(function (val) {
            var frameName = "hero_" + name + "_" + val + ".png";
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
var Main = (function () {
    function Main() {
        this.settings = {
            antialias: false,
            backgroundColor: 0x000000
        };
        PIXI.loader
            .add("images/atlases.json")
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
var main = new Main();


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
        _this.style.align = "right";
        _this.style.stroke = 0x000000;
        _this.style.strokeThickness = 5;
        _this.style.fontSize = 20;
        _this.anchor.set(1, 0);
        _this.text = "0000";
        return _this;
    }
    PointsDisplay.prototype.setPoints = function (points) {
        this.text = points + "";
        if (points < 10) {
            this.text = "000" + points;
        }
        else if (points < 100) {
            this.text = "00" + points;
        }
        else if (points < 1000) {
            this.text = "0" + points;
        }
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
        if (color === void 0) { color = "#ffffff"; }
        var _this = this;
        var settings = {
            acceleration: {
                x: 0,
                y: 1000
            },
            addAtBack: false,
            alpha: {
                end: 1,
                start: 1
            },
            blendMode: "normal",
            color: {
                end: color,
                start: color
            },
            emitterLifetime: 0.01,
            frequency: 0.001,
            lifetime: {
                max: 0.4,
                min: 0.3
            },
            maxParticles: 10,
            maxSpeed: 0,
            noRotation: false,
            pos: {
                x: x,
                y: y
            },
            rotationSpeed: {
                max: 0,
                min: 0
            },
            scale: {
                end: 0.01 * scaleMultip,
                minimumScaleMultiplier: 1,
                start: 0.6 * scaleMultip
            },
            spawnType: "point",
            speed: {
                end: 0,
                minimumSpeedMultiplier: 1,
                start: 350 * speedMultip
            },
            startRotation: {
                max: 360,
                min: 0
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2RtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9nYW1lb3Zlcm92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVzY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvaGVhbHRoYmFyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyY190cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyY190cy9wb2ludHNkaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyY190cy9zY3JlZW5lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL3NsaWNlcGFydGljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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O1lBQ1osS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxJQUFJLEdBQUcsV0FBVztnQkFDdkIsc0JBQXNCLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxFQUFFLEdBQUcsR0FBRyxXQUFXO2FBQUU7WUFDOUIsU0FBUyxFQUFFLE9BQU87WUFDbEIsS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxDQUFDO2dCQUNOLHNCQUFzQixFQUFFLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxHQUFHLEdBQUcsV0FBVzthQUFFO1lBQzlCLGFBQWEsRUFBRTtnQkFDWCxHQUFHLEVBQUUsR0FBRztnQkFDUixHQUFHLEVBQUUsQ0FBQzthQUFFO1NBR2YsQ0FBQztRQUNGLDBCQUFNLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQUM7UUFFNUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0lBQzNCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0FqRDJDLHdCQUFPLEdBaURsRCIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjX3RzL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb2QgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHB1YmxpYyB2eTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZmFsbGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG1hcmtlZFRvU2xpY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBtYXJrZWRBc01pc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHByZXZGb29kOiBGb29kO1xuXG4gICAgcHVibGljIHNwcml0ZTogU3ByaXRlID0gbmV3IFNwcml0ZShQSVhJLlRleHR1cmUuRU1QVFkpO1xuXG4gICAgcHJpdmF0ZSBjdW11bFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIHJvdGF0aW9uU3BlZWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHJvdGF0aW9uRGlyZWN0aW9uOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTogbnVtYmVyLCBncmF2aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmZhbGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZ5ICs9IGdyYXZpdHkgKiBkZWx0YTtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiBkZWx0YTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMucm90YXRpb25EaXJlY3Rpb247XG4gICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uIC09ICh0aGlzLnJvdGF0aW9uU3BlZWQgKiB0aGlzLnJvdGF0aW9uRGlyZWN0aW9uKSAvIDI7XG5cbiAgICAgICAgdGhpcy5jdW11bFRpbWUgKz0gMTtcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gTWF0aC5zaW4odGhpcy5jdW11bFRpbWUgLyAxMCkgKiAwLjMgKyAxLjM7XG4gICAgICAgIHRoaXMuc2NhbGUueSA9IE1hdGguY29zKHRoaXMuY3VtdWxUaW1lIC8gMTUpICogMC4xNSArIDEuMTU7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1bXVsVGltZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAwLjEgKyAwLjE7XG4gICAgICAgIHRoaXMucm90YXRpb25EaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFya2VkVG9TbGljZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hcmtlZEFzTWlzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jaG9vc2VSYW5kb21UZXh0dXJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNob29zZVJhbmRvbVRleHR1cmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZyYW1lSW5kZXg6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDY0KTtcbiAgICAgICAgY29uc3QgZnJhbWVOYW1lOiBzdHJpbmcgPSBcImZvb2RfXCIgKyBmcmFtZUluZGV4ICsgXCIucG5nXCI7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZSA9IFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW2ZyYW1lTmFtZV07XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuY2hvci5zZXQoMC41KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5pbXBvcnQgRm9vZCBmcm9tIFwiLi9mb29kXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi9oZXJvXCI7XG5pbXBvcnQgU2xpY2VQYXJ0aWNsZXMgZnJvbSBcIi4vc2xpY2VwYXJ0aWNsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZE1hbmFnZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBkaXN0QmV0d2VlblNwYXduczogbnVtYmVyID0gMjA7XG4gICAgcHJpdmF0ZSBzdGFydGluZ1ZlbFZhcmlhbmNlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBncmF2aXR5OiBudW1iZXIgPSAwLjAyO1xuXG4gICAgcHJpdmF0ZSBmb29kczogRm9vZFtdID0gW107XG4gICAgcHJpdmF0ZSBmb29kT25Ub3A6IEZvb2Q7XG5cbiAgICBwcml2YXRlIGZvb2RzVG9TbGljZTogRm9vZFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZvb2QgPSBuZXcgRm9vZCgpO1xuXG4gICAgICAgICAgICBmb29kLnggPSA1MCArIE1hdGgucmFuZG9tKCkgKiAyMjA7XG4gICAgICAgICAgICBmb29kLnkgPSAtNTA7XG4gICAgICAgICAgICB0aGlzLmZvb2RzLnB1c2goZm9vZCk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoZm9vZCk7XG5cbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIGZvb2QucHJldkZvb2QgPSB0aGlzLmZvb2RzW2kgLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9vZE9uVG9wID0gdGhpcy5mb29kc1t0aGlzLmZvb2RzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIHRoaXMuZm9vZHNbMF0uZmFsbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZHNbMF0ucHJldkZvb2QgPSB0aGlzLmZvb2RPblRvcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTogbnVtYmVyLCBoZXJvOiBIZXJvKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBoZXJvLmdldEdsb2JhbENvbGxpc2lvblJlY3QoKTtcblxuICAgICAgICB0aGlzLmZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICAgICAgICAgIGZvb2QudGljayhkZWx0YSwgdGhpcy5ncmF2aXR5KTtcblxuICAgICAgICAgICAgLy8gaWYgc2hvdWxkIHNwYXduIGluIGNhc2UgaXQgaXMgbm90IGZhbGxpbmcgY3VycmVudGx5XG4gICAgICAgICAgICBjb25zdCBlbm91Z2hEaXN0OiBib29sZWFuID0gZm9vZC5wcmV2Rm9vZC55IC0gZm9vZC55ID4gdGhpcy5kaXN0QmV0d2VlblNwYXducztcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhZm9vZC5mYWxsaW5nICYmIGZvb2QucHJldkZvb2QuZmFsbGluZyAmJiBlbm91Z2hEaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9vZC52eSA9ICBNYXRoLnJhbmRvbSgpICogdGhpcy5zdGFydGluZ1ZlbFZhcmlhbmNlO1xuICAgICAgICAgICAgICAgIGZvb2QuZmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGluZ1ZlbFZhcmlhbmNlICs9IDAuMDE7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0QmV0d2VlblNwYXducyAtPSAwLjAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0QmV0d2VlblNwYXducyA9IE1hdGgubWF4KDEwLCB0aGlzLmRpc3RCZXR3ZWVuU3Bhd25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgc2hvdWxkIGJlIGNvdW50ZWQgYXMgbWlzc2VkXG4gICAgICAgICAgICBpZiAoZm9vZC55ID4gcmVjdC5ib3R0b20gJiYgIWZvb2QubWFya2VkQXNNaXNzZWQpIHtcbiAgICAgICAgICAgICAgICBmb29kLm1hcmtlZEFzTWlzc2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlczogU2xpY2VQYXJ0aWNsZXMgPSBuZXcgU2xpY2VQYXJ0aWNsZXModGhpcywgZm9vZC54LCBmb29kLnksIDEuNSwgMC41LCBcIiNmZjAwMDBcIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlT25TdGFydChmb29kKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJmb29kLW1pc3NlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgc2hvdWxkIGJlIGFjdHVhbGx5IHNsaWNlZFxuICAgICAgICAgICAgLy8gZG9lc24ndCBoYXBwZW4gZGlyZWN0bHkgb24gY29sbGlzaW9uIGZvciBiZXR0ZXIgdmlzdWFsIGZlZWxpbmdcbiAgICAgICAgICAgIGlmIChmb29kLm1hcmtlZFRvU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWwgc2xpY2UgaW4gdGhlIG1pZGRsZSBvZiBjb2xsaXNpb24gYm94IG9mIGJlbG93XG4gICAgICAgICAgICAgICAgaWYgKGZvb2QueSA+PSAocmVjdC50b3AgKyByZWN0LmJvdHRvbSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlczogU2xpY2VQYXJ0aWNsZXMgPSBuZXcgU2xpY2VQYXJ0aWNsZXModGhpcywgZm9vZC54LCBmb29kLnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VPblN0YXJ0KGZvb2QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJmb29kLXNsaWNlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja0NvbGxpc2lvbnNXaXRoSGVybyhoZXJvOiBIZXJvKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcmVjdCA9IGhlcm8uZ2V0R2xvYmFsQ29sbGlzaW9uUmVjdCgpO1xuXG4gICAgICAgIHRoaXMuZm9vZHMuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZvb2QueCA+IHJlY3QubGVmdCAmJiBmb29kLnggPCByZWN0LnJpZ2h0ICYmIGZvb2QueSA+IHJlY3QudG9wICYmIGZvb2QueSA8IHJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaGVyby5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGZvb2QubWFya2VkVG9TbGljZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGFjZU9uU3RhcnQoZm9vZDogRm9vZCk6IHZvaWQge1xuICAgICAgICBmb29kLnJlc2V0KCk7XG5cbiAgICAgICAgZm9vZC54ID0gNTAgKyBNYXRoLnJhbmRvbSgpICogMjIwO1xuICAgICAgICBmb29kLnkgPSAtNTA7XG5cbiAgICAgICAgZm9vZC5wcmV2Rm9vZCA9IHRoaXMuZm9vZE9uVG9wO1xuICAgICAgICB0aGlzLmZvb2RPblRvcCA9IGZvb2Q7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSBcInBpeGkuanNcIjtcblxuaW1wb3J0IHsgQmFjaywgVGltZWxpbmVMaXRlIH0gZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJPdmVybGF5IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIGdhbWVPdmVyVGV4dDogVGV4dDtcbiAgICBwcml2YXRlIHRhcFRvUGxheVRleHQ6IFRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHt9KTtcblxuICAgICAgICBzdHlsZS5maWxsID0gMHgwMDAwMDA7XG4gICAgICAgIHN0eWxlLmFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgc3R5bGUuc3Ryb2tlID0gMHhmZmZmZmY7XG4gICAgICAgIHN0eWxlLnN0cm9rZVRoaWNrbmVzcyA9IDY7XG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gNDA7XG4gICAgICAgIHN0eWxlLm1pdGVyTGltaXQgPSAzO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0ID0gbmV3IFRleHQoXCJHQU1FIE9WRVJcIiwgc3R5bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5nYW1lT3ZlclRleHQpO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LmFscGhhID0gMDtcblxuICAgICAgICBjb25zdCBzdHlsZTIgPSBuZXcgUElYSS5UZXh0U3R5bGUoe30pO1xuXG4gICAgICAgIHN0eWxlMi5maWxsID0gMHgwMDAwMDA7XG4gICAgICAgIHN0eWxlMi5hbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHN0eWxlMi5zdHJva2UgPSAweGZmZmZmZjtcbiAgICAgICAgc3R5bGUyLnN0cm9rZVRoaWNrbmVzcyA9IDA7XG4gICAgICAgIHN0eWxlMi5mb250U2l6ZSA9IDIwO1xuICAgICAgICBzdHlsZTIubWl0ZXJMaW1pdCA9IDM7XG5cbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0ID0gbmV3IFRleHQoXCJUYXAgdG8gcGxheSBhZ2FpbiFcIiwgc3R5bGUyKTtcbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0LmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0LnkgPSA1MDtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRhcFRvUGxheVRleHQpO1xuXG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dC5hbHBoYSA9IDA7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdyhjYjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC55IC09IDIwMDtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC5zY2FsZS5zZXQoMC43NSk7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLmdhbWVPdmVyVGV4dCwgMC4zLCB7YWxwaGE6IDF9KTtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMuZ2FtZU92ZXJUZXh0LCAxLCB7eTogMCwgZWFzZTogQmFjay5lYXNlT3V0fSk7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLmdhbWVPdmVyVGV4dC5zY2FsZSwgMC41LCB7eDogMSwgeTogMSwgZWFzZTogQmFjay5lYXNlT3V0fSkuZGVsYXkoMC41KTtcblxuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQueCA9IDMwMDtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMudGFwVG9QbGF5VGV4dCwgMC4yNSwge2FscGhhOiAxfSkuZGVsYXkoMS4xNSk7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLnRhcFRvUGxheVRleHQsIDAuNjUsIHt4OiAwLCBlYXNlOiBCYWNrLmVhc2VPdXR9KVxuICAgICAgICAuY2FsbChjYikuZGVsYXkoMSk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFBvaW50LCBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4vaGVyb1wiO1xuXG5pbXBvcnQgRm9vZE1hbmFnZXIgZnJvbSBcIi4vZm9vZG1hbmFnZXJcIjtcbmltcG9ydCBHYW1lT3Zlck92ZXJsYXkgZnJvbSBcIi4vZ2FtZW92ZXJvdmVybGF5XCI7XG5pbXBvcnQgSGVhbHRoQmFyIGZyb20gXCIuL2hlYWx0aGJhclwiO1xuaW1wb3J0IFBvaW50c0Rpc3BsYXkgZnJvbSBcIi4vcG9pbnRzZGlzcGxheVwiO1xuaW1wb3J0IFNjcmVlbkVmZmVjdHMgZnJvbSBcIi4vc2NyZWVuZWZmZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBsaXZlczogbnVtYmVyID0gMjtcbiAgICBwcml2YXRlIHBvaW50czogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgZ2FtZUVuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW5SZXN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGJhY2tncm91bmQ6IFNwcml0ZTtcbiAgICBwcml2YXRlIGhlcm86IEhlcm87XG4gICAgcHJpdmF0ZSBmb29kTWFuYWdlcjogRm9vZE1hbmFnZXI7XG4gICAgcHJpdmF0ZSBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcbiAgICBwcml2YXRlIHBvaW50c0Rpc3BsYXk6IFBvaW50c0Rpc3BsYXk7XG4gICAgcHJpdmF0ZSBzY3JlZW5FZmZlY3RzOiBTY3JlZW5FZmZlY3RzO1xuICAgIHByaXZhdGUgZ2FtZU92ZXJPdmVybGF5OiBHYW1lT3Zlck92ZXJsYXk7XG5cbiAgICBwcml2YXRlIHJlc3RhcnRDYWxsYmFjazogKCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IocmVzdGFydENhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbGJhY2sgPSByZXN0YXJ0Q2FsbGJhY2s7XG5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IFNwcml0ZShQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtcImJhY2tncm91bmRfYS5wbmdcIl0pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm9uKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oXCJwb2ludGVyZG93blwiLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmhlcm8pO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIgPSBuZXcgRm9vZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvb2RNYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5vbihcImZvb2QtbWlzc2VkXCIsIHRoaXMub25Gb29kTWlzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLm9uKFwiZm9vZC1zbGljZWRcIiwgdGhpcy5vbkZvb2RTbGljZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5oZWFsdGhCYXIpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnggPSA1O1xuICAgICAgICB0aGlzLmhlYWx0aEJhci55ID0gNTtcblxuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkgPSBuZXcgUG9pbnRzRGlzcGxheSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucG9pbnRzRGlzcGxheSk7XG5cbiAgICAgICAgdGhpcy5wb2ludHNEaXNwbGF5LnggPSAzMjAgLSA1O1xuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkueSA9IDA7XG5cbiAgICAgICAgdGhpcy5nYW1lT3Zlck92ZXJsYXkgPSBuZXcgR2FtZU92ZXJPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5nYW1lT3Zlck92ZXJsYXkpO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnggPSAzMjAgLyAyO1xuICAgICAgICB0aGlzLmdhbWVPdmVyT3ZlcmxheS55ID0gNDgwIC8gMiAtIDEwMDtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMgPSBuZXcgU2NyZWVuRWZmZWN0cyh0aGlzLCAzMjAsIDQ4MCwgMHhmZjAwMDApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuRWZmZWN0cyk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZhZGVPdXQoMHgwMDAwMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrKGRlbHRhOiBudW1iZXIpIHtcblxuICAgICAgICB0aGlzLmhlcm8udGljayhkZWx0YSk7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIudGljayhkZWx0YSwgdGhpcy5oZXJvKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIuY2hlY2tDb2xsaXNpb25zV2l0aEhlcm8odGhpcy5oZXJvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Gb29kTWlzc2VkKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGl2ZXMgLT0gMTtcblxuICAgICAgICB0aGlzLmhlYWx0aEJhci5zZXRIZWFsdGgodGhpcy5saXZlcyAvIDIgKiAxMDApO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5mbHVzaCgweGZmMDAwMCk7XG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSg1KTtcblxuICAgICAgICBpZiAodGhpcy5saXZlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Gb29kU2xpY2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9pbnRzICs9IDEwO1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS5zZXRQb2ludHModGhpcy5wb2ludHMpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSgzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25HYW1lT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnNob3coKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5SZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKFwicG9pbnRlcmRvd25cIiwgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKFwiZm9vZC1taXNzZWRcIiwgdGhpcy5vbkZvb2RNaXNzZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKFwiZm9vZC1zbGljZWRcIiwgdGhpcy5vbkZvb2RTbGljZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZhZGVJbigweDAwMDAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJNb3ZlKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCkge1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zOiBQb2ludCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICAgICAgcG9zLnggPSBNYXRoLm1heChNYXRoLm1pbigzMjAsIHBvcy54KSwgMCk7XG4gICAgICAgIHBvcy55ID0gTWF0aC5tYXgoTWF0aC5taW4oNDgwLCBwb3MueSksIDApO1xuXG4gICAgICAgIHRoaXMuaGVyby51cGRhdGVUYXJnZXRQb3NpdGlvbihwb3MueCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJEb3duKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jYW5SZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmNhblJlc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRhaW5lciwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoQmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHByaXZhdGUgZGVjb3JhdGlvbjogU3ByaXRlO1xuICAgIHByaXZhdGUgIGJhcjogU3ByaXRlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRlY29yYXRpb24gPSBuZXcgU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW1wiaGVhbHRoX2Jhcl9kZWNvcmF0aW9uLnBuZ1wiXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kZWNvcmF0aW9uKTtcblxuICAgICAgICB0aGlzLmJhciA9IG5ldyBTcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbXCJoZWFsdGhfYmFyLnBuZ1wiXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iYXIpO1xuICAgICAgICB0aGlzLmJhci54ID0gMTQ7XG5cbiAgICAgICAgdGhpcy5zZXRIZWFsdGgoMTAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGVhbHRoKHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBwZXJjZW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwZXJjZW50KSk7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUudHJpbS53aWR0aCA9IHRoaXMuYmFyLnRleHR1cmUub3JpZy53aWR0aCAqIHBlcmNlbnQgLyAxMDA7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUucmVxdWlyZXNVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLl91cGRhdGVVdnMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5lbnVtIFN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgU2xpY2UgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHB1YmxpYyBpc1NsaWNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY3VycmVudFN0YXRlOiBTdGF0ZSA9IFN0YXRlLklkbGU7XG5cbiAgICBwcml2YXRlIGlkbGVBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBwcml2YXRlIHdhbGtBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBwcml2YXRlIHNsaWNlQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG5cbiAgICBwcml2YXRlIGFuaW1zOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZVtdID0gW107XG5cbiAgICBwcml2YXRlIHRhcmdldFg6IG51bWJlciA9IDE2MDtcblxuICAgIHByaXZhdGUgbGFzdFRhcmdldFVwZGF0ZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgbG9jYWxDb2xsaXNpb25SZWN0OiBQSVhJLlJlY3RhbmdsZSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtMzAsIC0xMCwgNjAsIDQwKTtcbiAgICBwcml2YXRlIGRlYnVnQ29sbGlzaW9uR3JhcGhpY3M6IFBJWEkuR3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZGxlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoXCJpZGxlXCIsIFswLCAxLCAyLCAzXSk7XG4gICAgICAgIHRoaXMud2Fsa0FuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKFwid2Fsa1wiLCBbMCwgMSwgMiwgMywgNF0pO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoXCJzbGljZVwiLCBbMCwgMSwgMiwgMiwgMiwgMiwgMl0pO1xuXG4gICAgICAgIHRoaXMud2Fsa0FuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjY7XG5cbiAgICAgICAgdGhpcy5zbGljZUFuaW0ubG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbS5hbmltYXRpb25TcGVlZCA9IDAuNDtcblxuICAgICAgICB0aGlzLnNsaWNlQW5pbS5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1NsaWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuSWRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcblxuICAgICAgICB0aGlzLnggPSAxNjA7XG4gICAgICAgIHRoaXMueSA9IDM1MDtcblxuICAgICAgICB0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmYwMDAwLCAwLjQpO1xuICAgICAgICB0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MuZHJhd1JlY3QodGhpcy5sb2NhbENvbGxpc2lvblJlY3QueCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LnksIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LndpZHRoLCB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC5oZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpIC8gMztcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLldhbGspO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGFyZ2V0UG9zaXRpb24oeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IHg7XG4gICAgICAgIHRoaXMubGFzdFRhcmdldFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLlNsaWNlKTtcbiAgICAgICAgdGhpcy5pc1NsaWNpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHbG9iYWxDb2xsaXNpb25SZWN0KCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlJlY3RhbmdsZSAoXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC54LFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5sb2NhbENvbGxpc2lvblJlY3QueSxcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LndpZHRoLFxuICAgICAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvblJlY3QuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvSWRsZVdoaWxlV2FsaygpIHtcbiAgICAgICAgY29uc3Qgbm90U2xpY2luZyA9ICF0aGlzLmlzU2xpY2luZztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuV2FsaztcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCB0aW1lID0gdGhpcy5sYXN0VGFyZ2V0VXBkYXRlICsgMjUwIDwgRGF0ZS5ub3coKTtcblxuICAgICAgICByZXR1cm4gbm90U2xpY2luZyAmJiBzdGF0ZSAmJiBwb3NpdGlvbiAmJiB0aW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQ2hhbmdlVG9XYWxrV2hpbGVJZGxlKCkge1xuICAgICAgICBjb25zdCBub3RTbGljaW5nID0gIXRoaXMuaXNTbGljaW5nO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5JZGxlO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICF0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIHJldHVybiBub3RTbGljaW5nICYmIHN0YXRlICYmIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNPblRhcmdldFBvc2l0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50YXJnZXRYKSA8IDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmltYXRlZFNwcml0ZShuYW1lOiBzdHJpbmcsIGZyYW1lSW5kZXhlczogbnVtYmVyW10pOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gW107XG5cbiAgICAgICAgZnJhbWVJbmRleGVzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gXCJoZXJvX1wiICsgbmFtZSArIFwiX1wiICsgdmFsICsgXCIucG5nXCI7XG4gICAgICAgICAgICBmcmFtZXMucHVzaChQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtmcmFtZU5hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0ZWRTcHJpdGU6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlID0gbmV3IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKGZyYW1lcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChhbmltYXRlZFNwcml0ZSk7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLnBsYXkoKTtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjI7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICB0aGlzLmFuaW1zLnB1c2goYW5pbWF0ZWRTcHJpdGUpO1xuXG4gICAgICAgIHJldHVybiBhbmltYXRlZFNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQge1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU3RhdGUuSWRsZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMuaWRsZUFuaW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBTdGF0ZS5TbGljZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMuc2xpY2VBbmltKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuV2Fsaykge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMud2Fsa0FuaW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlBbmltYXRpb24oYW5pbWF0aW9uOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1zLmZvckVhY2goKGFuaW0pID0+IHtcbiAgICAgICAgICAgIGlmIChhbmltID09PSBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBhbmltLmdvdG9BbmRQbGF5KDApO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW0uc3RvcCgpO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBNYXNrTWFuYWdlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuL2dhbWVzY2VuZVwiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcml2YXRlIGFwcDogQXBwbGljYXRpb247XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBBcHBsaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwMDAwMDAgfTtcblxuICAgIHByaXZhdGUgZ2FtZVNjZW5lOiBHYW1lU2NlbmU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgUElYSS5sb2FkZXJcbiAgICAgICAgICAgIC5hZGQoXCJpbWFnZXMvYXRsYXNlcy5qc29uXCIpXG4gICAgICAgICAgICAubG9hZCh0aGlzLmxvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZGVkKGxvYWRlcjogUElYSS5sb2FkZXJzLkxvYWRlciwgcmVzb3VyY2VzOiBQSVhJLmxvYWRlcnMuUmVzb3VyY2VEaWN0aW9uYXJ5KSB7XG5cbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oMzIwLCA0ODAsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gbmV3IEdhbWVTY2VuZSh0aGlzLnJlc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZVNjZW5lKTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS50aWNrKGRlbHRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLnJlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5nYW1lU2NlbmUpO1xuICAgIH1cbn1cblxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRzRGlzcGxheSBleHRlbmRzIFRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5maWxsID0gMHhmZmZmZmY7XG4gICAgICAgIHRoaXMuc3R5bGUuYWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuc3Ryb2tlID0gMHgwMDAwMDA7XG4gICAgICAgIHRoaXMuc3R5bGUuc3Ryb2tlVGhpY2tuZXNzID0gNTtcbiAgICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9IDIwO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgxLCAwKTtcblxuICAgICAgICB0aGlzLnRleHQgPSBcIjAwMDBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9pbnRzKHBvaW50czogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dCA9IHBvaW50cyArIFwiXCI7XG5cbiAgICAgICAgaWYgKHBvaW50cyA8IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBcIjAwMFwiICsgcG9pbnRzO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cyA8IDEwMCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCIwMFwiICsgcG9pbnRzO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cyA8IDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiMFwiICsgcG9pbnRzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlzcGxheU9iamVjdCwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuaW1wb3J0IHsgVGltZWxpbmVMaXRlIH0gZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuRWZmZWN0cyBleHRlbmRzIFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBzaGFrZVRpbWVsaW5lOiBUaW1lbGluZUxpdGUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgcHJpdmF0ZSBmbHVzaFRpbWVsaW5lOiBUaW1lbGluZUxpdGUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICBwcml2YXRlIHNoYWtlVmlldzogRGlzcGxheU9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHNoYWtlVmlldzogRGlzcGxheU9iamVjdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoUElYSS5UZXh0dXJlLldISVRFKTtcblxuICAgICAgICB0aGlzLnNjYWxlLnNldCh3aWR0aCAvIHRoaXMudGV4dHVyZS53aWR0aCwgaGVpZ2h0IC8gdGhpcy50ZXh0dXJlLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG5cbiAgICAgICAgdGhpcy5zaGFrZVZpZXcgPSBzaGFrZVZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGZsdXNoKGNvbG9yOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IC41O1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC4yLCB7YWxwaGE6IDB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hha2Uoc3RyZW5ndGg6IG51bWJlciwgc2hvcnQ6IGJvb2xlYW4gPSBmYWxzZSwgYW5nbGU/OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAoYW5nbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbXBYOiBudW1iZXIgPSBNYXRoLmNvcyhhbmdsZSkgKiBzdHJlbmd0aDtcbiAgICAgICAgY29uc3QgYW1wWTogbnVtYmVyID0gTWF0aC5zaW4oYW5nbGUpICogc3RyZW5ndGg7XG5cbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2hha2VUaW1lbGluZVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IGFtcFgsIHk6IGFtcFl9KVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IC1hbXBYLCB5OiAtYW1wWX0pO1xuXG4gICAgICAgIGlmICghc2hvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hha2VUaW1lbGluZVxuICAgICAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiBhbXBYLCB5OiBhbXBZfSlcbiAgICAgICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogLWFtcFgsIHk6IC1hbXBZfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoYWtlVGltZWxpbmVcbiAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiAwLCB5OiAwfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVJbihjb2xvcjogbnVtYmVyLCBjYj86ICgoKSA9PiB2b2lkKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLnRvKHRoaXMsIDAuNzUsIHthbHBoYTogMX0pO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLmNhbGwoY2IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVPdXQoY29sb3I6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmFscGhhID0gMTtcblxuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLnRvKHRoaXMsIDAuNzUsIHthbHBoYTogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICdwaXhpLXBhcnRpY2xlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWNlUGFydGljbGVzIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodmlldzogUElYSS5Db250YWluZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLFxuICAgICAgICAgICAgICAgIHNjYWxlTXVsdGlwOiBudW1iZXIgPSAxLCBzcGVlZE11bHRpcDogbnVtYmVyID0gMSwgXG4gICAgICAgICAgICAgICAgY29sb3I6IHN0cmluZyA9IFwiI2ZmZmZmZlwiKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzOiBvYmplY3QgPSB7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEwMDAgfSxcbiAgICAgICAgICAgIGFkZEF0QmFjazogZmFsc2UsXG4gICAgICAgICAgICBhbHBoYToge1xuICAgICAgICAgICAgICAgIGVuZDogMSxcbiAgICAgICAgICAgICAgICBzdGFydDogMSB9LFxuICAgICAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBlbmQ6IGNvbG9yLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBjb2xvciB9LFxuICAgICAgICAgICAgZW1pdHRlckxpZmV0aW1lOiAwLjAxLFxuICAgICAgICAgICAgZnJlcXVlbmN5OiAwLjAwMSxcbiAgICAgICAgICAgIGxpZmV0aW1lOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAwLjQsXG4gICAgICAgICAgICAgICAgbWluOiAwLjMgfSxcbiAgICAgICAgICAgIG1heFBhcnRpY2xlczogMTAsXG4gICAgICAgICAgICBtYXhTcGVlZDogMCxcbiAgICAgICAgICAgIG5vUm90YXRpb246IGZhbHNlLFxuICAgICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5IH0sXG4gICAgICAgICAgICByb3RhdGlvblNwZWVkOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICAgICAgICAgIG1pbjogMCB9LFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICBlbmQ6IDAuMDEgKiBzY2FsZU11bHRpcCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtU2NhbGVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLjYgKiBzY2FsZU11bHRpcCB9LFxuICAgICAgICAgICAgc3Bhd25UeXBlOiBcInBvaW50XCJcbiAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgZW5kOiAwLFxuICAgICAgICAgICAgICAgIG1pbmltdW1TcGVlZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDM1MCAqIHNwZWVkTXVsdGlwIH0sXG4gICAgICAgICAgICBzdGFydFJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAzNjAsXG4gICAgICAgICAgICAgICAgbWluOiAwIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBzdXBlcih2aWV3LCBbUElYSS5UZXh0dXJlLldISVRFXSwgc2V0dGluZ3MpO1xuXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IHRydWU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=