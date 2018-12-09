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
        return _this;
    }
    GameScene.prototype.onPointerMove = function (e) {
        var pos = e.data.getLocalPosition(this.background);
        pos.x = Math.max(Math.min(320, pos.x), 0);
        pos.y = Math.max(Math.min(480, pos.y), 0);
        console.log(pos.x, pos.y);
        this.hero.updateTargetPosition(pos.x);
    };
    GameScene.prototype.onPointerDown = function (e) {
        this.hero.slice();
    };
    GameScene.prototype.tick = function (delta) {
        this.hero.tick(delta);
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
            antialias: true
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjX3RzL2dhbWVzY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvaGVyby50cyIsIndlYnBhY2s6Ly8vLi9zcmNfdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FB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QUFDLENBQUMsUUFBUTtRQUV6RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUkscUJBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmNfdHMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFNwcml0ZSwgR3JhcGhpY3MsIENvbnRhaW5lciwgUG9pbnQgfSBmcm9tICdwaXhpLmpzJztcbmltcG9ydCB7VGV4dHVyZXNDYWNoZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IFNwcml0ZTtcbiAgICBoZXJvOiBIZXJvO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZXNDYWNoZTogVGV4dHVyZXNDYWNoZSkgeyBcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IFNwcml0ZSh0ZXh0dXJlc0NhY2hlWydiYWNrZ3JvdW5kX2EucG5nJ10pO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5vblBvaW50ZXJNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKHRleHR1cmVzQ2FjaGUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuaGVybyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBvaW50ZXJNb3ZlIChlOiBQSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQpIHtcbiAgICAgICAgbGV0IHBvczogUG9pbnQgPSBlLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLmJhY2tncm91bmQpO1xuICAgICAgICBcblxuICAgICAgICBwb3MueCA9IE1hdGgubWF4KE1hdGgubWluKDMyMCwgcG9zLngpLCAwKTtcbiAgICAgICAgcG9zLnkgPSBNYXRoLm1heChNYXRoLm1pbig0ODAsIHBvcy55KSwgMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcy54LCBwb3MueSk7XG5cbiAgICAgICAgdGhpcy5oZXJvLnVwZGF0ZVRhcmdldFBvc2l0aW9uKHBvcy54KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUG9pbnRlckRvd24gKGU6IFBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudClcbiAgICB7XG4gICAgICAgIHRoaXMuaGVyby5zbGljZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aWNrKGRlbHRhOiBudW1iZXIpIFxuICAgIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkZWx0YSk7XG4gICAgICAgIHRoaXMuaGVyby50aWNrKGRlbHRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3ByaXRlLCBHcmFwaGljcywgQ29udGFpbmVyLCBUZXh0dXJlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQge1RleHR1cmVzQ2FjaGV9IGZyb20gJy4vdHlwZXMnO1xuXG50eXBlIEFuaW1hdGVkU3ByaXRlID0gUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG5lbnVtIFN0YXRlIHtcbiAgICBJZGxlLFxuICAgIFdhbGssXG4gICAgU2xpY2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDb250YWluZXIge1xuICAgIGN1cnJlbnRTdGF0ZTogU3RhdGUgPSBTdGF0ZS5JZGxlO1xuXG4gICAgdGV4dHVyZXNDYWNoZTogVGV4dHVyZXNDYWNoZTtcblxuICAgIGlkbGVBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICB3YWxrQW5pbTogUElYSS5leHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgc2xpY2VBbmltOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZTtcblxuICAgIGFuaW1zOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZVtdID0gW107XG5cbiAgICB0YXJnZXRYOiBudW1iZXIgPSAxNjA7XG5cbiAgICBpc1NsaWNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxhc3RUYXJnZXRVcGRhdGU6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlc0NhY2hlOiBUZXh0dXJlc0NhY2hlKSB7IFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGV4dHVyZXNDYWNoZSA9IHRleHR1cmVzQ2FjaGU7XG5cbiAgICAgICAgdGhpcy5pZGxlQW5pbSA9IHRoaXMuY3JlYXRlQW5pbWF0ZWRTcHJpdGUoJ2lkbGUnLCBbMCwgMSwgMiwgM10pO1xuICAgICAgICB0aGlzLndhbGtBbmltID0gdGhpcy5jcmVhdGVBbmltYXRlZFNwcml0ZSgnd2FsaycsIFswLCAxLCAyLCAzLCA0XSk7XG4gICAgICAgIHRoaXMuc2xpY2VBbmltID0gdGhpcy5jcmVhdGVBbmltYXRlZFNwcml0ZSgnc2xpY2UnLCBbMCwgMSwgMiwgMiwgMiwgMiwgMl0pO1xuXG4gICAgICAgIHRoaXMud2Fsa0FuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjY7XG5cbiAgICAgICAgdGhpcy5zbGljZUFuaW0ubG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNsaWNlQW5pbS5hbmltYXRpb25TcGVlZCA9IDAuNDtcblxuICAgICAgICB0aGlzLnNsaWNlQW5pbS5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlpha2/FhGN6b25hIVwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNTbGljaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5JZGxlKTtcblxuICAgICAgICB0aGlzLnggPSAxNjA7XG4gICAgICAgIHRoaXMueSA9IDM1MDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGljayhkZWx0YTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ICs9ICh0aGlzLnRhcmdldFggLSB0aGlzLngpLzM7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5zaG91bGRDaGFuZ2VUb0lkbGVXaGlsZVdhbGsoKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFN0YXRlLklkbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hhbmdlVG9XYWxrV2hpbGVJZGxlKCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGF0ZS5XYWxrKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvSWRsZVdoaWxlV2FsaygpIHtcbiAgICAgICAgbGV0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5XYWxrO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLmlzT25UYXJnZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDI1MCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb24gJiYgdGltZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZENoYW5nZVRvV2Fsa1doaWxlSWRsZSgpIHtcbiAgICAgICAgbGV0IG5vdFNsaWNpbmcgPSAhdGhpcy5pc1NsaWNpbmc7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5JZGxlO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAhdGhpcy5pc09uVGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgLy9sZXQgdGltZSA9IHRoaXMubGFzdFRhcmdldFVwZGF0ZSArIDEwMCA8IERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdFNsaWNpbmcgJiYgc3RhdGUgJiYgcG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRhcmdldFBvc2l0aW9uICh4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRYID0geDtcbiAgICAgICAgdGhpcy5sYXN0VGFyZ2V0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhdGUuU2xpY2UpO1xuICAgICAgICB0aGlzLmlzU2xpY2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc09uVGFyZ2V0UG9zaXRpb24gKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy54IC0gdGhpcy50YXJnZXRYKSA8IDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmltYXRlZFNwcml0ZShuYW1lOnN0cmluZywgZnJhbWVJbmRleGVzOiBudW1iZXJbXSk6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlIHtcbiAgICAgICAgbGV0IGZyYW1lczpUZXh0dXJlW10gPSBbXTtcblxuICAgICAgICBmcmFtZUluZGV4ZXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgbGV0IGZyYW1lTmFtZSA9ICdoZXJvXycgKyBuYW1lICsgJ18nICsgdmFsICsgJy5wbmcnO1xuICAgICAgICAgICAgZnJhbWVzLnB1c2godGhpcy50ZXh0dXJlc0NhY2hlW2ZyYW1lTmFtZV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYW5pbWF0ZWRTcHJpdGU6IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlID0gbmV3IFBJWEkuZXh0cmFzLkFuaW1hdGVkU3ByaXRlKGZyYW1lcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChhbmltYXRlZFNwcml0ZSk7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLnBsYXkoKTtcbiAgICAgICAgYW5pbWF0ZWRTcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjI7XG4gICAgICAgIGFuaW1hdGVkU3ByaXRlLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICB0aGlzLmFuaW1zLnB1c2goYW5pbWF0ZWRTcHJpdGUpO1xuXG4gICAgICAgIHJldHVybiBhbmltYXRlZFNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlLklkbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLmlkbGVBbmltKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gU3RhdGUuU2xpY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLnNsaWNlQW5pbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IFN0YXRlLldhbGspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0aGlzLndhbGtBbmltKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUFuaW1hdGlvbiAoYW5pbWF0aW9uOiBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1zLmZvckVhY2goYW5pbSA9PiB7XG4gICAgICAgICAgICBpZihhbmltID09PSBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBhbmltLmdvdG9BbmRQbGF5KDApO1xuICAgICAgICAgICAgICAgIGFuaW0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBhbmltLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7R3JhcGhpY3MsIEFwcGxpY2F0aW9uLCBBcHBsaWNhdGlvbk9wdGlvbnMsIFNIQVBFUyB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL2dhbWVzY2VuZSc7XG5pbXBvcnQge1RleHR1cmVzQ2FjaGV9IGZyb20gJy4vdHlwZXMnO1xuXG5uZXcgY2xhc3MgTWFpbiB7XG4gICAgYXBwOiBBcHBsaWNhdGlvbjtcblxuICAgIHNldHRpbmdzOiBBcHBsaWNhdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHhmZmZmMDAsXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxuICAgIH07XG5cbiAgICB0ZXh0dXJlczogVGV4dHVyZXNDYWNoZTtcblxuICAgIGdhbWVTY2VuZTogR2FtZVNjZW5lO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFBJWEkubG9hZGVyXG4gICAgICAgICAgICAuYWRkKCdpbWFnZXMvYXRsYXNlcy5qc29uJylcbiAgICAgICAgICAgIC5sb2FkKHRoaXMubG9hZGVkLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGxvYWRlZChsb2FkZXI6UElYSS5sb2FkZXJzLkxvYWRlciwgcmVzb3VyY2VzOiBQSVhJLmxvYWRlcnMuUmVzb3VyY2VEaWN0aW9uYXJ5KSB7XG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSByZXNvdXJjZXNbJ2ltYWdlcy9hdGxhc2VzLmpzb24nXS50ZXh0dXJlc1xuXG4gICAgICAgIHRoaXMuYXBwID0gbmV3IEFwcGxpY2F0aW9uKDMyMCwgNDgwLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KTtcblxuICAgICAgICB0aGlzLmdhbWVTY2VuZSA9IG5ldyBHYW1lU2NlbmUodGhpcy50ZXh0dXJlcyk7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZVNjZW5lKTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKHRoaXMuZ2FtZVNjZW5lLnRpY2suYmluZCh0aGlzLmdhbWVTY2VuZSkpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9