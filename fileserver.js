var fs = require('fs')
var http = require('http')
module.exports = function(filelocation, port, callback){
    
    var stream = fs.createReadStream(filelocation);

    var server = http.createServer(function(request,response){
        callback(null, stream.pipe(response));
    }).listen(port);

    

    
}


/**
 * this is the official solution:
 * 
 * 
 *     
 * 
    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
 * 
 * 
 */