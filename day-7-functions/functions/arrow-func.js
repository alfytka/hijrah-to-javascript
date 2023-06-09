{
   // This is how we write normal or declaration function
   // Let us change this declaration function to an arrow function
   function square(n) {
      return n * n
   }

   console.log(square(2)) // 4

   const squares = n => {
      return n * n
   }

   console.log(squares(2)) // -> 4

   // if we have only one line in the code block, it can be written as follows, explicit return
   const squared = n => n * n // -> 4
   console.log(squared(2))
}

{
   const changeToUpperCase = arr => {
      const newArr = []
      for (const element of arr) {
         newArr.push(element.toUpperCase())
      }
      return newArr
   }

   const countries = ['Indonesia', 'Thailand', 'Malaysia', 'Singapore', 'Vietnam']
   console.log(changeToUpperCase(countries))

   const printFullName = (firstName, lastName) => {
      return `${firstName} ${lastName}`
   }
   
   console.log(printFullName('Alfitka', 'Haerul'))

   // we can explicity return 
   {
      const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
      console.log(printFullName('Alfitka', 'Haerul'))
   }
}