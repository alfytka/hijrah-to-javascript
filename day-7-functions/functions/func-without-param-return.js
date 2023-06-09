function printFullName() {
   let firstName = 'Alfitka'
   let middleName = 'Haerul'
   let space = ' '
   let fullName = firstName + space + middleName
   console.log(fullName)
}

printFullName() // calling a function

{
   // function returning value
   function printFullName() {
      let firstName = 'Alfitka'
      let middle = 'Haerul'
      let space = ' '
      let fullName = firstName + space + middle
      return fullName
   }

   console.log(printFullName())

   function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total
   }

   console.log(addTwoNumbers())
}