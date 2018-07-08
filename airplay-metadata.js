var http = require('http');

http.createServer(function (req, res) {
	res.write('hello World!');
	res.end();
}).listen(8080);