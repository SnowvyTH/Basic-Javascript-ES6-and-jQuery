export default class User { // มีการเติม default ไปหลัง
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log("Hi " + this.name)
    }
}