exports.mainMenu = function(options, style) {

};

var data = {
	gameFolder:"",
	modsFolder:""
};
exports.setGame = function(url) {
	var io = require("./readwrite.js");
	io.save(JSON.stringify(data),"core.json");
};