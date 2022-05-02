var crypto = require("crypto");
var key = "ㅁㄴㅇㄹㄴㅁㅇㄹㄴㅇㅁㄹㄴㅇㅁㄹㄴㅁㅇㄹㄴㅁㅇㄹㄴㅇㅁㄹㅇㄴ마천여촌야ㅕㅗ쵸ㅑㅕㄴ오촘ㄴ야ㅕ포ㅑㄴ여퍈ㅇ먀폰ㅇ먀ㅕ촌ㅁ야ㅕ초ㅑㅐㅓㅇㄴㅁ챠ㅓㅐㅑㄴㅁ우;ㅇㅁ챠ㅐㅔㅁㄴ여ㅑㅐ";
var input = 'PASSWORD';

var cipher = crypto.createCipher("aes192", key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final("base64");

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, "base64", "utf8")
var d = decipher.final("utf8");

console.log(`원래 문자열: ` + input);
console.log(`암호화한거: ` + cipheredOutput);
console.log(`해제` + d);