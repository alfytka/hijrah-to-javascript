{
   let string = ''
   for (let i = 10; i > 0; i--) {
      for (let j = 0; j < i; j++) {
         string += '*'
      }
      string += '\n'
   }
   console.log(string)
}