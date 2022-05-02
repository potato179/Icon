process.on('exit', function(code){

    console.log('엑시트 이벤트 발생');
});

var exitProcess = function(){
    console.log('프로세스 강제 종료ㅃ');
    process.exit();
}

setTimeout(exitProcess, 2000);