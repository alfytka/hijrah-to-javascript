// import { webTechs } from "./main-2/web-techs";
// import { countries } from "./main-2/countries";

// console.log(webTechs)
// console.log(countries)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanedText = text.replace(/[^\w\s]/g, '')
let words = cleanedText.split(' ')

console.log(words)
console.log(words.length)

{
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

   // Add 'Meat'
   shoppingCart.unshift('Meat')
   console.log(shoppingCart)
   
   // Add 'Sugar'
   // shoppingCart.push('Sugar')
   // console.log(shoppingCart)

   // Remove 'Honey'
   shoppingCart.pop()
   console.log(shoppingCart)
   
   // Modify 'Tea' to 'Green Tea'
   shoppingCart[3] = 'Green Tea'
   console.log(shoppingCart)
}

{
   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
   const backEnd = ['Node', 'Express', 'MongoDB']
   const fullStack = frontEnd.concat(backEnd)

   console.log(fullStack)
}