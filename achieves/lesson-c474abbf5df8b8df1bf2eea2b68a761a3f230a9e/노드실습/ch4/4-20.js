var fs = require("fs");

fs.readFile('text.txt', 'utf8', function(error, data){
    if(error) return console.log(error);
    console.log(data);
});

fs.writeFile('text.txt', 'Hello World..!', 'utf8', function(error){
    if(error) return console.log(error);
    console.log(`끝`);
})