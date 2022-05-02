var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    if(pathname == '/'){

    }
    else if(pathname == '/OtherPage'){

    }
}).listen(3000, function(){
    console.log(`server running @ http://127.0.0.1:3000`);
});