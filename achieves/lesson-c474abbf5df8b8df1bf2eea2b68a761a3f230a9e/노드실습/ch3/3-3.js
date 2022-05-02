console.time('alpha');
var output = 1;
for(var i = 1; i <= 10; i++){
    output *= i;
}
console.log(`result: `, output);
console.timeEnd(`alpha`);