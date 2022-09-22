const mysql_con = require("./public/js/mysql_con.js");
var con = mysql_con.con;

function writeitem_html(req, res, next){
    res.sendFile("writeitem.html", {root: __dirname});
}

exports.writeitem_html = writeitem_html;