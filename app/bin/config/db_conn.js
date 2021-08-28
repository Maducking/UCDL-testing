"use strict";

const dbConObj = require('./db_info.js');
// const dbConn = dbConObj.init();
const conn = dbConObj.db_init();
// const bodyParser = require('body-parser');

// dbConObj.db_connect(conn);

// module.exports = {
//     dbConn, dbOpenChk
// };

module.exports = conn;