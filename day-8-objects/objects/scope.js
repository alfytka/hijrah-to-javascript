//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
   console.log(a, b)
   if (true) {
      let a = 'Python'
      let b = 100
      console.log(a, b)
   }
   console.log(a, b)
}
letsLearnScope()
console.log(a, b) // accessible

{
   //scope.js
   let a = 'JavaScript' // is a global scope it will be found anywhere in this file
   let b = 10 // is a global scope it will be found anywhere in this file
   // Function scope
   function letsLearnScope() {
      console.log(a, b) // JavaScript 10, accessible
      let value = false
      // block scope
      if (true) {
         // we can access from the function and outside the function but 
         // variables declared inside the if will not be accessed outside the if block
         let a = 'Python'
         let b = 20
         let c = 30
         let d = 40
         value = !value
         console.log(a, b, c, d, value) // Python 20 30 40 true
      }
      // we can not access c because c's scope is only the if block
      console.log(a, b, value) // JavaScript, 10 true
   }
   letsLearnScope()
   console.log(a, b)
}

{
   function letsLearnScope() {
      var gravity = 9.81
      console.log(gravity)
   }
   // console.log(gravity), Uncaught ReferenceError: gravity is not defined
   if (true) {
      var gravity = 9.81
      console.log(gravity)
   }
   console.log(gravity)

   for (var i = 0; i < 3; i++) {
      console.log(i)
   }
   console.log(i)
}
