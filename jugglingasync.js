var http = require('http')
module.exports = function(urls, callback){
    var result = [];
    var count = 0;
    urls.forEach((url, index)=>{
        
        var datapack = ''
        http.get(url, function(res){
            res.setEncoding('utf8')
            res.on('data', data=>{
                datapack += data;
                // console.log('datapack------------------------');
                // console.log(datapack);
                // console.log('end of datapack------------------------');
                
            })
            res.on('error', err=>{
                console.error(err);
            })

            res.on('end', ()=>{
                result[index] = datapack
                count++;
                // console.log(count);
                // console.log('@@@@@@@@index is (', index, ')@@@@@@@@@@@@@@@@result------------------------');
                // console.log(result[index]);
                // console.log('result ending with count <<', count, '>>');
                if(count == 3){
                    callback(null, result, url);
                }
                
                
                // console.log('RESULT', result);
                // console.log('URL:[', url, ']: ', datapack);
                // console.log(datapack);
                // console.log('index::[', index, '] > :', datapack);
                
            })
            // if(count === 3) callback(null, result, url)
        })
    });
}
