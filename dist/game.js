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
        _this.lives = 10;
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
        this.healthBar.setHealth(this.lives / 10 * 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2RtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9nYW1lb3Zlcm92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVzY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvaGVhbHRoYmFyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyY190cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyY190cy9wb2ludHNkaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyY190cy9zY3JlZW5lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL3NsaWNlcGFydGljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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O1lBQ1osS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxJQUFJLEdBQUcsV0FBVztnQkFDdkIsc0JBQXNCLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxFQUFFLEdBQUcsR0FBRyxXQUFXO2FBQUU7WUFDOUIsU0FBUyxFQUFFLE9BQU87WUFDbEIsS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxDQUFDO2dCQUNOLHNCQUFzQixFQUFFLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxHQUFHLEdBQUcsV0FBVzthQUFFO1lBQzlCLGFBQWEsRUFBRTtnQkFDWCxHQUFHLEVBQUUsR0FBRztnQkFDUixHQUFHLEVBQUUsQ0FBQzthQUFFO1NBQUMsQ0FBQztRQUVsQiwwQkFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFDO1FBRTVDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztJQUMzQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBL0MyQyx3QkFBTyxHQStDbEQiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyY190cy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgdnk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGZhbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBtYXJrZWRUb1NsaWNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbWFya2VkQXNNaXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBwcmV2Rm9vZDogRm9vZDtcblxuICAgIHB1YmxpYyBzcHJpdGU6IFNwcml0ZSA9IG5ldyBTcHJpdGUoUElYSS5UZXh0dXJlLkVNUFRZKTtcblxuICAgIHByaXZhdGUgY3VtdWxUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByb3RhdGlvbkRpcmVjdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6IG51bWJlciwgZ3Jhdml0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5mYWxsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52eSArPSBncmF2aXR5ICogZGVsdGE7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogZGVsdGE7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQgKiB0aGlzLnJvdGF0aW9uRGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnNwcml0ZS5yb3RhdGlvbiAtPSAodGhpcy5yb3RhdGlvblNwZWVkICogdGhpcy5yb3RhdGlvbkRpcmVjdGlvbikgLyAyO1xuXG4gICAgICAgIHRoaXMuY3VtdWxUaW1lICs9IDE7XG4gICAgICAgIHRoaXMuc2NhbGUueCA9IE1hdGguc2luKHRoaXMuY3VtdWxUaW1lIC8gMTApICogMC4zICsgMS4zO1xuICAgICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmNvcyh0aGlzLmN1bXVsVGltZSAvIDE1KSAqIDAuMTUgKyAxLjE1O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdW11bFRpbWUgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMC4xICsgMC4xO1xuICAgICAgICB0aGlzLnJvdGF0aW9uRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMTtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hcmtlZFRvU2xpY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXJrZWRBc01pc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2hvb3NlUmFuZG9tVGV4dHVyZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaG9vc2VSYW5kb21UZXh0dXJlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmcmFtZUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2NCk7XG4gICAgICAgIGNvbnN0IGZyYW1lTmFtZTogc3RyaW5nID0gXCJmb29kX1wiICsgZnJhbWVJbmRleCArIFwiLnBuZ1wiO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtmcmFtZU5hbWVdO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcblxuaW1wb3J0IEZvb2QgZnJvbSBcIi4vZm9vZFwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4vaGVyb1wiO1xuaW1wb3J0IFNsaWNlUGFydGljbGVzIGZyb20gXCIuL3NsaWNlcGFydGljbGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb2RNYW5hZ2VyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgZGlzdEJldHdlZW5TcGF3bnM6IG51bWJlciA9IDIwO1xuICAgIHByaXZhdGUgc3RhcnRpbmdWZWxWYXJpYW5jZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgZ3Jhdml0eTogbnVtYmVyID0gMC4wMjtcblxuICAgIHByaXZhdGUgZm9vZHM6IEZvb2RbXSA9IFtdO1xuICAgIHByaXZhdGUgZm9vZE9uVG9wOiBGb29kO1xuXG4gICAgcHJpdmF0ZSBmb29kc1RvU2xpY2U6IEZvb2RbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmb29kID0gbmV3IEZvb2QoKTtcblxuICAgICAgICAgICAgZm9vZC54ID0gNTAgKyBNYXRoLnJhbmRvbSgpICogMjIwO1xuICAgICAgICAgICAgZm9vZC55ID0gLTUwO1xuICAgICAgICAgICAgdGhpcy5mb29kcy5wdXNoKGZvb2QpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGZvb2QpO1xuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBmb29kLnByZXZGb29kID0gdGhpcy5mb29kc1tpIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvb2RPblRvcCA9IHRoaXMuZm9vZHNbdGhpcy5mb29kcy5sZW5ndGggLSAxXTtcblxuICAgICAgICB0aGlzLmZvb2RzWzBdLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RzWzBdLnByZXZGb29kID0gdGhpcy5mb29kT25Ub3A7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6IG51bWJlciwgaGVybzogSGVybyk6IHZvaWQge1xuICAgICAgICBjb25zdCByZWN0ID0gaGVyby5nZXRHbG9iYWxDb2xsaXNpb25SZWN0KCk7XG5cbiAgICAgICAgdGhpcy5mb29kcy5mb3JFYWNoKChmb29kKSA9PiB7XG4gICAgICAgICAgICBmb29kLnRpY2soZGVsdGEsIHRoaXMuZ3Jhdml0eSk7XG5cbiAgICAgICAgICAgIC8vIGlmIHNob3VsZCBzcGF3biBpbiBjYXNlIGl0IGlzIG5vdCBmYWxsaW5nIGN1cnJlbnRseVxuICAgICAgICAgICAgY29uc3QgZW5vdWdoRGlzdDogYm9vbGVhbiA9IGZvb2QucHJldkZvb2QueSAtIGZvb2QueSA+IHRoaXMuZGlzdEJldHdlZW5TcGF3bnM7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIWZvb2QuZmFsbGluZyAmJiBmb29kLnByZXZGb29kLmZhbGxpbmcgJiYgZW5vdWdoRGlzdCkge1xuICAgICAgICAgICAgICAgIGZvb2QudnkgPSAgTWF0aC5yYW5kb20oKSAqIHRoaXMuc3RhcnRpbmdWZWxWYXJpYW5jZTtcbiAgICAgICAgICAgICAgICBmb29kLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRpbmdWZWxWYXJpYW5jZSArPSAwLjAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdEJldHdlZW5TcGF3bnMgLT0gMC4wMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdEJldHdlZW5TcGF3bnMgPSBNYXRoLm1heCgxMCwgdGhpcy5kaXN0QmV0d2VlblNwYXducyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHNob3VsZCBiZSBjb3VudGVkIGFzIG1pc3NlZFxuICAgICAgICAgICAgaWYgKGZvb2QueSA+IHJlY3QuYm90dG9tICYmICFmb29kLm1hcmtlZEFzTWlzc2VkKSB7XG4gICAgICAgICAgICAgICAgZm9vZC5tYXJrZWRBc01pc3NlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNsZXM6IFNsaWNlUGFydGljbGVzID0gbmV3IFNsaWNlUGFydGljbGVzKHRoaXMsIGZvb2QueCwgZm9vZC55LCAxLjUsIDAuNSwgXCIjZmYwMDAwXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZU9uU3RhcnQoZm9vZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiZm9vZC1taXNzZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHNob3VsZCBiZSBhY3R1YWxseSBzbGljZWRcbiAgICAgICAgICAgIC8vIGRvZXNuJ3QgaGFwcGVuIGRpcmVjdGx5IG9uIGNvbGxpc2lvbiBmb3IgYmV0dGVyIHZpc3VhbCBmZWVsaW5nXG4gICAgICAgICAgICBpZiAoZm9vZC5tYXJrZWRUb1NsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsIHNsaWNlIGluIHRoZSBtaWRkbGUgb2YgY29sbGlzaW9uIGJveCBvZiBiZWxvd1xuICAgICAgICAgICAgICAgIGlmIChmb29kLnkgPj0gKHJlY3QudG9wICsgcmVjdC5ib3R0b20pIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNsZXM6IFNsaWNlUGFydGljbGVzID0gbmV3IFNsaWNlUGFydGljbGVzKHRoaXMsIGZvb2QueCwgZm9vZC55KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlT25TdGFydChmb29kKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiZm9vZC1zbGljZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tDb2xsaXNpb25zV2l0aEhlcm8oaGVybzogSGVybyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHJlY3QgPSBoZXJvLmdldEdsb2JhbENvbGxpc2lvblJlY3QoKTtcblxuICAgICAgICB0aGlzLmZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICAgICAgICAgIGlmIChmb29kLnggPiByZWN0LmxlZnQgJiYgZm9vZC54IDwgcmVjdC5yaWdodCAmJiBmb29kLnkgPiByZWN0LnRvcCAmJiBmb29kLnkgPCByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGhlcm8uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBmb29kLm1hcmtlZFRvU2xpY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxhY2VPblN0YXJ0KGZvb2Q6IEZvb2QpOiB2b2lkIHtcbiAgICAgICAgZm9vZC5yZXNldCgpO1xuXG4gICAgICAgIGZvb2QueCA9IDUwICsgTWF0aC5yYW5kb20oKSAqIDIyMDtcbiAgICAgICAgZm9vZC55ID0gLTUwO1xuXG4gICAgICAgIGZvb2QucHJldkZvb2QgPSB0aGlzLmZvb2RPblRvcDtcbiAgICAgICAgdGhpcy5mb29kT25Ub3AgPSBmb29kO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRhaW5lciwgVGV4dCB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmltcG9ydCB7IEJhY2ssIFRpbWVsaW5lTGl0ZSB9IGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyT3ZlcmxheSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBnYW1lT3ZlclRleHQ6IFRleHQ7XG4gICAgcHJpdmF0ZSB0YXBUb1BsYXlUZXh0OiBUZXh0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgc3R5bGUuZmlsbCA9IDB4MDAwMDAwO1xuICAgICAgICBzdHlsZS5hbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHN0eWxlLnN0cm9rZSA9IDB4ZmZmZmZmO1xuICAgICAgICBzdHlsZS5zdHJva2VUaGlja25lc3MgPSA2O1xuICAgICAgICBzdHlsZS5mb250U2l6ZSA9IDQwO1xuICAgICAgICBzdHlsZS5taXRlckxpbWl0ID0gMztcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dCA9IG5ldyBUZXh0KFwiR0FNRSBPVkVSXCIsIHN0eWxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZ2FtZU92ZXJUZXh0KTtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC5hbHBoYSA9IDA7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUyID0gbmV3IFBJWEkuVGV4dFN0eWxlKHt9KTtcblxuICAgICAgICBzdHlsZTIuZmlsbCA9IDB4MDAwMDAwO1xuICAgICAgICBzdHlsZTIuYWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBzdHlsZTIuc3Ryb2tlID0gMHhmZmZmZmY7XG4gICAgICAgIHN0eWxlMi5zdHJva2VUaGlja25lc3MgPSAwO1xuICAgICAgICBzdHlsZTIuZm9udFNpemUgPSAyMDtcbiAgICAgICAgc3R5bGUyLm1pdGVyTGltaXQgPSAzO1xuXG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dCA9IG5ldyBUZXh0KFwiVGFwIHRvIHBsYXkgYWdhaW4hXCIsIHN0eWxlMik7XG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dC5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dC55ID0gNTA7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50YXBUb1BsYXlUZXh0KTtcblxuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQuYWxwaGEgPSAwO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNob3coY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQueSAtPSAyMDA7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQuc2NhbGUuc2V0KDAuNzUpO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy5nYW1lT3ZlclRleHQsIDAuMywge2FscGhhOiAxfSk7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLmdhbWVPdmVyVGV4dCwgMSwge3k6IDAsIGVhc2U6IEJhY2suZWFzZU91dH0pO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy5nYW1lT3ZlclRleHQuc2NhbGUsIDAuNSwge3g6IDEsIHk6IDEsIGVhc2U6IEJhY2suZWFzZU91dH0pLmRlbGF5KDAuNSk7XG5cbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0LnggPSAzMDA7XG5cbiAgICAgICAgbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgIC50byh0aGlzLnRhcFRvUGxheVRleHQsIDAuMjUsIHthbHBoYTogMX0pLmRlbGF5KDEuMTUpO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy50YXBUb1BsYXlUZXh0LCAwLjY1LCB7eDogMCwgZWFzZTogQmFjay5lYXNlT3V0fSlcbiAgICAgICAgLmNhbGwoY2IpLmRlbGF5KDEpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBQb2ludCwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuL2hlcm9cIjtcblxuaW1wb3J0IEZvb2RNYW5hZ2VyIGZyb20gXCIuL2Zvb2RtYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZU92ZXJPdmVybGF5IGZyb20gXCIuL2dhbWVvdmVyb3ZlcmxheVwiO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tIFwiLi9oZWFsdGhiYXJcIjtcbmltcG9ydCBQb2ludHNEaXNwbGF5IGZyb20gXCIuL3BvaW50c2Rpc3BsYXlcIjtcbmltcG9ydCBTY3JlZW5FZmZlY3RzIGZyb20gXCIuL3NjcmVlbmVmZmVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgcG9pbnRzOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBnYW1lRW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGNhblJlc3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogU3ByaXRlO1xuICAgIHByaXZhdGUgaGVybzogSGVybztcbiAgICBwcml2YXRlIGZvb2RNYW5hZ2VyOiBGb29kTWFuYWdlcjtcbiAgICBwcml2YXRlIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xuICAgIHByaXZhdGUgcG9pbnRzRGlzcGxheTogUG9pbnRzRGlzcGxheTtcbiAgICBwcml2YXRlIHNjcmVlbkVmZmVjdHM6IFNjcmVlbkVmZmVjdHM7XG4gICAgcHJpdmF0ZSBnYW1lT3Zlck92ZXJsYXk6IEdhbWVPdmVyT3ZlcmxheTtcblxuICAgIHByaXZhdGUgcmVzdGFydENhbGxiYWNrOiAoKCkgPT4gdm9pZCk7XG5cbiAgICBjb25zdHJ1Y3RvcihyZXN0YXJ0Q2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnJlc3RhcnRDYWxsYmFjayA9IHJlc3RhcnRDYWxsYmFjaztcblxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW1wiYmFja2dyb3VuZF9hLnBuZ1wiXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iYWNrZ3JvdW5kKTtcblxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oXCJwb2ludGVybW92ZVwiLCB0aGlzLm9uUG9pbnRlck1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5vbihcInBvaW50ZXJkb3duXCIsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSGVybygpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaGVybyk7XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlciA9IG5ldyBGb29kTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZm9vZE1hbmFnZXIpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLm9uKFwiZm9vZC1taXNzZWRcIiwgdGhpcy5vbkZvb2RNaXNzZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub24oXCJmb29kLXNsaWNlZFwiLCB0aGlzLm9uRm9vZFNsaWNlZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmhlYWx0aEJhcik7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIueCA9IDU7XG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnkgPSA1O1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheSA9IG5ldyBQb2ludHNEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wb2ludHNEaXNwbGF5KTtcblxuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkueCA9IDMyMCAtIDU7XG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS55ID0gMDtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyT3ZlcmxheSA9IG5ldyBHYW1lT3Zlck92ZXJsYXkoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdhbWVPdmVyT3ZlcmxheSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3Zlck92ZXJsYXkueCA9IDMyMCAvIDI7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnkgPSA0ODAgLyAyIC0gMTAwO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cyA9IG5ldyBTY3JlZW5FZmZlY3RzKHRoaXMsIDMyMCwgNDgwLCAweGZmMDAwMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zY3JlZW5FZmZlY3RzKTtcblxuICAgICAgICB0aGlzLnNjcmVlbkVmZmVjdHMuZmFkZU91dCgweDAwMDAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuaGVyby50aWNrKGRlbHRhKTtcbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci50aWNrKGRlbHRhLCB0aGlzLmhlcm8pO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5jaGVja0NvbGxpc2lvbnNXaXRoSGVybyh0aGlzLmhlcm8pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkZvb2RNaXNzZWQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXZlcyAtPSAxO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnNldEhlYWx0aCh0aGlzLmxpdmVzIC8gMTAgKiAxMDApO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5mbHVzaCgweGZmMDAwMCk7XG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSg1KTtcblxuICAgICAgICBpZiAodGhpcy5saXZlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Gb29kU2xpY2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9pbnRzICs9IDEwO1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS5zZXRQb2ludHModGhpcy5wb2ludHMpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSgzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25HYW1lT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnNob3coKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5SZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKFwicG9pbnRlcmRvd25cIiwgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKFwiZm9vZC1taXNzZWRcIiwgdGhpcy5vbkZvb2RNaXNzZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKFwiZm9vZC1zbGljZWRcIiwgdGhpcy5vbkZvb2RTbGljZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZhZGVJbigweDAwMDAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJNb3ZlKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCkge1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zOiBQb2ludCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICAgICAgcG9zLnggPSBNYXRoLm1heChNYXRoLm1pbigzMjAsIHBvcy54KSwgMCk7XG4gICAgICAgIHBvcy55ID0gTWF0aC5tYXgoTWF0aC5taW4oNDgwLCBwb3MueSksIDApO1xuXG4gICAgICAgIHRoaXMuaGVyby51cGRhdGVUYXJnZXRQb3NpdGlvbihwb3MueCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJEb3duKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jYW5SZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmNhblJlc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRhaW5lciwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoQmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHByaXZhdGUgZGVjb3JhdGlvbjogU3ByaXRlO1xuICAgIHByaXZhdGUgIGJhcjogU3ByaXRlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRlY29yYXRpb24gPSBuZXcgU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW1wiaGVhbHRoX2Jhcl9kZWNvcmF0aW9uLnBuZ1wiXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kZWNvcmF0aW9uKTtcblxuICAgICAgICB0aGlzLmJhciA9IG5ldyBTcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbXCJoZWFsdGhfYmFyLnBuZ1wiXSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iYXIpO1xuICAgICAgICB0aGlzLmJhci54ID0gMTQ7XG5cbiAgICAgICAgdGhpcy5zZXRIZWFsdGgoMTAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGVhbHRoKHBlcmNlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBwZXJjZW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwZXJjZW50KSk7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUudHJpbS53aWR0aCA9IHRoaXMuYmFyLnRleHR1cmUub3JpZy53aWR0aCAqIHBlcmNlbnQgLyAxMDA7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuYmFyLnRleHR1cmUucmVxdWlyZXNVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLl91cGRhdGVVdnMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5lbnVtIFN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgU2xpY2UgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHB1YmxpYyBpc1NsaWNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgY3VycmVudFN0YXRlOiBTdGF0ZSA9IFN0YXRlLklkbGU7XG5cbiAgICBwcml2YXRlIGlkbGVBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBwcml2YXRlIHdhbGtBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBwcml2YXRlIHNsaWNlQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG5cbiAgICBwcml2YXRlIGFuaW1zOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZVtdID0gW107XG5cbiAgICBwcml2YXRlIHRhcmdldFg6IG51bWJlciA9IDE2MDtcblxuICAgIHByaXZhdGUgbGFzdFRhcmdldFVwZGF0ZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgbG9jYWxDb2xsaXNpb25SZWN0OiBQSVhJLlJlY3RhbmdsZSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgtMzAsIC0xMCwgNjAsIDQwKTtcbiAgICBwcml2YXRlIGRlYnVnQ29sbGlzaW9uR3JhcGhpY3M6IFBJWEkuR3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZGxlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoXCJpZGxlXCIsIFswLCAxLCAyLCAzXSk7XG4gICAgICAgIHRoaXMud2Fsa0FuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKFwid2Fsa1wiLCBbMCwgMSwgMiwgMywgNF0pO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoXCJzbGljZVwiLCBbMCwgMSwgMiwgMiwgMiwgMiwgMl0pO1xuXG4gICAgICAgIHRoaXMud2Fsa0FuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjY7XG5cbiAgICAgICAgdGhpcy5zbGljZUFuaW0ubG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbS5hbmltYXRpb25TcGVlZCA9IDAuNDtcblxuICAgICAgICB0aGlzLnNsaWNlQW5pbS5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1NsaWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuSWRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcblxuICAgICAgICB0aGlzLnggPSAxNjA7XG4gICAgICAgIHRoaXMueSA9IDM1MDtcblxuICAgICAgICB0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmYwMDAwLCAwLjQpO1xuICAgICAgICB0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MuZHJhd1JlY3QodGhpcy5sb2NhbENvbGxpc2lvblJlY3QueCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LnksIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LndpZHRoLCB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC5oZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpIC8gMztcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLldhbGspO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGFyZ2V0UG9zaXRpb24oeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IHg7XG4gICAgICAgIHRoaXMubGFzdFRhcmdldFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLlNsaWNlKTtcbiAgICAgICAgdGhpcy5pc1NsaWNpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHbG9iYWxDb2xsaXNpb25SZWN0KCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlJlY3RhbmdsZSAoXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC54LFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5sb2NhbENvbGxpc2lvblJlY3QueSxcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LndpZHRoLFxuICAgICAgICAgICAgdGhpcy5sb2NhbENvbGxpc2lvblJlY3QuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvSWRsZVdoaWxlV2FsaygpIHtcbiAgICAgICAgY29uc3Qgbm90U2xpY2luZyA9ICF0aGlzLmlzU2xpY2luZztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuV2FsaztcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCB0aW1lID0gdGhpcy5sYXN0VGFyZ2V0VXBkYXRlICsgMjUwIDwgRGF0ZS5ub3coKTtcblxuICAgICAgICByZXR1cm4gbm90U2xpY2luZyAmJiBzdGF0ZSAmJiBwb3NpdGlvbiAmJiB0aW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQ2hhbmdlVG9XYWxrV2hpbGVJZGxlKCkge1xuICAgICAgICBjb25zdCBub3RTbGljaW5nID0gIXRoaXMuaXNTbGljaW5nO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5JZGxlO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICF0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIHJldHVybiBub3RTbGljaW5nICYmIHN0YXRlICYmIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNPblRhcmdldFBvc2l0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50YXJnZXRYKSA8IDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmltYXRlZFNwcml0ZShuYW1lOiBzdHJpbmcsIGZyYW1lSW5kZXhlczogbnVtYmVyW10pOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gW107XG5cbiAgICAgICAgZnJhbWVJbmRleGVzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gXCJoZXJvX1wiICsgbmFtZSArIFwiX1wiICsgdmFsICsgXCIucG5nXCI7XG4gICAgICAgICAgICBmcmFtZXMucHVzaChQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtmcmFtZU5hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0ZWRTcHJpdGU6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlID0gbmV3IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKGZyYW1lcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChhbmltYXRlZFNwcml0ZSk7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLnBsYXkoKTtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjI7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICB0aGlzLmFuaW1zLnB1c2goYW5pbWF0ZWRTcHJpdGUpO1xuXG4gICAgICAgIHJldHVybiBhbmltYXRlZFNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQge1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU3RhdGUuSWRsZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMuaWRsZUFuaW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBTdGF0ZS5TbGljZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMuc2xpY2VBbmltKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuV2Fsaykge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKHRoaXMud2Fsa0FuaW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlBbmltYXRpb24oYW5pbWF0aW9uOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1zLmZvckVhY2goKGFuaW0pID0+IHtcbiAgICAgICAgICAgIGlmIChhbmltID09PSBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBhbmltLmdvdG9BbmRQbGF5KDApO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW0uc3RvcCgpO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBNYXNrTWFuYWdlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gXCIuL2dhbWVzY2VuZVwiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcml2YXRlIGFwcDogQXBwbGljYXRpb247XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBBcHBsaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgwMDAwMDAgfTtcblxuICAgIHByaXZhdGUgZ2FtZVNjZW5lOiBHYW1lU2NlbmU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgUElYSS5sb2FkZXJcbiAgICAgICAgICAgIC5hZGQoXCJpbWFnZXMvYXRsYXNlcy5qc29uXCIpXG4gICAgICAgICAgICAubG9hZCh0aGlzLmxvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZGVkKGxvYWRlcjogUElYSS5sb2FkZXJzLkxvYWRlciwgcmVzb3VyY2VzOiBQSVhJLmxvYWRlcnMuUmVzb3VyY2VEaWN0aW9uYXJ5KSB7XG5cbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oMzIwLCA0ODAsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gbmV3IEdhbWVTY2VuZSh0aGlzLnJlc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZVNjZW5lKTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS50aWNrKGRlbHRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLnJlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5nYW1lU2NlbmUpO1xuICAgIH1cbn1cblxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRzRGlzcGxheSBleHRlbmRzIFRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5maWxsID0gMHhmZmZmZmY7XG4gICAgICAgIHRoaXMuc3R5bGUuYWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMuc3R5bGUuc3Ryb2tlID0gMHgwMDAwMDA7XG4gICAgICAgIHRoaXMuc3R5bGUuc3Ryb2tlVGhpY2tuZXNzID0gNTtcbiAgICAgICAgdGhpcy5zdHlsZS5mb250U2l6ZSA9IDIwO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgxLCAwKTtcblxuICAgICAgICB0aGlzLnRleHQgPSBcIjAwMDBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9pbnRzKHBvaW50czogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dCA9IHBvaW50cyArIFwiXCI7XG5cbiAgICAgICAgaWYgKHBvaW50cyA8IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBcIjAwMFwiICsgcG9pbnRzO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cyA8IDEwMCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCIwMFwiICsgcG9pbnRzO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cyA8IDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiMFwiICsgcG9pbnRzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlzcGxheU9iamVjdCwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuaW1wb3J0IHsgVGltZWxpbmVMaXRlIH0gZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuRWZmZWN0cyBleHRlbmRzIFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBzaGFrZVRpbWVsaW5lOiBUaW1lbGluZUxpdGUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgcHJpdmF0ZSBmbHVzaFRpbWVsaW5lOiBUaW1lbGluZUxpdGUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICBwcml2YXRlIHNoYWtlVmlldzogRGlzcGxheU9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHNoYWtlVmlldzogRGlzcGxheU9iamVjdCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoUElYSS5UZXh0dXJlLldISVRFKTtcblxuICAgICAgICB0aGlzLnNjYWxlLnNldCh3aWR0aCAvIHRoaXMudGV4dHVyZS53aWR0aCwgaGVpZ2h0IC8gdGhpcy50ZXh0dXJlLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG5cbiAgICAgICAgdGhpcy5zaGFrZVZpZXcgPSBzaGFrZVZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGZsdXNoKGNvbG9yOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IC41O1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC4yLCB7YWxwaGE6IDB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hha2Uoc3RyZW5ndGg6IG51bWJlciwgc2hvcnQ6IGJvb2xlYW4gPSBmYWxzZSwgYW5nbGU/OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAoYW5nbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbXBYOiBudW1iZXIgPSBNYXRoLmNvcyhhbmdsZSkgKiBzdHJlbmd0aDtcbiAgICAgICAgY29uc3QgYW1wWTogbnVtYmVyID0gTWF0aC5zaW4oYW5nbGUpICogc3RyZW5ndGg7XG5cbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2hha2VUaW1lbGluZVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IGFtcFgsIHk6IGFtcFl9KVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IC1hbXBYLCB5OiAtYW1wWX0pO1xuXG4gICAgICAgIGlmICghc2hvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hha2VUaW1lbGluZVxuICAgICAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiBhbXBYLCB5OiBhbXBZfSlcbiAgICAgICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogLWFtcFgsIHk6IC1hbXBZfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNoYWtlVGltZWxpbmVcbiAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiAwLCB5OiAwfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVJbihjb2xvcjogbnVtYmVyLCBjYj86ICgoKSA9PiB2b2lkKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLnRvKHRoaXMsIDAuNzUsIHthbHBoYTogMX0pO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLmNhbGwoY2IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVPdXQoY29sb3I6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmFscGhhID0gMTtcblxuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLnRvKHRoaXMsIDAuNzUsIHthbHBoYTogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tIFwicGl4aS1wYXJ0aWNsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpY2VQYXJ0aWNsZXMgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBQSVhJLkNvbnRhaW5lciwgeDogbnVtYmVyLCB5OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgc2NhbGVNdWx0aXA6IG51bWJlciA9IDEsIHNwZWVkTXVsdGlwOiBudW1iZXIgPSAxLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBzdHJpbmcgPSBcIiNmZmZmZmZcIikge1xuICAgICAgICBjb25zdCBzZXR0aW5nczogb2JqZWN0ID0ge1xuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAxMDAwIH0sXG4gICAgICAgICAgICBhZGRBdEJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgYWxwaGE6IHtcbiAgICAgICAgICAgICAgICBlbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDEgfSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgZW5kOiBjb2xvcixcbiAgICAgICAgICAgICAgICBzdGFydDogY29sb3IgfSxcbiAgICAgICAgICAgIGVtaXR0ZXJMaWZldGltZTogMC4wMSxcbiAgICAgICAgICAgIGZyZXF1ZW5jeTogMC4wMDEsXG4gICAgICAgICAgICBsaWZldGltZToge1xuICAgICAgICAgICAgICAgIG1heDogMC40LFxuICAgICAgICAgICAgICAgIG1pbjogMC4zIH0sXG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXM6IDEwLFxuICAgICAgICAgICAgbWF4U3BlZWQ6IDAsXG4gICAgICAgICAgICBub1JvdGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSB9LFxuICAgICAgICAgICAgcm90YXRpb25TcGVlZDoge1xuICAgICAgICAgICAgICAgIG1heDogMCxcbiAgICAgICAgICAgICAgICBtaW46IDAgfSxcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgZW5kOiAwLjAxICogc2NhbGVNdWx0aXAsXG4gICAgICAgICAgICAgICAgbWluaW11bVNjYWxlTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgICAgICBzdGFydDogMC42ICogc2NhbGVNdWx0aXAgfSxcbiAgICAgICAgICAgIHNwYXduVHlwZTogXCJwb2ludFwiLFxuICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICAgICAgbWluaW11bVNwZWVkTXVsdGlwbGllcjogMSxcbiAgICAgICAgICAgICAgICBzdGFydDogMzUwICogc3BlZWRNdWx0aXAgfSxcbiAgICAgICAgICAgIHN0YXJ0Um90YXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICAgICAgICBtaW46IDAgfX07XG5cbiAgICAgICAgc3VwZXIodmlldywgW1BJWEkuVGV4dHVyZS5XSElURV0sIHNldHRpbmdzKTtcblxuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSB0cnVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=