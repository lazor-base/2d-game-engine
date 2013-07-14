/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
define(["entities/default/actions", "entities/default/data", "entities/playerAnimations", "toolkits/entity", "utilities"], function(defaultActions, dataBuilder, playerAnimations, etk, utils) {
	return {
		actions: {
			setup: function(self) {
				defaultActions.setup(self);
			},
			teardown: function(self) {
				defaultActions.teardown(self);
			},
			animate: function(self) {
				defaultActions.animate(self);
			},
			move: function(self) {
				defaultActions.move(self);
			},
			jump: function(self) {
				defaultActions.jump(self);
			},
			fall: function(self) {
				defaultActions.fall(self);
			},
			land: function(self) {
				defaultActions.land(self);
			},
			collideleft: function(self) {
				defaultActions.collideleft(self);
			},
			collideright: function(self) {
				defaultActions.collideright(self);
			},
			collidetop: function(self) {
				defaultActions.collidetop(self);
			},
			collidebottom: function(self) {
				defaultActions.collidebottom(self);
			},
			movedoors: function(self) {
				defaultActions.movedoors(self);
			},
			operatedoor: function(self) {
				defaultActions.operatedoor(self);
			},
			climb: function(self) {
				defaultActions.climb(self);
			},
			climbup: function(self) {
				defaultActions.climbup(self);
			},
			climbdown: function(self) {
				defaultActions.climbdown(self);
			},
			parsetileposition: function(self) {
				defaultActions.parsetileposition(self);
			},
			parseaction: function(self) {
				defaultActions.parseaction(self);
			},
			getblockid: function(self) {
				defaultActions.getblockid(self);
			},
			jump: function(self) {
				defaultActions.jump(self);
			},
			drag: function(self) {
				defaultActions.drag(self);
			}
		},
		data: dataBuilder("character",{
			x: 0,
			y: 0,
			tileX: utils.round(0),
			tileY: utils.round(0),
			health: 0,
			width: 0,
			height: 0,
			id: 0,
			facing: "right",
			lastDirection: "right",
			animationName: "idle",
			isFlipped: false,
			jumpRate: -3,
			jumpForce: -3,
			fallRate: 0,
			moveSpeed: 2,
			collideAgainst: ["*"],
			entityType: ["entity"],
			// WIP, needs revisit
			storage: storage.make("default"),
			items: {},
			// actions
			jumping: false,
			falling: false,
			walking: false,
			dashing: false,
			climbing: false,
			interacting: false,
			dragging: false
		}),
		animations: playerAnimations
	};
});