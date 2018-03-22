var httpcollect = require('./httpcollect');
const URL = process.argv[2];

httpcollect(URL, function(err, datapack){
    if(err) return console.error('an error has occured')
    console.log(datapack.length);
    console.log(datapack);
});