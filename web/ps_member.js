const mysql_con = require('./mysql_con.js');
const util = require('util');
var con = mysql_con.con;

/**
 * 회원가입 화면 보여주기
 * @return 회원가입 페이지
 */
function join_html(req, res, next){
    res.sendFile('join.html', {root: __dirname});
}

/**
 * 로그인 화면 보여주기
 * @return 로그인 페이지
 */
function login_html(req, res, next){
    res.sendFile('login.html', {root: __dirname});
}

/**
 * 로그인을 진행시키는 함수.
 * @param {string} email - 유저의 이메일
 * @param {string} pw - 패스워드
 * @return 로그인 성공, 실패 여부
 */
function login(req, res, next){
    console.log(req.query.email);
    
    var email = req.query.email;
    var pw = req.query.pw;
    var q = "SELECT * FROM users WHERE email = '" + email + "'";
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
                res.cookie("username", result[0].name);

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
        console.log(`query 성공함`);
    });
}

/**
 * 로그아웃 하기
 * @return 로그아웃
 */
function logout(req, res, next){
    //쿠키삭제
    res.cookie("userEmail", "");

    res.sendFile('index.html', {root: __dirname});
}

function join(req, res, next){
    var name = req.query.name;
    var email = req.query.email;
    var pw = req.query.pw;
    // 중복 체크
    var f = "SELECT * FROM users WHERE email = '" + email + "'";
    con.query(f, function (err, result) {
        if (err) throw err;
        console.log(result);

        if(result[0] === undefined){

            var q = util.format("INSERT INTO users (name, email, password)VALUES ('%s', '%s', '%s')", name, email, pw);

           var q = "INSERT INTO users (name, email, password)VALUES" + "("
            + "'" + name + "'," 
            + "'" + email + "'," 
            + "'" + pw + "');";
            con.query(q, function (err, result) {
                if(err) throw err;
                console.log(result);
                res.send({
                    condition: "join",
                    message: "회원가입이 완료되었습니다."
                });
            }); 
        }
        else{
            res.send({
                condition: "fail",
                message: "이미 있는 유저입니다. 다시하세요"
            });
        }
        
    });
}

exports.login_html = login_html;
exports.join_html = join_html;
exports.login = login;
exports.logout = logout;
exports.join = join;