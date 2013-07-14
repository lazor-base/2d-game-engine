/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
// default dataset for tiles
define([], function() {
	"use strict";
	return {
		facing: "right",
		isFlipped: false,
		lastDirection: "right",
		animationName: "idle",
		jumpRate: 0,
		jumpForce: 0,
		fallRate: 0,
		moveSpeed: 0,
		collideAgainst: ["solid"],
		entityType: ["character"],
		// WIP, needs revisit
		storage: null,
		items: null,
		// actions
		jumping: false,
		falling: false,
		walking: false,
		dashing:false,
		climbing: false,
		interacting: false,
		xForces: [], // remember to set these as a new array when constructing.
		yForces: [], // remember to set these as a new array when constructing.
		travelTime: 0,
		dragged: false,
		openedDoor: false,
		onLand: false,
		blockedRight: false,
		blockedLeft: false,
		blockedUp: false,
		blockedDown: false,
		// door teleportation stuffs
		travel: false,
		targetDoorX:0,
		targetDoorY:0,
		targetDoorXSpeed:0,
		targetDoorYSpeed:0,
		targetDoorMap:"main", // if the door is in a different map
		// action stuff
		moving: false,
		onScreen: false,
		coolDown: 0,
		// blockstuff
		blockId: 0,
		blockSide: "left",
		dragging: false
	};
});