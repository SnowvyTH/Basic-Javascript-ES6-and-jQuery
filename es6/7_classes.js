// Ex สร้างคลาสใน javascript
class Person {
    // สร้าง constructor
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log("Hi, My name is " + this.name)
    }

    get gender() {
        return this._gender
    }

    set gender(g) {
        this._gender = g
    }

}

// สร้าง object หรือ instance
const p = new Person("Snow")
console.log(p.name)
p.sayHi()

p.gender = "Male"
console.log(p.gender)