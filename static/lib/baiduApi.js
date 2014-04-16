window.BMAP_AUTHENTIC_KEY = "FAdf6decc1e4e7690caf8f7e1f4c5312";
(function() {
   var Twindow = window,
		Tdocument = document,
		TMath = Math,
		TRegExp = RegExp,
		TparseInt = parseInt,
		TparseFloat = parseFloat,
		Tprototype = "prototype",
		TappendChild = "appendChild",
		TremoveChild = "removeChild",
		Tlength = "length",
		Textend = "extend",
		Twidth = "width",
		Theight = "height",
		ToffsetX = "offsetX",
		ToffsetY = "offsetY",
		TaddEventListener = "addEventListener",
		TremoveEventListener = "removeEventListener",
		Tstyle = "style",
		Tanchor = "anchor",
		TparentNode = "parentNode",
		Tposition = "position";
	var T, baidu = T = baidu || {
		version: "1.3.4"
	};
	baidu.guid = "$BAIDU$";
	window[baidu.guid] = window[baidu.guid] || {};
	baidu.object = baidu.object || {};
	baidu[Textend] = baidu.object[Textend] = function(target, source) {
		for (var p in source) if (source.hasOwnProperty(p)) target[p] = source[p];
		return target
	};
	baidu.dom = baidu.dom || {};
	baidu.dom.g = function(id) {
		if ("string" == typeof id || id instanceof String) return Tdocument.getElementById(id);
		else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) return id;
		return null
	};
	baidu.g = baidu.G = baidu.dom.g;
	baidu.dom.hide = function(element) {
		element = baidu.dom.g(element);
		element.style.display = "none";
		return element
	};
	baidu.hide = baidu.dom.hide;
	baidu.lang = baidu.lang || {};
	baidu.lang.isString = function(source) {
		return "[object String]" == Object[Tprototype].toString.call(source)
	};
	baidu.isString = baidu.lang.isString;
	baidu.dom._g = function(id) {
		if (baidu.lang.isString(id)) return Tdocument.getElementById(id);
		return id
	};
	baidu._g = baidu.dom._g;
	baidu.dom.contains = function(container, contained) {
		var g = baidu.dom._g;
		container = g(container);
		contained = g(contained);
		return container.contains ? container != contained && container.contains(contained) : !! (container.compareDocumentPosition(contained) & 16)
	};
	baidu.browser = baidu.browser || {};
	if (/msie (\d+\.\d)/i.test(navigator.userAgent)) baidu.browser.ie = baidu.ie = Tdocument.documentMode || +TRegExp["$1"];
	baidu.dom._NAME_ATTRS = function() {
		var result = {
			"cellpadding": "cellPadding",
			"cellspacing": "cellSpacing",
			"colspan": "colSpan",
			"rowspan": "rowSpan",
			"valign": "vAlign",
			"usemap": "useMap",
			"frameborder": "frameBorder"
		};
		if (baidu.browser.ie < 8) {
			result["for"] = "htmlFor";
			result["class"] = "className"
		} else {
			result["htmlFor"] = "for";
			result["className"] = "class"
		}
		return result
	}();
	baidu.dom.setAttr = function(element, key, value) {
		element = baidu.dom.g(element);
		if ("style" == key) element.style.cssText = value;
		else {
			key = baidu.dom._NAME_ATTRS[key] || key;
			element.setAttribute(key, value)
		}
		return element
	};
	baidu.setAttr = baidu.dom.setAttr;
	baidu.dom.setAttrs = function(element, attributes) {
		element = baidu.dom.g(element);
		for (var key in attributes) baidu.dom.setAttr(element, key, attributes[key]);
		return element
	};
	baidu.setAttrs = baidu.dom.setAttrs;
	baidu.string = baidu.string || {};
	(function() {
		var trimer = new TRegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
		baidu.string.trim = function(source) {
			return String(source).replace(trimer, "")
		}
	})();
	baidu.trim = baidu.string.trim;
	baidu.string.format = function(source, opts) {
		source = String(source);
		var data = Array[Tprototype].slice.call(arguments, 1),
			toString = Object[Tprototype].toString;
		if (data[Tlength]) {
			data = data[Tlength] == 1 ? opts !== null && /\[object Array\]|\[object Object\]/.test(toString.call(opts)) ? opts : data : data;
			return source.replace(/#\{(.+?)\}/g, function(match, key) {
				var replacer = data[key];
				if ("[object Function]" == toString.call(replacer)) replacer = replacer(key);
				return "undefined" == typeof replacer ? "" : replacer
			})
		}
		return source
	};
	baidu.format = baidu.string.format;
	baidu.dom.removeClass = function(element, className) {
		element = baidu.dom.g(element);
		var oldClasses = element.className.split(/\s+/),
			newClasses = className.split(/\s+/),
			lenOld, lenDel = newClasses[Tlength],
			j, i = 0;
		for (; i < lenDel; ++i) for (j = 0, lenOld = oldClasses[Tlength]; j < lenOld; ++j) if (oldClasses[j] == newClasses[i]) {
			oldClasses.splice(j, 1);
			break
		}
		element.className = oldClasses.join(" ");
		return element
	};
	baidu.removeClass = baidu.dom.removeClass;
	baidu.dom.insertHTML = function(element, position, html) {
		element = baidu.dom.g(element);
		var range, begin;
		if (element.insertAdjacentHTML) element.insertAdjacentHTML(position, html);
		else {
			range = element.ownerDocument.createRange();
			position = position.toUpperCase();
			if (position == "AFTERBEGIN" || position == "BEFOREEND") {
				range.selectNodeContents(element);
				range.collapse(position == "AFTERBEGIN")
			} else {
				begin = position == "BEFOREBEGIN";
				range[begin ? "setStartBefore" : "setEndAfter"](element);
				range.collapse(begin)
			}
			range.insertNode(range.createContextualFragment(html))
		}
		return element
	};
	baidu.insertHTML = baidu.dom.insertHTML;
	baidu.dom.show = function(element) {
		element = baidu.dom.g(element);
		element.style.display = "";
		return element
	};
	baidu.show = baidu.dom.show;
	baidu.dom.getDocument = function(element) {
		element = baidu.dom.g(element);
		return element.nodeType == 9 ? element : element.ownerDocument || element.document
	};
	baidu.dom.addClass = function(element, className) {
		element = baidu.dom.g(element);
		var classArray = className.split(/\s+/),
			result = element.className,
			classMatch = " " + result + " ",
			i = 0,
			l = classArray[Tlength];
		for (; i < l; i++) if (classMatch.indexOf(" " + classArray[i] + " ") < 0) result += " " + classArray[i];
		element.className = result;
		return element
	};
	baidu.addClass = baidu.dom.addClass;
	baidu.dom._styleFixer = baidu.dom._styleFixer || {};
	baidu.dom._styleFilter = baidu.dom._styleFilter || [];
	baidu.dom._styleFilter.filter = function(key, value, method) {
		for (var i = 0, filters = baidu.dom._styleFilter, filter; filter = filters[i]; i++) if (filter = filter[method]) value = filter(key, value);
		return value
	};
	baidu.string.toCamelCase = function(source) {
		if (source.indexOf("-") < 0 && source.indexOf("_") < 0) return source;
		return source.replace(/[-_][^-_]/g, function(match) {
			return match.charAt(1).toUpperCase()
		})
	};
	baidu.dom.getStyle = function(element, key) {
		var dom = baidu.dom;
		element = dom.g(element);
		key = baidu.string.toCamelCase(key);
		var value = element.style[key];
		if (!value) {
			var fixer = dom._styleFixer[key],
				style = element.currentStyle || (baidu.browser.ie ? element[Tstyle] : getComputedStyle(element, null));
			value = fixer && fixer.get ? fixer.get(element, style) : style[fixer || key]
		}
		if (fixer = dom._styleFilter) value = fixer.filter(key, value, "get");
		return value
	};
	baidu.getStyle = baidu.dom.getStyle;
	if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) baidu.browser.opera = +TRegExp["$1"];
	baidu.browser.isWebkit = /webkit/i.test(navigator.userAgent);
	baidu.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
	baidu.browser.isStrict = Tdocument.compatMode == "CSS1Compat";
	baidu.dom.getPosition = function(element) {
		element = baidu.dom.g(element);
		var doc = baidu.dom.getDocument(element),
			browser = baidu.browser,
			getStyle = baidu.dom.getStyle,
			BUGGY_GECKO_BOX_OBJECT = browser.isGecko > 0 && doc.getBoxObjectFor && getStyle(element, "position") == "absolute" && (element.style.top === "" || element.style.left === ""),
			pos = {
				"left": 0,
				"top": 0
			},
			viewport = browser.ie && !browser.isStrict ? doc.body : doc.documentElement,
			parent, box;
		if (element == viewport) return pos;
		if (element.getBoundingClientRect) {
			box = element.getBoundingClientRect();
			pos.left = TMath.floor(box.left) + TMath.max(doc.documentElement.scrollLeft, doc.body.scrollLeft);
			pos.top = TMath.floor(box.top) + TMath.max(doc.documentElement.scrollTop, doc.body.scrollTop);
			pos.left -= doc.documentElement.clientLeft;
			pos.top -= doc.documentElement.clientTop;
			var htmlDom = doc.body,
				htmlBorderLeftWidth = TparseInt(getStyle(htmlDom, "borderLeftWidth")),
				htmlBorderTopWidth = TparseInt(getStyle(htmlDom, "borderTopWidth"));
			if (browser.ie && !browser.isStrict) {
				pos.left -= isNaN(htmlBorderLeftWidth) ? 2 : htmlBorderLeftWidth;
				pos.top -= isNaN(htmlBorderTopWidth) ? 2 : htmlBorderTopWidth
			}
		} else {
			parent = element;
			do {
				pos.left += parent.offsetLeft;
				pos.top += parent.offsetTop;
				if (browser.isWebkit > 0 && getStyle(parent, "position") == "fixed") {
					pos.left += doc.body.scrollLeft;
					pos.top += doc.body.scrollTop;
					break
				}
				parent = parent.offsetParent
			} while (parent && parent != element);
			if (browser.opera > 0 || browser.isWebkit > 0 && getStyle(element, "position") == "absolute") pos.top -= doc.body.offsetTop;
			parent = element.offsetParent;
			while (parent && parent != doc.body) {
				pos.left -= parent.scrollLeft;
				if (!browser.opera || parent.tagName != "TR") pos.top -= parent.scrollTop;
				parent = parent.offsetParent
			}
		}
		return pos
	};
	if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) baidu.browser.firefox = +TRegExp["$1"];
	(function() {
		var ua = navigator.userAgent;
		if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ua) && !/chrome/i.test(ua)) baidu.browser.safari = +(TRegExp["$1"] || TRegExp["$2"])
	})();
	if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) baidu.browser.chrome = +TRegExp["$1"];
	baidu.array = baidu.array || {};
	baidu.array.each = function(source, iterator) {
		var returnValue, item, i, len = source[Tlength];
		if ("function" == typeof iterator) for (i = 0; i < len; i++) {
			item = source[i];
			returnValue = iterator.call(source, item, i);
			if (returnValue === false) break
		}
		return source
	};
	baidu.each = baidu.array.each;
	baidu.lang.guid = function() {
		return "TANGRAM__" + (window[baidu.guid]["_counter"]++).toString(36)
	};
	window[baidu.guid]["_counter"] = window[baidu.guid]["_counter"] || 1;
	window[baidu.guid]["_instances"] = window[baidu.guid]["_instances"] || {};
	baidu.lang.isFunction = function(source) {
		return "[object Function]" == Object[Tprototype].toString.call(source)
	};
	baidu.lang.Class = function(guid) {
		this.guid = guid || baidu.lang.guid();
		window[baidu.guid]["_instances"][this.guid] = this
	};
	window[baidu.guid]["_instances"] = window[baidu.guid]["_instances"] || {};
	baidu.lang.Class[Tprototype].dispose = function() {
		delete window[baidu.guid]["_instances"][this.guid];
		for (var property in this) if (!baidu.lang.isFunction(this[property])) delete this[property];
		this.disposed = true
	};
	baidu.lang.Class[Tprototype].toString = function() {
		return "[object " + (this._className || "Object") + "]"
	};
	baidu.lang.Event = function(type, target) {
		this.type = type;
		this.returnValue = true;
		this.target = target || null;
		this.currentTarget = null
	};
	baidu.lang.Class[Tprototype][TaddEventListener] = function(type, handler, key) {
		if (!baidu.lang.isFunction(handler)) return;
		!this.__listeners && (this.__listeners = {});
		var t = this.__listeners,
			id;
		if (typeof key == "string" && key) if (/[^\w\-]/.test(key)) throw "nonstandard key:" + key;
		else {
			handler.hashCode = key;
			id = key
		}
		type.indexOf("on") != 0 && (type = "on" + type);
		typeof t[type] != "object" && (t[type] = {});
		id = id || baidu.lang.guid();
		handler.hashCode = id;
		t[type][id] = handler
	};
	baidu.lang.Class[Tprototype][TremoveEventListener] = function(type, handler) {
		if (baidu.lang.isFunction(handler)) handler = handler.hashCode;
		else if (!baidu.lang.isString(handler)) return;
		!this.__listeners && (this.__listeners = {});
		type.indexOf("on") != 0 && (type = "on" + type);
		var t = this.__listeners;
		if (!t[type]) return;
		t[type][handler] && delete t[type][handler]
	};
	baidu.lang.Class[Tprototype].dispatchEvent = function(event, options) {
		if (baidu.lang.isString(event)) event = new baidu.lang.Event(event);
		!this.__listeners && (this.__listeners = {});
		options = options || {};
		for (var i in options) event[i] = options[i];
		var i, t = this.__listeners,
			p = event.type;
		event.target = event.target || this;
		event.currentTarget = this;
		p.indexOf("on") != 0 && (p = "on" + p);
		baidu.lang.isFunction(this[p]) && this[p].apply(this, arguments);
		if (typeof t[p] == "object") for (i in t[p]) t[p][i].apply(this, arguments);
		return event.returnValue
	};
	baidu.lang.inherits = function(subClass, superClass, className) {
		var key, proto, selfProps = subClass[Tprototype],
			clazz = new Function;
		clazz[Tprototype] = superClass[Tprototype];
		proto = subClass[Tprototype] = new clazz;
		for (key in selfProps) proto[key] = selfProps[key];
		subClass[Tprototype].constructor = subClass;
		subClass.superClass = superClass[Tprototype];
		if ("string" == typeof className) proto._className = className
	};
	baidu.inherits = baidu.lang.inherits;
	baidu.lang.instance = function(guid) {
		return window[baidu.guid]["_instances"][guid] || null
	};
	baidu.platform = baidu.platform || {};
	baidu.platform.isMacintosh = /macintosh/i.test(navigator.userAgent);
	baidu.platform.isWindows = /windows/i.test(navigator.userAgent);
	baidu.platform.isX11 = /x11/i.test(navigator.userAgent);
	baidu.platform.isAndroid = /android/i.test(navigator.userAgent);
	if (/android (\d+\.\d)/i.test(navigator.userAgent)) baidu.platform.android = baidu.android = TRegExp["$1"];
	baidu.platform.isIpad = /ipad/i.test(navigator.userAgent);
	baidu.platform.isIphone = /iphone/i.test(navigator.userAgent);
	baidu.lang.Event[Tprototype].inherit = function(e) {
		var me = this;
		this.domEvent = e = window.event || e;
		me.clientX = e.clientX || e.pageX;
		me.clientY = e.clientY || e.pageY;
		me[ToffsetX] = e[ToffsetX] || e.layerX;
		me[ToffsetY] = e[ToffsetY] || e.layerY;
		me.screenX = e.screenX;
		me.screenY = e.screenY;
		me.ctrlKey = e.ctrlKey || e.metaKey;
		me.shiftKey = e.shiftKey;
		me.altKey = e.altKey;
		if (e.touches) {
			me.touches = [];
			for (var i = 0; i < e.touches[Tlength]; i++) me.touches.push({
				clientX: e.touches[i].clientX,
				clientY: e.touches[i].clientY,
				screenX: e.touches[i].screenX,
				screenY: e.touches[i].screenY,
				pageX: e.touches[i].pageX,
				pageY: e.touches[i].pageY,
				target: e.touches[i].target,
				identifier: e.touches[i].identifier
			})
		}
		if (e.changedTouches) {
			me.changedTouches = [];
			for (var i = 0; i < e.changedTouches[Tlength]; i++) me.changedTouches.push({
				clientX: e.changedTouches[i].clientX,
				clientY: e.changedTouches[i].clientY,
				screenX: e.changedTouches[i].screenX,
				screenY: e.changedTouches[i].screenY,
				pageX: e.changedTouches[i].pageX,
				pageY: e.changedTouches[i].pageY,
				target: e.changedTouches[i].target,
				identifier: e.changedTouches[i].identifier
			})
		}
		if (e.targetTouches) {
			me.targetTouches = [];
			for (var i = 0; i < e.targetTouches[Tlength]; i++) me.targetTouches.push({
				clientX: e.targetTouches[i].clientX,
				clientY: e.targetTouches[i].clientY,
				screenX: e.targetTouches[i].screenX,
				screenY: e.targetTouches[i].screenY,
				pageX: e.targetTouches[i].pageX,
				pageY: e.targetTouches[i].pageY,
				target: e.targetTouches[i].target,
				identifier: e.targetTouches[i].identifier
			})
		}
		me.rotation = e.rotation;
		me.scale = e.scale;
		return me
	};
	baidu.lang.decontrol = function(guid) {
		var m = window[baidu.guid];
		m._instances && delete m._instances[guid]
	};
	baidu.event = {};
	baidu.on = baidu.event.on = function(el, type, handler) {
		if (!(el = baidu.g(el))) return el;
		type = type.replace(/^on/, "");
		if (el[TaddEventListener]) el[TaddEventListener](type, handler, false);
		else if (el.attachEvent) el.attachEvent("on" + type, handler);
		return el
	};
	baidu.un = baidu.event.un = function(el, type, handler) {
		if (!(el = baidu.g(el))) return el;
		type = type.replace(/^on/, "");
		if (el[TremoveEventListener]) el[TremoveEventListener](type, handler, false);
		else if (el.detachEvent) el.detachEvent("on" + type, handler);
		return el
	};
	baidu.dom.hasClass = function(el, className) {
		if (!el || !el.className || typeof el.className != "string") return false;
		var res = -1;
		try {
			res = el.className == className || el.className.search(new TRegExp("(\\s|^)" + className + "(\\s|$)"))
		} catch (e) {
			return false
		}
		return res > -1
	};
	baidu.enableTapEvent = function() {
		function Tap(element) {
			if (!Tdocument[TaddEventListener]) return;
			this.element = element;
			this.eventStart = this.hasTouch ? "touchstart" : "mousedown";
			this.eventMove = this.hasTouch ? "touchmove" : "mousemove";
			this.eventEnd = this.hasTouch ? "touchend" : "mouseup";
			this.moved = false;
			this.startX = 0;
			this.startY = 0;
			this.element[TaddEventListener](this.eventStart, this, false);
			T.on(this.element, "mousedown", function() {});
			this.handleEvent(null)
		}
		Tap[Tprototype] = {
			hasTouch: "ontouchstart" in window || "createTouch" in document,
			start: function(e) {
				stopBubble(e);
				this.moved = false;
				this.startX = this.hasTouch ? e.touches[0].clientX : e.clientX;
				this.startY = this.hasTouch ? e.touches[0].clientY : e.clientY;
				this.element[TaddEventListener](this.eventMove, this, false);
				this.element[TaddEventListener](this.eventEnd, this, false)
			},
			move: function(e) {
				stopAndPrevent(e);
				var x = this.hasTouch ? e.touches[0].clientX : e.clientX,
					y = this.hasTouch ? e.touches[0].clientY : e.clientY;
				if (TMath.abs(x - this.startX) > 10 || TMath.abs(y - this.startY) > 10) this.moved = true
			},
			end: function(e) {
				stopAndPrevent(e);
				if (!this.moved) {
					var tapEvent = Tdocument.createEvent("Event");
					tapEvent.initEvent("tap", false, true);
					this.element.dispatchEvent(tapEvent)
				}
				this.element[TremoveEventListener](this.eventMove, this, false);
				this.element[TremoveEventListener](this.eventEnd, this, false)
			},
			handleEvent: function(e) {
				if (e) switch (e.type) {
				case this.eventStart:
					this.start(e);
					break;
				case this.eventMove:
					this.move(e);
					break;
				case this.eventEnd:
					this.end(e);
					break
				}
			}
		};
		return function(element) {
			return new Tap(element)
		}
	}();
	var BMap = window["BMap"] || {};
	BMap.version = "1.4";
	BMap._register = [];
	BMap.register = function(handler) {
		this._register.push(handler)
	};
	BMap.apiLoad = BMap["apiLoad"] ||
	function() {};
	var AUTHENTIC_KEY = window["BMAP_AUTHENTIC_KEY"];
	window["BMAP_AUTHENTIC_KEY"] = null;
	var TIME_LINE = {};
	TIME_LINE.startLoadScript = window["BMap_loadScriptTime"];
	TIME_LINE.loadScriptEnd = (new Date).getTime();
	TIME_LINE.loadedMap = null;
	var isFirstTilesLoaded = true;

	function Map(element, opts) {
		element = baidu.g(element);
		if (!element) return;
		var me = this;
		baidu.lang.Class.call(me);
		var opts = opts || {};
		me.config = {
			clickInterval: 200,
			enableDragging: true,
			enableKeyboard: false,
			enableDblclickZoom: true,
			enableContinuousZoom: false,
			enableWheelZoom: false,
			enableMouseDown: true,
			enablePinchToZoom: true,
			enableAutoResize: true,
			fps: 25,
			zoomerDuration: 240,
			actionDuration: 450,
			defaultCursor: MapConfig.defaultCursor,
			draggingCursor: MapConfig.draggingCursor,
			isOverviewMap: !! opts.isOverviewMap,
			minZoom: opts["minZoom"] || 1,
			maxZoom: opts["maxZoom"] || 18,
			mapType: opts["mapType"] || BMAP_NORMAL_MAP,
			restrictBounds: false,
			enableInertialDragging: false,
			drawMargin: 500,
			enableHighResolution: !(opts["enableHighResolution"] === false),
			enableMapClick: !(opts["enableMapClick"] === false)
		};
		if (opts["enableAutoResize"]) me.config.enableAutoResize = opts["enableAutoResize"];
		me.container = element;
		me._setStyle(element);
		element.unselectable = "on";
		element.innerHTML = "";
		element[TappendChild](me.render());
		if (opts["size"]) this.setSize(opts["size"]);
		var domSize = me.getSize();
		me[Twidth] = domSize[Twidth];
		me[Theight] = domSize[Theight];
		me[ToffsetX] = 0;
		me[ToffsetY] = 0;
		me.platform = element.firstChild;
		me.maskLayer = me.platform.firstChild;
		me.maskLayer.style[Twidth] = me[Twidth] + "px";
		me.maskLayer.style[Theight] = me[Theight] + "px";
		me._panes = {};
		me.centerPoint = new Point(0, 0);
		me.mercatorCenter = new Point(0, 0);
		me.zoomLevel = 1;
		me.lastLevel = 0;
		me.defaultZoomLevel = null;
		me.defaultCenter = null;
		me.currentCity = "";
		me.cityCode = "";
		me._hotspots = {};
		me._hotspots["custom"] = {};
		me.currentOperation = 0;
		opts = opts || {};
		var mapType = me.mapType = me.config.mapType;
		me.projection = mapType.getProjection();
		if (mapType === BMAP_PERSPECTIVE_MAP) _addStat(5002);
		if (mapType === BMAP_SATELLITE_MAP || mapType === BMAP_HYBRID_MAP) _addStat(5003);
		var config = me.config;
		config.userMinZoom = opts["minZoom"];
		config.userMaxZoom = opts["maxZoom"];
		me._checkZoom();
		me.temp = {
			operating: false,
			arrow: 0,
			lastDomMoveTime: 0,
			lastLoadTileTime: 0,
			lastMovingTime: 0,
			canKeyboard: false,
			registerIndex: -1,
			curSpots: []
		};
		me.platform.style.cursor = me.config.defaultCursor;
		for (var i = 0; i < BMap._register[Tlength]; i++) BMap._register[i](me);
		me.temp.registerIndex = i;
		me._bind();
		ModuleMgr.load("map", function() {
			me._draw()
		});
		if (me.config.enableMapClick) {
			setTimeout(function() {
				_addStat("load_mapclick")
			}, 1E3);
			ModuleMgr.load("mapclick", function() {
				window["MPC_Mgr"] = new MapPoiClick(me)
			})
		}
		if (isDesktop()) ModuleMgr.load("oppc", function() {
			me._asyncRegister()
		});
		if (isMobile()) ModuleMgr.load("opmb", function() {
			me._asyncRegister()
		});
		element = null;
		me._viewTiles = []
	}
	baidu.lang.inherits(Map, baidu.lang.Class, "Map");
	baidu[Textend](Map[Tprototype], {
		render: function() {
			var platform = create("div");
			var s = platform.style;
			s.overflow = "visible";
			s[Tposition] = "absolute";
			s.zIndex = "0";
			s.top = s.left = "0px";
			var mask = create("div", {
				"class": "BMap_mask"
			});
			var ms = mask.style;
			ms[Tposition] = "absolute";
			ms.top = ms.left = "0px";
			ms.zIndex = "9";
			ms.overflow = "hidden";
			ms.WebkitUserSelect = "none";
			platform[TappendChild](mask);
			return platform
		},
		_setStyle: function(el) {
			var style = el.style;
			style.overflow = "hidden";
			if (getCurrentStyle(el)[Tposition] != "absolute") {
				style[Tposition] = "relative";
				style.zIndex = 0
			}
			style.backgroundColor = "#F3F1EC";
			style.color = "#000";
			style.textAlign = "left"
		},
		_bind: function() {
			var me = this;
			me._watchSize = function() {
				var wh = me.getSize();
				if (me[Twidth] != wh[Twidth] || me[Theight] != wh[Theight]) {
					var originSize = new Size(me[Twidth], me[Theight]);
					var oe = new BaseEvent("onbeforeresize");
					oe.size = originSize;
					me.dispatchEvent(oe);
					me._updateCenterPoint((wh[Twidth] - me[Twidth]) / 2, (wh[Theight] - me[Theight]) / 2);
					me.maskLayer.style[Twidth] = (me[Twidth] = wh[Twidth]) + "px";
					me.maskLayer.style[Theight] = (me[Theight] = wh[Theight]) + "px";
					var e = new BaseEvent("onresize");
					e["size"] = wh;
					me.dispatchEvent(e)
				}
			};
			if (me.config.enableAutoResize) me.temp.autoResizeTimer = setInterval(me._watchSize, 80)
		},
		_updateCenterPoint: function(xn, yn, cp, useCp) {
			var zu = this.getMapType().getZoomUnits(this.getZoom());
			var pro = this.projection;
			var reAssign = true;
			if (cp && Point.isInRange(cp)) {
				this.centerPoint = new Point(cp["lng"], cp["lat"]);
				reAssign = false
			}
			var mcp = cp && useCp ? pro.lngLatToMercator(cp, this.currentCity) : this.mercatorCenter;
			if (mcp) {
				this.mercatorCenter = new Point(mcp["lng"] + xn * zu, mcp["lat"] - yn * zu);
				var p = pro.mercatorToLngLat(this.mercatorCenter, this.currentCity);
				if (p && reAssign) this.centerPoint = p
			}
		},
		zoomTo: function(level, point) {
			if (!isNumber(level)) return;
			level = this._getProperZoom(level).zoom;
			if (level == this.zoomLevel) return;
			this.lastLevel = this.zoomLevel;
			this.zoomLevel = level;
			var cPoint;
			if (point) cPoint = point;
			else if (this.getInfoWindow()) cPoint = this.getInfoWindow().getPosition();
			if (cPoint) {
				var cPixel = this.pointToPixel(cPoint, this.lastLevel);
				this._updateCenterPoint(this[Twidth] / 2 - cPixel.x, this[Theight] / 2 - cPixel.y, this.pixelToPoint(cPixel, this.lastLevel), true)
			}
			this.dispatchEvent(new BaseEvent("onzoomstart"));
			this.dispatchEvent(new BaseEvent("onzoomstartcode"))
		},
		setZoom: function(zoom) {
			this.zoomTo(zoom)
		},
		zoomIn: function(point) {
			this.zoomTo(this.zoomLevel + 1, point)
		},
		zoomOut: function(point) {
			this.zoomTo(this.zoomLevel - 1, point)
		},
		panTo: function(center, opts) {
			if (!(center instanceof Point)) return;
			this.mercatorCenter = this.projection.lngLatToMercator(center, this.currentCity);
			if (Point.isInRange(center)) this.centerPoint = new Point(center["lng"], center["lat"]);
			else this.centerPoint = this.projection.mercatorToLngLat(this.mercatorCenter, this.currentCity)
		},
		panBy: function(dx, dy) {
			dx = TMath.round(dx) || 0;
			dy = TMath.round(dy) || 0;
			this._updateCenterPoint(-dx, -dy)
		},
		addControl: function(control) {
			if (control && isFunction(control._i)) {
				control._i(this);
				this.dispatchEvent(new BaseEvent("onaddcontrol", control))
			}
		},
		removeControl: function(control) {
			if (control && isFunction(control.remove)) {
				control.remove();
				this.dispatchEvent(new BaseEvent("onremovecontrol", control))
			}
		},
		addContextMenu: function(menu) {
			if (menu && isFunction(menu.initialize)) {
				menu.initialize(this);
				this.dispatchEvent(new BaseEvent("onaddcontextmenu", menu))
			}
		},
		removeContextMenu: function(menu) {
			if (menu && isFunction(menu.remove)) {
				this.dispatchEvent(new BaseEvent("onremovecontextmenu", menu));
				menu.remove()
			}
		},
		addOverlay: function(overlay) {
			if (overlay && isFunction(overlay._i)) {
				overlay._i(this);
				this.dispatchEvent(new BaseEvent("onaddoverlay", overlay))
			}
		},
		removeOverlay: function(overlay) {
			if (overlay && isFunction(overlay.remove)) {
				overlay.remove();
				this.dispatchEvent(new BaseEvent("onremoveoverlay", overlay))
			}
		},
		clearOverlays: function() {
			this.dispatchEvent(new BaseEvent("onclearoverlays"))
		},
		addTileLayer: function(tilelayer) {
			if (tilelayer) this.dispatchEvent(new BaseEvent("onaddtilelayer", tilelayer))
		},
		removeTileLayer: function(tilelayer) {
			if (tilelayer) this.dispatchEvent(new BaseEvent("onremovetilelayer", tilelayer))
		},
		setMapType: function(mapType) {
			if (this.mapType === mapType) return;
			var e = new BaseEvent("onsetmaptype");
			var preMapType = this.mapType;
			e.preMapType = preMapType;
			this.mapType = this.config.mapType = mapType;
			this.projection = this.mapType.getProjection();
			this._updateCenterPoint(0, 0, this.getCenter(), true);
			this._checkZoom();
			var zoomLevel = this._getProperZoom(this.getZoom()).zoom;
			this.zoomTo(zoomLevel);
			this.dispatchEvent(e);
			var e = new BaseEvent("onmaptypechange");
			e.zoomLevel = zoomLevel;
			e.mapType = mapType;
			this.dispatchEvent(e);
			if (mapType === BMAP_SATELLITE_MAP || mapType === BMAP_HYBRID_MAP) _addStat(5003)
		},
		setCenter: function(center) {
			var me = this;
			if (center instanceof Point) me.panTo(center, {
				"noAnimation": true
			});
			else if (isString(center)) {
				if (me.mapType == BMAP_PERSPECTIVE_MAP) {
					var obj = MapConfig.cityNames[center];
					if (obj) {
						pt = obj.pt;
						me.setCenter(pt)
					}
					return
				}
				var local = this._getLocal();
				local.setSearchCompleteCallback(function(result) {
					if (local.getStatus() == 0 && local._json["result"]["type"] == 2) {
						me.setCenter(result.getPoi(0)["point"]);
						if (BMAP_PERSPECTIVE_MAP.getCityName(center)) me.setCurrentCity(center)
					}
				});
				local.search(center, {
					log: "center"
				})
			}
		},
		centerAndZoom: function(center, zoom) {
			var me = this;
			if (isString(center)) {
				if (me.mapType == BMAP_PERSPECTIVE_MAP) {
					var obj = MapConfig.cityNames[center];
					if (obj) {
						pt = obj.pt;
						me.centerAndZoom(pt, zoom)
					}
					return
				}
				var loc = me._getLocal();
				loc.setSearchCompleteCallback(function(result) {
					if (loc.getStatus() == 0 && loc._json["result"]["type"] == 2) {
						var c = result.getPoi(0)["point"];
						var z = zoom || SUtil.getBestLevel(loc._json["content"]["level"], me);
						me.centerAndZoom(c, z);
						if (BMAP_PERSPECTIVE_MAP.getCityName(center)) me.setCurrentCity(center)
					}
				});
				loc.search(center, {
					log: "center"
				});
				return
			}
			if (!(center instanceof Point) || !zoom) return;
			zoom = me._getProperZoom(zoom).zoom;
			me.lastLevel = me.zoomLevel || zoom;
			me.zoomLevel = zoom;
			me.centerPoint = new Point(center["lng"], center["lat"]);
			me.mercatorCenter = me.projection.lngLatToMercator(me.centerPoint, me.currentCity);
			me.defaultZoomLevel = me.defaultZoomLevel || me.zoomLevel;
			me.defaultCenter = me.defaultCenter || me.centerPoint;
			var e = new BaseEvent("onload");
			var ecode = new BaseEvent("onloadcode");
			e["point"] = new Point(center["lng"], center["lat"]);
			e["pixel"] = me.pointToPixel(me.centerPoint, me.zoomLevel);
			e["zoom"] = zoom;
			if (!me.loaded) {
				me.loaded = true;
				me.dispatchEvent(e);
				if (!TIME_LINE.loadedMap) TIME_LINE.loadedMap = getCurrentTime()
			}
			me.dispatchEvent(ecode);
			me.dispatchEvent(new BaseEvent("onmoveend"));
			if (me.lastLevel != me.zoomLevel) me.dispatchEvent(new BaseEvent("onzoomend"))
		},
		_getLocal: function() {
			if (!this.temp.local) this.temp.local = new LocalSearch(1);
			return this.temp.local
		},
		"reset": function() {
			this.centerAndZoom(this.defaultCenter, this.defaultZoomLevel, true)
		},
		"enableDragging": function() {
			this.config.enableDragging = true
		},
		"disableDragging": function() {
			this.config.enableDragging = false
		},
		"enableInertialDragging": function() {
			this.config.enableInertialDragging = true
		},
		"disableInertialDragging": function() {
			this.config.enableInertialDragging = false
		},
		"enableScrollWheelZoom": function() {
			this.config.enableWheelZoom = true
		},
		"disableScrollWheelZoom": function() {
			this.config.enableWheelZoom = false
		},
		"enableContinuousZoom": function() {
			this.config.enableContinuousZoom = true
		},
		"disableContinuousZoom": function() {
			this.config.enableContinuousZoom = false
		},
		"enableDoubleClickZoom": function() {
			this.config.enableDblclickZoom = true
		},
		"disableDoubleClickZoom": function() {
			this.config.enableDblclickZoom = false
		},
		"enableKeyboard": function() {
			this.config.enableKeyboard = true
		},
		"disableKeyboard": function() {
			this.config.enableKeyboard = false
		},
		"enablePinchToZoom": function() {
			this.config.enablePinchToZoom = true
		},
		"disablePinchToZoom": function() {
			this.config.enablePinchToZoom = false
		},
		"enableAutoResize": function() {
			this.config.enableAutoResize = true;
			this._watchSize();
			if (!this.temp.autoResizeTimer) this.temp.autoResizeTimer = setInterval(this._watchSize, 80)
		},
		"disableAutoResize": function() {
			this.config.enableAutoResize = false;
			if (this.temp.autoResizeTimer) {
				clearInterval(this.temp.autoResizeTimer);
				this.temp.autoResizeTimer = null
			}
		},
		getSize: function() {
			if (this.customSize && this.customSize instanceof Size) return new Size(this.customSize[Twidth], this.customSize[Theight]);
			else return new Size(this.container.clientWidth, this.container.clientHeight)
		},
		setSize: function(size) {
			if (size && size instanceof Size) {
				this.customSize = size;
				this.container.style[Twidth] = size[Twidth] + "px";
				this.container.style[Theight] = size[Theight] + "px"
			} else this.customSize = null
		},
		getCenter: function() {
			return this.centerPoint
		},
		getZoom: function() {
			return this.zoomLevel
		},
		checkResize: function() {
			this._watchSize()
		},
		_getProperZoom: function(targetZoom) {
			var levelMin = this.config.minZoom,
				levelMax = this.config.maxZoom,
				exceeded = false;
			if (targetZoom < levelMin) {
				exceeded = true;
				targetZoom = levelMin
			}
			if (targetZoom > levelMax) {
				exceeded = true;
				targetZoom = levelMax
			}
			return {
				zoom: targetZoom,
				exceeded: exceeded
			}
		},
		getContainer: function() {
			return this.container
		},
		pointToPixel: function(point, zoom) {
			zoom = zoom || this.getZoom();
			return this.projection.pointToPixel(point, zoom, this.mercatorCenter, this.getSize(), this.currentCity)
		},
		pixelToPoint: function(pixel, zoom) {
			zoom = zoom || this.getZoom();
			return this.projection.pixelToPoint(pixel, zoom, this.mercatorCenter, this.getSize(), this.currentCity)
		},
		pointToOverlayPixel: function(point, zoom) {
			if (!point) return;
			var pt = new Point(point["lng"], point["lat"]);
			var pixel = this.pointToPixel(pt, zoom);
			pixel.x -= this[ToffsetX];
			pixel.y -= this[ToffsetY];
			return pixel
		},
		overlayPixelToPoint: function(pixel, zoom) {
			if (!pixel) return;
			var pix = new Pixel(pixel.x, pixel.y);
			pix.x += this[ToffsetX];
			pix.y += this[ToffsetY];
			return this.pixelToPoint(pix, zoom)
		},
		"pointToPixelFor3D": function(point, callback) {
			var me = this;
			var mapType = me.mapType,
				curCity = map.currentCity;
			if (mapType == BMAP_PERSPECTIVE_MAP && curCity) CoordTransUtils.convertPtToPix3D(point, me, callback)
		},
		pixelToPointFor3D: function(pixel, callback) {
			var me = this;
			var mapType = me.mapType,
				curCity = map.currentCity;
			if (mapType == BMAP_PERSPECTIVE_MAP && curCity) CoordTransUtils.convertPixToPt3D(pixel, me, callback)
		},
		pointToOverlayPixelFor3D: function(point, callback) {
			var me = this;
			var mapType = me.mapType,
				curCity = map.currentCity;
			if (mapType == BMAP_PERSPECTIVE_MAP && curCity) {
				var innerCbk = function(innerPixel) {
						innerPixel.x -= me[ToffsetX];
						innerPixel.y -= me[ToffsetY];
						callback && callback(innerPixel)
					};
				CoordTransUtils.convertPtToPix3D(point, me, innerCbk)
			}
		},
		overlayPixelToPointFor3D: function(pixel, callback) {
			var me = this;
			var mapType = me.mapType,
				curCity = map.currentCity;
			if (mapType == BMAP_PERSPECTIVE_MAP && curCity) {
				pixel.x += me[ToffsetX];
				pixel.y += me[ToffsetY];
				CoordTransUtils.convertPixToPt3D(pixel, me, callback)
			}
		},
		getBounds: function() {
			if (!this.isLoaded()) return new Bounds;
			var opts = arguments[0] || {},
				margins = opts["margins"] || [0, 0, 0, 0],
				zoom = opts["zoom"] || null,
				pt1 = this.pixelToPoint({
					x: margins[3],
					y: this[Theight] - margins[2]
				}, zoom),
				pt2 = this.pixelToPoint({
					x: this[Twidth] - margins[1],
					y: margins[0]
				}, zoom);
			return new Bounds(pt1, pt2)
		},
		isLoaded: function() {
			return !!this.loaded
		},
		_getBestLevel: function(bounds, opts) {
			var mapType = this.getMapType();
			var margins = opts["margins"] || [10, 10, 10, 10],
				zoomFactor = opts["zoomFactor"] || 0,
				ew = margins[1] + margins[3],
				eh = margins[0] + margins[2],
				minLevel = mapType.getMinZoom(),
				maxLevel = mapType.getMaxZoom();
			for (var level = maxLevel; level >= minLevel; level--) {
				var zoomUnits = this.getMapType().getZoomUnits(level);
				if (bounds.toSpan()["lng"] / zoomUnits < this[Twidth] - ew && bounds.toSpan()["lat"] / zoomUnits < this[Theight] - eh) break
			}
			level += zoomFactor;
			if (level < minLevel) level = minLevel;
			if (level > maxLevel) level = maxLevel;
			return level
		},
		getViewport: function(view, opts) {
			var curViewport = {
				"center": this.getCenter(),
				"zoom": this.getZoom()
			};
			if (!view || !view instanceof Bounds && view[Tlength] == 0 || view instanceof Bounds && view.isEmpty()) return curViewport;
			var points = [];
			if (view instanceof Bounds) {
				points.push(view.getNorthEast());
				points.push(view.getSouthWest())
			} else points = view.slice(0);
			opts = opts || {};
			var mercatorPts = [];
			for (var i = 0, l = points[Tlength]; i < l; i++) mercatorPts.push(this.projection.lngLatToMercator(points[i], this.currentCity));
			var bounds = new Bounds;
			for (var i = mercatorPts[Tlength] - 1; i >= 0; i--) bounds[Textend](mercatorPts[i]);
			if (bounds.isEmpty()) return curViewport;
			var center = bounds.getCenter();
			var zoom = this._getBestLevel(bounds, opts);
			if (opts["margins"]) {
				var margins = opts["margins"],
					wBias = (margins[1] - margins[3]) / 2,
					hBias = (margins[0] - margins[2]) / 2,
					zoomUnit = this.getMapType().getZoomUnits(zoom);
				if (opts["offset"]) {
					wBias = opts["offset"][Twidth];
					hBias = opts["offset"][Theight]
				}
				center["lng"] = center["lng"] + zoomUnit * wBias;
				center["lat"] = center["lat"] + zoomUnit * hBias
			}
			center = this.projection.mercatorToLngLat(center, this.currentCity);
			return {
				"center": center,
				"zoom": zoom
			}
		},
		setViewport: function(view, opts) {
			var viewport;
			if (view && view["center"]) viewport = view;
			else viewport = this.getViewport(view, opts);
			opts = opts || {};
			var delay = opts["delay"] || 200;
			if (viewport.zoom == this.zoomLevel && opts["enableAnimation"] != false) {
				var me = this;
				setTimeout(function() {
					me.panTo(viewport["center"], {
						"duration": 210
					})
				}, delay)
			} else this.centerAndZoom(viewport["center"], viewport["zoom"])
		},
		getPanes: function() {
			return this._panes
		},
		getInfoWindow: function() {
			if (this.temp.infoWin && this.temp.infoWin.isOpen()) return this.temp.infoWin;
			return null
		},
		"getDistance": function(start, end) {
			if (!start || !end) return;
			var dis = 0;
			dis = MercatorProjection.getDistanceByLL(start, end);
			return dis
		},
		getOverlays: function() {
			var results = [],
				overlays = this._overlays,
				customOverlays = this._customOverlays;
			if (overlays) for (var i in overlays) if (overlays[i] instanceof OverlayInternal) results.push(overlays[i]);
			if (customOverlays) for (var i = 0, l = customOverlays[Tlength]; i < l; i++) results.push(customOverlays[i]);
			return results
		},
		getMapType: function() {
			return this.mapType
		},
		_asyncRegister: function() {
			for (var i = this.temp.registerIndex; i < BMap._register[Tlength]; i++) BMap._register[i](this);
			this.temp.registerIndex = i
		},
		setCurrentCity: function(city) {
			var me = this;
			me.currentCity = BMAP_PERSPECTIVE_MAP.getCityName(city);
			me.cityCode = BMAP_PERSPECTIVE_MAP.getCityCode(me.currentCity);
			if (me.mapType == BMAP_PERSPECTIVE_MAP) if (me.projection instanceof PerspectiveProjection) me.projection.curCityName = me.currentCity
		},
		"setDefaultCursor": function(cursor) {
			this.config.defaultCursor = cursor;
			if (this.platform) this.platform.style.cursor = this.config.defaultCursor
		},
		"getDefaultCursor": function() {
			return this.config.defaultCursor
		},
		"setDraggingCursor": function(cursor) {
			this.config.draggingCursor = cursor
		},
		"getDraggingCursor": function() {
			return this.config.draggingCursor
		},
		highResolutionEnabled: function() {
			return this.config.enableHighResolution && window.devicePixelRatio > 1
		},
		addHotspot: function(hotspot, tag) {
			if (!tag) tag = "custom";
			else if (!this._hotspots[tag]) this._hotspots[tag] = {};
			hotspot["tag"] = tag;
			if (hotspot instanceof Hotspot) {
				this._hotspots[tag][hotspot.guid] = hotspot;
				hotspot.initialize(this)
			}
			var me = this;
			ModuleMgr.load("hotspot", function() {
				me._asyncRegister()
			})
		},
		removeHotspot: function(hotspot, tag) {
			if (!tag) tag = "custom";
			if (this._hotspots[tag][hotspot.guid]) delete this._hotspots[tag][hotspot.guid]
		},
		clearHotspots: function(tag) {
			if (!tag) tag = "custom";
			this._hotspots[tag] = {}
		},
		_checkZoom: function() {
			var mapTypeMinZoom = this.highResolutionEnabled() ? this.mapType._opts.highMinZoom : this.mapType.getMinZoom();
			var mapTypeMaxZoom = this.highResolutionEnabled() ? this.mapType._opts.highMaxZoom : this.mapType.getMaxZoom();
			var config = this.config;
			config.minZoom = config.userMinZoom || mapTypeMinZoom;
			config.maxZoom = config.userMaxZoom || mapTypeMaxZoom;
			if (config.minZoom < mapTypeMinZoom) config.minZoom = mapTypeMinZoom;
			if (config.maxZoom > mapTypeMaxZoom) config.maxZoom = mapTypeMaxZoom
		},
		"setMinZoom": function(zoom) {
			if (zoom > this.config.maxZoom) zoom = this.config.maxZoom;
			this.config.userMinZoom = zoom;
			this._updateZoom()
		},
		"setMaxZoom": function(zoom) {
			if (zoom < this.config.minZoom) zoom = this.config.minZoom;
			this.config.userMaxZoom = zoom;
			this._updateZoom()
		},
		_updateZoom: function() {
			this._checkZoom();
			var config = this.config;
			if (this.zoomLevel < config.minZoom) this.setZoom(config.minZoom);
			else if (this.zoomLevel > config.maxZoom) this.setZoom(config.maxZoom);
			var e = new BaseEvent("onzoomspanchange");
			e.minZoom = config.minZoom;
			e.maxZoom = config.maxZoom;
			this.dispatchEvent(e)
		},
		getViewTiles: function() {
			return this._viewTiles
		},
		"getKey": function() {
			return AUTHENTIC_KEY
		}
	});
	var BMAP_API_VERSION = "1.4",
		BMAP_COORD_LNGLAT = 0,
		BMAP_COORD_MERCATOR = 1;

	function _addStat(code, opts) {
		if (!code) return;
		opts = opts || {};
		var extq = "";
		for (var i in opts) extq = extq + "&" + i + "=" + encodeURIComponent(opts[i]);
		var sendStat = function(q) {
				if (!q) return;
				_addStat._sending = true;
				setTimeout(function() {
					_addStat._img.src = MapConfig.imgPath + "blank.gif?" + q.src
				}, 50)
			};
		var reqNext = function() {
				var nq = _addStat._reqQueue.shift();
				if (nq) sendStat(nq)
			};
		var ts = (TMath.random() * 1E8).toFixed(0);
		if (_addStat._sending) _addStat._reqQueue.push({
			src: "product=jsapi&v=" + BMap.version + "&t=" + ts + "&code=" + code + extq
		});
		else sendStat({
			src: "product=jsapi&v=" + BMap.version + "&t=" + ts + "&code=" + code + extq
		});
		if (!_addStat._binded) {
			baidu.on(_addStat._img, "load", function() {
				_addStat._sending = false;
				reqNext()
			});
			baidu.on(_addStat._img, "error", function() {
				_addStat._sending = false;
				reqNext()
			});
			_addStat._binded = true
		}
	}
	_addStat._reqQueue = [];
	_addStat._img = new Image;
	_addStat(5E3);

	function Animation(opts) {
		var defaultOptions = {
			duration: 1E3,
			fps: 30,
			delay: 0,
			transition: Transitions.linear,
			onStop: function() {}
		};
		this._anis = [];
		if (opts) for (var i in opts) defaultOptions[i] = opts[i];
		this._opts = defaultOptions;
		if (isNumber(defaultOptions.delay)) {
			var me = this;
			setTimeout(function() {
				me.start()
			}, defaultOptions.delay)
		} else if (defaultOptions.delay != Animation.INFINITE) this.start()
	}
	Animation.INFINITE = "INFINITE";
	Animation[Tprototype].start = function() {
		this._beginTime = getCurrentTime();
		this._endTime = this._beginTime + this._opts.duration;
		this._launch()
	};
	Animation[Tprototype].add = function(ani) {
		this._anis.push(ani)
	};
	Animation[Tprototype]._launch = function() {
		var me = this;
		var now = getCurrentTime();
		if (now >= me._endTime) {
			if (isFunction(me._opts.render)) me._opts.render(me._opts.transition(1));
			if (isFunction(me._opts.finish)) me._opts.finish();
			if (me._anis[Tlength] > 0) {
				var newAni = me._anis[0];
				newAni._anis = [].concat(me._anis.slice(1));
				newAni.start()
			}
			return
		}
		me.schedule = me._opts.transition((now - me._beginTime) / me._opts.duration);
		if (isFunction(me._opts.render)) me._opts.render(me.schedule);
		if (!me.terminative) me._timer = setTimeout(function() {
			me._launch()
		}, 1E3 / me._opts.fps)
	};
	Animation[Tprototype].stop = function(gotoEnd) {
		this.terminative = true;
		for (var i = 0; i < this._anis[Tlength]; i++) {
			this._anis[i].stop();
			this._anis[i] = null
		}
		this._anis[Tlength] = 0;
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = null
		}
		this._opts.onStop(this.schedule);
		if (gotoEnd) {
			this._endTime = this._beginTime;
			this._launch()
		}
	};
	Animation[Tprototype].cancel = function() {
		if (this._timer) clearTimeout(this._timer);
		this._endTime = this._beginTime;
		this.schedule = 0
	};
	Animation[Tprototype].setFinishCallback = function(callback) {
		if (this._anis[Tlength] > 0) this._anis[this._anis[Tlength] - 1]._opts.finish = callback;
		else this._opts.finish = callback
	};
	var Transitions = {
		linear: function(t) {
			return t
		},
		reverse: function(t) {
			return 1 - t
		},
		easeInQuad: function(t) {
			return t * t
		},
		easeInCubic: function(t) {
			return TMath.pow(t, 3)
		},
		easeOutQuad: function(t) {
			return -(t * (t - 2))
		},
		easeOutCubic: function(t) {
			return TMath.pow(t - 1, 3) + 1
		},
		easeInOutQuad: function(t) {
			if (t < 0.5) return t * t * 2;
			else return -2 * (t - 2) * t - 1;
			return
		},
		easeInOutCubic: function(t) {
			if (t < 0.5) return TMath.pow(t, 3) * 4;
			else return TMath.pow(t - 1, 3) * 4 + 1
		},
		easeInOutSine: function(t) {
			return (1 - TMath.cos(TMath.PI * t)) / 2
		}
	};
	Transitions["ease-in"] = Transitions.easeInQuad;
	Transitions["ease-out"] = Transitions.easeOutQuad;
	var MapConfig = {
		imgPath: "http://api.map.baidu.com/images/",
		cityNames: {
			"\u5317\u4eac": {
				pinyin: "bj",
				pt: new Point(116.403874, 39.914889)
			},
			"\u4e0a\u6d77": {
				pinyin: "sh",
				pt: new Point(121.487899, 31.249162)
			},
			"\u6df1\u5733": {
				pinyin: "sz",
				pt: new Point(114.025974, 22.546054)
			},
			"\u5e7f\u5dde": {
				pinyin: "gz",
				pt: new Point(113.30765, 23.120049)
			}
		},
		fontFamily: "arial,sans-serif"
	};
	if (baidu.browser.firefox) {
		baidu[Textend](MapConfig, {
			distCursor: "url(" + MapConfig.imgPath + "ruler.cur),crosshair",
			defaultCursor: "-moz-grab",
			draggingCursor: "-moz-grabbing"
		});
		if (baidu.platform.isWindows) MapConfig.fontFamily = "arial,simsun,sans-serif"
	} else if (baidu.browser.chrome || baidu.browser.safari) baidu[Textend](MapConfig, {
		distCursor: "url(" + MapConfig.imgPath + "ruler.cur) 2 6,crosshair",
		defaultCursor: "url(" + MapConfig.imgPath + "openhand.cur) 8 8,default",
		draggingCursor: "url(" + MapConfig.imgPath + "closedhand.cur) 8 8,move"
	});
	else baidu[Textend](MapConfig, {
		distCursor: "url(" + MapConfig.imgPath + "ruler.cur),crosshair",
		defaultCursor: "url(" + MapConfig.imgPath + "openhand.cur),default",
		draggingCursor: "url(" + MapConfig.imgPath + "closedhand.cur),move"
	});

	function Copyright(id, bounds, content) {
		this.id = id;
		this.bounds = bounds;
		this.content = content
	};
	var Operation = {
		undo: 1,
		redo: 2,
		zoom: 4,
		drag: 8,
		move: 16,
		mousewheel: 32,
		toolbarOperation: 64,
		stdMapCtrlDrag: 128,
		dblclick: 256
	};

	function setPosition(obj, position) {
		var s = obj.style;
		s.left = position[0] + "px";
		s.top = position[1] + "px"
	}
	function setUnSelectable(obj) {
		if (baidu.browser.ie > 0) obj.unselectable = "on";
		else obj.style.MozUserSelect = "none"
	}
	function isInDocument(obj) {
		return obj && obj[TparentNode] && obj[TparentNode].nodeType != 11
	}
	function beforeEndHTML(parent, chlidHTML) {
		baidu.dom.insertHTML(parent, "beforeEnd", chlidHTML);
		return parent.lastChild
	}
	function getPosition(obj) {
		var pos = {
			left: 0,
			top: 0
		};
		while (obj && obj.offsetParent) {
			pos.left += obj.offsetLeft;
			pos.top += obj.offsetTop;
			obj = obj.offsetParent
		}
		return pos
	}
	function stopBubble(e) {
		var e = window.event || e;
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
	}
	function preventDefault(e) {
		var e = window.event || e;
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		return false
	}
	function stopAndPrevent(e) {
		stopBubble(e);
		return preventDefault(e)
	}
	function getScroll() {
		var dd = Tdocument.documentElement,
			db = Tdocument.body;
		if (dd && (dd.scrollTop || dd.scrollLeft)) return [dd.scrollTop, dd.scrollLeft];
		else if (db) return [db.scrollTop, db.scrollLeft];
		else return [0, 0]
	}
	function getDistanceByPixel(px1, px2) {
		if (!px1 || !px2) return;
		return TMath.round(TMath.sqrt(TMath.pow(px1.x - px2.x, 2) + TMath.pow(px1.y - px2.y, 2)))
	}
	function jsonToQuery(json, encode) {
		var s = [];
		encode = encode ||
		function(v) {
			return v
		};
		for (var n in json) s.push(n + "=" + encode(json[n]));
		return s.join("&")
	}
	function create(tag, attr, ns) {
		var e = Tdocument.createElement(tag);
		if (ns) e = Tdocument.createElementNS(ns, tag);
		return baidu.dom.setAttrs(e, attr || {})
	}
	function getCurrentStyle(el) {
		if (el.currentStyle) return el.currentStyle;
		else if (el.ownerDocument && el.ownerDocument.defaultView) return el.ownerDocument.defaultView.getComputedStyle(el, null)
	}
	function isFunction(func) {
		return typeof func == "function"
	}
	function isNumber(number) {
		return typeof number == "number"
	}
	function isString(string) {
		return typeof string == "string"
	}
	function isDefined(object) {
		return typeof object != "undefined"
	}
	function isObject(object) {
		return typeof object == "object"
	}
	function isArray(source) {
		return "[object Array]" == Object[Tprototype].toString.call(source)
	}
	var b64array = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";

	function decode64(input) {
		var output = "";
		var chr1, chr2, chr3 = "";
		var enc1, enc2, enc3, enc4 = "";
		var i = 0;
		var base64test = /[^A-Za-z0-9\+\/\=]/g;
		if (!input || base64test.exec(input)) return input;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do {
			enc1 = b64array.indexOf(input.charAt(i++));
			enc2 = b64array.indexOf(input.charAt(i++));
			enc3 = b64array.indexOf(input.charAt(i++));
			enc4 = b64array.indexOf(input.charAt(i++));
			chr1 = enc1 << 2 | enc2 >> 4;
			chr2 = (enc2 & 15) << 4 | enc3 >> 2;
			chr3 = (enc3 & 3) << 6 | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) output = output + String.fromCharCode(chr2);
			if (enc4 != 64) output = output + String.fromCharCode(chr3);
			chr1 = chr2 = chr3 = "";
			enc1 = enc2 = enc3 = enc4 = ""
		} while (i < input[Tlength]);
		return output
	}
	var BaseEvent = baidu.lang.Event;

	function isMobile() {
		return !!(baidu.platform.isIphone || baidu.platform.isIpad || baidu.platform.isAndroid)
	}
	function isDesktop() {
		return !!(baidu.platform.isWindows || baidu.platform.isMacintosh || baidu.platform.isX11)
	}
	function getCurrentTime() {
		return (new Date).getTime()
	}
	function isVml() {
		var a = Tdocument.body[TappendChild](create("div"));
		a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
		var b = a.firstChild;
		if (!b.style) return false;
		b.style["behavior"] = "url(#default#VML)";
		var supported = b ? typeof b["adj"] == "object" : true;
		a[TparentNode][TremoveChild](a);
		return supported
	}
	function isSvg() {
		return !!Tdocument.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
	}
	function isCanvas() {
		return !!create("canvas").getContext
	};
	var DataMgr = {
		request: function(url) {
			var script = create("script", {
				"src": url,
				"type": "text/javascript",
				"charset": "utf-8"
			});
			if (script[TaddEventListener]) script[TaddEventListener]("load", function(e) {
				var t = e.target;
				t[TparentNode][TremoveChild](t)
			}, false);
			else if (script.attachEvent) script.attachEvent("onreadystatechange", function(e) {
				var t = window.event.srcElement;
				if (t && (t.readyState == "loaded" || t.readyState == "complete")) t[TparentNode][TremoveChild](t)
			});
			setTimeout(function() {
				Tdocument.getElementsByTagName("head")[0][TappendChild](script);
				script = null
			}, 1)
		}
	};
	var ModuleVersion = {
		"map": "20140320104737",
		"tile": "20140320104737",
		"marker": "20140320104737",
		"markeranimation": "20140320104737",
		"poly": "20140320104737",
		"draw": "20140320104737",
		"drawbysvg": "20140320104737",
		"drawbyvml": "20140320104737",
		"drawbycanvas": "20140320104737",
		"infowindow": "20140320104737",
		"oppc": "20140320104737",
		"opmb": "20140320104737",
		"menu": "20140320104737",
		"control": "20140320104737",
		"navictrl": "20140320104737",
		"geoctrl": "20140320104737",
		"copyrightctrl": "20140320104737",
		"scommon": "20140320104737",
		"local": "20140320104737",
		"route": "20140320104737",
		"othersearch": "20140320104737",
		"buslinesearch": "20140320104737",
		"hotspot": "20140320104737",
		"autocomplete": "20140320104737",
		"coordtrans": "20140320104737",
		"coordtransutils": "20140320104737",
		"mapclick": "20140320104737"
	};
	baidu.storage = function() {
		var _prefix = "BMap_",
			ls = window.localStorage,
			_isSupportLocalStorage = "localStorage" in window && ls !== null && ls !== undefined;

		function _getRealyModuleName(moduleName) {
			return _prefix + moduleName + "_" + ModuleVersion[moduleName]
		}
		function _check(moduleName) {
			return _isSupportLocalStorage && !! ls[_getRealyModuleName(moduleName)]
		}
		function _set(moduleName, moduleCode) {
			if (_isSupportLocalStorage) {
				_remove(moduleName);
				try {
					ls.setItem(_getRealyModuleName(moduleName), moduleCode)
				} catch (e) {
					ls.clear()
				}
			}
		}
		function _remove(moduleName) {
			var prefix = _prefix + moduleName + "_",
				l = ls[Tlength],
				strKey;
			while (l--) {
				strKey = ls.key(l);
				if (strKey.indexOf(prefix) > -1) ls.removeItem(strKey)
			}
		}
		function _get(moduleName) {
			if (_isSupportLocalStorage && _check(moduleName)) return ls.getItem(_getRealyModuleName(moduleName));
			else return false
		}
		return {
			isSupportLocalStorage: _isSupportLocalStorage,
			set: _set,
			get: _get,
			check: _check
		}
	}();

	function ModuleMgr() {}
	baidu.object[Textend](ModuleMgr, {
		Request: {
			INITIAL: -1,
			WAITING: 0,
			COMPLETED: 1
		},
		getDependency: function() {
			var drawType = "drawbysvg";
			if (isSvg()) drawType = "drawbysvg";
			else if (isVml()) drawType = "drawbyvml";
			else if (isCanvas()) drawType = "drawbycanvas";
			return {
				"control": [],
				"marker": [],
				"poly": ["marker", drawType],
				"drawbysvg": ["draw"],
				"drawbyvml": ["draw"],
				"drawbycanvas": ["draw"],
				"infowindow": ["marker"],
				"menu": [],
				"oppc": [],
				"opmb": [],
				"scommon": [],
				"local": ["scommon"],
				"route": ["scommon"],
				"othersearch": ["scommon"],
				"autocomplete": ["scommon"],
				"mapclick": ["scommon"],
				"buslinesearch": ["route"],
				"hotspot": [],
				"coordtransutils": ["coordtrans"]
			}
		},
		preLoaded: {},
		Config: {
			_baseUrl: "http://api.map.baidu.com/getmodules?v=1.4",
			_timeout: 5E3
		},
		delayFlag: false,
		Module: {
			_modules: {},
			_arrMdls: [],
			_tempMdls: []
		},
		load: function(moduleName, callback, bExeLoadedCbk) {
			var currentModule = this.current(moduleName);
			if (currentModule._status == this.Request.COMPLETED) {
				if (bExeLoadedCbk) callback();
				return
			} else {
				if (currentModule._status == this.Request.INITIAL) {
					this.combine(moduleName);
					this.pushUniqueMdl(moduleName);
					var me = this;
					if (me.delayFlag == false) {
						me.delayFlag = true;
						setTimeout(function() {
							var mdlsFromServer = [];
							for (var i = 0, l = me.Module._arrMdls[Tlength]; i < l; i++) {
								var mdlName = me.Module._arrMdls[i],
									mdlCode = "";
								if (!T.storage.check(mdlName)) {
									mdlCode = "";
									mdlsFromServer.push(mdlName)
								} else mdlCode = T.storage.get(mdlName);
								me.Module._tempMdls.push({
									mdlName: mdlName,
									mdlCode: mdlCode
								})
							}
							me.delayFlag = false;
							me.Module._arrMdls[Tlength] = 0;
							if (mdlsFromServer[Tlength] == 0) me.evalAllCode();
							else {
								var modpath = me.Config._baseUrl + "&mod=" + mdlsFromServer.join(",");
								DataMgr.request(modpath)
							}
						}, 1)
					}
					currentModule._status = this.Request.WAITING
				}
				currentModule._callbacks.push(callback)
			}
		},
		combine: function(moduleName) {
			if (moduleName && this.getDependency()[moduleName]) {
				var dep = this.getDependency()[moduleName];
				for (var i = 0; i < dep[Tlength]; i++) {
					this.combine(dep[i]);
					if (!this.Module._modules[dep[i]]) this.pushUniqueMdl(dep[i])
				}
			}
		},
		pushUniqueMdl: function(mdl) {
			for (var i = 0; i < this.Module._arrMdls[Tlength]; i++) if (this.Module._arrMdls[i] == mdl) return;
			this.Module._arrMdls.push(mdl)
		},
		run: function(moduleName, moduleCode) {
			var currentModule = this.current(moduleName);
			try {
				eval(moduleCode)
			} catch (e) {
				return
			}
			currentModule._status = this.Request.COMPLETED;
			for (var i = 0, l = currentModule._callbacks[Tlength]; i < l; i++) currentModule._callbacks[i]();
			currentModule._callbacks[Tlength] = 0
		},
		check: function(moduleName, callback) {
			var _self = this;
			_self.timeout = setTimeout(function() {
				var status = _self.Module._modules[moduleName]._status;
				if (status != _self.Request.COMPLETED) {
					_self.remove(moduleName);
					_self.load(moduleName, callback)
				} else clearTimeout(_self.timeout)
			}, _self.Config._timeout)
		},
		current: function(moduleName) {
			var currentModule;
			if (!this.Module._modules[moduleName]) {
				this.Module._modules[moduleName] = {};
				this.Module._modules[moduleName]._status = this.Request.INITIAL;
				this.Module._modules[moduleName]._callbacks = []
			}
			currentModule = this.Module._modules[moduleName];
			return currentModule
		},
		remove: function(moduleName) {
			var currentModule = this.current(moduleName);
			delete currentModule
		},
		checkCodesStatus: function(mdlName, mdlCode) {
			var tempMdl = this.Module._tempMdls;
			for (var i = 0, l = tempMdl[Tlength]; i < l; i++) if (tempMdl[i].mdlCode == "") if (tempMdl[i].mdlName == mdlName) tempMdl[i].mdlCode = mdlCode;
			else return;
			this.evalAllCode()
		},
		evalAllCode: function() {
			var tempMdl = this.Module._tempMdls;
			for (var i = 0, l = tempMdl[Tlength]; i < l; i++) this.run(tempMdl[i].mdlName, tempMdl[i].mdlCode);
			this.Module._tempMdls[Tlength] = 0
		}
	});

	function _jsload(mdlName, mdlCode) {
		if (T.storage.isSupportLocalStorage) T.storage.set(mdlName, mdlCode);
		ModuleMgr.checkCodesStatus(mdlName, mdlCode)
	};

	function Pixel(x, y) {
		this.x = x || 0;
		this.y = y || 0;
		this["x"] = this.x;
		this["y"] = this.y
	}
	Pixel[Tprototype].equals = function(other) {
		return other && other.x == this.x && other.y == this.y
	};

	function Size(width, height) {
		this[Twidth] = width || 0;
		this[Theight] = height || 0
	}
	Size[Tprototype].equals = function(size) {
		return size && this[Twidth] == size[Twidth] && this[Theight] == size[Theight]
	};

	function Hotspot(position, opts) {
		if (!position) return;
		this._position = position;
		this.guid = "spot" + Hotspot.guid++;
		opts = opts || {};
		this._text = opts["text"] || "";
		this._offsets = opts["offsets"] ? opts["offsets"].slice(0) : [5, 5, 5, 5];
		this._userData = opts["userData"] || null;
		this._minZoom = opts["minZoom"] || null;
		this._maxZoom = opts["maxZoom"] || null
	}
	Hotspot.guid = 0;
	baidu[Textend](Hotspot[Tprototype], {
		initialize: function(map) {
			if (this._minZoom == null) this._minZoom = map.config.minZoom;
			if (this._maxZoom == null) this._maxZoom = map.config.maxZoom
		},
		setPosition: function(position) {
			if (position instanceof Point) this._position = position
		},
		getPosition: function() {
			return this._position
		},
		setText: function(text) {
			this._text = text
		},
		getText: function() {
			return this._text
		},
		setUserData: function(userData) {
			this._userData = userData
		},
		getUserData: function() {
			return this._userData
		}
	});

	function Control() {
		this._map = null;
		this._container;
		this._type = "control";
		this.blockInfoWindow = true;
		this._visible = true
	}
	baidu.lang.inherits(Control, baidu.lang.Class, "Control");
	baidu[Textend](Control[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			if (this._container) {
				map.container[TappendChild](this._container);
				return this._container
			}
			return
		},
		_i: function(map) {
			if (!this._container && this["initialize"] && isFunction(this["initialize"])) this._container = this["initialize"](map);
			this._opts = this._opts || {
				printable: false
			};
			this._setStyle();
			this._setPosition();
			if (this._container) this._container._jsobj = this
		},
		_setStyle: function() {
			var c = this._container;
			if (c) {
				var s = c.style;
				s[Tposition] = "absolute";
				s.zIndex = this._cZIndex || "10";
				s.MozUserSelect = "none";
				s.WebkitTextSizeAdjust = "none";
				if (!this._opts.printable) baidu.dom.addClass(c, "BMap_noprint");
				if (!isMobile()) baidu.on(c, "contextmenu", stopAndPrevent)
			}
		},
		remove: function() {
			this._map = null;
			if (!this._container) return;
			this._container[TparentNode] && this._container[TparentNode][TremoveChild](this._container);
			this._container._jsobj = null;
			this._container = null
		},
		_render: function() {
			this._container = beforeEndHTML(this._map.container, "<div unselectable='on'></div>");
			if (this._visible == false) baidu.dom.hide(this._container);
			return this._container
		},
		_setPosition: function() {
			this.setAnchor(this._opts.anchor)
		},
		setAnchor: function(anchor) {
			if (this.anchorFixed || !isNumber(anchor) || isNaN(anchor) || anchor < BMAP_ANCHOR_TOP_LEFT || anchor > BMAP_ANCHOR_BOTTOM_RIGHT) anchor = this["defaultAnchor"];
			this._opts = this._opts || {
				printable: false
			};
			this._opts.offset = this._opts.offset || this["defaultOffset"];
			var preAnchor = this._opts.anchor;
			this._opts[Tanchor] = anchor;
			if (!this._container) return;
			var c = this._container;
			var x = this._opts.offset[Twidth];
			var y = this._opts.offset[Theight];
			c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
			switch (anchor) {
			case BMAP_ANCHOR_TOP_LEFT:
				c.style.top = y + "px";
				c.style.left = x + "px";
				break;
			case BMAP_ANCHOR_TOP_RIGHT:
				c.style.top = y + "px";
				c.style.right = x + "px";
				break;
			case BMAP_ANCHOR_BOTTOM_LEFT:
				c.style.bottom = y + "px";
				c.style.left = x + "px";
				break;
			case BMAP_ANCHOR_BOTTOM_RIGHT:
				c.style.bottom = y + "px";
				c.style.right = x + "px";
				break;
			default:
				break
			}
			var a = ["TL", "TR", "BL", "BR"];
			baidu.dom.removeClass(this._container, "anchor" + a[preAnchor]);
			baidu.dom.addClass(this._container, "anchor" + a[anchor])
		},
		getAnchor: function() {
			return this._opts.anchor
		},
		setOffset: function(size) {
			if (!(size instanceof Size)) return;
			this._opts = this._opts || {
				printable: false
			};
			this._opts.offset = new Size(size[Twidth], size[Theight]);
			if (!this._container) return;
			this.setAnchor(this._opts.anchor)
		},
		getOffset: function() {
			return this._opts.offset
		},
		getDom: function() {
			return this._container
		},
		show: function() {
			if (this._visible == true) return;
			this._visible = true;
			if (this._container) baidu.dom.show(this._container)
		},
		hide: function() {
			if (this._visible == false) return;
			this._visible = false;
			if (this._container) baidu.dom.hide(this._container)
		},
		"isPrintable": function() {
			return !!this._opts.printable
		},
		isVisible: function() {
			if (!this._container && !this._map) return false;
			return !!this._visible
		}
	});
	var BMAP_ANCHOR_TOP_LEFT = 0,
		BMAP_ANCHOR_TOP_RIGHT = 1,
		BMAP_ANCHOR_BOTTOM_LEFT = 2,
		BMAP_ANCHOR_BOTTOM_RIGHT = 3;
	var BMAP_NAVIGATION_CONTROL_LARGE = 0,
		BMAP_NAVIGATION_CONTROL_SMALL = 1,
		BMAP_NAVIGATION_CONTROL_PAN = 2,
		BMAP_NAVIGATION_CONTROL_ZOOM = 3;

	function NavigationControl(opts) {
		Control.call(this);
		opts = opts || {};
		this._opts = {
			printable: false,
			showZoomInfo: opts["showZoomInfo"] || true,
			anchor: opts["anchor"],
			offset: opts["offset"],
			type: opts["type"]
		};
		this["defaultAnchor"] = isMobile() ? BMAP_ANCHOR_BOTTOM_RIGHT : BMAP_ANCHOR_TOP_LEFT;
		this["defaultOffset"] = new Size(10, 10);
		this.setAnchor(opts["anchor"]);
		this.setType(opts["type"]);
		this._asyncLoadCode()
	}
	baidu.lang.inherits(NavigationControl, Control, "NavigationControl");
	baidu[Textend](NavigationControl[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			return this._container
		},
		setType: function(type) {
			if (isNumber(type) && type >= BMAP_NAVIGATION_CONTROL_LARGE && type <= BMAP_NAVIGATION_CONTROL_ZOOM) this._opts.type = type;
			else this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
		},
		getType: function() {
			return this._opts.type
		},
		_asyncLoadCode: function() {
			var me = this;
			ModuleMgr.load("navictrl", function() {
				me._asyncLoad()
			})
		}
	});

	function GeolocationControl(opts) {
		Control.call(this);
		opts = opts || {};
		this._opts = {
			anchor: opts["anchor"],
			offset: opts["offset"],
			showAddressBar: opts["showAddressBar"],
			enableAutoLocation: opts["enableAutoLocation"],
			locationIcon: opts["locationIcon"]
		};
		this["defaultAnchor"] = BMAP_ANCHOR_BOTTOM_LEFT;
		this["defaultOffset"] = new Size(0, 4);
		this._asyncLoadCode()
	}
	baidu.lang.inherits(GeolocationControl, Control, "GeolocationControl");
	baidu[Textend](GeolocationControl[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			return this._container
		},
		_asyncLoadCode: function() {
			var me = this;
			ModuleMgr.load("geoctrl", function() {
				me._asyncLoad()
			})
		},
		"getAddressComponent": function() {
			return this.addressComponent || null
		},
		"location": function() {
			this._opts.enableAutoLocation = true
		}
	});

	function CopyrightControl(opts) {
		Control.call(this);
		opts = opts || {};
		this._opts = {
			printable: false,
			anchor: opts["anchor"],
			offset: opts["offset"]
		};
		this._copyrightCollection = [];
		this["defaultAnchor"] = BMAP_ANCHOR_BOTTOM_LEFT;
		this["defaultOffset"] = new Size(5, 2);
		this.setAnchor(opts["anchor"]);
		this._canShow = true;
		this.blockInfoWindow = false;
		this._asyncLoadCode()
	}
	baidu.lang.inherits(CopyrightControl, Control, "CopyrightControl");
	baidu.object[Textend](CopyrightControl[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			return this._container
		},
		addCopyright: function(copyright) {
			if (!copyright || !isNumber(copyright["id"]) || isNaN(copyright["id"])) return;
			var ncpy = {
				"bounds": null,
				"content": ""
			};
			for (var i in copyright) ncpy[i] = copyright[i];
			var cp = this.getCopyright(copyright["id"]);
			if (cp) for (var o in ncpy) cp[o] = ncpy[o];
			else this._copyrightCollection.push(ncpy)
		},
		getCopyright: function(id) {
			for (var i = 0, l = this._copyrightCollection[Tlength]; i < l; i++) if (this._copyrightCollection[i]["id"] == id) return this._copyrightCollection[i]
		},
		getCopyrightCollection: function() {
			return this._copyrightCollection
		},
		removeCopyright: function(id) {
			for (var i = 0, l = this._copyrightCollection[Tlength]; i < l; i++) if (this._copyrightCollection[i]["id"] == id) {
				r = this._copyrightCollection.splice(i, 1);
				i--;
				l = this._copyrightCollection[Tlength]
			}
		},
		_asyncLoadCode: function() {
			var me = this;
			ModuleMgr.load("copyrightctrl", function() {
				me._asyncLoad()
			})
		}
	});

	function OverviewMapControl(opts) {
		Control.call(this);
		opts = opts || {};
		this._opts = {
			printable: false,
			size: opts["size"] || new Size(150, 150),
			padding: 5,
			isOpen: opts["isOpen"] === true ? true : false,
			zoomInterval: 4,
			offset: opts["offset"],
			anchor: opts["anchor"]
		};
		this["defaultAnchor"] = BMAP_ANCHOR_BOTTOM_RIGHT;
		this["defaultOffset"] = new Size(0, 0);
		this._btnWidth = 13;
		this._btnHeight = 13;
		this.setAnchor(opts.anchor);
		this.setSize(this._opts.size);
		this._asyncLoadCode()
	}
	baidu.lang.inherits(OverviewMapControl, Control, "OverviewMapControl");
	baidu[Textend](OverviewMapControl[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			return this._container
		},
		setAnchor: function(anchor) {
			Control[Tprototype].setAnchor.call(this, anchor)
		},
		changeView: function() {
			this.changeView._running = true;
			this._opts.isOpen = !this._opts.isOpen;
			if (!this._container) this.changeView._running = false
		},
		setSize: function(size) {
			if (!(size instanceof Size)) size = new Size(150, 150);
			size[Twidth] = size[Twidth] > 0 ? size[Twidth] : 150;
			size[Theight] = size[Theight] > 0 ? size[Theight] : 150;
			this._opts.size = size
		},
		getSize: function() {
			return this._opts.size
		},
		isOpen: function() {
			return this._opts.isOpen
		},
		_asyncLoadCode: function() {
			var me = this;
			ModuleMgr.load("control", function() {
				me._asyncLoad()
			})
		}
	});

	function ScaleControl(opts) {
		Control.call(this);
		opts = opts || {};
		this._opts = {
			printable: false,
			color: "black",
			unit: "metric",
			offset: opts["offset"]
		};
		this["defaultAnchor"] = BMAP_ANCHOR_BOTTOM_LEFT;
		this["defaultOffset"] = new Size(81, 18);
		this.setAnchor(opts["anchor"]);
		this._units = {
			"metric": {
				name: "metric",
				conv: 1,
				incon: 1E3,
				u1: "\u7c73",
				u2: "\u516c\u91cc"
			},
			"us": {
				name: "us",
				conv: 3.2808,
				incon: 5280,
				u1: "\u82f1\u5c3a",
				u2: "\u82f1\u91cc"
			}
		};
		if (!this._units[this._opts.unit]) this._opts.unit = "metric";
		this._scaleText = null;
		this._numberArray = {};
		this._asyncLoadCode()
	}
	var BMAP_UNIT_METRIC = "metric",
		BMAP_UNIT_IMPERIAL = "us";
	baidu.lang.inherits(ScaleControl, Control, "ScaleControl");
	baidu.object[Textend](ScaleControl[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			return this._container
		},
		setColor: function(color) {
			this._opts.color = color + ""
		},
		getColor: function() {
			return this._opts.color
		},
		setUnit: function(unit) {
			this._opts.unit = this._units[unit] && this._units[unit].name || this._opts.unit
		},
		getUnit: function() {
			return this._opts.unit
		},
		_asyncLoadCode: function() {
			var me = this;
			ModuleMgr.load("control", function() {
				me._asyncLoad()
			})
		}
	});
	var BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0,
		BMAP_MAPTYPE_CONTROL_DROPDOWN = 1;

	function MapTypeControl(opts) {
		Control.call(this);
		opts = opts || {};
		this["defaultAnchor"] = BMAP_ANCHOR_TOP_RIGHT;
		this["defaultOffset"] = new Size(10, 10);
		this._opts = {
			printable: false,
			mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP, BMAP_PERSPECTIVE_MAP],
			type: opts["type"] || BMAP_MAPTYPE_CONTROL_HORIZONTAL,
			offset: opts["offset"] || this["defaultOffset"],
			enableSwitch: true
		};
		this.setAnchor(opts["anchor"]);
		if (isArray(opts["mapTypes"])) this._opts.mapTypes = opts["mapTypes"].slice(0);
		this._asyncLoadCode()
	}
	baidu.lang.inherits(MapTypeControl, Control, "MapTypeControl");
	baidu.object[Textend](MapTypeControl[Tprototype], {
		"initialize": function(map) {
			this._map = map;
			return this._container
		},
		_asyncLoadCode: function() {
			var me = this;
			ModuleMgr.load("control", function() {
				me._asyncLoad()
			})
		}
	});

	function ContextMenu(opts) {
		baidu.lang.Class.call(this);
		this._opts = {
			container: null,
			cursor: "default"
		};
		this._opts = baidu[Textend](this._opts, opts);
		this._type = "contextmenu";
		this._map = null;
		this._container;
		this._shadow;
		this._left = 0;
		this._top = 0;
		this._items = [];
		this._rItems = [];
		this._dividers = [];
		this.curPixel = null;
		this.curPoint = null;
		this._isOpen = false;
		var me = this;
		ModuleMgr.load("menu", function() {
			me._draw()
		})
	}
	baidu.lang.inherits(ContextMenu, baidu.lang.Class, "ContextMenu");
	baidu.object[Textend](ContextMenu[Tprototype], {
		initialize: function(map, overlay) {
			this._map = map;
			this._overlay = overlay || null
		},
		remove: function() {
			this._map = this._overlay = null
		},
		addItem: function(item) {
			if (!item || item._type != "menuitem" || item._text == "" || item._width <= 0) return;
			for (var i = 0, l = this._items[Tlength]; i < l; i++) if (this._items[i] === item) return;
			this._items.push(item);
			this._rItems.push(item)
		},
		removeItem: function(item) {
			if (!item || item._type != "menuitem") return;
			for (var i = 0, l = this._items[Tlength]; i < l; i++) if (this._items[i] === item) {
				this._items[i].remove();
				this._items.splice(i, 1);
				l--
			}
			for (var i = 0, l = this._rItems[Tlength]; i < l; i++) if (this._rItems[i] === item) {
				this._rItems[i].remove();
				this._rItems.splice(i, 1);
				l--
			}
		},
		addSeparator: function() {
			this._items.push({
				_type: "divider",
				_dIndex: this._dividers[Tlength]
			});
			this._dividers.push({
				dom: null
			})
		},
		removeSeparator: function(index) {
			if (!this._dividers[index]) return;
			for (var i = 0, l = this._items[Tlength]; i < l; i++) {
				if (this._items[i] && this._items[i]._type == "divider" && this._items[i]._dIndex == index) {
					this._items.splice(i, 1);
					l--
				}
				if (this._items[i] && this._items[i]._type == "divider" && this._items[i]._dIndex > index) this._items[i]._dIndex--
			}
			this._dividers.splice(index, 1)
		},
		getDom: function() {
			return this._container
		},
		show: function() {
			if (this._isOpen == true) return;
			this._isOpen = true
		},
		hide: function() {
			if (this._isOpen == false) return;
			this._isOpen = false
		},
		setCursor: function(cursor) {
			if (!cursor) return;
			this._opts.cursor = cursor
		},
		getItem: function(index) {
			return this._rItems[index]
		}
	});

	function MenuItem(text, callback, opts) {
		if (!text || !isFunction(callback)) return;
		baidu.lang.Class.call(this);
		this._opts = {
			width: 100,
			id: ""
		};
		opts = opts || {};
		this._opts[Twidth] = opts["width"] * 1 ? opts["width"] : 100;
		this._opts.id = opts["id"] ? opts["id"] : "";
		this._text = text + "";
		this._callback = callback;
		this._map = null;
		this._type = "menuitem";
		this._contextmenu = null;
		this._container = null;
		this._enabled = true;
		var me = this;
		ModuleMgr.load("menu", function() {
			me._draw()
		})
	}
	baidu.lang.inherits(MenuItem, baidu.lang.Class, "MenuItem");
	baidu.object[Textend](MenuItem[Tprototype], {
		initialize: function(map, menu) {
			this._map = map;
			this._contextmenu = menu
		},
		remove: function() {
			this._contextmenu = null;
			this._map = null
		},
		setText: function(text) {
			if (!text) return;
			this._text = text + ""
		},
		getDom: function() {
			return this._container
		},
		enable: function() {
			this._enabled = true
		},
		disable: function() {
			this._enabled = false
		}
	});

	function Bounds(sw, ne) {
		if (sw && !ne) ne = sw;
		this._sw = this._ne = null;
		this._swLng = this._swLat = null;
		this._neLng = this._neLat = null;
		if (sw) {
			this._sw = new Point(sw["lng"], sw["lat"]);
			this._ne = new Point(ne["lng"], ne["lat"]);
			this._swLng = sw["lng"];
			this._swLat = sw["lat"];
			this._neLng = ne["lng"];
			this._neLat = ne["lat"]
		}
	}
	baidu.object[Textend](Bounds[Tprototype], {
		isEmpty: function() {
			return !this._sw || !this._ne
		},
		equals: function(other) {
			if (!(other instanceof Bounds) || this.isEmpty()) return false;
			return this.getSouthWest().equals(other.getSouthWest()) && this.getNorthEast().equals(other.getNorthEast())
		},
		getSouthWest: function() {
			return this._sw
		},
		getNorthEast: function() {
			return this._ne
		},
		containsBounds: function(bounds) {
			if (!(bounds instanceof Bounds) || this.isEmpty() || bounds.isEmpty()) return false;
			return bounds._swLng > this._swLng && bounds._neLng < this._neLng && bounds._swLat > this._swLat && bounds._neLat < this._neLat
		},
		getCenter: function() {
			if (this.isEmpty()) return null;
			return new Point((this._swLng + this._neLng) / 2, (this._swLat + this._neLat) / 2)
		},
		intersects: function(bounds) {
			if (!(bounds instanceof Bounds)) return null;
			if (TMath.max(bounds._swLng, bounds._neLng) < TMath.min(this._swLng, this._neLng) || TMath.min(bounds._swLng, bounds._neLng) > TMath.max(this._swLng, this._neLng) || TMath.max(bounds._swLat, bounds._neLat) < TMath.min(this._swLat, this._neLat) || TMath.min(bounds._swLat, bounds._neLat) > TMath.max(this._swLat, this._neLat)) return null;
			var newMinX = TMath.max(this._swLng, bounds._swLng);
			var newMaxX = TMath.min(this._neLng, bounds._neLng);
			var newMinY = TMath.max(this._swLat, bounds._swLat);
			var newMaxY = TMath.min(this._neLat, bounds._neLat);
			return new Bounds(new Point(newMinX, newMinY), new Point(newMaxX, newMaxY))
		},
		containsPoint: function(point) {
			if (!(point instanceof Point) || this.isEmpty()) return false;
			return point["lng"] >= this._swLng && point["lng"] <= this._neLng && point["lat"] >= this._swLat && point["lat"] <= this._neLat
		},
		extend: function(point) {
			if (!(point instanceof Point)) return;
			var lng = point["lng"],
				lat = point["lat"];
			if (!this._sw) this._sw = new Point(0, 0);
			if (!this._ne) this._ne = new Point(0, 0);
			if (!this._swLng || this._swLng > lng) this._sw["lng"] = this._swLng = lng;
			if (!this._neLng || this._neLng < lng) this._ne["lng"] = this._neLng = lng;
			if (!this._swLat || this._swLat > lat) this._sw["lat"] = this._swLat = lat;
			if (!this._neLat || this._neLat < lat) this._ne["lat"] = this._neLat = lat
		},
		toSpan: function() {
			if (this.isEmpty()) return new Point(0, 0);
			return new Point(TMath.abs(this._neLng - this._swLng), TMath.abs(this._neLat - this._swLat))
		}
	});

	function Point(lng, lat) {
		if (isNaN(lng)) {
			lng = decode64(lng);
			lng = isNaN(lng) ? 0 : lng
		}
		if (isString(lng)) lng = TparseFloat(lng);
		if (isNaN(lat)) {
			lat = decode64(lat);
			lat = isNaN(lat) ? 0 : lat
		}
		if (isString(lat)) lat = TparseFloat(lat);
		this["lng"] = lng;
		this["lat"] = lat
	}
	Point.isInRange = function(pt) {
		return pt && pt["lng"] <= 180 && pt["lng"] >= -180 && pt["lat"] <= 74 && pt["lat"] >= -74
	};
	Point[Tprototype].equals = function(other) {
		return other && this["lat"] == other["lat"] && this["lng"] == other["lng"]
	};

	function Projection() {}
	Projection[Tprototype].lngLatToPoint = function() {
		throw "lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0";
	};
	Projection[Tprototype].pointToLngLat = function() {
		throw "pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0";
	};

	function CoordTrans() {};
	var CoordTransUtils = {
		convertPtToPix3D: function(point, map, cbk) {
			ModuleMgr.load("coordtransutils", function() {
				CoordTransUtils.asyncConvertPtToPix3D(point, map, cbk)
			}, true)
		},
		convertPixToPt3D: function(pixel, map, cbk) {
			ModuleMgr.load("coordtransutils", function() {
				CoordTransUtils.asyncConvertPixToPt3D(pixel, map, cbk)
			}, true)
		}
	};

	function MercatorProjection() {}
	MercatorProjection[Tprototype] = new Projection;
	baidu[Textend](MercatorProjection, {
		EARTHRADIUS: 6370996.81,
		MCBAND: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
		LLBAND: [75, 60, 45, 30, 15, 0],
		MC2LL: [
			[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
			[-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
			[-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
			[-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
			[3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
			[2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
		],
		LL2MC: [
			[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
			[8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
			[0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
			[0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
			[-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
			[-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
		],
		getDistanceByMC: function(point1, point2) {
			if (!point1 || !point2) return 0;
			var x1, y1, x2, y2;
			point1 = this.convertMC2LL(point1);
			if (!point1) return 0;
			x1 = this.toRadians(point1["lng"]);
			y1 = this.toRadians(point1["lat"]);
			point2 = this.convertMC2LL(point2);
			if (!point2) return 0;
			x2 = this.toRadians(point2["lng"]);
			y2 = this.toRadians(point2["lat"]);
			return this.getDistance(x1, x2, y1, y2)
		},
		getDistanceByLL: function(point1, point2) {
			if (!point1 || !point2) return 0;
			point1["lng"] = this.getLoop(point1["lng"], -180, 180);
			point1["lat"] = this.getRange(point1["lat"], -74, 74);
			point2["lng"] = this.getLoop(point2["lng"], -180, 180);
			point2["lat"] = this.getRange(point2["lat"], -74, 74);
			var x1, x2, y1, y2;
			x1 = this.toRadians(point1["lng"]);
			y1 = this.toRadians(point1["lat"]);
			x2 = this.toRadians(point2["lng"]);
			y2 = this.toRadians(point2["lat"]);
			return this.getDistance(x1, x2, y1, y2)
		},
		convertMC2LL: function(point) {
			var temp, factor;
			temp = new Point(TMath.abs(point["lng"]), TMath.abs(point["lat"]));
			for (var i = 0; i < this.MCBAND[Tlength]; i++) if (temp["lat"] >= this.MCBAND[i]) {
				factor = this.MC2LL[i];
				break
			}
			var lnglat = this.convertor(point, factor);
			var point = new Point(lnglat["lng"].toFixed(6), lnglat["lat"].toFixed(6));
			return point
		},
		convertLL2MC: function(point) {
			var temp, factor;
			point["lng"] = this.getLoop(point["lng"], -180, 180);
			point["lat"] = this.getRange(point["lat"], -74, 74);
			temp = new Point(point["lng"], point["lat"]);
			for (var i = 0; i < this.LLBAND[Tlength]; i++) if (temp["lat"] >= this.LLBAND[i]) {
				factor = this.LL2MC[i];
				break
			}
			if (!factor) for (var i = this.LLBAND[Tlength] - 1; i >= 0; i--) if (temp["lat"] <= -this.LLBAND[i]) {
				factor = this.LL2MC[i];
				break
			}
			var mc = this.convertor(point, factor);
			var point = new Point(mc["lng"].toFixed(2), mc["lat"].toFixed(2));
			return point
		},
		convertor: function(fromPoint, factor) {
			if (!fromPoint || !factor) return;
			var x = factor[0] + factor[1] * TMath.abs(fromPoint["lng"]);
			var temp = TMath.abs(fromPoint["lat"]) / factor[9];
			var y = factor[2] + factor[3] * temp + factor[4] * temp * temp + factor[5] * temp * temp * temp + factor[6] * temp * temp * temp * temp + factor[7] * temp * temp * temp * temp * temp + factor[8] * temp * temp * temp * temp * temp * temp;
			x *= fromPoint["lng"] < 0 ? -1 : 1;
			y *= fromPoint["lat"] < 0 ? -1 : 1;
			return new Point(x, y)
		},
		getDistance: function(x1, x2, y1, y2) {
			return this.EARTHRADIUS * TMath.acos(TMath.sin(y1) * TMath.sin(y2) + TMath.cos(y1) * TMath.cos(y2) * TMath.cos(x2 - x1))
		},
		toRadians: function(angdeg) {
			return TMath.PI * angdeg / 180
		},
		toDegrees: function(angrad) {
			return 180 * angrad / TMath.PI
		},
		getRange: function(v, a, b) {
			if (a != null) v = TMath.max(v, a);
			if (b != null) v = TMath.min(v, b);
			return v
		},
		getLoop: function(v, a, b) {
			while (v > b) v -= b - a;
			while (v < a) v += b - a;
			return v
		}
	});
	baidu[Textend](MercatorProjection[Tprototype], {
		lngLatToMercator: function(point) {
			return MercatorProjection.convertLL2MC(point)
		},
		lngLatToPoint: function(point) {
			var mercator = MercatorProjection.convertLL2MC(point);
			return new Pixel(mercator["lng"], mercator["lat"])
		},
		mercatorToLngLat: function(point) {
			return MercatorProjection.convertMC2LL(point)
		},
		pointToLngLat: function(point) {
			var mercator = new Point(point.x, point.y);
			return MercatorProjection.convertMC2LL(mercator)
		},
		pointToPixel: function(point, zoom, mapCenter, mapSize, curCity) {
			if (!point) return;
			point = this.lngLatToMercator(point, curCity);
			var zoomUnits = this.getZoomUnits(zoom);
			var x = TMath.round((point["lng"] - mapCenter["lng"]) / zoomUnits + mapSize[Twidth] / 2);
			var y = TMath.round((mapCenter["lat"] - point["lat"]) / zoomUnits + mapSize[Theight] / 2);
			return new Pixel(x, y)
		},
		pixelToPoint: function(pixel, zoom, mapCenter, mapSize, curCity) {
			if (!pixel) return;
			var zoomUnits = this.getZoomUnits(zoom);
			var lng = mapCenter["lng"] + zoomUnits * (pixel.x - mapSize[Twidth] / 2);
			var lat = mapCenter["lat"] - zoomUnits * (pixel.y - mapSize[Theight] / 2);
			var point = new Point(lng, lat);
			return this.mercatorToLngLat(point, curCity)
		},
		getZoomUnits: function(zoom) {
			return TMath.pow(2, 18 - zoom)
		}
	});

	function PerspectiveProjection() {
		this.curCityName = "bj"
	}
	PerspectiveProjection[Tprototype] = new MercatorProjection;
	baidu[Textend](PerspectiveProjection[Tprototype], {
		lngLatToMercator: function(lngLat, mapCity) {
			return this._convert2DTo3D(mapCity, MercatorProjection.convertLL2MC(lngLat))
		},
		mercatorToLngLat: function(mercator, mapCity) {
			return MercatorProjection.convertMC2LL(this._convert3DTo2D(mapCity, mercator))
		},
		"lngLatToPointFor3D": function(lngLat, callback) {
			var me = this;
			var mcPt = MercatorProjection.convertLL2MC(lngLat);
			ModuleMgr.load("coordtrans", function() {
				var obj = CoordTrans.getOMap_pts(me.curCityName || "bj", mcPt);
				var pix = new Pixel(obj.x, obj.y);
				callback && callback(pix)
			}, true)
		},
		"pointToLngLatFor3D": function(point, callback) {
			var me = this;
			var pixPt = new Point(point.x, point.y);
			ModuleMgr.load("coordtrans", function() {
				var obj = CoordTrans.getMapJw_pts(me.curCityName || "bj", pixPt);
				var mcPt = new Point(obj["lng"], obj["lat"]);
				var llPt = MercatorProjection.convertMC2LL(mcPt);
				callback && callback(llPt)
			}, true)
		},
		_convert2DTo3D: function(city, point) {
			if (ModuleMgr.current("coordtrans")._status == ModuleMgr.Request.COMPLETED) {
				var obj = CoordTrans.getOMap_pts(city || "bj", point);
				return new Point(obj.x, obj.y)
			} else {
				ModuleMgr.load("coordtrans", function() {});
				return new Point(0, 0)
			}
		},
		_convert3DTo2D: function(city, point) {
			if (ModuleMgr.current("coordtrans")._status == ModuleMgr.Request.COMPLETED) {
				var obj = CoordTrans.getMapJw_pts(city || "bj", point);
				return new Point(obj["lng"], obj["lat"])
			} else {
				ModuleMgr.load("coordtrans", function() {});
				return new Point(0, 0)
			}
		},
		getZoomUnits: function(zoom) {
			return TMath.pow(2, 20 - zoom)
		}
	});

	function Overlay() {
		this._type = "overlay"
	}
	baidu.lang.inherits(Overlay, baidu.lang.Class, "Overlay");
	Overlay.getZIndex = function(lat) {
		lat = lat * 1;
		if (!lat) return 0;
		return lat * -1E5 << 1
	};
	baidu[Textend](Overlay[Tprototype], {
		_i: function(map) {
			if (!this.domElement && isFunction(this["initialize"])) {
				this.domElement = this["initialize"](map);
				if (this.domElement) this.domElement.style.WebkitUserSelect = "none"
			}
			isFunction(this["draw"]) ? this["draw"]() : this["draw"]()
		},
		"initialize": function(map) {
			throw "initialize\u65b9\u6cd5\u672a\u5b9e\u73b0";
		},
		"draw": function() {
			throw "draw\u65b9\u6cd5\u672a\u5b9e\u73b0";
		},
		remove: function() {
			if (this.domElement && this.domElement[TparentNode]) this.domElement[TparentNode][TremoveChild](this.domElement);
			this.domElement = null;
			this.dispatchEvent(new BaseEvent("onremove"))
		},
		hide: function() {
			if (this.domElement) baidu.dom.hide(this.domElement)
		},
		show: function() {
			if (this.domElement) baidu.dom.show(this.domElement)
		},
		isVisible: function() {
			if (!this.domElement) return false;
			if (this.domElement.style.display == "none" || this.domElement.style.visibility == "hidden") return false;
			return true
		}
	});
	BMap.register(function(map) {
		var t = map.temp;
		t.overlayDiv = map.overlayDiv = _createOverlayDiv(map.platform, 200);
		map._panes.floatPane = _createOverlayDiv(t.overlayDiv, 800);
		map._panes.markerMouseTarget = _createOverlayDiv(t.overlayDiv, 700);
		map._panes.floatShadow = _createOverlayDiv(t.overlayDiv, 600);
		map._panes.labelPane = _createOverlayDiv(t.overlayDiv, 500);
		map._panes.markerPane = _createOverlayDiv(t.overlayDiv, 400);
		map._panes.markerShadow = _createOverlayDiv(t.overlayDiv, 300);
		map._panes.vertexPane = _createOverlayDiv(t.overlayDiv, 201);
		map._panes.mapPane = _createOverlayDiv(t.overlayDiv, 200);

		function _createOverlayDiv(container, zIndex) {
			var div = create("div"),
				s = div.style;
			s[Tposition] = "absolute";
			s.top = s.left = s[Twidth] = s[Theight] = "0";
			s.zIndex = zIndex;
			container[TappendChild](div);
			return div
		}
	});

	function OverlayInternal() {
		baidu.lang.Class.call(this);
		Overlay.call(this);
		this.map = null;
		this._visible = true;
		this.infoWindow = null;
		this._dblclickTime = 0
	}
	baidu.lang.inherits(OverlayInternal, Overlay, "OverlayInternal");
	baidu[Textend](OverlayInternal[Tprototype], {
		"initialize": function(map) {
			this.map = map;
			baidu.lang.Class.call(this, this.guid);
			return null
		},
		getMap: function() {
			return this.map
		},
		"draw": function() {},
		remove: function() {
			this.map = null;
			baidu.lang.decontrol(this.guid);
			Overlay[Tprototype].remove.call(this)
		},
		hide: function() {
			if (this._visible == false) return;
			this._visible = false
		},
		show: function() {
			if (this._visible == true) return;
			this._visible = true
		},
		isVisible: function() {
			if (!this.domElement) return false;
			return !!this._visible
		},
		getContainer: function() {
			return this.domElement
		},
		setConfig: function(opts) {
			opts = opts || {};
			for (var k in opts) this._config[k] = opts[k]
		},
		setZIndex: function(index) {
			this.zIndex = index
		},
		enableMassClear: function() {
			this._config.enableMassClear = true
		},
		disableMassClear: function() {
			this._config.enableMassClear = false
		},
		addContextMenu: function(menu) {
			this._menu = menu
		},
		removeContextMenu: function(menu) {
			this._menu = null
		}
	});

	function OverlayMgr() {
		this.map = null;
		this._overlays = {};
		this._customOverlays = []
	}
	BMap.register(function(map) {
		var mgr = new OverlayMgr;
		mgr.map = map;
		map._overlays = mgr._overlays;
		map._customOverlays = mgr._customOverlays;
		map[TaddEventListener]("load", function(e) {
			mgr["draw"](e)
		});
		map[TaddEventListener]("moveend", function(e) {
			mgr["draw"](e)
		});
		if (baidu.browser.ie && baidu.browser.ie < 8 || Tdocument.compatMode == "BackCompat") map[TaddEventListener]("zoomend", function(e) {
			setTimeout(function() {
				mgr["draw"](e)
			}, 20)
		});
		else map[TaddEventListener]("zoomend", function(e) {
			mgr["draw"](e)
		});
		map[TaddEventListener]("maptypechange", function(e) {
			mgr["draw"](e)
		});
		map[TaddEventListener]("addoverlay", function(e) {
			var overlay = e.target;
			if (overlay instanceof OverlayInternal) {
				if (!mgr._overlays[overlay.guid]) mgr._overlays[overlay.guid] = overlay
			} else {
				var exist = false;
				for (var i = 0, l = mgr._customOverlays[Tlength]; i < l; i++) if (mgr._customOverlays[i] === overlay) {
					exist = true;
					break
				}
				if (!exist) mgr._customOverlays.push(overlay)
			}
		});
		map[TaddEventListener]("removeoverlay", function(e) {
			var overlay = e.target;
			if (overlay instanceof OverlayInternal) delete mgr._overlays[overlay.guid];
			else for (var i = 0, l = mgr._customOverlays[Tlength]; i < l; i++) if (mgr._customOverlays[i] === overlay) {
				mgr._customOverlays.splice(i, 1);
				break
			}
		});
		map[TaddEventListener]("clearoverlays", function(e) {
			this.closeInfoWindow();
			for (var overlayHashCode in mgr._overlays) if (mgr._overlays[overlayHashCode]._config.enableMassClear) {
				mgr._overlays[overlayHashCode].remove();
				delete mgr._overlays[overlayHashCode]
			}
			for (var i = 0, l = mgr._customOverlays[Tlength]; i < l; i++) if (mgr._customOverlays[i].enableMassClear != false) {
				mgr._customOverlays[i].remove();
				mgr._customOverlays[i] = null;
				mgr._customOverlays.splice(i, 1);
				i--;
				l--
			}
		});
		map[TaddEventListener]("infowindowopen", function(e) {
			var bubble = this.infoWindow;
			if (bubble) {
				baidu.dom.hide(bubble.popDom);
				baidu.dom.hide(bubble.shadowDom)
			}
		});
		map[TaddEventListener]("movestart", function() {
			if (this.getInfoWindow()) this.getInfoWindow()._setOverflow()
		});
		map[TaddEventListener]("moveend", function() {
			if (this.getInfoWindow()) this.getInfoWindow()._resetOverflow()
		})
	});
	OverlayMgr[Tprototype]["draw"] = function(e) {
		for (var overlayHashCode in this._overlays) this._overlays[overlayHashCode]["draw"]();
		baidu.array.each(this._customOverlays, function(overlay) {
			overlay["draw"]()
		});
		if (this.map.temp.infoWin) this.map.temp.infoWin.setPosition();
		if (BMap.DrawerSelector) {
			var drawer = BMap.DrawerSelector.getDrawer(this.map);
			drawer.setPalette()
		}
	};

	function Graph(opts) {
		OverlayInternal.call(this);
		opts = opts || {};
		this._config = {
			strokeColor: opts["strokeColor"] || "#3a6bdb",
			strokeWeight: opts["strokeWeight"] || 5,
			strokeOpacity: opts["strokeOpacity"] || 0.65,
			strokeStyle: opts["strokeStyle"] || "solid",
			enableMassClear: opts["enableMassClear"] === false ? false : true,
			getParseTolerance: null,
			getParseCacheIndex: null,
			enableEditing: opts["enableEditing"] === true ? true : false,
			mouseOverTolerance: 15,
			use3DCoords: false,
			clickable: opts["enableClicking"] === false ? false : true
		};
		if (this._config.strokeWeight <= 0) this._config.strokeWeight = 5;
		if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) this._config.strokeOpacity = 0.65;
		if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) this._config.fillOpacity = 0.65;
		if (this._config.strokeStyle != "solid" && this._config.strokeStyle != "dashed") this._config.strokeStyle = "solid";
		this.domElement = null;
		this._bounds = new Bounds(0, 0, 0, 0);
		this._parseCache = [];
		this.vertexMarkers = [];
		this._temp = {}
	}
	baidu.lang.inherits(Graph, OverlayInternal, "Graph");
	Graph.getGraphPoints = function(points) {
		var result = [];
		if (!points) return result;
		if (isString(points)) {
			var pts = points.split(";");
			baidu.array.each(pts, function(pt) {
				var ptxy = pt.split(",");
				result.push(new Point(ptxy[0], ptxy[1]))
			})
		}
		if (Object[Tprototype].toString.apply(points) == "[object Array]" && points[Tlength] > 0) result = points;
		return result
	};
	Graph.parseTolerance = [0.09, 0.005, 1.0E-4, 1.0E-5];
	baidu[Textend](Graph[Tprototype], {
		"initialize": function(map) {
			this.map = map;
			return null
		},
		"draw": function() {
			return;
			if (!this.domElement) return;
			if (this._drawer) this._drawer.setPath(this.domElement, this._getDisplayPixels(this.points))
		},
		_setPath: function(points) {
			this._parseCache[Tlength] = 0;
			this.points = Graph.getGraphPoints(points).slice(0);
			this._calcBounds()
		},
		setPath: function(points) {
			this._setPath(points)
		},
		_calcBounds: function() {
			if (!this.points) return;
			var me = this;
			me._bounds = new Bounds;
			baidu.array.each(this.points, function(point) {
				me._bounds[Textend](point)
			})
		},
		getPath: function() {
			return this.points
		},
		setPositionAt: function(index, point) {
			if (!point || !this.points[index]) return;
			this._parseCache[Tlength] = 0;
			this.points[index] = new Point(point["lng"], point["lat"]);
			this._calcBounds()
		},
		setStrokeColor: function(color) {
			this._config.strokeColor = color
		},
		getStrokeColor: function() {
			return this._config.strokeColor
		},
		setStrokeWeight: function(weight) {
			if (weight > 0) this._config.strokeWeight = weight
		},
		getStrokeWeight: function() {
			return this._config.strokeWeight
		},
		setStrokeOpacity: function(opacity) {
			if (!opacity || opacity > 1 || opacity < 0) return;
			this._config.strokeOpacity = opacity
		},
		getStrokeOpacity: function() {
			return this._config.strokeOpacity
		},
		setFillOpacity: function(opacity) {
			if (opacity > 1 || opacity < 0) return;
			this._config.fillOpacity = opacity
		},
		getFillOpacity: function() {
			return this._config.fillOpacity
		},
		setStrokeStyle: function(strokeStyle) {
			if (strokeStyle != "solid" && strokeStyle != "dashed") return;
			this._config.strokeStyle = strokeStyle
		},
		getStrokeStyle: function() {
			return this._config.strokeStyle
		},
		setFillColor: function(color) {
			this._config.fillColor = color || ""
		},
		getFillColor: function() {
			return this._config.fillColor
		},
		getBounds: function() {
			return this._bounds
		},
		remove: function() {
			if (this.map) this.map[TremoveEventListener]("onmousemove", this._graphMouseEvent);
			OverlayInternal[Tprototype].remove.call(this);
			this._parseCache[Tlength] = 0
		},
		enableEditing: function() {
			if (this.points[Tlength] < 2) return;
			this._config.enableEditing = true;
			var me = this;
			ModuleMgr.load("poly", function() {
				me.addVertexs()
			}, true)
		},
		disableEditing: function() {
			this._config.enableEditing = false;
			var me = this;
			ModuleMgr.load("poly", function() {
				me.clearVertexs()
			}, true)
		}
	});

	function Division(opts) {
		OverlayInternal.call(this);
		this.map = null;
		this.domElement = null;
		this._config = {
			width: 0,
			height: 0,
			offset: new Size(0, 0),
			opacity: 1,
			background: "transparent",
			lineStroke: 1,
			lineColor: "#000",
			lineStyle: "solid",
			point: null
		};
		this.setConfig(opts);
		this.point = this._config.point
	}
	baidu.lang.inherits(Division, OverlayInternal, "Division");
	baidu[Textend](Division[Tprototype], {
		_addDom: function() {
			var config = this._config;
			var content = this.content;
			var html = ['<div class="BMap_Division" style="position:absolute;'];
			html.push("width:" + config[Twidth] + "px;display:block;");
			html.push("overflow:hidden;");
			if (config.borderColor != "none") html.push("border:" + config.lineStroke + "px " + config.lineStyle + " " + config.lineColor + ";");
			html.push("opacity:" + config.opacity + "; filter:(opacity=" + config.opacity * 100 + ")");
			html.push("background:" + config.background + ";");
			html.push('z-index:60;">');
			html.push(content);
			html.push("</div>");
			this.domElement = beforeEndHTML(this.map.getPanes().markerMouseTarget, html.join(""))
		},
		"initialize": function(map) {
			this.map = map;
			this._addDom();
			if (this.domElement) {
				var eventName = isMobile() ? "touchstart" : "mousedown";
				baidu.on(this.domElement, eventName, function(e) {
					stopBubble(e)
				})
			}
			return this.domElement
		},
		"draw": function() {
			var pix = this.map.pointToOverlayPixel(this._config.point);
			this._config.offset = new Size(-TMath.round(this._config[Twidth] / 2) - TMath.round(this._config.lineStroke), -TMath.round(this._config[Theight] / 2) - TMath.round(this._config.lineStroke));
			this.domElement.style.left = pix.x + this._config.offset[Twidth] + "px";
			this.domElement.style.top = pix.y + this._config.offset[Theight] + "px"
		},
		getPosition: function() {
			return this._config.point
		},
		_getPixel: function(point) {
			return this.map.pointToPixel(this.getPosition())
		},
		setPosition: function(point) {
			this._config.point = point;
			this["draw"]()
		},
		setDimension: function(w, h) {
			this._config[Twidth] = TMath.round(w);
			this._config[Theight] = TMath.round(h);
			if (this.domElement) {
				this.domElement.style[Twidth] = this._config[Twidth] + "px";
				this.domElement.style[Theight] = this._config[Theight] + "px";
				this["draw"]()
			}
		}
	});

	function Icon(imageUrl, size, opts) {
		if (!imageUrl || !size) return;
		this["imageUrl"] = imageUrl;
		this["size"] = size;
		var defaultAnchor = new Size(TMath.floor(size[Twidth] / 2), TMath.floor(size[Theight] / 2));
		opts = opts || {};
		var _config = {
			anchor: opts["anchor"] || defaultAnchor,
			imageOffset: opts["imageOffset"] || new Size(0, 0)
		};
		this["imageSize"] = opts["imageSize"];
		this["anchor"] = _config.anchor;
		this["imageOffset"] = _config.imageOffset;
		this["infoWindowAnchor"] = opts["infoWindowAnchor"] || this["anchor"];
		this["printImageUrl"] = opts["printImageUrl"] || ""
	}
	var IconPrototype = Icon[Tprototype];
	baidu[Textend](Icon[Tprototype], {
		setImageUrl: function(url) {
			if (!url) return;
			this["imageUrl"] = url
		},
		setPrintImageUrl: function(url) {
			if (!url) return;
			this["printImageUrl"] = url
		},
		setSize: function(size) {
			if (!size) return;
			this["size"] = new Size(size[Twidth], size[Theight])
		},
		setAnchor: function(size) {
			if (!size) return;
			this["anchor"] = new Size(size[Twidth], size[Theight])
		},
		setImageOffset: function(size) {
			if (!size) return;
			this["imageOffset"] = new Size(size[Twidth], size[Theight])
		},
		setInfoWindowAnchor: function(size) {
			if (!size) return;
			this["infoWindowAnchor"] = new Size(size[Twidth], size[Theight])
		},
		setImageSize: function(size) {
			if (!size) return;
			this["imageSize"] = new Size(size[Twidth], size[Theight])
		},
		toString: function() {
			return "Icon"
		}
	});

	function InfoWindow(content, opts) {
		baidu.lang.Class.call(this);
		this.content = content;
		this.map = null;
		opts = opts || {};
		this._config = {
			width: opts["width"] || 0,
			height: opts["height"] || 0,
			maxWidth: opts["maxWidth"] || 600,
			offset: opts["offset"] || new Size(0, 0),
			title: opts["title"] || "",
			maxContent: opts["maxContent"] || "",
			enableMaximize: opts["enableMaximize"] || false,
			enableAutoPan: opts["enableAutoPan"] === false ? false : true,
			enableCloseOnClick: opts["enableCloseOnClick"] === false ? false : true,
			margin: [10, 10, 40, 10],
			collisions: [
				[10, 10],
				[10, 10],
				[10, 10],
				[10, 10]
			],
			ifMaxScene: false,
			onClosing: function() {
				return true
			},
			enableSearchTool: opts["enableSearchTool"] === true ? true : false
		};
		if (this._config[Twidth] != 0) {
			if (this._config[Twidth] < 220) this._config[Twidth] = 220;
			if (this._config[Twidth] > 730) this._config[Twidth] = 730
		}
		if (this._config[Theight] != 0) {
			if (this._config[Theight] < 60) this._config[Theight] = 60;
			if (this._config[Theight] > 650) this._config[Theight] = 650
		}
		if (this._config.maxWidth != 0) {
			if (this._config.maxWidth < 220) this._config.maxWidth = 220;
			if (this._config.maxWidth > 730) this._config.maxWidth = 730
		}
		this.isWinMax = false;
		this.IMG_PATH = MapConfig.imgPath;
		this.overlay = null;
		var me = this;
		ModuleMgr.load("infowindow", function() {
			me._draw()
		})
	}
	baidu.lang.inherits(InfoWindow, baidu.lang.Class, "InfoWindow");
	baidu[Textend](InfoWindow[Tprototype], {
		"setWidth": function(width) {
			if (!width && width != 0 || isNaN(width) || width < 0) return;
			if (width != 0) {
				if (width < 220) width = 220;
				if (width > 730) width = 730
			}
			this._config[Twidth] = width
		},
		"setHeight": function(height) {
			if (!height && height != 0 || isNaN(height) || height < 0) return;
			if (height != 0) {
				if (height < 60) height = 60;
				if (height > 650) height = 650
			}
			this._config[Theight] = height
		},
		setMaxWidth: function(width) {
			if (!width && width != 0 || isNaN(width) || width < 0) return;
			if (width != 0) {
				if (width < 220) width = 220;
				if (width > 730) width = 730
			}
			this._config.maxWidth = width
		},
		setTitle: function(title) {
			this._config.title = title
		},
		"getTitle": function() {
			return this._config.title
		},
		setContent: function(content) {
			this.content = content
		},
		getContent: function() {
			return this.content
		},
		setMaxContent: function(content) {
			this._config.maxContent = content + ""
		},
		redraw: function() {},
		enableAutoPan: function() {
			this._config.enableAutoPan = true
		},
		"disableAutoPan": function() {
			this._config.enableAutoPan = false
		},
		"enableCloseOnClick": function() {
			this._config.enableCloseOnClick = true
		},
		"disableCloseOnClick": function() {
			this._config.enableCloseOnClick = false
		},
		enableMaximize: function() {
			this._config.enableMaximize = true
		},
		disableMaximize: function() {
			this._config.enableMaximize = false
		},
		show: function() {
			this._visible = true
		},
		hide: function() {
			this._visible = false
		},
		close: function() {
			this.hide()
		},
		maximize: function() {
			this.isWinMax = true
		},
		restore: function() {
			this.isWinMax = false
		},
		isVisible: function() {
			return this.isOpen()
		},
		isOpen: function() {
			return false
		},
		getPosition: function() {
			if (this.overlay && this.overlay.getPosition) return this.overlay.getPosition()
		},
		getOffset: function() {
			return this._config.offset
		}
	});
	Map[Tprototype].openInfoWindow = function(infoWin, point) {
		if (!(infoWin instanceof InfoWindow) || !(point instanceof Point)) return;
		var t = this.temp;
		if (!t.marker) {
			var icon = new Icon(MapConfig.imgPath + "blank.gif", {
				"width": 1,
				"height": 1
			});
			t.marker = new Marker(point, {
				"icon": icon,
				"offset": new Size(0, 0),
				"clickable": false
			});
			t.marker._fromMap = 1
		} else t.marker.setPosition(point);
		this.addOverlay(t.marker);
		t.marker.openInfoWindow(infoWin)
	};
	Map[Tprototype].closeInfoWindow = function() {
		var infoWin = this.temp.infoWin || this.temp._infoWin;
		if (infoWin && infoWin.overlay) infoWin.overlay.closeInfoWindow()
	};
	OverlayInternal[Tprototype].openInfoWindow = function(infoWin) {
		if (this.map) {
			this.map.closeInfoWindow();
			infoWin._visible = true;
			this.map.temp._infoWin = infoWin;
			infoWin.overlay = this;
			baidu.lang.Class.call(infoWin, infoWin.guid)
		}
	};
	OverlayInternal[Tprototype].closeInfoWindow = function() {
		if (this.map && this.map.temp._infoWin) {
			this.map.temp._infoWin._visible = false;
			baidu.lang.decontrol(this.map.temp._infoWin.guid);
			this.map.temp._infoWin = null
		}
	};

	function Label(content, opts) {
		OverlayInternal.call(this);
		this.content = content;
		this.map = null;
		this.domElement = null;
		opts = opts || {};
		this._config = {
			width: 0,
			offset: opts["offset"] || new Size(0, 0),
			styles: {
				backgroundColor: "#fff",
				border: "1px solid #f00",
				padding: "1px",
				whiteSpace: "nowrap",
				font: "12px " + MapConfig.fontFamily,
				zIndex: "80",
				MozUserSelect: "none"
			},
			position: opts["position"] || null,
			enableMassClear: opts["enableMassClear"] === false ? false : true,
			clickable: true
		};
		if (this._config[Twidth] < 0) this._config[Twidth] = 0;
		if (isDefined(opts["enableClicking"])) this._config.clickable = opts["enableClicking"];
		this.point = this._config[Tposition];
		var me = this;
		ModuleMgr.load("marker", function() {
			me._draw()
		})
	}
	baidu.lang.inherits(Label, OverlayInternal, "Label");
	baidu[Textend](Label[Tprototype], {
		getPosition: function() {
			if (this._marker) return this._marker.getPosition();
			return this.point
		},
		setPosition: function(point) {
			if (point instanceof Point && !this.getMarker()) this.point = this._config[Tposition] = new Point(point["lng"], point["lat"])
		},
		setContent: function(content) {
			this.content = content
		},
		setOpacity: function(opacity) {
			if (opacity >= 0 && opacity <= 1) this._config.opacity = opacity
		},
		setOffset: function(size) {
			if (!(size instanceof Size)) return;
			this._config.offset = new Size(size[Twidth], size[Theight])
		},
		getOffset: function() {
			return this._config.offset
		},
		setStyle: function(styles) {
			styles = styles || {};
			this._config.styles = baidu[Textend](this._config.styles, styles)
		},
		setStyles: function(styles) {
			return this.setStyle(styles)
		},
		setTitle: function(title) {
			this._config.title = title || ""
		},
		"getTitle": function() {
			return this._config.title
		},
		setMarker: function(marker) {
			this._marker = marker;
			if (marker) this.point = this._config[Tposition] = marker.getPosition();
			else this.point = this._config[Tposition] = null
		},
		getMarker: function() {
			return this._marker || null
		}
	});
	var BMAP_ANIMATION_DROP = 1,
		BMAP_ANIMATION_BOUNCE = 2;
	var DEFAULT_ICON = new Icon(MapConfig.imgPath + "marker_red_sprite.png", new Size(19, 25), {
		"anchor": new Size(10, 25),
		"infoWindowAnchor": new Size(10, 0)
	});
	var DEFAULT_SHADOW = new Icon(MapConfig.imgPath + "marker_red_sprite.png", new Size(20, 11), {
		"anchor": new Size(6, 11),
		"imageOffset": new Size(-19, -13)
	});

	function Marker(point, opts) {
		OverlayInternal.call(this);
		opts = opts || {};
		this.point = point;
		this.map = null;
		this._animation = null;
		this._config = {
			offset: opts["offset"] || new Size(0, 0),
			icon: opts["icon"] || DEFAULT_ICON,
			shadow: DEFAULT_SHADOW,
			title: opts["title"] || "",
			label: null,
			baseZIndex: opts["baseZIndex"] || 0,
			clickable: true,
			zIndexFixed: false,
			isTop: false,
			enableMassClear: true,
			enableDragging: false,
			raiseOnDrag: opts["raiseOnDrag"] || false,
			restrictDraggingArea: false,
			draggingCursor: opts["draggingCursor "] || MapConfig.draggingCursor
		};
		if (opts["icon"] && !opts["shadow"]) this._config.shadow = null;
		if (opts["enableDragging"]) this._config.enableDragging = opts["enableDragging"];
		if (opts["enableMassClear"]) this._config.enableMassClear = opts["enableMassClear"];
		if (isDefined(opts["enableClicking"])) this._config.clickable = opts["enableClicking"];
		var me = this;
		ModuleMgr.load("marker", function() {
			me._draw()
		})
	}
	Marker.TOP_ZINDEX = Overlay.getZIndex(-90) + 1E6;
	Marker.DRAG_ZINDEX = Marker.TOP_ZINDEX + 1E6;
	baidu.lang.inherits(Marker, OverlayInternal, "Marker");
	baidu[Textend](Marker[Tprototype], {
		setIcon: function(icon) {
			if (icon instanceof Icon) this._config.icon = icon
		},
		getIcon: function() {
			return this._config.icon
		},
		setShadow: function(shadow) {
			if (shadow instanceof Icon) this._config.shadow = shadow
		},
		"getShadow": function() {
			return this._config.shadow
		},
		setLabel: function(label) {
			this._config.label = label || null
		},
		getLabel: function() {
			return this._config.label
		},
		enableDragging: function() {
			this._config.enableDragging = true
		},
		disableDragging: function() {
			this._config.enableDragging = false
		},
		getPosition: function() {
			return this.point
		},
		setPosition: function(point) {
			if (point instanceof Point) this.point = new Point(point["lng"], point["lat"])
		},
		setTop: function(top, addi) {
			this._config.isTop = !! top;
			if (top) this._addi = addi || 0
		},
		setTitle: function(title) {
			this._config.title = title + ""
		},
		"getTitle": function() {
			return this._config.title
		},
		setOffset: function(offset) {
			if (offset instanceof Size) this._config.offset = offset
		},
		getOffset: function() {
			return this._config.offset
		},
		setAnimation: function(animation) {
			this._animation = animation
		}
	});

	function Polygon(points, opts) {
		Graph.call(this, opts);
		opts = opts || {};
		this._config.fillOpacity = opts["fillOpacity"] ? opts["fillOpacity"] : 0.65;
		if (opts.fillColor == "") this._config.fillColor = "";
		else this._config.fillColor = opts["fillColor"] ? opts["fillColor"] : "#fff";
		this.setPath(points);
		var me = this;
		ModuleMgr.load("poly", function() {
			me._draw()
		})
	}
	baidu.lang.inherits(Polygon, Graph, "Polygon");
	baidu[Textend](Polygon[Tprototype], {
		setPath: function(points, flag) {
			this._userPoints = Graph.getGraphPoints(points).slice(0);
			var pts = Graph.getGraphPoints(points).slice(0);
			if (pts[Tlength] > 1 && !pts[0].equals(pts[pts[Tlength] - 1])) pts.push(new Point(pts[0]["lng"], pts[0]["lat"]));
			Graph[Tprototype].setPath.call(this, pts, flag)
		},
		setPositionAt: function(index, point) {
			if (!this._userPoints[index]) return;
			this._userPoints[index] = new Point(point["lng"], point["lat"]);
			this.points[index] = new Point(point["lng"], point["lat"]);
			if (index == 0 && !this.points[0].equals(this.points[this.points[Tlength] - 1])) this.points[this.points[Tlength] - 1] = new Point(point["lng"], point["lat"]);
			this._calcBounds()
		},
		getPath: function() {
			var res = this._userPoints;
			if (res[Tlength] == 0) res = this.points;
			return res
		}
	});

	function Polyline(points, opts) {
		Graph.call(this, opts);
		this._setPath(points);
		var me = this;
		ModuleMgr.load("poly", function() {
			me._draw()
		})
	}
	baidu.lang.inherits(Polyline, Graph, "Polyline");

	function Circle(center, radius, opts) {
		this.point = center;
		this.radius = TMath.abs(radius);
		Polygon.call(this, [], opts)
	}
	Circle.parseTolerance = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
	baidu.lang.inherits(Circle, Polygon, "Circle");
	baidu[Textend](Circle[Tprototype], {
		"initialize": function(map) {
			this.map = map;
			this.points = this._getPerimeterPoints(this.point, this.radius);
			this._calcBounds();
			return null
		},
		getCenter: function() {
			return this.point
		},
		setCenter: function(point, keepVertexCache) {
			if (!point) return;
			this.point = point
		},
		getRadius: function() {
			return this.radius
		},
		setRadius: function(radius) {
			this.radius = TMath.abs(radius)
		},
		_getPerimeterPoints: function(center, radius) {
			if (!center || !radius || !this.map) return [];
			var map = this.map;
			var cx = center["lng"],
				cy = center["lat"];
			var points = [];
			var d = radius / 6378800,
				lat1 = TMath.PI / 180 * cy,
				lng1 = TMath.PI / 180 * cx;
			for (var i = 0; i < 360; i += 9) {
				var tc = TMath.PI / 180 * i,
					y = TMath.asin(TMath.sin(lat1) * TMath.cos(d) + TMath.cos(lat1) * TMath.sin(d) * TMath.cos(tc)),
					dlng = TMath.atan2(TMath.sin(tc) * TMath.sin(d) * TMath.cos(lat1), TMath.cos(d) - TMath.sin(lat1) * TMath.sin(y)),
					x = (lng1 - dlng + TMath.PI) % (2 * TMath.PI) - TMath.PI,
					point = new Point(x * (180 / TMath.PI), y * (180 / TMath.PI));
				points.push(point)
			}
			var fstPoint = points[0];
			points.push(new Point(fstPoint["lng"], fstPoint["lat"]));
			return points
		}
	});
	var MarkerAnimations = {};

	function TileMgr(map) {
		this.map = map;
		this.mapTypeLayers = [];
		this.tileLayers = [];
		this.bufferNumber = 300;
		this.realBufferNumber = 0;
		this.mapTiles = {};
		this.bufferTiles = {};
		this.numLoading = 0;
		this._mapTypeLayerContainer = this._createDiv(1);
		this._normalLayerContainer = this._createDiv(2);
		map.platform[TappendChild](this._mapTypeLayerContainer);
		map.platform[TappendChild](this._normalLayerContainer)
	}
	BMap.register(function(map) {
		var mgr = new TileMgr(map);
		mgr.initialize()
	});
	baidu[Textend](TileMgr[Tprototype], {
		initialize: function() {
			var me = this,
				map = me.map;
			map[TaddEventListener]("loadcode", function() {
				me.loadTiles()
			});
			map[TaddEventListener]("addtilelayer", function(e) {
				me.addTileLayer(e)
			});
			map[TaddEventListener]("removetilelayer", function(e) {
				me.removeTileLayer(e)
			});
			map[TaddEventListener]("setmaptype", function(e) {
				me.setMapType(e)
			});
			map[TaddEventListener]("zoomstartcode", function(e) {
				me._zoom(e)
			})
		},
		loadTiles: function() {
			var me = this;
			if (baidu.browser.ie) try {
				Tdocument.execCommand("BackgroundImageCache", false, true)
			} catch (e) {}
			if (!this.loaded) me.initMapTypeTiles();
			me.moveGridTiles();
			if (!this.loaded) {
				this.loaded = true;
				ModuleMgr.load("tile", function() {
					me._asyncLoadTiles()
				})
			}
		},
		initMapTypeTiles: function() {
			var mapType = this.map.getMapType();
			var layers = mapType.getTileLayers();
			for (var i = 0; i < layers[Tlength]; i++) {
				var thisLayer = new TileLayer;
				baidu[Textend](thisLayer, layers[i]);
				this.mapTypeLayers.push(thisLayer);
				thisLayer.initialize(this.map, this._mapTypeLayerContainer)
			}
		},
		_createDiv: function(zIndex) {
			var div = create("div");
			div.style[Tposition] = "absolute";
			div.style.overflow = "visible";
			div.style.left = div.style.top = "0";
			div.style.zIndex = zIndex;
			return div
		},
		showTile: function(tileInfo, centerPos, tilelayer) {
			var me = this;
			me.centerPos = centerPos;
			var mapType = this.map.getMapType();
			var tileName = me.getTileName(tileInfo, tilelayer);
			var tileSize = mapType.getTileSize();
			var posX = tileInfo[0] * tileSize + centerPos[0];
			var rpix = 0;
			if (mapType === BMAP_PERSPECTIVE_MAP && me.map.getZoom() == 15) rpix = 0.5;
			var posY = (rpix - 1 - tileInfo[1]) * tileSize + centerPos[1];
			var position = [posX, posY];
			var tile = this.mapTiles[tileName];
			if (tile && tile.img) {
				setPosition(tile.img, position);
				if (tile.loaded) this._checkTilesLoaded();
				else tile._addLoadCbk(function() {
					me._checkTilesLoaded()
				});
				return
			}
			tile = this.bufferTiles[tileName];
			if (tile && tile.img) {
				tilelayer.tilesDiv.insertBefore(tile.img, tilelayer.tilesDiv.lastChild);
				this.mapTiles[tileName] = tile;
				setPosition(tile.img, position);
				if (tile.loaded) this._checkTilesLoaded();
				else tile._addLoadCbk(function() {
					me._checkTilesLoaded()
				});
				return
			}
			var zoomUnits = 256 * TMath.pow(2, mapType.getMaxZoom() - tileInfo[2]);
			var point = new Point(tileInfo[0] * zoomUnits, tileInfo[1] * zoomUnits);
			var tileCoord = new Pixel(tileInfo[0], tileInfo[1]);
			var src = tilelayer["getTilesUrl"](tileCoord, tileInfo[2]);
			tile = new Tile(this, src, position, tileInfo, tilelayer);
			tile._addLoadCbk(function() {
				me._checkTilesLoaded()
			});
			tile._load();
			this.mapTiles[tileName] = tile
		},
		_checkTilesLoaded: function() {
			this.numLoading--;
			var me = this;
			if (this.numLoading == 0) {
				if (this._checkLoadedTimer) {
					clearTimeout(this._checkLoadedTimer);
					this._checkLoadedTimer = null
				}
				this._checkLoadedTimer = setTimeout(function() {
					if (me.numLoading == 0) {
						me.map.dispatchEvent(new BaseEvent("ontilesloaded"));
						if (isFirstTilesLoaded) {
							if (TIME_LINE.startLoadScript && TIME_LINE.loadScriptEnd && TIME_LINE.loadedMap) {
								var currentTime = TIME_LINE.firstTilesLoaded = getCurrentTime();
								var size = me.map.getSize();
								setTimeout(function() {
									_addStat(5030, {
										"load_script_time": TIME_LINE.loadScriptEnd - TIME_LINE.startLoadScript,
										"load_tiles_time": currentTime - TIME_LINE.loadedMap,
										"map_width": size[Twidth],
										"map_height": size[Theight],
										"map_size": size[Twidth] * size[Theight]
									})
								}, 1E4)
							}
							isFirstTilesLoaded = false
						}
					}
					me._checkLoadedTimer = null
				}, 80)
			}
		},
		getTileName: function(tileInfo, tilelayer) {
			if (this.map.getMapType() === BMAP_PERSPECTIVE_MAP) return "TILE-" + tilelayer.guid + "-" + this.map.cityCode + "-" + tileInfo[0] + "-" + tileInfo[1] + "-" + tileInfo[2];
			else return "TILE-" + tilelayer.guid + "-" + tileInfo[0] + "-" + tileInfo[1] + "-" + tileInfo[2]
		},
		hideTile: function(tile) {
			var img = tile.img;
			if (img) {
				purge(img);
				if (isInDocument(img)) img[TparentNode][TremoveChild](img)
			}
			delete this.mapTiles[tile.name];
			if (!tile.loaded) {
				purge(img);
				img = null;
				tile._callCbks();
				tile.img = null;
				tile.mgr = null
			}
		},
		moveGridTiles: function() {
			var me = this,
				map = me.map,
				mapType = map.getMapType();
			if (mapType == BMAP_PERSPECTIVE_MAP) ModuleMgr.load("coordtrans", function() {
				me._moveGridTiles()
			}, true);
			else me._moveGridTiles()
		},
		_moveGridTiles: function() {
			var mapTypeLayers = this.mapTypeLayers;
			var layers = mapTypeLayers.concat(this.tileLayers);
			var layernums = layers[Tlength];
			for (var n = 0; n < layernums; n++) {
				var tilelayer = layers[n];
				if (tilelayer.baseLayer) this.tilesDiv = tilelayer.tilesDiv;
				var map = this.map;
				var mapType = map.getMapType();
				var projection = mapType.getProjection();
				var zoomLevel = map.zoomLevel;
				var centerPoint = map.mercatorCenter;
				if (mapType == BMAP_PERSPECTIVE_MAP) if (centerPoint.equals(new Point(0, 0))) centerPoint = map.mercatorCenter = projection.lngLatToMercator(map.centerPoint, map.currentCity);
				var zoomUnits = mapType.getZoomUnits(zoomLevel);
				var levelUnits = mapType.getZoomFactor(zoomLevel);
				var row = TMath.ceil(centerPoint["lng"] / levelUnits);
				var column = TMath.ceil(centerPoint["lat"] / levelUnits);
				var tileSize = mapType.getTileSize();
				var cell = [row, column, (centerPoint["lng"] - row * levelUnits) / levelUnits * tileSize, (centerPoint["lat"] - column * levelUnits) / levelUnits * tileSize];
				var fromRow = cell[0] - TMath.ceil((map[Twidth] / 2 - cell[2]) / tileSize);
				var fromColumn = cell[1] - TMath.ceil((map[Theight] / 2 - cell[3]) / tileSize);
				var toRow = cell[0] + TMath.ceil((map[Twidth] / 2 + cell[2]) / tileSize);
				var addC = 0;
				if (mapType === BMAP_PERSPECTIVE_MAP && map.getZoom() == 15) addC = 1;
				var toColumn = cell[1] + TMath.ceil((map[Theight] / 2 + cell[3]) / tileSize) + addC;
				this.areaCenter = new Point(centerPoint["lng"], centerPoint["lat"]);
				var mapTiles = this.mapTiles;
				var centerPixX = -this.areaCenter["lng"] / zoomUnits;
				var centerPixY = this.areaCenter["lat"] / zoomUnits;
				var centerPosition = [TMath.ceil(centerPixX), TMath.ceil(centerPixY)];
				var zoom = map.getZoom();
				for (var tileName in mapTiles) {
					var tile = mapTiles[tileName];
					var info = tile.info;
					if (info[2] != zoom || info[2] == zoom && (fromRow > info[0] || toRow <= info[0] || fromColumn > info[1] || toColumn <= info[1])) this.hideTile(tile)
				}
				var divLeft = -map[ToffsetX] + map[Twidth] / 2;
				var divTop = -map[ToffsetY] + map[Theight] / 2;
				tilelayer.tilesDiv.style.left = TMath.ceil(centerPixX + divLeft) - centerPosition[0] + "px";
				tilelayer.tilesDiv.style.top = TMath.ceil(centerPixY + divTop) - centerPosition[1] + "px";
				var tilesOrder = [];
				for (var i = fromRow; i < toRow; i++) for (var j = fromColumn; j < toColumn; j++) tilesOrder.push([i, j]);
				tilesOrder.sort(function(center) {
					return function(x, y) {
						return 0.4 * TMath.abs(x[0] - center[0]) + 0.6 * TMath.abs(x[1] - center[1]) - (0.4 * TMath.abs(y[0] - center[0]) + 0.6 * TMath.abs(y[1] - center[1]))
					}
				}([cell[0] - 1, cell[1] - 1]));
				this.numLoading += tilesOrder[Tlength];
				for (var i = 0, l = tilesOrder[Tlength]; i < l; i++) this.showTile([tilesOrder[i][0], tilesOrder[i][1], zoom], centerPosition, tilelayer)
			}
			return
		},
		addTileLayer: function(e) {
			var me = this;
			var tilelayer = e.target;
			for (var i = 0; i < me.tileLayers[Tlength]; i++) if (me.tileLayers[i] == tilelayer) return;
			tilelayer.initialize(this.map, this._normalLayerContainer);
			me.tileLayers.push(tilelayer)
		},
		removeTileLayer: function(e) {
			var me = this;
			var tilelayer = e.target;
			for (var i = 0, l = me.tileLayers[Tlength]; i < l; i++) if (tilelayer == me.tileLayers[i]) me.tileLayers.splice(i, 1);
			tilelayer.remove()
		},
		setMapType: function() {
			var me = this;
			var layers = this.mapTypeLayers;
			for (var i = 0, l = layers[Tlength]; i < l; i++) layers[i].remove();
			delete this.tilesDiv;
			this.mapTypeLayers = [];
			this.bufferTiles = this.mapTiles = {};
			this.initMapTypeTiles();
			this.moveGridTiles()
		},
		_zoom: function() {
			var me = this;
			if (me.zoomsDiv) baidu.dom.hide(me.zoomsDiv);
			setTimeout(function() {
				me.moveGridTiles();
				me.map.dispatchEvent(new BaseEvent("onzoomend"))
			}, 10)
		}
	});

	function Tile(mgr, src, position, tileInfo, tilelayer) {
		this.mgr = mgr;
		this[Tposition] = position;
		this._cbks = [];
		this.name = mgr.getTileName(tileInfo, tilelayer);
		this.info = tileInfo;
		this._transparentPng = tilelayer.isTransparentPng();
		var tileImg = create("img");
		setUnSelectable(tileImg);
		tileImg.galleryImg = false;
		var imgStyle = tileImg.style;
		var mapType = mgr.map.getMapType();
		imgStyle[Tposition] = "absolute";
		imgStyle.border = "none";
		imgStyle[Twidth] = mapType.getTileSize() + "px";
		imgStyle[Theight] = mapType.getTileSize() + "px";
		imgStyle.left = position[0] + "px";
		imgStyle.top = position[1] + "px";
		imgStyle.maxWidth = "none";
		this.img = tileImg;
		this.src = src;
		if (fadeInTile) this.img.style.opacity = 0;
		var me = this;
		this.img.onload = function(e) {
			me.loaded = true;
			if (!me.mgr) return;
			var tileMgr = me.mgr;
			var bufferTiles = tileMgr.bufferTiles;
			if (!bufferTiles[me.name]) {
				tileMgr.realBufferNumber++;
				bufferTiles[me.name] = me
			}
			if (me.img && !isInDocument(me.img)) if (tilelayer.tilesDiv) {
				tilelayer.tilesDiv[TappendChild](me.img);
				if (baidu.browser.ie <= 6 && baidu.browser.ie > 0 && me._transparentPng) me.img.style.cssText += ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + me.src + '",sizingMethod=scale);'
			}
			var bufDiffer = tileMgr.realBufferNumber - tileMgr.bufferNumber;
			for (var tileName in bufferTiles) {
				if (bufDiffer <= 0) break;
				if (!tileMgr.mapTiles[tileName]) {
					bufferTiles[tileName].mgr = null;
					var img = bufferTiles[tileName].img;
					if (img && img[TparentNode]) {
						img[TparentNode][TremoveChild](img);
						purge(img)
					}
					img = null;
					bufferTiles[tileName].img = null;
					delete bufferTiles[tileName];
					tileMgr.realBufferNumber--;
					bufDiffer--
				}
			}
			if (fadeInTile) new Animation({
				fps: 20,
				duration: 200,
				render: function(s) {
					if (me.img && me.img.style) me.img.style.opacity = s * 1
				},
				finish: function() {
					if (me.img && me.img.style) delete me.img.style.opacity
				}
			});
			me._callCbks()
		};
		this.img.onerror = function() {
			me._callCbks();
			if (!me.mgr) return;
			var tileMgr = me.mgr;
			var mapType = tileMgr.map.getMapType();
			if (mapType.getErrorImageUrl()) {
				me.error = true;
				me.img.src = mapType.getErrorImageUrl();
				if (me.img && !isInDocument(me.img)) tilelayer.tilesDiv[TappendChild](me.img)
			}
		};
		tileImg = null
	}
	Tile[Tprototype]._addLoadCbk = function(cbk) {
		this._cbks.push(cbk)
	};
	Tile[Tprototype]._load = function() {
		if (baidu.browser.ie > 0 && baidu.browser.ie <= 6 && this._transparentPng) this.img.src = MapConfig.imgPath + "blank.gif";
		else this.img.src = this.src
	};
	Tile[Tprototype]._callCbks = function() {
		var me = this;
		for (var i = 0; i < me._cbks[Tlength]; i++) me._cbks[i]();
		me._cbks[Tlength] = 0
	};

	function purge(d) {
		if (!d) return;
		d.onload = d.onerror = null;
		var a = d.attributes,
			i, l, n;
		if (a) {
			l = a[Tlength];
			for (i = 0; i < l; i += 1) {
				n = a[i].name;
				if (isFunction(d[n])) d[n] = null
			}
		}
		a = d.children;
		if (a) {
			l = a[Tlength];
			for (i = 0; i < l; i += 1) purge(d.children[i])
		}
	}
	var fadeInTile = !baidu.browser.ie || baidu.browser.ie > 8;

	function TileLayer(opts) {
		this.opts = opts || {};
		this.copyright = this.opts["copyright"] || null;
		this.transparentPng = this.opts["transparentPng"] || false;
		this.baseLayer = this.opts["baseLayer"] || false;
		this.zIndex = this.opts["zIndex"] || 0;
		this.guid = TileLayer._guid++
	}
	TileLayer._guid = 0;
	baidu.lang.inherits(TileLayer, baidu.lang.Class, "TileLayer");
	baidu[Textend](TileLayer[Tprototype], {
		initialize: function(map, container) {
			if (this.baseLayer) this.zIndex = -100;
			this.map = map;
			if (!this.tilesDiv) {
				var div = create("div");
				var style = div.style;
				style[Tposition] = "absolute";
				style.overflow = "visible";
				style.zIndex = this.zIndex;
				style.left = TMath.ceil(-map[ToffsetX] + map[Twidth] / 2) + "px";
				style.top = TMath.ceil(-map[ToffsetY] + map[Theight] / 2) + "px";
				container[TappendChild](div);
				this.tilesDiv = div
			}
			var mapType = map.getMapType();
			if (map.highResolutionEnabled() && mapType == BMAP_NORMAL_MAP) {
				mapType._opts.tileSize = 128;
				var getZoomUnits = function(zoom) {
						return TMath.pow(2, 18 - zoom) * 2
					};
				mapType.getZoomUnits = getZoomUnits;
				mapType._opts.projection.getZoomUnits = getZoomUnits
			}
		},
		remove: function() {
			if (this.tilesDiv && this.tilesDiv[TparentNode]) {
				this.tilesDiv.innerHTML = "";
				this.tilesDiv[TparentNode][TremoveChild](this.tilesDiv)
			}
			delete this.tilesDiv
		},
		isTransparentPng: function() {
			return this.transparentPng
		},
		"getTilesUrl": function(tileCoord, zoom) {
			var url = "";
			if (this.opts["tileUrlTemplate"]) {
				url = this.opts["tileUrlTemplate"].replace(/\{X\}/, tileCoord.x);
				url = url.replace(/\{Y\}/, tileCoord.y);
				url = url.replace(/\{Z\}/, zoom)
			}
			return url
		},
		getCopyright: function() {
			return this.copyright
		},
		getMapType: function() {
			return this.mapType || BMAP_NORMAL_MAP
		}
	});

	function TrafficLayer(opts) {
		TileLayer.call(this, opts);
		this._opts = opts || {};
		if (this._opts["predictDate"]) {
			if (this._opts["predictDate"]["weekday"] < 1 || this._opts["predictDate"]["weekday"] > 7) this._opts["predictDate"] = 1;
			if (this._opts["predictDate"]["hour"] < 0 || this._opts["predictDate"]["hour"] > 23) this._opts["predictDate"]["hour"] = 0
		}
		this._tileUrl = "http://its.map.baidu.com:8002/traffic/"
	}
	TrafficLayer[Tprototype] = new TileLayer;
	TrafficLayer[Tprototype].initialize = function(map, container) {
		TileLayer[Tprototype].initialize.call(this, map, container);
		this._map = map
	};
	TrafficLayer[Tprototype].isTransparentPng = function() {
		return true
	};
	TrafficLayer[Tprototype]["getTilesUrl"] = function(point, level) {
		var pDate = "";
		if (this._opts["predictDate"]) pDate = "HistoryService?" + "day=" + (this._opts["predictDate"]["weekday"] - 1) + "&hour=" + this._opts["predictDate"]["hour"] + "&t=" + (new Date).getTime() + "&";
		else {
			pDate = "TrafficTileService?" + "time=" + (new Date).getTime() + "&";
			if (!this._map.highResolutionEnabled()) pDate += "label=web2D&v=016&"
		}
		var map = this._map,
			row = point.x,
			column = point.y,
			px = TMath.floor(row / 200),
			py = TMath.floor(column / 200),
			url = this._tileUrl + pDate + "level=" + level + "&x=" + row + "&y=" + column;
		return url.replace(/-(\d+)/gi, "M$1")
	};

	function MapType(name, layer, opts) {
		this._name = name;
		this._layers = layer instanceof TileLayer ? [layer] : layer.slice(0);
		opts = opts || {};
		this._opts = {
			tips: opts["tips"] || "",
			labelText: "",
			minZoom: opts["minZoom"] || 3,
			maxZoom: opts["maxZoom"] || 19,
			highMinZoom: opts["minZoom"] || 3,
			highMaxZoom: opts["maxZoom"] || 18,
			tileSize: 256,
			textColor: opts["textColor"] || "black",
			errorImageUrl: opts["errorImageUrl"] || "",
			projection: opts["projection"] || new MercatorProjection
		};
		if (this._layers[Tlength] >= 1) this._layers[0].baseLayer = true;
		baidu[Textend](this._opts, opts)
	}
	baidu[Textend](MapType[Tprototype], {
		getName: function() {
			return this._name
		},
		getTips: function() {
			return this._opts.tips
		},
		getLabelText: function() {
			return this._opts.labelText
		},
		getTileLayer: function() {
			return this._layers[0]
		},
		getTileLayers: function() {
			return this._layers
		},
		getTileSize: function() {
			return this._opts.tileSize
		},
		getMinZoom: function() {
			return this._opts.minZoom
		},
		getMaxZoom: function() {
			return this._opts.maxZoom
		},
		getTextColor: function() {
			return this._opts.textColor
		},
		getProjection: function() {
			return this._opts.projection
		},
		getErrorImageUrl: function() {
			return this._opts.errorImageUrl
		},
		getTileSize: function() {
			return this._opts.tileSize
		},
		getZoomUnits: function(zoom) {
			return TMath.pow(2, 18 - zoom)
		},
		getZoomFactor: function(zoom) {
			return this.getZoomUnits(zoom) * this.getTileSize()
		}
	});
	var TILE_BASE_URLS = ["http://shangetu0.map.bdimg.com/it/", "http://shangetu1.map.bdimg.com/it/", "http://shangetu2.map.bdimg.com/it/", "http://shangetu3.map.bdimg.com/it/", "http://shangetu4.map.bdimg.com/it/"];
	var TILE_ONLINE_URLS = ["http://online0.map.bdimg.com/tile/", "http://online1.map.bdimg.com/tile/", "http://online2.map.bdimg.com/tile/", "http://online3.map.bdimg.com/tile/", "http://online4.map.bdimg.com/tile/"];
	var normalMapTileLayer = new TileLayer;
	normalMapTileLayer["getTilesUrl"] = function(tileCoord, zoom) {
		var row = tileCoord.x;
		var column = tileCoord.y;
		var udt = "20131220";
		var styles = "pl";
		if (this.map.highResolutionEnabled()) styles = "ph";
		var url = TILE_ONLINE_URLS[TMath.abs(row + column) % TILE_ONLINE_URLS[Tlength]] + "?qt=tile&x=" + (row + "").replace(/-/gi, "M") + "&y=" + (column + "").replace(/-/gi, "M") + "&z=" + zoom + "&styles=" + styles + (baidu.browser.ie == 6 ? "&color_dep=32&colors=50" : "") + "&udt=" + udt;
		return url.replace(/-(\d+)/gi, "M$1")
	};
	var BMAP_NORMAL_MAP = new MapType("\u5730\u56fe", normalMapTileLayer, {
		"tips": "\u663e\u793a\u666e\u901a\u5730\u56fe"
	});
	var PerspectiveTileLayer = new TileLayer;
	PerspectiveTileLayer.tileUrls = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
	PerspectiveTileLayer["getTilesUrl"] = function(tileCoord, zoom) {
		var row = tileCoord.x;
		var column = tileCoord.y;
		var scale = TMath.pow(2, 20 - zoom) * 256;
		column = TMath.round((9998336 - scale * column) / scale) - 1;
		url = this.tileUrls[TMath.abs(row + column) % this.tileUrls[Tlength]] + this.map.currentCity + "/" + this.map.cityCode + "/3/" + "lv" + (21 - zoom) + "/" + row + "," + column + "." + "jpg";
		return url
	};
	var BMAP_PERSPECTIVE_MAP = new MapType("\u4e09\u7ef4", PerspectiveTileLayer, {
		"tips": "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
		"minZoom": 15,
		"maxZoom": 20,
		"textColor": "white",
		"projection": new PerspectiveProjection
	});
	BMAP_PERSPECTIVE_MAP.getZoomUnits = function(zoom) {
		return TMath.pow(2, 20 - zoom)
	};
	BMAP_PERSPECTIVE_MAP.getCityName = function(cname) {
		if (!cname) return "";
		var cns = MapConfig.cityNames;
		for (var cn in cns) if (cname.search(cn) > -1) return cns[cn].pinyin;
		return ""
	};
	BMAP_PERSPECTIVE_MAP.getCityCode = function(city) {
		return {
			"bj": 2,
			"gz": 1,
			"sz": 14,
			"sh": 4
		}[city]
	};
	var satelliteTileLayer = new TileLayer({
		baseLayer: true
	});
	satelliteTileLayer["getTilesUrl"] = function(tileCoord, zoom) {
		var row = tileCoord.x;
		var column = tileCoord.y;
		var url = TILE_BASE_URLS[TMath.abs(row + column) % TILE_BASE_URLS[Tlength]] + "u=x=" + row + ";y=" + column + ";z=" + zoom + ";v=009;type=sate&fm=46";
		return url.replace(/-(\d+)/gi, "M$1")
	};
	var BMAP_SATELLITE_MAP = new MapType("\u536b\u661f", satelliteTileLayer, {
		"tips": "\u663e\u793a\u536b\u661f\u5f71\u50cf",
		"minZoom": 1,
		"maxZoom": 19,
		"textColor": "white"
	});
	var streetLayer = new TileLayer({
		"transparentPng": true
	});
	streetLayer["getTilesUrl"] = function(tileCoord, zoom) {
		var row = tileCoord.x;
		var column = tileCoord.y;
		var udt = "20131220";
		var styles = "sl";
		var url = TILE_ONLINE_URLS[TMath.abs(row + column) % TILE_ONLINE_URLS[Tlength]] + "?qt=tile&x=" + (row + "").replace(/-/gi, "M") + "&y=" + (column + "").replace(/-/gi, "M") + "&z=" + zoom + "&styles=" + styles + (baidu.browser.ie == 6 ? "&color_dep=32&colors=50" : "") + "&udt=" + udt;
		return url.replace(/-(\d+)/gi, "M$1")
	};
	var BMAP_HYBRID_MAP = new MapType("\u6df7\u5408", [satelliteTileLayer, streetLayer], {
		"tips": "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
		"labelText": "\u8def\u7f51",
		"minZoom": 1,
		"maxZoom": 19,
		"textColor": "white"
	});
	var BMAP_POI_TYPE_NORMAL = 0,
		BMAP_POI_TYPE_BUSSTOP = 1,
		BMAP_POI_TYPE_BUSLINE = 2,
		BMAP_POI_TYPE_SUBSTOP = 3,
		BMAP_POI_TYPE_SUBLINE = 4;
	var ROUTE_TYPE_DEFAULT = 0;
	var ROUTE_TYPE_TRANSIT = 1;
	var APIPack = {};
	window.APIPack = APIPack;

	function BaseSearch(loc, opts) {
		baidu.lang.Class.call(this);
		this._loc = {};
		this.setLocation(loc);
		opts = opts || {};
		opts.renderOptions = opts["renderOptions"] || {};
		this._opts = {
			renderOptions: {
				panel: opts.renderOptions["panel"] || null,
				map: opts.renderOptions["map"] || null,
				autoViewport: opts.renderOptions["autoViewport"] || true,
				selectFirstResult: opts.renderOptions["selectFirstResult"],
				highlightMode: opts.renderOptions["highlightMode"],
				enableDragging: opts.renderOptions["enableDragging"] || false
			},
			onSearchComplete: opts["onSearchComplete"] ||
			function() {},
			onMarkersSet: opts["onMarkersSet"] ||
			function() {},
			onInfoHtmlSet: opts["onInfoHtmlSet"] ||
			function() {},
			onResultsHtmlSet: opts["onResultsHtmlSet"] ||
			function() {},
			onGetBusListComplete: opts["onGetBusListComplete"] ||
			function() {},
			onGetBusLineComplete: opts["onGetBusLineComplete"] ||
			function() {},
			onBusListHtmlSet: opts["onBusListHtmlSet"] ||
			function() {},
			onBusLineHtmlSet: opts["onBusLineHtmlSet"] ||
			function() {},
			onPolylinesSet: opts["onPolylinesSet"] ||
			function() {},
			reqFrom: opts["reqFrom"] || ""
		};
		if (typeof opts != "undefined" && typeof opts["renderOptions"] != "undefined" && typeof opts["renderOptions"]["autoViewport"] != "undefined") this._opts.renderOptions.autoViewport = opts["renderOptions"]["autoViewport"];
		else this._opts.renderOptions.autoViewport = true;
		this._opts.renderOptions.panel = baidu.G(this._opts.renderOptions.panel)
	}
	baidu.inherits(BaseSearch, baidu.lang.Class);
	baidu[Textend](BaseSearch[Tprototype], {
		"getResults": function() {
			if (!this._isMultiKey) return this._results;
			else return this._arrResults
		},
		"enableAutoViewport": function() {
			this._opts.renderOptions.autoViewport = true
		},
		"disableAutoViewport": function() {
			this._opts.renderOptions.autoViewport = false
		},
		setLocation: function(loc) {
			if (!loc) return;
			this._loc.src = loc
		},
		setSearchCompleteCallback: function(cbk) {
			this._opts.onSearchComplete = cbk ||
			function() {}
		},
		"setMarkersSetCallback": function(cbk) {
			this._opts.onMarkersSet = cbk ||
			function() {}
		},
		"setPolylinesSetCallback": function(cbk) {
			this._opts.onPolylinesSet = cbk ||
			function() {}
		},
		"setInfoHtmlSetCallback": function(cbk) {
			this._opts.onInfoHtmlSet = cbk ||
			function() {}
		},
		"setResultsHtmlSetCallback": function(cbk) {
			this._opts.onResultsHtmlSet = cbk ||
			function() {}
		},
		getStatus: function() {
			return this._status
		}
	});
	var SearchRequestMgr = {
		REQ_BASE_URL: "http://api.map.baidu.com/",
		request: function(cbk, params, userData, path, disableLog) {
			var timeStamp = (TMath.random() * 1E5).toFixed(0);
			BMap["_rd"]["_cbk" + timeStamp] = function(json) {
				userData = userData || {};
				cbk && cbk(json, userData);
				delete BMap["_rd"]["_cbk" + timeStamp]
			};
			path = path || "";
			var reqParam;
			if (userData && userData.useEncodeURI) reqParam = jsonToQuery(params, encodeURI);
			else reqParam = jsonToQuery(params, encodeURIComponent);
			var me = this,
				url = me.REQ_BASE_URL + path + "?" + reqParam + "&ie=utf-8&oue=1&fromproduct=jsapi";
			if (!disableLog) url += "&res=api";
			url += "&callback=BMap._rd._cbk" + timeStamp;
			DataMgr.request(url)
		}
	};
	window.SearchRequestMgr = SearchRequestMgr;
	BMap["_rd"] = {};
	var SUtil = {};
	window.SUtil = SUtil;
	SUtil.removeHtml = function(s) {
		return s.replace(/<\/?b>/g, "")
	};
	SUtil.parseGeoExtReg1 = function(s) {
		return s.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
	};
	SUtil.parseGeoExtReg2 = function(s, factor) {
		var _re = new TRegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + factor + "}", "ig");
		return s.replace(_re, "$1")
	};
	var BMAP_STATUS_SUCCESS = 0,
		BMAP_STATUS_CITY_LIST = 1,
		BMAP_STATUS_UNKNOWN_LOCATION = 2,
		BMAP_STATUS_UNKNOWN_ROUTE = 3,
		BMAP_STATUS_INVALID_KEY = 4,
		BMAP_STATUS_INVALID_REQUEST = 5,
		BMAP_STATUS_PERMISSION_DENIED = 6,
		BMAP_STATUS_SERVICE_UNAVAILABLE = 7,
		BMAP_STATUS_TIMEOUT = 8;
	var BMAP_ROUTE_TYPE_WALKING = 2,
		BMAP_ROUTE_TYPE_DRIVING = 3;
	var BMAP_ROUTE_STATUS_NORMAL = 0,
		BMAP_ROUTE_STATUS_EMPTY = 1,
		BMAP_ROUTE_STATUS_ADDRESS = 2;
	var QUERY_TYPE_CURRENT_CITY = "cur";
	var QUERY_TYPE_CENTER = "cen";
	var QUERY_TYPE_POI_SEARCH = "s";
	var QUERY_TYPE_POI_SEARCH_CON = "con";
	var QUERY_TYPE_SEARCH_INBOUNDS = "bd";
	var QUERY_TYPE_SEARCH_NEARBY = "nb";
	var QUERY_TYPE_TRANSIT = "bt";
	var QUERY_TYPE_DRIVING = "nav";
	var QUERY_TYPE_WALKING = "walk";
	var QUERY_TYPE_GEOCODER = "gc";
	var QUERY_TYPE_REVERSE_GEOCODER = "rgc";
	var QUERY_TYPE_LOCALCITY = "dec";
	var QUERY_TYPE_TRANSIT_SINGLE = "bse";
	var QUERY_TYPE_DRIVING_SINGLE = "nse";
	var QUERY_TYPE_BUSLIST = "bl";
	var QUERY_TYPE_BUSLINE = "bsl";
	var QUERY_TYPE_SEARCH_INBOUNDS_MULTIKEY = "bda";
	var QUERY_TYPE_SEARCH_MULTIKEY = "sa";
	var QUERY_TYPE_SEARCH_NEARBY_MULTIKEY = "nba";
	var QUERY_TYPE_DARG = "drag";
	var QUERY_TYPE_EXT = "ext";
	var RETURN_TYPE_CURRENT_CITY = 2;
	var RETURN_TYPE_CENTER = 4;
	var RETURN_TYPE_CITY_LIST = 7;
	var RETURN_TYPE_POI_SEARCH = 11;
	var RETURN_TYPE_SEARCH_NEARBY = 12;
	var RETURN_TYPE_TRANSIT = 14;
	var RETURN_TYPE_BUSLIST = 15;
	var RETURN_TYPE_BUSLINE = 18;
	var RETURN_TYPE_DRIVING = 20;
	var RETURN_TYPE_SEARCH_INBOUNDS = 21;
	var RETURN_TYPE_ROUTE_ADDRESS = 23;
	var RETURN_TYPE_SPECIAL_REGION = 26;
	var RETURN_TYPE_NODATA_REGION = 28;
	var RETURN_TYPE_WALKING = 31;
	var RETURN_TYPE_GEOCODER = 35;
	var RETURN_TYPE_REVERSE_GEOCODER = 44;
	var RETURN_TYPE_SEARCH_INBOUNDS_MULTIKEY = 45;
	var RETURN_TYPE_SEARCH_MULTIKEY = 46;
	var RETURN_TYPE_SEARCH_NEARBY_MULTIKEY = 47;
	var LOC_TYPE_UNKNOWN = -1;
	var LOC_TYPE_MAP = 0;
	var LOC_TYPE_POINT = 1;
	var LOC_TYPE_STRING = 2;
	var LOC_TYPE_NUMBER = 3;
	var MAP_URL = "http://map.baidu.com/";
	var API_URL = "http://api.map.baidu.com/";
	BMap["I"] = window["Instance"] = baidu.lang.instance;
	var LocalSearch = function(loc, opts) {
			BaseSearch.call(this, loc, opts);
			opts = opts || {};
			opts["renderOptions"] = opts["renderOptions"] || {};
			this.setPageCapacity(opts["pageCapacity"]);
			if (typeof opts["renderOptions"]["selectFirstResult"] != "undefined" && !opts["renderOptions"]["selectFirstResult"]) this.disableFirstResultSelection();
			else this.enableFirstResultSelection();
			this._overlays = [];
			this._arrPois = [];
			this._curIndex = -1;
			this._queryList = [];
			var me = this;
			ModuleMgr.load("local", function() {
				me._check()
			}, true)
		};
	baidu.inherits(LocalSearch, BaseSearch, "LocalSearch");
	LocalSearch.DEFAULT_PAGE_CAPACITY = 10;
	LocalSearch.MIN_PAGE_CAPACITY = 1;
	LocalSearch.MAX_PAGE_CAPACITY = 100;
	LocalSearch.DEFAULT_RADIUS = 2E3;
	LocalSearch.MAX_RADIUS = 1E5;
	baidu[Textend](LocalSearch[Tprototype], {
		search: function(keyword, options) {
			this._queryList.push({
				method: "search",
				arguments: [keyword, options]
			})
		},
		searchInBounds: function(keyword, bounds, options) {
			this._queryList.push({
				method: "searchInBounds",
				arguments: [keyword, bounds, options]
			})
		},
		searchNearby: function(keyword, center, radius, options) {
			this._queryList.push({
				method: "searchNearby",
				arguments: [keyword, center, radius, options]
			})
		},
		clearResults: function() {
			delete this._json;
			delete this._status;
			delete this._results;
			delete this._ud;
			this._curIndex = -1;
			this._setStatus();
			if (this._opts.renderOptions.panel) this._opts.renderOptions.panel.innerHTML = ""
		},
		gotoPage: function() {},
		enableFirstResultSelection: function() {
			this._opts.renderOptions.selectFirstResult = true
		},
		disableFirstResultSelection: function() {
			this._opts.renderOptions.selectFirstResult = false
		},
		setPageCapacity: function(cap) {
			if (typeof cap == "number" && !isNaN(cap)) this._opts.pageCapacity = cap < 1 ? LocalSearch.DEFAULT_PAGE_CAPACITY : cap > LocalSearch.MAX_PAGE_CAPACITY ? LocalSearch.DEFAULT_PAGE_CAPACITY : cap;
			else this._opts.pageCapacity = LocalSearch.DEFAULT_PAGE_CAPACITY
		},
		getPageCapacity: function() {
			return this._opts.pageCapacity
		},
		toString: function() {
			return "LocalSearch"
		}
	});
	var LocalSearchP = LocalSearch[Tprototype];
	exportSymbol(LocalSearchP, {
		"clearResults": LocalSearchP.clearResults,
		"setPageCapacity": LocalSearchP.setPageCapacity,
		"getPageCapacity": LocalSearchP.getPageCapacity,
		"gotoPage": LocalSearchP.gotoPage,
		"searchNearby": LocalSearchP.searchNearby,
		"searchInBounds": LocalSearchP.searchInBounds,
		"search": LocalSearchP.search,
		"enableFirstResultSelection": LocalSearchP.enableFirstResultSelection,
		"disableFirstResultSelection": LocalSearchP.disableFirstResultSelection
	});
	var BaseRoute = function(loc, opts) {
			BaseSearch.call(this, loc, opts)
		};
	baidu.inherits(BaseRoute, BaseSearch, "BaseRoute");
	baidu[Textend](BaseRoute[Tprototype], {
		clearResults: function() {}
	});
	var BMAP_TRANSIT_POLICY_LEAST_TIME = 0,
		BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 2,
		BMAP_TRANSIT_POLICY_LEAST_WALKING = 3,
		BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 4;
	var BMAP_LINE_TYPE_BUS = 0,
		BMAP_LINE_TYPE_SUBWAY = 1,
		BMAP_LINE_TYPE_FERRY = 2;

	function TransitRoute(loc, opts) {
		BaseRoute.call(this, loc, opts);
		opts = opts || {};
		this.setPolicy(opts["policy"]);
		this.setPageCapacity(opts["pageCapacity"]);
		this.QUERY_TYPE = QUERY_TYPE_TRANSIT;
		this.RETURN_TYPE = RETURN_TYPE_TRANSIT;
		this.ROUTE_TYPE = ROUTE_TYPE_TRANSIT;
		this._overlays = [];
		this._curIndex = -1;
		this._queryList = [];
		var me = this;
		ModuleMgr.load("route", function() {
			me._asyncSearch()
		})
	}
	TransitRoute.MAX_PAGE_CAPACITY = 100;
	TransitRoute.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
	baidu.inherits(TransitRoute, BaseRoute, "TransitRoute");
	baidu[Textend](TransitRoute[Tprototype], {
		setPolicy: function(policy) {
			if (policy >= BMAP_TRANSIT_POLICY_LEAST_TIME && policy <= BMAP_TRANSIT_POLICY_AVOID_SUBWAYS) this._opts.policy = policy;
			else this._opts.policy = BMAP_TRANSIT_POLICY_LEAST_TIME
		},
		_internalSearch: function(sn, en) {
			this._queryList.push({
				method: "_internalSearch",
				arguments: [sn, en]
			})
		},
		search: function(start, end) {
			this._queryList.push({
				method: "search",
				arguments: [start, end]
			})
		},
		setPageCapacity: function(cp) {
			if (typeof cp == "string") {
				cp = TparseInt(cp);
				if (isNaN(cp)) {
					this._opts.pageCapacity = TransitRoute.MAX_PAGE_CAPACITY;
					return
				}
			}
			if (typeof cp != "number") {
				this._opts.pageCapacity = TransitRoute.MAX_PAGE_CAPACITY;
				return
			}
			if (cp >= 1 && cp <= TransitRoute.MAX_PAGE_CAPACITY) this._opts.pageCapacity = TMath.round(cp);
			else this._opts.pageCapacity = TransitRoute.MAX_PAGE_CAPACITY
		},
		toString: function() {
			return "TransitRoute"
		},
		_shortTitle: function(title) {
			return title.replace(/\(.*\)/, "")
		}
	});
	var BMAP_HIGHLIGHT_STEP = 1,
		BMAP_HIGHLIGHT_ROUTE = 2;
	var DWRoute = function(location, opts) {
			BaseRoute.call(this, location, opts);
			this._overlays = [];
			this._curIndex = -1;
			this._queryList = [];
			var me = this;
			var renderOptions = this._opts.renderOptions;
			if (renderOptions.highlightMode != BMAP_HIGHLIGHT_STEP && renderOptions.highlightMode != BMAP_HIGHLIGHT_ROUTE) renderOptions.highlightMode = BMAP_HIGHLIGHT_STEP;
			this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
			ModuleMgr.load("route", function() {
				me._asyncSearch()
			});
			if (this.init_d) this.init_d()
		};
	DWRoute.ROAD_TYPE = ["", "\u73af\u5c9b", "\u65e0\u5c5e\u6027\u9053\u8def", "\u4e3b\u8def", "\u9ad8\u901f\u8fde\u63a5\u8def", "\u4ea4\u53c9\u70b9\u5185\u8def\u6bb5", "\u8fde\u63a5\u9053\u8def", "\u505c\u8f66\u573a\u5185\u90e8\u9053\u8def", "\u670d\u52a1\u533a\u5185\u90e8\u9053\u8def", "\u6865", "\u6b65\u884c\u8857", "\u8f85\u8def", "\u531d\u9053", "\u5168\u5c01\u95ed\u9053\u8def", "\u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df", "POI\u8fde\u63a5\u8def", "\u96a7\u9053", "\u6b65\u884c\u9053", "\u516c\u4ea4\u4e13\u7528\u9053", "\u63d0\u524d\u53f3\u8f6c\u9053"];
	baidu.inherits(DWRoute, BaseRoute, "DWRoute");
	baidu[Textend](DWRoute[Tprototype], {
		search: function(start, end, opts) {
			this._queryList.push({
				method: "search",
				arguments: [start, end, opts]
			})
		}
	});
	var BMAP_DRIVING_POLICY_LEAST_TIME = 0,
		BMAP_DRIVING_POLICY_LEAST_DISTANCE = 1,
		BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2;

	function DrivingRoute(location, opts) {
		DWRoute.call(this, location, opts);
		opts = opts || {};
		this.setPolicy(opts["policy"]);
		this.QUERY_TYPE = QUERY_TYPE_DRIVING;
		this.RETURN_TYPE = RETURN_TYPE_DRIVING;
		this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
	}
	baidu.inherits(DrivingRoute, DWRoute, "DrivingRoute");
	baidu[Textend](DrivingRoute[Tprototype], {
		setPolicy: function(policy) {
			if (policy >= BMAP_DRIVING_POLICY_LEAST_TIME && policy <= BMAP_DRIVING_POLICY_AVOID_HIGHWAYS) this._opts.policy = policy;
			else this._opts.policy = BMAP_DRIVING_POLICY_LEAST_TIME
		}
	});

	function WalkingRoute(location, opts) {
		DWRoute.call(this, location, opts);
		this.QUERY_TYPE = QUERY_TYPE_WALKING;
		this.RETURN_TYPE = RETURN_TYPE_WALKING;
		this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
		this._enableDragging = false
	}
	baidu.inherits(WalkingRoute, DWRoute, "WalkingRoute");

	function Geocoder(opts) {
		this._opts = {};
		baidu[Textend](this._opts, opts);
		this._queryList = [];
		var me = this;
		ModuleMgr.load("othersearch", function() {
			me._asyncSearch()
		})
	}
	baidu.inherits(Geocoder, baidu.lang.Class, "Geocoder");
	baidu[Textend](Geocoder[Tprototype], {
		getPoint: function(address, callback, city) {
			this._queryList.push({
				method: "getPoint",
				arguments: [address, callback, city]
			})
		},
		getLocation: function(point, callback, opts) {
			this._queryList.push({
				method: "getLocation",
				arguments: [point, callback, opts]
			})
		},
		"toString": function() {
			return "Geocoder"
		}
	});
	var GeocoderP = Geocoder[Tprototype];
	exportSymbol(GeocoderP, {
		"getPoint": GeocoderP.getPoint,
		"getLocation": GeocoderP.getLocation
	});

	function Geolocation(opts) {
		this._opts = {};
		baidu[Textend](this._opts, opts);
		this._queryList = [];
		var me = this;
		ModuleMgr.load("othersearch", function() {
			me._asyncSearch()
		})
	}
	baidu[Textend](Geolocation[Tprototype], {
		getCurrentPosition: function(callback, opts) {
			this._queryList.push({
				method: "getCurrentPosition",
				arguments: [callback, opts]
			})
		},
		getStatus: function() {
			return this._status
		}
	});
	var GeolocationP = Geolocation[Tprototype];
	exportSymbol(GeolocationP, {
		"getCurrentPosition": GeolocationP.getCurrentPosition,
		"getStatus": GeolocationP.getStatus
	});

	function LocalCity(opts) {
		opts = opts || {};
		opts.renderOptions = opts["renderOptions"] || {};
		this._opts = {
			renderOptions: {
				map: opts.renderOptions["map"] || null
			}
		};
		this._queryList = [];
		var me = this;
		ModuleMgr.load("othersearch", function() {
			me._asyncSearch()
		})
	}
	baidu.inherits(LocalCity, baidu.lang.Class, "LocalCity");
	baidu[Textend](LocalCity[Tprototype], {
		"get": function(callback) {
			this._queryList.push({
				method: "get",
				arguments: [callback]
			})
		},
		"toString": function() {
			return "LocalCity"
		}
	});

	function Boundary() {
		this._queryList = [];
		var me = this;
		ModuleMgr.load("othersearch", function() {
			me._asyncSearch()
		})
	}
	baidu.inherits(Boundary, baidu.lang.Class, "Boundary");
	baidu[Textend](Boundary[Tprototype], {
		get: function(name, cbk) {
			this._queryList.push({
				method: "get",
				arguments: [name, cbk]
			})
		},
		toString: function() {
			return "Boundary"
		}
	});

	function BusLineSearch(loc, opts) {
		BaseSearch.call(this, loc, opts);
		this.QUERY_TYPE_BUSLIST = QUERY_TYPE_BUSLIST;
		this.RETURN_TYPE_BUSLIST = RETURN_TYPE_BUSLIST;
		this.QUERY_TYPE_BUSLINE = QUERY_TYPE_BUSLINE;
		this.RETURN_TYPE_BUSLINE = RETURN_TYPE_BUSLINE;
		this._queryList = [];
		var me = this;
		ModuleMgr.load("buslinesearch", function() {
			me._asyncSearch()
		})
	}
	BusLineSearch._iconOpen = MapConfig.imgPath + "iw_plus.gif";
	BusLineSearch._iconClose = MapConfig.imgPath + "iw_minus.gif";
	BusLineSearch._stopUrl = MapConfig.imgPath + "stop_icon.png";
	baidu.inherits(BusLineSearch, BaseSearch);
	baidu[Textend](BusLineSearch[Tprototype], {
		"getBusList": function(lineName) {
			this._queryList.push({
				method: "getBusList",
				arguments: [lineName]
			})
		},
		"getBusLine": function(busListItem) {
			this._queryList.push({
				method: "getBusLine",
				arguments: [busListItem]
			})
		},
		"setGetBusListCompleteCallback": function(cbk) {
			this._opts.onGetBusListComplete = cbk ||
			function() {}
		},
		"setGetBusLineCompleteCallback": function(cbk) {
			this._opts.onGetBusLineComplete = cbk ||
			function() {}
		},
		"setBusListHtmlSetCallback": function(cbk) {
			this._opts.onBusListHtmlSet = cbk ||
			function() {}
		},
		"setBusLineHtmlSetCallback": function(cbk) {
			this._opts.onBusLineHtmlSet = cbk ||
			function() {}
		},
		"setPolylinesSetCallback": function(cbk) {
			this._opts.onPolylinesSet = cbk ||
			function() {}
		}
	});

	function Autocomplete(opts) {
		BaseSearch.call(this, opts);
		opts = opts || {};
		this._options = {
			input: opts["input"] || null,
			baseDom: opts["baseDom"] || null,
			types: opts["types"] || [],
			onSearchComplete: opts["onSearchComplete"] ||
			function() {}
		};
		this._loc.src = opts["location"] || "\u5168\u56fd";
		this._word = "";
		this._show = false;
		this._suggestion = null;
		this._inputValue = "";
		this._initialize();
		_addStat(5011);
		var me = this;
		ModuleMgr.load("autocomplete", function() {
			me._asyncSearch()
		})
	}
	baidu.inherits(Autocomplete, BaseSearch, "Autocomplete");
	baidu[Textend](Autocomplete[Tprototype], {
		_initialize: function() {},
		show: function() {
			this._show = true
		},
		hide: function() {
			this._show = false
		},
		setTypes: function(types) {
			this._options.types = types
		},
		setLocation: function(location) {
			this._loc.src = location
		},
		search: function(word) {
			this._word = word
		},
		setInputValue: function(value) {
			this._inputValue = value
		}
	});
	var MapPoiClick;

	function makeGlobal(name, value) {
		BMap[name] = value
	}
	makeGlobal("Map", Map);
	makeGlobal("Hotspot", Hotspot);
	makeGlobal("MapType", MapType);
	makeGlobal("Point", Point);
	makeGlobal("Pixel", Pixel);
	makeGlobal("Size", Size);
	makeGlobal("Bounds", Bounds);
	makeGlobal("TileLayer", TileLayer);
	makeGlobal("Projection", Projection);
	makeGlobal("MercatorProjection", MercatorProjection);
	makeGlobal("PerspectiveProjection", PerspectiveProjection);
	makeGlobal("Copyright", Copyright);
	makeGlobal("Overlay", Overlay);
	makeGlobal("Label", Label);
	makeGlobal("Marker", Marker);
	makeGlobal("Icon", Icon);
	makeGlobal("Polyline", Polyline);
	makeGlobal("Polygon", Polygon);
	makeGlobal("InfoWindow", InfoWindow);
	makeGlobal("Circle", Circle);
	makeGlobal("Control", Control);
	makeGlobal("NavigationControl", NavigationControl);
	makeGlobal("GeolocationControl", GeolocationControl);
	makeGlobal("OverviewMapControl", OverviewMapControl);
	makeGlobal("CopyrightControl", CopyrightControl);
	makeGlobal("ScaleControl", ScaleControl);
	makeGlobal("MapTypeControl", MapTypeControl);
	makeGlobal("TrafficLayer", TrafficLayer);
	makeGlobal("ContextMenu", ContextMenu);
	makeGlobal("MenuItem", MenuItem);
	makeGlobal("LocalSearch", LocalSearch);
	makeGlobal("TransitRoute", TransitRoute);
	makeGlobal("DrivingRoute", DrivingRoute);
	makeGlobal("WalkingRoute", WalkingRoute);
	makeGlobal("Autocomplete", Autocomplete);
	makeGlobal("Geocoder", Geocoder);
	makeGlobal("LocalCity", LocalCity);
	makeGlobal("Geolocation", Geolocation);
	makeGlobal("BusLineSearch", BusLineSearch);
	makeGlobal("Boundary", Boundary);

	function exportProperty(object, publicName, symbol) {
		object[publicName] = symbol
	}
	function exportSymbol(object, opts) {
		for (var property in opts) object[property] = opts[property]
	}
	exportSymbol(window, {
		"BMap": BMap,
		"_jsload": _jsload,
		"BMAP_API_VERSION": BMAP_API_VERSION
	});
	var MapP = Map[Tprototype];
	exportSymbol(MapP, {
		"getBounds": MapP.getBounds,
		"getCenter": MapP.getCenter,
		"getMapType": MapP.getMapType,
		"getSize": MapP.getSize,
		"setSize": MapP.setSize,
		"getViewport": MapP.getViewport,
		"getZoom": MapP.getZoom,
		"centerAndZoom": MapP.centerAndZoom,
		"panTo": MapP.panTo,
		"panBy": MapP.panBy,
		"setCenter": MapP.setCenter,
		"setCurrentCity": MapP.setCurrentCity,
		"setMapType": MapP.setMapType,
		"setViewport": MapP.setViewport,
		"setZoom": MapP.setZoom,
		"highResolutionEnabled": MapP.highResolutionEnabled,
		"zoomTo": MapP.zoomTo,
		"zoomIn": MapP.zoomIn,
		"zoomOut": MapP.zoomOut,
		"addHotspot": MapP.addHotspot,
		"removeHotspot": MapP.removeHotspot,
		"clearHotspots": MapP.clearHotspots,
		"checkResize": MapP.checkResize,
		"addControl": MapP.addControl,
		"removeControl": MapP.removeControl,
		"getContainer": MapP.getContainer,
		"addContextMenu": MapP.addContextMenu,
		"removeContextMenu": MapP.removeContextMenu,
		"addOverlay": MapP.addOverlay,
		"removeOverlay": MapP.removeOverlay,
		"clearOverlays": MapP.clearOverlays,
		"openInfoWindow": MapP.openInfoWindow,
		"closeInfoWindow": MapP.closeInfoWindow,
		"pointToOverlayPixel": MapP.pointToOverlayPixel,
		"overlayPixelToPoint": MapP.overlayPixelToPoint,
		"getInfoWindow": MapP.getInfoWindow,
		"getOverlays": MapP.getOverlays,
		"getPanes": function() {
			return {
				"floatPane": this._panes.floatPane,
				"markerMouseTarget": this._panes.markerMouseTarget,
				"floatShadow": this._panes.floatShadow,
				"labelPane": this._panes.labelPane,
				"markerPane": this._panes.markerPane,
				"markerShadow": this._panes.markerShadow,
				"mapPane": this._panes.mapPane
			}
		},
		"addTileLayer": MapP.addTileLayer,
		"removeTileLayer": MapP.removeTileLayer,
		"pixelToPoint": MapP.pixelToPoint,
		"pointToPixel": MapP.pointToPixel
	});
	var MapTypeP = MapType[Tprototype];
	exportSymbol(MapTypeP, {
		"getTileLayer": MapTypeP.getTileLayer,
		"getMinZoom": MapTypeP.getMinZoom,
		"getMaxZoom": MapTypeP.getMaxZoom,
		"getProjection": MapTypeP.getProjection,
		"getTextColor": MapTypeP.getTextColor,
		"getTips": MapTypeP.getTips
	});
	exportSymbol(window, {
		"BMAP_NORMAL_MAP": BMAP_NORMAL_MAP,
		"BMAP_PERSPECTIVE_MAP": BMAP_PERSPECTIVE_MAP,
		"BMAP_SATELLITE_MAP": BMAP_SATELLITE_MAP,
		"BMAP_HYBRID_MAP": BMAP_HYBRID_MAP
	});
	var MercatorProjectionP = MercatorProjection[Tprototype];
	exportSymbol(MercatorProjectionP, {
		"lngLatToPoint": MercatorProjectionP.lngLatToPoint,
		"pointToLngLat": MercatorProjectionP.pointToLngLat
	});
	var PerspectiveProjectionP = PerspectiveProjection[Tprototype];
	exportSymbol(PerspectiveProjectionP, {
		"lngLatToPoint": PerspectiveProjectionP.lngLatToPoint,
		"pointToLngLat": PerspectiveProjectionP.pointToLngLat
	});
	var BoundsP = Bounds[Tprototype];
	exportSymbol(BoundsP, {
		"equals": BoundsP.equals,
		"containsPoint": BoundsP.containsPoint,
		"containsBounds": BoundsP.containsBounds,
		"intersects": BoundsP.intersects,
		"extend": BoundsP[Textend],
		"getCenter": BoundsP.getCenter,
		"isEmpty": BoundsP.isEmpty,
		"getSouthWest": BoundsP.getSouthWest,
		"getNorthEast": BoundsP.getNorthEast,
		"toSpan": BoundsP.toSpan
	});
	var OverlayP = Overlay[Tprototype];
	exportSymbol(OverlayP, {
		"isVisible": OverlayP.isVisible,
		"show": OverlayP.show,
		"hide": OverlayP.hide
	});
	exportProperty(Overlay, "getZIndex", Overlay.getZIndex);
	var OverlayInternalP = OverlayInternal[Tprototype];
	exportSymbol(OverlayInternalP, {
		"openInfoWindow": OverlayInternalP.openInfoWindow,
		"closeInfoWindow": OverlayInternalP.closeInfoWindow,
		"enableMassClear": OverlayInternalP.enableMassClear,
		"disableMassClear": OverlayInternalP.disableMassClear,
		"show": OverlayInternalP.show,
		"hide": OverlayInternalP.hide,
		"getMap": OverlayInternalP.getMap
	});
	var MarkerP = Marker[Tprototype];
	exportSymbol(MarkerP, {
		"setIcon": MarkerP.setIcon,
		"getIcon": MarkerP.getIcon,
		"setPosition": MarkerP.setPosition,
		"getPosition": MarkerP.getPosition,
		"setOffset": MarkerP.setOffset,
		"getOffset": MarkerP.getOffset,
		"getLabel": MarkerP.getLabel,
		"setLabel": MarkerP.setLabel,
		"setTitle": MarkerP.setTitle,
		"setTop": MarkerP.setTop,
		"enableDragging": MarkerP.enableDragging,
		"disableDragging": MarkerP.disableDragging,
		"setZIndex": MarkerP.setZIndex,
		"getMap": MarkerP.getMap,
		"addContextMenu": MarkerP.addContextMenu,
		"removeContextMenu": MarkerP.removeContextMenu,
		"setAnimation": MarkerP.setAnimation,
		"setShadow": MarkerP.setShadow,
		"hide": MarkerP.hide
	});
	exportSymbol(window, {
		"BMAP_ANIMATION_DROP": BMAP_ANIMATION_DROP,
		"BMAP_ANIMATION_BOUNCE": BMAP_ANIMATION_BOUNCE
	});
	var LabelP = Label[Tprototype];
	exportSymbol(LabelP, {
		"setStyle": LabelP.setStyle,
		"setStyles": LabelP.setStyles,
		"setContent": LabelP.setContent,
		"setPosition": LabelP.setPosition,
		"getPosition": LabelP.getPosition,
		"setOffset": LabelP.setOffset,
		"getOffset": LabelP.getOffset,
		"setTitle": LabelP.setTitle,
		"setZIndex": LabelP.setZIndex,
		"getMap": LabelP.getMap
	});
	var IconP = Icon[Tprototype];
	exportSymbol(IconP, {
		"setImageUrl": IconP.setImageUrl,
		"setSize": IconP.setSize,
		"setAnchor": IconP.setAnchor,
		"setImageOffset": IconP.setImageOffset,
		"setImageSize": IconP.setImageSize,
		"setInfoWindowAnchor": IconP.setInfoWindowAnchor,
		"setPrintImageUrl": IconP.setPrintImageUrl
	});
	var InfoWindowP = InfoWindow[Tprototype];
	exportSymbol(InfoWindowP, {
		"redraw": InfoWindowP.redraw,
		"setTitle": InfoWindowP.setTitle,
		"setContent": InfoWindowP.setContent,
		"getContent": InfoWindowP.getContent,
		"getPosition": InfoWindowP.getPosition,
		"enableMaximize": InfoWindowP.enableMaximize,
		"disableMaximize": InfoWindowP.disableMaximize,
		"isOpen": InfoWindowP.isOpen,
		"setMaxContent": InfoWindowP.setMaxContent,
		"maximize": InfoWindowP.maximize,
		"enableAutoPan": InfoWindowP.enableAutoPan
	});
	var GraphP = Graph[Tprototype];
	exportSymbol(GraphP, {
		"getPath": GraphP.getPath,
		"setPath": GraphP.setPath,
		"setPositionAt": GraphP.setPositionAt,
		"getStrokeColor": GraphP.getStrokeColor,
		"setStrokeWeight": GraphP.setStrokeWeight,
		"getStrokeWeight": GraphP.getStrokeWeight,
		"setStrokeOpacity": GraphP.setStrokeOpacity,
		"getStrokeOpacity": GraphP.getStrokeOpacity,
		"setFillOpacity": GraphP.setFillOpacity,
		"getFillOpacity": GraphP.getFillOpacity,
		"setStrokeStyle": GraphP.setStrokeStyle,
		"getStrokeStyle": GraphP.getStrokeStyle,
		"getFillColor": GraphP.getFillColor,
		"getBounds": GraphP.getBounds,
		"enableEditing": GraphP.enableEditing,
		"disableEditing": GraphP.disableEditing
	});
	var CircleP = Circle[Tprototype];
	exportSymbol(CircleP, {
		"setCenter": CircleP.setCenter,
		"getCenter": CircleP.getCenter,
		"getRadius": CircleP.getRadius,
		"setRadius": CircleP.setRadius
	});
	var PolygonP = Polygon[Tprototype];
	exportSymbol(PolygonP, {
		"getPath": PolygonP.getPath,
		"setPath": PolygonP.setPath,
		"setPositionAt": PolygonP.setPositionAt
	});
	var HotspotP = Hotspot[Tprototype];
	exportSymbol(HotspotP, {
		"getPosition": HotspotP.getPosition,
		"setPosition": HotspotP.setPosition,
		"getText": HotspotP.getText,
		"setText": HotspotP.setText
	});
	exportProperty(Point[Tprototype], "equals", Point[Tprototype].equals);
	exportProperty(Pixel[Tprototype], "equals", Pixel[Tprototype].equals);
	exportProperty(Size[Tprototype], "equals", Size[Tprototype].equals);
	exportSymbol(window, {
		"BMAP_ANCHOR_TOP_LEFT": BMAP_ANCHOR_TOP_LEFT,
		"BMAP_ANCHOR_TOP_RIGHT": BMAP_ANCHOR_TOP_RIGHT,
		"BMAP_ANCHOR_BOTTOM_LEFT": BMAP_ANCHOR_BOTTOM_LEFT,
		"BMAP_ANCHOR_BOTTOM_RIGHT": BMAP_ANCHOR_BOTTOM_RIGHT
	});
	var ControlP = Control[Tprototype];
	exportSymbol(ControlP, {
		"setAnchor": ControlP.setAnchor,
		"getAnchor": ControlP.getAnchor,
		"setOffset": ControlP.setOffset,
		"getOffset": ControlP.getOffset,
		"show": ControlP.show,
		"hide": ControlP.hide,
		"isVisible": ControlP.isVisible,
		"toString": ControlP.toString
	});
	var NavigationControlP = NavigationControl[Tprototype];
	exportSymbol(NavigationControlP, {
		"getType": NavigationControlP.getType,
		"setType": NavigationControlP.setType
	});
	exportSymbol(window, {
		"BMAP_NAVIGATION_CONTROL_LARGE": BMAP_NAVIGATION_CONTROL_LARGE,
		"BMAP_NAVIGATION_CONTROL_SMALL": BMAP_NAVIGATION_CONTROL_SMALL,
		"BMAP_NAVIGATION_CONTROL_PAN": BMAP_NAVIGATION_CONTROL_PAN,
		"BMAP_NAVIGATION_CONTROL_ZOOM": BMAP_NAVIGATION_CONTROL_ZOOM
	});
	var OverviewMapControlP = OverviewMapControl[Tprototype];
	exportSymbol(OverviewMapControlP, {
		"changeView": OverviewMapControlP.changeView,
		"setSize": OverviewMapControlP.setSize,
		"getSize": OverviewMapControlP.getSize
	});
	var ScaleControlP = ScaleControl[Tprototype];
	exportSymbol(ScaleControlP, {
		"getUnit": ScaleControlP.getUnit,
		"setUnit": ScaleControlP.setUnit
	});
	exportSymbol(window, {
		"BMAP_UNIT_METRIC": BMAP_UNIT_METRIC,
		"BMAP_UNIT_IMPERIAL": BMAP_UNIT_IMPERIAL
	});
	var CopyrightControlP = CopyrightControl[Tprototype];
	exportSymbol(CopyrightControlP, {
		"addCopyright": CopyrightControlP.addCopyright,
		"removeCopyright": CopyrightControlP.removeCopyright,
		"getCopyright": CopyrightControlP.getCopyright,
		"getCopyrightCollection": CopyrightControlP.getCopyrightCollection
	});
	exportSymbol(window, {
		"BMAP_MAPTYPE_CONTROL_HORIZONTAL": BMAP_MAPTYPE_CONTROL_HORIZONTAL,
		"BMAP_MAPTYPE_CONTROL_DROPDOWN": BMAP_MAPTYPE_CONTROL_DROPDOWN
	});
	var TileLayerP = TileLayer[Tprototype];
	exportSymbol(TileLayerP, {
		"getMapType": TileLayerP.getMapType,
		"getCopyright": TileLayerP.getCopyright,
		"isTransparentPng": TileLayerP.isTransparentPng
	});
	var ContextMenuP = ContextMenu[Tprototype];
	exportSymbol(ContextMenuP, {
		"addItem": ContextMenuP.addItem,
		"addSeparator": ContextMenuP.addSeparator,
		"removeSeparator": ContextMenuP.removeSeparator
	});
	var MenuItemP = MenuItem[Tprototype];
	exportSymbol(MenuItemP, {
		"setText": MenuItemP.setText
	});
	var BaseSearchP = BaseSearch[Tprototype];
	exportSymbol(BaseSearchP, {
		"getStatus": BaseSearchP.getStatus,
		"setSearchCompleteCallback": BaseSearchP.setSearchCompleteCallback,
		"getPageCapacity": BaseSearchP.getPageCapacity,
		"setPageCapacity": BaseSearchP.setPageCapacity,
		"setLocation": BaseSearchP.setLocation,
		"disableFirstResultSelection": BaseSearchP.disableFirstResultSelection,
		"enableFirstResultSelection": BaseSearchP.enableFirstResultSelection,
		"gotoPage": BaseSearchP.gotoPage,
		"searchNearby": BaseSearchP.searchNearby,
		"searchInBounds": BaseSearchP.searchInBounds,
		"search": BaseSearchP.search
	});
	exportSymbol(window, {
		"BMAP_STATUS_SUCCESS": BMAP_STATUS_SUCCESS,
		"BMAP_STATUS_CITY_LIST": BMAP_STATUS_CITY_LIST,
		"BMAP_STATUS_UNKNOWN_LOCATION": BMAP_STATUS_UNKNOWN_LOCATION,
		"BMAP_STATUS_UNKNOWN_ROUTE": BMAP_STATUS_UNKNOWN_ROUTE,
		"BMAP_STATUS_INVALID_KEY": BMAP_STATUS_INVALID_KEY,
		"BMAP_STATUS_INVALID_REQUEST": BMAP_STATUS_INVALID_REQUEST,
		"BMAP_STATUS_PERMISSION_DENIED": BMAP_STATUS_PERMISSION_DENIED,
		"BMAP_STATUS_SERVICE_UNAVAILABLE": BMAP_STATUS_SERVICE_UNAVAILABLE,
		"BMAP_STATUS_TIMEOUT": BMAP_STATUS_TIMEOUT
	});
	exportSymbol(window, {
		"BMAP_POI_TYPE_NORMAL": BMAP_POI_TYPE_NORMAL,
		"BMAP_POI_TYPE_BUSSTOP": BMAP_POI_TYPE_BUSSTOP,
		"BMAP_POI_TYPE_BUSLINE": BMAP_POI_TYPE_BUSLINE,
		"BMAP_POI_TYPE_SUBSTOP": BMAP_POI_TYPE_SUBSTOP,
		"BMAP_POI_TYPE_SUBLINE": BMAP_POI_TYPE_SUBLINE
	});
	exportSymbol(window, {
		"BMAP_TRANSIT_POLICY_LEAST_TIME": BMAP_TRANSIT_POLICY_LEAST_TIME,
		"BMAP_TRANSIT_POLICY_LEAST_TRANSFER": BMAP_TRANSIT_POLICY_LEAST_TRANSFER,
		"BMAP_TRANSIT_POLICY_LEAST_WALKING": BMAP_TRANSIT_POLICY_LEAST_WALKING,
		"BMAP_TRANSIT_POLICY_AVOID_SUBWAYS": BMAP_TRANSIT_POLICY_AVOID_SUBWAYS,
		"BMAP_LINE_TYPE_BUS": BMAP_LINE_TYPE_BUS,
		"BMAP_LINE_TYPE_SUBWAY": BMAP_LINE_TYPE_SUBWAY,
		"BMAP_LINE_TYPE_FERRY": BMAP_LINE_TYPE_FERRY
	});
	var BaseRouteP = BaseRoute[Tprototype];
	exportSymbol(BaseRouteP, {
		"clearResults": BaseRouteP.clearResults
	});
	var TransitRouteP = TransitRoute[Tprototype];
	exportSymbol(TransitRouteP, {
		"setPolicy": TransitRouteP.setPolicy,
		"toString": TransitRouteP.toString,
		"setPageCapacity": TransitRouteP.setPageCapacity
	});
	exportSymbol(window, {
		"BMAP_DRIVING_POLICY_LEAST_TIME": BMAP_DRIVING_POLICY_LEAST_TIME,
		"BMAP_DRIVING_POLICY_LEAST_DISTANCE": BMAP_DRIVING_POLICY_LEAST_DISTANCE,
		"BMAP_DRIVING_POLICY_AVOID_HIGHWAYS": BMAP_DRIVING_POLICY_AVOID_HIGHWAYS
	});
	exportSymbol(window, {
		"BMAP_HIGHLIGHT_STEP": BMAP_HIGHLIGHT_STEP,
		"BMAP_HIGHLIGHT_ROUTE": BMAP_HIGHLIGHT_ROUTE
	});
	exportSymbol(window, {
		"BMAP_ROUTE_TYPE_DRIVING": BMAP_ROUTE_TYPE_DRIVING,
		"BMAP_ROUTE_TYPE_WALKING": BMAP_ROUTE_TYPE_WALKING
	});
	exportSymbol(window, {
		"BMAP_ROUTE_STATUS_NORMAL": BMAP_ROUTE_STATUS_NORMAL,
		"BMAP_ROUTE_STATUS_EMPTY": BMAP_ROUTE_STATUS_EMPTY,
		"BMAP_ROUTE_STATUS_ADDRESS": BMAP_ROUTE_STATUS_ADDRESS
	});
	var DrivingRouteP = DrivingRoute[Tprototype];
	exportSymbol(DrivingRouteP, {
		"setPolicy": DrivingRouteP.setPolicy
	});
	var AutocompleteP = Autocomplete[Tprototype];
	exportSymbol(AutocompleteP, {
		"show": AutocompleteP.show,
		"hide": AutocompleteP.hide,
		"setTypes": AutocompleteP.setTypes,
		"setLocation": AutocompleteP.setLocation,
		"search": AutocompleteP.search,
		"setInputValue": AutocompleteP.setInputValue
	});
	var BoundaryP = Boundary[Tprototype];
	exportSymbol(BoundaryP, {
		"get": BoundaryP.get
	});
	BMap.apiLoad();
})()