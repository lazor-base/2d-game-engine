/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
// default entity actions. meant to be required in master entity classes.
define([], function() {
	"use strict";
	var defaults = ["setup", "teardown", "animate", "move", "jump", "fall", "land", "collideleft", "collideright", "collidetop", "collidebottom", "movedoors", "operatedoor", "climb", "climbup", "climbdown", "parseaction", "jump", "drag"];
	var setup = function(self) {};
	var teardown = function(self) {};
	var animate = function(self) {};
	var move = function(self) {};
	var jump = function(self) {};
	var fall = function(self) {};
	var land = function(self) {};
	var collideleft = function(self) {};
	var collideright = function(self) {};
	var collidetop = function(self) {};
	var collidebottom = function(self) {};
	var movedoors = function(self) {};
	var operatedoor = function(self) {};
	var climb = function(self) {};
	var climbup = function(self) {};
	var climbdown = function(self) {};
	var parsetileposition = function(self) {};
	var parseaction = function(self) {};
	var getblockid = function(self) {};
	var jump = function(self) {};
	var drag = function(self) {};
	return {
		setup: setup,
		teardown: teardown,
		animate: animate,
		move: move,
		jump: jump,
		fall: fall,
		land: land,
		collideleft: collideleft,
		collideright: collideright,
		collidetop: collidetop,
		collidebottom: collidebottom,
		movedoors: movedoors,
		operatedoor: operatedoor,
		climb: climb,
		climbup: climbup,
		climbdown: climbdown,
		parsetileposition: parsetileposition,
		parseaction: parseaction,
		getblockid: getblockid,
		jump: jump,
		drag: drag
	};
});