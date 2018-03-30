var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath,  function(err, data){
    if(err) return console.log('something wrong happened when reading the file');
    console.log(data.toString().split('\n').length - 1);
})