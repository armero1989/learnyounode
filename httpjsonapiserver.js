var http = require('http');
var url = require('url');
var server = http.createServer(function calback(req, res) {

	var objecturl = url.parse(req.url, true);
	var fecha = new Date(objecturl.query.iso);
	var objectJSON;
	if (req.method === 'GET') {
		if (objecturl.pathname === '/api/parsetime') {

			objectJSON = {
				'hour': fecha.getHours(),
				'minute': fecha.getMinutes(),
				'second': fecha.getSeconds()
			};


		} else if (objecturl.pathname === '/api/unixtime') {

			objectJSON = {
				'unixtime': fecha.getTime()
			};



		} else {
			res.writeHead(404, {
				'Content-Type': 'application/json'
			});
			objectJSON = {
				'error': 'No se ha podido ejecutar'
			};
		}

	} else {
		res.writeHead(405, {
			'Content-Type': 'application/json'
		});
		objectJSON = {
				'error': 'No se ha podido ejecutar'
			};
	}

		res.end(JSON.stringify(objectJSON));


});
server.listen(process.argv[2]);
console.log('Se esta escuchando en el puerto : ' + process.argv[2]);