const http = require('http');
const mysql_con = require('./public/js/mysql_con.js');
const express = require('express');
const fs = require("fs");
const app = express();

const ps_member = require("./ps_member.js");
const ps_items = require("./ps_items.js");

const hostname = '127.0.0.1';
var port = 3000;

var url_list = [
    {url: "/login", ps: ps_member.login},
    {url: "/login.html", ps: ps_member.login_html},
    {url: "/logout", ps: ps_member.logout},
    {url: "/join", ps: ps_member.join},
    {url: "/join.html", ps: ps_member.join_html},
    {url: "/get_itemss", ps: ps_items.get_itemss},
    {url: "/view_items", ps: ps_items.view_items},
    {url: "/modify_items", ps: ps_items.modify_items},
    {url: "/writeitems.html", ps: ps_items.writeitems_html},
    {url: "/del", ps: ps_items.del},
    {url: "/writeitems", ps: ps_items.writeitems},
    {url: "/write_comment", ps: ps_items.write_comment},
    {url: "/press_like", ps: ps_items.press_like}
];

process.argv.forEach(function(item, index){
    console.log("argv %d, %s", index, item);
    if( item == '--port'){
        port = Number(process.argv[index + 1]);
    }
});

app.use('/public', express.static('public'));

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/ 에서 서버 작동중`);
});

app.get('/', function(req, res, next){
    res.sendFile('index.html', {root: __dirname});
});

app.get('/index.html', function(req, res, next){
    res.sendFile('index.html', {root: __dirname});
});  

url_list.forEach(function(element, index){
    app.get(element.url, element.ps);

});