var server = require("http").createServer();

server.listen(52273, function(){
    console.log(`server running at http://127.0.0.1:52273`);
});

var test = function(){
    server.close();
};

setTimeout(test, 10000);