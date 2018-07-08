var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!\n');
	res.write('Being accessed at: ' + req.url);
	res.end();
}).listen(80);