{
   const numbers = [1, 2, 3, 4, 5]

   console.log(numbers.indexOf(5))
   console.log(numbers.indexOf(0))
   console.log(numbers.indexOf(1))
   console.log(numbers.indexOf(6))
}

{
   const fruits = ['banana', 'orange', 'mango', 'lemon']
   let index = fruits.indexOf('banana') // 0

   if (index === -1) {
      console.log('This fruit does not exist in the array')
   } else {
      console.log('This fruit does exist in the array')
   }

   index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

   // let us check if an avocado exist in the array
   let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
   if(indexOfAvocado === -1){
      console.log('This fruit does not exist in the array')  
   } else {
      console.log('This fruit does exist in the array')
   }
   // This fruit does not exist in the array
}