var http = require('http');
var pipedata = "";

const fs = require('fs');
const path = require('path');
const fifopath = path.resolve('/tmp/shairport-sync-metadata');
const fifo = fs.createReadStream(fifopath);
fifo.on('data', data => {
		pipedata = data
});



http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!\n');
	res.write("Being accessed at: " + req.url + "\n");
	res.write(pipedata);
	res.end();
}).listen(80);

