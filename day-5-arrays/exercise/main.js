{
   // 1) diclare an empty array
   const languages = []

   // 2) diclare an array with more than 5 number of elements
   const brands = ['Apple', 'Samsung', 'Oppo', 'Vivo', 'Asus', 'Advan', 'Infinix']
   
   // 3) find the length of my array
   let lengthOfBrands = brands.length
   console.log(lengthOfBrands)

   // 4) get the first item, middle and the last
   console.log(brands[0])
   console.log(brands[3])
   let lastIndex = brands.length - 1
   console.log(brands[lastIndex])

   // 5) 
   const mixedDataTypes = [
      'Alfitka',
      'Web Dev',
      18,
      {hobby: 'Programming', city: 'Banjar', country: 'Indonesia'},
      ['30', 'Desember', 2004],
      2023
   ]

   console.log(mixedDataTypes)
   console.log(mixedDataTypes.length)
}

{
   // 6) declare an array variable
   let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

   // 7) print out
   console.log(itCompanies)

   // 8) print the number of companies
   console.log(itCompanies.length)

   // 9) print the first company, middle and the last
   console.log(itCompanies[0])
   console.log(itCompanies[3])
   let lastIndex = itCompanies.length - 1
   console.log(itCompanies[lastIndex])

   // 10) print out each company
   console.log(itCompanies[0])
   console.log(itCompanies[1])
   console.log(itCompanies[2])
   console.log(itCompanies[3])
   console.log(itCompanies[4])
   console.log(itCompanies[5])
   console.log(itCompanies[6])
}

{
   let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

   // 11) Change each company name to uppercase one by one and print them out
   console.log(itCompanies[0].toUpperCase())
   console.log(itCompanies[1].toUpperCase())
   console.log(itCompanies[2].toUpperCase())
   console.log(itCompanies[3].toUpperCase())
   console.log(itCompanies[4].toUpperCase())
   console.log(itCompanies[5].toUpperCase())
   console.log(itCompanies[6].toUpperCase())

   // 12) 
   let text = itCompanies.join(' ')
   let txt = text.concat(' are big IT companies')
   console.log(txt)

   // 13)
   let check = itCompanies.indexOf('Apple')

   if (check === -1) {
      console.log('company is not found')
   } else {
      console.log(itCompanies[check])
   }

   // 14) filter out
   console.log(itCompanies[0])
   console.log(itCompanies[1])
   console.log(itCompanies[2])
   // or
   // itCompanies.pop()
   // itCompanies.pop()
   // itCompanies.pop()
   // itCompanies.pop()
   // console.log(itCompanies)

   // 15) sort
   console.log(itCompanies.sort())
}

{
   let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
   
   // 16) reverse the array
   itCompanies.sort()
   let reversed = itCompanies.reverse()
   console.log(reversed)
   
   {
      let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
      console.log(itCompanies)
      // 17) slice out the first 3 companies
      console.log(itCompanies.slice(3))

      // 18) slice out the last 3 companies
      console.log(itCompanies.slice(0,4))

      // 19) slice out the middle 
      console.log(itCompanies.slice(3,4))

      // 20) remove the first it company from the array
      // itCompanies.shift()
      // console.log(itCompanies)

      // 21) remove the middle it company or companies in the array
      itCompanies.splice(3,1)
      console.log(itCompanies)

      // 22) remove the last it company from the array
      itCompanies.pop()
      console.log(itCompanies)

      itCompanies.splice(0)
      console.log(itCompanies)

   }
}