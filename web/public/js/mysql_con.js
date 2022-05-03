const mysql = require('mysql');

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "potato179",
    password: "SMRT5117",
    database: "PLANE"
});

console.log(`로그인 성공`);

con.connect(function(err) {
    if (err) throw err;
    console.log(`연결 성공`);
});

exports.con = con;