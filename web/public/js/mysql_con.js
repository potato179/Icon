// 실행 시 이 아래 코드 수정 후 파일의 이름을 "mysql_con.js"로 변경해주세요.
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "%",
    user: "potaot179",
    password: "SMRT5117",
    database: "PLANE"
});

con.connect(function(err) {
    if (err) throw err;
});

exports.con = con;