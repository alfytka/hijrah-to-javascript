{
   const anonymousFun = function() {
      console.log(
         'I am an anonymous function and my value is stored in anonymousFun'
      )
   }

   const square = function(n) {
      return n * n
   }

   console.log(square(2)) // -> 4

   // (function(n) {
   //    console.log(n * n)
   // })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

   let squareNum = (function(n) {
      return n * n
   })(10)

   console.log(squareNum)

}