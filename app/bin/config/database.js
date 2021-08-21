var mysql = require('mysql');
var db_info = {
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '000000',
    database : 'db_test'
}

module.exports = {
    init: () => {
        return mysql.createConnection(db_info);
    },
    connect: (conn) =>{
        conn.connect((err)=>{
            if(err)
                console.error('DB connection error:' + err);
            else
                console.log('DB is connected successful!');
        })
    }
}