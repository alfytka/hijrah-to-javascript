{
   let myAge = 18
   let yourAge = prompt('Enter you age')

   if (yourAge > myAge) {
      console.log(`Enter you age: ${yourAge}\nYou are ${yourAge - myAge} years older than me.`)
   } else {
      console.log(`Enter you age: ${yourAge}\nYou are ${myAge - yourAge} years younger than me.`)
   }
}