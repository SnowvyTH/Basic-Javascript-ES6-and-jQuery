// import วิธีที่ 1
import { sayHi, sayBye } from './say.js'

// import วิธีที่ 2
import * as say from './say.js'

// import วิธีที่ 3
import { sayHi as sh, sayBye as sb } from './say.js'

sayHi('Snow')
sayBye('Snow')

say.sayHi('Ice')
say.sayBye('Ice')

sh('Frost')
sb('Frost')

// import class ที่มีการกำหนด default
import User from './user.js'

// สร้าง object
const obj = new User('Jack')
console.log(obj.name)
obj.sayHi()