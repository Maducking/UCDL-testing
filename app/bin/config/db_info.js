'use strict';

//db(mysql)가 있을때
// const mysql = require("mysql");
// const _url = require("../../src/routes/home/home.ctrl");

// console.log("DB URL:" + _url.root);

const db_info = {
  // host: "localhost",
  // port: "3306",
  // user: "root",
  // password: "000000",
  // database: "ucdl_test"
  host : "",
  port : "",
  user : "root",
  password : "000000",
  database : "testkb"
};

// 객체로 내보냈을때 받는곳의 변수가  곧 객체이다
module.exports = db_info;
