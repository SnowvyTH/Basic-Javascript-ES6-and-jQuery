function wakeup(){
    console.log("Wake up bro!");
}

function sayHello(name){
    console.log("Hello " + name);
}

function calArea(width, height){
    var area = width * height;
    return area;
}

wakeup();
sayHello("Snow");
console.log("พื้นที่ " + calArea(5, 10) + " ตร.ม.");


var action = function(a, b){
    return a * b;
}

var result = action(3, 7);

console.log(action(4, 5));
console.log(result);