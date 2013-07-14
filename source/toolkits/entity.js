/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
// Entity toolkit. Meant to provide helper functions to make working with entities more streamlined.
define([], function() {
	"use strict";
	var isFacingDirection = function(entity, direction) {
		if (entity.data.facing.indexOf(direction)) {
			return true;
		}
		return false;
	};
	return {
		isFacingLeft: function(entity) {
			isFacingDirection(entity, "left");
		},
		isFacingRight: function(entity) {
			isFacingDirection(entity, "right");
		},
		isFacingUp: function(entity) {
			isFacingDirection(entity, "up");
		},
		isFacingDown: function(entity) {
			isFacingDirection(entity, "down");
		},
		isDead: function(entity) {
			return entity.data.health < 0;
		}
	};
});