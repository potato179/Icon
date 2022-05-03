const util = require('util');
const mysql_con = require('./mysql_con.js');
var con = mysql_con.con;
/**
 * 질문 리스트를 반환하는 함수.
 * @return 질문들의 배열(리스트)
 */
function get_itemss(req, res, next){
    var s = util.format(`select * from items`);
    con.query(s, function(err, result){
        if(err) throw err;
        res.send(result);
    });
}

/**
 * 질문 태이블에서 해당 레코드를 선택해 질문을 보여줌
 * @param {number} id - 질문의 아이디
 * @return 질문 레코드
 */
function view_items(req, res, next){
    console.log(req.query.id);
    var s = util.format("SELECT * FROM items where id = %d", req.query.id);
    con.query(s, function(err, result){
        if(err) throw err;
        if(result[0] === undefined){
            res.send(`존재하지 않는 질문입니다.`);
            return;
        }
        res.send(result[0]);
    })
}

function modify_items(req, res, next){
    var c = req.query.context;
    var id = req.query.id;
    var s = util.format(`UPDATE items
SET context = '%s'
WHERE id = "%d";`, c, id);
    con.query(s, function (err, result) {
        if(err) throw err;
        console.log(result);
        res.send({
            message: `수정이 완료되었습니다.`
        });
    }); 
}

function writeitems(req, res, next){
    var writer = req.query.writer;
    var title = req.query.title;
    var context = req.query.context;
    var qi = `insert into items (writer, title, context, state) values ("${writer}", "${title}", "${context}", "대기")`;
    con.query(qi, function (err, result) {
        if(err) throw err;
        console.log(result);
        res.send({
            condition: "register",
            message: "등록이 완료되었습니다."
        });
    });
}

function del(req, res, next){
    var id = req.query.id;
    var q = util.format("DELETE FROM items WHERE id = '%d';", id);
    con.query(q, function(err, result){
        if(err) throw err;
        console.log(result)
        res.send({
            condition: "delete",
            message: "삭제되었습니다."
        });
    });
}

function writeitems_html(req, res, next){
    res.sendFile('writeitems.html', {root: __dirname});
}

function write_comment(req, res, next){
    var comment = req.query.comments;
    var id = req.query.id;
    var email = req.query.email;
    var userName = req.query.userName;

    var q = `select comments from items where id = ${id}`
    con.query(q, function(err, result){
        if(err) throw err;

        var jsonData = JSON.parse(result[0].comments);
        jsonData.push({name: userName, email: email, text: comment});

        var jsonString = "";

        jsonString += "JSON_ARRAY(";

        var count = jsonData.length;
        jsonData.forEach(function(element, index){
            jsonString += `json_object("name", "${element.nname}, "text", "${element.text}", "email", "${element.email}")`;
            if(index < count - 1 )
                jsonString += ",";
        });
    
        jsonString += ")";
        console.log("asdfadsf", jsonString)
        var q = `update items set comments = ${jsonString} where id = "${id}`;
        con.query(q, function(err, result){
            if(err) throw err;
            console.log(result)            
            res.send({
                condition: "comment",
                message: "댓글이 등록되었습니다.."
            });
        })

    });
}

function press_like(req, res, next){
    var email = req.query.email;
    var id = req.query.id;
    console.log(id);
    var s = `select likes from items where id = ${id};`;
    con.query(s, function(err, result){
        if(err) throw err;

        var email_list = [];
        if(result[0] != null && result[0].likes != null){
            email_list = JSON.parse(result[0].likes);            
        } 

        if(email_list.includes(email)) return res.send({message: "이미 눌렀습니다."});
        email_list.push(email);

        var s = `UPDATE items
        set likes = JSON_ARRAY(`;
        var count = email_list.length;

        email_list.forEach(function(element, index){
            s += `"`;
            s += element; 
            s += `"`;

            if(index < count - 1) s+= ","
        });
        s += `) where id = ${id};`;
        console.log(s);

        con.query(s, function(err, result){
            if(err) throw err;
            res.send({
                condition: "liked",
                message: "좋아요를 눌렀습니다."
            });
        });
        
        

    })
}

exports.get_itemss = get_itemss;
exports.view_items = view_items;
exports.modify_items = modify_items;
exports.writeitems_html = writeitems_html;
exports.del = del;
exports.writeitems = writeitems;
exports.write_comment = write_comment;
exports.press_like = press_like;