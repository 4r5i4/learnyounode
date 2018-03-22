var mymodule = require('./makeitmodular');
var delimiter =  process.argv[3];
var directory =  process.argv[2];

mymodule(directory, delimiter, function(err, list){
    if (err) {
        console.log('error occured');
    }
    list.forEach(file=>{
        console.log(file);   
    })
    
});