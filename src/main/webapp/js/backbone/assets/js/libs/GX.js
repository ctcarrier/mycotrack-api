/*
 * GX - Full-Featured Javascript Animations Framework v1.2 - by Riccardo Degni (RD)
 *
 * Copyright (c) 2009 Riccardo Degni (http://www.riccardodegni.net/)
 * MIT-Style License
 */

// Global Methods	
var Fns = {
	Create: function(props) {
		var props = props || {};
		var fn = function() {
			return (this.init) ? this.init.apply(this, arguments) : this;	
		};
		
		for(var prop in props) fn.prototype[prop] = props[prop];
		return fn;
	},
	
	Bind: function(fn, bind, args) {
		return function() {
			fn.apply(bind, args || []);
		};
	},
	
	Contains: function(obj, el) {
		for(var i=0; i<obj.length; i++)
			if(obj[i] == el) return true;
		return false;
	},
	
	Camelize: function(str) {
		str = str.replace(/-\D/g, function(match){
			return match.charAt(1).toUpperCase();
		});
		return str;
	},
	
	Now: function() {
		return new Date().getTime();
	},
	
	Extend: function(base, more, merge) {
		if(typeof base != 'object' && typeof base != 'function') base = {};
		for(var p in more)
			if(!base[p] || merge) base[p] = more[p];
		return base;
	},
	
	Each: function(obj, fn) {
		for(var i = 0; i < obj.length; i++) fn.apply(obj, [obj[i], i, obj]);
	}
};

// The GX Wrapper
var GX = Fns.Create({
	options: {
		duration: 1000, 
		fps: 50,
		defaultUnit: 'px',
		queue: 'queue',
		easing: 'Linear',
		delay: false
	},
	
	init: function(element, opts) {
		this.element = element;
		this.options = Fns.Extend(opts, GX.prototype.options);
		return this;
	},
	
	anime: function(styles, duration, easing, callback) {
		if(!this.isRunning) {
			this.isRunning = true;
			this.styles = styles;
			this.duration = (duration) ? ((typeof duration == 'string') ? GX.durations[Fns.Camelize(duration)] : duration) : this.options.duration;
			this.easing = easing || this.options.easing;
			this.callback = ((typeof callback == 'object') ? callback.complete : ((typeof callback == 'function') ? callback : false));
			this.startFn = (typeof callback == 'object') ? callback.start : false;
			if(!this.chain) this.chain = [];
			this.interval  = Math.round(1000/this.options.fps);
			
			this.starts = {};
			this.ends = {};
			this.changes = {};
			this.sizes = {};
			this.units = {};
			
			// compute values
			for(var style in this.styles) {
				var camelStyle = Fns.Camelize(style), camelStyle = (GX.complex.hasOwnProperty(camelStyle)) ? GX.complex[camelStyle] : camelStyle, jStyle = this.styles[style], jUnit = this.options.defaultUnit || 'px', jChanges = false;
				var cssStyle = this.element.css(camelStyle), startStyle = parseFloat((cssStyle == 'auto') ? 0 : cssStyle);
				if((Fns.Contains(GX.axis, style)) && this.element.css('position') == 'static') this.element.css('position', 'relative');
				
				if(GX.Color.isColor(style)) { // '#ff00ff' | '#f0f' | [255, 0, 255]
					startStyle = GX.Color.cssToRgb(this.element.css(camelStyle));
					jStyle = GX.Color.cssToRgb(this.styles[style]);
					jChanges = [jStyle[0] - startStyle[0], jStyle[1] - startStyle[1], jStyle[2] - startStyle[2]];
				}
				else if(typeof jStyle == 'string') {
					if(Fns.Contains(GX.specialValues, jStyle)) { // 'show' | 'hide | 'toggle'
						if(!this.element.data('gxSave_' + camelStyle)) this.element.data('gxSave_' + camelStyle, cssStyle);
						var to = parseFloat(this.element.data('gxSave_' + camelStyle)) || 1;
						switch(jStyle) {
							case 'show': this.styles[style] = jStyle = to; break;
							case 'hide': this.styles[style] = jStyle = 0; break;
							case 'toggle': this.styles[style] = jStyle = (parseFloat(Math.round(startStyle)) != 0) ? 0 : to; break;
						}
					}
					else { // '200px' | '200' | '+=200px' | '+=200'
						var fullStyle = GX.Parse.style(jStyle, jUnit);
						if(typeof fullStyle == 'object') {	// '200px' | '400em' | ...
							this.styles[style] = jStyle = parseFloat(fullStyle[0]);
							jUnit = fullStyle[1] || 'px';
							// relative animations
							if(fullStyle[2]) // '+=' or '-='
								this.styles[style] = jStyle = (fullStyle[2] == '+=') ? (jStyle + startStyle) : (startStyle - jStyle);
						}
						else if(typeof fullStyle == 'string') { // '400' | '20' | ...
							this.styles[style] = jStyle = parseFloat(fullStyle);
						}
					}
				}
				
				this.starts[style] = startStyle;
				this.ends[style] = jStyle;
				this.changes[style] = jChanges || this.ends[style] - this.starts[style];
				this.units[style] = jUnit;
			}
			
			if(this.startFn) this.startFn.apply(this, [this.element, this]);
			this.time = Fns.Now();
			this.timer = setInterval(Fns.Bind(this.increase, this), this.interval);
		}
		else {
			if(this.options.queue == 'queue') {
				var boundAnime = Fns.Bind(this.anime, this, arguments);
				this.chain.push(boundAnime);
			}
			else if(this.options.queue == 'cancel') {
				this.clearTimer();
				this.anime.apply(this, arguments);
			}
		}
		return this;
	},
	
	increase: function() {
		var elapsedTime = this.elapsedTime = Fns.Now() - this.time;
		if (elapsedTime < this.duration) {
			for(var style in this.styles) {
				var easing = this.easing.split(':'), easingType = (easing[1]) ? easing[1] : 'InOut', ease = GX.Transitions[easing[0]][easingType];
				var starts = this.starts[style], changes = this.changes[style];
				if(typeof starts != 'object') {
					this.sizes[style] = ease(elapsedTime, starts, changes, this.duration);
					if(this.sizes[style] < 0 && !Fns.Contains(GX.axis, style)) this.sizes[style] = 0; // prevent css warnings
				}
				else { // colors
					this.sizes[style] = [ease(elapsedTime, starts[0], changes[0], this.duration),
										 ease(elapsedTime, starts[1], changes[1], this.duration),
										 ease(elapsedTime, starts[2], changes[2], this.duration)];
				}
			}
		}
		else {
			this.clearTimer();
			for(var style in this.styles) {
				this.sizes[style] = (GX.Color.isColor(style)) ? this.ends[style] : this.styles[style];
			}
		}
		this.setStyles();
	},
	
	parseStyle: function(style, sz) {
		var camelStyle = Fns.Camelize(style);
		// ? color value : opacity or integers
		(GX.Color.isColor(camelStyle)) ? this.element.css(camelStyle, 'rgb(' + parseInt(sz[0]) + ',' + parseInt(sz[1]) + ',' + parseInt(sz[2]) + ')') : (this.element.css(camelStyle, (camelStyle == 'opacity') ? sz : sz + this.units[style]));
	},
	
	clearTimer: function() {
		this.isRunning = false;
		this.timer = clearInterval(this.timer);
	},
	
	pause: function() {
		this.clearTimer();
	},
	
	resume: function() {
		this.isRunning = true;
		this.time = Fns.Now() - this.elapsedTime;
		this.timer = setInterval(Fns.Bind(this.increase, this), this.interval);
	},
	
	setStyles: function() {
		for(var style in this.styles) {
			this.parseStyle(style, this.sizes[style]);
		}
		if(!this.isRunning ) { 
			if(this.callback && typeof this.callback == 'function') this.callback.apply(this, [this.element, this]);
			var delay = this.options.delay, chain = this.chain, ring = function() { chain.shift()(); };
			if(chain.length != 0) (!delay) ? ring() : setTimeout(ring, delay);
		}
	}
});

GX.Parse = {
	style: function(s, un) {
		var fullStyle = [], value, unit, relative, relatives = ['+=', '-='];
		
		Fns.Each(relatives, function(rel, i) {
			if(s.indexOf(rel) != -1) { 
				relative = rel;
				s = s.replace(rel, '');
			}		 
		});
		
		Fns.Each(GX.units, function(u, i){
			if(s.indexOf(u) != -1) { 
				value = parseFloat(s);
				unit = u;
				fullStyle.push(value, unit);
			}
		});
		
		if(!unit) {
			value = parseFloat(s);
			unit = un;
			fullStyle.push(value, unit);
		}
		
		if(relative) fullStyle.push(relative);
		return (fullStyle.length > 0) ? fullStyle : s;
	}
};

// Global Methods for dealing with colors
GX.Color = {
	decToHex: function(dec) {
		return dec.toString(16);
	},
	
	hexToDec: function(hex) {
		return parseInt(hex, 16);
	},
	
	rgbToHex: function(r, g, b) {
		var dth = GX.Color.decToHex;
		return [dth(r), dth(g), dth(b)];
	},
	
	hexToRgb: function(h, e, x) {
		var htd = GX.Color.hexToDec;
		return [htd(h), htd(e), htd(x)];
	},
	
	cssToRgb: function(color) {
		if(GX.Color.customColors[color]) return GX.Color.customColors[color]; // 'red' | 'blue' | ...
		
		if(typeof color == 'object' && color.length == 3) return color; // [255, 0, 255]
		
		if(color.indexOf('rgb') <= -1) { // #ff00ff | #f0f
			var color = (color.length > 4) ? color : GX.Color.shortToFull(color);
			return GX.Color.hexToRgb(color.substring(1, 3), color.substring(3, 5), color.substring(5, 7));
		}
		
		var col = color.substring(4, color.length-1).split(','), nCol = [];
		Fns.Each(col, function(c) {
			nCol.push(parseInt(c));
		});
		return nCol;
	},
	
	shortToFull: function(color) {
		var r = color.charAt(1), g = color.charAt(2), b = color.charAt(3);
		return '#' + r + r + g + g + b + b;
	},
	
	isColor: function(style) {
		return (style.toLowerCase().indexOf('color') != -1);
	},
	
	customColors: {
		red: [255, 0, 0],
		green: [0, 255, 0],
		blue: [0, 0, 255],
		white: [255, 255, 255],
		black: [0, 0, 0]
	}
};

// Internal GXs
GX.linear = function(t, b, c, d) { return c*t/d + b; };
Fns.Extend(GX, {
	Transitions: { Linear: {'In': GX.linear, 'Out': GX.linear, 'InOut': GX.linear} }, // Base Transition
	units: ['px', 'em', '%', 'in', 'pt', 'ex'],
	durations: {'verySlow': 4000, 'slow': 2000, 'normal': 1000, 'fast': 500, 'veryFast': 250},
	specialValues: ['show', 'hide', 'toggle'],
	complex: {'borderWidth': 'borderTopWidth', 'borderColor': 'borderTopColor', 'margin': 'marginTop', 'padding': 'paddingTop'},
	axis: ['top', 'left'],
	unlink: function(obj) {
		var end = {};
		switch (typeof obj) {
			case 'object': for(var p in obj) end[p] = GX.unlink(obj[p]);
			break;
			default: return obj;
		}
		return end;
	}
});

// jQuery related fns
(function($) {
jQuery.fn.extend({	
	setGX: function(el) {
		if(!el.data('gx')) el.data('gx', new GX().init(el, {}));
		return el;
	},			 
	
	gxInit: function(opts) {
		var set = $(this), jq = this;
		Fns.Each(set, function(el) {
			var el = jq.setGX($(el));
			Fns.Extend(el.data('gx').options, opts, true);	  
		});
		return this;
	},
	
	gx: function(styles, duration, easing, callback) {
		var set = $(this), jq = this;
		Fns.Each(set, function(el) {
			var el = jq.setGX($(el)), gx = el.data('gx');
			(typeof styles == 'string') ? gx[styles]() : gx.anime(GX.unlink(styles), duration, easing, callback);		  
		});
		return this;
	}
});
})(jQuery);