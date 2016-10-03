var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var arrayline = string.split('\n');

console.log(arrayline.length - 1);