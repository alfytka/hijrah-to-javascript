const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const names = ['Alfitka', 'Khikmal', 'Elfan', 'Renal']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e, pi, gravity, bodyTemp, boilingTemp)

const fullStack = [
   ['HTML', 'CSS', 'JS', 'React'],
   ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

{
   const numbers = [1, 2, 3]
   let [numOne, , numThree] = numbers

   console.log(numOne, numThree)

   const names = ['Alfitka', 'Elfan', 'Haerul', 'Hari']
   let [, secondPerson, , fourthPerson] = names

   console.log(secondPerson, fourthPerson)
}
{
   const names = [undefined, 'Haerul', 'Kurniawan']
   let [
      firstPerson = 'Alfitka',
      secondPerson,
      thirdPerson,
      fourthPerson = 'Mue'
   ] = names

   console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(...rest)

const countries = [['Indonesia', 'Jakarta'], ['Malaysia', 'Kuala Lumpur'], ['Thailand', 'Bangkok']]

for (const [country, city] of countries) {
   console.log(country, city)
}

for (const [first, second, third] of fullStack) {
   console.log(first, second, third)
}

