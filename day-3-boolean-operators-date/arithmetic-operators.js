let a = 4
let b = 3
let sum = a + b
let diff = a - b
let mult = a * b
let div = a / b
let remainder = a % b
let powerOf = a ** b

console.log(sum, diff, mult, div, remainder, powerOf)


const PI = 3.14
let radius = 100 // length in meter

// calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) // 314m


const gravity = 9.81 // in m/s2
let mass = 72 // in kilogram

// calculate weight of an object
const weight = mass * gravity
console.log(weight) // 706.32 N

const boilingPoint = 100
const bodyTemp = 37

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m/s2`)
