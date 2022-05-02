var fs = require("fs");

fs.readFile('text.txt', 'utf8', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(`아무거나`);

/*fs.writeFile('text.txt', 'Hello World..!', 'utf8', function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log(`끝`);
    }
})*/