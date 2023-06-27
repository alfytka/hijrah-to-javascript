const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

const countries = [
   'Germany',
   'France',
   'Belgium',
   'Finland',
   'Sweden',
   'Norway',
   'Denmark',
   'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)

const user = {
   name: 'Alfitka',
   title: 'Programmer',
   country: 'Indonesia',
   city: 'Banjar'
}

const copiedUser = {...user}
console.log(copiedUser)

const modifyCopied = {...user, title: 'Frontend Dev'}
console.log(modifyCopied)

const sumAllNums = (...args) => {
   console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)

{
   const sumAllNums = (...args) => {
      let sum = 0
      for (const num of args) {
         sum += num
      }
      return sum
   }
   console.log(sumAllNums(1, 2, 3, 4, 5))   
}