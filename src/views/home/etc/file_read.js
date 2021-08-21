var fs = require('fs');

fs.readdir('../exam', function(err, filelist){
    if(err) throw err;
    console.log(filelist);
    fs.readFile('../exam/11.txt', 'utf-8', function(err, data){
        if (err) throw err;
        console.log(data);
    })
});

// fs.readFile('../exam/11.txt', 'utf-8', function(err, data){
//     console.log(data);
// })