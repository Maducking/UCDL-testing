"use strict";
//순서대로 object가 순서 대로 실행된다.(전역변수)?
// var _url, urlObj;
const { Script } = require('vm');
// const { json } = require("express");
// const db_info = require('../../../bin/config/db_info'); 
// db가 있을때
const db_config = require("../../../bin/config/db_conn");
// const conn = db_config.init();  //creatConnection을 받아야됨


// const user = require("../../../bin/config/db_info");  // db가 없을때
// 컨트롤러 부분 모듈화
const root = (req, res) => {
  res.render("home/index");
};


const login = (req, res) => {

  // console.log(typeof(_url));
  // var _urlJSON = JSONstringify(_url);
  // var _url = req.url;

  let dbIP = req.query.dbIp;
  let dbPORT = req.query.dbPort;
  // db_info.host = dbIP;
  // db_info.port = dbPORT;
  // console.log("로그인쪽 db 정보"+ db_info);

  // console.log("로그인쪽 db 정보"+ db_info.host+ typeof(db_info.host));
  
  // console.log("로그인" + db_info);
  

  // var ip = req.body.ip;
  // var port = req.body.port;
  // db_info.host = ip;
  // db_info.port = port;
  // console.log("로그인" + db_info);


  // var urlObj = url.parse(_url, true);
  
  
  
  // res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다.."); document.location.href=\'/login\';</script>');
  res.render("home/login", {ip: dbIP, port: dbPORT});
  // res.render("home/login");
};



//db서버가 없을때
// const process = {
//   login: function(req, res){
    
//     const sendName=req.body.name , sendTel=req.body.telNum, sendBirth=req.body.birth;

//     if(user.users.name.includes(sendName)){    
//         //전송값(sendName)과 저장문자열을 비교하여 같으면 return true, includes(비교값:string)
//       const idx = user.users.name.indexOf(sendName);  
//         //전송값(sendName)과 저장값이 있으면 저장값 배열 index번호 return, indexof 배열의 번호가져온다
//       if(user.users.hp[idx] === sendTel && user.users.birth[idx] === sendBirth)
//         // return res.json({success: true});
//         res.render("home/test", { name: sendName, tel: sendTel, birth: sendBirth });
//     };
//     res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다.."); document.location.href=\'/login\';</script>');
    
//     return res.json({
//       success: fail,
//       msg: "로그인에 실패하셨습니다."
//     });
//   }
// }


// const test = (req, res) => {
//   //클라이언트에서 넘어온 값을 저장
 

  //  db있을때

const test = (req, res) => {
  
  //클라이언트에서 넘어온 값을 저장
  var name = req.body.name;
  var telNum = req.body.telNum;
  var birth = req.body.birth;
  var params = [name, telNum, birth];

  const ip = req.body.ip;
  const port = req.body.port;


  // console.log("test쪽 db 정보: "+ JSON.stringify(db_info));
  // console.log("test쪽 ip 값은: "+ req.query.dbIp);

  var sql = "SELECT * FROM testing_mbr WHERE name_mbr = ? AND tel_mbr = ? AND birth_mbr = ?";
  // console.log("Port값은: "+ port);
  // console.log(db_info);

  // console.log("conn의 정보" + conn);
  
  const conn = db_config.conn_db.init(ip, port);    //init를 따로 conn으로 분리, init에 createConnection이 있다.

  conn.query(sql, params, function (err, rows, fields) {

    // console.log("db쿼리 호스트 : "+ db_info.host);
    // console.log("db쿼리 json 호스트 : "+ JSON.stringify(db_info));
    
    if (err) return console.log("관리자에게 문의 바랍니다!"+ err);
    
    if (!rows[0]) {           //undefined는 거짓????? //sql에 맞는 정보만 한개 배열[0]로 가저온다.
    res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다.."); document.location.href=\'/login\';</script>');
    return console.log("No matching user");
    }
    if(rows[0].name_mbr.includes(name)){        //전송값(sendName)과 저장문자열을 비교하여 같으면 return true, includes(비교값:string)
      // console.log('rows[0].name_mbr.includes(name): ' + rows[0].name_mbr.includes(name))

      // const idx = user.users.name.indexOf(sendName);  
      //전송값(sendName)과 저장값이 있으면 저장값 배열 index번호 return, indexof 배열의 번호가져온다

      //  if((rows[0].tel_mbr === telNum) && (rows[0].birth === birth)){
      //공부 필요  ===를 false로 하는데 이해 안됨
           
      if(rows[0].tel_mbr.includes(telNum) && rows[0].birth_mbr.includes(birth)){
      
      // return res.json({success: true});
      conn.end();     //쿼리문 이후 접속 끈키 
      res.render("home/test", { applicant : rows});
      }
    };
  });
}



module.exports = {
  // process,   //db 서버가 있을때(객체 output을 보내줘야함)
  root,
  login,   
  test
  // urlObj
}
