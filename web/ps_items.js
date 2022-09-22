const mysql_con = require("./public/js/mysql_con.js");
var con = mysql_con.con;

function writeitem_html(res, req, next){
    res.sendFile("writeitem.html", {root: __dirname});
}