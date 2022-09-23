const mysql_con = require("./public/js/mysql_con.js");
var con = mysql_con.con;

function writeitem_html(req, res, next){
    res.sendFile("writeitem.html", {root: __dirname});
}

function ideas_html(req, res, next){
    res.sendFile("ideas.html", {root: __dirname});
}

function writeitem(req, res, next){
    
}

exports.writeitem_html = writeitem_html;
exports.ideas_html = ideas_html;