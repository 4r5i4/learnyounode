var fs = require('fs');

var delimiter =  '.' + process.argv[3];
var directory =  process.argv[2];
var list = [];
fs.readdir(directory, function (err, files){
    if(err) {
        console.log(err)  
    } 
    files.forEach(file => {
        // console.log('file::', file);
        if(file.endsWith(delimiter)) {
            console.log(file);
            
        }
        
    });

});
