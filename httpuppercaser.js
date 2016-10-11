var http= require('http');
var map = require('through2-map');
  var server = http.createServer(function calback(req, res) { 
    if(req.method==='POST'){
     req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();  
     })).pipe(res); 
 }else {
 	res.end('no se ha mandado en POST');
 }


});
    server.listen(process.argv[2]);  
   console.log('Se esta escuchando en el puerto : '+process.argv[2]);
