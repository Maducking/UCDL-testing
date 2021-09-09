"use strict"

//중요!! 서버켰을 때 같은 폴더에 json 파일을 읽어야 하므로 json 파일이 있는 폴더에서 실행을 해야함
//그렇지 않을때 view폴더를 볼 수가 없다고 나옴
// const app = require("../main");
// const PORT = 3000;

//heroku setting
const app = require("../../main");
const PORT = process.env.PORT || 8080;  //process.env.PORT 있으면 실행 없으면 8080

app.listen(PORT, ()=>{
    console.log('UCDL 서버가동!');
});
