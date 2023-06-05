{
   const numbers = [1, 2, 3, 4, 5]
   numbers[0] = 10
   numbers[1] = 20

   console.log(numbers) // [10, 20, 3, 4, 5]

   const countries = [
      'Albania',
      'Bolivia',
      'Canada',
      'Denmark',
      'Ethiopia',
      'Finland',
      'Germany',
      'Hungary',
      'Ireland',
      'Japan',
      'Kenya'
   ]

   console.log(countries)
   
   countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
   let lastIndex = countries.length - 1
   countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
   
   console.log(countries)
}