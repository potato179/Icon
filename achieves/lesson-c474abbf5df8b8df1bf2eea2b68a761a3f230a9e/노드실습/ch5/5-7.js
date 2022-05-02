var ou = function(error){
    console.log(`오류가 발생했는데 봐주고 싶음`);
}

process.on('uncaughtException', ou);
var test = function(){
    setTimeout(test, 2000);
    error.error.error();
}
setTimeout(test, 2000);