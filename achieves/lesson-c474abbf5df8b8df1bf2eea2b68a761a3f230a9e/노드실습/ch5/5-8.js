var ou = function(error){
    console.log(`예외가 발생했습니다.`);
    process.removeListener('uncaughtExpection', ou);
}

process.on('uncaughtException', ou);

var test = function(){
    setTimeout(test, 2000);
    error.error.error();
}
setTimeout(test, 2000)