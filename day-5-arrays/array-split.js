let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)  

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const company = companies.split(', ')
console.log(company)

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)

{
   const fruits = ['banana', 'orange', 'mango', 'lemon']
   let firstFruit = fruits[0] // we are accessing the first item using its index

   console.log(firstFruit) // banana

   secondFruit = fruits[1]
   console.log(secondFruit) // orange

   let lastFruit = fruits[3]
   console.log(lastFruit) // lemon
   // Last index can be calculated as follows

   let lastIndex = fruits.length - 1
   lastFruit = fruits[lastIndex]

   console.log(lastFruit)  // lemon
}

{
   const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

   console.log(numbers.length)  // => to know the size of the array, which is 6
   console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
   console.log(numbers[0])      //  -> 0
   console.log(numbers[5])      //  -> 100

   let lastIndex = numbers.length - 1;
   console.log(numbers[lastIndex]) // -> 100
}

{
   
   const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
   ] // List of web technologies
   
   console.log(webTechs)        // all the array items
   console.log(webTechs.length) // => to know the size of the array, which is 7
   console.log(webTechs[0])     //  -> HTML
   console.log(webTechs[6])     //  -> MongoDB
   
   let lastIndex = webTechs.length - 1
   console.log(webTechs[lastIndex]) // -> MongoDB
}

{
   const countries = [
      'Albania',
      'Bolivia',
      'Canada',
      'Denmark',
      'Ethiopia',
      'Finland',
      'Germany',
      'Hungary',
      'Ireland',
      'Japan',
      'Kenya'
   ] // List of countries
    
   console.log(countries)      // -> all countries in array
   console.log(countries[0])   //  -> Albania
   console.log(countries[10])  //  -> Kenya

   let lastIndex = countries.length - 1;
   console.log(countries[lastIndex]) //  -> Kenya
}

{
   const shoppingCart = [
      'Milk',
      'Mango',
      'Tomato',
      'Potato',
      'Avocado',
      'Meat',
      'Eggs',
      'Sugar'
   ] // List of food products
   
   console.log(shoppingCart) // -> all shoppingCart in array
   console.log(shoppingCart[0]) //  -> Milk
   console.log(shoppingCart[7]) //  -> Sugar
   
   let lastIndex = shoppingCart.length - 1;
   console.log(shoppingCart[lastIndex]) //  -> Sugar
}