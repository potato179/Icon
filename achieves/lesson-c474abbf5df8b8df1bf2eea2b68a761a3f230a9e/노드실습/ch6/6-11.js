var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    fs.readFile('horse.mp3', function(error, data){
        response.writeHead(200, {"Content-Type": "audio/mp3"});
        response.end(data);
    });
}).listen(52273, function(){
    console.log(`server running @ http://127.0.0.1:52273`)
});