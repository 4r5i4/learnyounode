var mymodule = require('./jugglingasync');
var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
]

// console.log('URLS', urls);

mymodule(urls, function(err, result, url){
    if(err) console.error('something went wrong')
    // console.log('URL:[', url, ']: ', datapack);
    // console.log('\n\n');
    // console.log('\n\n***********************************');
    
    /**
     * I think the forEach was screwing me over because it is async 
     */
    // for (let index = 0; index < result.length; index++) {
    //     const element = result[index];
    //     // console.log('index[', index, ']: ', element); 
    //     console.log(element); 
    // }

    /**
     * after trying forEach() again, i have realized that forEach was not the issue
     */
    result.forEach(element=>{
        console.log(element)
    })
    // console.log('in here');
    
    // console.log(datapack);
    
    // datapack.forEach(data=>{
    //     // console.log('@@@@@@@@@@@@@@@@@@@@@@@');
    //     // console.log('printing the result');
    //     // console.log(data);
    //     // console.log('\n\n');
    //     // console.log('@@@@@@@@@@@@@@@@@@@@@@@');
        
        
        
    // })
});

