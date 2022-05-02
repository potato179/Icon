function f(){
    console.log(`f is called`);
}
function setName(name){
    this.name = name
}

var o = {name: "object", method: f};
var o2 = {name: "", setName: setName};
f();
o.method();
console.log(o, o2);