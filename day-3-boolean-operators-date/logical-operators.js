// && ampersand operator example

const a = 4 > 3 && 10 > 5 // true && true -> true
const b = 4 > 3 && 10 < 5 // true && false -> false
const c = 4 < 3 && 10 < 5 // false && false -> false

// || pipe or operator, example

const d = 4 > 3 || 10 > 5 // true || true -> true
const e = 4 > 3 || 10 < 5 // true || false -> true
const f = 4 < 3 || 10 < 5 // false || false -> false

// ! Negation example
let g = 4 > 3 // true
let check = !(4 > 3) // false
let isLightOn = true
let isLightOf = !isLightOn // false
let isMarried = !false // true



