var path = require('path');
var fs = require('fs');

module.exports = function(directorio, extension, callback) {
	fs.readdir(directorio, function(error, files) {
		var ficherosFiltrados =  Array();
		if(error){
			return callback(error);
		}
		files.forEach(function(file) {
var ext = '.' + extension;
			if (path.extname(file) == ext) {
				ficherosFiltrados.push(file);
			}
		});



	callback(null,ficherosFiltrados);

});
};  