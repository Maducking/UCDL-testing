'use strict';
const mysql = require("mysql");

const db_info = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "000000",
  database: "ucdl_test",
};

module.exports = {
  db_init: function () {
    return mysql.createConnection(db_info);
  },

  db_connect: function (conn) {
    conn.connect((err) => {
      if (err) {
        console.log("DB connection error : " + err);
      } else {
        console.log("Database connection succesfull.");
      }
    });

    conn.end();
  },
};
