// Es 5
var scores = [55, 65, 82];
var s1 = scores[0];
var s2 = scores[1];
console.log(s1, s2); // 55 65

// Es 6
const [s3, s4] = scores;
console.log(s3, s4); // 55 65

// Return Object
function createUser() {
    return {name: 'Snow', age: 30}
}

const {name:x, age:y} = createUser();
console.log(x, y); // Snow 30