var http = require('http');
var datapack = '';
module.exports = function(URL, callback){

    http.get(URL, function(res){
        res.setEncoding('utf8');
        res.on('error', function(data){
            console.error(error);
        });

        res.on('data', function(data){ 
            datapack += data;
        });

        res.on('end', function(){
            // console.log('--------------------------');
            // console.log('datapack::', datapack);
            callback(null, datapack);
        });
    })
}