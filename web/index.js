const http = require("http");
const express = require("express");
const app = express();
const mysqlconfig = require("./public/js/mysql_con.js");
const con = mysqlconfig.con;

const hostname = "127.0.0.1";
const port = "3000";

const ps_users = require("./ps_users.js");
const ps_items = require("./ps_items.js");
const urls = [

];

process.argv.forEach(function(item, index) {
    console.log(item, index);
    if(item == "--port") port = Number(process.argv[index + 1]);
});

app.use("/public", express.static("public"));

app.listen(port, hostname, () => {
    console.log(port, hostname);
});

app.get("/", function(req, res, next){
    res.sendfile("index.html", {root: __dirname});
});

urls.forEach(function(element, index){
    app.get(element.url, element.ps);
});