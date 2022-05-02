var fs = require("fs");
var data = "dnfifjnsiduvniushdfvhf dsouivhdfsu hvsfdjp vopfmsdiv jfdlv nfdsmuj,v ㅇ뤼 핀야ㅕ패;ㅇ렆 ㅡㅇㄴㄹ퍄 ㅗㅊ";

fs.writeFile("text2.txt", data, 'utf8', function(error){
    console.log(`다썼다`);
});


fs.writeFileSync("text2.txt", data, 'utf8');
console.log(`다썼다`);