/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
define(function (require, exports, module) {
	var Event = function(eventNames) {
		var Listener = function(name) {
			return {
				name:name,
				callbacks:[]
			};
		};
		var listeners = [];
		for (var i = 0; i < eventNames.length; i++) {
			listeners.push(Listener(eventNames[i]));
		}
		this.listeners = listeners;
		this.indexes = eventNames;
		var fire = function(listener, id, eventData, self) {
			var event = {};
			listener.callbacks[id](self, event);
			return true;
		};
		this.listen = function(type, callback) {
			var index = this.indexes.indexOf(type);
			if (index === -1) {
				return false;
			}
			var listener = this.listeners[index];
			listener.callbacks.push(callback);
			return listener.callbacks.length-1;
		};
		this.trigger = function(type, self, eventData) {
			var index = this.indexes.indexOf(type);
			if (index > -1) {
				var listener = this.listeners[index];
				var length = listener.callbacks.length;
				if(length) {
					for (var i = 0; i < length; i++) {
						fire(listener, i, eventData, self);
					}
					return true;
				}
			}
			return false;
		};
		this.remove = function(type, id) {
			var index = this.indexes.indexOf(type);
			var listener = this.listeners[index];
			listener.callbacks.splice(id, 1);
		};
		return this;
	};
	exports.Event = Event;
});

// See Also: https://docs.google.com/document/d/1Btt-T8jCU9nYhZJncbU3E6rsFV2TDWPlGFQ9XAv4c8g