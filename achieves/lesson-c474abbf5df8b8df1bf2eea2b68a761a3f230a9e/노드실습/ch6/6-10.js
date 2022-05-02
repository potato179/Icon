var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("teacher.jpg", function(error, data){
        response.writeHead(200, {"Content-Type": "image/jpeg"});
        response.end(data);
    });
}).listen(52273, function(){
    console.log(`server running @ http://127.0.0.1:52273`);
});