var url = require("url");
var querystring = require("querystring");

var parsed = url.parse('https://ken-park.appspot.com/');
console.log(querystring.parse(parsed.query));