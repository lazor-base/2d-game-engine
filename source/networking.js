exports.localServer = function(callback) {
	var portfinder = require('portfinder');
	var urlparser = require('url');
	var http = require('http');
	var path = require('path');
	var fs = require('fs');
	portfinder.getPort(function (err, port) {
		http.createServer(function (request, response) {

			console.log('request starting...');

			var filePath = "." + request.url;
			if(filePath == './') {
				filePath = './index.html';
			} else {
				console.log(request.url);
			}
			var extname = path.extname(filePath);
			var contentType = 'text/html';
			if(extname === ".js") {
				contentType = 'text/javascript';
			} else if(extname === ".css") {
				contentType = 'text/css';
			}

			// documentation at : http://nodejs.org/api/http.html#http_request_url
			var requestedfile = urlparser.parse(request.url).pathname;
			console.log("requested URL path name : " + requestedfile);

			fs.exists(filePath, function (exists) {
				console.log("looking up : " + filePath);
				if(exists) {

					fs.readFile(filePath, function (error, content) {
						if(error) {
							console.log("error" + error);
							response.writeHead(500);
							response.end();
						} else {
							response.writeHead(200, {
								'Content-Type': 'text/html'
							});
							response.end(content, 'utf-8');
						}
					});
				} else {
					response.writeHead(404);
					response.end();
				}
			});
		}).listen(port);
		callback(port);
	});
};