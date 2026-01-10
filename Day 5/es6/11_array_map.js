const array = [1, 2, 3]
// for (let i=0; i<array.length; i++) {
//     array[i] = array[i] * 2
// }
// console.log(array) 

const result = []
// for (let i=0; i<array.length; i++) {
//     const a = array[i] * 2
//     result.push(a)
// }

array.forEach(e => {
    const a = e * 2
    result.push(a)
})

console.log(result)
console.log(array)

const result_map = array.map(result => result * 2)

console.log(result_map)
console.log(array)

const multiplyBytwo = result => result * 2
const multiplyByten = result => result * 10

const result_map_2 = array.map(multiplyBytwo).map(multiplyByten)
console.log(result_map_2)

const pets = [
    {name: 'Max'},
    {name: 'Tom'},
]

const result_data = pets.map(pet => pet.name)
console.log(result_data)

const fruits = ["banana", "apple", "mango"]
const result_fruit = fruits.map((e, i, d) => {
    return "Day " + (i + 1) + " eat " + e + " in " + d
})
console.log(result_fruit)