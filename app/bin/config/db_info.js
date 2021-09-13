'use strict';

//db(mysql)가 있을때
const mysql = require("mysql");

const db_info = {
  // host: "localhost",
  // port: "3306",
  // user: "root",
  // password: "000000",
  // database: "ucdl_test"

  host: "15.164.129.144",
  port: "59950",
  user: "root",
  password: "000000",
  database: "testkb"


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

// db서버가 없을때
// const users = {
//   name: ["조영걸", "유영수"],
//   birth: ["1978-06-29", "1949-07-27"],
//   hp: ["01047483791", "01022033505"]
// };

// module.exports = {
//   users
// };