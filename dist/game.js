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
    function Food(texturesCache) {
        var _this = _super.call(this) || this;
        _this.vy = 0;
        _this.falling = false;
        _this.markedToSlice = false;
        var frameIndex = Math.floor(Math.random() * 64);
        var frameName = 'food_' + frameIndex + '.png';
        _this.sprite = new pixi_js_1.Sprite(texturesCache[frameName]);
        _this.sprite.anchor.set(0.5);
        _this.addChild(_this.sprite);
        return _this;
    }
    Food.prototype.tick = function (delta, gravity) {
        if (!this.falling) {
            return;
        }
        this.vy += gravity * delta;
        this.y += this.vy * delta;
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
    function FoodManager(texturesCache) {
        var _this = _super.call(this) || this;
        _this.foods = [];
        _this.foodsToSlice = [];
        for (var i = 0; i < 10; i++) {
            var food = new food_1["default"](texturesCache);
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
            if (food.y > 500) {
                _this.placeOnStart(food);
            }
            if (!food.falling && food.prevFood.falling && food.prevFood.y - food.y > 10) {
                food.vy = 0;
                food.falling = true;
            }
            if (food.markedToSlice) {
                var y0 = hero.y + hero.collisionRect.y;
                var y1 = hero.y + hero.collisionRect.y + hero.collisionRect.height;
                if (food.y >= (y0 + y1) / 2) {
                    new sliceparticles_1["default"](_this, food.x, food.y);
                    _this.placeOnStart(food);
                }
            }
        });
        this.checkCollisionsWithHero(hero);
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
        food.y = -50;
        food.prevFood = this.foodOnTop;
        this.foodOnTop = food;
        food.vy = 0;
        food.falling = false;
        food.markedToSlice = false;
    };
    return FoodManager;
}(pixi_js_1.Container));
exports["default"] = FoodManager;


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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene(texturesCache) {
        var _this = _super.call(this) || this;
        _this.background = new pixi_js_1.Sprite(texturesCache['background_a.png']);
        _this.addChild(_this.background);
        _this.background.interactive = true;
        _this.background.on('pointermove', _this.onPointerMove.bind(_this));
        _this.background.on('pointerdown', _this.onPointerDown.bind(_this));
        _this.hero = new hero_1["default"](texturesCache);
        _this.addChild(_this.hero);
        _this.foodManager = new foodmanager_1["default"](texturesCache);
        _this.addChild(_this.foodManager);
        return _this;
    }
    GameScene.prototype.onPointerMove = function (e) {
        var pos = e.data.getLocalPosition(this.background);
        pos.x = Math.max(Math.min(320, pos.x), 0);
        pos.y = Math.max(Math.min(480, pos.y), 0);
        this.hero.updateTargetPosition(pos.x);
    };
    GameScene.prototype.onPointerDown = function (e) {
        this.hero.slice();
    };
    GameScene.prototype.tick = function (delta) {
        this.hero.tick(delta);
        this.foodManager.tick(delta, this.hero);
    };
    return GameScene;
}(pixi_js_1.Container));
exports["default"] = GameScene;


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
    function Hero(texturesCache) {
        var _this = _super.call(this) || this;
        _this.currentState = State.Idle;
        _this.anims = [];
        _this.targetX = 160;
        _this.isSlicing = false;
        _this.lastTargetUpdate = 0;
        _this.collisionRect = new PIXI.Rectangle(-30, -10, 60, 40);
        _this.debugCollisionGraphics = new PIXI.Graphics();
        _this.texturesCache = texturesCache;
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
        _this.addChild(_this.debugCollisionGraphics);
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
        var _this = this;
        var frames = [];
        frameIndexes.forEach(function (val) {
            var frameName = 'hero_' + name + '_' + val + '.png';
            frames.push(_this.texturesCache[frameName]);
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
            backgroundColor: 0xffff00,
            antialias: false
        };
        PIXI.loader
            .add('images/atlases.json')
            .load(this.loaded.bind(this));
    }
    Main.prototype.loaded = function (loader, resources) {
        this.textures = resources['images/atlases.json'].textures;
        this.app = new pixi_js_1.Application(320, 480, this.settings);
        document.body.appendChild(this.app.view);
        this.gameScene = new gamescene_1["default"](this.textures);
        this.app.stage.addChild(this.gameScene);
        this.app.ticker.add(this.gameScene.tick.bind(this.gameScene));
    };
    return Main;
}());


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
    function SliceParticles(view, x, y) {
        var _this = this;
        var settings = {
            alpha: {
                start: 1,
                end: 1
            },
            scale: {
                start: 0.6,
                end: 0.01,
                minimumScaleMultiplier: 1
            },
            color: {
                start: "#e4f9ff",
                end: "#ffffff"
            },
            speed: {
                start: 350,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2Zvb2RtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyY190cy9nYW1lc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2hlcm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL3NsaWNlcGFydGljbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURB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QUcsRUFBRTtnQkFDRCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNQO1lBQ0QsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLE9BQU87U0FDckIsQ0FBQztRQUNGLDBCQUFNLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQUM7UUFFNUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0lBQzNCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0F2RDJDLHdCQUFPLEdBdURsRCIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjX3RzL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBTcHJpdGUsIEdyYXBoaWNzLCBDb250YWluZXIsIFBvaW50IH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQge1RleHR1cmVzQ2FjaGV9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgdnk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGZhbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBtYXJrZWRUb1NsaWNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgcHJldkZvb2Q6IEZvb2Q7XG5cbiAgICBzcHJpdGU6IFNwcml0ZTtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlc0NhY2hlOiBUZXh0dXJlc0NhY2hlKSB7IFxuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgZnJhbWVJbmRleDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjQpO1xuICAgICAgICBsZXQgZnJhbWVOYW1lOiBzdHJpbmcgPSAnZm9vZF8nICsgZnJhbWVJbmRleCArICcucG5nJztcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZXNDYWNoZVtmcmFtZU5hbWVdKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrIChkZWx0YTogbnVtYmVyLCBncmF2aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmZhbGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZ5ICs9IGdyYXZpdHkgKiBkZWx0YTtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiBkZWx0YTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgJ3BpeGktcGFydGljbGVzJztcblxuaW1wb3J0IHtUZXh0dXJlc0NhY2hlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBGb29kIGZyb20gJy4vZm9vZCc7XG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IFNsaWNlUGFydGljbGVzIGZyb20gJy4vc2xpY2VwYXJ0aWNsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kTWFuYWdlciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBmb29kczogRm9vZFtdID0gW107XG4gICAgZm9vZE9uVG9wOiBGb29kO1xuXG4gICAgZm9vZHNUb1NsaWNlOiBGb29kW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVzQ2FjaGU6IFRleHR1cmVzQ2FjaGUpIHsgXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZm9vZCA9IG5ldyBGb29kKHRleHR1cmVzQ2FjaGUpO1xuXG4gICAgICAgICAgICBmb29kLnggPSA1MCArIE1hdGgucmFuZG9tKCkgKiAyMjA7XG4gICAgICAgICAgICBmb29kLnkgPSAtNTA7XG4gICAgICAgICAgICB0aGlzLmZvb2RzLnB1c2goZm9vZCk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoZm9vZCk7XG5cbiAgICAgICAgICAgIGlmIChpID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb29kLnByZXZGb29kID0gdGhpcy5mb29kc1tpIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvb2RPblRvcCA9IHRoaXMuZm9vZHNbdGhpcy5mb29kcy5sZW5ndGggLSAxXTtcblxuICAgICAgICB0aGlzLmZvb2RzWzBdLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RzWzBdLnByZXZGb29kID0gdGhpcy5mb29kT25Ub3A7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2sgKGRlbHRhOiBudW1iZXIsIGhlcm86IEhlcm8pOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmZvb2RzLmZvckVhY2goZm9vZCA9PiB7XG4gICAgICAgICAgICBmb29kLnRpY2soZGVsdGEsIDAuMDIpO1xuXG4gICAgICAgICAgICBpZihmb29kLnkgPiA1MDApe1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VPblN0YXJ0KGZvb2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZvb2QuZmFsbGluZyAmJiBmb29kLnByZXZGb29kLmZhbGxpbmcgJiYgZm9vZC5wcmV2Rm9vZC55IC0gZm9vZC55ID4gMTApe1xuICAgICAgICAgICAgICAgIGZvb2QudnkgPSAwO1xuICAgICAgICAgICAgICAgIGZvb2QuZmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb29kLm1hcmtlZFRvU2xpY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHkwOiBudW1iZXIgPSBoZXJvLnkgKyBoZXJvLmNvbGxpc2lvblJlY3QueTtcbiAgICAgICAgICAgICAgICBsZXQgeTE6IG51bWJlciA9IGhlcm8ueSArIGhlcm8uY29sbGlzaW9uUmVjdC55ICsgaGVyby5jb2xsaXNpb25SZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZihmb29kLnkgPj0gKHkwICsgeTEpLzIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNsaWNlUGFydGljbGVzKHRoaXMsIGZvb2QueCwgZm9vZC55KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlT25TdGFydChmb29kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zV2l0aEhlcm8oaGVybyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrQ29sbGlzaW9uc1dpdGhIZXJvIChoZXJvOiBIZXJvKTogdm9pZCB7XG4gICAgICAgIGxldCB4MDogbnVtYmVyID0gaGVyby54ICsgaGVyby5jb2xsaXNpb25SZWN0Lng7XG4gICAgICAgIGxldCB5MDogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0Lnk7XG4gICAgICAgIGxldCB4MTogbnVtYmVyID0gaGVyby54ICsgaGVyby5jb2xsaXNpb25SZWN0LnggKyBoZXJvLmNvbGxpc2lvblJlY3Qud2lkdGg7XG4gICAgICAgIGxldCB5MTogbnVtYmVyID0gaGVyby55ICsgaGVyby5jb2xsaXNpb25SZWN0LnkgKyBoZXJvLmNvbGxpc2lvblJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZm9vZHMuZm9yRWFjaChmb29kID0+IHtcbiAgICAgICAgICAgIGlmIChmb29kLnggPiB4MCAmJiBmb29kLnggPCB4MSAmJiBmb29kLnkgPiB5MCAmJiBmb29kLnkgPCB5MSkge1xuICAgICAgICAgICAgICAgIGhlcm8uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBmb29kLm1hcmtlZFRvU2xpY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBwbGFjZU9uU3RhcnQgKGZvb2Q6IEZvb2QpOiB2b2lkIHtcbiAgICAgICAgZm9vZC55ID0gLTUwO1xuICAgICAgICBmb29kLnByZXZGb29kID0gdGhpcy5mb29kT25Ub3A7XG4gICAgICAgIHRoaXMuZm9vZE9uVG9wID0gZm9vZDtcbiAgICAgICAgZm9vZC52eSA9IDA7XG4gICAgICAgIGZvb2QuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICBmb29kLm1hcmtlZFRvU2xpY2UgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlLCBHcmFwaGljcywgQ29udGFpbmVyLCBQb2ludCB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IHtUZXh0dXJlc0NhY2hlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgRm9vZE1hbmFnZXIgZnJvbSAnLi9mb29kbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogU3ByaXRlO1xuICAgIGhlcm86IEhlcm87XG4gICAgZm9vZE1hbmFnZXI6IEZvb2RNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZXNDYWNoZTogVGV4dHVyZXNDYWNoZSkgeyBcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IFNwcml0ZSh0ZXh0dXJlc0NhY2hlWydiYWNrZ3JvdW5kX2EucG5nJ10pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKHRleHR1cmVzQ2FjaGUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaGVybyk7XG5cbiAgICAgICAgdGhpcy5mb29kTWFuYWdlciA9IG5ldyBGb29kTWFuYWdlcih0ZXh0dXJlc0NhY2hlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvb2RNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUG9pbnRlck1vdmUgKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCkge1xuICAgICAgICBsZXQgcG9zOiBQb2ludCA9IGUuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgICAgIFxuXG4gICAgICAgIHBvcy54ID0gTWF0aC5tYXgoTWF0aC5taW4oMzIwLCBwb3MueCksIDApO1xuICAgICAgICBwb3MueSA9IE1hdGgubWF4KE1hdGgubWluKDQ4MCwgcG9zLnkpLCAwKTtcblxuICAgICAgICB0aGlzLmhlcm8udXBkYXRlVGFyZ2V0UG9zaXRpb24ocG9zLngpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qb2ludGVyRG93biAoZTogUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5oZXJvLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpY2soZGVsdGE6IG51bWJlcikgXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRlbHRhKTtcbiAgICAgICAgdGhpcy5oZXJvLnRpY2soZGVsdGEpO1xuICAgICAgICB0aGlzLmZvb2RNYW5hZ2VyLnRpY2soZGVsdGEsIHRoaXMuaGVybyk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSwgR3JhcGhpY3MsIENvbnRhaW5lciwgVGV4dHVyZSB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IHtUZXh0dXJlc0NhY2hlfSBmcm9tICcuL3R5cGVzJztcblxudHlwZSBBbmltYXRlZFNwcml0ZSA9IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuZW51bSBTdGF0ZSB7XG4gICAgSWRsZSxcbiAgICBXYWxrLFxuICAgIFNsaWNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBjdXJyZW50U3RhdGU6IFN0YXRlID0gU3RhdGUuSWRsZTtcblxuICAgIHRleHR1cmVzQ2FjaGU6IFRleHR1cmVzQ2FjaGU7XG5cbiAgICBpZGxlQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgd2Fsa0FuaW06IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuICAgIHNsaWNlQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG5cbiAgICBhbmltczogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGVbXSA9IFtdO1xuXG4gICAgdGFyZ2V0WDogbnVtYmVyID0gMTYwO1xuXG4gICAgaXNTbGljaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBsYXN0VGFyZ2V0VXBkYXRlOiBudW1iZXIgPSAwO1xuXG4gICAgY29sbGlzaW9uUmVjdDogUElYSS5SZWN0YW5nbGUgPSBuZXcgUElYSS5SZWN0YW5nbGUoLTMwLCAtMTAsIDYwLCA0MCk7XG4gICAgZGVidWdDb2xsaXNpb25HcmFwaGljczogUElYSS5HcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlc0NhY2hlOiBUZXh0dXJlc0NhY2hlKSB7IFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGV4dHVyZXNDYWNoZSA9IHRleHR1cmVzQ2FjaGU7XG5cbiAgICAgICAgdGhpcy5pZGxlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoJ2lkbGUnLCBbMCwgMSwgMiwgM10pO1xuICAgICAgICB0aGlzLndhbGtBbmltID0gdGhpcy5jcmVhdGVBbmltYXRlZFNwcml0ZSgnd2FsaycsIFswLCAxLCAyLCAzLCA0XSk7XG4gICAgICAgIHRoaXMuc2xpY2VBbmltID0gdGhpcy5jcmVhdGVBbmltYXRlZFNwcml0ZSgnc2xpY2UnLCBbMCwgMSwgMiwgMiwgMiwgMiwgMl0pO1xuXG4gICAgICAgIHRoaXMud2Fsa0FuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjY7XG5cbiAgICAgICAgdGhpcy5zbGljZUFuaW0ubG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbS5hbmltYXRpb25TcGVlZCA9IDAuNDtcblxuICAgICAgICB0aGlzLnNsaWNlQW5pbS5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlpha2/FhGN6b25hIVwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNTbGljaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcblxuICAgICAgICB0aGlzLnggPSAxNjA7XG4gICAgICAgIHRoaXMueSA9IDM1MDtcblxuICAgICAgICB0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmYwMDAwLCAwLjQpO1xuICAgICAgICB0aGlzLmRlYnVnQ29sbGlzaW9uR3JhcGhpY3MuZHJhd1JlY3QodGhpcy5jb2xsaXNpb25SZWN0LngsIFxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25SZWN0LnksIHRoaXMuY29sbGlzaW9uUmVjdC53aWR0aCwgdGhpcy5jb2xsaXNpb25SZWN0LmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZGVidWdDb2xsaXNpb25HcmFwaGljcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpLzM7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5zaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hhbmdlVG9XYWxrV2hpbGVJZGxlKCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5XYWxrKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvSWRsZVdoaWxlV2FsaygpIHtcbiAgICAgICAgbGV0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5XYWxrO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDI1MCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb24gJiYgdGltZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpIHtcbiAgICAgICAgbGV0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5JZGxlO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAhdGhpcy5pc09uVGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgLy9sZXQgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDEwMCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRhcmdldFBvc2l0aW9uICh4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRYID0geDtcbiAgICAgICAgdGhpcy5sYXN0VGFyZ2V0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuU2xpY2UpO1xuICAgICAgICB0aGlzLmlzU2xpY2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc09uVGFyZ2V0UG9zaXRpb24gKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50YXJnZXRYKSA8IDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmltYXRlZFNwcml0ZShuYW1lOnN0cmluZywgZnJhbWVJbmRleGVzOiBudW1iZXJbXSk6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlIHtcbiAgICAgICAgbGV0IGZyYW1lczpUZXh0dXJlW10gPSBbXTtcblxuICAgICAgICBmcmFtZUluZGV4ZXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgbGV0IGZyYW1lTmFtZSA9ICdoZXJvXycgKyBuYW1lICsgJ18nICsgdmFsICsgJy5wbmcnO1xuICAgICAgICAgICAgZnJhbWVzLnB1c2godGhpcy50ZXh0dXJlc0NhY2hlW2ZyYW1lTmFtZV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYW5pbWF0ZWRTcHJpdGU6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlID0gbmV3IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKGZyYW1lcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChhbmltYXRlZFNwcml0ZSk7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLnBsYXkoKTtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjI7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICB0aGlzLmFuaW1zLnB1c2goYW5pbWF0ZWRTcHJpdGUpO1xuXG4gICAgICAgIHJldHVybiBhbmltYXRlZFNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlLklkbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLmlkbGVBbmltKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuU2xpY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLnNsaWNlQW5pbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IFN0YXRlLldhbGspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLndhbGtBbmltKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUFuaW1hdGlvbiAoYW5pbWF0aW9uOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1zLmZvckVhY2goYW5pbSA9PiB7XG4gICAgICAgICAgICBpZihhbmltID09PSBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBhbmltLmdvdG9BbmRQbGF5KDApO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhbmltLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7R3JhcGhpY3MsIEFwcGxpY2F0aW9uLCBBcHBsaWNhdGlvbk9wdGlvbnMsIFNIQVBFUyB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL2dhbWVzY2VuZSc7XG5pbXBvcnQge1RleHR1cmVzQ2FjaGV9IGZyb20gJy4vdHlwZXMnO1xuXG5uZXcgY2xhc3MgTWFpbiB7XG4gICAgYXBwOiBBcHBsaWNhdGlvbjtcblxuICAgIHNldHRpbmdzOiBBcHBsaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHhmZmZmMDAsXG4gICAgICAgIGFudGlhbGlhczogZmFsc2VcbiAgICB9O1xuXG4gICAgdGV4dHVyZXM6IFRleHR1cmVzQ2FjaGU7XG5cbiAgICBnYW1lU2NlbmU6IEdhbWVTY2VuZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBQSVhJLmxvYWRlclxuICAgICAgICAgICAgLmFkZCgnaW1hZ2VzL2F0bGFzZXMuanNvbicpXG4gICAgICAgICAgICAubG9hZCh0aGlzLmxvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBsb2FkZWQobG9hZGVyOlBJWEkubG9hZGVycy5Mb2FkZXIsIHJlc291cmNlczogUElYSS5sb2FkZXJzLlJlc291cmNlRGljdGlvbmFyeSkge1xuICAgICAgICB0aGlzLnRleHR1cmVzID0gcmVzb3VyY2VzWydpbWFnZXMvYXRsYXNlcy5qc29uJ10udGV4dHVyZXNcblxuICAgICAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbigzMjAsIDQ4MCwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XG5cbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSBuZXcgR2FtZVNjZW5lKHRoaXMudGV4dHVyZXMpO1xuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLmdhbWVTY2VuZSk7XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZCh0aGlzLmdhbWVTY2VuZS50aWNrLmJpbmQodGhpcy5nYW1lU2NlbmUpKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJ3BpeGktcGFydGljbGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpY2VQYXJ0aWNsZXMgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBQSVhJLkNvbnRhaW5lciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBzZXR0aW5nczogb2JqZWN0ID0ge1xuICAgICAgICAgICAgYWxwaGE6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogMSxcbiAgICAgICAgICAgICAgICBlbmQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLjYsXG4gICAgICAgICAgICAgICAgZW5kOiAwLjAxLFxuICAgICAgICAgICAgICAgIG1pbmltdW1TY2FsZU11bHRpcGxpZXI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIiNlNGY5ZmZcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBzdGFydDogMzUwLFxuICAgICAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtU3BlZWRNdWx0aXBsaWVyOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAxMDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4U3BlZWQ6IDAsXG4gICAgICAgICAgICBzdGFydFJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9Sb3RhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICByb3RhdGlvblNwZWVkOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpZmV0aW1lOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLjMsXG4gICAgICAgICAgICAgICAgbWF4OiAwLjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibGVuZE1vZGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBmcmVxdWVuY3k6IDAuMDAxLFxuICAgICAgICAgICAgZW1pdHRlckxpZmV0aW1lOiAwLjAxLFxuICAgICAgICAgICAgbWF4UGFydGljbGVzOiAxMCxcbiAgICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZEF0QmFjazogZmFsc2UsXG4gICAgICAgICAgICBzcGF3blR5cGU6IFwicG9pbnRcIlxuICAgICAgICB9O1xuICAgICAgICBzdXBlcih2aWV3LCBbUElYSS5UZXh0dXJlLldISVRFXSwgc2V0dGluZ3MpO1xuXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IHRydWU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=