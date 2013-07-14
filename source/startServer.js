var networking = require("./networking.js");
var core = require("./core.js");
networking.localServer(function(port) {
	document.getElementById("main").setAttribute("src","http://127.0.0.1:"+port+"/index.html");
	console.log("Running on ","http://127.0.0.1:"+port+"/index.html")
});