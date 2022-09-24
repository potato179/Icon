const mysql_con = require("./public/js/mysql_con.js");
var con = mysql_con.con;

function writeitem_html(req, res, next){
    res.sendFile("writeitem.html", {root: __dirname});
}

function writeitem(req, res, next){
    var title = req.query.title;
    var writer = req.query.writer;
    var context = req.query.context;
    var fund_rate = req.query.fund_rate;
    var q = `insert into items (title, writer, context, fund_rate, state, comments, likes) values("${title}", "${writer}", "${context}", "${fund_rate}", "팀빌딩", {}, [])`;
    con.query(q, function(err, result){
        if(err) throw err;
        res.send({
            condition: "success",
            message: "정상적으로 등록되었습니다."
        });
    })
}

function ideas_html(req, res, next){
    res.sendFile("ideas.html", {root: __dirname});
}

function funds_html(req, res, next){
    res.sendFile("funds.html", {root: __dirname});
}

exports.writeitem_html = writeitem_html;
exports.writeitem = writeitem;
exports.ideas_html = ideas_html;
exports.funds_html = funds_html;