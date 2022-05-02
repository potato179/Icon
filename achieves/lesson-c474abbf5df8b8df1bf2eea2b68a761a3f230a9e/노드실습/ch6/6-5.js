require("http").createServer(function(request, response){
    response.writeHead(200, {"content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ</h1>`);
}).listen(52273, function(){
    console.log(`server funning @ http://127.0.0.1:52273`);
});