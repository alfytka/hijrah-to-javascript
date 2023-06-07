{
   for (let i = 0; i <= 5; i++) {
      console.log(i)
   }
   // 0, 1, 2, 3, 4, 5
   console.log('')
   
   for (let i = 5; i >= 0; i--) {
      console.log(i)
   }
   
   console.log('')

   for (let i = 0; i <= 5; i++) {
      console.log(`${i} * ${i} = ${i * i}`)
   }

   const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
   const newArr = []
   for (let i = 0; i < countries.length; i++) {
      newArr.push(countries[i].toUpperCase())
   }

   console.log(newArr)
   
   const numbers = [1, 2, 3, 4, 5]
   let sum = 0
   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
   }

   console.log(sum)
}

{
   const numbers = [1, 2, 3, 4, 5]
   const newArr = []
   let sum = 0
   for (let i = 0; i < numbers.length; i++) {
      newArr.push(numbers[i] ** 2)
   }
   
   console.log(newArr)

   const countries = ['Indonesia', 'Malaysia', 'Singapore', 'Thailand', 'Vietnam']
   const arr = []
   for (let i = 0; i < countries.length; i++) {
      arr.push(countries[i].toUpperCase())
   }

   console.log(arr)
}

{
   // while loop
   let i = 0
   while (i <= 5) {
      console.log(i)
      i++
   }

   // do while loop
   let j = 0
   do {
      console.log(j)
      j++
   } while (j <= 5)
}