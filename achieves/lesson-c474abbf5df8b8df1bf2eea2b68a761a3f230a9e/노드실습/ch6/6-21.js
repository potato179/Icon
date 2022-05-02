var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    if(pathname == '/'){
        fs.readFile('6-17.html', function(error, data){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        });
    }
    else if(pathname == '/OtherPage'){
        fs.readFile('6-18.html', function(error, data){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        })
    }
}).listen(3000, function(){
    console.log(`server running @ http://127.0.0.1:3000`);
});