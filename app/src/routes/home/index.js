"use strict";

// 모듈
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// 변수 home의 경로를 따라 최초로 login.ejs를 읽는다.

// 컨트롤러 분리(MVC설계)
// router.get('/', ctrl.root);
router.get('/', ctrl.root);
router.get('/login', ctrl.login);

router.post('/test', ctrl.test); 

router.get('/pbt', (req, res) => {
    res.sendFile( __dirname + '/exam/11.txt');
});

module.exports = router;    // 내보내기(미들웨어)