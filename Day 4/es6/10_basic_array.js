// Join Array เชื่อม Array เป็น String
const numbers = [10, 20, 30 ,40]
console.log(numbers.join())
console.log(numbers.join(","))
console.log(numbers.join("-"))
console.log(numbers.join("+"))
console.log(numbers.join(" "))

// หาผลรวมสมาชิก
console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3])

// ใช้ loop หาผลรวม
let result = 0
for (let i=0; i<numbers.length; i++) {
    result += numbers[i]
}
console.log(result)

// Reduce Array หาผลรวม
const result_data = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(result_data)

// Concat Array ต่อ Array
const myarr1 = [5, 6, 7]
const myarr2 = [8, 9, 10]

// const myresult = myarr1 + myarr2
const myresult = myarr1.concat(myarr2)
console.log(myresult)

// Push Array เพิ่มสมาชิกตัวท้าย
const mutate = ["red", "green"]
const count = mutate.push("blue")
console.log(mutate)
console.log(count)

// Pop Array ลบสมาชิกตัวสุดท้าย
const pop = mutate.pop()
console.log(mutate)
console.log(pop)

// Shift Array ลบสมาชิกตัวแรก
const shift = mutate.shift()
console.log(mutate)
console.log(shift)

// Unshift Array เพิ่มสมาชิกตัวแรก
const unshift = mutate.unshift("red")
console.log(mutate)
console.log(unshift)