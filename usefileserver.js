var filemodule = require('./fileserver');
var filelocation = process.argv[3];
var port = process.argv[2];


filemodule(filelocation, port, function(err, response){
    // console.log('response is:', response);

});