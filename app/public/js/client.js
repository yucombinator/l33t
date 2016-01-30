/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(189);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);
	
	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});
	
	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(127)});
	
	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);
	
	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _socket = __webpack_require__(192);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(242);
	__webpack_require__(246);
	/*
	*(c) Copyright 2011 Simone Masiero. Some Rights Reserved. 
	*This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 License
	*/
	
	$(function () {
		$(document).keydown(function (event) {
			Typer.addText(event); //Capture the keydown event and call the addText, this is executed on page load
		});
	});
	
	var Typer = {
		text: null,
		accessCountimer: null,
		index: 0, // current cursor position
		speed: 3, // speed of the Typer
		file: "/assets/code_file.txt", //file, must be setted
		accessCount: 0, //times alt is pressed for Access Granted
		deniedCount: 0, //times caps is pressed for Access Denied
		init: function init() {
			// inizialize Hacker Typer
			this.accessCountimer = setInterval(function () {
				Typer.updLstChr();
			}, 500); // inizialize timer for blinking cursor
			$.get(Typer.file, function (data) {
				// get the text file
				Typer.text = data; // save the textfile in Typer.text
			});
		},
	
		content: function content() {
			return $("#console").html(); // get console content
		},
	
		write: function write(str) {
			// append to console content
			$("#console").append(str);
			return false;
		},
	
		makeAccess: function makeAccess() {
			//create Access Granted popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
			Typer.hidepop(); // hide all popups
			Typer.accessCount = 0; //reset count
			var ddiv = $("<div id='gran'>").html(""); // create new blank div and id "gran"
			ddiv.addClass("accessGranted"); // add class to the div
			ddiv.html("<h1>ACCESS GRANTED</h1>"); // set content of div
			$(document.body).prepend(ddiv); // prepend div to body
			return false;
		},
		makeDenied: function makeDenied() {
			//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
			Typer.hidepop(); // hide all popups
			Typer.deniedCount = 0; //reset count
			var ddiv = $("<div id='deni'>").html(""); // create new blank div and id "deni"
			ddiv.addClass("accessDenied"); // add class to the div
			ddiv.html("<h1>ACCESS DENIED</h1>"); // set content of div
			$(document.body).prepend(ddiv); // prepend div to body
			return false;
		},
	
		hidepop: function hidepop() {
			// remove all existing popups
			$("#deni").remove();
			$("#gran").remove();
		},
	
		addText: function addText(key) {
			//Main function to add the code
			if (key.keyCode == 18) {
				// key 18 = alt key
				Typer.accessCount++; //increase counter
				if (Typer.accessCount >= 3) {
					// if it's presed 3 times
					Typer.makeAccess(); // make access popup
				}
			} else if (key.keyCode == 20) {
					// key 20 = caps lock
					Typer.deniedCount++; // increase counter
					if (Typer.deniedCount >= 3) {
						// if it's pressed 3 times
						Typer.makeDenied(); // make denied popup
					}
				} else if (key.keyCode == 27) {
						// key 27 = esc key
						Typer.hidepop(); // hide all popups
					} else if (Typer.text) {
							// otherway if text is loaded
							var cont = Typer.content(); // get the console content
							if (cont.substring(cont.length - 1, cont.length) == "|") // if the last char is the blinking cursor
								$("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it before adding the text
							if (key.keyCode != 8) {
								// if key is not backspace
								Typer.index += Typer.speed; // add to the index the speed
							} else {
									if (Typer.index > 0) // else if index is not less than 0
										Typer.index -= Typer.speed; //	remove speed for deleting text
								}
							var text = $("<div/>").text(Typer.text.substring(0, Typer.index)).html(); // parse the text for stripping html enities
							var rtn = new RegExp("\n", "g"); // newline regex
							var rts = new RegExp("\\s", "g"); // whitespace regex
							var rtt = new RegExp("\\t", "g"); // tab regex
							$("#console").html(text.replace(rtn, "<br/>").replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(rts, "&nbsp;")); // replace newline chars with br, tabs with 4 space and blanks with an html blank
							$('#console').scrollTop($('#console')[0].scrollHeight);
							//$("#console").scrollBy(0,50); // scroll to make sure bottom is always visible
						}
			if (key.preventDefault && key.keyCode != 122) {
				// prevent F11(fullscreen) from being blocked
				key.preventDefault();
			};
			if (key.keyCode != 122) {
				// otherway prevent keys default behavior
				key.returnValue = false;
			}
		},
	
		updLstChr: function updLstChr() {
			// blinking cursor
			var cont = this.content(); // get console
			if (cont.substring(cont.length - 1, cont.length) == "|") // if last char is the cursor
				$("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it
			else this.write("|"); // else write it
		}
	};
	
	Typer.init();

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(193);
	var parser = __webpack_require__(198);
	var Manager = __webpack_require__(206);
	var debug = __webpack_require__(195)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	
	  return io.socket(parsed.path);
	}
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(206);
	exports.Socket = __webpack_require__(234);


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(194);
	var debug = __webpack_require__(195)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url(uri, loc){
	  var obj = uri;
	
	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    }
	    else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));
	
	  return obj;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 194 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(196);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(197);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 197 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(195)('socket.io-parser');
	var json = __webpack_require__(199);
	var isArray = __webpack_require__(202);
	var Emitter = __webpack_require__(203);
	var binary = __webpack_require__(204);
	var isBuf = __webpack_require__(205);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;
	
	  // first is type
	  str += obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var p = {};
	  var i = 0;
	
	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch(e){
	      return error();
	    }
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(201);
	
	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };
	
	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
	
	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());
	
	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];
	
	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }
	
	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;
	
	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}
	
	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }
	
	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";
	
	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");
	
	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }
	
	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }
	
	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;
	
	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;
	
	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;
	
	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };
	
	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };
	
	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };
	
	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };
	
	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };
	
	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }
	
	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;
	
	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };
	
	        // Internal: Stores the parser state.
	        var Index, Source;
	
	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };
	
	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };
	
	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };
	
	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };
	
	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };
	
	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }
	
	    exports["runInContext"] = runInContext;
	    return exports;
	  }
	
	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;
	
	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));
	
	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }
	
	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(200)(module), (function() { return this; }())))

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 201 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 203 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(202);
	var isBuf = __webpack_require__(205);
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;
	
	  function _deconstructPacket(data) {
	    if (!data) return data;
	
	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }
	
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;
	
	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }
	
	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 205 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(207);
	var Socket = __webpack_require__(234);
	var Emitter = __webpack_require__(235);
	var parser = __webpack_require__(198);
	var on = __webpack_require__(237);
	var bind = __webpack_require__(238);
	var debug = __webpack_require__(195)('socket.io-client:manager');
	var indexOf = __webpack_require__(232);
	var Backoff = __webpack_require__(241);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager(uri, opts){
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' == typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function() {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function(){
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function(v){
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function(v){
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function(v){
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function(v){
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function(v){
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function(v){
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function() {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open =
	Manager.prototype.connect = function(fn){
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function() {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function(data){
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function(){
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function(){
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function(){
	  this.lastPing = new Date;
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function(){
	  this.emitAll('pong', new Date - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function(data){
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function(packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function(err){
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function(nsp){
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function(){
	      socket.id = self.engine.id;
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function(socket){
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function(packet){
	  debug('writing packet %j', packet);
	  var self = this;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function(encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function() {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function(){
	  debug('cleanup');
	
	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close =
	Manager.prototype.disconnect = function(){
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' == this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function(reason){
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function(){
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function(){
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function(err){
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function(){
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(208);


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(209);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(216);


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(210);
	var Emitter = __webpack_require__(225);
	var debug = __webpack_require__(195)('engine.io-client:socket');
	var index = __webpack_require__(232);
	var parser = __webpack_require__(216);
	var parseuri = __webpack_require__(194);
	var parsejson = __webpack_require__(233);
	var parseqs = __webpack_require__(226);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Noop function.
	 *
	 * @api private
	 */
	
	function noop(){}
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(215);
	Socket.transports = __webpack_require__(210);
	Socket.parser = __webpack_require__(216);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });
	
	  return transport;
	};
	
	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport() {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose(){
	    onerror("transport closed");
	  }
	
	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }
	
	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function(){
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function() {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(211);
	var XHR = __webpack_require__(213);
	var JSONP = __webpack_require__(229);
	var websocket = __webpack_require__(230);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(212);
	
	module.exports = function(opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }
	
	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },
/* 212 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(211);
	var Polling = __webpack_require__(214);
	var Emitter = __webpack_require__(225);
	var inherit = __webpack_require__(227);
	var debug = __webpack_require__(195)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty(){}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR(opts){
	  Polling.call(this, opts);
	
	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }
	
	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }
	
	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(215);
	var parseqs = __webpack_require__(226);
	var parser = __webpack_require__(216);
	var inherit = __webpack_require__(227);
	var yeast = __webpack_require__(228);
	var debug = __webpack_require__(195)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(211);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function(){
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function(){
	  var self = this;
	
	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(216);
	var Emitter = __webpack_require__(225);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(217);
	var hasBinary = __webpack_require__(218);
	var sliceBuffer = __webpack_require__(220);
	var base64encoder = __webpack_require__(221);
	var after = __webpack_require__(222);
	var utf8 = __webpack_require__(223);
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = navigator.userAgent.match(/Android/i);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(224);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = ''
	    , n, msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      msg = data.substr(i + 1, n);
	
	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);
	
	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }
	
	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }
	
	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }
	
	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;
	
	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    if(numberTooLong) return callback(err, 0, 1);
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 217 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(219);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 220 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
	
	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 221 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";
	
	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";
	
	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);
	
	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	
	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = after
	
	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count
	
	    return (count === 0) ? callback() : proxy
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}
	
	function noop() {}


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {
	
		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}
	
		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}
	
		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid UTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(200)(module), (function() { return this; }())))

/***/ },
/* 224 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 225 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 226 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 227 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 228 */
/***/ function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;
	
	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(214);
	var inherit = __webpack_require__(227);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Callbacks count.
	 */
	
	var index = 0;
	
	/**
	 * Noop.
	 */
	
	function empty () { }
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling (opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  }
	  else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete () {
	    initIframe();
	    fn();
	  }
	
	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch(e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(215);
	var parser = __webpack_require__(216);
	var parseqs = __webpack_require__(226);
	var inherit = __webpack_require__(227);
	var yeast = __webpack_require__(228);
	var debug = __webpack_require__(195)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(231);
	  } catch (e) { }
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	
	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function(){
	  var self = this;
	
	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */
	
	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function(packet) {
	      parser.encodePacket(packet, self.supportsBinary, function(data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e){
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done(){
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function(){
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 231 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 232 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 233 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */
	
	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;
	
	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }
	
	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
	
	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }
	
	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(198);
	var Emitter = __webpack_require__(235);
	var toArray = __webpack_require__(236);
	var on = __webpack_require__(237);
	var bind = __webpack_require__(238);
	var debug = __webpack_require__(195)('socket.io-client:socket');
	var hasBin = __webpack_require__(239);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket(io, nsp){
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function() {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open =
	Socket.prototype.connect = function(){
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function(){
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function(ev){
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function(packet){
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function(){
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function(reason){
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function(packet){
	  if (packet.nsp != this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function(packet){
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function(id){
	  var self = this;
	  var sent = false;
	  return function(){
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function(packet){
	  var ack = this.acks[packet.id];
	  if ('function' == typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function(){
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function(){
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function(){
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function(){
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close =
	Socket.prototype.disconnect = function(){
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function(compress){
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 235 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = toArray
	
	function toArray(list, index) {
	    var array = []
	
	    index = index || 0
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }
	
	    return array
	}


/***/ },
/* 237 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function(){
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 238 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(240);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 241 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};
	


/***/ },
/* 242 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA5NGI5ZTMyYWU5Mzc3NTY5OWEiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQua2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMtaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1wYWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vYmFiZWwtcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2xpZW50L2VudHJ5LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L2xpYi91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZGVidWcvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9kZWJ1Zy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9kZWJ1Zy9+L21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L3NvY2tldC5pby1wYXJzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vc29ja2V0LmlvLXBhcnNlci9+L2pzb24zL2xpYi9qc29uMy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9zb2NrZXQuaW8tcGFyc2VyL34vaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9zb2NrZXQuaW8tcGFyc2VyL34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vc29ja2V0LmlvLXBhcnNlci9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vc29ja2V0LmlvLXBhcnNlci9pcy1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L2xpYi9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9saWIveG1saHR0cHJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2hhcy1jb3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9saWIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9saWIva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9+L2hhcy1iaW5hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2VuZ2luZS5pby1wYXJzZXIvfi9oYXMtYmluYXJ5L34vaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9+L2FycmF5YnVmZmVyLnNsaWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvfi9lbmdpbmUuaW8tcGFyc2VyL34vYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2VuZ2luZS5pby1wYXJzZXIvfi9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9+L3V0ZjgvdXRmOC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9+L2Jsb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvfi9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvfi9jb21wb25lbnQtaW5oZXJpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34veWVhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy9wb2xsaW5nLWpzb25wLmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vaW5kZXhvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vcGFyc2Vqc29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9+L3RvLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc29ja2V0LmlvLWNsaWVudC9saWIvb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vY29tcG9uZW50LWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zb2NrZXQuaW8tY2xpZW50L34vaGFzLWJpbmFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9oYXMtYmluYXJ5L34vaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NvY2tldC5pby1jbGllbnQvfi9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NsaWVudC9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NsaWVudC9zY3NzL2NydF9zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNEMsZ0JBQWdCLFVBQVUsR0FBRztBQUN6RSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSyxVQUFVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLFVBQVU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRTs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLE1BQUs7QUFDTCxlQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBOztBQUVBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixhQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRyxPQUFPO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsT0FBTztBQUNsQixhQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3Z0QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcERBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFlBQVk7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFlBQVk7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsTUFBSyxXQUFXO0FBQ2hCO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMEIsaURBQWlEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCw0REFBMkQ7QUFDM0Q7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBdUU7QUFDdkUsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxvREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNaQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDdFBBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZLFVBQVU7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0EsNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRixvQkFBbUI7QUFDbkI7QUFDQSxJQUFHLE9BQU87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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ25GQSwwQzs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicHVibGljL2pzL2NsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTA5NGI5ZTMyYWU5Mzc3NTY5OWFcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcImNvcmUtanMvc2hpbVwiKTtcblxucmVxdWlyZShcImJhYmVsLXJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cbmlmIChnbG9iYWwuX2JhYmVsUG9seWZpbGwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwib25seSBvbmUgaW5zdGFuY2Ugb2YgYmFiZWwtcG9seWZpbGwgaXMgYWxsb3dlZFwiKTtcbn1cbmdsb2JhbC5fYmFiZWxQb2x5ZmlsbCA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi9tb2R1bGVzL2VzNScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYWNvc2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY2JydCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY29zaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5pbXVsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cxcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguc2luaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnRhbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yYXcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkub2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maWxsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2pzLmFycmF5LnN0YXRpY3MnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIudGltZXJzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmltbWVkaWF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9tb2R1bGVzLyQuY29yZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9zaGltLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIERFU0NSSVBUT1JTICAgICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBjcmVhdGVEZXNjICAgICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBodG1sICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJylcbiAgLCBoYXMgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGNvZiAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgaW52b2tlICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBmYWlscyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgYW5PYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHRvT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgdG9JbnRlZ2VyICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgdG9JbmRleCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgSU9iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ19fcHJvdG9fXycpXG4gICwgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpXG4gICwgYXJyYXlJbmRleE9mICAgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBPYmplY3RQcm90byAgICAgICA9IE9iamVjdC5wcm90b3R5cGVcbiAgLCBBcnJheVByb3RvICAgICAgICA9IEFycmF5LnByb3RvdHlwZVxuICAsIGFycmF5U2xpY2UgICAgICAgID0gQXJyYXlQcm90by5zbGljZVxuICAsIGFycmF5Sm9pbiAgICAgICAgID0gQXJyYXlQcm90by5qb2luXG4gICwgZGVmaW5lUHJvcGVydHkgICAgPSAkLnNldERlc2NcbiAgLCBnZXRPd25EZXNjcmlwdG9yICA9ICQuZ2V0RGVzY1xuICAsIGRlZmluZVByb3BlcnRpZXMgID0gJC5zZXREZXNjc1xuICAsIGZhY3RvcmllcyAgICAgICAgID0ge31cbiAgLCBJRThfRE9NX0RFRklORTtcblxuaWYoIURFU0NSSVBUT1JTKXtcbiAgSUU4X0RPTV9ERUZJTkUgPSAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoY2VsKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbiAgfSk7XG4gICQuc2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFAsIEF0dHJpYnV0ZXMpe1xuICAgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gICAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICAgIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICAgIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylhbk9iamVjdChPKVtQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgcmV0dXJuIE87XG4gIH07XG4gICQuZ2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFApe1xuICAgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgICByZXR1cm4gZ2V0T3duRGVzY3JpcHRvcihPLCBQKTtcbiAgICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFPYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKE8sIFApLCBPW1BdKTtcbiAgfTtcbiAgJC5zZXREZXNjcyA9IGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbihPLCBQcm9wZXJ0aWVzKXtcbiAgICBhbk9iamVjdChPKTtcbiAgICB2YXIga2V5cyAgID0gJC5nZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgPSAwXG4gICAgICAsIFA7XG4gICAgd2hpbGUobGVuZ3RoID4gaSkkLnNldERlc2MoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gICAgcmV0dXJuIE87XG4gIH07XG59XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFERVNDUklQVE9SUywgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjYgLyAxNS4yLjMuMyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJC5nZXREZXNjLFxuICAvLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJC5zZXREZXNjLFxuICAvLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuXG4gIC8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbnZhciBrZXlzMSA9ICgnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSwnICtcbiAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJykuc3BsaXQoJywnKVxuICAvLyBBZGRpdGlvbmFsIGtleXMgZm9yIGdldE93blByb3BlcnR5TmFtZXNcbiAgLCBrZXlzMiA9IGtleXMxLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpXG4gICwga2V5c0xlbjEgPSBrZXlzMS5sZW5ndGg7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBjZWwoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBrZXlzTGVuMVxuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoJzxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3QucHJvdG90eXBlW2tleXMxW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG52YXIgY3JlYXRlR2V0S2V5cyA9IGZ1bmN0aW9uKG5hbWVzLCBsZW5ndGgpe1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uKCl7fTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuICBnZXRQcm90b3R5cGVPZjogJC5nZXRQcm90byA9ICQuZ2V0UHJvdG8gfHwgZnVuY3Rpb24oTyl7XG4gICAgTyA9IHRvT2JqZWN0KE8pO1xuICAgIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICAgIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG4gIH0sXG4gIC8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJC5nZXROYW1lcyA9ICQuZ2V0TmFtZXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMiwga2V5czIubGVuZ3RoLCB0cnVlKSxcbiAgLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJC5jcmVhdGUgPSAkLmNyZWF0ZSB8fCBmdW5jdGlvbihPLCAvKj8qL1Byb3BlcnRpZXMpe1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYoTyAhPT0gbnVsbCl7XG4gICAgICBFbXB0eS5wcm90b3R5cGUgPSBhbk9iamVjdChPKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2Ygc2hpbVxuICAgICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuICB9LFxuICAvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbiAga2V5czogJC5nZXRLZXlzID0gJC5nZXRLZXlzIHx8IGNyZWF0ZUdldEtleXMoa2V5czEsIGtleXNMZW4xLCBmYWxzZSlcbn0pO1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24oRiwgbGVuLCBhcmdzKXtcbiAgaWYoIShsZW4gaW4gZmFjdG9yaWVzKSl7XG4gICAgZm9yKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfVxuICByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG4vLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0Z1bmN0aW9uJywge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kKHRoYXQgLyosIGFyZ3MuLi4gKi8pe1xuICAgIHZhciBmbiAgICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICAgLCBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKC8qIGFyZ3MuLi4gKi8pe1xuICAgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgICB9O1xuICAgIGlmKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICAgIHJldHVybiBib3VuZDtcbiAgfVxufSk7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcbiAgaWYoaHRtbClhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG59KSwgJ0FycmF5Jywge1xuICBzbGljZTogZnVuY3Rpb24oYmVnaW4sIGVuZCl7XG4gICAgdmFyIGxlbiAgID0gdG9MZW5ndGgodGhpcy5sZW5ndGgpXG4gICAgICAsIGtsYXNzID0gY29mKHRoaXMpO1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kO1xuICAgIGlmKGtsYXNzID09ICdBcnJheScpcmV0dXJuIGFycmF5U2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcbiAgICB2YXIgc3RhcnQgID0gdG9JbmRleChiZWdpbiwgbGVuKVxuICAgICAgLCB1cFRvICAgPSB0b0luZGV4KGVuZCwgbGVuKVxuICAgICAgLCBzaXplICAgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpXG4gICAgICAsIGNsb25lZCA9IEFycmF5KHNpemUpXG4gICAgICAsIGkgICAgICA9IDA7XG4gICAgZm9yKDsgaSA8IHNpemU7IGkrKyljbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xuICAgICAgPyB0aGlzLmNoYXJBdChzdGFydCArIGkpXG4gICAgICA6IHRoaXNbc3RhcnQgKyBpXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKElPYmplY3QgIT0gT2JqZWN0KSwgJ0FycmF5Jywge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7XG4gICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKElPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG5cbi8vIDIyLjEuMi4yIC8gMTUuNC4zLjIgQXJyYXkuaXNBcnJheShhcmcpXG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywge2lzQXJyYXk6IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpfSk7XG5cbnZhciBjcmVhdGVBcnJheVJlZHVjZSA9IGZ1bmN0aW9uKGlzUmlnaHQpe1xuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbiwgbWVtbyl7XG4gICAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICAgIHZhciBPICAgICAgPSBJT2JqZWN0KHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcbiAgICAgICwgaSAgICAgID0gaXNSaWdodCA/IC0xIDogMTtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoIDwgMilmb3IoOzspe1xuICAgICAgaWYoaW5kZXggaW4gTyl7XG4gICAgICAgIG1lbW8gPSBPW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCl7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gTyl7XG4gICAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBPW2luZGV4XSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn07XG5cbnZhciBtZXRob2RpemUgPSBmdW5jdGlvbigkZm4pe1xuICByZXR1cm4gZnVuY3Rpb24oYXJnMS8qLCBhcmcyID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZuKHRoaXMsIGFyZzEsIGFyZ3VtZW50c1sxXSk7XG4gIH07XG59O1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZm9yRWFjaDogJC5lYWNoID0gJC5lYWNoIHx8IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCgwKSksXG4gIC8vIDIyLjEuMy4xNSAvIDE1LjQuNC4xOSBBcnJheS5wcm90b3R5cGUubWFwKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIG1hcDogbWV0aG9kaXplKGNyZWF0ZUFycmF5TWV0aG9kKDEpKSxcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmaWx0ZXI6IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCgyKSksXG4gIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBzb21lOiBtZXRob2RpemUoY3JlYXRlQXJyYXlNZXRob2QoMykpLFxuICAvLyAyMi4xLjMuNSAvIDE1LjQuNC4xNiBBcnJheS5wcm90b3R5cGUuZXZlcnkoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZXZlcnk6IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCg0KSksXG4gIC8vIDIyLjEuMy4xOCAvIDE1LjQuNC4yMSBBcnJheS5wcm90b3R5cGUucmVkdWNlKGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlOiBjcmVhdGVBcnJheVJlZHVjZShmYWxzZSksXG4gIC8vIDIyLjEuMy4xOSAvIDE1LjQuNC4yMiBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2VSaWdodDogY3JlYXRlQXJyYXlSZWR1Y2UodHJ1ZSksXG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGluZGV4T2Y6IG1ldGhvZGl6ZShhcnJheUluZGV4T2YpLFxuICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uKGVsLCBmcm9tSW5kZXggLyogPSBAWyotMV0gKi8pe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QodGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IGxlbmd0aCAtIDE7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGZyb21JbmRleCkpO1xuICAgIGlmKGluZGV4IDwgMClpbmRleCA9IHRvTGVuZ3RoKGxlbmd0aCArIGluZGV4KTtcbiAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGluZGV4O1xuICAgIHJldHVybiAtMTtcbiAgfVxufSk7XG5cbi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywge25vdzogZnVuY3Rpb24oKXsgcmV0dXJuICtuZXcgRGF0ZTsgfX0pO1xuXG52YXIgbHogPSBmdW5jdGlvbihudW0pe1xuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcbn07XG5cbi8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBuZXcgRGF0ZSgtNWUxMyAtIDEpLnRvSVNPU3RyaW5nKCkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgbmV3IERhdGUoTmFOKS50b0lTT1N0cmluZygpO1xufSkpLCAnRGF0ZScsIHtcbiAgdG9JU09TdHJpbmc6IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCl7XG4gICAgaWYoIWlzRmluaXRlKHRoaXMpKXRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICAgIHZhciBkID0gdGhpc1xuICAgICAgLCB5ID0gZC5nZXRVVENGdWxsWWVhcigpXG4gICAgICAsIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICAgICAsIHMgPSB5IDwgMCA/ICctJyA6IHkgPiA5OTk5ID8gJysnIDogJyc7XG4gICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuICAgICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICAgJ1QnICsgbHooZC5nZXRVVENIb3VycygpKSArICc6JyArIGx6KGQuZ2V0VVRDTWludXRlcygpKSArXG4gICAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM1LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0ICYmICFvd24pcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmhpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZ1xuLy8gZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG52YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi8kLmNvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICBpZih0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpe1xuICAgIHZhbC5oYXNPd25Qcm9wZXJ0eShTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgICB2YWwuaGFzT3duUHJvcGVydHkoJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICB9XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKWRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudWlkLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY3R4LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pbnZva2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWluZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWxlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBhc2MoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBhc2MoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1tZXRob2RzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXg7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LWluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5rZXlvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGdldE5hbWVzICA9IHJlcXVpcmUoJy4vJCcpLmdldE5hbWVzXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcbiAgcmV0dXJuIGdldE5hbWVzKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdldC1uYW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9ICQuaXNFbnVtXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpa2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZW51bS1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnblxuICAgICwgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiBhKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKGEoe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRLZXlzICAgID0gJC5nZXRLZXlzXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzXG4gICAgLCBpc0VudW0gICAgID0gJC5pc0VudW07XG4gIHdoaWxlKCQkbGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KCQkW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7aXM6IHJlcXVpcmUoJy4vJC5zYW1lLXZhbHVlJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNldC1wcm90by5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKGl0KSA6IGl0O1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1zYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG4gIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwoaXQpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE1IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uKCRwcmV2ZW50RXh0ZW5zaW9ucyl7XG4gIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMoaXQpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTIgT2JqZWN0LmlzRnJvemVuKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2lzRnJvemVuJywgZnVuY3Rpb24oJGlzRnJvemVuKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRnJvemVuID8gJGlzRnJvemVuKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnaXNTZWFsZWQnLCBmdW5jdGlvbigkaXNTZWFsZWQpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNTZWFsZWQgPyAkaXNTZWFsZWQoaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24oJGlzRXh0ZW5zaWJsZSl7XG4gIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ipe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigkZ2V0UHJvdG90eXBlT2Ype1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKS5nZXQ7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHNldERlc2MgICAgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBoYXMgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgRlByb3RvICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAsIG5hbWVSRSAgICAgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS9cbiAgLCBOQU1FICAgICAgID0gJ25hbWUnO1xuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgJiYgc2V0RGVzYyhGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIG1hdGNoID0gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVxuICAgICAgLCBuYW1lICA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICBoYXModGhpcywgTkFNRSkgfHwgc2V0RGVzYyh0aGlzLCBOQU1FLCBjcmVhdGVEZXNjKDUsIG5hbWUpKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGlzT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBIQVNfSU5TVEFOQ0UgID0gcmVxdWlyZSgnLi8kLndrcycpKCdoYXNJbnN0YW5jZScpXG4gICwgRnVuY3Rpb25Qcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuaWYoIShIQVNfSU5TVEFOQ0UgaW4gRnVuY3Rpb25Qcm90bykpJC5zZXREZXNjKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwge3ZhbHVlOiBmdW5jdGlvbihPKXtcbiAgaWYodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xuICBpZighaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKXJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcbiAgd2hpbGUoTyA9ICQuZ2V0UHJvdG8oTykpaWYodGhpcy5wcm90b3R5cGUgPT09IE8pcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn19KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGNvZiAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLyQudG8tcHJpbWl0aXZlJylcbiAgLCBmYWlscyAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgJHRyaW0gICAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXRyaW0nKS50cmltXG4gICwgTlVNQkVSICAgICAgPSAnTnVtYmVyJ1xuICAsICROdW1iZXIgICAgID0gZ2xvYmFsW05VTUJFUl1cbiAgLCBCYXNlICAgICAgICA9ICROdW1iZXJcbiAgLCBwcm90byAgICAgICA9ICROdW1iZXIucHJvdG90eXBlXG4gIC8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xuICAsIEJST0tFTl9DT0YgID0gY29mKCQuY3JlYXRlKHByb3RvKSkgPT0gTlVNQkVSXG4gICwgVFJJTSAgICAgICAgPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbihhcmd1bWVudCl7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKXtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKVxuICAgICAgLCB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSl7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZih0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMClyZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmKGZpcnN0ID09PSA0OCl7XG4gICAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XG4gICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdCA6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspe1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZihjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKXtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSl7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWVcbiAgICAgICwgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24oKXsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gbmV3IEJhc2UodG9OdW1iZXIoaXQpKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgJC5lYWNoLmNhbGwocmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyAkLmdldE5hbWVzKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGhhcyhCYXNlLCBrZXkpICYmICFoYXMoJE51bWJlciwga2V5KSl7XG4gICAgICAkLnNldERlc2MoJE51bWJlciwga2V5LCAkLmdldERlc2MoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9KTtcbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xyXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxyXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcclxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcclxuICB2YXIgZm4sIHZhbDtcclxuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xyXG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8tcHJpbWl0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBzcGFjZXMgID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICAgICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRidcbiAgLCBzcGFjZSAgID0gJ1snICsgc3BhY2VzICsgJ10nXG4gICwgbm9uICAgICA9ICdcXHUyMDBiXFx1MDA4NSdcbiAgLCBsdHJpbSAgID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpXG4gICwgcnRyaW0gICA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBleHAgID0ge307XG4gIGV4cFtLRVldID0gZXhlYyh0cmltKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pLCAnU3RyaW5nJywgZXhwKTtcbn07XG5cbi8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4vLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcbi8vIDMgLT4gU3RyaW5nI3RyaW1cbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uKHN0cmluZywgVFlQRSl7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZihUWVBFICYgMSlzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZihUWVBFICYgMilzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7RVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIF9pc0Zpbml0ZSA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5pc0Zpbml0ZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc0ludGVnZXI6IHJlcXVpcmUoJy4vJC5pcy1pbnRlZ2VyJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBmbG9vciAgICA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCl7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc0ludGVnZXIgPSByZXF1aXJlKCcuLyQuaXMtaW50ZWdlcicpXG4gICwgYWJzICAgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcil7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge3BhcnNlRmxvYXQ6IHBhcnNlRmxvYXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtwYXJzZUludDogcGFyc2VJbnR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGxvZzFwICAgPSByZXF1aXJlKCcuLyQubWF0aC1sb2cxcCcpXG4gICwgc3FydCAgICA9IE1hdGguc3FydFxuICAsICRhY29zaCAgPSBNYXRoLmFjb3NoO1xuXG4vLyBWOCBidWcgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM1MDlcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2ggJiYgTWF0aC5mbG9vcigkYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkpID09IDcxMCksICdNYXRoJywge1xuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCl7XG4gICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IHggPiA5NDkwNjI2NS42MjQyNTE1NlxuICAgICAgPyBNYXRoLmxvZyh4KSArIE1hdGguTE4yXG4gICAgICA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5tYXRoLWxvZzFwLmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG5mdW5jdGlvbiBhc2luaCh4KXtcbiAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7YXNpbmg6IGFzaW5ofSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgYXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi45IE1hdGguY2JydCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBzaWduICAgID0gcmVxdWlyZSgnLi8kLm1hdGgtc2lnbicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNicnQ6IGZ1bmN0aW9uIGNicnQoeCl7XG4gICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpe1xuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanNcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY29zaDogZnVuY3Rpb24gY29zaCh4KXtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2V4cG0xOiByZXF1aXJlKCcuLyQubWF0aC1leHBtMScpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanNcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5leHBtMSB8fCBmdW5jdGlvbiBleHBtMSh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5tYXRoLWV4cG0xLmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHNpZ24gICAgICA9IHJlcXVpcmUoJy4vJC5tYXRoLXNpZ24nKVxuICAsIHBvdyAgICAgICA9IE1hdGgucG93XG4gICwgRVBTSUxPTiAgID0gcG93KDIsIC01MilcbiAgLCBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKVxuICAsIE1BWDMyICAgICA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpXG4gICwgTUlOMzIgICAgID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICsgMSAvIEVQU0lMT04gLSAxIC8gRVBTSUxPTjtcbn07XG5cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBmcm91bmQ6IGZ1bmN0aW9uIGZyb3VuZCh4KXtcbiAgICB2YXIgJGFicyAgPSBNYXRoLmFicyh4KVxuICAgICAgLCAkc2lnbiA9IHNpZ24oeClcbiAgICAgICwgYSwgcmVzdWx0O1xuICAgIGlmKCRhYnMgPCBNSU4zMilyZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICAgIGEgPSAoMSArIEVQU0lMT04zMiAvIEVQU0lMT04pICogJGFicztcbiAgICByZXN1bHQgPSBhIC0gKGEgLSAkYWJzKTtcbiAgICBpZihyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KXJldHVybiAkc2lnbiAqIEluZmluaXR5O1xuICAgIHJldHVybiAkc2lnbiAqIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzXG4gKiogbW9kdWxlIGlkID0gODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhYnMgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBzdW0gICA9IDBcbiAgICAgICwgaSAgICAgPSAwXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIGxhcmcgID0gMFxuICAgICAgLCBhcmcsIGRpdjtcbiAgICB3aGlsZShpIDwgJCRsZW4pe1xuICAgICAgYXJnID0gYWJzKCQkW2krK10pO1xuICAgICAgaWYobGFyZyA8IGFyZyl7XG4gICAgICAgIGRpdiAgPSBsYXJnIC8gYXJnO1xuICAgICAgICBzdW0gID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZihhcmcgPiAwKXtcbiAgICAgICAgZGl2ICA9IGFyZyAvIGxhcmc7XG4gICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG4gICAgICB9IGVsc2Ugc3VtICs9IGFyZztcbiAgICB9XG4gICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmh5cG90LmpzXG4gKiogbW9kdWxlIGlkID0gODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGltdWwgICA9IE1hdGguaW11bDtcblxuLy8gc29tZSBXZWJLaXQgdmVyc2lvbnMgZmFpbHMgd2l0aCBiaWcgbnVtYmVycywgc29tZSBoYXMgd3JvbmcgYXJpdHlcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xufSksICdNYXRoJywge1xuICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgeG4gPSAreFxuICAgICAgLCB5biA9ICt5XG4gICAgICAsIHhsID0gVUlOVDE2ICYgeG5cbiAgICAgICwgeWwgPSBVSU5UMTYgJiB5bjtcbiAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtsb2cxcDogcmVxdWlyZSgnLi8kLm1hdGgtbG9nMXAnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanNcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtzaWduOiByZXF1aXJlKCcuLyQubWF0aC1zaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZXhwbTEgICA9IHJlcXVpcmUoJy4vJC5tYXRoLWV4cG0xJylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbi8vIFY4IG5lYXIgQ2hyb21pdW0gMzggaGFzIGEgcHJvYmxlbSB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcbn0pLCAnTWF0aCcsIHtcbiAgc2luaDogZnVuY3Rpb24gc2luaCh4KXtcbiAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDFcbiAgICAgID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDJcbiAgICAgIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpbmguanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBleHBtMSAgID0gcmVxdWlyZSgnLi8kLm1hdGgtZXhwbTEnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0YW5oOiBmdW5jdGlvbiB0YW5oKHgpe1xuICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxuICAgICAgLCBiID0gZXhwbTEoLXgpO1xuICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyhpdCl7XG4gICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvSW5kZXggICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JylcbiAgLCBmcm9tQ2hhckNvZGUgICA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbiAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG4vLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcbiAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciByZXMgICA9IFtdXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIGkgICAgID0gMFxuICAgICAgLCBjb2RlO1xuICAgIHdoaWxlKCQkbGVuID4gaSl7XG4gICAgICBjb2RlID0gKyQkW2krK107XG4gICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXG4gICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcbiAgICAgICk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludC5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcbiAgICB2YXIgdHBsICAgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KVxuICAgICAgLCBsZW4gICA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIHJlcyAgID0gW11cbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHdoaWxlKGxlbiA+IGkpe1xuICAgICAgcmVzLnB1c2goU3RyaW5nKHRwbFtpKytdKSk7XG4gICAgICBpZihpIDwgJCRsZW4pcmVzLnB1c2goU3RyaW5nKCQkW2ldKSk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcbnJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpKCd0cmltJywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbSgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG8gICAgICAgPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90b1xuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRuYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvKCRkZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgLy8gRkYgZml4XG4gICAgaWYoIUxJQlJBUlkgJiYgaGFzKHByb3RvLCBGRl9JVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgICB9XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyYXRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkYXQgICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKGZhbHNlKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcbiAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBjb250ZXh0ICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKVxuICAsIEVORFNfV0lUSCA9ICdlbmRzV2l0aCdcbiAgLCAkZW5kc1dpdGggPSAnJ1tFTkRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscy1pcy1yZWdleHAnKShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSClcbiAgICAgICwgJCQgICA9IGFyZ3VtZW50c1xuICAgICAgLCBlbmRQb3NpdGlvbiA9ICQkLmxlbmd0aCA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcbiAgICAgICwgZW5kICAgID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IE1hdGgubWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLyQuaXMtcmVnZXhwJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKXtcbiAgaWYoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSl0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctY29udGV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBjb2YgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIE1BVENIICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIE1BVENIID0gcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2goZSl7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoKGYpeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMtaXMtcmVnZXhwLmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY29udGV4dCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKVxuICAsIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpXG4gICAgICAuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXG4gIHJlcGVhdDogcmVxdWlyZSgnLi8kLnN0cmluZy1yZXBlYXQnKVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xuICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpXG4gICAgLCByZXMgPSAnJ1xuICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XG4gIHJldHVybiByZXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLXJlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgY29udGV4dCAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKVxuICAsIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnXG4gICwgJHN0YXJ0c1dpdGggPSAnJ1tTVEFSVFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzLWlzLXJlZ2V4cCcpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgdmFyIHRoYXQgICA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSClcbiAgICAgICwgJCQgICAgID0gYXJndW1lbnRzXG4gICAgICAsIGluZGV4ICA9IHRvTGVuZ3RoKE1hdGgubWluKCQkLmxlbmd0aCA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJHN0YXJ0c1dpdGhcbiAgICAgID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsICQkICAgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gICA9ICQkLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgJCRsZW4gPiAyID8gJCRbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItY2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtYXJyYXktaXRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgc2FmZSA9IHRydWU7IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWRldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbi8vIFdlYktpdCBBcnJheS5vZiBpc24ndCBnZW5lcmljXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcbiAgb2Y6IGZ1bmN0aW9uIG9mKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsICQkICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiAgPSAkJC5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KSgkJGxlbik7XG4gICAgd2hpbGUoJCRsZW4gPiBpbmRleClyZXN1bHRbaW5kZXhdID0gJCRbaW5kZXgrK107XG4gICAgcmVzdWx0Lmxlbmd0aCA9ICQkbGVuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDExOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDExOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi8kLndrcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi8kLmhpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpKCdBcnJheScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkkLnNldERlc2MoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNldC1zcGVjaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2NvcHlXaXRoaW46IHJlcXVpcmUoJy4vJC5hcnJheS1jb3B5LXdpdGhpbicpfSk7XG5cbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKSgnY29weVdpdGhpbicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCB0b0luZGV4ICA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gW10uY29weVdpdGhpbiB8fCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldC8qPSAwKi8sIHN0YXJ0Lyo9IDAsIGVuZCA9IEBsZW5ndGgqLyl7XG4gIHZhciBPICAgICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgLCBsZW4gICA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxuICAgICwgZnJvbSAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgZW5kICAgPSAkJC5sZW5ndGggPiAyID8gJCRbMl0gOiB1bmRlZmluZWRcbiAgICAsIGNvdW50ID0gTWF0aC5taW4oKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pXG4gICAgLCBpbmMgICA9IDE7XG4gIGlmKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCl7XG4gICAgaW5jICA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICAgKz0gY291bnQgLSAxO1xuICB9XG4gIHdoaWxlKGNvdW50LS0gPiAwKXtcbiAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xuICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgIHRvICAgKz0gaW5jO1xuICAgIGZyb20gKz0gaW5jO1xuICB9IHJldHVybiBPO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LWNvcHktd2l0aGluLmpzXG4gKiogbW9kdWxlIGlkID0gMTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2ZpbGw6IHJlcXVpcmUoJy4vJC5hcnJheS1maWxsJyl9KTtcblxucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgdG9JbmRleCAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBbXS5maWxsIHx8IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCAkJCAgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuICA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggID0gdG9JbmRleCgkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKVxuICAgICwgZW5kICAgID0gJCRsZW4gPiAyID8gJCRbMl0gOiB1bmRlZmluZWRcbiAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkZmluZCAgID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKSg1KVxuICAsIEtFWSAgICAgPSAnZmluZCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjkgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRmaW5kICAgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpKDYpXG4gICwgS0VZICAgICA9ICdmaW5kSW5kZXgnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaXNSZWdFeHAgPSByZXF1aXJlKCcuLyQuaXMtcmVnZXhwJylcbiAgLCAkZmxhZ3MgICA9IHJlcXVpcmUoJy4vJC5mbGFncycpXG4gICwgJFJlZ0V4cCAgPSBnbG9iYWwuUmVnRXhwXG4gICwgQmFzZSAgICAgPSAkUmVnRXhwXG4gICwgcHJvdG8gICAgPSAkUmVnRXhwLnByb3RvdHlwZVxuICAsIHJlMSAgICAgID0gL2EvZ1xuICAsIHJlMiAgICAgID0gL2EvZ1xuICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcbiAgLCBDT1JSRUNUX05FVyA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuaWYocmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgJiYgKCFDT1JSRUNUX05FVyB8fCByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZTJbcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSl7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZil7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKVxuICAgICAgLCBmaVUgID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhKHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwKSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZik7XG4gIH07XG4gICQuZWFjaC5jYWxsKCQuZ2V0TmFtZXMoQmFzZSksIGZ1bmN0aW9uKGtleSl7XG4gICAga2V5IGluICRSZWdFeHAgfHwgJC5zZXREZXNjKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH0pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vJC5yZWRlZmluZScpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xufVxuXG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKSgnUmVnRXhwJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgICA9IGFuT2JqZWN0KHRoaXMpXG4gICAgLCByZXN1bHQgPSAnJztcbiAgaWYodGhhdC5nbG9iYWwpICAgICByZXN1bHQgKz0gJ2cnO1xuICBpZih0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmKHRoYXQubXVsdGlsaW5lKSAgcmVzdWx0ICs9ICdtJztcbiAgaWYodGhhdC51bmljb2RlKSAgICByZXN1bHQgKz0gJ3UnO1xuICBpZih0aGF0LnN0aWNreSkgICAgIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmxhZ3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5pZihyZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykkLnNldERlc2MoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi8kLmZsYWdzJylcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEBAbWF0Y2ggbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgTUFUQ0gpe1xuICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG4gIHJldHVybiBmdW5jdGlvbiBtYXRjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGZhaWxzICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCB3a3MgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGxlbmd0aCwgZXhlYyl7XG4gIHZhciBTWU1CT0wgICA9IHdrcyhLRVkpXG4gICAgLCBvcmlnaW5hbCA9ICcnW0tFWV07XG4gIGlmKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbigpeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSl7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBleGVjKGRlZmluZWQsIFNZTUJPTCwgb3JpZ2luYWwpKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKXsgcmV0dXJuIG9yaWdpbmFsLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24oc3RyaW5nKXsgcmV0dXJuIG9yaWdpbmFsLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5maXgtcmUtd2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSl7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIFNFQVJDSCl7XG4gIC8vIDIxLjEuMy4xNSBTdHJpbmcucHJvdG90eXBlLnNlYXJjaChyZWdleHApXG4gIHJldHVybiBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBTUExJVCwgJHNwbGl0KXtcbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIExJQlJBUlkgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgZ2xvYmFsICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjbGFzc29mICAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgc3RyaWN0TmV3ICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBmb3JPZiAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc2V0UHJvdG8gICA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXRcbiAgLCBzYW1lICAgICAgID0gcmVxdWlyZSgnLi8kLnNhbWUtdmFsdWUnKVxuICAsIFNQRUNJRVMgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCBhc2FwICAgICAgID0gcmVxdWlyZSgnLi8kLm1pY3JvdGFzaycpXG4gICwgUFJPTUlTRSAgICA9ICdQcm9taXNlJ1xuICAsIHByb2Nlc3MgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIFAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBXcmFwcGVyO1xuXG52YXIgdGVzdFJlc29sdmUgPSBmdW5jdGlvbihzdWIpe1xuICB2YXIgdGVzdCA9IG5ldyBQKGZ1bmN0aW9uKCl7fSk7XG4gIGlmKHN1Yil0ZXN0LmNvbnN0cnVjdG9yID0gT2JqZWN0O1xuICByZXR1cm4gUC5yZXNvbHZlKHRlc3QpID09PSB0ZXN0O1xufTtcblxudmFyIFVTRV9OQVRJVkUgPSBmdW5jdGlvbigpe1xuICB2YXIgd29ya3MgPSBmYWxzZTtcbiAgZnVuY3Rpb24gUDIoeCl7XG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcbiAgICBzZXRQcm90byhzZWxmLCBQMi5wcm90b3R5cGUpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIHRyeSB7XG4gICAgd29ya3MgPSBQICYmIFAucmVzb2x2ZSAmJiB0ZXN0UmVzb2x2ZSgpO1xuICAgIHNldFByb3RvKFAyLCBQKTtcbiAgICBQMi5wcm90b3R5cGUgPSAkLmNyZWF0ZShQLnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IFAyfX0pO1xuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XG4gICAgaWYoIShQMi5yZXNvbHZlKDUpLnRoZW4oZnVuY3Rpb24oKXt9KSBpbnN0YW5jZW9mIFAyKSl7XG4gICAgICB3b3JrcyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhY3R1YWwgVjggYnVnLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDE2MlxuICAgIGlmKHdvcmtzICYmIHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKXtcbiAgICAgIHZhciB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSBmYWxzZTtcbiAgICAgIFAucmVzb2x2ZSgkLnNldERlc2Moe30sICd0aGVuJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHRoZW5hYmxlVGhlbkdvdHRlbiA9IHRydWU7IH1cbiAgICAgIH0pKTtcbiAgICAgIHdvcmtzID0gdGhlbmFibGVUaGVuR290dGVuO1xuICAgIH1cbiAgfSBjYXRjaChlKXsgd29ya3MgPSBmYWxzZTsgfVxuICByZXR1cm4gd29ya3M7XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICBpZihMSUJSQVJZICYmIGEgPT09IFAgJiYgYiA9PT0gV3JhcHBlcilyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHNhbWUoYSwgYik7XG59O1xudmFyIGdldENvbnN0cnVjdG9yID0gZnVuY3Rpb24oQyl7XG4gIHZhciBTID0gYW5PYmplY3QoQylbU1BFQ0lFU107XG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpLFxuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KVxufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHJlY29yZCwgaXNSZWplY3Qpe1xuICBpZihyZWNvcmQubilyZXR1cm47XG4gIHJlY29yZC5uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcmVjb3JkLmM7XG4gIGFzYXAoZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSByZWNvcmQudlxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyID09PSB0cnVlID8gdmFsdWUgOiBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICByZWNvcmQubiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0KXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcbiAgICAgICAgLCBoYW5kbGVyLCBjb25zb2xlO1xuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IHJlY29yZC5hID0gdW5kZWZpbmVkO1xuICAgIH0sIDEpO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdmFyIHJlY29yZCA9IHByb21pc2UuX2RcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpcztcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHJlY29yZC52ID0gdmFsdWU7XG4gIHJlY29yZC5zID0gMjtcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xuICBub3RpZnkocmVjb3JkLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihyZWNvcmQucCA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICAgIHJlY29yZC5zID0gMTtcbiAgICAgIG5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgdmFyIHJlY29yZCA9IHRoaXMuX2QgPSB7XG4gICAgICBwOiBzdHJpY3ROZXcodGhpcywgUCwgUFJPTUlTRSksICAgICAgICAgLy8gPC0gcHJvbWlzZVxuICAgICAgYzogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgICBzOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICAgIGQ6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBkb25lXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgIGg6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBoYW5kbGVkIHJlamVjdGlvblxuICAgICAgbjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbChyZWNvcmQsIGVycik7XG4gICAgfVxuICB9O1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJykoUC5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQKSlcbiAgICAgICAgLCBwcm9taXNlICA9IHJlYWN0aW9uLnByb21pc2VcbiAgICAgICAgLCByZWNvcmQgICA9IHRoaXMuX2Q7XG4gICAgICByZWFjdGlvbi5vayAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVjb3JkLmMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQuYSlyZWNvcmQuYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHJlY29yZC5zKW5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogUH0pO1xucmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJykoUCwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuLyQuY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mIFAgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3RcbiAgICAgICwgdmFsdWVzICAgICA9IFtdO1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpY3QtbmV3LmpzXG4gKiogbW9kdWxlIGlkID0gMTM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XG4gIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3I7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZvci1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLyQudGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbnZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBwYXJlbnQsIGRvbWFpbiwgZm47XG4gIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXtcbiAgICBwcm9jZXNzLmRvbWFpbiA9IG51bGw7XG4gICAgcGFyZW50LmV4aXQoKTtcbiAgfVxuICB3aGlsZShoZWFkKXtcbiAgICBkb21haW4gPSBoZWFkLmRvbWFpbjtcbiAgICBmbiAgICAgPSBoZWFkLmZuO1xuICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICBmbigpOyAvLyA8LSBjdXJyZW50bHkgd2UgdXNlIGl0IG9ubHkgZm9yIFByb21pc2UgLSB0cnkgLyBjYXRjaCBub3QgcmVxdWlyZWRcbiAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICBoZWFkID0gaGVhZC5uZXh0O1xuICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbn07XG5cbi8vIE5vZGUuanNcbmlmKGlzTm9kZSl7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gIH07XG4vLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbn0gZWxzZSBpZihPYnNlcnZlcil7XG4gIHZhciB0b2dnbGUgPSAxXG4gICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9IC10b2dnbGU7XG4gIH07XG4vLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxufSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZsdXNoKTtcbiAgfTtcbi8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4vLyAtIHNldEltbWVkaWF0ZVxuLy8gLSBNZXNzYWdlQ2hhbm5lbFxuLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2Vcbi8vIC0gc2V0VGltZW91dFxufSBlbHNlIHtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNhcChmbil7XG4gIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkLCBkb21haW46IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpbn07XG4gIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYoIWhlYWQpe1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1pY3JvdGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDE0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucmVkZWZpbmUtYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhpZGUgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBzdHJpY3ROZXcgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZGVmaW5lZCAgICAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIGZvck9mICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSUQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdpZCcpXG4gICwgJGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0U3BlY2llcyAgID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBTSVpFICAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSdcbiAgLCBpZCAgICAgICAgICAgPSAwO1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoISRoYXMoaXQsIElEKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcbiAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XG59O1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSAkLmNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzdHJpY3ROZXcgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCAkaXRlckRldGVjdCAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uKEtFWSl7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24oYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgICAgICAgICAgICAgPSBuZXcgQ1xuICAgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgICAgLCBIQVNOVF9DSEFJTklORyAgICAgICA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2VcbiAgICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgICAgLCBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uKCl7IGluc3RhbmNlLmhhcygxKTsgfSlcbiAgICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAgICwgQUNDRVBUX0lURVJBQkxFUyAgICAgPSAkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICAgICwgQlVHR1lfWkVSTztcbiAgICBpZighQUNDRVBUX0lURVJBQkxFUyl7IFxuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICAgIHN0cmljdE5ldyh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IG5ldyBCYXNlO1xuICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgSVNfV0VBSyB8fCBpbnN0YW5jZS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwga2V5KXtcbiAgICAgIEJVR0dZX1pFUk8gPSAxIC8ga2V5ID09PSAtSW5maW5pdHk7XG4gICAgfSk7XG4gICAgaWYoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTyl7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZihCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKWZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZihJU19XRUFLICYmIHByb3RvLmNsZWFyKWRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCByZWRlZmluZSAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIHdlYWsgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXdlYWsnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGZyb3plblN0b3JlICA9IHdlYWsuZnJvemVuU3RvcmVcbiAgLCBXRUFLICAgICAgICAgPSB3ZWFrLldFQUtcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgdG1wICAgICAgICAgID0ge307XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgaWYoaXNPYmplY3Qoa2V5KSl7XG4gICAgICBpZighaXNFeHRlbnNpYmxlKGtleSkpcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgaWYoaGFzKGtleSwgV0VBSykpcmV0dXJuIGtleVtXRUFLXVt0aGlzLl9pXTtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcbiAgJC5lYWNoLmNhbGwoWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgcHJvdG8gID0gJFdlYWtNYXAucHJvdG90eXBlXG4gICAgICAsIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBsZWFreSBtYXBcbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpe1xuICAgICAgICB2YXIgcmVzdWx0ID0gZnJvemVuU3RvcmUodGhpcylba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBzdHJpY3ROZXcgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKVxuICAsICRoYXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgV0VBSyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ3dlYWsnKVxuICAsIGlzRXh0ZW5zaWJsZSAgICAgID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdFxuICAsIGFycmF5RmluZCAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgLCBhcnJheUZpbmRJbmRleCAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG4gICwgaWQgICAgICAgICAgICAgICAgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgZnJvemVuIGtleXNcbnZhciBmcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBGcm96ZW5TdG9yZSk7XG59O1xudmFyIEZyb3plblN0b3JlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcbkZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gISFmaW5kRnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmKH5pbmRleCl0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgaWYoIWlzRXh0ZW5zaWJsZShrZXkpKXJldHVybiBmcm96ZW5TdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuICRoYXMoa2V5LCBXRUFLKSAmJiAkaGFzKGtleVtXRUFLXSwgdGhpcy5faSkgJiYgZGVsZXRlIGtleVtXRUFLXVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZighaXNFeHRlbnNpYmxlKGtleSkpcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gJGhhcyhrZXksIFdFQUspICYmICRoYXMoa2V5W1dFQUtdLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICBpZighaXNFeHRlbnNpYmxlKGFuT2JqZWN0KGtleSkpKXtcbiAgICAgIGZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGhhcyhrZXksIFdFQUspIHx8IGhpZGUoa2V5LCBXRUFLLCB7fSk7XG4gICAgICBrZXlbV0VBS11bdGhhdC5faV0gPSB2YWx1ZTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBmcm96ZW5TdG9yZTogZnJvemVuU3RvcmUsXG4gIFdFQUs6IFdFQUtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXdlYWsuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpO1xuXG4vLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywgdmFsdWUsIHRydWUpO1xuICB9XG59LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgX2FwcGx5ICA9IEZ1bmN0aW9uLmFwcGx5O1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCl7XG4gICAgcmV0dXJuIF9hcHBseS5jYWxsKHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBhbk9iamVjdCAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBiaW5kICAgICAgPSBGdW5jdGlvbi5iaW5kIHx8IHJlcXVpcmUoJy4vJC5jb3JlJykuRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbi8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50c1xuLy8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBGKCl7fVxuICByZXR1cm4gIShSZWZsZWN0LmNvbnN0cnVjdChmdW5jdGlvbigpe30sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSksICdSZWZsZWN0Jywge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyosIG5ld1RhcmdldCovKXtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZihUYXJnZXQgPT0gbmV3VGFyZ2V0KXtcbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG4gICAgICBpZihhcmdzICE9IHVuZGVmaW5lZClzd2l0Y2goYW5PYmplY3QoYXJncykubGVuZ3RoKXtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldDtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIH1cbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgbG90IG9mIGFyZ3VtZW50cyBjYXNlXG4gICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcbiAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gICAgPSBuZXdUYXJnZXQucHJvdG90eXBlXG4gICAgICAsIGluc3RhbmNlID0gJC5jcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxuICAgICAgLCByZXN1bHQgICA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG4vLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoJC5zZXREZXNjKHt9LCAxLCB7dmFsdWU6IDF9KSwgMSwge3ZhbHVlOiAyfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHRyeSB7XG4gICAgICAkLnNldERlc2ModGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHZhciBkZXNjID0gZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSAgICAgICAvLyBrZXlzXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XG59O1xucmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJykoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gICAgLCBrZXlzID0gdGhhdC5fa1xuICAgICwga2V5O1xuICBkbyB7XG4gICAgaWYodGhhdC5faSA+PSBrZXlzLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICB9IHdoaWxlKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuICByZXR1cm4ge3ZhbHVlOiBrZXksIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGVudW1lcmF0ZTogZnVuY3Rpb24gZW51bWVyYXRlKHRhcmdldCl7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleS8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cbiAgICAsIGRlc2MsIHByb3RvO1xuICBpZihhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcilyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYoZGVzYyA9ICQuZ2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5KSlyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgPyBkZXNjLnZhbHVlXG4gICAgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgaWYoaXNPYmplY3QocHJvdG8gPSAkLmdldFByb3RvKHRhcmdldCkpKXJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtnZXQ6IGdldH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuICQuZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZ2V0UHJvdG8gPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90b1xuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpe1xuICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxudmFyICRleHBvcnQgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhbk9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtvd25LZXlzOiByZXF1aXJlKCcuLyQub3duLWtleXMnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgUmVmbGVjdCAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXROYW1lcyhhbk9iamVjdChpdCkpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCRwcmV2ZW50RXh0ZW5zaW9ucykkcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG52YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgaGFzICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM11cbiAgICAsIG93bkRlc2MgID0gJC5nZXREZXNjKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxuICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcbiAgaWYoIW93bkRlc2Mpe1xuICAgIGlmKGlzT2JqZWN0KHByb3RvID0gJC5nZXRQcm90byh0YXJnZXQpKSl7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xuICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9ICQuZ2V0RGVzYyhyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICAkLnNldERlc2MocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7c2V0OiBzZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgc2V0UHJvdG8gPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJyk7XG5cbmlmKHNldFByb3RvKSRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pe1xuICAgIHNldFByb3RvLmNoZWNrKHRhcmdldCwgcHJvdG8pO1xuICAgIHRyeSB7XG4gICAgICBzZXRQcm90by5zZXQodGFyZ2V0LCBwcm90byk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRhdCAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBhdDogZnVuY3Rpb24gYXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHBhZCAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcGFkJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRMZWZ0OiBmdW5jdGlvbiBwYWRMZWZ0KG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtc3RyaW5nLXBhZC1sZWZ0LXJpZ2h0XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCByZXBlYXQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0JylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KXtcbiAgdmFyIFMgICAgICAgICAgICA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICwgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGhcbiAgICAsIGZpbGxTdHIgICAgICA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKVxuICAgICwgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aClyZXR1cm4gUztcbiAgaWYoZmlsbFN0ciA9PSAnJylmaWxsU3RyID0gJyAnO1xuICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aFxuICAgICwgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZihzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbilzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLXBhZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkcGFkICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZFJpZ2h0OiBmdW5jdGlvbiBwYWRSaWdodChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtcmlnaHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpKCd0cmltTGVmdCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDEpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpKCd0cmltUmlnaHQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHJlICAgICA9IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCl7IHJldHVybiAkcmUoaXQpOyB9fSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZXBsYWNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi85MzUzNzgxXG52YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIG93bktleXMgICAgPSByZXF1aXJlKCcuLyQub3duLWtleXMnKVxuICAsIHRvSU9iamVjdCAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCl7XG4gICAgdmFyIE8gICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICAgLCBzZXREZXNjID0gJC5zZXREZXNjXG4gICAgICAsIGdldERlc2MgPSAkLmdldERlc2NcbiAgICAgICwga2V5cyAgICA9IG93bktleXMoTylcbiAgICAgICwgcmVzdWx0ICA9IHt9XG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleSwgRDtcbiAgICB3aGlsZShrZXlzLmxlbmd0aCA+IGkpe1xuICAgICAgRCA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgIGlmKGtleSBpbiByZXN1bHQpc2V0RGVzYyhyZXN1bHQsIGtleSwgY3JlYXRlRGVzYygwLCBEKSk7XG4gICAgICBlbHNlIHJlc3VsdFtrZXldID0gRDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHZhbHVlcyA9IHJlcXVpcmUoJy4vJC5vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCl7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGlzRW51bSAgICA9ICQuaXNFbnVtO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi8kLm9iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGZvck9mICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yT2YodGhpcywgZmFsc2UsIGFyci5wdXNoLCBhcnIpO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzXG4gKiogbW9kdWxlIGlkID0gMTgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cbnZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGN0eCAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsICRBcnJheSAgPSByZXF1aXJlKCcuLyQuY29yZScpLkFycmF5IHx8IEFycmF5XG4gICwgc3RhdGljcyA9IHt9O1xudmFyIHNldFN0YXRpY3MgPSBmdW5jdGlvbihrZXlzLCBsZW5ndGgpe1xuICAkLmVhY2guY2FsbChrZXlzLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGtleSl7XG4gICAgaWYobGVuZ3RoID09IHVuZGVmaW5lZCAmJiBrZXkgaW4gJEFycmF5KXN0YXRpY3Nba2V5XSA9ICRBcnJheVtrZXldO1xuICAgIGVsc2UgaWYoa2V5IGluIFtdKXN0YXRpY3Nba2V5XSA9ICRjdHgoRnVuY3Rpb24uY2FsbCwgW11ba2V5XSwgbGVuZ3RoKTtcbiAgfSk7XG59O1xuc2V0U3RhdGljcygncG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcycsIDEpO1xuc2V0U3RhdGljcygnaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlcycsIDMpO1xuc2V0U3RhdGljcygnam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLCcgK1xuICAgICAgICAgICAncmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHN0YXRpY3MpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2pzLmFycmF5LnN0YXRpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbnZhciBnbG9iYWwgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGludm9rZSAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBwYXJ0aWFsICAgID0gcmVxdWlyZSgnLi8kLnBhcnRpYWwnKVxuICAsIG5hdmlnYXRvciAgPSBnbG9iYWwubmF2aWdhdG9yXG4gICwgTVNJRSAgICAgICA9ICEhbmF2aWdhdG9yICYmIC9NU0lFIC5cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciB3cmFwID0gZnVuY3Rpb24oc2V0KXtcbiAgcmV0dXJuIE1TSUUgPyBmdW5jdGlvbihmbiwgdGltZSAvKiwgLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIHNldChpbnZva2UoXG4gICAgICBwYXJ0aWFsLFxuICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxuICAgICAgdHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKVxuICAgICksIHRpbWUpO1xuICB9IDogc2V0O1xufTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CICsgJGV4cG9ydC5GICogTVNJRSwge1xuICBzZXRUaW1lb3V0OiAgd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBwYXRoICAgICAgPSByZXF1aXJlKCcuLyQucGF0aCcpXG4gICwgaW52b2tlICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oLyogLi4ucGFyZ3MgKi8pe1xuICB2YXIgZm4gICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBfICAgICAgPSBwYXRoLl9cbiAgICAsIGhvbGRlciA9IGZhbHNlO1xuICB3aGlsZShsZW5ndGggPiBpKWlmKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICAgLCBqID0gMCwgayA9IDAsIGFyZ3M7XG4gICAgaWYoIWhvbGRlciAmJiAhJCRsZW4pcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xuICAgIGFyZ3MgPSBwYXJncy5zbGljZSgpO1xuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGo7IGorKylpZihhcmdzW2pdID09PSBfKWFyZ3Nbal0gPSAkJFtrKytdO1xuICAgIHdoaWxlKCQkbGVuID4gaylhcmdzLnB1c2goJCRbaysrXSk7XG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucGFydGlhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMTg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICR0YXNrICAgPSByZXF1aXJlKCcuLyQudGFzaycpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIsIHtcbiAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcbiAgY2xlYXJJbW1lZGlhdGU6ICR0YXNrLmNsZWFyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgSXRlcmF0b3JzICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIE5MICAgICAgICAgID0gZ2xvYmFsLk5vZGVMaXN0XG4gICwgSFRDICAgICAgICAgPSBnbG9iYWwuSFRNTENvbGxlY3Rpb25cbiAgLCBOTFByb3RvICAgICA9IE5MICYmIE5MLnByb3RvdHlwZVxuICAsIEhUQ1Byb3RvICAgID0gSFRDICYmIEhUQy5wcm90b3R5cGVcbiAgLCBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTtcbmlmKE5MUHJvdG8gJiYgIU5MUHJvdG9bSVRFUkFUT1JdKWhpZGUoTkxQcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbmlmKEhUQ1Byb3RvICYmICFIVENQcm90b1tJVEVSQVRPUl0paGlkZShIVENQcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9XG4gICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLiBTb21lIG1heSBjb25zaWRlciB0aGUgbmFtZSBvZiB0aGlzIG1ldGhvZCB0b29cbiAgLy8gY3V0ZXN5LCBidXQgdGhleSBhcmUgY3VybXVkZ2VvbnMuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICAvLyBUaGlzIGludm9rZSBmdW5jdGlvbiBpcyB3cml0dGVuIGluIGEgc3R5bGUgdGhhdCBhc3N1bWVzIHNvbWVcbiAgICAvLyBjYWxsaW5nIGZ1bmN0aW9uIChvciBQcm9taXNlKSB3aWxsIGhhbmRsZSBleGNlcHRpb25zLlxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbmVyYXRvclttZXRob2RdKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50XG4gICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihpbnZva2VOZXh0LCBpbnZva2VUaHJvdylcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIGludm9rZU5leHQgPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwibmV4dFwiKTtcbiAgICB2YXIgaW52b2tlVGhyb3cgPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwidGhyb3dcIik7XG4gICAgdmFyIGludm9rZVJldHVybiA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJyZXR1cm5cIik7XG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gaW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9iYWJlbC1yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xucmVxdWlyZSgnLi9zY3NzL3N0eWxlLnNjc3MnKTtcbnJlcXVpcmUoJy4vc2Nzcy9jcnRfc3R5bGUuY3NzJyk7XG4vKlxuKihjKSBDb3B5cmlnaHQgMjAxMSBTaW1vbmUgTWFzaWVyby4gU29tZSBSaWdodHMgUmVzZXJ2ZWQuIFxuKlRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciBhIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tTm9uY29tbWVyY2lhbC1TaGFyZSBBbGlrZSAzLjAgTGljZW5zZVxuKi9cblxuJChcblx0ZnVuY3Rpb24oKXtcblx0XHQkKCBkb2N1bWVudCApLmtleWRvd24oXG5cdFx0XHRmdW5jdGlvbiAoIGV2ZW50ICkgeyBcblx0XHRcdFx0VHlwZXIuYWRkVGV4dCggZXZlbnQgKTsgLy9DYXB0dXJlIHRoZSBrZXlkb3duIGV2ZW50IGFuZCBjYWxsIHRoZSBhZGRUZXh0LCB0aGlzIGlzIGV4ZWN1dGVkIG9uIHBhZ2UgbG9hZFxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbik7XG5cbnZhciBUeXBlcj17XG5cdHRleHQ6IG51bGwsXG5cdGFjY2Vzc0NvdW50aW1lcjpudWxsLFxuXHRpbmRleDowLCAvLyBjdXJyZW50IGN1cnNvciBwb3NpdGlvblxuXHRzcGVlZDozLCAvLyBzcGVlZCBvZiB0aGUgVHlwZXJcblx0ZmlsZTpcIi9hc3NldHMvY29kZV9maWxlLnR4dFwiLCAvL2ZpbGUsIG11c3QgYmUgc2V0dGVkXG5cdGFjY2Vzc0NvdW50OjAsIC8vdGltZXMgYWx0IGlzIHByZXNzZWQgZm9yIEFjY2VzcyBHcmFudGVkXG5cdGRlbmllZENvdW50OjAsIC8vdGltZXMgY2FwcyBpcyBwcmVzc2VkIGZvciBBY2Nlc3MgRGVuaWVkXG5cdGluaXQ6IGZ1bmN0aW9uKCl7Ly8gaW5pemlhbGl6ZSBIYWNrZXIgVHlwZXJcblx0XHR0aGlzLmFjY2Vzc0NvdW50aW1lcj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe1R5cGVyLnVwZExzdENocigpO30sNTAwKTsgLy8gaW5pemlhbGl6ZSB0aW1lciBmb3IgYmxpbmtpbmcgY3Vyc29yXG5cdFx0JC5nZXQoVHlwZXIuZmlsZSxmdW5jdGlvbihkYXRhKXsvLyBnZXQgdGhlIHRleHQgZmlsZVxuXHRcdFx0VHlwZXIudGV4dD1kYXRhOy8vIHNhdmUgdGhlIHRleHRmaWxlIGluIFR5cGVyLnRleHRcblx0XHR9KTtcblx0fSxcblx0XG5cdGNvbnRlbnQ6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJChcIiNjb25zb2xlXCIpLmh0bWwoKTsvLyBnZXQgY29uc29sZSBjb250ZW50XG5cdH0sXG5cdFxuXHR3cml0ZTpmdW5jdGlvbihzdHIpey8vIGFwcGVuZCB0byBjb25zb2xlIGNvbnRlbnRcblx0XHQkKFwiI2NvbnNvbGVcIikuYXBwZW5kKHN0cik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRcblx0bWFrZUFjY2VzczpmdW5jdGlvbigpey8vY3JlYXRlIEFjY2VzcyBHcmFudGVkIHBvcFVwICAgICAgRklYTUU6IHBvcHVwIGlzIG9uIHRvcCBvZiB0aGUgcGFnZSBhbmQgZG9lc24ndCBzaG93IGlzIHRoZSBwYWdlIGlzIHNjcm9sbGVkXG5cdFx0VHlwZXIuaGlkZXBvcCgpOyAvLyBoaWRlIGFsbCBwb3B1cHNcblx0XHRUeXBlci5hY2Nlc3NDb3VudD0wOyAvL3Jlc2V0IGNvdW50XG5cdFx0dmFyIGRkaXY9JChcIjxkaXYgaWQ9J2dyYW4nPlwiKS5odG1sKFwiXCIpOyAvLyBjcmVhdGUgbmV3IGJsYW5rIGRpdiBhbmQgaWQgXCJncmFuXCJcblx0XHRkZGl2LmFkZENsYXNzKFwiYWNjZXNzR3JhbnRlZFwiKTsgLy8gYWRkIGNsYXNzIHRvIHRoZSBkaXZcblx0XHRkZGl2Lmh0bWwoXCI8aDE+QUNDRVNTIEdSQU5URUQ8L2gxPlwiKTsgLy8gc2V0IGNvbnRlbnQgb2YgZGl2XG5cdFx0JChkb2N1bWVudC5ib2R5KS5wcmVwZW5kKGRkaXYpOyAvLyBwcmVwZW5kIGRpdiB0byBib2R5XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRtYWtlRGVuaWVkOmZ1bmN0aW9uKCl7Ly9jcmVhdGUgQWNjZXNzIERlbmllZCBwb3BVcCAgICAgIEZJWE1FOiBwb3B1cCBpcyBvbiB0b3Agb2YgdGhlIHBhZ2UgYW5kIGRvZXNuJ3Qgc2hvdyBpcyB0aGUgcGFnZSBpcyBzY3JvbGxlZFxuXHRcdFR5cGVyLmhpZGVwb3AoKTsgLy8gaGlkZSBhbGwgcG9wdXBzXG5cdFx0VHlwZXIuZGVuaWVkQ291bnQ9MDsgLy9yZXNldCBjb3VudFxuXHRcdHZhciBkZGl2PSQoXCI8ZGl2IGlkPSdkZW5pJz5cIikuaHRtbChcIlwiKTsgLy8gY3JlYXRlIG5ldyBibGFuayBkaXYgYW5kIGlkIFwiZGVuaVwiXG5cdFx0ZGRpdi5hZGRDbGFzcyhcImFjY2Vzc0RlbmllZFwiKTsvLyBhZGQgY2xhc3MgdG8gdGhlIGRpdlxuXHRcdGRkaXYuaHRtbChcIjxoMT5BQ0NFU1MgREVOSUVEPC9oMT5cIik7Ly8gc2V0IGNvbnRlbnQgb2YgZGl2XG5cdFx0JChkb2N1bWVudC5ib2R5KS5wcmVwZW5kKGRkaXYpOy8vIHByZXBlbmQgZGl2IHRvIGJvZHlcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdFxuXHRoaWRlcG9wOmZ1bmN0aW9uKCl7Ly8gcmVtb3ZlIGFsbCBleGlzdGluZyBwb3B1cHNcblx0XHQkKFwiI2RlbmlcIikucmVtb3ZlKCk7XG5cdFx0JChcIiNncmFuXCIpLnJlbW92ZSgpO1xuXHR9LFxuXHRcblx0YWRkVGV4dDpmdW5jdGlvbihrZXkpey8vTWFpbiBmdW5jdGlvbiB0byBhZGQgdGhlIGNvZGVcblx0XHRpZihrZXkua2V5Q29kZT09MTgpey8vIGtleSAxOCA9IGFsdCBrZXlcblx0XHRcdFR5cGVyLmFjY2Vzc0NvdW50Kys7IC8vaW5jcmVhc2UgY291bnRlciBcblx0XHRcdGlmKFR5cGVyLmFjY2Vzc0NvdW50Pj0zKXsvLyBpZiBpdCdzIHByZXNlZCAzIHRpbWVzXG5cdFx0XHRcdFR5cGVyLm1ha2VBY2Nlc3MoKTsgLy8gbWFrZSBhY2Nlc3MgcG9wdXBcblx0XHRcdH1cblx0XHR9ZWxzZSBpZihrZXkua2V5Q29kZT09MjApey8vIGtleSAyMCA9IGNhcHMgbG9ja1xuXHRcdFx0VHlwZXIuZGVuaWVkQ291bnQrKzsgLy8gaW5jcmVhc2UgY291bnRlclxuXHRcdFx0aWYoVHlwZXIuZGVuaWVkQ291bnQ+PTMpeyAvLyBpZiBpdCdzIHByZXNzZWQgMyB0aW1lc1xuXHRcdFx0XHRUeXBlci5tYWtlRGVuaWVkKCk7IC8vIG1ha2UgZGVuaWVkIHBvcHVwXG5cdFx0XHR9XG5cdFx0fWVsc2UgaWYoa2V5LmtleUNvZGU9PTI3KXsgLy8ga2V5IDI3ID0gZXNjIGtleVxuXHRcdFx0VHlwZXIuaGlkZXBvcCgpOyAvLyBoaWRlIGFsbCBwb3B1cHNcblx0XHR9ZWxzZSBpZihUeXBlci50ZXh0KXsgLy8gb3RoZXJ3YXkgaWYgdGV4dCBpcyBsb2FkZWRcblx0XHRcdHZhciBjb250PVR5cGVyLmNvbnRlbnQoKTsgLy8gZ2V0IHRoZSBjb25zb2xlIGNvbnRlbnRcblx0XHRcdGlmKGNvbnQuc3Vic3RyaW5nKGNvbnQubGVuZ3RoLTEsY29udC5sZW5ndGgpPT1cInxcIikgLy8gaWYgdGhlIGxhc3QgY2hhciBpcyB0aGUgYmxpbmtpbmcgY3Vyc29yXG5cdFx0XHRcdCQoXCIjY29uc29sZVwiKS5odG1sKCQoXCIjY29uc29sZVwiKS5odG1sKCkuc3Vic3RyaW5nKDAsY29udC5sZW5ndGgtMSkpOyAvLyByZW1vdmUgaXQgYmVmb3JlIGFkZGluZyB0aGUgdGV4dFxuXHRcdFx0aWYoa2V5LmtleUNvZGUhPTgpeyAvLyBpZiBrZXkgaXMgbm90IGJhY2tzcGFjZVxuXHRcdFx0XHRUeXBlci5pbmRleCs9VHlwZXIuc3BlZWQ7XHQvLyBhZGQgdG8gdGhlIGluZGV4IHRoZSBzcGVlZFxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKFR5cGVyLmluZGV4PjApIC8vIGVsc2UgaWYgaW5kZXggaXMgbm90IGxlc3MgdGhhbiAwIFxuXHRcdFx0XHRcdFR5cGVyLmluZGV4LT1UeXBlci5zcGVlZDsvL1x0cmVtb3ZlIHNwZWVkIGZvciBkZWxldGluZyB0ZXh0XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGV4dD0kKFwiPGRpdi8+XCIpLnRleHQoVHlwZXIudGV4dC5zdWJzdHJpbmcoMCxUeXBlci5pbmRleCkpLmh0bWwoKTsvLyBwYXJzZSB0aGUgdGV4dCBmb3Igc3RyaXBwaW5nIGh0bWwgZW5pdGllc1xuXHRcdFx0dmFyIHJ0bj0gbmV3IFJlZ0V4cChcIlxcblwiLCBcImdcIik7IC8vIG5ld2xpbmUgcmVnZXhcblx0XHRcdHZhciBydHM9IG5ldyBSZWdFeHAoXCJcXFxcc1wiLCBcImdcIik7IC8vIHdoaXRlc3BhY2UgcmVnZXhcblx0XHRcdHZhciBydHQ9IG5ldyBSZWdFeHAoXCJcXFxcdFwiLCBcImdcIik7IC8vIHRhYiByZWdleFxuXHRcdFx0JChcIiNjb25zb2xlXCIpLmh0bWwodGV4dC5yZXBsYWNlKHJ0bixcIjxici8+XCIpLnJlcGxhY2UocnR0LFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCIpLnJlcGxhY2UocnRzLFwiJm5ic3A7XCIpKTsvLyByZXBsYWNlIG5ld2xpbmUgY2hhcnMgd2l0aCBiciwgdGFicyB3aXRoIDQgc3BhY2UgYW5kIGJsYW5rcyB3aXRoIGFuIGh0bWwgYmxhbmtcblx0XHRcdCQoJyNjb25zb2xlJykuc2Nyb2xsVG9wKCQoJyNjb25zb2xlJylbMF0uc2Nyb2xsSGVpZ2h0KTtcblx0XHRcdC8vJChcIiNjb25zb2xlXCIpLnNjcm9sbEJ5KDAsNTApOyAvLyBzY3JvbGwgdG8gbWFrZSBzdXJlIGJvdHRvbSBpcyBhbHdheXMgdmlzaWJsZVxuXHRcdH1cblx0XHRpZiAoIGtleS5wcmV2ZW50RGVmYXVsdCAmJiBrZXkua2V5Q29kZSAhPSAxMjIgKSB7IC8vIHByZXZlbnQgRjExKGZ1bGxzY3JlZW4pIGZyb20gYmVpbmcgYmxvY2tlZFxuXHRcdFx0a2V5LnByZXZlbnREZWZhdWx0KClcblx0XHR9OyAgXG5cdFx0aWYoa2V5LmtleUNvZGUgIT0gMTIyKXsgLy8gb3RoZXJ3YXkgcHJldmVudCBrZXlzIGRlZmF1bHQgYmVoYXZpb3Jcblx0XHRcdGtleS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXHRcdH1cblx0fSxcblx0XG5cdHVwZExzdENocjpmdW5jdGlvbigpeyAvLyBibGlua2luZyBjdXJzb3Jcblx0XHR2YXIgY29udD10aGlzLmNvbnRlbnQoKTsgLy8gZ2V0IGNvbnNvbGUgXG5cdFx0aWYoY29udC5zdWJzdHJpbmcoY29udC5sZW5ndGgtMSxjb250Lmxlbmd0aCk9PVwifFwiKSAvLyBpZiBsYXN0IGNoYXIgaXMgdGhlIGN1cnNvclxuXHRcdFx0JChcIiNjb25zb2xlXCIpLmh0bWwoJChcIiNjb25zb2xlXCIpLmh0bWwoKS5zdWJzdHJpbmcoMCxjb250Lmxlbmd0aC0xKSk7IC8vIHJlbW92ZSBpdFxuXHRcdGVsc2Vcblx0XHRcdHRoaXMud3JpdGUoXCJ8XCIpOyAvLyBlbHNlIHdyaXRlIGl0XG5cdH1cbn1cblxuXG5UeXBlci5pbml0KCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY2xpZW50L2VudHJ5LmpzXG4gKiovIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHVybCA9IHJlcXVpcmUoJy4vdXJsJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG5cbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cblxudmFyIGNhY2hlID0gZXhwb3J0cy5tYW5hZ2VycyA9IHt9O1xuXG4vKipcbiAqIExvb2tzIHVwIGFuIGV4aXN0aW5nIGBNYW5hZ2VyYCBmb3IgbXVsdGlwbGV4aW5nLlxuICogSWYgdGhlIHVzZXIgc3VtbW9uczpcbiAqXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9hJyk7YFxuICogICBgaW8oJ2h0dHA6Ly9sb2NhbGhvc3QvYicpO2BcbiAqXG4gKiBXZSByZXVzZSB0aGUgZXhpc3RpbmcgaW5zdGFuY2UgYmFzZWQgb24gc2FtZSBzY2hlbWUvcG9ydC9ob3N0LFxuICogYW5kIHdlIGluaXRpYWxpemUgc29ja2V0cyBmb3IgZWFjaCBuYW1lc3BhY2UuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gIGlmICh0eXBlb2YgdXJpID09ICdvYmplY3QnKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICB2YXIgcGFyc2VkID0gdXJsKHVyaSk7XG4gIHZhciBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICB2YXIgaWQgPSBwYXJzZWQuaWQ7XG4gIHZhciBwYXRoID0gcGFyc2VkLnBhdGg7XG4gIHZhciBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdLm5zcHM7XG4gIHZhciBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fCBvcHRzWydmb3JjZSBuZXcgY29ubmVjdGlvbiddIHx8XG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8IHNhbWVOYW1lc3BhY2U7XG5cbiAgdmFyIGlvO1xuXG4gIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgZGVidWcoJ2lnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgIGlvID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICBkZWJ1ZygnbmV3IGlvIGluc3RhbmNlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgICBjYWNoZVtpZF0gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGlvID0gY2FjaGVbaWRdO1xuICB9XG5cbiAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCk7XG59XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7XG5cbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuXG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLk1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbmV4cG9ydHMuU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDp1cmwnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybDtcblxuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdXJsKHVyaSwgbG9jKXtcbiAgdmFyIG9iaiA9IHVyaTtcblxuICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICB2YXIgbG9jID0gbG9jIHx8IGdsb2JhbC5sb2NhdGlvbjtcbiAgaWYgKG51bGwgPT0gdXJpKSB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgbG9jLmhvc3Q7XG5cbiAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgdXJpKSB7XG4gICAgaWYgKCcvJyA9PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICBpZiAoJy8nID09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgIGRlYnVnKCdwcm90b2NvbC1sZXNzIHVybCAlcycsIHVyaSk7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGxvYykge1xuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgdXJpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJpID0gJ2h0dHBzOi8vJyArIHVyaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwYXJzZVxuICAgIGRlYnVnKCdwYXJzZSAlcycsIHVyaSk7XG4gICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICBpZiAoIW9iai5wb3J0KSB7XG4gICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICBvYmoucG9ydCA9ICc4MCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnNDQzJztcbiAgICB9XG4gIH1cblxuICBvYmoucGF0aCA9IG9iai5wYXRoIHx8ICcvJztcblxuICB2YXIgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHZhciBob3N0ID0gaXB2NiA/ICdbJyArIG9iai5ob3N0ICsgJ10nIDogb2JqLmhvc3Q7XG5cbiAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBvYmoucG9ydDtcbiAgLy8gZGVmaW5lIGhyZWZcbiAgb2JqLmhyZWYgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAobG9jICYmIGxvYy5wb3J0ID09IG9iai5wb3J0ID8gJycgOiAoJzonICsgb2JqLnBvcnQpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9saWIvdXJsLmpzXG4gKiogbW9kdWxlIGlkID0gMTkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFBhcnNlcyBhbiBVUklcbiAqXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcmUgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShodHRwfGh0dHBzfHdzfHdzcyk6XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcblxudmFyIHBhcnRzID0gW1xuICAgICdzb3VyY2UnLCAncHJvdG9jb2wnLCAnYXV0aG9yaXR5JywgJ3VzZXJJbmZvJywgJ3VzZXInLCAncGFzc3dvcmQnLCAnaG9zdCcsICdwb3J0JywgJ3JlbGF0aXZlJywgJ3BhdGgnLCAnZGlyZWN0b3J5JywgJ2ZpbGUnLCAncXVlcnknLCAnYW5jaG9yJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZXVyaShzdHIpIHtcbiAgICB2YXIgc3JjID0gc3RyLFxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcbiAgICAgICAgZSA9IHN0ci5pbmRleE9mKCddJyk7XG5cbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgYikgKyBzdHIuc3Vic3RyaW5nKGIsIGUpLnJlcGxhY2UoLzovZywgJzsnKSArIHN0ci5zdWJzdHJpbmcoZSwgc3RyLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgdmFyIG0gPSByZS5leGVjKHN0ciB8fCAnJyksXG4gICAgICAgIHVyaSA9IHt9LFxuICAgICAgICBpID0gMTQ7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xuICAgIH1cblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgdXJpLnNvdXJjZSA9IHNyYztcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xuICAgICAgICB1cmkuaXB2NnVyaSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVyaTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vcGFyc2V1cmkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnbGlnaHRzZWFncmVlbicsXG4gICdmb3Jlc3RncmVlbicsXG4gICdnb2xkZW5yb2QnLFxuICAnZG9kZ2VyYmx1ZScsXG4gICdkYXJrb3JjaGlkJyxcbiAgJ2NyaW1zb24nXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgcmV0dXJuICgnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAod2luZG93LmNvbnNvbGUgJiYgKGNvbnNvbGUuZmlyZWJ1ZyB8fCAoY29uc29sZS5leGNlcHRpb24gJiYgY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncygpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybiBhcmdzO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncyA9IFthcmdzWzBdLCBjLCAnY29sb3I6IGluaGVyaXQnXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncywgMSkpO1xuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xuICByZXR1cm4gYXJncztcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9kZWJ1Zy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyY2FzZWQgbGV0dGVyLCBpLmUuIFwiblwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzbHkgYXNzaWduZWQgY29sb3IuXG4gKi9cblxudmFyIHByZXZDb2xvciA9IDA7XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IoKSB7XG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1twcmV2Q29sb3IrKyAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlYnVnKG5hbWVzcGFjZSkge1xuXG4gIC8vIGRlZmluZSB0aGUgYGRpc2FibGVkYCB2ZXJzaW9uXG4gIGZ1bmN0aW9uIGRpc2FibGVkKCkge1xuICB9XG4gIGRpc2FibGVkLmVuYWJsZWQgPSBmYWxzZTtcblxuICAvLyBkZWZpbmUgdGhlIGBlbmFibGVkYCB2ZXJzaW9uXG4gIGZ1bmN0aW9uIGVuYWJsZWQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IGVuYWJsZWQ7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIGFkZCB0aGUgYGNvbG9yYCBpZiBub3Qgc2V0XG4gICAgaWYgKG51bGwgPT0gc2VsZi51c2VDb2xvcnMpIHNlbGYudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgICBpZiAobnVsbCA9PSBzZWxmLmNvbG9yICYmIHNlbGYudXNlQ29sb3JzKSBzZWxmLmNvbG9yID0gc2VsZWN0Q29sb3IoKTtcblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVvXG4gICAgICBhcmdzID0gWyclbyddLmNvbmNhdChhcmdzKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16JV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmZvcm1hdEFyZ3MpIHtcbiAgICAgIGFyZ3MgPSBleHBvcnRzLmZvcm1hdEFyZ3MuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuICAgIHZhciBsb2dGbiA9IGVuYWJsZWQubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cbiAgZW5hYmxlZC5lbmFibGVkID0gdHJ1ZTtcblxuICB2YXIgZm4gPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKSA/IGVuYWJsZWQgOiBkaXNhYmxlZDtcblxuICBmbi5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgcmV0dXJuIGZuO1xufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIHZhciBzcGxpdCA9IChuYW1lc3BhY2VzIHx8ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9kZWJ1Zy9kZWJ1Zy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucyl7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIHJldHVybiBvcHRpb25zLmxvbmdcbiAgICA/IGxvbmcodmFsKVxuICAgIDogc2hvcnQodmFsKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSAnJyArIHN0cjtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDAwMCkgcmV0dXJuO1xuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKHN0cik7XG4gIGlmICghbWF0Y2gpIHJldHVybjtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIGlmIChtcyA+PSBoKSByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICBpZiAobXMgPj0gbSkgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgaWYgKG1zID49IHMpIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKVxuICAgIHx8IHBsdXJhbChtcywgaCwgJ2hvdXInKVxuICAgIHx8IHBsdXJhbChtcywgbSwgJ21pbnV0ZScpXG4gICAgfHwgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJylcbiAgICB8fCBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSByZXR1cm47XG4gIGlmIChtcyA8IG4gKiAxLjUpIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2RlYnVnL34vbXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBqc29uID0gcmVxdWlyZSgnanNvbjMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGJpbmFyeSA9IHJlcXVpcmUoJy4vYmluYXJ5Jyk7XG52YXIgaXNCdWYgPSByZXF1aXJlKCcuL2lzLWJ1ZmZlcicpO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gNDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnR5cGVzID0gW1xuICAnQ09OTkVDVCcsXG4gICdESVNDT05ORUNUJyxcbiAgJ0VWRU5UJyxcbiAgJ0FDSycsXG4gICdFUlJPUicsXG4gICdCSU5BUllfRVZFTlQnLFxuICAnQklOQVJZX0FDSydcbl07XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGNvbm5lY3RgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5DT05ORUNUID0gMDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZGlzY29ubmVjdGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkRJU0NPTk5FQ1QgPSAxO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBldmVudGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVWRU5UID0gMjtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgYWNrYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQUNLID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZXJyb3JgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FUlJPUiA9IDQ7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgJ2JpbmFyeSBldmVudCdcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQklOQVJZX0VWRU5UID0gNTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgYmluYXJ5IGFja2AuIEZvciBhY2tzIHdpdGggYmluYXJ5IGFyZ3VtZW50cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQklOQVJZX0FDSyA9IDY7XG5cbi8qKlxuICogRW5jb2RlciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG5cbi8qKlxuICogRGVjb2RlciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5cbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW5jb2RlcigpIHt9XG5cbi8qKlxuICogRW5jb2RlIGEgcGFja2V0IGFzIGEgc2luZ2xlIHN0cmluZyBpZiBub24tYmluYXJ5LCBvciBhcyBhXG4gKiBidWZmZXIgc2VxdWVuY2UsIGRlcGVuZGluZyBvbiBwYWNrZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gcGFja2V0IG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBoYW5kbGUgZW5jb2RpbmdzIChsaWtlbHkgZW5naW5lLndyaXRlKVxuICogQHJldHVybiBDYWxscyBjYWxsYmFjayB3aXRoIEFycmF5IG9mIGVuY29kaW5nc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrKXtcbiAgZGVidWcoJ2VuY29kaW5nIHBhY2tldCAlaicsIG9iaik7XG5cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PSBvYmoudHlwZSkge1xuICAgIGVuY29kZUFzQmluYXJ5KG9iaiwgY2FsbGJhY2spO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBlbmNvZGluZyA9IGVuY29kZUFzU3RyaW5nKG9iaik7XG4gICAgY2FsbGJhY2soW2VuY29kaW5nXSk7XG4gIH1cbn07XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7U3RyaW5nfSBlbmNvZGVkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBc1N0cmluZyhvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgbnNwID0gZmFsc2U7XG5cbiAgLy8gZmlyc3QgaXMgdHlwZVxuICBzdHIgKz0gb2JqLnR5cGU7XG5cbiAgLy8gYXR0YWNobWVudHMgaWYgd2UgaGF2ZSB0aGVtXG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT0gb2JqLnR5cGUpIHtcbiAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzO1xuICAgIHN0ciArPSAnLSc7XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgbmFtZXNwYWNlIG90aGVyIHRoYW4gYC9gXG4gIC8vIHdlIGFwcGVuZCBpdCBmb2xsb3dlZCBieSBhIGNvbW1hIGAsYFxuICBpZiAob2JqLm5zcCAmJiAnLycgIT0gb2JqLm5zcCkge1xuICAgIG5zcCA9IHRydWU7XG4gICAgc3RyICs9IG9iai5uc3A7XG4gIH1cblxuICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgaWYgKG5zcCkge1xuICAgICAgc3RyICs9ICcsJztcbiAgICAgIG5zcCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdHIgKz0gb2JqLmlkO1xuICB9XG5cbiAgLy8ganNvbiBkYXRhXG4gIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgaWYgKG5zcCkgc3RyICs9ICcsJztcbiAgICBzdHIgKz0ganNvbi5zdHJpbmdpZnkob2JqLmRhdGEpO1xuICB9XG5cbiAgZGVidWcoJ2VuY29kZWQgJWogYXMgJXMnLCBvYmosIHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGVuY29kZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFzQmluYXJ5KG9iaiwgY2FsbGJhY2spIHtcblxuICBmdW5jdGlvbiB3cml0ZUVuY29kaW5nKGJsb2JsZXNzRGF0YSkge1xuICAgIHZhciBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeS5kZWNvbnN0cnVjdFBhY2tldChibG9ibGVzc0RhdGEpO1xuICAgIHZhciBwYWNrID0gZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICB2YXIgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG5cbiAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgY2FsbGJhY2soYnVmZmVycyk7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICB9XG5cbiAgYmluYXJ5LnJlbW92ZUJsb2JzKG9iaiwgd3JpdGVFbmNvZGluZyk7XG59XG5cbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBEZWNvZGVyKCkge1xuICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAgd2l0aCBEZWNvZGVyLlxuICovXG5cbkVtaXR0ZXIoRGVjb2Rlci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERlY29kZXMgYW4gZWNvZGVkIHBhY2tldCBzdHJpbmcgaW50byBwYWNrZXQgSlNPTi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgcGFja2V0O1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIG9iaikge1xuICAgIHBhY2tldCA9IGRlY29kZVN0cmluZyhvYmopO1xuICAgIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PSBwYWNrZXQudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT0gcGFja2V0LnR5cGUpIHsgLy8gYmluYXJ5IHBhY2tldCdzIGpzb25cbiAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG5cbiAgICAgIC8vIG5vIGF0dGFjaG1lbnRzLCBsYWJlbGVkIGJpbmFyeSBidXQgbm8gYmluYXJ5IGRhdGEgdG8gZm9sbG93XG4gICAgICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yLnJlY29uUGFjay5hdHRhY2htZW50cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG5vbi1iaW5hcnkgZnVsbCBwYWNrZXRcbiAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGlzQnVmKG9iaikgfHwgb2JqLmJhc2U2NCkgeyAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICBpZiAoIXRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnb3QgYmluYXJ5IGRhdGEgd2hlbiBub3QgcmVjb25zdHJ1Y3RpbmcgYSBwYWNrZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICBpZiAocGFja2V0KSB7IC8vIHJlY2VpdmVkIGZpbmFsIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZTogJyArIG9iaik7XG4gIH1cbn07XG5cbi8qKlxuICogRGVjb2RlIGEgcGFja2V0IFN0cmluZyAoSlNPTiBkYXRhKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gIHZhciBwID0ge307XG4gIHZhciBpID0gMDtcblxuICAvLyBsb29rIHVwIHR5cGVcbiAgcC50eXBlID0gTnVtYmVyKHN0ci5jaGFyQXQoMCkpO1xuICBpZiAobnVsbCA9PSBleHBvcnRzLnR5cGVzW3AudHlwZV0pIHJldHVybiBlcnJvcigpO1xuXG4gIC8vIGxvb2sgdXAgYXR0YWNobWVudHMgaWYgdHlwZSBiaW5hcnlcbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09IHAudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT0gcC50eXBlKSB7XG4gICAgdmFyIGJ1ZiA9ICcnO1xuICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT0gJy0nKSB7XG4gICAgICBidWYgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT0gJy0nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXR0YWNobWVudHMnKTtcbiAgICB9XG4gICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgaWYgKCcvJyA9PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgIHAubnNwID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKCcsJyA9PSBjKSBicmVhaztcbiAgICAgIHAubnNwICs9IGM7XG4gICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcC5uc3AgPSAnLyc7XG4gIH1cblxuICAvLyBsb29rIHVwIGlkXG4gIHZhciBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gIGlmICgnJyAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgIHAuaWQgPSAnJztcbiAgICB3aGlsZSAoKytpKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgIC0taTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwLmlkICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgcC5pZCA9IE51bWJlcihwLmlkKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICB0cnkge1xuICAgICAgcC5kYXRhID0ganNvbi5wYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoJ2RlY29kZWQgJXMgYXMgJWonLCBzdHIsIHApO1xuICByZXR1cm4gcDtcbn1cblxuLyoqXG4gKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVjb2Rlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBIG1hbmFnZXIgb2YgYSBiaW5hcnkgZXZlbnQncyAnYnVmZmVyIHNlcXVlbmNlJy4gU2hvdWxkXG4gKiBiZSBjb25zdHJ1Y3RlZCB3aGVuZXZlciBhIHBhY2tldCBvZiB0eXBlIEJJTkFSWV9FVkVOVCBpc1xuICogZGVjb2RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCaW5hcnlSZWNvbnN0cnVjdG9yfSBpbml0aWFsaXplZCByZWNvbnN0cnVjdG9yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCkge1xuICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgdGhpcy5idWZmZXJzID0gW107XG59XG5cbi8qKlxuICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICogYWZ0ZXIgYSBCSU5BUllfRVZFTlQgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gKiBAcmV0dXJuIHtudWxsIHwgT2JqZWN0fSByZXR1cm5zIG51bGwgaWYgbW9yZSBiaW5hcnkgZGF0YSBpcyBleHBlY3RlZCBvclxuICogICBhIHJlY29uc3RydWN0ZWQgcGFja2V0IG9iamVjdCBpZiBhbGwgYnVmZmVycyBoYXZlIGJlZW4gcmVjZWl2ZWQuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5CaW5hcnlSZWNvbnN0cnVjdG9yLnByb3RvdHlwZS50YWtlQmluYXJ5RGF0YSA9IGZ1bmN0aW9uKGJpbkRhdGEpIHtcbiAgdGhpcy5idWZmZXJzLnB1c2goYmluRGF0YSk7XG4gIGlmICh0aGlzLmJ1ZmZlcnMubGVuZ3RoID09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7IC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgIHZhciBwYWNrZXQgPSBiaW5hcnkucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgdGhpcy5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgcmV0dXJuIHBhY2tldDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkJpbmFyeVJlY29uc3RydWN0b3IucHJvdG90eXBlLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbn07XG5cbmZ1bmN0aW9uIGVycm9yKGRhdGEpe1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGV4cG9ydHMuRVJST1IsXG4gICAgZGF0YTogJ3BhcnNlciBlcnJvcidcbiAgfTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9zb2NrZXQuaW8tcGFyc2VyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiEgSlNPTiB2My4zLjIgfCBodHRwOi8vYmVzdGllanMuZ2l0aHViLmlvL2pzb24zIHwgQ29weXJpZ2h0IDIwMTItMjAxNCwgS2l0IENhbWJyaWRnZSB8IGh0dHA6Ly9raXQubWl0LWxpY2Vuc2Uub3JnICovXG47KGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IHRoZSBgZGVmaW5lYCBmdW5jdGlvbiBleHBvc2VkIGJ5IGFzeW5jaHJvbm91cyBtb2R1bGUgbG9hZGVycy4gVGhlXG4gIC8vIHN0cmljdCBgZGVmaW5lYCBjaGVjayBpcyBuZWNlc3NhcnkgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBgci5qc2AuXG4gIHZhciBpc0xvYWRlciA9IHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kO1xuXG4gIC8vIEEgc2V0IG9mIHR5cGVzIHVzZWQgdG8gZGlzdGluZ3Vpc2ggb2JqZWN0cyBmcm9tIHByaW1pdGl2ZXMuXG4gIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICBcImZ1bmN0aW9uXCI6IHRydWUsXG4gICAgXCJvYmplY3RcIjogdHJ1ZVxuICB9O1xuXG4gIC8vIERldGVjdCB0aGUgYGV4cG9ydHNgIG9iamVjdCBleHBvc2VkIGJ5IENvbW1vbkpTIGltcGxlbWVudGF0aW9ucy5cbiAgdmFyIGZyZWVFeHBvcnRzID0gb2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuICAvLyBVc2UgdGhlIGBnbG9iYWxgIG9iamVjdCBleHBvc2VkIGJ5IE5vZGUgKGluY2x1ZGluZyBCcm93c2VyaWZ5IHZpYVxuICAvLyBgaW5zZXJ0LW1vZHVsZS1nbG9iYWxzYCksIE5hcndoYWwsIGFuZCBSaW5nbyBhcyB0aGUgZGVmYXVsdCBjb250ZXh0LFxuICAvLyBhbmQgdGhlIGB3aW5kb3dgIG9iamVjdCBpbiBicm93c2Vycy4gUmhpbm8gZXhwb3J0cyBhIGBnbG9iYWxgIGZ1bmN0aW9uXG4gIC8vIGluc3RlYWQuXG4gIHZhciByb290ID0gb2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93IHx8IHRoaXMsXG4gICAgICBmcmVlR2xvYmFsID0gZnJlZUV4cG9ydHMgJiYgb2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgdHlwZW9mIGdsb2JhbCA9PSBcIm9iamVjdFwiICYmIGdsb2JhbDtcblxuICBpZiAoZnJlZUdsb2JhbCAmJiAoZnJlZUdsb2JhbFtcImdsb2JhbFwiXSA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsW1wid2luZG93XCJdID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWxbXCJzZWxmXCJdID09PSBmcmVlR2xvYmFsKSkge1xuICAgIHJvb3QgPSBmcmVlR2xvYmFsO1xuICB9XG5cbiAgLy8gUHVibGljOiBJbml0aWFsaXplcyBKU09OIDMgdXNpbmcgdGhlIGdpdmVuIGBjb250ZXh0YCBvYmplY3QsIGF0dGFjaGluZyB0aGVcbiAgLy8gYHN0cmluZ2lmeWAgYW5kIGBwYXJzZWAgZnVuY3Rpb25zIHRvIHRoZSBzcGVjaWZpZWQgYGV4cG9ydHNgIG9iamVjdC5cbiAgZnVuY3Rpb24gcnVuSW5Db250ZXh0KGNvbnRleHQsIGV4cG9ydHMpIHtcbiAgICBjb250ZXh0IHx8IChjb250ZXh0ID0gcm9vdFtcIk9iamVjdFwiXSgpKTtcbiAgICBleHBvcnRzIHx8IChleHBvcnRzID0gcm9vdFtcIk9iamVjdFwiXSgpKTtcblxuICAgIC8vIE5hdGl2ZSBjb25zdHJ1Y3RvciBhbGlhc2VzLlxuICAgIHZhciBOdW1iZXIgPSBjb250ZXh0W1wiTnVtYmVyXCJdIHx8IHJvb3RbXCJOdW1iZXJcIl0sXG4gICAgICAgIFN0cmluZyA9IGNvbnRleHRbXCJTdHJpbmdcIl0gfHwgcm9vdFtcIlN0cmluZ1wiXSxcbiAgICAgICAgT2JqZWN0ID0gY29udGV4dFtcIk9iamVjdFwiXSB8fCByb290W1wiT2JqZWN0XCJdLFxuICAgICAgICBEYXRlID0gY29udGV4dFtcIkRhdGVcIl0gfHwgcm9vdFtcIkRhdGVcIl0sXG4gICAgICAgIFN5bnRheEVycm9yID0gY29udGV4dFtcIlN5bnRheEVycm9yXCJdIHx8IHJvb3RbXCJTeW50YXhFcnJvclwiXSxcbiAgICAgICAgVHlwZUVycm9yID0gY29udGV4dFtcIlR5cGVFcnJvclwiXSB8fCByb290W1wiVHlwZUVycm9yXCJdLFxuICAgICAgICBNYXRoID0gY29udGV4dFtcIk1hdGhcIl0gfHwgcm9vdFtcIk1hdGhcIl0sXG4gICAgICAgIG5hdGl2ZUpTT04gPSBjb250ZXh0W1wiSlNPTlwiXSB8fCByb290W1wiSlNPTlwiXTtcblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBuYXRpdmUgYHN0cmluZ2lmeWAgYW5kIGBwYXJzZWAgaW1wbGVtZW50YXRpb25zLlxuICAgIGlmICh0eXBlb2YgbmF0aXZlSlNPTiA9PSBcIm9iamVjdFwiICYmIG5hdGl2ZUpTT04pIHtcbiAgICAgIGV4cG9ydHMuc3RyaW5naWZ5ID0gbmF0aXZlSlNPTi5zdHJpbmdpZnk7XG4gICAgICBleHBvcnRzLnBhcnNlID0gbmF0aXZlSlNPTi5wYXJzZTtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBhbGlhc2VzLlxuICAgIHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgIGdldENsYXNzID0gb2JqZWN0UHJvdG8udG9TdHJpbmcsXG4gICAgICAgIGlzUHJvcGVydHksIGZvckVhY2gsIHVuZGVmO1xuXG4gICAgLy8gVGVzdCB0aGUgYERhdGUjZ2V0VVRDKmAgbWV0aG9kcy4gQmFzZWQgb24gd29yayBieSBAWWFmZmxlLlxuICAgIHZhciBpc0V4dGVuZGVkID0gbmV3IERhdGUoLTM1MDk4MjczMzQ1NzMyOTIpO1xuICAgIHRyeSB7XG4gICAgICAvLyBUaGUgYGdldFVUQ0Z1bGxZZWFyYCwgYE1vbnRoYCwgYW5kIGBEYXRlYCBtZXRob2RzIHJldHVybiBub25zZW5zaWNhbFxuICAgICAgLy8gcmVzdWx0cyBmb3IgY2VydGFpbiBkYXRlcyBpbiBPcGVyYSA+PSAxMC41My5cbiAgICAgIGlzRXh0ZW5kZWQgPSBpc0V4dGVuZGVkLmdldFVUQ0Z1bGxZZWFyKCkgPT0gLTEwOTI1MiAmJiBpc0V4dGVuZGVkLmdldFVUQ01vbnRoKCkgPT09IDAgJiYgaXNFeHRlbmRlZC5nZXRVVENEYXRlKCkgPT09IDEgJiZcbiAgICAgICAgLy8gU2FmYXJpIDwgMi4wLjIgc3RvcmVzIHRoZSBpbnRlcm5hbCBtaWxsaXNlY29uZCB0aW1lIHZhbHVlIGNvcnJlY3RseSxcbiAgICAgICAgLy8gYnV0IGNsaXBzIHRoZSB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGRhdGUgbWV0aG9kcyB0byB0aGUgcmFuZ2Ugb2ZcbiAgICAgICAgLy8gc2lnbmVkIDMyLWJpdCBpbnRlZ2VycyAoWy0yICoqIDMxLCAyICoqIDMxIC0gMV0pLlxuICAgICAgICBpc0V4dGVuZGVkLmdldFVUQ0hvdXJzKCkgPT0gMTAgJiYgaXNFeHRlbmRlZC5nZXRVVENNaW51dGVzKCkgPT0gMzcgJiYgaXNFeHRlbmRlZC5nZXRVVENTZWNvbmRzKCkgPT0gNiAmJiBpc0V4dGVuZGVkLmdldFVUQ01pbGxpc2Vjb25kcygpID09IDcwODtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG5cbiAgICAvLyBJbnRlcm5hbDogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBuYXRpdmUgYEpTT04uc3RyaW5naWZ5YCBhbmQgYHBhcnNlYFxuICAgIC8vIGltcGxlbWVudGF0aW9ucyBhcmUgc3BlYy1jb21wbGlhbnQuIEJhc2VkIG9uIHdvcmsgYnkgS2VuIFNueWRlci5cbiAgICBmdW5jdGlvbiBoYXMobmFtZSkge1xuICAgICAgaWYgKGhhc1tuYW1lXSAhPT0gdW5kZWYpIHtcbiAgICAgICAgLy8gUmV0dXJuIGNhY2hlZCBmZWF0dXJlIHRlc3QgcmVzdWx0LlxuICAgICAgICByZXR1cm4gaGFzW25hbWVdO1xuICAgICAgfVxuICAgICAgdmFyIGlzU3VwcG9ydGVkO1xuICAgICAgaWYgKG5hbWUgPT0gXCJidWctc3RyaW5nLWNoYXItaW5kZXhcIikge1xuICAgICAgICAvLyBJRSA8PSA3IGRvZXNuJ3Qgc3VwcG9ydCBhY2Nlc3Npbmcgc3RyaW5nIGNoYXJhY3RlcnMgdXNpbmcgc3F1YXJlXG4gICAgICAgIC8vIGJyYWNrZXQgbm90YXRpb24uIElFIDggb25seSBzdXBwb3J0cyB0aGlzIGZvciBwcmltaXRpdmVzLlxuICAgICAgICBpc1N1cHBvcnRlZCA9IFwiYVwiWzBdICE9IFwiYVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwianNvblwiKSB7XG4gICAgICAgIC8vIEluZGljYXRlcyB3aGV0aGVyIGJvdGggYEpTT04uc3RyaW5naWZ5YCBhbmQgYEpTT04ucGFyc2VgIGFyZVxuICAgICAgICAvLyBzdXBwb3J0ZWQuXG4gICAgICAgIGlzU3VwcG9ydGVkID0gaGFzKFwianNvbi1zdHJpbmdpZnlcIikgJiYgaGFzKFwianNvbi1wYXJzZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2YWx1ZSwgc2VyaWFsaXplZCA9ICd7XCJhXCI6WzEsdHJ1ZSxmYWxzZSxudWxsLFwiXFxcXHUwMDAwXFxcXGJcXFxcblxcXFxmXFxcXHJcXFxcdFwiXX0nO1xuICAgICAgICAvLyBUZXN0IGBKU09OLnN0cmluZ2lmeWAuXG4gICAgICAgIGlmIChuYW1lID09IFwianNvbi1zdHJpbmdpZnlcIikge1xuICAgICAgICAgIHZhciBzdHJpbmdpZnkgPSBleHBvcnRzLnN0cmluZ2lmeSwgc3RyaW5naWZ5U3VwcG9ydGVkID0gdHlwZW9mIHN0cmluZ2lmeSA9PSBcImZ1bmN0aW9uXCIgJiYgaXNFeHRlbmRlZDtcbiAgICAgICAgICBpZiAoc3RyaW5naWZ5U3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAvLyBBIHRlc3QgZnVuY3Rpb24gb2JqZWN0IHdpdGggYSBjdXN0b20gYHRvSlNPTmAgbWV0aG9kLlxuICAgICAgICAgICAgKHZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0pLnRvSlNPTiA9IHZhbHVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RyaW5naWZ5U3VwcG9ydGVkID1cbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDMuMWIxIGFuZCBiMiBzZXJpYWxpemUgc3RyaW5nLCBudW1iZXIsIGFuZCBib29sZWFuXG4gICAgICAgICAgICAgICAgLy8gcHJpbWl0aXZlcyBhcyBvYmplY3QgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KDApID09PSBcIjBcIiAmJlxuICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCBiMiwgYW5kIEpTT04gMiBzZXJpYWxpemUgd3JhcHBlZCBwcmltaXRpdmVzIGFzIG9iamVjdFxuICAgICAgICAgICAgICAgIC8vIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgTnVtYmVyKCkpID09PSBcIjBcIiAmJlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgU3RyaW5nKCkpID09ICdcIlwiJyAmJlxuICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCAyIHRocm93IGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAsIGB1bmRlZmluZWRgLCBvclxuICAgICAgICAgICAgICAgIC8vIGRvZXMgbm90IGRlZmluZSBhIGNhbm9uaWNhbCBKU09OIHJlcHJlc2VudGF0aW9uICh0aGlzIGFwcGxpZXMgdG9cbiAgICAgICAgICAgICAgICAvLyBvYmplY3RzIHdpdGggYHRvSlNPTmAgcHJvcGVydGllcyBhcyB3ZWxsLCAqdW5sZXNzKiB0aGV5IGFyZSBuZXN0ZWRcbiAgICAgICAgICAgICAgICAvLyB3aXRoaW4gYW4gb2JqZWN0IG9yIGFycmF5KS5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkoZ2V0Q2xhc3MpID09PSB1bmRlZiAmJlxuICAgICAgICAgICAgICAgIC8vIElFIDggc2VyaWFsaXplcyBgdW5kZWZpbmVkYCBhcyBgXCJ1bmRlZmluZWRcImAuIFNhZmFyaSA8PSA1LjEuNyBhbmRcbiAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMyBwYXNzIHRoaXMgdGVzdC5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkodW5kZWYpID09PSB1bmRlZiAmJlxuICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSA1LjEuNyBhbmQgRkYgMy4xYjMgdGhyb3cgYEVycm9yYHMgYW5kIGBUeXBlRXJyb3JgcyxcbiAgICAgICAgICAgICAgICAvLyByZXNwZWN0aXZlbHksIGlmIHRoZSB2YWx1ZSBpcyBvbWl0dGVkIGVudGlyZWx5LlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeSgpID09PSB1bmRlZiAmJlxuICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCAyIHRocm93IGFuIGVycm9yIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgYSBudW1iZXIsXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nLCBhcnJheSwgb2JqZWN0LCBCb29sZWFuLCBvciBgbnVsbGAgbGl0ZXJhbC4gVGhpcyBhcHBsaWVzIHRvXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0cyB3aXRoIGN1c3RvbSBgdG9KU09OYCBtZXRob2RzIGFzIHdlbGwsIHVubGVzcyB0aGV5IGFyZSBuZXN0ZWRcbiAgICAgICAgICAgICAgICAvLyBpbnNpZGUgb2JqZWN0IG9yIGFycmF5IGxpdGVyYWxzLiBZVUkgMy4wLjBiMSBpZ25vcmVzIGN1c3RvbSBgdG9KU09OYFxuICAgICAgICAgICAgICAgIC8vIG1ldGhvZHMgZW50aXJlbHkuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KHZhbHVlKSA9PT0gXCIxXCIgJiZcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkoW3ZhbHVlXSkgPT0gXCJbMV1cIiAmJlxuICAgICAgICAgICAgICAgIC8vIFByb3RvdHlwZSA8PSAxLjYuMSBzZXJpYWxpemVzIGBbdW5kZWZpbmVkXWAgYXMgYFwiW11cImAgaW5zdGVhZCBvZlxuICAgICAgICAgICAgICAgIC8vIGBcIltudWxsXVwiYC5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkoW3VuZGVmXSkgPT0gXCJbbnVsbF1cIiAmJlxuICAgICAgICAgICAgICAgIC8vIFlVSSAzLjAuMGIxIGZhaWxzIHRvIHNlcmlhbGl6ZSBgbnVsbGAgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KG51bGwpID09IFwibnVsbFwiICYmXG4gICAgICAgICAgICAgICAgLy8gRkYgMy4xYjEsIDIgaGFsdHMgc2VyaWFsaXphdGlvbiBpZiBhbiBhcnJheSBjb250YWlucyBhIGZ1bmN0aW9uOlxuICAgICAgICAgICAgICAgIC8vIGBbMSwgdHJ1ZSwgZ2V0Q2xhc3MsIDFdYCBzZXJpYWxpemVzIGFzIFwiWzEsdHJ1ZSxdLFwiLiBGRiAzLjFiM1xuICAgICAgICAgICAgICAgIC8vIGVsaWRlcyBub24tSlNPTiB2YWx1ZXMgZnJvbSBvYmplY3RzIGFuZCBhcnJheXMsIHVubGVzcyB0aGV5XG4gICAgICAgICAgICAgICAgLy8gZGVmaW5lIGN1c3RvbSBgdG9KU09OYCBtZXRob2RzLlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeShbdW5kZWYsIGdldENsYXNzLCBudWxsXSkgPT0gXCJbbnVsbCxudWxsLG51bGxdXCIgJiZcbiAgICAgICAgICAgICAgICAvLyBTaW1wbGUgc2VyaWFsaXphdGlvbiB0ZXN0LiBGRiAzLjFiMSB1c2VzIFVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIHdoZXJlIGNoYXJhY3RlciBlc2NhcGUgY29kZXMgYXJlIGV4cGVjdGVkIChlLmcuLCBgXFxiYCA9PiBgXFx1MDAwOGApLlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeSh7IFwiYVwiOiBbdmFsdWUsIHRydWUsIGZhbHNlLCBudWxsLCBcIlxceDAwXFxiXFxuXFxmXFxyXFx0XCJdIH0pID09IHNlcmlhbGl6ZWQgJiZcbiAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSBhbmQgYjIgaWdub3JlIHRoZSBgZmlsdGVyYCBhbmQgYHdpZHRoYCBhcmd1bWVudHMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KG51bGwsIHZhbHVlKSA9PT0gXCIxXCIgJiZcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkoWzEsIDJdLCBudWxsLCAxKSA9PSBcIltcXG4gMSxcXG4gMlxcbl1cIiAmJlxuICAgICAgICAgICAgICAgIC8vIEpTT04gMiwgUHJvdG90eXBlIDw9IDEuNywgYW5kIG9sZGVyIFdlYktpdCBidWlsZHMgaW5jb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAvLyBzZXJpYWxpemUgZXh0ZW5kZWQgeWVhcnMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKC04LjY0ZTE1KSkgPT0gJ1wiLTI3MTgyMS0wNC0yMFQwMDowMDowMC4wMDBaXCInICYmXG4gICAgICAgICAgICAgICAgLy8gVGhlIG1pbGxpc2Vjb25kcyBhcmUgb3B0aW9uYWwgaW4gRVMgNSwgYnV0IHJlcXVpcmVkIGluIDUuMS5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkobmV3IERhdGUoOC42NGUxNSkpID09ICdcIisyNzU3NjAtMDktMTNUMDA6MDA6MDAuMDAwWlwiJyAmJlxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPD0gMTEuMCBpbmNvcnJlY3RseSBzZXJpYWxpemVzIHllYXJzIHByaW9yIHRvIDAgYXMgbmVnYXRpdmVcbiAgICAgICAgICAgICAgICAvLyBmb3VyLWRpZ2l0IHllYXJzIGluc3RlYWQgb2Ygc2l4LWRpZ2l0IHllYXJzLiBDcmVkaXRzOiBAWWFmZmxlLlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgRGF0ZSgtNjIxOTg3NTUyZTUpKSA9PSAnXCItMDAwMDAxLTAxLTAxVDAwOjAwOjAwLjAwMFpcIicgJiZcbiAgICAgICAgICAgICAgICAvLyBTYWZhcmkgPD0gNS4xLjUgYW5kIE9wZXJhID49IDEwLjUzIGluY29ycmVjdGx5IHNlcmlhbGl6ZSBtaWxsaXNlY29uZFxuICAgICAgICAgICAgICAgIC8vIHZhbHVlcyBsZXNzIHRoYW4gMTAwMC4gQ3JlZGl0czogQFlhZmZsZS5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkobmV3IERhdGUoLTEpKSA9PSAnXCIxOTY5LTEyLTMxVDIzOjU5OjU5Ljk5OVpcIic7XG4gICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgc3RyaW5naWZ5U3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlzU3VwcG9ydGVkID0gc3RyaW5naWZ5U3VwcG9ydGVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRlc3QgYEpTT04ucGFyc2VgLlxuICAgICAgICBpZiAobmFtZSA9PSBcImpzb24tcGFyc2VcIikge1xuICAgICAgICAgIHZhciBwYXJzZSA9IGV4cG9ydHMucGFyc2U7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCBiMiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhIGJhcmUgbGl0ZXJhbCBpcyBwcm92aWRlZC5cbiAgICAgICAgICAgICAgLy8gQ29uZm9ybWluZyBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGFsc28gY29lcmNlIHRoZSBpbml0aWFsIGFyZ3VtZW50IHRvXG4gICAgICAgICAgICAgIC8vIGEgc3RyaW5nIHByaW9yIHRvIHBhcnNpbmcuXG4gICAgICAgICAgICAgIGlmIChwYXJzZShcIjBcIikgPT09IDAgJiYgIXBhcnNlKGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIC8vIFNpbXBsZSBwYXJzaW5nIHRlc3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZShzZXJpYWxpemVkKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VTdXBwb3J0ZWQgPSB2YWx1ZVtcImFcIl0ubGVuZ3RoID09IDUgJiYgdmFsdWVbXCJhXCJdWzBdID09PSAxO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2FmYXJpIDw9IDUuMS4yIGFuZCBGRiAzLjFiMSBhbGxvdyB1bmVzY2FwZWQgdGFicyBpbiBzdHJpbmdzLlxuICAgICAgICAgICAgICAgICAgICBwYXJzZVN1cHBvcnRlZCA9ICFwYXJzZSgnXCJcXHRcIicpO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7fVxuICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gRkYgNC4wIGFuZCA0LjAuMSBhbGxvdyBsZWFkaW5nIGArYCBzaWducyBhbmQgbGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGRlY2ltYWwgcG9pbnRzLiBGRiA0LjAsIDQuMC4xLCBhbmQgSUUgOS0xMCBhbHNvIGFsbG93XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VydGFpbiBvY3RhbCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgICAgICBwYXJzZVN1cHBvcnRlZCA9IHBhcnNlKFwiMDFcIikgIT09IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDQuMCwgNC4wLjEsIGFuZCBSaGlubyAxLjdSMy1SNCBhbGxvdyB0cmFpbGluZyBkZWNpbWFsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gcG9pbnRzLiBUaGVzZSBlbnZpcm9ubWVudHMsIGFsb25nIHdpdGggRkYgMy4xYjEgYW5kIDIsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYWxzbyBhbGxvdyB0cmFpbGluZyBjb21tYXMgaW4gSlNPTiBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgICAgICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSBwYXJzZShcIjEuXCIpICE9PSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSBwYXJzZVN1cHBvcnRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc1tuYW1lXSA9ICEhaXNTdXBwb3J0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKCFoYXMoXCJqc29uXCIpKSB7XG4gICAgICAvLyBDb21tb24gYFtbQ2xhc3NdXWAgbmFtZSBhbGlhc2VzLlxuICAgICAgdmFyIGZ1bmN0aW9uQ2xhc3MgPSBcIltvYmplY3QgRnVuY3Rpb25dXCIsXG4gICAgICAgICAgZGF0ZUNsYXNzID0gXCJbb2JqZWN0IERhdGVdXCIsXG4gICAgICAgICAgbnVtYmVyQ2xhc3MgPSBcIltvYmplY3QgTnVtYmVyXVwiLFxuICAgICAgICAgIHN0cmluZ0NsYXNzID0gXCJbb2JqZWN0IFN0cmluZ11cIixcbiAgICAgICAgICBhcnJheUNsYXNzID0gXCJbb2JqZWN0IEFycmF5XVwiLFxuICAgICAgICAgIGJvb2xlYW5DbGFzcyA9IFwiW29iamVjdCBCb29sZWFuXVwiO1xuXG4gICAgICAvLyBEZXRlY3QgaW5jb21wbGV0ZSBzdXBwb3J0IGZvciBhY2Nlc3Npbmcgc3RyaW5nIGNoYXJhY3RlcnMgYnkgaW5kZXguXG4gICAgICB2YXIgY2hhckluZGV4QnVnZ3kgPSBoYXMoXCJidWctc3RyaW5nLWNoYXItaW5kZXhcIik7XG5cbiAgICAgIC8vIERlZmluZSBhZGRpdGlvbmFsIHV0aWxpdHkgbWV0aG9kcyBpZiB0aGUgYERhdGVgIG1ldGhvZHMgYXJlIGJ1Z2d5LlxuICAgICAgaWYgKCFpc0V4dGVuZGVkKSB7XG4gICAgICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgICAgIC8vIEEgbWFwcGluZyBiZXR3ZWVuIHRoZSBtb250aHMgb2YgdGhlIHllYXIgYW5kIHRoZSBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuXG4gICAgICAgIC8vIEphbnVhcnkgMXN0IGFuZCB0aGUgZmlyc3Qgb2YgdGhlIHJlc3BlY3RpdmUgbW9udGguXG4gICAgICAgIHZhciBNb250aHMgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdO1xuICAgICAgICAvLyBJbnRlcm5hbDogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiB0aGUgVW5peCBlcG9jaCBhbmQgdGhlXG4gICAgICAgIC8vIGZpcnN0IGRheSBvZiB0aGUgZ2l2ZW4gbW9udGguXG4gICAgICAgIHZhciBnZXREYXkgPSBmdW5jdGlvbiAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgICByZXR1cm4gTW9udGhzW21vbnRoXSArIDM2NSAqICh5ZWFyIC0gMTk3MCkgKyBmbG9vcigoeWVhciAtIDE5NjkgKyAobW9udGggPSArKG1vbnRoID4gMSkpKSAvIDQpIC0gZmxvb3IoKHllYXIgLSAxOTAxICsgbW9udGgpIC8gMTAwKSArIGZsb29yKCh5ZWFyIC0gMTYwMSArIG1vbnRoKSAvIDQwMCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIEludGVybmFsOiBEZXRlcm1pbmVzIGlmIGEgcHJvcGVydHkgaXMgYSBkaXJlY3QgcHJvcGVydHkgb2YgdGhlIGdpdmVuXG4gICAgICAvLyBvYmplY3QuIERlbGVnYXRlcyB0byB0aGUgbmF0aXZlIGBPYmplY3QjaGFzT3duUHJvcGVydHlgIG1ldGhvZC5cbiAgICAgIGlmICghKGlzUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eSkpIHtcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgIHZhciBtZW1iZXJzID0ge30sIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIGlmICgobWVtYmVycy5fX3Byb3RvX18gPSBudWxsLCBtZW1iZXJzLl9fcHJvdG9fXyA9IHtcbiAgICAgICAgICAgIC8vIFRoZSAqcHJvdG8qIHByb3BlcnR5IGNhbm5vdCBiZSBzZXQgbXVsdGlwbGUgdGltZXMgaW4gcmVjZW50XG4gICAgICAgICAgICAvLyB2ZXJzaW9ucyBvZiBGaXJlZm94IGFuZCBTZWFNb25rZXkuXG4gICAgICAgICAgICBcInRvU3RyaW5nXCI6IDFcbiAgICAgICAgICB9LCBtZW1iZXJzKS50b1N0cmluZyAhPSBnZXRDbGFzcykge1xuICAgICAgICAgICAgLy8gU2FmYXJpIDw9IDIuMC4zIGRvZXNuJ3QgaW1wbGVtZW50IGBPYmplY3QjaGFzT3duUHJvcGVydHlgLCBidXRcbiAgICAgICAgICAgIC8vIHN1cHBvcnRzIHRoZSBtdXRhYmxlICpwcm90byogcHJvcGVydHkuXG4gICAgICAgICAgICBpc1Byb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgIC8vIENhcHR1cmUgYW5kIGJyZWFrIHRoZSBvYmplY3QncyBwcm90b3R5cGUgY2hhaW4gKHNlZSBzZWN0aW9uIDguNi4yXG4gICAgICAgICAgICAgIC8vIG9mIHRoZSBFUyA1LjEgc3BlYykuIFRoZSBwYXJlbnRoZXNpemVkIGV4cHJlc3Npb24gcHJldmVudHMgYW5cbiAgICAgICAgICAgICAgLy8gdW5zYWZlIHRyYW5zZm9ybWF0aW9uIGJ5IHRoZSBDbG9zdXJlIENvbXBpbGVyLlxuICAgICAgICAgICAgICB2YXIgb3JpZ2luYWwgPSB0aGlzLl9fcHJvdG9fXywgcmVzdWx0ID0gcHJvcGVydHkgaW4gKHRoaXMuX19wcm90b19fID0gbnVsbCwgdGhpcyk7XG4gICAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICAgICAgdGhpcy5fX3Byb3RvX18gPSBvcmlnaW5hbDtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENhcHR1cmUgYSByZWZlcmVuY2UgdG8gdGhlIHRvcC1sZXZlbCBgT2JqZWN0YCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gbWVtYmVycy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSB0byBzaW11bGF0ZSBgT2JqZWN0I2hhc093blByb3BlcnR5YCBpblxuICAgICAgICAgICAgLy8gb3RoZXIgZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgaXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gKHRoaXMuY29uc3RydWN0b3IgfHwgY29uc3RydWN0b3IpLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5IGluIHRoaXMgJiYgIShwcm9wZXJ0eSBpbiBwYXJlbnQgJiYgdGhpc1twcm9wZXJ0eV0gPT09IHBhcmVudFtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVtYmVycyA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIGlzUHJvcGVydHkuY2FsbCh0aGlzLCBwcm9wZXJ0eSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIEludGVybmFsOiBOb3JtYWxpemVzIHRoZSBgZm9yLi4uaW5gIGl0ZXJhdGlvbiBhbGdvcml0aG0gYWNyb3NzXG4gICAgICAvLyBlbnZpcm9ubWVudHMuIEVhY2ggZW51bWVyYXRlZCBrZXkgaXMgeWllbGRlZCB0byBhIGBjYWxsYmFja2AgZnVuY3Rpb24uXG4gICAgICBmb3JFYWNoID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNpemUgPSAwLCBQcm9wZXJ0aWVzLCBtZW1iZXJzLCBwcm9wZXJ0eTtcblxuICAgICAgICAvLyBUZXN0cyBmb3IgYnVncyBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudCdzIGBmb3IuLi5pbmAgYWxnb3JpdGhtLiBUaGVcbiAgICAgICAgLy8gYHZhbHVlT2ZgIHByb3BlcnR5IGluaGVyaXRzIHRoZSBub24tZW51bWVyYWJsZSBmbGFnIGZyb21cbiAgICAgICAgLy8gYE9iamVjdC5wcm90b3R5cGVgIGluIG9sZGVyIHZlcnNpb25zIG9mIElFLCBOZXRzY2FwZSwgYW5kIE1vemlsbGEuXG4gICAgICAgIChQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMudmFsdWVPZiA9IDA7XG4gICAgICAgIH0pLnByb3RvdHlwZS52YWx1ZU9mID0gMDtcblxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGBQcm9wZXJ0aWVzYCBjbGFzcy5cbiAgICAgICAgbWVtYmVycyA9IG5ldyBQcm9wZXJ0aWVzKCk7XG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gbWVtYmVycykge1xuICAgICAgICAgIC8vIElnbm9yZSBhbGwgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuXG4gICAgICAgICAgaWYgKGlzUHJvcGVydHkuY2FsbChtZW1iZXJzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUHJvcGVydGllcyA9IG1lbWJlcnMgPSBudWxsO1xuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgaXRlcmF0aW9uIGFsZ29yaXRobS5cbiAgICAgICAgaWYgKCFzaXplKSB7XG4gICAgICAgICAgLy8gQSBsaXN0IG9mIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gYE9iamVjdC5wcm90b3R5cGVgLlxuICAgICAgICAgIG1lbWJlcnMgPSBbXCJ2YWx1ZU9mXCIsIFwidG9TdHJpbmdcIiwgXCJ0b0xvY2FsZVN0cmluZ1wiLCBcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsIFwiaXNQcm90b3R5cGVPZlwiLCBcImhhc093blByb3BlcnR5XCIsIFwiY29uc3RydWN0b3JcIl07XG4gICAgICAgICAgLy8gSUUgPD0gOCwgTW96aWxsYSAxLjAsIGFuZCBOZXRzY2FwZSA2LjIgaWdub3JlIHNoYWRvd2VkIG5vbi1lbnVtZXJhYmxlXG4gICAgICAgICAgLy8gcHJvcGVydGllcy5cbiAgICAgICAgICBmb3JFYWNoID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBpc0Z1bmN0aW9uID0gZ2V0Q2xhc3MuY2FsbChvYmplY3QpID09IGZ1bmN0aW9uQ2xhc3MsIHByb3BlcnR5LCBsZW5ndGg7XG4gICAgICAgICAgICB2YXIgaGFzUHJvcGVydHkgPSAhaXNGdW5jdGlvbiAmJiB0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yICE9IFwiZnVuY3Rpb25cIiAmJiBvYmplY3RUeXBlc1t0eXBlb2Ygb2JqZWN0Lmhhc093blByb3BlcnR5XSAmJiBvYmplY3QuaGFzT3duUHJvcGVydHkgfHwgaXNQcm9wZXJ0eTtcbiAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgIC8vIEdlY2tvIDw9IDEuMCBlbnVtZXJhdGVzIHRoZSBgcHJvdG90eXBlYCBwcm9wZXJ0eSBvZiBmdW5jdGlvbnMgdW5kZXJcbiAgICAgICAgICAgICAgLy8gY2VydGFpbiBjb25kaXRpb25zOyBJRSBkb2VzIG5vdC5cbiAgICAgICAgICAgICAgaWYgKCEoaXNGdW5jdGlvbiAmJiBwcm9wZXJ0eSA9PSBcInByb3RvdHlwZVwiKSAmJiBoYXNQcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYW51YWxseSBpbnZva2UgdGhlIGNhbGxiYWNrIGZvciBlYWNoIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5LlxuICAgICAgICAgICAgZm9yIChsZW5ndGggPSBtZW1iZXJzLmxlbmd0aDsgcHJvcGVydHkgPSBtZW1iZXJzWy0tbGVuZ3RoXTsgaGFzUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSAmJiBjYWxsYmFjayhwcm9wZXJ0eSkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc2l6ZSA9PSAyKSB7XG4gICAgICAgICAgLy8gU2FmYXJpIDw9IDIuMC40IGVudW1lcmF0ZXMgc2hhZG93ZWQgcHJvcGVydGllcyB0d2ljZS5cbiAgICAgICAgICBmb3JFYWNoID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNldCBvZiBpdGVyYXRlZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgdmFyIG1lbWJlcnMgPSB7fSwgaXNGdW5jdGlvbiA9IGdldENsYXNzLmNhbGwob2JqZWN0KSA9PSBmdW5jdGlvbkNsYXNzLCBwcm9wZXJ0eTtcbiAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgIC8vIFN0b3JlIGVhY2ggcHJvcGVydHkgbmFtZSB0byBwcmV2ZW50IGRvdWJsZSBlbnVtZXJhdGlvbi4gVGhlXG4gICAgICAgICAgICAgIC8vIGBwcm90b3R5cGVgIHByb3BlcnR5IG9mIGZ1bmN0aW9ucyBpcyBub3QgZW51bWVyYXRlZCBkdWUgdG8gY3Jvc3MtXG4gICAgICAgICAgICAgIC8vIGVudmlyb25tZW50IGluY29uc2lzdGVuY2llcy5cbiAgICAgICAgICAgICAgaWYgKCEoaXNGdW5jdGlvbiAmJiBwcm9wZXJ0eSA9PSBcInByb3RvdHlwZVwiKSAmJiAhaXNQcm9wZXJ0eS5jYWxsKG1lbWJlcnMsIHByb3BlcnR5KSAmJiAobWVtYmVyc1twcm9wZXJ0eV0gPSAxKSAmJiBpc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGJ1Z3MgZGV0ZWN0ZWQ7IHVzZSB0aGUgc3RhbmRhcmQgYGZvci4uLmluYCBhbGdvcml0aG0uXG4gICAgICAgICAgZm9yRWFjaCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaXNGdW5jdGlvbiA9IGdldENsYXNzLmNhbGwob2JqZWN0KSA9PSBmdW5jdGlvbkNsYXNzLCBwcm9wZXJ0eSwgaXNDb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgIGlmICghKGlzRnVuY3Rpb24gJiYgcHJvcGVydHkgPT0gXCJwcm90b3R5cGVcIikgJiYgaXNQcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpICYmICEoaXNDb25zdHJ1Y3RvciA9IHByb3BlcnR5ID09PSBcImNvbnN0cnVjdG9yXCIpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYW51YWxseSBpbnZva2UgdGhlIGNhbGxiYWNrIGZvciB0aGUgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBkdWUgdG9cbiAgICAgICAgICAgIC8vIGNyb3NzLWVudmlyb25tZW50IGluY29uc2lzdGVuY2llcy5cbiAgICAgICAgICAgIGlmIChpc0NvbnN0cnVjdG9yIHx8IGlzUHJvcGVydHkuY2FsbChvYmplY3QsIChwcm9wZXJ0eSA9IFwiY29uc3RydWN0b3JcIikpKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JFYWNoKG9iamVjdCwgY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgLy8gUHVibGljOiBTZXJpYWxpemVzIGEgSmF2YVNjcmlwdCBgdmFsdWVgIGFzIGEgSlNPTiBzdHJpbmcuIFRoZSBvcHRpb25hbFxuICAgICAgLy8gYGZpbHRlcmAgYXJndW1lbnQgbWF5IHNwZWNpZnkgZWl0aGVyIGEgZnVuY3Rpb24gdGhhdCBhbHRlcnMgaG93IG9iamVjdCBhbmRcbiAgICAgIC8vIGFycmF5IG1lbWJlcnMgYXJlIHNlcmlhbGl6ZWQsIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgYW5kIG51bWJlcnMgdGhhdFxuICAgICAgLy8gaW5kaWNhdGVzIHdoaWNoIHByb3BlcnRpZXMgc2hvdWxkIGJlIHNlcmlhbGl6ZWQuIFRoZSBvcHRpb25hbCBgd2lkdGhgXG4gICAgICAvLyBhcmd1bWVudCBtYXkgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIG51bWJlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cbiAgICAgIC8vIGxldmVsIG9mIHRoZSBvdXRwdXQuXG4gICAgICBpZiAoIWhhcyhcImpzb24tc3RyaW5naWZ5XCIpKSB7XG4gICAgICAgIC8vIEludGVybmFsOiBBIG1hcCBvZiBjb250cm9sIGNoYXJhY3RlcnMgYW5kIHRoZWlyIGVzY2FwZWQgZXF1aXZhbGVudHMuXG4gICAgICAgIHZhciBFc2NhcGVzID0ge1xuICAgICAgICAgIDkyOiBcIlxcXFxcXFxcXCIsXG4gICAgICAgICAgMzQ6ICdcXFxcXCInLFxuICAgICAgICAgIDg6IFwiXFxcXGJcIixcbiAgICAgICAgICAxMjogXCJcXFxcZlwiLFxuICAgICAgICAgIDEwOiBcIlxcXFxuXCIsXG4gICAgICAgICAgMTM6IFwiXFxcXHJcIixcbiAgICAgICAgICA5OiBcIlxcXFx0XCJcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogQ29udmVydHMgYHZhbHVlYCBpbnRvIGEgemVyby1wYWRkZWQgc3RyaW5nIHN1Y2ggdGhhdCBpdHNcbiAgICAgICAgLy8gbGVuZ3RoIGlzIGF0IGxlYXN0IGVxdWFsIHRvIGB3aWR0aGAuIFRoZSBgd2lkdGhgIG11c3QgYmUgPD0gNi5cbiAgICAgICAgdmFyIGxlYWRpbmdaZXJvZXMgPSBcIjAwMDAwMFwiO1xuICAgICAgICB2YXIgdG9QYWRkZWRTdHJpbmcgPSBmdW5jdGlvbiAod2lkdGgsIHZhbHVlKSB7XG4gICAgICAgICAgLy8gVGhlIGB8fCAwYCBleHByZXNzaW9uIGlzIG5lY2Vzc2FyeSB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpblxuICAgICAgICAgIC8vIE9wZXJhIDw9IDcuNTR1MiB3aGVyZSBgMCA9PSAtMGAsIGJ1dCBgU3RyaW5nKC0wKSAhPT0gXCIwXCJgLlxuICAgICAgICAgIHJldHVybiAobGVhZGluZ1plcm9lcyArICh2YWx1ZSB8fCAwKSkuc2xpY2UoLXdpZHRoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogRG91YmxlLXF1b3RlcyBhIHN0cmluZyBgdmFsdWVgLCByZXBsYWNpbmcgYWxsIEFTQ0lJIGNvbnRyb2xcbiAgICAgICAgLy8gY2hhcmFjdGVycyAoY2hhcmFjdGVycyB3aXRoIGNvZGUgdW5pdCB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAzMSkgd2l0aFxuICAgICAgICAvLyB0aGVpciBlc2NhcGVkIGVxdWl2YWxlbnRzLiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZVxuICAgICAgICAvLyBgUXVvdGUodmFsdWUpYCBvcGVyYXRpb24gZGVmaW5lZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLlxuICAgICAgICB2YXIgdW5pY29kZVByZWZpeCA9IFwiXFxcXHUwMFwiO1xuICAgICAgICB2YXIgcXVvdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gJ1wiJywgaW5kZXggPSAwLCBsZW5ndGggPSB2YWx1ZS5sZW5ndGgsIHVzZUNoYXJJbmRleCA9ICFjaGFySW5kZXhCdWdneSB8fCBsZW5ndGggPiAxMDtcbiAgICAgICAgICB2YXIgc3ltYm9scyA9IHVzZUNoYXJJbmRleCAmJiAoY2hhckluZGV4QnVnZ3kgPyB2YWx1ZS5zcGxpdChcIlwiKSA6IHZhbHVlKTtcbiAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBjaGFyQ29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlciBpcyBhIGNvbnRyb2wgY2hhcmFjdGVyLCBhcHBlbmQgaXRzIFVuaWNvZGUgb3JcbiAgICAgICAgICAgIC8vIHNob3J0aGFuZCBlc2NhcGUgc2VxdWVuY2U7IG90aGVyd2lzZSwgYXBwZW5kIHRoZSBjaGFyYWN0ZXIgYXMtaXMuXG4gICAgICAgICAgICBzd2l0Y2ggKGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgODogY2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEyOiBjYXNlIDEzOiBjYXNlIDM0OiBjYXNlIDkyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBFc2NhcGVzW2NoYXJDb2RlXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCAzMikge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHVuaWNvZGVQcmVmaXggKyB0b1BhZGRlZFN0cmluZygyLCBjaGFyQ29kZS50b1N0cmluZygxNikpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB1c2VDaGFySW5kZXggPyBzeW1ib2xzW2luZGV4XSA6IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQgKyAnXCInO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEludGVybmFsOiBSZWN1cnNpdmVseSBzZXJpYWxpemVzIGFuIG9iamVjdC4gSW1wbGVtZW50cyB0aGVcbiAgICAgICAgLy8gYFN0cihrZXksIGhvbGRlcilgLCBgSk8odmFsdWUpYCwgYW5kIGBKQSh2YWx1ZSlgIG9wZXJhdGlvbnMuXG4gICAgICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiAocHJvcGVydHksIG9iamVjdCwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIHdoaXRlc3BhY2UsIGluZGVudGF0aW9uLCBzdGFjaykge1xuICAgICAgICAgIHZhciB2YWx1ZSwgY2xhc3NOYW1lLCB5ZWFyLCBtb250aCwgZGF0ZSwgdGltZSwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcywgcmVzdWx0cywgZWxlbWVudCwgaW5kZXgsIGxlbmd0aCwgcHJlZml4LCByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIE5lY2Vzc2FyeSBmb3IgaG9zdCBvYmplY3Qgc3VwcG9ydC5cbiAgICAgICAgICAgIHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiICYmIHZhbHVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gZGF0ZUNsYXNzICYmICFpc1Byb3BlcnR5LmNhbGwodmFsdWUsIFwidG9KU09OXCIpKSB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA+IC0xIC8gMCAmJiB2YWx1ZSA8IDEgLyAwKSB7XG4gICAgICAgICAgICAgICAgLy8gRGF0ZXMgYXJlIHNlcmlhbGl6ZWQgYWNjb3JkaW5nIHRvIHRoZSBgRGF0ZSN0b0pTT05gIG1ldGhvZFxuICAgICAgICAgICAgICAgIC8vIHNwZWNpZmllZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS45LjUuNDQuIFNlZSBzZWN0aW9uIDE1LjkuMS4xNVxuICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgSVNPIDg2MDEgZGF0ZSB0aW1lIHN0cmluZyBmb3JtYXQuXG4gICAgICAgICAgICAgICAgaWYgKGdldERheSkge1xuICAgICAgICAgICAgICAgICAgLy8gTWFudWFsbHkgY29tcHV0ZSB0aGUgeWVhciwgbW9udGgsIGRhdGUsIGhvdXJzLCBtaW51dGVzLFxuICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kcywgYW5kIG1pbGxpc2Vjb25kcyBpZiB0aGUgYGdldFVUQypgIG1ldGhvZHMgYXJlXG4gICAgICAgICAgICAgICAgICAvLyBidWdneS4gQWRhcHRlZCBmcm9tIEBZYWZmbGUncyBgZGF0ZS1zaGltYCBwcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgZGF0ZSA9IGZsb29yKHZhbHVlIC8gODY0ZTUpO1xuICAgICAgICAgICAgICAgICAgZm9yICh5ZWFyID0gZmxvb3IoZGF0ZSAvIDM2NS4yNDI1KSArIDE5NzAgLSAxOyBnZXREYXkoeWVhciArIDEsIDApIDw9IGRhdGU7IHllYXIrKyk7XG4gICAgICAgICAgICAgICAgICBmb3IgKG1vbnRoID0gZmxvb3IoKGRhdGUgLSBnZXREYXkoeWVhciwgMCkpIC8gMzAuNDIpOyBnZXREYXkoeWVhciwgbW9udGggKyAxKSA8PSBkYXRlOyBtb250aCsrKTtcbiAgICAgICAgICAgICAgICAgIGRhdGUgPSAxICsgZGF0ZSAtIGdldERheSh5ZWFyLCBtb250aCk7XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgYHRpbWVgIHZhbHVlIHNwZWNpZmllcyB0aGUgdGltZSB3aXRoaW4gdGhlIGRheSAoc2VlIEVTXG4gICAgICAgICAgICAgICAgICAvLyA1LjEgc2VjdGlvbiAxNS45LjEuMikuIFRoZSBmb3JtdWxhIGAoQSAlIEIgKyBCKSAlIEJgIGlzIHVzZWRcbiAgICAgICAgICAgICAgICAgIC8vIHRvIGNvbXB1dGUgYEEgbW9kdWxvIEJgLCBhcyB0aGUgYCVgIG9wZXJhdG9yIGRvZXMgbm90XG4gICAgICAgICAgICAgICAgICAvLyBjb3JyZXNwb25kIHRvIHRoZSBgbW9kdWxvYCBvcGVyYXRpb24gZm9yIG5lZ2F0aXZlIG51bWJlcnMuXG4gICAgICAgICAgICAgICAgICB0aW1lID0gKHZhbHVlICUgODY0ZTUgKyA4NjRlNSkgJSA4NjRlNTtcbiAgICAgICAgICAgICAgICAgIC8vIFRoZSBob3VycywgbWludXRlcywgc2Vjb25kcywgYW5kIG1pbGxpc2Vjb25kcyBhcmUgb2J0YWluZWQgYnlcbiAgICAgICAgICAgICAgICAgIC8vIGRlY29tcG9zaW5nIHRoZSB0aW1lIHdpdGhpbiB0aGUgZGF5LiBTZWUgc2VjdGlvbiAxNS45LjEuMTAuXG4gICAgICAgICAgICAgICAgICBob3VycyA9IGZsb29yKHRpbWUgLyAzNmU1KSAlIDI0O1xuICAgICAgICAgICAgICAgICAgbWludXRlcyA9IGZsb29yKHRpbWUgLyA2ZTQpICUgNjA7XG4gICAgICAgICAgICAgICAgICBzZWNvbmRzID0gZmxvb3IodGltZSAvIDFlMykgJSA2MDtcbiAgICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IHRpbWUgJSAxZTM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHllYXIgPSB2YWx1ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgICAgbW9udGggPSB2YWx1ZS5nZXRVVENNb250aCgpO1xuICAgICAgICAgICAgICAgICAgZGF0ZSA9IHZhbHVlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGhvdXJzID0gdmFsdWUuZ2V0VVRDSG91cnMoKTtcbiAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSB2YWx1ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgICBzZWNvbmRzID0gdmFsdWUuZ2V0VVRDU2Vjb25kcygpO1xuICAgICAgICAgICAgICAgICAgbWlsbGlzZWNvbmRzID0gdmFsdWUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBleHRlbmRlZCB5ZWFycyBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAoeWVhciA8PSAwIHx8IHllYXIgPj0gMWU0ID8gKHllYXIgPCAwID8gXCItXCIgOiBcIitcIikgKyB0b1BhZGRlZFN0cmluZyg2LCB5ZWFyIDwgMCA/IC15ZWFyIDogeWVhcikgOiB0b1BhZGRlZFN0cmluZyg0LCB5ZWFyKSkgK1xuICAgICAgICAgICAgICAgICAgXCItXCIgKyB0b1BhZGRlZFN0cmluZygyLCBtb250aCArIDEpICsgXCItXCIgKyB0b1BhZGRlZFN0cmluZygyLCBkYXRlKSArXG4gICAgICAgICAgICAgICAgICAvLyBNb250aHMsIGRhdGVzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMgc2hvdWxkIGhhdmUgdHdvXG4gICAgICAgICAgICAgICAgICAvLyBkaWdpdHM7IG1pbGxpc2Vjb25kcyBzaG91bGQgaGF2ZSB0aHJlZS5cbiAgICAgICAgICAgICAgICAgIFwiVFwiICsgdG9QYWRkZWRTdHJpbmcoMiwgaG91cnMpICsgXCI6XCIgKyB0b1BhZGRlZFN0cmluZygyLCBtaW51dGVzKSArIFwiOlwiICsgdG9QYWRkZWRTdHJpbmcoMiwgc2Vjb25kcykgK1xuICAgICAgICAgICAgICAgICAgLy8gTWlsbGlzZWNvbmRzIGFyZSBvcHRpb25hbCBpbiBFUyA1LjAsIGJ1dCByZXF1aXJlZCBpbiA1LjEuXG4gICAgICAgICAgICAgICAgICBcIi5cIiArIHRvUGFkZGVkU3RyaW5nKDMsIG1pbGxpc2Vjb25kcykgKyBcIlpcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlLnRvSlNPTiA9PSBcImZ1bmN0aW9uXCIgJiYgKChjbGFzc05hbWUgIT0gbnVtYmVyQ2xhc3MgJiYgY2xhc3NOYW1lICE9IHN0cmluZ0NsYXNzICYmIGNsYXNzTmFtZSAhPSBhcnJheUNsYXNzKSB8fCBpc1Byb3BlcnR5LmNhbGwodmFsdWUsIFwidG9KU09OXCIpKSkge1xuICAgICAgICAgICAgICAvLyBQcm90b3R5cGUgPD0gMS42LjEgYWRkcyBub24tc3RhbmRhcmQgYHRvSlNPTmAgbWV0aG9kcyB0byB0aGVcbiAgICAgICAgICAgICAgLy8gYE51bWJlcmAsIGBTdHJpbmdgLCBgRGF0ZWAsIGFuZCBgQXJyYXlgIHByb3RvdHlwZXMuIEpTT04gM1xuICAgICAgICAgICAgICAvLyBpZ25vcmVzIGFsbCBgdG9KU09OYCBtZXRob2RzIG9uIHRoZXNlIG9iamVjdHMgdW5sZXNzIHRoZXkgYXJlXG4gICAgICAgICAgICAgIC8vIGRlZmluZWQgZGlyZWN0bHkgb24gYW4gaW5zdGFuY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBJZiBhIHJlcGxhY2VtZW50IGZ1bmN0aW9uIHdhcyBwcm92aWRlZCwgY2FsbCBpdCB0byBvYnRhaW4gdGhlIHZhbHVlXG4gICAgICAgICAgICAvLyBmb3Igc2VyaWFsaXphdGlvbi5cbiAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmplY3QsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKTtcbiAgICAgICAgICBpZiAoY2xhc3NOYW1lID09IGJvb2xlYW5DbGFzcykge1xuICAgICAgICAgICAgLy8gQm9vbGVhbnMgYXJlIHJlcHJlc2VudGVkIGxpdGVyYWxseS5cbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT0gbnVtYmVyQ2xhc3MpIHtcbiAgICAgICAgICAgIC8vIEpTT04gbnVtYmVycyBtdXN0IGJlIGZpbml0ZS4gYEluZmluaXR5YCBhbmQgYE5hTmAgYXJlIHNlcmlhbGl6ZWQgYXNcbiAgICAgICAgICAgIC8vIGBcIm51bGxcImAuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiAtMSAvIDAgJiYgdmFsdWUgPCAxIC8gMCA/IFwiXCIgKyB2YWx1ZSA6IFwibnVsbFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09IHN0cmluZ0NsYXNzKSB7XG4gICAgICAgICAgICAvLyBTdHJpbmdzIGFyZSBkb3VibGUtcXVvdGVkIGFuZCBlc2NhcGVkLlxuICAgICAgICAgICAgcmV0dXJuIHF1b3RlKFwiXCIgKyB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoaXMgaXMgYSBsaW5lYXIgc2VhcmNoOyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgLy8gaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mIHVuaXF1ZSBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgICAgIGZvciAobGVuZ3RoID0gc3RhY2subGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgICAgaWYgKHN0YWNrW2xlbmd0aF0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3ljbGljIHN0cnVjdHVyZXMgY2Fubm90IGJlIHNlcmlhbGl6ZWQgYnkgYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIHRoZSBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IGluZGVudGF0aW9uIGxldmVsIGFuZCBpbmRlbnQgb25lIGFkZGl0aW9uYWwgbGV2ZWwuXG4gICAgICAgICAgICBwcmVmaXggPSBpbmRlbnRhdGlvbjtcbiAgICAgICAgICAgIGluZGVudGF0aW9uICs9IHdoaXRlc3BhY2U7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09IGFycmF5Q2xhc3MpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgc2VyaWFsaXplIGFycmF5IGVsZW1lbnRzLlxuICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzZXJpYWxpemUoaW5kZXgsIHZhbHVlLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbWVudCA9PT0gdW5kZWYgPyBcIm51bGxcIiA6IGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHMubGVuZ3RoID8gKHdoaXRlc3BhY2UgPyBcIltcXG5cIiArIGluZGVudGF0aW9uICsgcmVzdWx0cy5qb2luKFwiLFxcblwiICsgaW5kZW50YXRpb24pICsgXCJcXG5cIiArIHByZWZpeCArIFwiXVwiIDogKFwiW1wiICsgcmVzdWx0cy5qb2luKFwiLFwiKSArIFwiXVwiKSkgOiBcIltdXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBzZXJpYWxpemUgb2JqZWN0IG1lbWJlcnMuIE1lbWJlcnMgYXJlIHNlbGVjdGVkIGZyb21cbiAgICAgICAgICAgICAgLy8gZWl0aGVyIGEgdXNlci1zcGVjaWZpZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcywgb3IgdGhlIG9iamVjdFxuICAgICAgICAgICAgICAvLyBpdHNlbGYuXG4gICAgICAgICAgICAgIGZvckVhY2gocHJvcGVydGllcyB8fCB2YWx1ZSwgZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzZXJpYWxpemUocHJvcGVydHksIHZhbHVlLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWYpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEFjY29yZGluZyB0byBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zOiBcIklmIGBnYXBgIHt3aGl0ZXNwYWNlfVxuICAgICAgICAgICAgICAgICAgLy8gaXMgbm90IHRoZSBlbXB0eSBzdHJpbmcsIGxldCBgbWVtYmVyYCB7cXVvdGUocHJvcGVydHkpICsgXCI6XCJ9XG4gICAgICAgICAgICAgICAgICAvLyBiZSB0aGUgY29uY2F0ZW5hdGlvbiBvZiBgbWVtYmVyYCBhbmQgdGhlIGBzcGFjZWAgY2hhcmFjdGVyLlwiXG4gICAgICAgICAgICAgICAgICAvLyBUaGUgXCJgc3BhY2VgIGNoYXJhY3RlclwiIHJlZmVycyB0byB0aGUgbGl0ZXJhbCBzcGFjZVxuICAgICAgICAgICAgICAgICAgLy8gY2hhcmFjdGVyLCBub3QgdGhlIGBzcGFjZWAge3dpZHRofSBhcmd1bWVudCBwcm92aWRlZCB0b1xuICAgICAgICAgICAgICAgICAgLy8gYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChxdW90ZShwcm9wZXJ0eSkgKyBcIjpcIiArICh3aGl0ZXNwYWNlID8gXCIgXCIgOiBcIlwiKSArIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHMubGVuZ3RoID8gKHdoaXRlc3BhY2UgPyBcIntcXG5cIiArIGluZGVudGF0aW9uICsgcmVzdWx0cy5qb2luKFwiLFxcblwiICsgaW5kZW50YXRpb24pICsgXCJcXG5cIiArIHByZWZpeCArIFwifVwiIDogKFwie1wiICsgcmVzdWx0cy5qb2luKFwiLFwiKSArIFwifVwiKSkgOiBcInt9XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSB0cmF2ZXJzZWQgb2JqZWN0IHN0YWNrLlxuICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQdWJsaWM6IGBKU09OLnN0cmluZ2lmeWAuIFNlZSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLlxuICAgICAgICBleHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChzb3VyY2UsIGZpbHRlciwgd2lkdGgpIHtcbiAgICAgICAgICB2YXIgd2hpdGVzcGFjZSwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIGNsYXNzTmFtZTtcbiAgICAgICAgICBpZiAob2JqZWN0VHlwZXNbdHlwZW9mIGZpbHRlcl0gJiYgZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoKGNsYXNzTmFtZSA9IGdldENsYXNzLmNhbGwoZmlsdGVyKSkgPT0gZnVuY3Rpb25DbGFzcykge1xuICAgICAgICAgICAgICBjYWxsYmFjayA9IGZpbHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09IGFycmF5Q2xhc3MpIHtcbiAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcHJvcGVydHkgbmFtZXMgYXJyYXkgaW50byBhIG1ha2VzaGlmdCBzZXQuXG4gICAgICAgICAgICAgIHByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBmaWx0ZXIubGVuZ3RoLCB2YWx1ZTsgaW5kZXggPCBsZW5ndGg7IHZhbHVlID0gZmlsdGVyW2luZGV4KytdLCAoKGNsYXNzTmFtZSA9IGdldENsYXNzLmNhbGwodmFsdWUpKSwgY2xhc3NOYW1lID09IHN0cmluZ0NsYXNzIHx8IGNsYXNzTmFtZSA9PSBudW1iZXJDbGFzcykgJiYgKHByb3BlcnRpZXNbdmFsdWVdID0gMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgoY2xhc3NOYW1lID0gZ2V0Q2xhc3MuY2FsbCh3aWR0aCkpID09IG51bWJlckNsYXNzKSB7XG4gICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGB3aWR0aGAgdG8gYW4gaW50ZWdlciBhbmQgY3JlYXRlIGEgc3RyaW5nIGNvbnRhaW5pbmdcbiAgICAgICAgICAgICAgLy8gYHdpZHRoYCBudW1iZXIgb2Ygc3BhY2UgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgaWYgKCh3aWR0aCAtPSB3aWR0aCAlIDEpID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAod2hpdGVzcGFjZSA9IFwiXCIsIHdpZHRoID4gMTAgJiYgKHdpZHRoID0gMTApOyB3aGl0ZXNwYWNlLmxlbmd0aCA8IHdpZHRoOyB3aGl0ZXNwYWNlICs9IFwiIFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT0gc3RyaW5nQ2xhc3MpIHtcbiAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IHdpZHRoLmxlbmd0aCA8PSAxMCA/IHdpZHRoIDogd2lkdGguc2xpY2UoMCwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBPcGVyYSA8PSA3LjU0dTIgZGlzY2FyZHMgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggZW1wdHkgc3RyaW5nIGtleXNcbiAgICAgICAgICAvLyAoYFwiXCJgKSBvbmx5IGlmIHRoZXkgYXJlIHVzZWQgZGlyZWN0bHkgd2l0aGluIGFuIG9iamVjdCBtZW1iZXIgbGlzdFxuICAgICAgICAgIC8vIChlLmcuLCBgIShcIlwiIGluIHsgXCJcIjogMX0pYCkuXG4gICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShcIlwiLCAodmFsdWUgPSB7fSwgdmFsdWVbXCJcIl0gPSBzb3VyY2UsIHZhbHVlKSwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIHdoaXRlc3BhY2UsIFwiXCIsIFtdKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gUHVibGljOiBQYXJzZXMgYSBKU09OIHNvdXJjZSBzdHJpbmcuXG4gICAgICBpZiAoIWhhcyhcImpzb24tcGFyc2VcIikpIHtcbiAgICAgICAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgICAgICAgLy8gSW50ZXJuYWw6IEEgbWFwIG9mIGVzY2FwZWQgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCB0aGVpciB1bmVzY2FwZWRcbiAgICAgICAgLy8gZXF1aXZhbGVudHMuXG4gICAgICAgIHZhciBVbmVzY2FwZXMgPSB7XG4gICAgICAgICAgOTI6IFwiXFxcXFwiLFxuICAgICAgICAgIDM0OiAnXCInLFxuICAgICAgICAgIDQ3OiBcIi9cIixcbiAgICAgICAgICA5ODogXCJcXGJcIixcbiAgICAgICAgICAxMTY6IFwiXFx0XCIsXG4gICAgICAgICAgMTEwOiBcIlxcblwiLFxuICAgICAgICAgIDEwMjogXCJcXGZcIixcbiAgICAgICAgICAxMTQ6IFwiXFxyXCJcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogU3RvcmVzIHRoZSBwYXJzZXIgc3RhdGUuXG4gICAgICAgIHZhciBJbmRleCwgU291cmNlO1xuXG4gICAgICAgIC8vIEludGVybmFsOiBSZXNldHMgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3dzIGEgYFN5bnRheEVycm9yYC5cbiAgICAgICAgdmFyIGFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIEluZGV4ID0gU291cmNlID0gbnVsbDtcbiAgICAgICAgICB0aHJvdyBTeW50YXhFcnJvcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEludGVybmFsOiBSZXR1cm5zIHRoZSBuZXh0IHRva2VuLCBvciBgXCIkXCJgIGlmIHRoZSBwYXJzZXIgaGFzIHJlYWNoZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgc291cmNlIHN0cmluZy4gQSB0b2tlbiBtYXkgYmUgYSBzdHJpbmcsIG51bWJlciwgYG51bGxgXG4gICAgICAgIC8vIGxpdGVyYWwsIG9yIEJvb2xlYW4gbGl0ZXJhbC5cbiAgICAgICAgdmFyIGxleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc291cmNlID0gU291cmNlLCBsZW5ndGggPSBzb3VyY2UubGVuZ3RoLCB2YWx1ZSwgYmVnaW4sIHBvc2l0aW9uLCBpc1NpZ25lZCwgY2hhckNvZGU7XG4gICAgICAgICAgd2hpbGUgKEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KTtcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgY2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIC8vIFNraXAgd2hpdGVzcGFjZSB0b2tlbnMsIGluY2x1ZGluZyB0YWJzLCBjYXJyaWFnZSByZXR1cm5zLCBsaW5lXG4gICAgICAgICAgICAgICAgLy8gZmVlZHMsIGFuZCBzcGFjZSBjaGFyYWN0ZXJzLlxuICAgICAgICAgICAgICAgIEluZGV4Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMTIzOiBjYXNlIDEyNTogY2FzZSA5MTogY2FzZSA5MzogY2FzZSA1ODogY2FzZSA0NDpcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBhIHB1bmN0dWF0b3IgdG9rZW4gKGB7YCwgYH1gLCBgW2AsIGBdYCwgYDpgLCBvciBgLGApIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjaGFySW5kZXhCdWdneSA/IHNvdXJjZS5jaGFyQXQoSW5kZXgpIDogc291cmNlW0luZGV4XTtcbiAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICAvLyBgXCJgIGRlbGltaXRzIGEgSlNPTiBzdHJpbmc7IGFkdmFuY2UgdG8gdGhlIG5leHQgY2hhcmFjdGVyIGFuZFxuICAgICAgICAgICAgICAgIC8vIGJlZ2luIHBhcnNpbmcgdGhlIHN0cmluZy4gU3RyaW5nIHRva2VucyBhcmUgcHJlZml4ZWQgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyBzZW50aW5lbCBgQGAgY2hhcmFjdGVyIHRvIGRpc3Rpbmd1aXNoIHRoZW0gZnJvbSBwdW5jdHVhdG9ycyBhbmRcbiAgICAgICAgICAgICAgICAvLyBlbmQtb2Ytc3RyaW5nIHRva2Vucy5cbiAgICAgICAgICAgICAgICBmb3IgKHZhbHVlID0gXCJAXCIsIEluZGV4Kys7IEluZGV4IDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCAzMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmVzY2FwZWQgQVNDSUkgY29udHJvbCBjaGFyYWN0ZXJzICh0aG9zZSB3aXRoIGEgY29kZSB1bml0XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgc3BhY2UgY2hhcmFjdGVyKSBhcmUgbm90IHBlcm1pdHRlZC5cbiAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckNvZGUgPT0gOTIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQSByZXZlcnNlIHNvbGlkdXMgKGBcXGApIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgYW4gZXNjYXBlZFxuICAgICAgICAgICAgICAgICAgICAvLyBjb250cm9sIGNoYXJhY3RlciAoaW5jbHVkaW5nIGBcImAsIGBcXGAsIGFuZCBgL2ApIG9yIFVuaWNvZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIHNlcXVlbmNlLlxuICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KCsrSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA5MjogY2FzZSAzNDogY2FzZSA0NzogY2FzZSA5ODogY2FzZSAxMTY6IGNhc2UgMTEwOiBjYXNlIDEwMjogY2FzZSAxMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZpdmUgZXNjYXBlZCBjb250cm9sIGNoYXJhY3RlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSBVbmVzY2FwZXNbY2hhckNvZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYFxcdWAgbWFya3MgdGhlIGJlZ2lubmluZyBvZiBhIFVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSB0byB0aGUgZmlyc3QgY2hhcmFjdGVyIGFuZCB2YWxpZGF0ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvdXItZGlnaXQgY29kZSBwb2ludC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luID0gKytJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocG9zaXRpb24gPSBJbmRleCArIDQ7IEluZGV4IDwgcG9zaXRpb247IEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgdmFsaWQgc2VxdWVuY2UgY29tcHJpc2VzIGZvdXIgaGV4ZGlnaXRzIChjYXNlLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlbnNpdGl2ZSkgdGhhdCBmb3JtIGEgc2luZ2xlIGhleGFkZWNpbWFsIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1NyB8fCBjaGFyQ29kZSA+PSA5NyAmJiBjaGFyQ29kZSA8PSAxMDIgfHwgY2hhckNvZGUgPj0gNjUgJiYgY2hhckNvZGUgPD0gNzApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW52YWxpZCBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZpdmUgdGhlIGVzY2FwZWQgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gZnJvbUNoYXJDb2RlKFwiMHhcIiArIHNvdXJjZS5zbGljZShiZWdpbiwgSW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIGVzY2FwZSBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA9PSAzNCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEFuIHVuZXNjYXBlZCBkb3VibGUtcXVvdGUgY2hhcmFjdGVyIG1hcmtzIHRoZSBlbmQgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBiZWdpbiA9IEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAvLyBPcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiBjYXNlIHdoZXJlIGEgc3RyaW5nIGlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY2hhckNvZGUgPj0gMzIgJiYgY2hhckNvZGUgIT0gOTIgJiYgY2hhckNvZGUgIT0gMzQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KCsrSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgc3RyaW5nIGFzLWlzLlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSBzb3VyY2Uuc2xpY2UoYmVnaW4sIEluZGV4KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KSA9PSAzNCkge1xuICAgICAgICAgICAgICAgICAgLy8gQWR2YW5jZSB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIHJldHVybiB0aGUgcmV2aXZlZCBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBVbnRlcm1pbmF0ZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgbnVtYmVycyBhbmQgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgYmVnaW4gPSBJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIHBhc3QgdGhlIG5lZ2F0aXZlIHNpZ24sIGlmIG9uZSBpcyBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID09IDQ1KSB7XG4gICAgICAgICAgICAgICAgICBpc1NpZ25lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KCsrSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBhbiBpbnRlZ2VyIG9yIGZsb2F0aW5nLXBvaW50IHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1Nykge1xuICAgICAgICAgICAgICAgICAgLy8gTGVhZGluZyB6ZXJvZXMgYXJlIGludGVycHJldGVkIGFzIG9jdGFsIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlID09IDQ4ICYmICgoY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCArIDEpKSwgY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElsbGVnYWwgb2N0YWwgbGl0ZXJhbC5cbiAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlzU2lnbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgaW50ZWdlciBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICBmb3IgKDsgSW5kZXggPCBsZW5ndGggJiYgKChjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KSksIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KTsgSW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgICAvLyBGbG9hdHMgY2Fubm90IGNvbnRhaW4gYSBsZWFkaW5nIGRlY2ltYWwgcG9pbnQ7IGhvd2V2ZXIsIHRoaXNcbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgaXMgYWxyZWFkeSBhY2NvdW50ZWQgZm9yIGJ5IHRoZSBwYXJzZXIuXG4gICAgICAgICAgICAgICAgICBpZiAoc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpID09IDQ2KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKytJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIGRlY2ltYWwgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgcG9zaXRpb24gPCBsZW5ndGggJiYgKChjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KHBvc2l0aW9uKSksIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KTsgcG9zaXRpb24rKyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElsbGVnYWwgdHJhaWxpbmcgZGVjaW1hbC5cbiAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEluZGV4ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBQYXJzZSBleHBvbmVudHMuIFRoZSBgZWAgZGVub3RpbmcgdGhlIGV4cG9uZW50IGlzXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlLWluc2Vuc2l0aXZlLlxuICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gMTAxIHx8IGNoYXJDb2RlID09IDY5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoKytJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgcGFzdCB0aGUgc2lnbiBmb2xsb3dpbmcgdGhlIGV4cG9uZW50LCBpZiBvbmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BlY2lmaWVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gNDMgfHwgY2hhckNvZGUgPT0gNDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBleHBvbmVudGlhbCBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocG9zaXRpb24gPSBJbmRleDsgcG9zaXRpb24gPCBsZW5ndGggJiYgKChjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KHBvc2l0aW9uKSksIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KTsgcG9zaXRpb24rKyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElsbGVnYWwgZW1wdHkgZXhwb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBJbmRleCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gQ29lcmNlIHRoZSBwYXJzZWQgdmFsdWUgdG8gYSBKYXZhU2NyaXB0IG51bWJlci5cbiAgICAgICAgICAgICAgICAgIHJldHVybiArc291cmNlLnNsaWNlKGJlZ2luLCBJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgbmVnYXRpdmUgc2lnbiBtYXkgb25seSBwcmVjZWRlIG51bWJlcnMuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2lnbmVkKSB7XG4gICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBgdHJ1ZWAsIGBmYWxzZWAsIGFuZCBgbnVsbGAgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5zbGljZShJbmRleCwgSW5kZXggKyA0KSA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnNsaWNlKEluZGV4LCBJbmRleCArIDUpID09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zbGljZShJbmRleCwgSW5kZXggKyA0KSA9PSBcIm51bGxcIikge1xuICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBVbnJlY29nbml6ZWQgdG9rZW4uXG4gICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmV0dXJuIHRoZSBzZW50aW5lbCBgJGAgY2hhcmFjdGVyIGlmIHRoZSBwYXJzZXIgaGFzIHJlYWNoZWQgdGhlIGVuZFxuICAgICAgICAgIC8vIG9mIHRoZSBzb3VyY2Ugc3RyaW5nLlxuICAgICAgICAgIHJldHVybiBcIiRcIjtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogUGFyc2VzIGEgSlNPTiBgdmFsdWVgIHRva2VuLlxuICAgICAgICB2YXIgZ2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdHMsIGhhc01lbWJlcnM7XG4gICAgICAgICAgaWYgKHZhbHVlID09IFwiJFwiKSB7XG4gICAgICAgICAgICAvLyBVbmV4cGVjdGVkIGVuZCBvZiBpbnB1dC5cbiAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKChjaGFySW5kZXhCdWdneSA/IHZhbHVlLmNoYXJBdCgwKSA6IHZhbHVlWzBdKSA9PSBcIkBcIikge1xuICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNlbnRpbmVsIGBAYCBjaGFyYWN0ZXIuXG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFBhcnNlIG9iamVjdCBhbmQgYXJyYXkgbGl0ZXJhbHMuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gXCJbXCIpIHtcbiAgICAgICAgICAgICAgLy8gUGFyc2VzIGEgSlNPTiBhcnJheSwgcmV0dXJuaW5nIGEgbmV3IEphdmFTY3JpcHQgYXJyYXkuXG4gICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgZm9yICg7OyBoYXNNZW1iZXJzIHx8IChoYXNNZW1iZXJzID0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGxleCgpO1xuICAgICAgICAgICAgICAgIC8vIEEgY2xvc2luZyBzcXVhcmUgYnJhY2tldCBtYXJrcyB0aGUgZW5kIG9mIHRoZSBhcnJheSBsaXRlcmFsLlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIl1cIikge1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBhcnJheSBsaXRlcmFsIGNvbnRhaW5zIGVsZW1lbnRzLCB0aGUgY3VycmVudCB0b2tlblxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSBhIGNvbW1hIHNlcGFyYXRpbmcgdGhlIHByZXZpb3VzIGVsZW1lbnQgZnJvbSB0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXh0LlxuICAgICAgICAgICAgICAgIGlmIChoYXNNZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCIsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCB0cmFpbGluZyBgLGAgaW4gYXJyYXkgbGl0ZXJhbC5cbiAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGAsYCBtdXN0IHNlcGFyYXRlIGVhY2ggYXJyYXkgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRWxpc2lvbnMgYW5kIGxlYWRpbmcgY29tbWFzIGFyZSBub3QgcGVybWl0dGVkLlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIixcIikge1xuICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGdldCh2YWx1ZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcIntcIikge1xuICAgICAgICAgICAgICAvLyBQYXJzZXMgYSBKU09OIG9iamVjdCwgcmV0dXJuaW5nIGEgbmV3IEphdmFTY3JpcHQgb2JqZWN0LlxuICAgICAgICAgICAgICByZXN1bHRzID0ge307XG4gICAgICAgICAgICAgIGZvciAoOzsgaGFzTWVtYmVycyB8fCAoaGFzTWVtYmVycyA9IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBBIGNsb3NpbmcgY3VybHkgYnJhY2UgbWFya3MgdGhlIGVuZCBvZiB0aGUgb2JqZWN0IGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwifVwiKSB7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5zIG1lbWJlcnMsIHRoZSBjdXJyZW50IHRva2VuXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGEgY29tbWEgc2VwYXJhdG9yLlxuICAgICAgICAgICAgICAgIGlmIChoYXNNZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCIsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwifVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVW5leHBlY3RlZCB0cmFpbGluZyBgLGAgaW4gb2JqZWN0IGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQSBgLGAgbXVzdCBzZXBhcmF0ZSBlYWNoIG9iamVjdCBtZW1iZXIuXG4gICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIExlYWRpbmcgY29tbWFzIGFyZSBub3QgcGVybWl0dGVkLCBvYmplY3QgcHJvcGVydHkgbmFtZXMgbXVzdCBiZVxuICAgICAgICAgICAgICAgIC8vIGRvdWJsZS1xdW90ZWQgc3RyaW5ncywgYW5kIGEgYDpgIG11c3Qgc2VwYXJhdGUgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIC8vIG5hbWUgYW5kIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIixcIiB8fCB0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIiB8fCAoY2hhckluZGV4QnVnZ3kgPyB2YWx1ZS5jaGFyQXQoMCkgOiB2YWx1ZVswXSkgIT0gXCJAXCIgfHwgbGV4KCkgIT0gXCI6XCIpIHtcbiAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdHNbdmFsdWUuc2xpY2UoMSldID0gZ2V0KGxleCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgdG9rZW4gZW5jb3VudGVyZWQuXG4gICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW50ZXJuYWw6IFVwZGF0ZXMgYSB0cmF2ZXJzZWQgb2JqZWN0IG1lbWJlci5cbiAgICAgICAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIChzb3VyY2UsIHByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gd2Fsayhzb3VyY2UsIHByb3BlcnR5LCBjYWxsYmFjayk7XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmKSB7XG4gICAgICAgICAgICBkZWxldGUgc291cmNlW3Byb3BlcnR5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEludGVybmFsOiBSZWN1cnNpdmVseSB0cmF2ZXJzZXMgYSBwYXJzZWQgSlNPTiBvYmplY3QsIGludm9raW5nIHRoZVxuICAgICAgICAvLyBgY2FsbGJhY2tgIGZ1bmN0aW9uIGZvciBlYWNoIHZhbHVlLiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZVxuICAgICAgICAvLyBgV2Fsayhob2xkZXIsIG5hbWUpYCBvcGVyYXRpb24gZGVmaW5lZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS4xMi4yLlxuICAgICAgICB2YXIgd2FsayA9IGZ1bmN0aW9uIChzb3VyY2UsIHByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eV0sIGxlbmd0aDtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGBmb3JFYWNoYCBjYW4ndCBiZSB1c2VkIHRvIHRyYXZlcnNlIGFuIGFycmF5IGluIE9wZXJhIDw9IDguNTRcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgaXRzIGBPYmplY3QjaGFzT3duUHJvcGVydHlgIGltcGxlbWVudGF0aW9uIHJldHVybnMgYGZhbHNlYFxuICAgICAgICAgICAgLy8gZm9yIGFycmF5IGluZGljZXMgKGUuZy4sIGAhWzEsIDIsIDNdLmhhc093blByb3BlcnR5KFwiMFwiKWApLlxuICAgICAgICAgICAgaWYgKGdldENsYXNzLmNhbGwodmFsdWUpID09IGFycmF5Q2xhc3MpIHtcbiAgICAgICAgICAgICAgZm9yIChsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGxlbmd0aC0tOykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZSh2YWx1ZSwgbGVuZ3RoLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZSh2YWx1ZSwgcHJvcGVydHksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHNvdXJjZSwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQdWJsaWM6IGBKU09OLnBhcnNlYC4gU2VlIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjIuXG4gICAgICAgIGV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaykge1xuICAgICAgICAgIHZhciByZXN1bHQsIHZhbHVlO1xuICAgICAgICAgIEluZGV4ID0gMDtcbiAgICAgICAgICBTb3VyY2UgPSBcIlwiICsgc291cmNlO1xuICAgICAgICAgIHJlc3VsdCA9IGdldChsZXgoKSk7XG4gICAgICAgICAgLy8gSWYgYSBKU09OIHN0cmluZyBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMsIGl0IGlzIGludmFsaWQuXG4gICAgICAgICAgaWYgKGxleCgpICE9IFwiJFwiKSB7XG4gICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZXNldCB0aGUgcGFyc2VyIHN0YXRlLlxuICAgICAgICAgIEluZGV4ID0gU291cmNlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2sgJiYgZ2V0Q2xhc3MuY2FsbChjYWxsYmFjaykgPT0gZnVuY3Rpb25DbGFzcyA/IHdhbGsoKHZhbHVlID0ge30sIHZhbHVlW1wiXCJdID0gcmVzdWx0LCB2YWx1ZSksIFwiXCIsIGNhbGxiYWNrKSA6IHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnRzW1wicnVuSW5Db250ZXh0XCJdID0gcnVuSW5Db250ZXh0O1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9XG5cbiAgaWYgKGZyZWVFeHBvcnRzICYmICFpc0xvYWRlcikge1xuICAgIC8vIEV4cG9ydCBmb3IgQ29tbW9uSlMgZW52aXJvbm1lbnRzLlxuICAgIHJ1bkluQ29udGV4dChyb290LCBmcmVlRXhwb3J0cyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRXhwb3J0IGZvciB3ZWIgYnJvd3NlcnMgYW5kIEphdmFTY3JpcHQgZW5naW5lcy5cbiAgICB2YXIgbmF0aXZlSlNPTiA9IHJvb3QuSlNPTixcbiAgICAgICAgcHJldmlvdXNKU09OID0gcm9vdFtcIkpTT04zXCJdLFxuICAgICAgICBpc1Jlc3RvcmVkID0gZmFsc2U7XG5cbiAgICB2YXIgSlNPTjMgPSBydW5JbkNvbnRleHQocm9vdCwgKHJvb3RbXCJKU09OM1wiXSA9IHtcbiAgICAgIC8vIFB1YmxpYzogUmVzdG9yZXMgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSBnbG9iYWwgYEpTT05gIG9iamVjdCBhbmRcbiAgICAgIC8vIHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGBKU09OM2Agb2JqZWN0LlxuICAgICAgXCJub0NvbmZsaWN0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1Jlc3RvcmVkKSB7XG4gICAgICAgICAgaXNSZXN0b3JlZCA9IHRydWU7XG4gICAgICAgICAgcm9vdC5KU09OID0gbmF0aXZlSlNPTjtcbiAgICAgICAgICByb290W1wiSlNPTjNcIl0gPSBwcmV2aW91c0pTT047XG4gICAgICAgICAgbmF0aXZlSlNPTiA9IHByZXZpb3VzSlNPTiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04zO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHJvb3QuSlNPTiA9IHtcbiAgICAgIFwicGFyc2VcIjogSlNPTjMucGFyc2UsXG4gICAgICBcInN0cmluZ2lmeVwiOiBKU09OMy5zdHJpbmdpZnlcbiAgICB9O1xuICB9XG5cbiAgLy8gRXhwb3J0IGZvciBhc3luY2hyb25vdXMgbW9kdWxlIGxvYWRlcnMuXG4gIGlmIChpc0xvYWRlcikge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gSlNPTjM7XG4gICAgfSk7XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vc29ja2V0LmlvLXBhcnNlci9+L2pzb24zL2xpYi9qc29uMy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L3NvY2tldC5pby1wYXJzZXIvfi9pc2FycmF5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vc29ja2V0LmlvLXBhcnNlci9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKmdsb2JhbCBCbG9iLEZpbGUqL1xuXG4vKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHNcbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG5cbi8qKlxuICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqIEFueXRoaW5nIHdpdGggYmxvYnMgb3IgZmlsZXMgc2hvdWxkIGJlIGZlZCB0aHJvdWdoIHJlbW92ZUJsb2JzIGJlZm9yZSBjb21pbmdcbiAqIGhlcmUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpe1xuICB2YXIgYnVmZmVycyA9IFtdO1xuICB2YXIgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuXG4gIGZ1bmN0aW9uIF9kZWNvbnN0cnVjdFBhY2tldChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICAgIGlmIChpc0J1ZihkYXRhKSkge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyID0geyBfcGxhY2Vob2xkZXI6IHRydWUsIG51bTogYnVmZmVycy5sZW5ndGggfTtcbiAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHZhciBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdEYXRhW2ldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PSB0eXBlb2YgZGF0YSAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgdmFyIG5ld0RhdGEgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIHBhY2sgPSBwYWNrZXQ7XG4gIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhKTtcbiAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgcmV0dXJuIHtwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnN9O1xufTtcblxuLyoqXG4gKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY29uc3RydWN0ZWQgcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgdmFyIGN1clBsYWNlSG9sZGVyID0gMDtcblxuICBmdW5jdGlvbiBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YSkge1xuICAgIGlmIChkYXRhICYmIGRhdGEuX3BsYWNlaG9sZGVyKSB7XG4gICAgICB2YXIgYnVmID0gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhICYmICdvYmplY3QnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHBhY2tldC5kYXRhID0gX3JlY29uc3RydWN0UGFja2V0KHBhY2tldC5kYXRhKTtcbiAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gIHJldHVybiBwYWNrZXQ7XG59O1xuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHJlbW92ZXMgQmxvYnMgb3IgRmlsZXMgZnJvbSBkYXRhIHZpYVxuICogRmlsZVJlYWRlcidzIHJlYWRBc0FycmF5QnVmZmVyIG1ldGhvZC4gVXNlZCBiZWZvcmUgZW5jb2RpbmdcbiAqIGRhdGEgYXMgbXNncGFjay4gQ2FsbHMgY2FsbGJhY2sgd2l0aCB0aGUgYmxvYmxlc3MgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmVtb3ZlQmxvYnMgPSBmdW5jdGlvbihkYXRhLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBfcmVtb3ZlQmxvYnMob2JqLCBjdXJLZXksIGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIG9iajtcblxuICAgIC8vIGNvbnZlcnQgYW55IGJsb2JcbiAgICBpZiAoKGdsb2JhbC5CbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgIChnbG9iYWwuRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgcGVuZGluZ0Jsb2JzKys7XG5cbiAgICAgIC8vIGFzeW5jIGZpbGVyZWFkZXJcbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7IC8vIHRoaXMucmVzdWx0ID09IGFycmF5YnVmZmVyXG4gICAgICAgIGlmIChjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgY29udGFpbmluZ09iamVjdFtjdXJLZXldID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYmxvYmxlc3NEYXRhID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3RoaW5nIHBlbmRpbmcgaXRzIGNhbGxiYWNrIHRpbWVcbiAgICAgICAgaWYoISAtLXBlbmRpbmdCbG9icykge1xuICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIob2JqKTsgLy8gYmxvYiAtPiBhcnJheWJ1ZmZlclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7IC8vIGhhbmRsZSBhcnJheVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9iaiAmJiAnb2JqZWN0JyA9PSB0eXBlb2Ygb2JqICYmICFpc0J1ZihvYmopKSB7IC8vIGFuZCBvYmplY3RcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBlbmRpbmdCbG9icyA9IDA7XG4gIHZhciBibG9ibGVzc0RhdGEgPSBkYXRhO1xuICBfcmVtb3ZlQmxvYnMoYmxvYmxlc3NEYXRhKTtcbiAgaWYgKCFwZW5kaW5nQmxvYnMpIHtcbiAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L3NvY2tldC5pby1wYXJzZXIvYmluYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMjA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbm1vZHVsZS5leHBvcnRzID0gaXNCdWY7XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIGJ1ZmZlciBvciBhbiBhcnJheWJ1ZmZlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0J1ZihvYmopIHtcbiAgcmV0dXJuIChnbG9iYWwuQnVmZmVyICYmIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAgICAgIChnbG9iYWwuQXJyYXlCdWZmZXIgJiYgb2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L3NvY2tldC5pby1wYXJzZXIvaXMtYnVmZmVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZWlvID0gcmVxdWlyZSgnZW5naW5lLmlvLWNsaWVudCcpO1xudmFyIFNvY2tldCA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDptYW5hZ2VyJyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbnZhciBCYWNrb2ZmID0gcmVxdWlyZSgnYmFja28yJyk7XG5cbi8qKlxuICogSUU2KyBoYXNPd25Qcm9wZXJ0eVxuICovXG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyO1xuXG4vKipcbiAqIGBNYW5hZ2VyYCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5naW5lIGluc3RhbmNlIG9yIGVuZ2luZSB1cmkvb3B0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gTWFuYWdlcih1cmksIG9wdHMpe1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFuYWdlcikpIHJldHVybiBuZXcgTWFuYWdlcih1cmksIG9wdHMpO1xuICBpZiAodXJpICYmICgnb2JqZWN0JyA9PSB0eXBlb2YgdXJpKSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCAnL3NvY2tldC5pbyc7XG4gIHRoaXMubnNwcyA9IHt9O1xuICB0aGlzLnN1YnMgPSBbXTtcbiAgdGhpcy5vcHRzID0gb3B0cztcbiAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKClcbiAgfSk7XG4gIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMudXJpID0gdXJpO1xuICB0aGlzLmNvbm5lY3RpbmcgPSBbXTtcbiAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBmYWxzZTtcbiAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgdGhpcy5lbmNvZGVyID0gbmV3IHBhcnNlci5FbmNvZGVyKCk7XG4gIHRoaXMuZGVjb2RlciA9IG5ldyBwYXJzZXIuRGVjb2RlcigpO1xuICB0aGlzLmF1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gIGlmICh0aGlzLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBQcm9wYWdhdGUgZ2l2ZW4gZXZlbnQgdG8gc29ja2V0cyBhbmQgZW1pdCBvbiBgdGhpc2BcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0QWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uZW1pdC5hcHBseSh0aGlzLm5zcHNbbnNwXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIGBzb2NrZXQuaWRgIG9mIGFsbCBzb2NrZXRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU29ja2V0SWRzID0gZnVuY3Rpb24oKXtcbiAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLm5zcHMsIG5zcCkpIHtcbiAgICAgIHRoaXMubnNwc1tuc3BdLmlkID0gdGhpcy5lbmdpbmUuaWQ7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihNYW5hZ2VyLnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHJlY29ubmVjdGlvbmAgY29uZmlnLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJ1ZS9mYWxzZSBpZiBpdCBzaG91bGQgYXV0b21hdGljYWxseSByZWNvbm5lY3RcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uID0gZnVuY3Rpb24odil7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWZvcmUgZ2l2aW5nIHVwXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkF0dGVtcHRzID0gZnVuY3Rpb24odil7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5ID0gZnVuY3Rpb24odil7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWluKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbk1hbmFnZXIucHJvdG90eXBlLnJhbmRvbWl6YXRpb25GYWN0b3IgPSBmdW5jdGlvbih2KXtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0Sml0dGVyKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgbWF4aW11bSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5TWF4ID0gZnVuY3Rpb24odil7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWF4KHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29ubmVjdGlvbiB0aW1lb3V0LiBgZmFsc2VgIHRvIGRpc2FibGVcbiAqXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbih2KXtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgdGhpcy5fdGltZW91dCA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm1heWJlUmVjb25uZWN0T25PcGVuID0gZnVuY3Rpb24oKSB7XG4gIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgaWYgKCF0aGlzLnJlY29ubmVjdGluZyAmJiB0aGlzLl9yZWNvbm5lY3Rpb24gJiYgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgIHRoaXMucmVjb25uZWN0KCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25hbCwgY2FsbGJhY2tcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub3BlbiA9XG5NYW5hZ2VyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24oZm4pe1xuICBkZWJ1ZygncmVhZHlTdGF0ZSAlcycsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIGlmICh+dGhpcy5yZWFkeVN0YXRlLmluZGV4T2YoJ29wZW4nKSkgcmV0dXJuIHRoaXM7XG5cbiAgZGVidWcoJ29wZW5pbmcgJXMnLCB0aGlzLnVyaSk7XG4gIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcblxuICAvLyBlbWl0IGBvcGVuYFxuICB2YXIgb3BlblN1YiA9IG9uKHNvY2tldCwgJ29wZW4nLCBmdW5jdGlvbigpIHtcbiAgICBzZWxmLm9ub3BlbigpO1xuICAgIGZuICYmIGZuKCk7XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfZXJyb3JgXG4gIHZhciBlcnJvclN1YiA9IG9uKHNvY2tldCwgJ2Vycm9yJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgZGVidWcoJ2Nvbm5lY3RfZXJyb3InKTtcbiAgICBzZWxmLmNsZWFudXAoKTtcbiAgICBzZWxmLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgICBzZWxmLmVtaXRBbGwoJ2Nvbm5lY3RfZXJyb3InLCBkYXRhKTtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgIGVyci5kYXRhID0gZGF0YTtcbiAgICAgIGZuKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBlbWl0IGBjb25uZWN0X3RpbWVvdXRgXG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuXG4gICAgLy8gc2V0IHRpbWVyXG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgZGVidWcoJ2Nvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWQnLCB0aW1lb3V0KTtcbiAgICAgIG9wZW5TdWIuZGVzdHJveSgpO1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCAndGltZW91dCcpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdjb25uZWN0X3RpbWVvdXQnLCB0aW1lb3V0KTtcbiAgICB9LCB0aW1lb3V0KTtcblxuICAgIHRoaXMuc3Vicy5wdXNoKHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnN1YnMucHVzaChvcGVuU3ViKTtcbiAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbigpe1xuICBkZWJ1Zygnb3BlbicpO1xuXG4gIC8vIGNsZWFyIG9sZCBzdWJzXG4gIHRoaXMuY2xlYW51cCgpO1xuXG4gIC8vIG1hcmsgYXMgb3BlblxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xuXG4gIC8vIGFkZCBuZXcgc3Vic1xuICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2RhdGEnLCBiaW5kKHRoaXMsICdvbmRhdGEnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwaW5nJywgYmluZCh0aGlzLCAnb25waW5nJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAncG9uZycsIGJpbmQodGhpcywgJ29ucG9uZycpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Vycm9yJywgYmluZCh0aGlzLCAnb25lcnJvcicpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHRoaXMuZGVjb2RlciwgJ2RlY29kZWQnLCBiaW5kKHRoaXMsICdvbmRlY29kZWQnKSkpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25waW5nID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5sYXN0UGluZyA9IG5ldyBEYXRlO1xuICB0aGlzLmVtaXRBbGwoJ3BpbmcnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25wb25nID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5lbWl0QWxsKCdwb25nJywgbmV3IERhdGUgLSB0aGlzLmxhc3RQaW5nKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmRhdGEgPSBmdW5jdGlvbihkYXRhKXtcbiAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kZWNvZGVkID0gZnVuY3Rpb24ocGFja2V0KSB7XG4gIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbihlcnIpe1xuICBkZWJ1ZygnZXJyb3InLCBlcnIpO1xuICB0aGlzLmVtaXRBbGwoJ2Vycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnNvY2tldCA9IGZ1bmN0aW9uKG5zcCl7XG4gIHZhciBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgaWYgKCFzb2NrZXQpIHtcbiAgICBzb2NrZXQgPSBuZXcgU29ja2V0KHRoaXMsIG5zcCk7XG4gICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNvY2tldC5vbignY29ubmVjdGluZycsIG9uQ29ubmVjdGluZyk7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24oKXtcbiAgICAgIHNvY2tldC5pZCA9IHNlbGYuZW5naW5lLmlkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHtcbiAgICAgIC8vIG1hbnVhbGx5IGNhbGwgaGVyZSBzaW5jZSBjb25uZWN0aW5nIGV2bmV0IGlzIGZpcmVkIGJlZm9yZSBsaXN0ZW5pbmdcbiAgICAgIG9uQ29ubmVjdGluZygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdGluZygpIHtcbiAgICBpZiAoIX5pbmRleE9mKHNlbGYuY29ubmVjdGluZywgc29ja2V0KSkge1xuICAgICAgc2VsZi5jb25uZWN0aW5nLnB1c2goc29ja2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc29ja2V0O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAqXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0XG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHNvY2tldCl7XG4gIHZhciBpbmRleCA9IGluZGV4T2YodGhpcy5jb25uZWN0aW5nLCBzb2NrZXQpO1xuICBpZiAofmluZGV4KSB0aGlzLmNvbm5lY3Rpbmcuc3BsaWNlKGluZGV4LCAxKTtcbiAgaWYgKHRoaXMuY29ubmVjdGluZy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLmNsb3NlKCk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpe1xuICBkZWJ1Zygnd3JpdGluZyBwYWNrZXQgJWonLCBwYWNrZXQpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCFzZWxmLmVuY29kaW5nKSB7XG4gICAgLy8gZW5jb2RlLCB0aGVuIHdyaXRlIHRvIGVuZ2luZSB3aXRoIHJlc3VsdFxuICAgIHNlbGYuZW5jb2RpbmcgPSB0cnVlO1xuICAgIHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0LCBmdW5jdGlvbihlbmNvZGVkUGFja2V0cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxmLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgc2VsZi5lbmNvZGluZyA9IGZhbHNlO1xuICAgICAgc2VsZi5wcm9jZXNzUGFja2V0UXVldWUoKTtcbiAgICB9KTtcbiAgfSBlbHNlIHsgLy8gYWRkIHBhY2tldCB0byB0aGUgcXVldWVcbiAgICBzZWxmLnBhY2tldEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cbn07XG5cbi8qKlxuICogSWYgcGFja2V0IGJ1ZmZlciBpcyBub24tZW1wdHksIGJlZ2lucyBlbmNvZGluZyB0aGVcbiAqIG5leHQgcGFja2V0IGluIGxpbmUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucHJvY2Vzc1BhY2tldFF1ZXVlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnBhY2tldEJ1ZmZlci5sZW5ndGggPiAwICYmICF0aGlzLmVuY29kaW5nKSB7XG4gICAgdmFyIHBhY2sgPSB0aGlzLnBhY2tldEJ1ZmZlci5zaGlmdCgpO1xuICAgIHRoaXMucGFja2V0KHBhY2spO1xuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbigpe1xuICBkZWJ1ZygnY2xlYW51cCcpO1xuXG4gIHZhciBzdWI7XG4gIHdoaWxlIChzdWIgPSB0aGlzLnN1YnMuc2hpZnQoKSkgc3ViLmRlc3Ryb3koKTtcblxuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB0aGlzLmVuY29kaW5nID0gZmFsc2U7XG4gIHRoaXMubGFzdFBpbmcgPSBudWxsO1xuXG4gIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG59O1xuXG4vKipcbiAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9XG5NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKXtcbiAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgaWYgKCdvcGVuaW5nJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBgb25jbG9zZWAgd2lsbCBub3QgZmlyZSBiZWNhdXNlXG4gICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgIHRoaXMuY2xlYW51cCgpO1xuICB9XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgaWYgKHRoaXMuZW5naW5lKSB0aGlzLmVuZ2luZS5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uKHJlYXNvbil7XG4gIGRlYnVnKCdvbmNsb3NlJyk7XG5cbiAgdGhpcy5jbGVhbnVwKCk7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbik7XG5cbiAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLnJlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpIHJldHVybiB0aGlzO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgZGVidWcoJ3JlY29ubmVjdCBmYWlsZWQnKTtcbiAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdF9mYWlsZWQnKTtcbiAgICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHZhciBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgIGRlYnVnKCd3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHQnLCBkZWxheSk7XG5cbiAgICB0aGlzLnJlY29ubmVjdGluZyA9IHRydWU7XG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICBkZWJ1ZygnYXR0ZW1wdGluZyByZWNvbm5lY3QnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2F0dGVtcHQnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RpbmcnLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuXG4gICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgc2VsZi5vcGVuKGZ1bmN0aW9uKGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IGF0dGVtcHQgZXJyb3InKTtcbiAgICAgICAgICBzZWxmLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfZXJyb3InLCBlcnIuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBzdWNjZXNzJyk7XG4gICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkZWxheSk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucmVjb25uZWN0ID0gZnVuY3Rpb24oKXtcbiAgdmFyIGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnVwZGF0ZVNvY2tldElkcygpO1xuICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdCcsIGF0dGVtcHQpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxubW9kdWxlLmV4cG9ydHMgPSAgcmVxdWlyZSgnLi9saWIvJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG5cbi8qKlxuICogRXhwb3J0cyBwYXJzZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNldXJpID0gcmVxdWlyZSgncGFyc2V1cmknKTtcbnZhciBwYXJzZWpzb24gPSByZXF1aXJlKCdwYXJzZWpzb24nKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIE5vb3AgZnVuY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe31cblxuLyoqXG4gKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0KHVyaSwgb3B0cyl7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTb2NrZXQpKSByZXR1cm4gbmV3IFNvY2tldCh1cmksIG9wdHMpO1xuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIGlmICh1cmkgJiYgJ29iamVjdCcgPT0gdHlwZW9mIHVyaSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gbnVsbDtcbiAgfVxuXG4gIGlmICh1cmkpIHtcbiAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PSAnaHR0cHMnIHx8IHVyaS5wcm90b2NvbCA9PSAnd3NzJztcbiAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICB9IGVsc2UgaWYgKG9wdHMuaG9zdCkge1xuICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gIH1cblxuICB0aGlzLnNlY3VyZSA9IG51bGwgIT0gb3B0cy5zZWN1cmUgPyBvcHRzLnNlY3VyZSA6XG4gICAgKGdsb2JhbC5sb2NhdGlvbiAmJiAnaHR0cHM6JyA9PSBsb2NhdGlvbi5wcm90b2NvbCk7XG5cbiAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICBvcHRzLnBvcnQgPSB0aGlzLnNlY3VyZSA/ICc0NDMnIDogJzgwJztcbiAgfVxuXG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZSB8fFxuICAgIChnbG9iYWwubG9jYXRpb24gPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0IHx8IChnbG9iYWwubG9jYXRpb24gJiYgbG9jYXRpb24ucG9ydCA/XG4gICAgICAgbG9jYXRpb24ucG9ydCA6XG4gICAgICAgKHRoaXMuc2VjdXJlID8gNDQzIDogODApKTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnkgfHwge307XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgdGhpcy5xdWVyeSkgdGhpcy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMucXVlcnkpO1xuICB0aGlzLnVwZ3JhZGUgPSBmYWxzZSAhPT0gb3B0cy51cGdyYWRlO1xuICB0aGlzLnBhdGggPSAob3B0cy5wYXRoIHx8ICcvZW5naW5lLmlvJykucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJztcbiAgdGhpcy5mb3JjZUpTT05QID0gISFvcHRzLmZvcmNlSlNPTlA7XG4gIHRoaXMuanNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcbiAgdGhpcy5mb3JjZUJhc2U2NCA9ICEhb3B0cy5mb3JjZUJhc2U2NDtcbiAgdGhpcy5lbmFibGVzWERSID0gISFvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtIHx8ICd0JztcbiAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbJ3BvbGxpbmcnLCAnd2Vic29ja2V0J107XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gIHRoaXMucG9saWN5UG9ydCA9IG9wdHMucG9saWN5UG9ydCB8fCA4NDM7XG4gIHRoaXMucmVtZW1iZXJVcGdyYWRlID0gb3B0cy5yZW1lbWJlclVwZ3JhZGUgfHwgZmFsc2U7XG4gIHRoaXMuYmluYXJ5VHlwZSA9IG51bGw7XG4gIHRoaXMub25seUJpbmFyeVVwZ3JhZGVzID0gb3B0cy5vbmx5QmluYXJ5VXBncmFkZXM7XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBmYWxzZSAhPT0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSA/IChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHt9KSA6IGZhbHNlO1xuXG4gIGlmICh0cnVlID09PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlKSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0ge307XG4gIGlmICh0aGlzLnBlck1lc3NhZ2VEZWZsYXRlICYmIG51bGwgPT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCA9IDEwMjQ7XG4gIH1cblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeCB8fCBudWxsO1xuICB0aGlzLmtleSA9IG9wdHMua2V5IHx8IG51bGw7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZSB8fCBudWxsO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQgfHwgbnVsbDtcbiAgdGhpcy5jYSA9IG9wdHMuY2EgfHwgbnVsbDtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzIHx8IG51bGw7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuICBpZiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwpIHtcbiAgICBpZiAob3B0cy5leHRyYUhlYWRlcnMgJiYgT2JqZWN0LmtleXMob3B0cy5leHRyYUhlYWRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5vcGVuKCk7XG59XG5cblNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cblNvY2tldC5Tb2NrZXQgPSBTb2NrZXQ7XG5Tb2NrZXQuVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi90cmFuc3BvcnQnKTtcblNvY2tldC50cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzJyk7XG5Tb2NrZXQucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgdHJhbnNwb3J0IG9mIHRoZSBnaXZlbiB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQHJldHVybiB7VHJhbnNwb3J0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jcmVhdGVUcmFuc3BvcnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICB2YXIgcXVlcnkgPSBjbG9uZSh0aGlzLnF1ZXJ5KTtcblxuICAvLyBhcHBlbmQgZW5naW5lLmlvIHByb3RvY29sIGlkZW50aWZpZXJcbiAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gIC8vIHRyYW5zcG9ydCBuYW1lXG4gIHF1ZXJ5LnRyYW5zcG9ydCA9IG5hbWU7XG5cbiAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gIHZhciB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c1tuYW1lXSh7XG4gICAgYWdlbnQ6IHRoaXMuYWdlbnQsXG4gICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgcG9ydDogdGhpcy5wb3J0LFxuICAgIHNlY3VyZTogdGhpcy5zZWN1cmUsXG4gICAgcGF0aDogdGhpcy5wYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBmb3JjZUpTT05QOiB0aGlzLmZvcmNlSlNPTlAsXG4gICAganNvbnA6IHRoaXMuanNvbnAsXG4gICAgZm9yY2VCYXNlNjQ6IHRoaXMuZm9yY2VCYXNlNjQsXG4gICAgZW5hYmxlc1hEUjogdGhpcy5lbmFibGVzWERSLFxuICAgIHRpbWVzdGFtcFJlcXVlc3RzOiB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzLFxuICAgIHRpbWVzdGFtcFBhcmFtOiB0aGlzLnRpbWVzdGFtcFBhcmFtLFxuICAgIHBvbGljeVBvcnQ6IHRoaXMucG9saWN5UG9ydCxcbiAgICBzb2NrZXQ6IHRoaXMsXG4gICAgcGZ4OiB0aGlzLnBmeCxcbiAgICBrZXk6IHRoaXMua2V5LFxuICAgIHBhc3NwaHJhc2U6IHRoaXMucGFzc3BocmFzZSxcbiAgICBjZXJ0OiB0aGlzLmNlcnQsXG4gICAgY2E6IHRoaXMuY2EsXG4gICAgY2lwaGVyczogdGhpcy5jaXBoZXJzLFxuICAgIHJlamVjdFVuYXV0aG9yaXplZDogdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRoaXMucGVyTWVzc2FnZURlZmxhdGUsXG4gICAgZXh0cmFIZWFkZXJzOiB0aGlzLmV4dHJhSGVhZGVyc1xuICB9KTtcblxuICByZXR1cm4gdHJhbnNwb3J0O1xufTtcblxuZnVuY3Rpb24gY2xvbmUgKG9iaikge1xuICB2YXIgbyA9IHt9O1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIG9baV0gPSBvYmpbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIHRyYW5zcG9ydCB0byB1c2UgYW5kIHN0YXJ0cyBwcm9iZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuU29ja2V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHJhbnNwb3J0O1xuICBpZiAodGhpcy5yZW1lbWJlclVwZ3JhZGUgJiYgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyAmJiB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZignd2Vic29ja2V0JykgIT0gLTEpIHtcbiAgICB0cmFuc3BvcnQgPSAnd2Vic29ja2V0JztcbiAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgJ05vIHRyYW5zcG9ydHMgYXZhaWxhYmxlJyk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgfVxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG5cbiAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICB0cnkge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cmFuc3BvcnQub3BlbigpO1xuICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFRyYW5zcG9ydCA9IGZ1bmN0aW9uKHRyYW5zcG9ydCl7XG4gIGRlYnVnKCdzZXR0aW5nIHRyYW5zcG9ydCAlcycsIHRyYW5zcG9ydC5uYW1lKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgIGRlYnVnKCdjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXMnLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgdHJhbnNwb3J0XG4gIC5vbignZHJhaW4nLCBmdW5jdGlvbigpe1xuICAgIHNlbGYub25EcmFpbigpO1xuICB9KVxuICAub24oJ3BhY2tldCcsIGZ1bmN0aW9uKHBhY2tldCl7XG4gICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICB9KVxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZSl7XG4gICAgc2VsZi5vbkVycm9yKGUpO1xuICB9KVxuICAub24oJ2Nsb3NlJywgZnVuY3Rpb24oKXtcbiAgICBzZWxmLm9uQ2xvc2UoJ3RyYW5zcG9ydCBjbG9zZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUHJvYmVzIGEgdHJhbnNwb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wcm9iZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSlcbiAgICAsIGZhaWxlZCA9IGZhbHNlXG4gICAgLCBzZWxmID0gdGhpcztcblxuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gb25UcmFuc3BvcnRPcGVuKCl7XG4gICAgaWYgKHNlbGYub25seUJpbmFyeVVwZ3JhZGVzKSB7XG4gICAgICB2YXIgdXBncmFkZUxvc2VzQmluYXJ5ID0gIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgc2VsZi50cmFuc3BvcnQuc3VwcG9ydHNCaW5hcnk7XG4gICAgICBmYWlsZWQgPSBmYWlsZWQgfHwgdXBncmFkZUxvc2VzQmluYXJ5O1xuICAgIH1cbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAncGluZycsIGRhdGE6ICdwcm9iZScgfV0pO1xuICAgIHRyYW5zcG9ydC5vbmNlKCdwYWNrZXQnLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICBpZiAoJ3BvbmcnID09IG1zZy50eXBlICYmICdwcm9iZScgPT0gbXNnLmRhdGEpIHtcbiAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgcG9uZycsIG5hbWUpO1xuICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkaW5nJywgdHJhbnNwb3J0KTtcbiAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICd3ZWJzb2NrZXQnID09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHNlbGYudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBzZWxmLnRyYW5zcG9ydC5wYXVzZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgIGlmICgnY2xvc2VkJyA9PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBkZWJ1ZygnY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0Jyk7XG5cbiAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICBzZWxmLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICd1cGdyYWRlJyB9XSk7XG4gICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlJywgdHJhbnNwb3J0KTtcbiAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgIHNlbGYudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5mbHVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcicpO1xuICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCgpIHtcbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAvLyBBbnkgY2FsbGJhY2sgY2FsbGVkIGJ5IHRyYW5zcG9ydCBzaG91bGQgYmUgaWdub3JlZCBzaW5jZSBub3dcbiAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgY2xlYW51cCgpO1xuXG4gICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgfVxuXG4gIC8vSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmVycm9yKGVycikge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3I6ICcgKyBlcnIpO1xuICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlKCl7XG4gICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gIH1cblxuICAvL1doZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmNsb3NlKCl7XG4gICAgb25lcnJvcihcInNvY2tldCBjbG9zZWRcIik7XG4gIH1cblxuICAvL1doZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9udXBncmFkZSh0byl7XG4gICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgfVxuICB9XG5cbiAgLy9SZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gIGZ1bmN0aW9uIGNsZWFudXAoKXtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuICB9XG5cbiAgdHJhbnNwb3J0Lm9uY2UoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICB0cmFuc3BvcnQub25jZSgnZXJyb3InLCBvbmVycm9yKTtcbiAgdHJhbnNwb3J0Lm9uY2UoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgdGhpcy5vbmNlKCdjbG9zZScsIG9uY2xvc2UpO1xuICB0aGlzLm9uY2UoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG5cbiAgdHJhbnNwb3J0Lm9wZW4oKTtcblxufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdzb2NrZXQgb3BlbicpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgdGhpcy5mbHVzaCgpO1xuXG4gIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgLy8gbGlzdGVuZXIgYWxyZWFkeSBjbG9zZWQgdGhlIHNvY2tldFxuICBpZiAoJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnVwZ3JhZGUgJiYgdGhpcy50cmFuc3BvcnQucGF1c2UpIHtcbiAgICBkZWJ1Zygnc3RhcnRpbmcgdXBncmFkZSBwcm9iZXMnKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGVzIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25QYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIGlmICgnb3BlbmluZycgPT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG5cbiAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgdGhpcy5lbWl0KCdoZWFydGJlYXQnKTtcblxuICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ29wZW4nOlxuICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKHBhcnNlanNvbihwYWNrZXQuZGF0YSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9uZyc6XG4gICAgICAgIHRoaXMuc2V0UGluZygpO1xuICAgICAgICB0aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignc2VydmVyIGVycm9yJyk7XG4gICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgcGFja2V0LmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IYW5kc2hha2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2hhbmRzaGFrZScsIGRhdGEpO1xuICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gIHRoaXMub25PcGVuKCk7XG4gIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgaWYgICgnY2xvc2VkJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgdGhpcy5zZXRQaW5nKCk7XG5cbiAgLy8gUHJvbG9uZyBsaXZlbmVzcyBvZiBzb2NrZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xuICB0aGlzLm9uKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbn07XG5cbi8qKlxuICogUmVzZXRzIHBpbmcgdGltZW91dC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uSGVhcnRiZWF0ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCdjbG9zZWQnID09IHNlbGYucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIHNlbGYub25DbG9zZSgncGluZyB0aW1lb3V0Jyk7XG4gIH0sIHRpbWVvdXQgfHwgKHNlbGYucGluZ0ludGVydmFsICsgc2VsZi5waW5nVGltZW91dCkpO1xufTtcblxuLyoqXG4gKiBQaW5ncyBzZXJ2ZXIgZXZlcnkgYHRoaXMucGluZ0ludGVydmFsYCBhbmQgZXhwZWN0cyByZXNwb25zZVxuICogd2l0aGluIGB0aGlzLnBpbmdUaW1lb3V0YCBvciBjbG9zZXMgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2xlYXJUaW1lb3V0KHNlbGYucGluZ0ludGVydmFsVGltZXIpO1xuICBzZWxmLnBpbmdJbnRlcnZhbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyaXRpbmcgcGluZyBwYWNrZXQgLSBleHBlY3RpbmcgcG9uZyB3aXRoaW4gJXNtcycsIHNlbGYucGluZ1RpbWVvdXQpO1xuICAgIHNlbGYucGluZygpO1xuICAgIHNlbGYub25IZWFydGJlYXQoc2VsZi5waW5nVGltZW91dCk7XG4gIH0sIHNlbGYucGluZ0ludGVydmFsKTtcbn07XG5cbi8qKlxuKiBTZW5kcyBhIHBpbmcgcGFja2V0LlxuKlxuKiBAYXBpIHByaXZhdGVcbiovXG5cblNvY2tldC5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnNlbmRQYWNrZXQoJ3BpbmcnLCBmdW5jdGlvbigpe1xuICAgIHNlbGYuZW1pdCgncGluZycpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRHJhaW4gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKTtcblxuICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAvLyBhbmQgYSBub256ZXJvIHByZXZCdWZmZXJMZW4gY291bGQgY2F1c2UgcHJvYmxlbXMgb24gYGRyYWluYFxuICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgIHRoaXMuZW1pdCgnZHJhaW4nKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ2Nsb3NlZCcgIT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgIXRoaXMudXBncmFkaW5nICYmIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgZGVidWcoJ2ZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0JywgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGxlbmd0aCBvZiB3cml0ZUJ1ZmZlclxuICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgIHRoaXMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZW5kcyBhIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUud3JpdGUgPVxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgdGhpcy5zZW5kUGFja2V0KCdtZXNzYWdlJywgbXNnLCBvcHRpb25zLCBmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFja2V0IHR5cGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNlbmRQYWNrZXQgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgaWYoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICBmbiA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBpZiAoJ2Nsb3NpbmcnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2VkJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gIHZhciBwYWNrZXQgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkYXRhOiBkYXRhLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfTtcbiAgdGhpcy5lbWl0KCdwYWNrZXRDcmVhdGUnLCBwYWNrZXQpO1xuICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgaWYgKGZuKSB0aGlzLm9uY2UoJ2ZsdXNoJywgZm4pO1xuICB0aGlzLmZsdXNoKCk7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NpbmcnO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZ3JhZGluZykge1xuICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoJ2ZvcmNlZCBjbG9zZScpO1xuICAgIGRlYnVnKCdzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlJyk7XG4gICAgc2VsZi50cmFuc3BvcnQuY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXBBbmRDbG9zZSgpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIGNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB3YWl0Rm9yVXBncmFkZSgpIHtcbiAgICAvLyB3YWl0IGZvciB1cGdyYWRlIHRvIGZpbmlzaCBzaW5jZSB3ZSBjYW4ndCBzZW5kIHBhY2tldHMgd2hpbGUgcGF1c2luZyBhIHRyYW5zcG9ydFxuICAgIHNlbGYub25jZSgndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgc2VsZi5vbmNlKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgZGVidWcoJ3NvY2tldCBlcnJvciAlaicsIGVycik7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMub25DbG9zZSgndHJhbnNwb3J0IGVycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChyZWFzb24sIGRlc2MpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2luZycgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBjbGVhciB0aW1lcnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nSW50ZXJ2YWxUaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoJ2Nsb3NlJyk7XG5cbiAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG5cbiAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgLy8gc2V0IHJlYWR5IHN0YXRlXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG5cbiAgICAvLyBjbGVhciBzZXNzaW9uIGlkXG4gICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAvLyBncmFiIHRoZSBidWZmZXJzIG9uIGBjbG9zZWAgZXZlbnRcbiAgICBzZWxmLndyaXRlQnVmZmVyID0gW107XG4gICAgc2VsZi5wcmV2QnVmZmVyTGVuID0gMDtcbiAgfVxufTtcblxuLyoqXG4gKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXIgdXBncmFkZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICpcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmZpbHRlclVwZ3JhZGVzID0gZnVuY3Rpb24gKHVwZ3JhZGVzKSB7XG4gIHZhciBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBqID0gdXBncmFkZXMubGVuZ3RoOyBpPGo7IGkrKykge1xuICAgIGlmICh+aW5kZXgodGhpcy50cmFuc3BvcnRzLCB1cGdyYWRlc1tpXSkpIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG52YXIgWEhSID0gcmVxdWlyZSgnLi9wb2xsaW5nLXhocicpO1xudmFyIEpTT05QID0gcmVxdWlyZSgnLi9wb2xsaW5nLWpzb25wJyk7XG52YXIgd2Vic29ja2V0ID0gcmVxdWlyZSgnLi93ZWJzb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnQgdHJhbnNwb3J0cy5cbiAqL1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nKG9wdHMpe1xuICB2YXIgeGhyO1xuICB2YXIgeGQgPSBmYWxzZTtcbiAgdmFyIHhzID0gZmFsc2U7XG4gIHZhciBqc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuXG4gIGlmIChnbG9iYWwubG9jYXRpb24pIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcG9ydCAhPSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmICgnb3BlbicgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoJ0pTT05QIGRpc2FibGVkJyk7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGJyb3dzZXIgc2hpbSBmb3IgeG1saHR0cHJlcXVlc3QgbW9kdWxlXG52YXIgaGFzQ09SUyA9IHJlcXVpcmUoJ2hhcy1jb3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICB2YXIgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICB2YXIgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgdmFyIGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gIHRyeSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICYmICF4c2NoZW1lICYmIGVuYWJsZXNYRFIpIHtcbiAgICAgIHJldHVybiBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIGlmICgheGRvbWFpbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgfSBjYXRjaChlKSB7IH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3htbGh0dHByZXF1ZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKlxuICogTG9naWMgYm9ycm93ZWQgZnJvbSBNb2Rlcm5penI6XG4gKlxuICogICAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9jb3JzLmpzXG4gKi9cblxudHJ5IHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gaWYgWE1MSHR0cCBzdXBwb3J0IGlzIGRpc2FibGVkIGluIElFIHRoZW4gaXQgd2lsbCB0aHJvd1xuICAvLyB3aGVuIHRyeWluZyB0byBjcmVhdGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vaGFzLWNvcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBYSFI7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBFbXB0eSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCl7fVxuXG4vKipcbiAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFhIUihvcHRzKXtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gIGlmIChnbG9iYWwubG9jYXRpb24pIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB0aGlzLnhkID0gb3B0cy5ob3N0bmFtZSAhPSBnbG9iYWwubG9jYXRpb24uaG9zdG5hbWUgfHxcbiAgICAgIHBvcnQgIT0gb3B0cy5wb3J0O1xuICAgIHRoaXMueHMgPSBvcHRzLnNlY3VyZSAhPSBpc1NTTDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoWEhSLCBQb2xsaW5nKTtcblxuLyoqXG4gKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gKi9cblxuWEhSLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24ob3B0cyl7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBvcHRzLnVyaSA9IHRoaXMudXJpKCk7XG4gIG9wdHMueGQgPSB0aGlzLnhkO1xuICBvcHRzLnhzID0gdGhpcy54cztcbiAgb3B0cy5hZ2VudCA9IHRoaXMuYWdlbnQgfHwgZmFsc2U7XG4gIG9wdHMuc3VwcG9ydHNCaW5hcnkgPSB0aGlzLnN1cHBvcnRzQmluYXJ5O1xuICBvcHRzLmVuYWJsZXNYRFIgPSB0aGlzLmVuYWJsZXNYRFI7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMuZXh0cmFIZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG9wdHMpO1xufTtcblxuLyoqXG4gKiBTZW5kcyBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZuKXtcbiAgdmFyIGlzQmluYXJ5ID0gdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnICYmIGRhdGEgIT09IHVuZGVmaW5lZDtcbiAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCh7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhLCBpc0JpbmFyeTogaXNCaW5hcnkgfSk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdzdWNjZXNzJywgZm4pO1xuICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKXtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb3N0IGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMuc2VuZFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uKCl7XG4gIGRlYnVnKCd4aHIgcG9sbCcpO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdkYXRhJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgc2VsZi5vbkRhdGEoZGF0YSk7XG4gIH0pO1xuICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKXtcbiAgICBzZWxmLm9uRXJyb3IoJ3hociBwb2xsIGVycm9yJywgZXJyKTtcbiAgfSk7XG4gIHRoaXMucG9sbFhociA9IHJlcTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3Qob3B0cyl7XG4gIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgJ0dFVCc7XG4gIHRoaXMudXJpID0gb3B0cy51cmk7XG4gIHRoaXMueGQgPSAhIW9wdHMueGQ7XG4gIHRoaXMueHMgPSAhIW9wdHMueHM7XG4gIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9IG9wdHMuZGF0YSA/IG9wdHMuZGF0YSA6IG51bGw7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50O1xuICB0aGlzLmlzQmluYXJ5ID0gb3B0cy5pc0JpbmFyeTtcbiAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IG9wdHMuc3VwcG9ydHNCaW5hcnk7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgWEhSIG9iamVjdCBhbmQgc2VuZHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oKXtcbiAgdmFyIG9wdHMgPSB7IGFnZW50OiB0aGlzLmFnZW50LCB4ZG9tYWluOiB0aGlzLnhkLCB4c2NoZW1lOiB0aGlzLnhzLCBlbmFibGVzWERSOiB0aGlzLmVuYWJsZXNYRFIgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgdmFyIHhociA9IHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdHJ5IHtcbiAgICBkZWJ1ZygneGhyIG9wZW4gJXM6ICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJpKTtcbiAgICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmksIHRoaXMuYXN5bmMpO1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICAgIC8vIFRoaXMgaGFzIHRvIGJlIGRvbmUgYWZ0ZXIgb3BlbiBiZWNhdXNlIEZpcmVmb3ggaXMgc3R1cGlkXG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEzMjE2OTAzL2dldC1iaW5hcnktZGF0YS13aXRoLXhtbGh0dHByZXF1ZXN0LWluLWEtZmlyZWZveC1leHRlbnNpb25cbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIH1cblxuICAgIGlmICgnUE9TVCcgPT0gdGhpcy5tZXRob2QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmlzQmluYXJ5KSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIC8vIGllNiBjaGVja1xuICAgIGlmICgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHNlbGYub25FcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgICAgICBpZiAoMjAwID09IHhoci5zdGF0dXMgfHwgMTIyMyA9PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yKHhoci5zdGF0dXMpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlYnVnKCd4aHIgZGF0YSAlcycsIHRoaXMuZGF0YSk7XG4gICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmaHJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgIH0sIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbigpe1xuICB0aGlzLmVtaXQoJ3N1Y2Nlc3MnKTtcbiAgdGhpcy5jbGVhbnVwKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCBpZiB3ZSBoYXZlIGRhdGEuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24oZGF0YSl7XG4gIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpO1xuICB0aGlzLm9uU3VjY2VzcygpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24oZXJyKXtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMuY2xlYW51cCh0cnVlKTtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGhvdXNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbihmcm9tRXJyb3Ipe1xuICBpZiAoJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHhtbGh0dHByZXF1ZXN0XG4gIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICB9IGVsc2Uge1xuICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICB9XG5cbiAgaWYgKGZyb21FcnJvcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgIH0gY2F0Y2goZSkge31cbiAgfVxuXG4gIGlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICBkZWxldGUgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XTtcbiAgfVxuXG4gIHRoaXMueGhyID0gbnVsbDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gbG9hZC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbigpe1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudFR5cGU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnRUeXBlID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpLnNwbGl0KCc7JylbMF07XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICBpZiAoY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheSh0aGlzLnhoci5yZXNwb25zZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdmFyIHVpOEFyciA9IG5ldyBVaW50OEFycmF5KHRoaXMueGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB2YXIgZGF0YUFycmF5ID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaWR4ID0gMCwgbGVuZ3RoID0gdWk4QXJyLmxlbmd0aDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgZGF0YUFycmF5LnB1c2godWk4QXJyW2lkeF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGRhdGFBcnJheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLm9uRXJyb3IoZSk7XG4gIH1cbiAgaWYgKG51bGwgIT0gZGF0YSkge1xuICAgIHRoaXMub25EYXRhKGRhdGEpO1xuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGl0IGhhcyBYRG9tYWluUmVxdWVzdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5oYXNYRFIgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBnbG9iYWwuWERvbWFpblJlcXVlc3QgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xufTtcblxuLyoqXG4gKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuY2xlYW51cCgpO1xufTtcblxuLyoqXG4gKiBBYm9ydHMgcGVuZGluZyByZXF1ZXN0cyB3aGVuIHVubG9hZGluZyB0aGUgd2luZG93LiBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50XG4gKiBtZW1vcnkgbGVha3MgKGUuZy4gd2hlbiB1c2luZyBJRSkgYW5kIHRvIGVuc3VyZSB0aGF0IG5vIHNwdXJpb3VzIGVycm9yIGlzXG4gKiBlbWl0dGVkLlxuICovXG5cbmlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcbiAgUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuICBpZiAoZ2xvYmFsLmF0dGFjaEV2ZW50KSB7XG4gICAgZ2xvYmFsLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyKCkge1xuICBmb3IgKHZhciBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuXG4vKipcbiAqIElzIFhIUjIgc3VwcG9ydGVkP1xuICovXG5cbnZhciBoYXNYSFIyID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuLyoqXG4gKiBQb2xsaW5nIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUG9sbGluZyhvcHRzKXtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmICghaGFzWEhSMiB8fCBmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAqL1xuXG5pbmhlcml0KFBvbGxpbmcsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUubmFtZSA9ICdwb2xsaW5nJztcblxuLyoqXG4gKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbigpe1xuICB0aGlzLnBvbGwoKTtcbn07XG5cbi8qKlxuICogUGF1c2VzIHBvbGxpbmcuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgdXBvbiBidWZmZXJzIGFyZSBmbHVzaGVkIGFuZCB0cmFuc3BvcnQgaXMgcGF1c2VkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKG9uUGF1c2Upe1xuICB2YXIgcGVuZGluZyA9IDA7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLnJlYWR5U3RhdGUgPSAncGF1c2luZyc7XG5cbiAgZnVuY3Rpb24gcGF1c2UoKXtcbiAgICBkZWJ1ZygncGF1c2VkJyk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgb25QYXVzZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgIHZhciB0b3RhbCA9IDA7XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgncG9sbENvbXBsZXRlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlJyk7XG4gICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSB3cml0aW5nIGNvbXBsZXRlJyk7XG4gICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXVzZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBwb2xsaW5nIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUucG9sbCA9IGZ1bmN0aW9uKCl7XG4gIGRlYnVnKCdwb2xsaW5nJyk7XG4gIHRoaXMucG9sbGluZyA9IHRydWU7XG4gIHRoaXMuZG9Qb2xsKCk7XG4gIHRoaXMuZW1pdCgncG9sbCcpO1xufTtcblxuLyoqXG4gKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBkZWJ1ZygncG9sbGluZyBnb3QgZGF0YSAlcycsIGRhdGEpO1xuICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbihwYWNrZXQsIGluZGV4LCB0b3RhbCkge1xuICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICBpZiAoJ29wZW5pbmcnID09IHNlbGYucmVhZHlTdGF0ZSkge1xuICAgICAgc2VsZi5vbk9wZW4oKTtcbiAgICB9XG5cbiAgICAvLyBpZiBpdHMgYSBjbG9zZSBwYWNrZXQsIHdlIGNsb3NlIHRoZSBvbmdvaW5nIHJlcXVlc3RzXG4gICAgaWYgKCdjbG9zZScgPT0gcGFja2V0LnR5cGUpIHtcbiAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH07XG5cbiAgLy8gZGVjb2RlIHBheWxvYWRcbiAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuXG4gIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gIGlmICgnY2xvc2VkJyAhPSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncG9sbENvbXBsZXRlJyk7XG5cbiAgICBpZiAoJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5wb2xsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdpZ25vcmluZyBwb2xsIC0gdHJhbnNwb3J0IHN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEZvciBwb2xsaW5nLCBzZW5kIGEgY2xvc2UgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbigpe1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2xvc2UoKXtcbiAgICBkZWJ1Zygnd3JpdGluZyBjbG9zZSBwYWNrZXQnKTtcbiAgICBzZWxmLndyaXRlKFt7IHR5cGU6ICdjbG9zZScgfV0pO1xuICB9XG5cbiAgaWYgKCdvcGVuJyA9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1ZygndHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nJyk7XG4gICAgY2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgZGVidWcoJ3RyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZScpO1xuICAgIHRoaXMub25jZSgnb3BlbicsIGNsb3NlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihwYWNrZXRzKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHZhciBjYWxsYmFja2ZuID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICB9O1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgcGFyc2VyLmVuY29kZVBheWxvYWQocGFja2V0cywgdGhpcy5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24oZGF0YSkge1xuICAgIHNlbGYuZG9Xcml0ZShkYXRhLCBjYWxsYmFja2ZuKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24oKXtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgdmFyIHNjaGVtYSA9IHRoaXMuc2VjdXJlID8gJ2h0dHBzJyA6ICdodHRwJztcbiAgdmFyIHBvcnQgPSAnJztcblxuICAvLyBjYWNoZSBidXN0aW5nIGlzIGZvcmNlZFxuICBpZiAoZmFsc2UgIT09IHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICBxdWVyeVt0aGlzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgIXF1ZXJ5LnNpZCkge1xuICAgIHF1ZXJ5LmI2NCA9IDE7XG4gIH1cblxuICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICBpZiAodGhpcy5wb3J0ICYmICgoJ2h0dHBzJyA9PSBzY2hlbWEgJiYgdGhpcy5wb3J0ICE9IDQ0MykgfHxcbiAgICAgKCdodHRwJyA9PSBzY2hlbWEgJiYgdGhpcy5wb3J0ICE9IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwb3J0O1xuXG4vKipcbiAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFRyYW5zcG9ydCAob3B0cykge1xuICB0aGlzLnBhdGggPSBvcHRzLnBhdGg7XG4gIHRoaXMuaG9zdG5hbWUgPSBvcHRzLmhvc3RuYW1lO1xuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQ7XG4gIHRoaXMuc2VjdXJlID0gb3B0cy5zZWN1cmU7XG4gIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbTtcbiAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudCB8fCBmYWxzZTtcbiAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgdGhpcy5lbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4O1xuICB0aGlzLmtleSA9IG9wdHMua2V5O1xuICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydDtcbiAgdGhpcy5jYSA9IG9wdHMuY2E7XG4gIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihUcmFuc3BvcnQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBFbWl0cyBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAobXNnLCBkZXNjKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnR5cGUgPSAnVHJhbnNwb3J0RXJyb3InO1xuICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnY2xvc2VkJyA9PSB0aGlzLnJlYWR5U3RhdGUgfHwgJycgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICAgIHRoaXMuZG9PcGVuKCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xvc2VzIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIHRoaXMub25DbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24ocGFja2V0cyl7XG4gIGlmICgnb3BlbicgPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBub3Qgb3BlbicpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIG9wZW5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG52YXIgaGFzQmluYXJ5ID0gcmVxdWlyZSgnaGFzLWJpbmFyeScpO1xudmFyIHNsaWNlQnVmZmVyID0gcmVxdWlyZSgnYXJyYXlidWZmZXIuc2xpY2UnKTtcbnZhciBiYXNlNjRlbmNvZGVyID0gcmVxdWlyZSgnYmFzZTY0LWFycmF5YnVmZmVyJyk7XG52YXIgYWZ0ZXIgPSByZXF1aXJlKCdhZnRlcicpO1xudmFyIHV0ZjggPSByZXF1aXJlKCd1dGY4Jyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UgYXJlIHJ1bm5pbmcgYW4gYW5kcm9pZCBicm93c2VyLiBUaGF0IHJlcXVpcmVzIHVzIHRvIHVzZVxuICogQXJyYXlCdWZmZXIgd2l0aCBwb2xsaW5nIHRyYW5zcG9ydHMuLi5cbiAqXG4gKiBodHRwOi8vZ2hpbmRhLm5ldC9qcGVnLWJsb2ItYWpheC1hbmRyb2lkL1xuICovXG5cbnZhciBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlIGFyZSBydW5uaW5nIGluIFBoYW50b21KUy5cbiAqIFVwbG9hZGluZyBhIEJsb2Igd2l0aCBQaGFudG9tSlMgZG9lcyBub3Qgd29yayBjb3JyZWN0bHksIGFzIHJlcG9ydGVkIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXJpeWEvcGhhbnRvbWpzL2lzc3Vlcy8xMTM5NVxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgaXNQaGFudG9tSlMgPSAvUGhhbnRvbUpTL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBXaGVuIHRydWUsIGF2b2lkcyB1c2luZyBCbG9icyB0byBlbmNvZGUgcGF5bG9hZHMuXG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBkb250U2VuZEJsb2JzID0gaXNBbmRyb2lkIHx8IGlzUGhhbnRvbUpTO1xuXG4vKipcbiAqIEN1cnJlbnQgcHJvdG9jb2wgdmVyc2lvbi5cbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKi9cblxudmFyIHBhY2tldHMgPSBleHBvcnRzLnBhY2tldHMgPSB7XG4gICAgb3BlbjogICAgIDAgICAgLy8gbm9uLXdzXG4gICwgY2xvc2U6ICAgIDEgICAgLy8gbm9uLXdzXG4gICwgcGluZzogICAgIDJcbiAgLCBwb25nOiAgICAgM1xuICAsIG1lc3NhZ2U6ICA0XG4gICwgdXBncmFkZTogIDVcbiAgLCBub29wOiAgICAgNlxufTtcblxudmFyIHBhY2tldHNsaXN0ID0ga2V5cyhwYWNrZXRzKTtcblxuLyoqXG4gKiBQcmVtYWRlIGVycm9yIHBhY2tldC5cbiAqL1xuXG52YXIgZXJyID0geyB0eXBlOiAnZXJyb3InLCBkYXRhOiAncGFyc2VyIGVycm9yJyB9O1xuXG4vKipcbiAqIENyZWF0ZSBhIGJsb2IgYXBpIGV2ZW4gZm9yIGJsb2IgYnVpbGRlciB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxuICovXG5cbnZhciBCbG9iID0gcmVxdWlyZSgnYmxvYicpO1xuXG4vKipcbiAqIEVuY29kZXMgYSBwYWNrZXQuXG4gKlxuICogICAgIDxwYWNrZXQgdHlwZSBpZD4gWyA8ZGF0YT4gXVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDVoZWxsbyB3b3JsZFxuICogICAgIDNcbiAqICAgICA0XG4gKlxuICogQmluYXJ5IGlzIGVuY29kZWQgaW4gYW4gaWRlbnRpY2FsIHByaW5jaXBsZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIHV0ZjhlbmNvZGUsIGNhbGxiYWNrKSB7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBzdXBwb3J0c0JpbmFyeSkge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1dGY4ZW5jb2RlKSB7XG4gICAgY2FsbGJhY2sgPSB1dGY4ZW5jb2RlO1xuICAgIHV0ZjhlbmNvZGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGEgPSAocGFja2V0LmRhdGEgPT09IHVuZGVmaW5lZClcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogcGFja2V0LmRhdGEuYnVmZmVyIHx8IHBhY2tldC5kYXRhO1xuXG4gIGlmIChnbG9iYWwuQXJyYXlCdWZmZXIgJiYgZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmIChCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBnbG9iYWwuQmxvYikge1xuICAgIHJldHVybiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIG1pZ2h0IGJlIGFuIG9iamVjdCB3aXRoIHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICBpZiAoZGF0YSAmJiBkYXRhLmJhc2U2NCkge1xuICAgIHJldHVybiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBTZW5kaW5nIGRhdGEgYXMgYSB1dGYtOCBzdHJpbmdcbiAgdmFyIGVuY29kZWQgPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcblxuICAvLyBkYXRhIGZyYWdtZW50IGlzIG9wdGlvbmFsXG4gIGlmICh1bmRlZmluZWQgIT09IHBhY2tldC5kYXRhKSB7XG4gICAgZW5jb2RlZCArPSB1dGY4ZW5jb2RlID8gdXRmOC5lbmNvZGUoU3RyaW5nKHBhY2tldC5kYXRhKSkgOiBTdHJpbmcocGFja2V0LmRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKCcnICsgZW5jb2RlZCk7XG5cbn07XG5cbmZ1bmN0aW9uIGVuY29kZUJhc2U2NE9iamVjdChwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIC8vIHBhY2tldCBkYXRhIGlzIGFuIG9iamVjdCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdICsgcGFja2V0LmRhdGEuZGF0YTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufVxuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgaGVscGVycyBmb3IgYmluYXJ5IHR5cGVzXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcGFja2V0LmRhdGE7XG4gIHZhciBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgdmFyIHJlc3VsdEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDEgKyBkYXRhLmJ5dGVMZW5ndGgpO1xuXG4gIHJlc3VsdEJ1ZmZlclswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdEJ1ZmZlcltpKzFdID0gY29udGVudEFycmF5W2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEJ1ZmZlci5idWZmZXIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgcGFja2V0LmRhdGEgPSBmci5yZXN1bHQ7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgdHJ1ZSwgY2FsbGJhY2spO1xuICB9O1xuICByZXR1cm4gZnIucmVhZEFzQXJyYXlCdWZmZXIocGFja2V0LmRhdGEpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoZG9udFNlbmRCbG9icykge1xuICAgIHJldHVybiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gIGxlbmd0aFswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtsZW5ndGguYnVmZmVyLCBwYWNrZXQuZGF0YV0pO1xuXG4gIHJldHVybiBjYWxsYmFjayhibG9iKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIGEgcGFja2V0IHdpdGggYmluYXJ5IGRhdGEgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCwgaGFzIGB0eXBlYCBhbmQgYGRhdGFgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqL1xuXG5leHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgY2FsbGJhY2spIHtcbiAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdO1xuICBpZiAoQmxvYiAmJiBwYWNrZXQuZGF0YSBpbnN0YW5jZW9mIGdsb2JhbC5CbG9iKSB7XG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiNjQgPSBmci5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgKyBiNjQpO1xuICAgIH07XG4gICAgcmV0dXJuIGZyLnJlYWRBc0RhdGFVUkwocGFja2V0LmRhdGEpO1xuICB9XG5cbiAgdmFyIGI2NGRhdGE7XG4gIHRyeSB7XG4gICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHdpdGggdHlwZWQgYXJyYXlzXG4gICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpO1xuICAgIHZhciBiYXNpYyA9IG5ldyBBcnJheSh0eXBlZC5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJhc2ljW2ldID0gdHlwZWRbaV07XG4gICAgfVxuICAgIGI2NGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJhc2ljKTtcbiAgfVxuICBtZXNzYWdlICs9IGdsb2JhbC5idG9hKGI2NGRhdGEpO1xuICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBwYWNrZXQuIENoYW5nZXMgZm9ybWF0IHRvIEJsb2IgaWYgcmVxdWVzdGVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYWNrZXQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgdXRmOGRlY29kZSkge1xuICAvLyBTdHJpbmcgZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGRhdGEuY2hhckF0KDApID09ICdiJykge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0KGRhdGEuc3Vic3RyKDEpLCBiaW5hcnlUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAodXRmOGRlY29kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IHV0ZjguZGVjb2RlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHlwZSA9IGRhdGEuY2hhckF0KDApO1xuXG4gICAgaWYgKE51bWJlcih0eXBlKSAhPSB0eXBlIHx8ICFwYWNrZXRzbGlzdFt0eXBlXSkge1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSwgZGF0YTogZGF0YS5zdWJzdHJpbmcoMSkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0gfTtcbiAgICB9XG4gIH1cblxuICB2YXIgYXNBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB2YXIgdHlwZSA9IGFzQXJyYXlbMF07XG4gIHZhciByZXN0ID0gc2xpY2VCdWZmZXIoZGF0YSwgMSk7XG4gIGlmIChCbG9iICYmIGJpbmFyeVR5cGUgPT09ICdibG9iJykge1xuICAgIHJlc3QgPSBuZXcgQmxvYihbcmVzdF0pO1xuICB9XG4gIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiByZXN0IH07XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBwYWNrZXQgZW5jb2RlZCBpbiBhIGJhc2U2NCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZTY0IGVuY29kZWQgbWVzc2FnZVxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGB0eXBlYCBhbmQgYGRhdGFgIChpZiBhbnkpXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihtc2csIGJpbmFyeVR5cGUpIHtcbiAgdmFyIHR5cGUgPSBwYWNrZXRzbGlzdFttc2cuY2hhckF0KDApXTtcbiAgaWYgKCFnbG9iYWwuQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogbXNnLnN1YnN0cigxKSB9IH07XG4gIH1cblxuICB2YXIgZGF0YSA9IGJhc2U2NGVuY29kZXIuZGVjb2RlKG1zZy5zdWJzdHIoMSkpO1xuXG4gIGlmIChiaW5hcnlUeXBlID09PSAnYmxvYicgJiYgQmxvYikge1xuICAgIGRhdGEgPSBuZXcgQmxvYihbZGF0YV0pO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgZGF0YTogZGF0YSB9O1xufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKS5cbiAqXG4gKiAgICAgPGxlbmd0aD46ZGF0YVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDExOmhlbGxvIHdvcmxkMjpoaVxuICpcbiAqIElmIGFueSBjb250ZW50cyBhcmUgYmluYXJ5LCB0aGV5IHdpbGwgYmUgZW5jb2RlZCBhcyBiYXNlNjQgc3RyaW5ncy4gQmFzZTY0XG4gKiBlbmNvZGVkIHN0cmluZ3MgYXJlIG1hcmtlZCB3aXRoIGEgYiBiZWZvcmUgdGhlIGxlbmd0aCBzcGVjaWZpZXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWQgPSBmdW5jdGlvbiAocGFja2V0cywgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBudWxsO1xuICB9XG5cbiAgdmFyIGlzQmluYXJ5ID0gaGFzQmluYXJ5KHBhY2tldHMpO1xuXG4gIGlmIChzdXBwb3J0c0JpbmFyeSAmJiBpc0JpbmFyeSkge1xuICAgIGlmIChCbG9iICYmICFkb250U2VuZEJsb2JzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNCbG9iKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlcihwYWNrZXRzLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoIXBhY2tldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCcwOicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbWVzc2FnZS5sZW5ndGggKyAnOicgKyBtZXNzYWdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCAhaXNCaW5hcnkgPyBmYWxzZSA6IHN1cHBvcnRzQmluYXJ5LCB0cnVlLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBkb25lQ2FsbGJhY2sobnVsbCwgc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRzLmpvaW4oJycpKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEFzeW5jIGFycmF5IG1hcCB1c2luZyBhZnRlclxuICovXG5cbmZ1bmN0aW9uIG1hcChhcnksIGVhY2gsIGRvbmUpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShhcnkubGVuZ3RoKTtcbiAgdmFyIG5leHQgPSBhZnRlcihhcnkubGVuZ3RoLCBkb25lKTtcblxuICB2YXIgZWFjaFdpdGhJbmRleCA9IGZ1bmN0aW9uKGksIGVsLCBjYikge1xuICAgIGVhY2goZWwsIGZ1bmN0aW9uKGVycm9yLCBtc2cpIHtcbiAgICAgIHJlc3VsdFtpXSA9IG1zZztcbiAgICAgIGNiKGVycm9yLCByZXN1bHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZWFjaFdpdGhJbmRleChpLCBhcnlbaV0sIG5leHQpO1xuICB9XG59XG5cbi8qXG4gKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFBvc3NpYmxlIGJpbmFyeSBjb250ZW50cyBhcmVcbiAqIGRlY29kZWQgZnJvbSB0aGVpciBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGRhdGEgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVQYXlsb2FkQXNCaW5hcnkoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBiaW5hcnlUeXBlO1xuICAgIGJpbmFyeVR5cGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHBhY2tldDtcbiAgaWYgKGRhdGEgPT0gJycpIHtcbiAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gJydcbiAgICAsIG4sIG1zZztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNociA9IGRhdGEuY2hhckF0KGkpO1xuXG4gICAgaWYgKCc6JyAhPSBjaHIpIHtcbiAgICAgIGxlbmd0aCArPSBjaHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgnJyA9PSBsZW5ndGggfHwgKGxlbmd0aCAhPSAobiA9IE51bWJlcihsZW5ndGgpKSkpIHtcbiAgICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgbXNnID0gZGF0YS5zdWJzdHIoaSArIDEsIG4pO1xuXG4gICAgICBpZiAobGVuZ3RoICE9IG1zZy5sZW5ndGgpIHtcbiAgICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1zZy5sZW5ndGgpIHtcbiAgICAgICAgcGFja2V0ID0gZXhwb3J0cy5kZWNvZGVQYWNrZXQobXNnLCBiaW5hcnlUeXBlLCB0cnVlKTtcblxuICAgICAgICBpZiAoZXJyLnR5cGUgPT0gcGFja2V0LnR5cGUgJiYgZXJyLmRhdGEgPT0gcGFja2V0LmRhdGEpIHtcbiAgICAgICAgICAvLyBwYXJzZXIgZXJyb3IgaW4gaW5kaXZpZHVhbCBwYWNrZXQgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmV0ID0gY2FsbGJhY2socGFja2V0LCBpICsgbiwgbCk7XG4gICAgICAgIGlmIChmYWxzZSA9PT0gcmV0KSByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGFkdmFuY2UgY3Vyc29yXG4gICAgICBpICs9IG47XG4gICAgICBsZW5ndGggPSAnJztcbiAgICB9XG4gIH1cblxuICBpZiAobGVuZ3RoICE9ICcnKSB7XG4gICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICB9XG5cbn07XG5cbi8qKlxuICogRW5jb2RlcyBtdWx0aXBsZSBtZXNzYWdlcyAocGF5bG9hZCkgYXMgYmluYXJ5LlxuICpcbiAqIDwxID0gYmluYXJ5LCAwID0gc3RyaW5nPjxudW1iZXIgZnJvbSAwLTk+PG51bWJlciBmcm9tIDAtOT5bLi4uXTxudW1iZXJcbiAqIDI1NT48ZGF0YT5cbiAqXG4gKiBFeGFtcGxlOlxuICogMSAzIDI1NSAxIDIgMywgaWYgdGhlIGJpbmFyeSBjb250ZW50cyBhcmUgaW50ZXJwcmV0ZWQgYXMgOCBiaXQgaW50ZWdlcnNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gZW5jb2RlZCBwYXlsb2FkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgaWYgKCFwYWNrZXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQXJyYXlCdWZmZXIoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gZG9uZUNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCBlbmNvZGVkUGFja2V0cykge1xuICAgIHZhciB0b3RhbExlbmd0aCA9IGVuY29kZWRQYWNrZXRzLnJlZHVjZShmdW5jdGlvbihhY2MsIHApIHtcbiAgICAgIHZhciBsZW47XG4gICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgbGVuID0gcC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSBwLmJ5dGVMZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjICsgbGVuLnRvU3RyaW5nKCkubGVuZ3RoICsgbGVuICsgMjsgLy8gc3RyaW5nL2JpbmFyeSBpZGVudGlmaWVyICsgc2VwYXJhdG9yID0gMlxuICAgIH0sIDApO1xuXG4gICAgdmFyIHJlc3VsdEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuXG4gICAgdmFyIGJ1ZmZlckluZGV4ID0gMDtcbiAgICBlbmNvZGVkUGFja2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IHR5cGVvZiBwID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBhYiA9IHA7XG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShwLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZpZXdbaV0gPSBwLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgYWIgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RyaW5nKSB7IC8vIG5vdCB0cnVlIGJpbmFyeVxuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDA7XG4gICAgICB9IGVsc2UgeyAvLyB0cnVlIGJpbmFyeVxuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5TdHIgPSBhYi5ieXRlTGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDI1NTtcblxuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSB2aWV3W2ldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEFycmF5LmJ1ZmZlcik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYXMgQmxvYlxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYiA9IGZ1bmN0aW9uKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24oZW5jb2RlZCkge1xuICAgICAgdmFyIGJpbmFyeUlkZW50aWZpZXIgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAxO1xuICAgICAgaWYgKHR5cGVvZiBlbmNvZGVkID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGVuY29kZWQubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IGVuY29kZWQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkID0gdmlldy5idWZmZXI7XG4gICAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gKGVuY29kZWQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcilcbiAgICAgICAgPyBlbmNvZGVkLmJ5dGVMZW5ndGhcbiAgICAgICAgOiBlbmNvZGVkLnNpemU7XG5cbiAgICAgIHZhciBsZW5TdHIgPSBsZW4udG9TdHJpbmcoKTtcbiAgICAgIHZhciBsZW5ndGhBcnkgPSBuZXcgVWludDhBcnJheShsZW5TdHIubGVuZ3RoICsgMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZW5ndGhBcnlbaV0gPSBwYXJzZUludChsZW5TdHJbaV0pO1xuICAgICAgfVxuICAgICAgbGVuZ3RoQXJ5W2xlblN0ci5sZW5ndGhdID0gMjU1O1xuXG4gICAgICBpZiAoQmxvYikge1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtiaW5hcnlJZGVudGlmaWVyLmJ1ZmZlciwgbGVuZ3RoQXJ5LmJ1ZmZlciwgZW5jb2RlZF0pO1xuICAgICAgICBkb25lQ2FsbGJhY2sobnVsbCwgYmxvYik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IEJsb2IocmVzdWx0cykpO1xuICB9KTtcbn07XG5cbi8qXG4gKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFN0cmluZ3MgYXJlIGRlY29kZWQgYnlcbiAqIGludGVycHJldGluZyBlYWNoIGJ5dGUgYXMgYSBrZXkgY29kZSBmb3IgZW50cmllcyBtYXJrZWQgdG8gc3RhcnQgd2l0aCAwLiBTZWVcbiAqIGRlc2NyaXB0aW9uIG9mIGVuY29kZVBheWxvYWRBc0JpbmFyeVxuICpcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeSA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgYnVmZmVyVGFpbCA9IGRhdGE7XG4gIHZhciBidWZmZXJzID0gW107XG5cbiAgdmFyIG51bWJlclRvb0xvbmcgPSBmYWxzZTtcbiAgd2hpbGUgKGJ1ZmZlclRhaWwuYnl0ZUxlbmd0aCA+IDApIHtcbiAgICB2YXIgdGFpbEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyVGFpbCk7XG4gICAgdmFyIGlzU3RyaW5nID0gdGFpbEFycmF5WzBdID09PSAwO1xuICAgIHZhciBtc2dMZW5ndGggPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAxOyA7IGkrKykge1xuICAgICAgaWYgKHRhaWxBcnJheVtpXSA9PSAyNTUpIGJyZWFrO1xuXG4gICAgICBpZiAobXNnTGVuZ3RoLmxlbmd0aCA+IDMxMCkge1xuICAgICAgICBudW1iZXJUb29Mb25nID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG1zZ0xlbmd0aCArPSB0YWlsQXJyYXlbaV07XG4gICAgfVxuXG4gICAgaWYobnVtYmVyVG9vTG9uZykgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG5cbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMiArIG1zZ0xlbmd0aC5sZW5ndGgpO1xuICAgIG1zZ0xlbmd0aCA9IHBhcnNlSW50KG1zZ0xlbmd0aCk7XG5cbiAgICB2YXIgbXNnID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgMCwgbXNnTGVuZ3RoKTtcbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1zZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkobXNnKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHRvIHR5cGVkIGFycmF5c1xuICAgICAgICB2YXIgdHlwZWQgPSBuZXcgVWludDhBcnJheShtc2cpO1xuICAgICAgICBtc2cgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG1zZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHR5cGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGJ1ZmZlcnMucHVzaChtc2cpO1xuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCBtc2dMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRvdGFsID0gYnVmZmVycy5sZW5ndGg7XG4gIGJ1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbihidWZmZXIsIGkpIHtcbiAgICBjYWxsYmFjayhleHBvcnRzLmRlY29kZVBhY2tldChidWZmZXIsIGJpbmFyeVR5cGUsIHRydWUpLCBpLCB0b3RhbCk7XG4gIH0pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9saWIvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDIxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIEdldHMgdGhlIGtleXMgZm9yIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0ga2V5c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzIChvYmope1xuICB2YXIgYXJyID0gW107XG4gIHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwgaSkpIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9saWIva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0JpbmFyeTtcblxuLyoqXG4gKiBDaGVja3MgZm9yIGJpbmFyeSBkYXRhLlxuICpcbiAqIFJpZ2h0IG5vdyBvbmx5IEJ1ZmZlciBhbmQgQXJyYXlCdWZmZXIgYXJlIHN1cHBvcnRlZC4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFueXRoaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGhhc0JpbmFyeShkYXRhKSB7XG5cbiAgZnVuY3Rpb24gX2hhc0JpbmFyeShvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKCAoZ2xvYmFsLkJ1ZmZlciAmJiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKG9iaikpIHx8XG4gICAgICAgICAoZ2xvYmFsLkFycmF5QnVmZmVyICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgICAgICAgKGdsb2JhbC5CbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICAoZ2xvYmFsLkZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSlcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChfaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2JqICYmICdvYmplY3QnID09IHR5cGVvZiBvYmopIHtcbiAgICAgIGlmIChvYmoudG9KU09OKSB7XG4gICAgICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBfaGFzQmluYXJ5KG9ialtrZXldKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIF9oYXNCaW5hcnkoZGF0YSk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2VuZ2luZS5pby1wYXJzZXIvfi9oYXMtYmluYXJ5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2VuZ2luZS5pby1wYXJzZXIvfi9oYXMtYmluYXJ5L34vaXNhcnJheS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3Igc2xpY2luZyBhbiBhcnJheWJ1ZmZlciBldmVuIHdoZW5cbiAqIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZSBpcyBub3Qgc3VwcG9ydGVkXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGFycmF5YnVmZmVyLmJ5dGVMZW5ndGg7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgZW5kID0gZW5kIHx8IGJ5dGVzO1xuXG4gIGlmIChhcnJheWJ1ZmZlci5zbGljZSkgeyByZXR1cm4gYXJyYXlidWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCk7IH1cblxuICBpZiAoc3RhcnQgPCAwKSB7IHN0YXJ0ICs9IGJ5dGVzOyB9XG4gIGlmIChlbmQgPCAwKSB7IGVuZCArPSBieXRlczsgfVxuICBpZiAoZW5kID4gYnl0ZXMpIHsgZW5kID0gYnl0ZXM7IH1cblxuICBpZiAoc3RhcnQgPj0gYnl0ZXMgfHwgc3RhcnQgPj0gZW5kIHx8IGJ5dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxuXG4gIHZhciBhYnYgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG4gIHZhciByZXN1bHQgPSBuZXcgVWludDhBcnJheShlbmQgLSBzdGFydCk7XG4gIGZvciAodmFyIGkgPSBzdGFydCwgaWkgPSAwOyBpIDwgZW5kOyBpKyssIGlpKyspIHtcbiAgICByZXN1bHRbaWldID0gYWJ2W2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQuYnVmZmVyO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9+L2FycmF5YnVmZmVyLnNsaWNlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oY2hhcnMpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICBlbmNvZGVkMiA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMV0pO1xuICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzJdKTtcbiAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSszXSk7XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvfi9lbmdpbmUuaW8tcGFyc2VyL34vYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gYWZ0ZXJcblxuZnVuY3Rpb24gYWZ0ZXIoY291bnQsIGNhbGxiYWNrLCBlcnJfY2IpIHtcbiAgICB2YXIgYmFpbCA9IGZhbHNlXG4gICAgZXJyX2NiID0gZXJyX2NiIHx8IG5vb3BcbiAgICBwcm94eS5jb3VudCA9IGNvdW50XG5cbiAgICByZXR1cm4gKGNvdW50ID09PSAwKSA/IGNhbGxiYWNrKCkgOiBwcm94eVxuXG4gICAgZnVuY3Rpb24gcHJveHkoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKHByb3h5LmNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWZ0ZXIgY2FsbGVkIHRvbyBtYW55IHRpbWVzJylcbiAgICAgICAgfVxuICAgICAgICAtLXByb3h5LmNvdW50XG5cbiAgICAgICAgLy8gYWZ0ZXIgZmlyc3QgZXJyb3IsIHJlc3QgYXJlIHBhc3NlZCB0byBlcnJfY2JcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgYmFpbCA9IHRydWVcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycilcbiAgICAgICAgICAgIC8vIGZ1dHVyZSBlcnJvciBjYWxsYmFja3Mgd2lsbCBnbyB0byBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGVycl9jYlxuICAgICAgICB9IGVsc2UgaWYgKHByb3h5LmNvdW50ID09PSAwICYmICFiYWlsKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvfi9lbmdpbmUuaW8tcGFyc2VyL34vYWZ0ZXIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qISBodHRwczovL210aHMuYmUvdXRmOGpzIHYyLjAuMCBieSBAbWF0aGlhcyAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGVzIGBleHBvcnRzYFxuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgXG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHRtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cyAmJiBtb2R1bGU7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAsIGZyb20gTm9kZS5qcyBvciBCcm93c2VyaWZpZWQgY29kZSxcblx0Ly8gYW5kIHVzZSBpdCBhcyBgcm9vdGBcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsKSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHR2YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuXHQvLyBUYWtlbiBmcm9tIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZVxuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHR2YXIgY291bnRlciA9IDA7XG5cdFx0dmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdFx0dmFyIHZhbHVlO1xuXHRcdHZhciBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvLyBUYWtlbiBmcm9tIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZVxuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgaW5kZXggPSAtMTtcblx0XHR2YXIgdmFsdWU7XG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0XHR2YWx1ZSA9IGFycmF5W2luZGV4XTtcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCkge1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHtcblx0XHRcdHRocm93IEVycm9yKFxuXHRcdFx0XHQnTG9uZSBzdXJyb2dhdGUgVSsnICsgY29kZVBvaW50LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0JyBpcyBub3QgYSBzY2FsYXIgdmFsdWUnXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHRmdW5jdGlvbiBjcmVhdGVCeXRlKGNvZGVQb2ludCwgc2hpZnQpIHtcblx0XHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IHNoaWZ0KSAmIDB4M0YpIHwgMHg4MCk7XG5cdH1cblxuXHRmdW5jdGlvbiBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG5cdFx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGRjgwKSA9PSAwKSB7IC8vIDEtYnl0ZSBzZXF1ZW5jZVxuXHRcdFx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHRcdH1cblx0XHR2YXIgc3ltYm9sID0gJyc7XG5cdFx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGODAwKSA9PSAwKSB7IC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRcdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxRikgfCAweEMwKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZGRjAwMDApID09IDApIHsgLy8gMy1ieXRlIHNlcXVlbmNlXG5cdFx0XHRjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCk7XG5cdFx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTIpICYgMHgwRikgfCAweEUwKTtcblx0XHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRTAwMDAwKSA9PSAwKSB7IC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRcdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDE4KSAmIDB4MDcpIHwgMHhGMCk7XG5cdFx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDEyKTtcblx0XHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdFx0fVxuXHRcdHN5bWJvbCArPSBzdHJpbmdGcm9tQ2hhckNvZGUoKGNvZGVQb2ludCAmIDB4M0YpIHwgMHg4MCk7XG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fVxuXG5cdGZ1bmN0aW9uIHV0ZjhlbmNvZGUoc3RyaW5nKSB7XG5cdFx0dmFyIGNvZGVQb2ludHMgPSB1Y3MyZGVjb2RlKHN0cmluZyk7XG5cdFx0dmFyIGxlbmd0aCA9IGNvZGVQb2ludHMubGVuZ3RoO1xuXHRcdHZhciBpbmRleCA9IC0xO1xuXHRcdHZhciBjb2RlUG9pbnQ7XG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSAnJztcblx0XHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdFx0Y29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG5cdFx0XHRieXRlU3RyaW5nICs9IGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnl0ZVN0cmluZztcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdGZ1bmN0aW9uIHJlYWRDb250aW51YXRpb25CeXRlKCkge1xuXHRcdGlmIChieXRlSW5kZXggPj0gYnl0ZUNvdW50KSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbnRpbnVhdGlvbkJ5dGUgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdFx0Ynl0ZUluZGV4Kys7XG5cblx0XHRpZiAoKGNvbnRpbnVhdGlvbkJ5dGUgJiAweEMwKSA9PSAweDgwKSB7XG5cdFx0XHRyZXR1cm4gY29udGludWF0aW9uQnl0ZSAmIDB4M0Y7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZW5kIHVwIGhlcmUsIGl04oCZcyBub3QgYSBjb250aW51YXRpb24gYnl0ZVxuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWNvZGVTeW1ib2woKSB7XG5cdFx0dmFyIGJ5dGUxO1xuXHRcdHZhciBieXRlMjtcblx0XHR2YXIgYnl0ZTM7XG5cdFx0dmFyIGJ5dGU0O1xuXHRcdHZhciBjb2RlUG9pbnQ7XG5cblx0XHRpZiAoYnl0ZUluZGV4ID4gYnl0ZUNvdW50KSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGJ5dGVJbmRleCA9PSBieXRlQ291bnQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBSZWFkIGZpcnN0IGJ5dGVcblx0XHRieXRlMSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0XHRieXRlSW5kZXgrKztcblxuXHRcdC8vIDEtYnl0ZSBzZXF1ZW5jZSAobm8gY29udGludWF0aW9uIGJ5dGVzKVxuXHRcdGlmICgoYnl0ZTEgJiAweDgwKSA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gYnl0ZTE7XG5cdFx0fVxuXG5cdFx0Ly8gMi1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKChieXRlMSAmIDB4RTApID09IDB4QzApIHtcblx0XHRcdHZhciBieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgxRikgPDwgNikgfCBieXRlMjtcblx0XHRcdGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuXHRcdFx0XHRyZXR1cm4gY29kZVBvaW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG5cdFx0aWYgKChieXRlMSAmIDB4RjApID09IDB4RTApIHtcblx0XHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDBGKSA8PCAxMikgfCAoYnl0ZTIgPDwgNikgfCBieXRlMztcblx0XHRcdGlmIChjb2RlUG9pbnQgPj0gMHgwODAwKSB7XG5cdFx0XHRcdGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50KTtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gNC1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcblx0XHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDBGKSA8PCAweDEyKSB8IChieXRlMiA8PCAweDBDKSB8XG5cdFx0XHRcdChieXRlMyA8PCAweDA2KSB8IGJ5dGU0O1xuXHRcdFx0aWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcblx0XHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBVVEYtOCBkZXRlY3RlZCcpO1xuXHR9XG5cblx0dmFyIGJ5dGVBcnJheTtcblx0dmFyIGJ5dGVDb3VudDtcblx0dmFyIGJ5dGVJbmRleDtcblx0ZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nKSB7XG5cdFx0Ynl0ZUFycmF5ID0gdWNzMmRlY29kZShieXRlU3RyaW5nKTtcblx0XHRieXRlQ291bnQgPSBieXRlQXJyYXkubGVuZ3RoO1xuXHRcdGJ5dGVJbmRleCA9IDA7XG5cdFx0dmFyIGNvZGVQb2ludHMgPSBbXTtcblx0XHR2YXIgdG1wO1xuXHRcdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKCkpICE9PSBmYWxzZSkge1xuXHRcdFx0Y29kZVBvaW50cy5wdXNoKHRtcCk7XG5cdFx0fVxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIHV0ZjggPSB7XG5cdFx0J3ZlcnNpb24nOiAnMi4wLjAnLFxuXHRcdCdlbmNvZGUnOiB1dGY4ZW5jb2RlLFxuXHRcdCdkZWNvZGUnOiB1dGY4ZGVjb2RlXG5cdH07XG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdXRmODtcblx0XHR9KTtcblx0fVx0ZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG5cdFx0aWYgKGZyZWVNb2R1bGUpIHsgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IHV0Zjg7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdHZhciBvYmplY3QgPSB7fTtcblx0XHRcdHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblx0XHRcdGZvciAodmFyIGtleSBpbiB1dGY4KSB7XG5cdFx0XHRcdGhhc093blByb3BlcnR5LmNhbGwodXRmOCwga2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHV0Zjhba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgeyAvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC51dGY4ID0gdXRmODtcblx0fVxuXG59KHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vZW5naW5lLmlvLXBhcnNlci9+L3V0ZjgvdXRmOC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGUgYSBibG9iIGJ1aWxkZXIgZXZlbiB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxuICovXG5cbnZhciBCbG9iQnVpbGRlciA9IGdsb2JhbC5CbG9iQnVpbGRlclxuICB8fCBnbG9iYWwuV2ViS2l0QmxvYkJ1aWxkZXJcbiAgfHwgZ2xvYmFsLk1TQmxvYkJ1aWxkZXJcbiAgfHwgZ2xvYmFsLk1vekJsb2JCdWlsZGVyO1xuXG4vKipcbiAqIENoZWNrIGlmIEJsb2IgY29uc3RydWN0b3IgaXMgc3VwcG9ydGVkXG4gKi9cblxudmFyIGJsb2JTdXBwb3J0ZWQgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGEgPSBuZXcgQmxvYihbJ2hpJ10pO1xuICAgIHJldHVybiBhLnNpemUgPT09IDI7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuLyoqXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIHN1cHBvcnRzIEFycmF5QnVmZmVyVmlld3NcbiAqIEZhaWxzIGluIFNhZmFyaSA2LCBzbyB3ZSBuZWVkIHRvIG1hcCB0byBBcnJheUJ1ZmZlcnMgdGhlcmUuXG4gKi9cblxudmFyIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA9IGJsb2JTdXBwb3J0ZWQgJiYgKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBiID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KFsxLDJdKV0pO1xuICAgIHJldHVybiBiLnNpemUgPT09IDI7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuLyoqXG4gKiBDaGVjayBpZiBCbG9iQnVpbGRlciBpcyBzdXBwb3J0ZWRcbiAqL1xuXG52YXIgYmxvYkJ1aWxkZXJTdXBwb3J0ZWQgPSBCbG9iQnVpbGRlclxuICAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuYXBwZW5kXG4gICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5nZXRCbG9iO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IG1hcHMgQXJyYXlCdWZmZXJWaWV3cyB0byBBcnJheUJ1ZmZlcnNcbiAqIFVzZWQgYnkgQmxvYkJ1aWxkZXIgY29uc3RydWN0b3IgYW5kIG9sZCBicm93c2VycyB0aGF0IGRpZG4ndFxuICogc3VwcG9ydCBpdCBpbiB0aGUgQmxvYiBjb25zdHJ1Y3Rvci5cbiAqL1xuXG5mdW5jdGlvbiBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaHVuayA9IGFyeVtpXTtcbiAgICBpZiAoY2h1bmsuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHZhciBidWYgPSBjaHVuay5idWZmZXI7XG5cbiAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdWJhcnJheSwgbWFrZSBhIGNvcHkgc28gd2Ugb25seVxuICAgICAgLy8gaW5jbHVkZSB0aGUgc3ViYXJyYXkgcmVnaW9uIGZyb20gdGhlIHVuZGVybHlpbmcgYnVmZmVyXG4gICAgICBpZiAoY2h1bmsuYnl0ZUxlbmd0aCAhPT0gYnVmLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvcHkgPSBuZXcgVWludDhBcnJheShjaHVuay5ieXRlTGVuZ3RoKTtcbiAgICAgICAgY29weS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLCBjaHVuay5ieXRlT2Zmc2V0LCBjaHVuay5ieXRlTGVuZ3RoKSk7XG4gICAgICAgIGJ1ZiA9IGNvcHkuYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICBhcnlbaV0gPSBidWY7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBiYi5hcHBlbmQoYXJ5W2ldKTtcbiAgfVxuXG4gIHJldHVybiAob3B0aW9ucy50eXBlKSA/IGJiLmdldEJsb2Iob3B0aW9ucy50eXBlKSA6IGJiLmdldEJsb2IoKTtcbn07XG5cbmZ1bmN0aW9uIEJsb2JDb25zdHJ1Y3RvcihhcnksIG9wdGlvbnMpIHtcbiAgbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpO1xuICByZXR1cm4gbmV3IEJsb2IoYXJ5LCBvcHRpb25zIHx8IHt9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoYmxvYlN1cHBvcnRlZCkge1xuICAgIHJldHVybiBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPyBnbG9iYWwuQmxvYiA6IEJsb2JDb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIGlmIChibG9iQnVpbGRlclN1cHBvcnRlZCkge1xuICAgIHJldHVybiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn0pKCk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2VuZ2luZS5pby1wYXJzZXIvfi9ibG9iL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcbiAqIFJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgc3RyID0gJyc7XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcbiAgICAgIHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xuICB2YXIgcXJ5ID0ge307XG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICB9XG4gIHJldHVybiBxcnk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2VuZ2luZS5pby1jbGllbnQvfi9wYXJzZXFzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYil7XG4gIHZhciBmbiA9IGZ1bmN0aW9uKCl7fTtcbiAgZm4ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gIGEucHJvdG90eXBlID0gbmV3IGZuO1xuICBhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGE7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vY29tcG9uZW50LWluaGVyaXQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9+L3llYXN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgUG9sbGluZyA9IHJlcXVpcmUoJy4vcG9sbGluZycpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCdjb21wb25lbnQtaW5oZXJpdCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuXG4vKipcbiAqIENhY2hlZCByZWd1bGFyIGV4cHJlc3Npb25zLlxuICovXG5cbnZhciByTmV3bGluZSA9IC9cXG4vZztcbnZhciByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuLyoqXG4gKiBHbG9iYWwgSlNPTlAgY2FsbGJhY2tzLlxuICovXG5cbnZhciBjYWxsYmFja3M7XG5cbi8qKlxuICogQ2FsbGJhY2tzIGNvdW50LlxuICovXG5cbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7IH1cblxuLyoqXG4gKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBKU09OUFBvbGxpbmcgKG9wdHMpIHtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICBpZiAoIWdsb2JhbC5fX19laW8pIGdsb2JhbC5fX19laW8gPSBbXTtcbiAgICBjYWxsYmFja3MgPSBnbG9iYWwuX19fZWlvO1xuICB9XG5cbiAgLy8gY2FsbGJhY2sgaWRlbnRpZmllclxuICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKG1zZykge1xuICAgIHNlbGYub25EYXRhKG1zZyk7XG4gIH0pO1xuXG4gIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcblxuICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gIGlmIChnbG9iYWwuZG9jdW1lbnQgJiYgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2NyaXB0KSBzZWxmLnNjcmlwdC5vbmVycm9yID0gZW1wdHk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoSlNPTlBQb2xsaW5nLCBQb2xsaW5nKTtcblxuLypcbiAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5mb3JtKSB7XG4gICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgfVxuXG4gIFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICB9XG5cbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oZSl7XG4gICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsIGVycm9yJyxlKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gIGlmIChpbnNlcnRBdCkge1xuICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICB9XG4gIGVsc2Uge1xuICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbiAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgdmFyIGlzVUFnZWNrbyA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBuYXZpZ2F0b3IgJiYgL2dlY2tvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgXG4gIGlmIChpc1VBZ2Vja28pIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICB9LCAxMDApO1xuICB9XG59O1xuXG4vKipcbiAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB2YXIgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdmFyIGlkID0gdGhpcy5pZnJhbWVJZCA9ICdlaW9faWZyYW1lXycgKyB0aGlzLmluZGV4O1xuICAgIHZhciBpZnJhbWU7XG5cbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdzb2NrZXRpbyc7XG4gICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZm9ybS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gICAgZm9ybS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjY2VwdC1jaGFyc2V0JywgJ3V0Zi04Jyk7XG4gICAgYXJlYS5uYW1lID0gJ2QnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgfVxuXG4gIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlICgpIHtcbiAgICBpbml0SWZyYW1lKCk7XG4gICAgZm4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJZnJhbWUgKCkge1xuICAgIGlmIChzZWxmLmlmcmFtZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZi5mb3JtLnJlbW92ZUNoaWxkKHNlbGYuaWZyYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgdmFyIGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJysgc2VsZi5pZnJhbWVJZCArJ1wiPic7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZyYW1lLm5hbWUgPSBzZWxmLmlmcmFtZUlkO1xuICAgICAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0OjAnO1xuICAgIH1cblxuICAgIGlmcmFtZS5pZCA9IHNlbGYuaWZyYW1lSWQ7XG5cbiAgICBzZWxmLmZvcm0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBzZWxmLmlmcmFtZSA9IGlmcmFtZTtcbiAgfVxuXG4gIGluaXRJZnJhbWUoKTtcblxuICAvLyBlc2NhcGUgXFxuIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBjb252ZXJ0ZWQgaW50byBcXHJcXG4gYnkgc29tZSBVQXNcbiAgLy8gZG91YmxlIGVzY2FwaW5nIGlzIHJlcXVpcmVkIGZvciBlc2NhcGVkIG5ldyBsaW5lcyBiZWNhdXNlIHVuZXNjYXBpbmcgb2YgbmV3IGxpbmVzIGNhbiBiZSBkb25lIHNhZmVseSBvbiBzZXJ2ZXItc2lkZVxuICBkYXRhID0gZGF0YS5yZXBsYWNlKHJFc2NhcGVkTmV3bGluZSwgJ1xcXFxcXG4nKTtcbiAgdGhpcy5hcmVhLnZhbHVlID0gZGF0YS5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKTtcblxuICB0cnkge1xuICAgIHRoaXMuZm9ybS5zdWJtaXQoKTtcbiAgfSBjYXRjaChlKSB7fVxuXG4gIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiAoc2VsZi5pZnJhbWUucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL3BvbGxpbmctanNvbnAuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXQnKTtcbnZhciBCcm93c2VyV2ViU29ja2V0ID0gZ2xvYmFsLldlYlNvY2tldCB8fCBnbG9iYWwuTW96V2ViU29ja2V0O1xuXG4vKipcbiAqIEdldCBlaXRoZXIgdGhlIGBXZWJTb2NrZXRgIG9yIGBNb3pXZWJTb2NrZXRgIGdsb2JhbHNcbiAqIGluIHRoZSBicm93c2VyIG9yIHRyeSB0byByZXNvbHZlIFdlYlNvY2tldC1jb21wYXRpYmxlXG4gKiBpbnRlcmZhY2UgZXhwb3NlZCBieSBgd3NgIGZvciBOb2RlLWxpa2UgZW52aXJvbm1lbnQuXG4gKi9cblxudmFyIFdlYlNvY2tldCA9IEJyb3dzZXJXZWJTb2NrZXQ7XG5pZiAoIVdlYlNvY2tldCAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICB0cnkge1xuICAgIFdlYlNvY2tldCA9IHJlcXVpcmUoJ3dzJyk7XG4gIH0gY2F0Y2ggKGUpIHsgfVxufVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG5cbi8qKlxuICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBXUyhvcHRzKXtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmIChmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZTtcbiAgVHJhbnNwb3J0LmNhbGwodGhpcywgb3B0cyk7XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBUcmFuc3BvcnQuXG4gKi9cblxuaW5oZXJpdChXUywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbldTLnByb3RvdHlwZS5uYW1lID0gJ3dlYnNvY2tldCc7XG5cbi8qXG4gKiBXZWJTb2NrZXRzIHN1cHBvcnQgYmluYXJ5XG4gKi9cblxuV1MucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuLyoqXG4gKiBPcGVucyBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uKCl7XG4gIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB1cmkgPSB0aGlzLnVyaSgpO1xuICB2YXIgcHJvdG9jb2xzID0gdm9pZCgwKTtcbiAgdmFyIG9wdHMgPSB7XG4gICAgYWdlbnQ6IHRoaXMuYWdlbnQsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IHRoaXMucGVyTWVzc2FnZURlZmxhdGVcbiAgfTtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgIG9wdHMuaGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuICB9XG5cbiAgdGhpcy53cyA9IEJyb3dzZXJXZWJTb2NrZXQgPyBuZXcgV2ViU29ja2V0KHVyaSkgOiBuZXcgV2ViU29ja2V0KHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcblxuICBpZiAodGhpcy53cy5iaW5hcnlUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy53cy5zdXBwb3J0cyAmJiB0aGlzLndzLnN1cHBvcnRzLmJpbmFyeSkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdidWZmZXInO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH1cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy53cy5vbm9wZW4gPSBmdW5jdGlvbigpe1xuICAgIHNlbGYub25PcGVuKCk7XG4gIH07XG4gIHRoaXMud3Mub25jbG9zZSA9IGZ1bmN0aW9uKCl7XG4gICAgc2VsZi5vbkNsb3NlKCk7XG4gIH07XG4gIHRoaXMud3Mub25tZXNzYWdlID0gZnVuY3Rpb24oZXYpe1xuICAgIHNlbGYub25EYXRhKGV2LmRhdGEpO1xuICB9O1xuICB0aGlzLndzLm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICBzZWxmLm9uRXJyb3IoJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICB9O1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBgb25EYXRhYCB0byB1c2UgYSB0aW1lciBvbiBpT1MuXG4gKiBTZWU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21sb3VnaHJhbi8yMDUyMDA2XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuaWYgKCd1bmRlZmluZWQnICE9IHR5cGVvZiBuYXZpZ2F0b3JcbiAgJiYgL2lQYWR8aVBob25lfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gIFdTLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbihkYXRhKXtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkRhdGEuY2FsbChzZWxmLCBkYXRhKTtcbiAgICB9LCAwKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKHBhY2tldHMpe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gIHZhciB0b3RhbCA9IHBhY2tldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRvdGFsOyBpIDwgbDsgaSsrKSB7XG4gICAgKGZ1bmN0aW9uKHBhY2tldCkge1xuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHNlbGYuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKCFCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEgPyBnbG9iYWwuQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCBzZWxmLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Tb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgIC8vdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgZGVidWcoJ3dlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tdG90YWwgfHwgZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSkocGFja2V0c1tpXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb25lKCl7XG4gICAgc2VsZi5lbWl0KCdmbHVzaCcpO1xuXG4gICAgLy8gZmFrZSBkcmFpblxuICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgICB9LCAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24oKXtcbiAgVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbigpe1xuICBpZiAodHlwZW9mIHRoaXMud3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy53cy5jbG9zZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLnVyaSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHBvcnQgPSAnJztcblxuICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICBpZiAodGhpcy5wb3J0ICYmICgoJ3dzcycgPT0gc2NoZW1hICYmIHRoaXMucG9ydCAhPSA0NDMpXG4gICAgfHwgKCd3cycgPT0gc2NoZW1hICYmIHRoaXMucG9ydCAhPSA4MCkpKSB7XG4gICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgfVxuXG4gIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gIGlmICh0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgIHF1ZXJ5LmI2NCA9IDE7XG4gIH1cblxuICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAvLyBwcmVwZW5kID8gdG8gcXVlcnlcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gJz8nICsgcXVlcnk7XG4gIH1cblxuICB2YXIgaXB2NiA9IHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMTtcbiAgcmV0dXJuIHNjaGVtYSArICc6Ly8nICsgKGlwdjYgPyAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nIDogdGhpcy5ob3N0bmFtZSkgKyBwb3J0ICsgdGhpcy5wYXRoICsgcXVlcnk7XG59O1xuXG4vKipcbiAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGlzIHRyYW5zcG9ydCBpcyBhdmFpbGFibGUuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbldTLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhIVdlYlNvY2tldCAmJiAhKCdfX2luaXRpYWxpemUnIGluIFdlYlNvY2tldCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogd3MgKGlnbm9yZWQpXG4gKiogbW9kdWxlIGlkID0gMjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2luZGV4b2YvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogSlNPTiBwYXJzZS5cbiAqXG4gKiBAc2VlIEJhc2VkIG9uIGpRdWVyeSNwYXJzZUpTT04gKE1JVCkgYW5kIEpTT04yXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcnZhbGlkY2hhcnMgPSAvXltcXF0sOnt9XFxzXSokLztcbnZhciBydmFsaWRlc2NhcGUgPSAvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlhLWZBLUZdezR9KS9nO1xudmFyIHJ2YWxpZHRva2VucyA9IC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZztcbnZhciBydmFsaWRicmFjZXMgPSAvKD86Xnw6fCwpKD86XFxzKlxcWykrL2c7XG52YXIgcnRyaW1MZWZ0ID0gL15cXHMrLztcbnZhciBydHJpbVJpZ2h0ID0gL1xccyskLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZWpzb24oZGF0YSkge1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgfHwgIWRhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRhdGEgPSBkYXRhLnJlcGxhY2UocnRyaW1MZWZ0LCAnJykucmVwbGFjZShydHJpbVJpZ2h0LCAnJyk7XG5cbiAgLy8gQXR0ZW1wdCB0byBwYXJzZSB1c2luZyB0aGUgbmF0aXZlIEpTT04gcGFyc2VyIGZpcnN0XG4gIGlmIChnbG9iYWwuSlNPTiAmJiBKU09OLnBhcnNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gIH1cblxuICBpZiAocnZhbGlkY2hhcnMudGVzdChkYXRhLnJlcGxhY2UocnZhbGlkZXNjYXBlLCAnQCcpXG4gICAgICAucmVwbGFjZShydmFsaWR0b2tlbnMsICddJylcbiAgICAgIC5yZXBsYWNlKHJ2YWxpZGJyYWNlcywgJycpKSkge1xuICAgIHJldHVybiAobmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIGRhdGEpKSgpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9lbmdpbmUuaW8tY2xpZW50L34vcGFyc2Vqc29uL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIHRvQXJyYXkgPSByZXF1aXJlKCd0by1hcnJheScpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDpzb2NrZXQnKTtcbnZhciBoYXNCaW4gPSByZXF1aXJlKCdoYXMtYmluYXJ5Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gU29ja2V0O1xuXG4vKipcbiAqIEludGVybmFsIGV2ZW50cyAoYmxhY2tsaXN0ZWQpLlxuICogVGhlc2UgZXZlbnRzIGNhbid0IGJlIGVtaXR0ZWQgYnkgdGhlIHVzZXIuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGV2ZW50cyA9IHtcbiAgY29ubmVjdDogMSxcbiAgY29ubmVjdF9lcnJvcjogMSxcbiAgY29ubmVjdF90aW1lb3V0OiAxLFxuICBjb25uZWN0aW5nOiAxLFxuICBkaXNjb25uZWN0OiAxLFxuICBlcnJvcjogMSxcbiAgcmVjb25uZWN0OiAxLFxuICByZWNvbm5lY3RfYXR0ZW1wdDogMSxcbiAgcmVjb25uZWN0X2ZhaWxlZDogMSxcbiAgcmVjb25uZWN0X2Vycm9yOiAxLFxuICByZWNvbm5lY3Rpbmc6IDEsXG4gIHBpbmc6IDEsXG4gIHBvbmc6IDFcbn07XG5cbi8qKlxuICogU2hvcnRjdXQgdG8gYEVtaXR0ZXIjZW1pdGAuXG4gKi9cblxudmFyIGVtaXQgPSBFbWl0dGVyLnByb3RvdHlwZS5lbWl0O1xuXG4vKipcbiAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0KGlvLCBuc3Ape1xuICB0aGlzLmlvID0gaW87XG4gIHRoaXMubnNwID0gbnNwO1xuICB0aGlzLmpzb24gPSB0aGlzOyAvLyBjb21wYXRcbiAgdGhpcy5pZHMgPSAwO1xuICB0aGlzLmFja3MgPSB7fTtcbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIGlmICh0aGlzLmlvLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zdWJFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc3VicykgcmV0dXJuO1xuXG4gIHZhciBpbyA9IHRoaXMuaW87XG4gIHRoaXMuc3VicyA9IFtcbiAgICBvbihpbywgJ29wZW4nLCBiaW5kKHRoaXMsICdvbm9wZW4nKSksXG4gICAgb24oaW8sICdwYWNrZXQnLCBiaW5kKHRoaXMsICdvbnBhY2tldCcpKSxcbiAgICBvbihpbywgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKVxuICBdO1xufTtcblxuLyoqXG4gKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUub3BlbiA9XG5Tb2NrZXQucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHJldHVybiB0aGlzO1xuXG4gIHRoaXMuc3ViRXZlbnRzKCk7XG4gIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICBpZiAoJ29wZW4nID09IHRoaXMuaW8ucmVhZHlTdGF0ZSkgdGhpcy5vbm9wZW4oKTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0aW5nJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIGBtZXNzYWdlYCBldmVudC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKXtcbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIGFyZ3MudW5zaGlmdCgnbWVzc2FnZScpO1xuICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBgZW1pdGAuXG4gKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2KXtcbiAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgdmFyIHBhcnNlclR5cGUgPSBwYXJzZXIuRVZFTlQ7IC8vIGRlZmF1bHRcbiAgaWYgKGhhc0JpbihhcmdzKSkgeyBwYXJzZXJUeXBlID0gcGFyc2VyLkJJTkFSWV9FVkVOVDsgfSAvLyBiaW5hcnlcbiAgdmFyIHBhY2tldCA9IHsgdHlwZTogcGFyc2VyVHlwZSwgZGF0YTogYXJncyB9O1xuXG4gIHBhY2tldC5vcHRpb25zID0ge307XG4gIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gIXRoaXMuZmxhZ3MgfHwgZmFsc2UgIT09IHRoaXMuZmxhZ3MuY29tcHJlc3M7XG5cbiAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICBkZWJ1ZygnZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkJywgdGhpcy5pZHMpO1xuICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cblxuICBkZWxldGUgdGhpcy5mbGFncztcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5wYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpe1xuICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gIHRoaXMuaW8ucGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbigpe1xuICBkZWJ1ZygndHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nJyk7XG5cbiAgLy8gd3JpdGUgY29ubmVjdCBwYWNrZXQgaWYgbmVjZXNzYXJ5XG4gIGlmICgnLycgIT0gdGhpcy5uc3ApIHtcbiAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHBhcnNlci5DT05ORUNUIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgY2xvc2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByZWFzb25cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uKHJlYXNvbil7XG4gIGRlYnVnKCdjbG9zZSAoJXMpJywgcmVhc29uKTtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICBkZWxldGUgdGhpcy5pZDtcbiAgdGhpcy5lbWl0KCdkaXNjb25uZWN0JywgcmVhc29uKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ucGFja2V0ID0gZnVuY3Rpb24ocGFja2V0KXtcbiAgaWYgKHBhY2tldC5uc3AgIT0gdGhpcy5uc3ApIHJldHVybjtcblxuICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgY2FzZSBwYXJzZXIuQ09OTkVDVDpcbiAgICAgIHRoaXMub25jb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9FVkVOVDpcbiAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkRJU0NPTk5FQ1Q6XG4gICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5FUlJPUjpcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBwYWNrZXQuZGF0YSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZXZlbnQgPSBmdW5jdGlvbihwYWNrZXQpe1xuICB2YXIgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICBkZWJ1ZygnZW1pdHRpbmcgZXZlbnQgJWonLCBhcmdzKTtcblxuICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICBkZWJ1ZygnYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudCcpO1xuICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIGVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goYXJncyk7XG4gIH1cbn07XG5cbi8qKlxuICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmFjayA9IGZ1bmN0aW9uKGlkKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2VudCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICBpZiAoc2VudCkgcmV0dXJuO1xuICAgIHNlbnQgPSB0cnVlO1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgIGRlYnVnKCdzZW5kaW5nIGFjayAlaicsIGFyZ3MpO1xuXG4gICAgdmFyIHR5cGUgPSBoYXNCaW4oYXJncykgPyBwYXJzZXIuQklOQVJZX0FDSyA6IHBhcnNlci5BQ0s7XG4gICAgc2VsZi5wYWNrZXQoe1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGRhdGE6IGFyZ3NcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmFjayA9IGZ1bmN0aW9uKHBhY2tldCl7XG4gIHZhciBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGFjaykge1xuICAgIGRlYnVnKCdjYWxsaW5nIGFjayAlcyB3aXRoICVqJywgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ2JhZCBhY2sgJXMnLCBwYWNrZXQuaWQpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jb25uZWN0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbn07XG5cbi8qKlxuICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmVtaXRCdWZmZXJlZCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZWNlaXZlQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCB0aGlzLnJlY2VpdmVCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnBhY2tldCh0aGlzLnNlbmRCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCl7XG4gIGRlYnVnKCdzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICB0aGlzLmRlc3Ryb3koKTtcbiAgdGhpcy5vbmNsb3NlKCdpbyBzZXJ2ZXIgZGlzY29ubmVjdCcpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZS5cbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5zdWJzKSB7XG4gICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3Vic1tpXS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuc3VicyA9IG51bGw7XG4gIH1cblxuICB0aGlzLmlvLmRlc3Ryb3kodGhpcyk7XG59O1xuXG4vKipcbiAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuY2xvc2UgPVxuU29ja2V0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZGVidWcoJ3BlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICAgIHRoaXMucGFja2V0KHsgdHlwZTogcGFyc2VyLkRJU0NPTk5FQ1QgfSk7XG4gIH1cblxuICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICB0aGlzLmRlc3Ryb3koKTtcblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAvLyBmaXJlIGV2ZW50c1xuICAgIHRoaXMub25jbG9zZSgnaW8gY2xpZW50IGRpc2Nvbm5lY3QnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jb21wcmVzcyA9IGZ1bmN0aW9uKGNvbXByZXNzKXtcbiAgdGhpcy5mbGFncyA9IHRoaXMuZmxhZ3MgfHwge307XG4gIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9saWIvc29ja2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMjM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICBmdW5jdGlvbiBvbigpIHtcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gdG9BcnJheVxuXG5mdW5jdGlvbiB0b0FycmF5KGxpc3QsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gW11cblxuICAgIGluZGV4ID0gaW5kZXggfHwgMFxuXG4gICAgZm9yICh2YXIgaSA9IGluZGV4IHx8IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2kgLSBpbmRleF0gPSBsaXN0W2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vdG8tYXJyYXkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG4vKipcbiAqIEhlbHBlciBmb3Igc3Vic2NyaXB0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxFdmVudEVtaXR0ZXJ9IG9iaiB3aXRoIGBFbWl0dGVyYCBtaXhpbiBvciBgRXZlbnRFbWl0dGVyYFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9uKG9iaiwgZXYsIGZuKSB7XG4gIG9iai5vbihldiwgZm4pO1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCl7XG4gICAgICBvYmoucmVtb3ZlTGlzdGVuZXIoZXYsIGZuKTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L2xpYi9vbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBTbGljZSByZWZlcmVuY2UuXG4gKi9cblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbi8qKlxuICogQmluZCBgb2JqYCB0byBgZm5gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBvciBzdHJpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgZm4pe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGZuKSBmbiA9IG9ialtmbl07XG4gIGlmICgnZnVuY3Rpb24nICE9IHR5cGVvZiBmbikgdGhyb3cgbmV3IEVycm9yKCdiaW5kKCkgcmVxdWlyZXMgYSBmdW5jdGlvbicpO1xuICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vY29tcG9uZW50LWJpbmQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLypcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNCaW5hcnk7XG5cbi8qKlxuICogQ2hlY2tzIGZvciBiaW5hcnkgZGF0YS5cbiAqXG4gKiBSaWdodCBub3cgb25seSBCdWZmZXIgYW5kIEFycmF5QnVmZmVyIGFyZSBzdXBwb3J0ZWQuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbnl0aGluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBoYXNCaW5hcnkoZGF0YSkge1xuXG4gIGZ1bmN0aW9uIF9oYXNCaW5hcnkob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBmYWxzZTtcblxuICAgIGlmICggKGdsb2JhbC5CdWZmZXIgJiYgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciAmJiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKG9iaikpIHx8XG4gICAgICAgICAoZ2xvYmFsLkFycmF5QnVmZmVyICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgICAgICAgKGdsb2JhbC5CbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICAoZ2xvYmFsLkZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSlcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChfaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2JqICYmICdvYmplY3QnID09IHR5cGVvZiBvYmopIHtcbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvaGFzLWJpbmFyeS9wdWxsLzRcbiAgICAgIGlmIChvYmoudG9KU09OICYmICdmdW5jdGlvbicgPT0gdHlwZW9mIG9iai50b0pTT04pIHtcbiAgICAgICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIF9oYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gX2hhc0JpbmFyeShkYXRhKTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NvY2tldC5pby1jbGllbnQvfi9oYXMtYmluYXJ5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zb2NrZXQuaW8tY2xpZW50L34vaGFzLWJpbmFyeS9+L2lzYXJyYXkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBFeHBvc2UgYEJhY2tvZmZgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gKlxuICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAqIC0gYGppdHRlcmAgWzBdXG4gKiAtIGBmYWN0b3JgIFsyXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEJhY2tvZmYob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgdGhpcy5tYXggPSBvcHRzLm1heCB8fCAxMDAwMDtcbiAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGJhY2tvZmYgZHVyYXRpb24uXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgdmFyIHJhbmQgPSAgTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgbXMgPSAoTWF0aC5mbG9vcihyYW5kICogMTApICYgMSkgPT0gMCAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbihtcywgdGhpcy5tYXgpIHwgMDtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG51bWJlciBvZiBhdHRlbXB0cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24obWluKXtcbiAgdGhpcy5tcyA9IG1pbjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXhpbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbihtYXgpe1xuICB0aGlzLm1heCA9IG1heDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBqaXR0ZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uKGppdHRlcil7XG4gIHRoaXMuaml0dGVyID0gaml0dGVyO1xufTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc29ja2V0LmlvLWNsaWVudC9+L2JhY2tvMi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NsaWVudC9zY3NzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jbGllbnQvc2Nzcy9jcnRfc3R5bGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9