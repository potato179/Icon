const http = require('http');
const mysql = require('mysql');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const con = mysql.createConnection({
    host: "localhost",
    user: "happy",
    password: "123",
    database: "lessondb"
});

console.log(`로그인 성공`);

con.connect(function(err) {
    if (err) throw err;
    console.log(`연결 성공`);
});

app.use('/public', express.static('public'));

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/ 에서 서버 작동중`);
});

app.get('/', function(req, res, next){
    res.sendFile('lesson.html', {root: __dirname});
});

app.get('/lesson.html', function(req, res, next){
    res.sendFile('lesson.html', {root: __dirname});
});                                                                                                 

app.get('/login.html', function(req, res, next){
    res.sendFile('login.html', {root: __dirname});
});

app.get('/join.html', function(req, res, next){
    res.sendFile('join.html', {root: __dirname});
});


app.get('/login', function(req, res, next){
    console.log(req.query.email);
    
    var email = req.query.email;
    var pw = req.query.pw;
    var q = "SELECT * FROM member WHERE email = '" + email + "'";
    con.query(q, function (err, result) {
        if (err) throw err;
        console.log(result);

        if(result[0] === undefined){
            res.send({
                condition: "fail",
                message: "존재하지 않은 유저입니다."
            })
        }
        else{
            //존재하는 유저
            if(result[0].password === pw){

                // 쿠키저장
                res.cookie("userEmail", email);

                res.send({
                    condition: "success",
                    message: "로그인되었습니다."
                })
            }
            else{
                res.send({
                    condition: "fail",
                    message: "비밀번호가 틀렸습니다."
                })
            }
        }
        console.log(`query 성공함`)
    });
});

app.get('/join', function(req, res, next){
    var name = req.query.name;
    var email = req.query.email;
    var pw = req.query.pw;
    var phone = req.query.phone;

    // 중복 체크
    var f = "SELECT * FROM member WHERE email = '" + email + "'";
    con.query(f, function (err, result) {
        if (err) throw err;
        console.log(result);

        if(result[0] === undefined){
           var q = "INSERT INTO member (name, email, password, phone)VALUES" + "("
            + "'" + name + "'," 
            + "'" + email + "'," 
            + "'" + pw + "',"
            + "'" + phone + "');";

            con.query(q, function (err, result) {
                if(err) throw err;
                console.log(result);
                res.send({
                    condition: "join",
                    message: "회원가입이 완료되었습니다."
                })
            }); 
        }
        else{
            res.send({
                condition: "fail",
                message: "이미 있는 유저입니다. 다시하세요"
            })
        }
        
    });
});