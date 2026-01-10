var names = ["Snow", "Jon", "Arya", "Sansa"];
var fruits = new Array("Apple", "Banana", "Mango", "Orange");
console.log(names);
console.log(typeof names);
console.log(names[0]);

var firstname = ["Snow", "Jon", "Arya", "Sansa"];
console.log(firstname[0]);
console.log(firstname[1],firstname[2]);

firstname[1] = "Natasha";
console.log(firstname[1]);
firstname[4] = "Bran";
console.log(firstname);

console.log(fruits);
for(var i = 0; firstname[i]; i++){
    console.log(firstname[i]);
}

fruits.forEach(myFruit);

function myFruit(value){
    console.log(value);
}