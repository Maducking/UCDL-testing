"use strict";

// 모듈
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('Views', './views');          //화면 view를 관리하는 폴더

//home router 세팅
const home = require("./routes/home");
app.use("/", home);     //미들웨어 등록(use)
//"/"루트경로로 들어오면 변수 "home"의 경로로 자동으로 들어간다.

// var db_config = require(__dirname + '/config/database.js');
// var conn = db_config.init();

// ejs engine 세팅


// db_config.connect(conn);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('UCDL sever start!');
});
