var net = require('net')
module.exports = function(port, callback){
    /**
     * 
     * taken from https://github.com/workshopper/learnyounode/blob/master/exercises/time_server/solution/solution.js 
     */
    function zeroFill (i) {
        return (i < 10 ? '0' : '') + i
      }
      
    function now () {
    	const d = new Date()
        return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
       	zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }


	//own solution
    var server = net.createServer((socket)=>{
        // console.log('listening at port ', port);
        socket.write(now() + '\n', function(){
        });
		socket.end();
    }).listen(port);

    server.on('error', (e)=>{
        if(e.code === 'EADDRINUSE'){
            console.log('Address in use, retrying... <not really!! Need to implement a timeout>');
            callback(e, null);
        }
    })

    callback(null, server);
    


    
}