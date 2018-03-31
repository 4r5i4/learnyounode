var mymodule = require('./timeserver');

mymodule(process.argv[2], function(err, server){
    if(err) console.error(err, ' :: something went wrong with usetimeserver.js');
    // console.log('CONNECTION INFO::\n\n', server);
    
});