{
   let a = 4
   let b = 3

   // using if else statement
   if (a > b) {
      console.log('a is greater than b')
   } else {
      console.log('a is less than b')
   }
   
   // using ternary operation
   a > b ? console.log('a is greater than b') : console.log('a is less than b')
}

{
   // let number = prompt('Enter a number')

   // if (number % 2 == 0) {
   //    console.log(`Enter a number: ${number}\n${number} is an even number`)
   // } else {
   //    console.log(`Enter a number: ${number}\n${number} is an odd number`)
   // }
}

{
   let score = 30
   switch (true) {
      case score >= 80:
         console.log('Your grade is: A');
         break;
      case score >= 70:
         console.log('Your grade is: B');
         break;
      case score >= 60:
         console.log('Your grade is: C');
         break;
      case score >= 50:
         console.log('Your grade is: D');
         break;
      default:
         console.log('Your grade is: F')
   }
}

// ALTERNATIF PERTAMA: I THINK KURANG TEPAT, LET ME CHECK SECOND ALTERNATIVE IN THE BOTTOM
{
   // let season = prompt('Enter season')
   // let seasons = season.toLowerCase()

   // if (seasons == 'autumn') {
   //    console.log('September, October, November');
   // } else if (seasons == 'winter') {
   //    console.log('December, January, February');
   // } else if (seasons == 'spring') {
   //    console.log('March, April, May');
   // }  else if (seasons == 'summer') {
   //    console.log('June, July, August');
   // } else {
   //    console.log('Invalid input')
   // }
   
   // switch (true) {
   //    case seasons == 'autumn':
   //       console.log('September, October, November');
   //       break;
   //    case seasons == 'winter':
   //       console.log('December, January, February');
   //       break;
   //    case seasons == 'spring':
   //       console.log('March, April, May');
   //       break;
   //    case seasons == 'summer':
   //       console.log('June, July, August');
   //       break;
   //    default:
   //       console.log('Invalid input');
   // }
}

// SECOND ALTERNATIVE, IT IS BETTER I THINK
{
   let month = prompt('Enter month to know the season')
   let mnth = month.toLowerCase()

   if (mnth === 'september' || mnth === 'october' || mnth === 'november') {
      console.log('Autumn')
   } else if (mnth === 'december' || mnth === 'january' || mnth === 'february') {
      console.log('Winter')
   } else if (mnth === 'march' || mnth === 'april' || mnth === 'may') {
      console.log('Spring')
   } else if (mnth === 'june' || mnth === 'july' || mnth === 'august') {
      console.log('Summer')
   }
}