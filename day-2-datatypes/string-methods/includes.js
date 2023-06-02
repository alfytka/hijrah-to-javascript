let string = '30 Days Of JavaScript'
console.log(string.includes('Days')) // true
console.log(string.includes('days')) // false
console.log(string.includes('Script')) // true
console.log(string.includes('scripts')) // false
console.log(string.includes('java')) // false
console.log(string.includes('Java')) // true

let country = 'Indonesia'
console.log(country.includes('Indo')) // true
console.log(country.includes('indo')) // false
console.log(country.includes('nesia')) // true
console.log(country.includes('sia')) // true
