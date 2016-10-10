var http = require('http');
var fs= require('fs');
var bl=require('bl');
var fichero= fs.createReadStream(process.argv[3]);
     var server = http.createServer(function calback(req, res) {  

var datos=fichero;
fichero.pipe(bl(function(err,data){
	datos=data;
	res.writeHead(200, {
  'Content-Length': data.length,
  'Content-Type': 'text/plain' });
res.write(datos);
res.end();
	if(err){
		console.log(err);
	}
}));

     });  
     server.listen(process.argv[2]);  
   console.log('Se esta escuchando en el puerto : '+process.argv[2]);
