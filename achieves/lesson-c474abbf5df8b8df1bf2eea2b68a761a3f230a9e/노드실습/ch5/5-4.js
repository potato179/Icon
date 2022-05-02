process.on('exit', function(code){
    console.log(`ㅃㅃ`)
});

process.on('uncaughtException', function(error){
    console.log(`ㅇㅅㅇ 예외가 나왔군`);
});

var cnt = 0;
var test = function(){
    cnt += 1;
    if(cnt>3) return;

    setTimeout(test, 2000);
    error.error.error();
}
setTimeout(test, 2000);