{
   // 1) Iterate 0 to 10 using for loop, do the same using while and do while loop

   for (let i = 0; i <= 10; i++) {
      console.log(i)
   }

   let i = 0
   while (i <= 10) {
      console.log(i)
      i++
   }

   let j = 0
   do {
      console.log(j)
      j++
   } while (j <= 10)

}

{
   // 2) Iterate 10 to 0 using for loop, do the same using while and do while loop

   for (let i = 10; i >= 0; i--) {
      console.log(i)
   }

   let i = 10
   while (i >= 0) {
      console.log(i)
      i--
   }

   let j = 10
   do {
      console.log(j)
      j--
   } while (j >= 0)

}

{
   // 3) Iterate 0 to n using for loop
   for (let i = 0; i <= 100; i++) {
      console.log(i)
   }
}

{
   // 4) Write a loop that makes the following pattern using console.log():
   // #
   // ##
   // ###
   // ####
   // #####
   // ######
   // #######
   for (let i = 1; i <= 7; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
         line += '#'
      }
      console.log(line)
   }

   let i = 1
   while (i <= 7) {
      let line = ''
      let j = 1
      while (j <= i) {
         line += '#'
         j++
      }
      console.log(line)
      i++
   }

   let a = 1
   do {
      let line = ''
      let b = 1
      do {
         line += '#'
         console.log(line)
         b++
      } while (b <= a)
      a++
   } while (a <= 7)
   // #
   // ##
   // ###
   // ####
   // #####
   // ######
}

{
   // 5) Use loop to print the following pattern:

   for (let i = 0; i <= 10; i++) {
      console.log(`${i} x ${i} = ${i * i}`)
   }
}

{
   // 6) Using loop print the following pattern

   for (let i = 0; i <= 10; i++) {
      console.log(i)
   }

   for (let i = 0; i <= 10; i++) {
      console.log(i ** 2)
   }

   for (let i = 0; i <= 10; i++) {
      console.log(i ** 3)
   }

   // OR

   console.log('i   i^2    i^3')
   for (let i = 0; i <= 10; i++) {
      let x = i * i
      let j = i * i * i
      console.log(`${i}   ${x}    ${j}`)
   }
} 

{
   // 7) Use for loop to iterate from 0 to 100 and print only even numbers
   // 8) Use for loop to iterate from 0 to 100 and print only odd numbers

   for (let i = 0; i <= 100; i++) {
      if (i % 2 == 1) {
         continue
      }
      console.log(i)
   }

   for (let i = 0; i <= 100; i++) {
      if (i % 2 == 0) {
         continue
      }
      console.log(i)
   }
}

{
   // 9) Use for loop to iterate from 0 to 100 and print only prime numbers

   for (let i = 2; i <= 100; i++) {
      let isPrime = true
      for (let j = 2; j <= Math.sqrt(i); j++) {
         if (i % j === 0) {
            isPrime = false
            break
         }
      }
      if (isPrime) {
         console.log(i)
      }
   }
}

{
   // 10) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

   let j = 0
   for (let i = 0; i <= 100; i++) {
      j += i
   }
   console.log(`The sum of all numbers from 0 to 100 is ${j}`)
}

{
   // 11) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
   // 12) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

   let even = 0
   let odd = 0
   for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
         even += i
         continue
      }
      if (i % 2 === 1) {
         odd += i
         continue
      }
   }
   console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}`)
   const newArr = [even, odd]
   console.log(newArr)
}

{
   // 13) Develop a small script which generate array of 5 random numbers
   // 14) Develop a small script which generate array of 5 random numbers and the numbers must be unique

   const list = []
   for (let i = 0; i < 5; i++) {
      let randNum = Math.floor(Math.random() * 100) + 1
      list.push(randNum)
   }
   console.log(list)

   const random = []
   for (let i = random.length; i < 5; i++) {
      let randNum = Math.floor(Math.random() * 100) + 1
      if (!random.includes(randNum)) {
         random.push(randNum)
      }
   }
   console.log(random)

   //  OR (Recommend)

   const newArr = []
   while (newArr.length < 5) {
      let randNum = Math.floor(Math.random() * 100) + 1
      if (!newArr.includes(randNum)) {
         newArr.push(randNum)
      }
   }
   console.log(newArr)
}

{
   // 15) Develop a small script which generate a six characters random id:

   // function version
   function randomChar() {
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let id = ''
      for (let i = 0; i < 6; i++) {
         let randomIndex = Math.floor(Math.random() * chars.length)
         id += chars.charAt(randomIndex)
      }
      return id
   }
   let randomId = randomChar()
   console.log(randomId)

   {
      // not function version
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let id = ''
      for (let i = 0; i < 6; i++) {
         let randomIndex = Math.floor(Math.random() * chars.length)
         id += chars.charAt(randomIndex)
      }
      console.log(id)

   }
}