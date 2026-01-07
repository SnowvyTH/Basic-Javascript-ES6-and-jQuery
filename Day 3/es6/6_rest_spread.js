// Ex 1
// Spread
// const arr = [4, 5, 6]
// const append = [1, 2, 3, arr]

// console.log(append)               // [1, 2, 3, Array(3)]

// Ex 2
const arr = [4, 5, 6]
const append = [1, 2, 3, ...arr]
console.log(append)               // [1, 2, 3, 4, 5, 6]

// Ex 3
const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']
arr1.push(...arr2)
console.log(arr1)                 // ['a', 'b', 'c', 'd', 'e', 'f']

// Ex 4
function add(x, y, z) {
    return x + y + z
}

const numbers = [1, 2, 3]
const sum = add(...numbers)
console.log(sum)                  // 6

// Rest Parameter
function howManyArgs(...args) {
    console.log(args.length)
    console.log(args)
}

howManyArgs()
howManyArgs(1)
howManyArgs(1, 2, 3, 4, 5)

// Ex 1
function multiply(multiplier, ...array){
    console.log(array);
    return array.map(e => multiplier * e)
}
const result = multiply(2, 10, 20, 30)
console.log(result);
