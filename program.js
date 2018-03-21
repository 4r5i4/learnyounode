// console.log("HELLO WORLD");
// console.log(process.argv);
let sum = 0;
let newArray = process.argv.slice(2);

newArray.forEach(element => {
    try {
        sum += parseInt(element);        
    } catch (error) {
        console.error('ERROR::', error);
    }
    
});

console.log(sum);

