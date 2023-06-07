{
   const numbers = [1, 2, 3, 4, 5]
   for (const num of numbers) {
      console.log(num)
   }

   for (const num of numbers) {
      console.log(num * num)
   }

   let sum = 0
   for (const num of numbers) {
      sum += num
   }
   console.log(sum)

   const webTechs = [
      'HTML',
      'CSS',
      'JavaScript', 
      'React',
      'Redux',
      'Node',
      'MongoDB'
   ]

   for (const tech of webTechs) {
      console.log(tech.toUpperCase())
   }

   for (const tech of webTechs) {
      console.log(tech[0]) // get only the first letter of each element, H C J R N M
   }

   const countries = ['Indonesia', 'Thailand', 'Singapore', 'Vietnam', 'Malaysia']
   const newArr = []
   for (const country of countries) {
      newArr.push(country.toUpperCase())
   }
   console.log(newArr)
}