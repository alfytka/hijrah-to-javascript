let string = ''
for (let i = 10; i > 0; i--) {
   for (let j = 10; j > 0; j--) {
      if (j > i) {
         string += ' '
      } else {
         string += '*'
      }
   }
   string += '\n'
}
console.log(string)
