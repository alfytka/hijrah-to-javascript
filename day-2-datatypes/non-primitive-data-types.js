let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let numss = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(numss == numbers) // false

let userOne = {
    name: 'Alfitka',
    role: 'Web Dev',
    country: 'Indonesia'
}

let userTwo = {
    name: 'Alfitka',
    role: 'Web Dev',
    country: 'Indonesia'
}
console.log(userOne == userTwo) // false

let number = nums
console.log(number) // true

let userTri = {
    name: 'Alfitka',
    role: 'Web Dev',
    country: 'Indonesia'
}
let userFour = userTri
console.log(userFour) // true
