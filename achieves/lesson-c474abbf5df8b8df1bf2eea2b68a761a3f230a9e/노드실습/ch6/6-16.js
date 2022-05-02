var http = require("http");

http.createServer(function(request, response){
    response.writeHead(404);
    response.end();
}).listen(3000, function(){
    console.log(`server running @ http://127.0.0.1:3000`);
});