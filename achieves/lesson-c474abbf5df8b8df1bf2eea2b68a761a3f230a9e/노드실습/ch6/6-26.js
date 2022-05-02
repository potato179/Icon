var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){

    console.log(request.method)

    /*if(request.method == "GET"){
        fs.readFile("6-25.html", function(error, data){
            console.log("GET방식입니다");
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(data);
        });
    }*/
    if(request.method == "GET"){
        console.log("GET방식입니다");
        request.on("data", function(data){
            
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end("<h1>" + data + "</h1>")
        });

    }
    else if(request.method == "POST"){


        console.log(`POST 방식입니다.`);


        request.on("data", function(data){
            
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end("<h1>" + data + "</h1>")
        });
    }
}).listen(3000, function(){
    console.log(`server running @ http://127.0.0.1:3000`);
});