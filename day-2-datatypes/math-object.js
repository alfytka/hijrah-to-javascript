const pi = Math.PI
console.log(pi)
console.log(Math.round(pi)) // 3; to round values to the nearest number
console.log(Math.round(9.81)) // 10
console.log(Math.floor(pi)) // 3; rounding down
console.log(Math.ceil(pi)) // 4; rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
// Let create random number between 0 to 10
const num = Math.floor(Math.random() * 11) // create random number between 0 to 10
console.log(num)

// Absolute value
console.log(Math.abs(-10)) // 10
// Square root 
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(2))
// Power
console.log(Math.pow(3, 2)) // 9
console.log(Math.E)

// Logarithm
// Returns the natural logarithm of the base E of x, Math.log(x)
console.log(Math.log(2))
console.log(Math.log(10))

// Trigonometry
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))
