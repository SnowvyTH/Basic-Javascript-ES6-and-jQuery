// ES 5
function sayHi(name) {
    var name = name || "Guest";
    console.log("Hi " + name);
}

sayHi();
sayHi("Alice");

// ES 6
function sayHello(name = "Guest") {
    console.log("Hi " + name);
}

sayHello();
sayHello("Bob");