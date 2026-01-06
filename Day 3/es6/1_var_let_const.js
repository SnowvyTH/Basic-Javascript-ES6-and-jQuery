// // ปัญหาของการใช้ var
// var name = "Snow";
// {
//     var name = "Jon";
// }

// function a() {
//     var name = "Snow";
//     console.warn(name); // Snow
// }

// console.warn(name); // Jon

// // ปัญหาอื่นๆของ var
// var messages = ['hello', 'javascript', 'es2026'];
// for (var i = 0; i < messages.length; i++) {
//     console.log(i);
//     setTimeout(function(){
//         console.log(messages[i]);
//     }, 1000)
// }

// var fullname;
// var fullname;
// console.log(fullname); // undefined

// let fullname;
// let fullname;
// console.warn(fullname)

let name = "Snow";
{
    let name = "Jon";
    console.log(name); // Jon
}

console.log(name); // Snow

var messages = ['hello', 'javascript', 'es2026'];
for (let i = 0; i < messages.length; i++) {
    console.log(i);
    setTimeout(function(){
        console.log(messages[i]);
    }, 1000)
}

// การใช้ const
const firstname = "Snow";
// firstname = "Jon";
console.log(firstname); // Snow

const person = {}
person.name = "Snow";
person.email = "test@example.com";
console.log(person);