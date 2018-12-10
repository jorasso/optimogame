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

/***/ "./src_ts/gameparams.ts":
/*!******************************!*\
  !*** ./src_ts/gameparams.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var GameParams = (function () {
    function GameParams() {
        this.lives = 10;
        this.width = 320;
        this.height = 480;
        if (GameParams.instance) {
            throw new Error("Error: Instantiation failed: Use GameParams.getInstance() instead of new.");
        }
        GameParams.instance = this;
    }
    GameParams.getInstance = function () {
        return GameParams.instance;
    };
    GameParams.instance = new GameParams();
    return GameParams;
}());
exports["default"] = GameParams;


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
var gameparams_1 = __webpack_require__(/*! ./gameparams */ "./src_ts/gameparams.ts");
var healthbar_1 = __webpack_require__(/*! ./healthbar */ "./src_ts/healthbar.ts");
var pointsdisplay_1 = __webpack_require__(/*! ./pointsdisplay */ "./src_ts/pointsdisplay.ts");
var screeneffect_1 = __webpack_require__(/*! ./screeneffect */ "./src_ts/screeneffect.ts");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(restartCallback) {
        var _this = _super.call(this) || this;
        _this.lives = gameparams_1["default"].getInstance().lives;
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
        _this.pointsDisplay.x = gameparams_1["default"].getInstance().width - 5;
        _this.pointsDisplay.y = 0;
        _this.gameOverOverlay = new gameoveroverlay_1["default"]();
        _this.addChild(_this.gameOverOverlay);
        _this.gameOverOverlay.x = gameparams_1["default"].getInstance().width / 2;
        _this.gameOverOverlay.y = gameparams_1["default"].getInstance().height / 2 - 100;
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
        this.healthBar.setHealth(this.lives / gameparams_1["default"].getInstance().lives * 100);
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
        pos.x = Math.max(Math.min(gameparams_1["default"].getInstance().width, pos.x), 0);
        pos.y = Math.max(Math.min(gameparams_1["default"].getInstance().height, pos.y), 0);
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
var gameparams_1 = __webpack_require__(/*! ./gameparams */ "./src_ts/gameparams.ts");
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
        this.app = new pixi_js_1.Application(gameparams_1["default"].getInstance().width, gameparams_1["default"].getInstance().height, this.settings);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2RtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9nYW1lb3Zlcm92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVwYXJhbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVzY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvaGVhbHRoYmFyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyY190cy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyY190cy9wb2ludHNkaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyY190cy9zY3JlZW5lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL3NsaWNlcGFydGljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtB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RyxFQUFFLEdBQUc7Z0JBQ1IsR0FBRyxFQUFFLENBQUM7YUFBRTtTQUFDLENBQUM7UUFFbEIsMEJBQU0sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBQztRQUU1QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7SUFDM0IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQS9DMkMsd0JBQU8sR0ErQ2xEIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmNfdHMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IENvbnRhaW5lciwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHVibGljIHZ5OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBmYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbWFya2VkVG9TbGljZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG1hcmtlZEFzTWlzc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgcHJldkZvb2Q6IEZvb2Q7XG5cbiAgICBwdWJsaWMgc3ByaXRlOiBTcHJpdGUgPSBuZXcgU3ByaXRlKFBJWEkuVGV4dHVyZS5FTVBUWSk7XG5cbiAgICBwcml2YXRlIGN1bXVsVGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgcm90YXRpb25TcGVlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcm90YXRpb25EaXJlY3Rpb246IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrKGRlbHRhOiBudW1iZXIsIGdyYXZpdHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZmFsbGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudnkgKz0gZ3Jhdml0eSAqIGRlbHRhO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkICogdGhpcy5yb3RhdGlvbkRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gLT0gKHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMucm90YXRpb25EaXJlY3Rpb24pIC8gMjtcblxuICAgICAgICB0aGlzLmN1bXVsVGltZSArPSAxO1xuICAgICAgICB0aGlzLnNjYWxlLnggPSBNYXRoLnNpbih0aGlzLmN1bXVsVGltZSAvIDEwKSAqIDAuMyArIDEuMztcbiAgICAgICAgdGhpcy5zY2FsZS55ID0gTWF0aC5jb3ModGhpcy5jdW11bFRpbWUgLyAxNSkgKiAwLjE1ICsgMS4xNTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VtdWxUaW1lID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDAuMSArIDAuMTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbkRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXJrZWRUb1NsaWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFya2VkQXNNaXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNob29zZVJhbmRvbVRleHR1cmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hvb3NlUmFuZG9tVGV4dHVyZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZnJhbWVJbmRleDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjQpO1xuICAgICAgICBjb25zdCBmcmFtZU5hbWU6IHN0cmluZyA9IFwiZm9vZF9cIiArIGZyYW1lSW5kZXggKyBcIi5wbmdcIjtcblxuICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVOYW1lXTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmltcG9ydCBGb29kIGZyb20gXCIuL2Zvb2RcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuL2hlcm9cIjtcbmltcG9ydCBTbGljZVBhcnRpY2xlcyBmcm9tIFwiLi9zbGljZXBhcnRpY2xlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kTWFuYWdlciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwcml2YXRlIGRpc3RCZXR3ZWVuU3Bhd25zOiBudW1iZXIgPSAyMDtcbiAgICBwcml2YXRlIHN0YXJ0aW5nVmVsVmFyaWFuY2U6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGdyYXZpdHk6IG51bWJlciA9IDAuMDI7XG5cbiAgICBwcml2YXRlIGZvb2RzOiBGb29kW10gPSBbXTtcbiAgICBwcml2YXRlIGZvb2RPblRvcDogRm9vZDtcblxuICAgIHByaXZhdGUgZm9vZHNUb1NsaWNlOiBGb29kW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZm9vZCA9IG5ldyBGb29kKCk7XG5cbiAgICAgICAgICAgIGZvb2QueCA9IDUwICsgTWF0aC5yYW5kb20oKSAqIDIyMDtcbiAgICAgICAgICAgIGZvb2QueSA9IC01MDtcbiAgICAgICAgICAgIHRoaXMuZm9vZHMucHVzaChmb29kKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChmb29kKTtcblxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9vZC5wcmV2Rm9vZCA9IHRoaXMuZm9vZHNbaSAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb29kT25Ub3AgPSB0aGlzLmZvb2RzW3RoaXMuZm9vZHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgdGhpcy5mb29kc1swXS5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb29kc1swXS5wcmV2Rm9vZCA9IHRoaXMuZm9vZE9uVG9wO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrKGRlbHRhOiBudW1iZXIsIGhlcm86IEhlcm8pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGhlcm8uZ2V0R2xvYmFsQ29sbGlzaW9uUmVjdCgpO1xuXG4gICAgICAgIHRoaXMuZm9vZHMuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgICAgICAgICAgZm9vZC50aWNrKGRlbHRhLCB0aGlzLmdyYXZpdHkpO1xuXG4gICAgICAgICAgICAvLyBpZiBzaG91bGQgc3Bhd24gaW4gY2FzZSBpdCBpcyBub3QgZmFsbGluZyBjdXJyZW50bHlcbiAgICAgICAgICAgIGNvbnN0IGVub3VnaERpc3Q6IGJvb2xlYW4gPSBmb29kLnByZXZGb29kLnkgLSBmb29kLnkgPiB0aGlzLmRpc3RCZXR3ZWVuU3Bhd25zO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICFmb29kLmZhbGxpbmcgJiYgZm9vZC5wcmV2Rm9vZC5mYWxsaW5nICYmIGVub3VnaERpc3QpIHtcbiAgICAgICAgICAgICAgICBmb29kLnZ5ID0gIE1hdGgucmFuZG9tKCkgKiB0aGlzLnN0YXJ0aW5nVmVsVmFyaWFuY2U7XG4gICAgICAgICAgICAgICAgZm9vZC5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0aW5nVmVsVmFyaWFuY2UgKz0gMC4wMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RCZXR3ZWVuU3Bhd25zIC09IDAuMDE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RCZXR3ZWVuU3Bhd25zID0gTWF0aC5tYXgoMTAsIHRoaXMuZGlzdEJldHdlZW5TcGF3bnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBzaG91bGQgYmUgY291bnRlZCBhcyBtaXNzZWRcbiAgICAgICAgICAgIGlmIChmb29kLnkgPiByZWN0LmJvdHRvbSAmJiAhZm9vZC5tYXJrZWRBc01pc3NlZCkge1xuICAgICAgICAgICAgICAgIGZvb2QubWFya2VkQXNNaXNzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGVzOiBTbGljZVBhcnRpY2xlcyA9IG5ldyBTbGljZVBhcnRpY2xlcyh0aGlzLCBmb29kLngsIGZvb2QueSwgMS41LCAwLjUsIFwiI2ZmMDAwMFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VPblN0YXJ0KGZvb2QpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImZvb2QtbWlzc2VkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBzaG91bGQgYmUgYWN0dWFsbHkgc2xpY2VkXG4gICAgICAgICAgICAvLyBkb2Vzbid0IGhhcHBlbiBkaXJlY3RseSBvbiBjb2xsaXNpb24gZm9yIGJldHRlciB2aXN1YWwgZmVlbGluZ1xuICAgICAgICAgICAgaWYgKGZvb2QubWFya2VkVG9TbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIGFjdHVhbCBzbGljZSBpbiB0aGUgbWlkZGxlIG9mIGNvbGxpc2lvbiBib3ggb2YgYmVsb3dcbiAgICAgICAgICAgICAgICBpZiAoZm9vZC55ID49IChyZWN0LnRvcCArIHJlY3QuYm90dG9tKSAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGVzOiBTbGljZVBhcnRpY2xlcyA9IG5ldyBTbGljZVBhcnRpY2xlcyh0aGlzLCBmb29kLngsIGZvb2QueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZU9uU3RhcnQoZm9vZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImZvb2Qtc2xpY2VkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQ29sbGlzaW9uc1dpdGhIZXJvKGhlcm86IEhlcm8pOiB2b2lkIHtcblxuICAgICAgICBjb25zdCByZWN0ID0gaGVyby5nZXRHbG9iYWxDb2xsaXNpb25SZWN0KCk7XG5cbiAgICAgICAgdGhpcy5mb29kcy5mb3JFYWNoKChmb29kKSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9vZC54ID4gcmVjdC5sZWZ0ICYmIGZvb2QueCA8IHJlY3QucmlnaHQgJiYgZm9vZC55ID4gcmVjdC50b3AgJiYgZm9vZC55IDwgcmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBoZXJvLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgZm9vZC5tYXJrZWRUb1NsaWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYWNlT25TdGFydChmb29kOiBGb29kKTogdm9pZCB7XG4gICAgICAgIGZvb2QucmVzZXQoKTtcblxuICAgICAgICBmb29kLnggPSA1MCArIE1hdGgucmFuZG9tKCkgKiAyMjA7XG4gICAgICAgIGZvb2QueSA9IC01MDtcblxuICAgICAgICBmb29kLnByZXZGb29kID0gdGhpcy5mb29kT25Ub3A7XG4gICAgICAgIHRoaXMuZm9vZE9uVG9wID0gZm9vZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFRleHQgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5pbXBvcnQgeyBCYWNrLCBUaW1lbGluZUxpdGUgfSBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3Zlck92ZXJsYXkgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgZ2FtZU92ZXJUZXh0OiBUZXh0O1xuICAgIHByaXZhdGUgdGFwVG9QbGF5VGV4dDogVGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe30pO1xuXG4gICAgICAgIHN0eWxlLmZpbGwgPSAweDAwMDAwMDtcbiAgICAgICAgc3R5bGUuYWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBzdHlsZS5zdHJva2UgPSAweGZmZmZmZjtcbiAgICAgICAgc3R5bGUuc3Ryb2tlVGhpY2tuZXNzID0gNjtcbiAgICAgICAgc3R5bGUuZm9udFNpemUgPSA0MDtcbiAgICAgICAgc3R5bGUubWl0ZXJMaW1pdCA9IDM7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQgPSBuZXcgVGV4dChcIkdBTUUgT1ZFUlwiLCBzdHlsZSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmdhbWVPdmVyVGV4dCk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQuYWxwaGEgPSAwO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlMiA9IG5ldyBQSVhJLlRleHRTdHlsZSh7fSk7XG5cbiAgICAgICAgc3R5bGUyLmZpbGwgPSAweDAwMDAwMDtcbiAgICAgICAgc3R5bGUyLmFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgc3R5bGUyLnN0cm9rZSA9IDB4ZmZmZmZmO1xuICAgICAgICBzdHlsZTIuc3Ryb2tlVGhpY2tuZXNzID0gMDtcbiAgICAgICAgc3R5bGUyLmZvbnRTaXplID0gMjA7XG4gICAgICAgIHN0eWxlMi5taXRlckxpbWl0ID0gMztcblxuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQgPSBuZXcgVGV4dChcIlRhcCB0byBwbGF5IGFnYWluIVwiLCBzdHlsZTIpO1xuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQuYW5jaG9yLnNldCgwLjUpO1xuICAgICAgICB0aGlzLnRhcFRvUGxheVRleHQueSA9IDUwO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGFwVG9QbGF5VGV4dCk7XG5cbiAgICAgICAgdGhpcy50YXBUb1BsYXlUZXh0LmFscGhhID0gMDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnkgLT0gMjAwO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnNjYWxlLnNldCgwLjc1KTtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMuZ2FtZU92ZXJUZXh0LCAwLjMsIHthbHBoYTogMX0pO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy5nYW1lT3ZlclRleHQsIDEsIHt5OiAwLCBlYXNlOiBCYWNrLmVhc2VPdXR9KTtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMuZ2FtZU92ZXJUZXh0LnNjYWxlLCAwLjUsIHt4OiAxLCB5OiAxLCBlYXNlOiBCYWNrLmVhc2VPdXR9KS5kZWxheSgwLjUpO1xuXG4gICAgICAgIHRoaXMudGFwVG9QbGF5VGV4dC54ID0gMzAwO1xuXG4gICAgICAgIG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAudG8odGhpcy50YXBUb1BsYXlUZXh0LCAwLjI1LCB7YWxwaGE6IDF9KS5kZWxheSgxLjE1KTtcblxuICAgICAgICBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgLnRvKHRoaXMudGFwVG9QbGF5VGV4dCwgMC42NSwge3g6IDAsIGVhc2U6IEJhY2suZWFzZU91dH0pXG4gICAgICAgIC5jYWxsKGNiKS5kZWxheSgxKTtcblxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQYXJhbXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZVBhcmFtc1xuICAgIHtcbiAgICAgICAgcmV0dXJuIEdhbWVQYXJhbXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdhbWVQYXJhbXMgPSBuZXcgR2FtZVBhcmFtcygpO1xuXG4gICAgcHVibGljIGxpdmVzOiBudW1iZXIgPSAxMDtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDMyMDtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSA0ODA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKEdhbWVQYXJhbXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yOiBJbnN0YW50aWF0aW9uIGZhaWxlZDogVXNlIEdhbWVQYXJhbXMuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVBhcmFtcy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBQb2ludCwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuL2hlcm9cIjtcblxuaW1wb3J0IEZvb2RNYW5hZ2VyIGZyb20gXCIuL2Zvb2RtYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZU92ZXJPdmVybGF5IGZyb20gXCIuL2dhbWVvdmVyb3ZlcmxheVwiO1xuaW1wb3J0IEdhbWVQYXJhbXMgZnJvbSBcIi4vZ2FtZXBhcmFtc1wiO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tIFwiLi9oZWFsdGhiYXJcIjtcbmltcG9ydCBQb2ludHNEaXNwbGF5IGZyb20gXCIuL3BvaW50c2Rpc3BsYXlcIjtcbmltcG9ydCBTY3JlZW5FZmZlY3RzIGZyb20gXCIuL3NjcmVlbmVmZmVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IEdhbWVQYXJhbXMuZ2V0SW5zdGFuY2UoKS5saXZlcztcbiAgICBwcml2YXRlIHBvaW50czogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgZ2FtZUVuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW5SZXN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGJhY2tncm91bmQ6IFNwcml0ZTtcbiAgICBwcml2YXRlIGhlcm86IEhlcm87XG4gICAgcHJpdmF0ZSBmb29kTWFuYWdlcjogRm9vZE1hbmFnZXI7XG4gICAgcHJpdmF0ZSBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcbiAgICBwcml2YXRlIHBvaW50c0Rpc3BsYXk6IFBvaW50c0Rpc3BsYXk7XG4gICAgcHJpdmF0ZSBzY3JlZW5FZmZlY3RzOiBTY3JlZW5FZmZlY3RzO1xuICAgIHByaXZhdGUgZ2FtZU92ZXJPdmVybGF5OiBHYW1lT3Zlck92ZXJsYXk7XG5cbiAgICBwcml2YXRlIHJlc3RhcnRDYWxsYmFjazogKCgpID0+IHZvaWQpO1xuXG4gICAgY29uc3RydWN0b3IocmVzdGFydENhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbGJhY2sgPSByZXN0YXJ0Q2FsbGJhY2s7XG5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IFNwcml0ZShQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtcImJhY2tncm91bmRfYS5wbmdcIl0pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm9uKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oXCJwb2ludGVyZG93blwiLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmhlcm8pO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIgPSBuZXcgRm9vZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvb2RNYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5mb29kTWFuYWdlci5vbihcImZvb2QtbWlzc2VkXCIsIHRoaXMub25Gb29kTWlzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLm9uKFwiZm9vZC1zbGljZWRcIiwgdGhpcy5vbkZvb2RTbGljZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5oZWFsdGhCYXIpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnggPSA1O1xuICAgICAgICB0aGlzLmhlYWx0aEJhci55ID0gNTtcblxuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkgPSBuZXcgUG9pbnRzRGlzcGxheSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucG9pbnRzRGlzcGxheSk7XG5cbiAgICAgICAgdGhpcy5wb2ludHNEaXNwbGF5LnggPSBHYW1lUGFyYW1zLmdldEluc3RhbmNlKCkud2lkdGggLSA1O1xuICAgICAgICB0aGlzLnBvaW50c0Rpc3BsYXkueSA9IDA7XG5cbiAgICAgICAgdGhpcy5nYW1lT3Zlck92ZXJsYXkgPSBuZXcgR2FtZU92ZXJPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5nYW1lT3Zlck92ZXJsYXkpO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnggPSBHYW1lUGFyYW1zLmdldEluc3RhbmNlKCkud2lkdGggLyAyO1xuICAgICAgICB0aGlzLmdhbWVPdmVyT3ZlcmxheS55ID0gR2FtZVBhcmFtcy5nZXRJbnN0YW5jZSgpLmhlaWdodCAvIDIgLSAxMDA7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzID0gbmV3IFNjcmVlbkVmZmVjdHModGhpcywgMzIwLCA0ODAsIDB4ZmYwMDAwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNjcmVlbkVmZmVjdHMpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5mYWRlT3V0KDB4MDAwMDAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy5oZXJvLnRpY2soZGVsdGEpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLnRpY2soZGVsdGEsIHRoaXMuaGVybyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLmNoZWNrQ29sbGlzaW9uc1dpdGhIZXJvKHRoaXMuaGVybyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRm9vZE1pc3NlZCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpdmVzIC09IDE7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIuc2V0SGVhbHRoKHRoaXMubGl2ZXMgLyBHYW1lUGFyYW1zLmdldEluc3RhbmNlKCkubGl2ZXMgKiAxMDApO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5mbHVzaCgweGZmMDAwMCk7XG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSg1KTtcblxuICAgICAgICBpZiAodGhpcy5saXZlcyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Gb29kU2xpY2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9pbnRzICs9IDEwO1xuXG4gICAgICAgIHRoaXMucG9pbnRzRGlzcGxheS5zZXRQb2ludHModGhpcy5wb2ludHMpO1xuXG4gICAgICAgIHRoaXMuc2NyZWVuRWZmZWN0cy5zaGFrZSgzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25HYW1lT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJPdmVybGF5LnNob3coKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5SZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub2ZmKFwicG9pbnRlcmRvd25cIiwgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKFwiZm9vZC1taXNzZWRcIiwgdGhpcy5vbkZvb2RNaXNzZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZm9vZE1hbmFnZXIub2ZmKFwiZm9vZC1zbGljZWRcIiwgdGhpcy5vbkZvb2RTbGljZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5zY3JlZW5FZmZlY3RzLmZhZGVJbigweDAwMDAwMCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJNb3ZlKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCkge1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zOiBQb2ludCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICAgICAgcG9zLnggPSBNYXRoLm1heChNYXRoLm1pbihHYW1lUGFyYW1zLmdldEluc3RhbmNlKCkud2lkdGgsIHBvcy54KSwgMCk7XG4gICAgICAgIHBvcy55ID0gTWF0aC5tYXgoTWF0aC5taW4oR2FtZVBhcmFtcy5nZXRJbnN0YW5jZSgpLmhlaWdodCwgcG9zLnkpLCAwKTtcblxuICAgICAgICB0aGlzLmhlcm8udXBkYXRlVGFyZ2V0UG9zaXRpb24ocG9zLngpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qb2ludGVyRG93bihlOiBQSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuUmVzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgdGhpcy5jYW5SZXN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aEJhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwcml2YXRlIGRlY29yYXRpb246IFNwcml0ZTtcbiAgICBwcml2YXRlICBiYXI6IFNwcml0ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5kZWNvcmF0aW9uID0gbmV3IFNwcml0ZShQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVtcImhlYWx0aF9iYXJfZGVjb3JhdGlvbi5wbmdcIl0pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZGVjb3JhdGlvbik7XG5cbiAgICAgICAgdGhpcy5iYXIgPSBuZXcgU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlW1wiaGVhbHRoX2Jhci5wbmdcIl0pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFyKTtcbiAgICAgICAgdGhpcy5iYXIueCA9IDE0O1xuXG4gICAgICAgIHRoaXMuc2V0SGVhbHRoKDEwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhlYWx0aChwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgcGVyY2VudCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgcGVyY2VudCkpO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLnRyaW0ud2lkdGggPSB0aGlzLmJhci50ZXh0dXJlLm9yaWcud2lkdGggKiBwZXJjZW50IC8gMTAwO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmJhci50ZXh0dXJlLnJlcXVpcmVzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYXIudGV4dHVyZS5fdXBkYXRlVXZzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZW51bSBTdGF0ZSB7XG4gICAgSWRsZSxcbiAgICBXYWxrLFxuICAgIFNsaWNlIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwdWJsaWMgaXNTbGljaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogU3RhdGUgPSBTdGF0ZS5JZGxlO1xuXG4gICAgcHJpdmF0ZSBpZGxlQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgcHJpdmF0ZSB3YWxrQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgcHJpdmF0ZSBzbGljZUFuaW06IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuXG4gICAgcHJpdmF0ZSBhbmltczogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSB0YXJnZXRYOiBudW1iZXIgPSAxNjA7XG5cbiAgICBwcml2YXRlIGxhc3RUYXJnZXRVcGRhdGU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGxvY2FsQ29sbGlzaW9uUmVjdDogUElYSS5SZWN0YW5nbGUgPSBuZXcgUElYSS5SZWN0YW5nbGUoLTMwLCAtMTAsIDYwLCA0MCk7XG4gICAgcHJpdmF0ZSBkZWJ1Z0NvbGxpc2lvbkdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaWRsZUFuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKFwiaWRsZVwiLCBbMCwgMSwgMiwgM10pO1xuICAgICAgICB0aGlzLndhbGtBbmltID0gdGhpcy5jcmVhdGVBbmltYXRlZFNwcml0ZShcIndhbGtcIiwgWzAsIDEsIDIsIDMsIDRdKTtcbiAgICAgICAgdGhpcy5zbGljZUFuaW0gPSB0aGlzLmNyZWF0ZUFuaW1hdGVkU3ByaXRlKFwic2xpY2VcIiwgWzAsIDEsIDIsIDIsIDIsIDIsIDJdKTtcblxuICAgICAgICB0aGlzLndhbGtBbmltLmFuaW1hdGlvblNwZWVkID0gMC42O1xuXG4gICAgICAgIHRoaXMuc2xpY2VBbmltLmxvb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbGljZUFuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjQ7XG5cbiAgICAgICAgdGhpcy5zbGljZUFuaW0ub25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTbGljaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuSWRsZSk7XG5cbiAgICAgICAgdGhpcy54ID0gMTYwO1xuICAgICAgICB0aGlzLnkgPSAzNTA7XG5cbiAgICAgICAgdGhpcy5kZWJ1Z0NvbGxpc2lvbkdyYXBoaWNzLmJlZ2luRmlsbCgweGZmMDAwMCwgMC40KTtcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbGxpc2lvbkdyYXBoaWNzLmRyYXdSZWN0KHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LngsXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC55LCB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC53aWR0aCwgdGhpcy5sb2NhbENvbGxpc2lvblJlY3QuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCArPSAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAvIDM7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hhbmdlVG9JZGxlV2hpbGVXYWxrKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuSWRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG91bGRDaGFuZ2VUb1dhbGtXaGlsZUlkbGUoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5XYWxrKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRhcmdldFBvc2l0aW9uKHg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRhcmdldFggPSB4O1xuICAgICAgICB0aGlzLmxhc3RUYXJnZXRVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzbGljZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5TbGljZSk7XG4gICAgICAgIHRoaXMuaXNTbGljaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0R2xvYmFsQ29sbGlzaW9uUmVjdCgpOiBQSVhJLlJlY3RhbmdsZSB7XG4gICAgICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUgKFxuICAgICAgICAgICAgdGhpcy54ICsgdGhpcy5sb2NhbENvbGxpc2lvblJlY3QueCxcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LnksXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ29sbGlzaW9uUmVjdC53aWR0aCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb2xsaXNpb25SZWN0LmhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSB7XG4gICAgICAgIGNvbnN0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jdXJyZW50U3RhdGUgPT09IFN0YXRlLldhbGs7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5pc09uVGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDI1MCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb24gJiYgdGltZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpIHtcbiAgICAgICAgY29uc3Qgbm90U2xpY2luZyA9ICF0aGlzLmlzU2xpY2luZztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuSWRsZTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAhdGhpcy5pc09uVGFyZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICByZXR1cm4gbm90U2xpY2luZyAmJiBzdGF0ZSAmJiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzT25UYXJnZXRQb3NpdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMueCAtIHRoaXMudGFyZ2V0WCkgPCAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQW5pbWF0ZWRTcHJpdGUobmFtZTogc3RyaW5nLCBmcmFtZUluZGV4ZXM6IG51bWJlcltdKTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGUge1xuICAgICAgICBjb25zdCBmcmFtZXM6IFRleHR1cmVbXSA9IFtdO1xuXG4gICAgICAgIGZyYW1lSW5kZXhlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTmFtZSA9IFwiaGVyb19cIiArIG5hbWUgKyBcIl9cIiArIHZhbCArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgZnJhbWVzLnB1c2goUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbZnJhbWVOYW1lXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGVkU3ByaXRlOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSA9IG5ldyBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZShmcmFtZXMpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYW5pbWF0ZWRTcHJpdGUpO1xuICAgICAgICBhbmltYXRlZFNwcml0ZS5wbGF5KCk7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLmFuaW1hdGlvblNwZWVkID0gMC4yO1xuICAgICAgICBhbmltYXRlZFNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgdGhpcy5hbmltcy5wdXNoKGFuaW1hdGVkU3ByaXRlKTtcblxuICAgICAgICByZXR1cm4gYW5pbWF0ZWRTcHJpdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdGF0ZShzdGF0ZTogU3RhdGUpOiB2b2lkIHtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlLklkbGUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLmlkbGVBbmltKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuU2xpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLnNsaWNlQW5pbSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFN0YXRlLldhbGspIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLndhbGtBbmltKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5QW5pbWF0aW9uKGFuaW1hdGlvbjogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltcy5mb3JFYWNoKChhbmltKSA9PiB7XG4gICAgICAgICAgICBpZiAoYW5pbSA9PT0gYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYW5pbS5nb3RvQW5kUGxheSgwKTtcbiAgICAgICAgICAgICAgICBhbmltLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhbmltLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uT3B0aW9ucywgTWFza01hbmFnZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IEdhbWVQYXJhbXMgZnJvbSBcIi4vZ2FtZXBhcmFtc1wiO1xuaW1wb3J0IEdhbWVTY2VuZSBmcm9tIFwiLi9nYW1lc2NlbmVcIjtcblxuY2xhc3MgTWFpbiB7XG4gICAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogQXBwbGljYXRpb25PcHRpb25zID0ge1xuICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MDAwMDAwIH07XG5cbiAgICBwcml2YXRlIGdhbWVTY2VuZTogR2FtZVNjZW5lO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFBJWEkubG9hZGVyXG4gICAgICAgICAgICAuYWRkKFwiaW1hZ2VzL2F0bGFzZXMuanNvblwiKVxuICAgICAgICAgICAgLmxvYWQodGhpcy5sb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRlZChsb2FkZXI6IFBJWEkubG9hZGVycy5Mb2FkZXIsIHJlc291cmNlczogUElYSS5sb2FkZXJzLlJlc291cmNlRGljdGlvbmFyeSkge1xuXG4gICAgICAgIHRoaXMuYXBwID0gbmV3IEFwcGxpY2F0aW9uKEdhbWVQYXJhbXMuZ2V0SW5zdGFuY2UoKS53aWR0aCwgR2FtZVBhcmFtcy5nZXRJbnN0YW5jZSgpLmhlaWdodCwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XG5cbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMucmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5nYW1lU2NlbmUpO1xuXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnRpY2soZGVsdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLmdhbWVTY2VuZSA9IG5ldyBHYW1lU2NlbmUodGhpcy5yZXN0YXJ0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmdhbWVTY2VuZSk7XG4gICAgfVxufVxuXG5jb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiIsImltcG9ydCB7IFRleHQgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludHNEaXNwbGF5IGV4dGVuZHMgVGV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHt9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmZpbGwgPSAweGZmZmZmZjtcbiAgICAgICAgdGhpcy5zdHlsZS5hbGlnbiA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5zdHJva2UgPSAweDAwMDAwMDtcbiAgICAgICAgdGhpcy5zdHlsZS5zdHJva2VUaGlja25lc3MgPSA1O1xuICAgICAgICB0aGlzLnN0eWxlLmZvbnRTaXplID0gMjA7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDEsIDApO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IFwiMDAwMFwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQb2ludHMocG9pbnRzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gcG9pbnRzICsgXCJcIjtcblxuICAgICAgICBpZiAocG9pbnRzIDwgMTApIHtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IFwiMDAwXCIgKyBwb2ludHM7XG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzIDwgMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBcIjAwXCIgKyBwb2ludHM7XG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzIDwgMTAwMCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCIwXCIgKyBwb2ludHM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwbGF5T2JqZWN0LCBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5pbXBvcnQgeyBUaW1lbGluZUxpdGUgfSBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5FZmZlY3RzIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBwcml2YXRlIHNoYWtlVGltZWxpbmU6IFRpbWVsaW5lTGl0ZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICBwcml2YXRlIGZsdXNoVGltZWxpbmU6IFRpbWVsaW5lTGl0ZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuICAgIHByaXZhdGUgc2hha2VWaWV3OiBEaXNwbGF5T2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3Ioc2hha2VWaWV3OiBEaXNwbGF5T2JqZWN0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBzdXBlcihQSVhJLlRleHR1cmUuV0hJVEUpO1xuXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KHdpZHRoIC8gdGhpcy50ZXh0dXJlLndpZHRoLCBoZWlnaHQgLyB0aGlzLnRleHR1cmUuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmFscGhhID0gMDtcblxuICAgICAgICB0aGlzLnNoYWtlVmlldyA9IHNoYWtlVmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmx1c2goY29sb3I6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmFscGhhID0gLjU7XG5cbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS50byh0aGlzLCAwLjIsIHthbHBoYTogMH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaGFrZShzdHJlbmd0aDogbnVtYmVyLCBzaG9ydDogYm9vbGVhbiA9IGZhbHNlLCBhbmdsZT86IG51bWJlcik6IHZvaWQge1xuXG4gICAgICAgIGlmIChhbmdsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFtcFg6IG51bWJlciA9IE1hdGguY29zKGFuZ2xlKSAqIHN0cmVuZ3RoO1xuICAgICAgICBjb25zdCBhbXBZOiBudW1iZXIgPSBNYXRoLnNpbihhbmdsZSkgKiBzdHJlbmd0aDtcblxuICAgICAgICB0aGlzLnNoYWtlVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lXG4gICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogYW1wWCwgeTogYW1wWX0pXG4gICAgICAgIC50byh0aGlzLnNoYWtlVmlldywgMC4xLCB7eDogLWFtcFgsIHk6IC1hbXBZfSk7XG5cbiAgICAgICAgaWYgKCFzaG9ydCkge1xuICAgICAgICAgICAgdGhpcy5zaGFrZVRpbWVsaW5lXG4gICAgICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IGFtcFgsIHk6IGFtcFl9KVxuICAgICAgICAgICAgLnRvKHRoaXMuc2hha2VWaWV3LCAwLjEsIHt4OiAtYW1wWCwgeTogLWFtcFl9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hha2VUaW1lbGluZVxuICAgICAgICAudG8odGhpcy5zaGFrZVZpZXcsIDAuMSwge3g6IDAsIHk6IDB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZUluKGNvbG9yOiBudW1iZXIsIGNiPzogKCgpID0+IHZvaWQpKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGludCA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC43NSwge2FscGhhOiAxfSk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUuY2FsbChjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZU91dChjb2xvcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGludCA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xuXG4gICAgICAgIHRoaXMuZmx1c2hUaW1lbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmZsdXNoVGltZWxpbmUudG8odGhpcywgMC43NSwge2FscGhhOiAwfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNoYWtlVGltZWxpbmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFRpbWVsaW5lLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gXCJwaXhpLXBhcnRpY2xlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGljZVBhcnRpY2xlcyBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFBJWEkuQ29udGFpbmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcixcbiAgICAgICAgICAgICAgICBzY2FsZU11bHRpcDogbnVtYmVyID0gMSwgc3BlZWRNdWx0aXA6IG51bWJlciA9IDEsXG4gICAgICAgICAgICAgICAgY29sb3I6IHN0cmluZyA9IFwiI2ZmZmZmZlwiKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzOiBvYmplY3QgPSB7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEwMDAgfSxcbiAgICAgICAgICAgIGFkZEF0QmFjazogZmFsc2UsXG4gICAgICAgICAgICBhbHBoYToge1xuICAgICAgICAgICAgICAgIGVuZDogMSxcbiAgICAgICAgICAgICAgICBzdGFydDogMSB9LFxuICAgICAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICBlbmQ6IGNvbG9yLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBjb2xvciB9LFxuICAgICAgICAgICAgZW1pdHRlckxpZmV0aW1lOiAwLjAxLFxuICAgICAgICAgICAgZnJlcXVlbmN5OiAwLjAwMSxcbiAgICAgICAgICAgIGxpZmV0aW1lOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAwLjQsXG4gICAgICAgICAgICAgICAgbWluOiAwLjMgfSxcbiAgICAgICAgICAgIG1heFBhcnRpY2xlczogMTAsXG4gICAgICAgICAgICBtYXhTcGVlZDogMCxcbiAgICAgICAgICAgIG5vUm90YXRpb246IGZhbHNlLFxuICAgICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5IH0sXG4gICAgICAgICAgICByb3RhdGlvblNwZWVkOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICAgICAgICAgIG1pbjogMCB9LFxuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICBlbmQ6IDAuMDEgKiBzY2FsZU11bHRpcCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtU2NhbGVNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLjYgKiBzY2FsZU11bHRpcCB9LFxuICAgICAgICAgICAgc3Bhd25UeXBlOiBcInBvaW50XCIsXG4gICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtU3BlZWRNdWx0aXBsaWVyOiAxLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAzNTAgKiBzcGVlZE11bHRpcCB9LFxuICAgICAgICAgICAgc3RhcnRSb3RhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heDogMzYwLFxuICAgICAgICAgICAgICAgIG1pbjogMCB9fTtcblxuICAgICAgICBzdXBlcih2aWV3LCBbUElYSS5UZXh0dXJlLldISVRFXSwgc2V0dGluZ3MpO1xuXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IHRydWU7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==