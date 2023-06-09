// function with one parameter
{
   function areaOfCircle(r) {
      let area = Math.PI * r * r
      return area
   }

   console.log(areaOfCircle(10)) // should be called with one argument

   function square(number) {
      return number * number
   }

   console.log(square(10))
}

// function with two parameters
{
   function sumTwoNumbers(numOne, numTwo) {
      let sum = numOne + numTwo
      console.log(sum)
   }
   sumTwoNumbers(10, 20) // calling functions

   function sumNumbers(numOne, numTwo) {
      let sum = numOne + numTwo
      return sum
   }
   console.log(sumNumbers(10, 20))

   function printFullName(firstName, middleName) {
      return `${firstName} ${middleName}`
   }
   console.log(printFullName('Alfitka', 'Haerul'))
}

// function with many parameters
{
   function sumArrayValues(arr) {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
         sum += arr[i]
      }
      return sum
   }
   const numbers = [1, 2, 3, 4, 5]
   // calling a function
   console.log(sumArrayValues(numbers))

   const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius
      return area
   }
   console.log(areaOfCircle(10))
}

// function with unlimited number of parameters
{
   function sumAllNums() {
      console.log(arguments)
   }
   sumAllNums(1, 2, 3, 4)

   {
      function sumAllNums() {
         let sum = 0
         for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
         }
         return sum
      }
      console.log(sumAllNums(1, 2, 3, 4)) // 10
      console.log(sumAllNums(10, 20, 13, 40, 10)) // 93
      console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) // 173
   }
}

// unlimited number of parameters in arrow function
{
   const sumAllNums = (...args) => {
      // console.log(arguments), arguments object not found in arrow function
      // instead we use a parameter followed by spread operator (...)
      console.log(args)
   }
   sumAllNums()

   const sumAllNumbers = (...args) => {
      let sum = 0
      for (const element of args) {
         sum += element
      }
      return sum
   }

   console.log(sumAllNumbers(1, 2, 3, 4)) // 10
   console.log(sumAllNumbers(10, 20, 13, 40, 10)) // 93
   console.log(sumAllNumbers(15, 20, 30, 25, 10, 33, 40)) // 173
}