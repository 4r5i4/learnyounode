var fs = require('fs');
var path = require('path');
var list = [];
module.exports = function (directory, delimiter, callback) {
    delimiter = '.' + delimiter; 
    // console.log(directory);
    // console.log(delimiter);
    // console.log(list);
    // console.log();
    
    fs.readdir(directory, (err, files)=> {
        if(err){
            return callback(err);
        }
 
        /**
         * Function is a predicate, 
         * to test each element of the array. 
         * Return true to keep the element, false otherwise
         */
        files = files.filter(file=>{
            return path.extname(file) === delimiter; 
        })
      
      
        callback(null, files);
    });
}
