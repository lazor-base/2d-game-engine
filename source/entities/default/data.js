/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
// entity data definitions. Use create({attributes}) to add data to an entity.
// these values will load the defaults for the master copy. When a copy of the master is made for in game use, is when saved values should be loaded.
define(["entities/default/characterData","entities/default/tileData"], function(character,tile) {
	"use strict";
	var x, y, health, tileX, tileY, width, height, id, jumpRate, jumpForce, fallRate, moveSpeed = 0;
	var isFlipped, jumping, falling, walking, dashing, climbing, interacting, dragging = false;
	var facing = "right";
	var lastDirection = "right";
	var animationName = "idle";
	var collideAgainst = ["*"];
	var entityType = ["entity"];
	return function(defaultAttributesName,attributes) {
		if(defaultAttributesName === "character") {
			var defaultAttributes = character;
		} else if(defaultAttributesName === "tile") {
			var defaultAttributes = tile;
		}
		var object = {
			x: attributes.x || defaultAttributes.x || 0,
			y: attributes.y || defaultAttributes.y || 0,
			tileX: attributes.tileX || defaultAttributes.tileX || 0,
			tileY: attributes.tileY || defaultAttributes.tileY || 0,
			width: attributes.width || defaultAttributes.width || 0,
			height: attributes.height || defaultAttributes.height || 0,
			id: attributes.id || defaultAttributes.id || 0,
			health: attributes.health || defaultAttributes.health || 0,
			weight:attributes.weight || defaultAttributes.weight || 0,
			spriteSheetName:attributes.spriteSheetName || defaultAttributes.spriteSheetName || "default", // spritesheet to use for character.
			oldFrameName: "", // name of frameset to look through
			oldFrameIndex: 0, // index of old fram in "oldFrameName" que.
			uniqueId: attributes.uniqueId, // unique id set only when spawning object.
			frameData: null // reference to current frame.
		};
		for(var attr in defaultAttributes) {
			if(attributes[attr]) {
				object[attr] = attributes[attr];
			} else {
				object[attr] = defaultAttributes[attr];
			}
		}
		return object;
	};
});