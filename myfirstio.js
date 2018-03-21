var fs = require('fs');
var i = 1;
var buf = fs.readFileSync(process.argv[2], 'utf8');
// console.log('BUFFER::', buf);

var str = buf.toString();
// console.log('var str::', str);

var splitted = str.split('\n');
// splitted.forEach( e => {
//     console.log('line [',i ,']-----------------------------------');
//     console.log(e);
//     console.log('-----------------------------------\n\n');
//     i++;
    
    
// })
// console.log('SPLITTED', splitted);

/**
 * I think this has to be here to compensate for the 
 * new line at the end ! not sure.
 * I'm sure
 */
console.log(splitted.length - 1);

