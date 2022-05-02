function printTime(a){
    for(var i; i <= 9; i++){
        console.log(a + `*` + i + `=` + a*i);
    }
}

for(var i = 2; i <= 9; i++){
    printTime(i);
}