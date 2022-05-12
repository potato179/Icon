const mysql = require('mysql');

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "potato179",
    password: "SMRT5117",
    database: "PLANE"
});

con.connect(function(err) {
    if (err) throw err;
});

exports.con = con; 