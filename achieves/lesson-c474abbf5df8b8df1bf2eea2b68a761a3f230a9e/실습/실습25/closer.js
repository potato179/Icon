function makeCounter(initVal){
    var cnt = initVal;
    function increase(){
        cnt ++;
        console.log(cnt);
    }
    return increase;
}
var counter1 = makeCounter(0);
var counter2 = makeCounter(10);
counter1();
counter2();