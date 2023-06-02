let string = 'Love is the best to in this world'
console.log(string.endsWith('world')) // true
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true

let country = 'Indonesia'
console.log(country.endsWith('Sia')) // false
console.log(country.endsWith('sia')) // true
console.log(country.endsWith('Indo')) // false
