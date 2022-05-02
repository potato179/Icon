require("http").createServer(function(request, response){
    response.writeHead(200, {"content-Type": "text/html"});
    response.end(`<h1>ㅎㅇㅎㅇ</h1>`);
}).listen(52273);