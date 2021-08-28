"use strict";
const db_user_conn = require("../../../bin/config/db_conn");
// 컨트롤러 부분 모듈화
const root = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

const test = (req, res) => {
    console.log(__dirname);
  var sql = "SELECT * FROM testing_mbr WHERE id = 10";
  db_user_conn.query(sql, function (err, rows, fields) {
    if (err){
        console.log("No matching user" + err);
        // console.log(rows);
    } 
    else{
        console.log(rows);
        // res.send(rows);
        res.render("home/test", { user : rows });

    }
  });
};

module.exports = {
  root,
  login,
  test,
};
