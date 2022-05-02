var fs = require("fs");

try{
    var data = fs.readFileSync('text2.txt', 'utf8');
    console.log(data);
} 
catch(e){
    console.log(e);
}

console.log('아무거나');

/*

try{
    fs.writeFileSync('text2.txt', 'Hello World..!', 'utf8');
    console.log(`다썼다`);
}
catch(e){
    console.log(e);
}*/