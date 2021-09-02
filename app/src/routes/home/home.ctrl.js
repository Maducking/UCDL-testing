"use strict";
const { json } = require("express");
const db_user_conn = require("../../../bin/config/db_conn");
// 컨트롤러 부분 모듈화
const root = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

const test = (req, res) => {
  //클라이언트에서 넘어온 값을 저장
  var name = req.body.name;
  var telNum = req.body.telNum;
  var birth = req.body.birth;
  var params = [name, telNum, birth];

  var sql =
    "SELECT * FROM testing_mbr WHERE name_mbr = ? AND tel_mbr = ? AND birth_mbr = ?";

  db_user_conn.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("관리자에게 문의 바랍니다." + err);
    }
    if (!rows[0]) {           //undefined는 거짓?????
      res.send('<script type="text/javascript">alert("잘못입력하셨습니다.");</script>');
      console.log("No matching user");
    } else {
      res.render("home/test", { user: rows });
    }
  });
};

module.exports = {
  root,
  login,
  test,
};
