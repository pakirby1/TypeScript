// First run: node HttpServer.js
// Usage: http://localhost:8080/test.js, 
// Usage: http://localhost:8080/Alhambra1024.png
var util = require("util"),

    http = require("http"),

    url = require("url"),

    path = require("path"),

    fs = require("fs");

    

http.createServer(function(request, response) {

    var uri = path.parse(request.url).base;
    console.log(url)

    var filename = path.join(process.cwd(), uri);
    console.log(filename)

    fs.access(filename, fs.constants.F_OK, function(err) {

    	if(err) {

    		response.writeHead(404, {"Content-Type": "text/plain"});

    		response.write("404 Not Found\n");

    		response.end();

    		return;

    	}

    	

    	fs.readFile(filename, "binary", function(err, file) {

    		if(err) {

    			response.writeHead(500, {"Content-Type": "text/plain"});

    			response.write(err + "\n");

    			response.end();

    			return;

    		}

    		

    		response.writeHead(200);

    		response.write(file, "binary");

    		response.end();

    	});

    });

}).listen(8080);

util.log("Server running at http://localhost:8080/");
