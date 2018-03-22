var http = require('http');
const URL = process.argv[2];
http.get(URL, function(response){
    response.setEncoding('utf8')
    response.on("data", function(data){
        console.log(data);
        
    })
})


//official solution

/**
 * 
   var http = require('http')

   http.get(process.argv[2], function (response) {
     response.setEncoding('utf8')
     response.on('data', console.log)
     response.on('error', console.error)
   }).on('error', console.error)

 */
