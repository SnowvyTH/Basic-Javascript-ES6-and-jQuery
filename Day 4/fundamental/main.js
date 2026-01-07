document.write("Hello JavaScript!<br>");
alert("Hello Everyone!");
document.write("<b>ยินดีต้อนรับ</b>");
document.write("<h1><font color='red'>ยินดีต้อนรับทุกท่าน</font></h1>");

var name = "Snow";
var age = 18;

console.log(name);
console.log(age);

var status = confirm("Are you OK?");
console.log(status);

var msg = prompt("กรุณาป้อนชื่อ", "default");
console.log(msg);

var age = prompt("กรุณาป้อนอายุของท่าน", "0");
var votable = (age <= 18) ? "Too young": "Old enough";
console.log(votable);

var number = 10;
if (number <= 10) {
    var x = "Success";
}else {
    var x = "Fail";
}

console.log(x);

var day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("Tuesday");
        document.body.style.backgroundColor = "pink ";
        break;
    default:
        console.log("Invalid day");
        document.body.style.backgroundColor = "white";
}
