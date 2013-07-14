/*global define:true */
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, es5:true, indent:4, maxerr:50, camelcase:false, boss:true, smarttabs:true, white:false */
// default dataset for tiles
define([], function() {
	"use strict";
	return {
		passable:false,
		name:"wall",
		type:"solid",
		destructible:false,
		spriteName:"default",
		oldFrame: {
			animationName: "",
			index: 0
		}
	};
});