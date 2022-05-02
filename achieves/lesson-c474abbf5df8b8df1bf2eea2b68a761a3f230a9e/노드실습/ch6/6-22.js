var http = require("http");

http.createServer(function(request, response){
    if(request.method === "GET"){
        console.log(`GET요정입니다.`);
    }
    else if(request.method === "POST"){
        console.log(`POST요정입니다.`);
    }
}).listen(3000, function(){
    console.log(`server running @ http://127.0.0.1:3000`);
});