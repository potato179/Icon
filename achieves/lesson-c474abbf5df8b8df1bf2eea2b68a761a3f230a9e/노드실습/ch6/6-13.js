var http = require(`http`);
http.createServer(function(fequest, response){
    response.writeHead(200, {
        "Content-Type": `text/html`,
        "Set-Cookie": [`breakfast = toast`, `dinner = chicken`]
    });
}).listen(3000, function(){
    console.log(`server running @ http://127.0.0.1:3000 `);
});