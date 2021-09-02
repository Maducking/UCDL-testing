"use strict";

// 모듈
const express = require('express');
const app = express();
// const bodyParser =require('body-parser');

//engine
app.set('views', './src/views');          //화면 view를 관리하는 폴더
app.set('view engine', 'ejs');            // ejs engine 세팅


//미들웨어 등록(use)
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const home = require("./src/routes/home");      //home router 세팅
app.use("/", home);                             // "/"루트경로로 들어오면 변수 "home"의 경로로 자동으로 들어간다.

app.use(express.static(__dirname + '/src/public'));
// app.use(express.static(__dirname + '/src/js/home'));


// db_config.connect(conn);
// var db_config = require(__dirname + '/config/database.js');
// var conn = db_config.init();

module.exports = app;


//폴더 구조 중요 view, public
