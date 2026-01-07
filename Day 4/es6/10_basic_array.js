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

// Splice Array ดึงข้อมูลสมาชิกแบบระบุตำแหน่งแน่นอน
const mutate_arr = ["red", "green", "0", "1", "blue"]
// const splice = mutate_arr.splice(1) // การกำหนดตำแหน่งเริ่ม remove จากตัวที่ 0
// const splice = mutate_arr.splice(2, 2) // ลบจากลำดับที่ 2 และลบออก 2 ตัว
const splice = mutate_arr.splice(2, 2, "white", "pink") // ลบจากลำดับที่ 2 และลบออก 2 ตัว และใส่กลับเข้าไป 2 ตัว
console.log(mutate_arr)

// Slice Array
const mutate_arr1 = ["red", "green", "0", "1", "blue"]
//const sliced = mutate_arr1.slice(1)
const sliced = mutate_arr1.slice(1, 3) // ดึงตำแหน่งที่ 1 ถึง 3 แต่ไม่รวม 3
console.log(sliced)
// ถ้าส่งค่า slice เข้าไปเฉยๆ จะเป็น copy array

// Avoid array mutation การหลีกเลี่ยงการเปลี่ยนแปลง array ต้นฉบับ
const fruits = ["banana", "apple", "mango"]
const newFruits = [
    ...fruits.slice(0, 1),
    "strawberry",
    ...fruits.slice(1) 
]

console.log(newFruits)
// อยากลบ apple จาก array ใหม่
const newFruits2 = [
    ...fruits.slice(0, 1),
    ...fruits.slice(2) 
]
console.log(newFruits2)

// การวนลูป Array
// For Each
const num_arr = ["one", "two", "three"]
num_arr.forEach( result => {
    console.log(result)
})

// For of
for (const v of num_arr) {
    console.log(v)
}

// การค้นหาตำแหน่งสมาชิกใน Array
const num_array = [1, 4, 8, 10, 8, 11, 12]
const index = num_array.indexOf(8)
console.log(index)

//find index
const found = num_array.findIndex(e => e % 4 == 0)
console.log(found)