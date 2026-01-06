// ES 5
var greet = function(name, message) {
    return message + name;
}

console.log(greet("John", "Hello ")); // Output: Hello John

// ES 6
var arrowGreet1 = (name, message) => {
    return message + name;
}

// ลดรูปกรณี return อย่างเดียว
var arrowGreet2 = (name, message) => message + name;

//ลดรูปต่อไปได้อีกถ้ารับ parameter แค่ตัวเดียว
var arrowGreet3 = (message) => message;
var square = x => x * x;

console.log(arrowGreet1("Jane", "Hello ")); // Output: Hello Jane
console.log(arrowGreet2("Doe", "Hi ")); // Output: Hi Doe
console.log(arrowGreet3("Welcome!")); // Output: Welcome!
console.log(square(5)); // Output: 25