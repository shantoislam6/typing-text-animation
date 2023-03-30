(function(modules) { 
	// The module cache
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {

		// Check if module is in cache
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};

		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		// Flag the module as loaded
		module.l = true;

		// Return the exports of the module
		return module.exports;
	}


	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;

	// expose the module cache
	__webpack_require__.c = installedModules;

	// define getter function for harmony exports
	__webpack_require__.d = function(exports, name, getter) {
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};

	// define __esModule on exports
	__webpack_require__.r = function(exports) {
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};

	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};

	// getDefaultExport function for compatibility with non-harmony modules
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};

	// Object.prototype.hasOwnProperty.call
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

	// __webpack_public_path__
	__webpack_require__.p = "";


	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = "./src/type.js");
})
/************************************************************************/
({

/***/ "./src/lib/bootstrap.js":
/*!******************************!*\
  !*** ./src/lib/bootstrap.js ***!
  \******************************/
/*! exports provided: type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core */ "./src/lib/core/core.js");

/**
 * 
 * @return intit method
*/

function type() {
  return {
    textElements: document.querySelectorAll('.text-type'),
    init: function init() {
      Array.from(this.textElements).forEach(function (element) {

        // get all type-element property values

        var speed = element.getAttribute('data-type-speed');
        var wait = element.getAttribute('data-type-wait');
        var words = JSON.parse(element.getAttribute('data-type-words'));
        var blink = eval(element.getAttribute('data-type-blink'));
        var blinkSpeed = element.getAttribute('data-type-blink-speed');
        var removeSpeed = element.getAttribute('data-remove-Speed');
        var colors = JSON.parse(element.getAttribute('data-type-colors'));
        var fontWeight = element.getAttribute('data-type-font-weight');
        var blinkText = element.getAttribute('data-blink-text');

        // instantiate Core module
        new _core_core__WEBPACK_IMPORTED_MODULE_0__["default"](element, words, speed, wait, blinkSpeed, blink, removeSpeed, colors, fontWeight, blinkText);
      });
    }
  };
}

/***/ }),

/***/ "./src/lib/core/core.js":
/*!******************************!*\
  !*** ./src/lib/core/core.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TypeWriter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 
 * TypeWrite Class all where go on all functionality for auto typeing 
*/
var TypeWriter =
/*#__PURE__*/
function () {
  function TypeWriter(element) {
    // set default propery
    var words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[]';
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var wait = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
    var blinkSpeed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 500;
    var blink = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var removeSpeed = arguments.length > 6 ? arguments[6] : undefined;
    var colors = arguments.length > 7 ? arguments[7] : undefined;
    var fontWeight = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
    var blinkText = arguments.length > 9 ? arguments[9] : undefined;

    _classCallCheck(this, TypeWriter);

    this.element = element;
    this.words = words;
    this.colors = colors;
    this.colorIndex = 0;
    this.text = '';
    this.wordIndex = 0;
    this.targetDelete = '';
    this.wait = parseInt(wait, 10);
    this.speed = parseInt(speed, 10);
    this.isDeleting = false;
    this.blinkSpeed = blinkSpeed;
    this.isBlinkAnimate = blink;
    this.removeSpeed = removeSpeed != undefined ? removeSpeed : this.speed / 2;
    this.letterIndex = 0;
    this.color = '';
    this.typeSpeed = this.speed;
    this.fontWeight = fontWeight;
    this.blinkText = blinkText;
    this.typeInit();
  }


  _createClass(TypeWriter, [{
    key: "typeInit",
    value: function typeInit() {
      var styleText = "\n        <style>\n            .blink-animate{\n                opacity: 1; \n            }\n            @keyframes blink {\n                0% {\n                    opacity: 1;\n                }\n                50% {\n                    opacity: 0;\n                }\n                100% {\n                    opacity: 1;\n            \n                }\n            }\n        </style>";
      this.element.style.fontWeight = this.fontWeight;

      if (this.isBlinkAnimate) {
        this.element.innerHTML += styleText;
      } // add text element


      this.element.innerHTML += "<span class=\"type-text\"></span><span class=\"blink-animate\">".concat(this.blinkText != null ? this.blinkText : '|', "</span>"); // start type

      this.type();
    } // type method

  }, {
    key: "type",
    value: function type() {
      var _this = this;

      // Set current word index 
      var currentW = this.wordIndex % this.words.length;

      if (Array.isArray(this.colors)) {
        // Set current color index 
        var currentC = this.colorIndex % this.colors.length; // Get color

        this.color = this.colors[currentC];
      } // Get full text 


      var fullText = this.words[currentW]; // check if deleting or adding 

      if (!this.isDeleting && this.letterIndex <= fullText.length) {
        // add text
        this.text = fullText.substring(0, this.letterIndex);
        this.letterIndex++; // check if ready for remove text

        if (this.letterIndex > fullText.length - 1) {
          this.typeSpeed = this.removeSpeed; // start blink animation

          if (this.isBlinkAnimate) {
            this.element.children[2].style.animation = "blink ".concat(this.blinkSpeed / 1000, "s infinite");
          } // wait for remove text


          setTimeout(function () {
            _this.letterIndex = fullText.length;
            _this.isDeleting = true; // remove blink animation

            if (_this.isBlinkAnimate) {
              _this.element.children[2].style.animation = "";
            }
          }, this.wait);
        }
      } else if (this.isDeleting && this.letterIndex >= 0) {
        // remove text
        this.text = fullText.substring(0, this.letterIndex);
        this.letterIndex--; // check if ready for add next word text

        if (this.letterIndex == 1) {
          this.letterIndex = 0;
          this.typeSpeed = this.speed;
          this.isDeleting = false;
          this.wordIndex++;
          this.colorIndex++;
        }
      } // add text to element


      this.element.children[1].innerHTML = this.text; // add color to element

      this.element.style.color = this.color; // Run type() method interval

      setTimeout(function () {
        return _this.type();
      }, this.typeSpeed);
    }
  }]);

  return TypeWriter;
}();



/***/ }),

/***/ "./src/type.js":
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bootstrap */ "./src/lib/bootstrap.js");

// When Dom load completed then load the all functionality for typing
document.addEventListener('DOMContentLoaded', function () {
  var initType = Object(_lib_bootstrap__WEBPACK_IMPORTED_MODULE_0__["type"])().init();
});

/***/ })
});
//# sourceMappingURL=type.js.map