var http = require("http");

var server = http.createServer();

server.on("request", function(code){
    console.log(`Request On`);
});

server.on("connection", function(code){
    console.log(`Connection On`);
    setTimeout(function(){
        //ProcessingInstruction.exit();
        server.close();
    }, 3000);
});

server.on("close", function(code){
    console.log(`Close On`);
});

server.listen(52273, function(){
    console.log(`adlks`);
});