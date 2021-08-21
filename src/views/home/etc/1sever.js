var express = require('express');
var app = express();

app.set("views", "./views");

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/1pre.html');
})

app.get('/root', (req, res)=>{
    res.send('루트가 있어요');
})

app.get('/exam', (req, res)=>{
    // res.sendFile(__dirname +'/exam/11.txt');
    res.sendFile(__dirname + '/exam/11.txt');
    // res.render('1pre.html');
})

app.listen(3000, ()=>{
    console.log('ajax');
    console.log('경로명:' + __dirname);

})