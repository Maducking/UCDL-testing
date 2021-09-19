"use strict";
const mysql = require("mysql");
const db_server_info = require('./db_info.js');   //


//유동 ip로 인하여 초기 실행을 막기위해 변수에 저장!
const conn_db = {
  init: function (ip, port) {
      
      // /test에서 입력받은 ip, port를 전달 받아  db_info에 다시 전달
    db_server_info.host = ip;
    db_server_info.port = port;
    return mysql.createConnection(db_server_info);
  },

  connect: function (conn) {
    conn.connect((err) => {
      if (err) {
        console.log("DB connection error : " + err);
      } else {
        console.log("Database connection succesfull.");
      }
    });
    conn.end();
  }
};


module.exports = { conn_db };



// console.log(dbConObj);
// const dbConn = dbConObj.init();
// const conn = dbConObj.db_init();
// const bodyParser = require('body-parser');

// dbConObj.db_connect(conn);

// module.exports = {
//     dbConn, dbOpenChk
// };

// module.exports = conn;

// module.exports = {
//     init: function (ip, port) {
//       console.log("first db :" + db_server_info);
//       let db_ip = ip;
//       let db_port = port
//       db_server_info.host = db_ip;
//       db_server_info.port = db_port;

//       // console.log("module IP:" + ip);
//       // console.log("module port: " + port);

//       // console.log("second db:" + JSON.stringify(db_server_info));
//       console.log("init ++ HOST 정보");
//       console.log("init host:" + db_server_info.host);
//       console.log("init port:" + db_server_info.port);
//       console.log("init user:" + db_server_info.user);
//       console.log("init PW :" + db_server_info.password);
//       console.log("init DB :" + db_server_info.database);

//       // console.log("샘플1 :" + dbConObj.host);
//       // console.log("샘플2 :" + db_ip);

      

//   return mysql.createConnection(db_server_info);
//     },
  
//     connect: function (conn) {
//       console.log("connect ++ HOST 정보");
//       console.log("Connect host:" + db_server_info.host);
//       console.log("Connect port:" + db_server_info.port);
//       console.log("Connect user:" + db_server_info.user);
//       console.log("Connect PW :" + db_server_info.password);
//       console.log("Connect DB :" + db_server_info.database);

//       conn.connect((err) => {
//         if (err) {
//           console.log("conn쪽 DB정보" + db_server_info);
//           console.log("DB connection error : " + err);
//         } else {
//           console.log("Database connection succesfull.");
//         }
//       });
  
//       conn.end();
//     },
//   };



  
  
  // db서버가 없을때
  // const users = {
  //   name: ["조영걸", "유영수"],
  //   birth: ["1978-06-29", "1949-07-27"],
  //   hp: ["01047483791", "01022033505"]
  // };
  
  // module.exports = {
  //   users
  // };