console.log('---------------------exercise------------------------')
{
   let userInput = prompt('Enter you age')
   if (userInput >= 18) {
      console.log(`Enter your age: ${userInput}`)
      console.log(`You are old enough to drive.`)
   } else {
      console.log(`Enter your age: ${userInput}`)
      console.log(`You are left with ${18 - userInput} years to drive.`)
   }
}




