"use strict";

// 모듈
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// 변수 home의 경로를 따라 최초로 login.ejs를 읽는다.
// 컨트롤러 분리(MVC설계)
router.get('/', ctrl.root)
router.get('/login', ctrl.login)

router.post('/test', (req, res) => {
    // var name = req.body.name;
    // var tel = req.body.tel;
    // var birth = req.body.birth;
    // var sql = 'SELECT * FROM testing_mbr WHERE name_mbr=?';
    res.render('home/test.ejs');
})

router.get('/pbt', (req, res) => {
    console.log(__dirname);
    res.sendFile( __dirname + '/exam/11.txt');
})

module.exports = router;    // 내보내기(미들웨어)