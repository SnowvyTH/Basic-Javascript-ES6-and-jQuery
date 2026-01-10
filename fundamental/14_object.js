// การสร้างข้อมูล Object
var person = {
    firstname: "Snow", 
    lastname: "Test", 
    age: 23,
    gender: "Male",
    fullName: function(){
        return this.firstname + " " + this.lastname;
    }
}

// การเข้าถึงสมาชิกใน Object
// Method 1
console.log(person.firstname);

// Method 2
console.log(person["lastname"]);

// Method 3
console.log(person.fullName());

// Object Nested มีการซ้อนกันมากกว่า 1 ชั้น
var user = {
    id: "1",
    email: "test@example.com",
    personInfo: {
        name: "John Doe",
        address: {
            line1: "255 Pibonsongkram Road",
            line2: "Bangsue Distric",
            city: "Bangkok",
            zipcode: "10300"
        }
    }
}

console.log(user.personInfo);
console.log(user.personInfo.name);
console.log(user.personInfo.address);
console.log(user.personInfo.address.city);