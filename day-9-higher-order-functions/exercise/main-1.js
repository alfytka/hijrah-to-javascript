{
   const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Estonia']
   const names = ['Alfitka', 'Haerul', 'Kurniawan', 'Axsa']
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   const products = [
      { product: 'banana', price: 3 },
      { product: 'mango', price: 6 },
      { product: 'potato', price: ' ' },
      { product: 'avocado', price: 8 },
      { product: 'coffee', price: 10 },
      { product: 'tea', price: '' }
   ]

   const country = countries.forEach((country) => console.log(country.toUpperCase()))
   const whoName = names.map((name) => console.log(name.toUpperCase()))
   const filterCountries = countries.filter((country) => country.includes('land'))
   console.log(filterCountries)
   const countNum = numbers.reduce((acc, cur) => acc + cur, 0) // let sum = 0; sum += cur
   console.log(countNum)

   const getProduct = products.filter((product) => 
      product.product.includes('o')
   )
   console.log(getProduct)

   function logCountry(country) {
      console.log(country)
   }

   countries.forEach(logCountry)

   const upperCaseNames = names.map((name) => {
      return name.toUpperCase()
   })

   console.log(upperCaseNames)

   const filteredNumbers = numbers.filter((number) => {
      return number % 2 === 0
   })

   console.log(filteredNumbers)

   const sumOfNumbers = numbers.reduce((acc, cur) => {
      return acc + cur
   }, 0)

   console.log(sumOfNumbers)

   // ------------

   const eachCountry = countries.forEach((country) => {
      console.log(country)
   })
   
   const eachName = names.forEach((name) => {
      console.log(name)
   })

   const eachNumber = numbers.forEach((number) => {
      console.log(number)
   })

   const upperCaseCountry = countries.map((country) => {
      return country.toUpperCase()
   })
   console.log(upperCaseCountry)

   const lengthCountry = countries.map((country) => {
      return country.length
   })
   console.log(lengthCountry)

   const squareNum = numbers.map((number) => {
      return number * number
   })
   console.log(squareNum)

   const namesToUpperCase = names.map((name) => {
      return name.toUpperCase()
   })
   console.log(namesToUpperCase)

   const productsPrice = products.map((product) => {
      return product.price
   })
   console.log(productsPrice)

   const filteredCountries = countries.filter((country) => {
      return country.includes('land')
   })
   console.log(filteredCountries)

   const countriesHaveSixChar = countries.filter((country) => {
      return country.length === 6
   })
   console.log(countriesHaveSixChar)

   const haveMoreThanSix = countries.filter((country) => {
      return country.length >= 6
   })
   console.log(haveMoreThanSix)

   const countriesStartsWithE = countries.filter((country) => {
      return country.startsWith('E')
   })
   console.log(countriesStartsWithE)

   const productsOnlyHaveValue = products.filter((product) => {
      return product.price !== '' && product.price !== ' '
   })
   console.log(productsOnlyHaveValue)

   const getStringLists = (arr) => {
      arr.forEach((e) => {
         console.log(e)
      })
   }

   getStringLists(names)

   const useReduce = numbers.reduce((acc, cur) => {
      return acc + cur
   }, 0)
   console.log(useReduce)

   const reduceCountries = countries.reduce((sentence, country, index) => {
      if (index === 0) {
         return country
      } else if (index === countries.length - 1) {
         return `${sentence}, and ${country}`
      } else {
         return `${sentence}, ${country}`
      }
   }, '')
   const filaSentence = `${reduceCountries} are north European countries.`
   console.log(filaSentence)

   const someNames = names.some((name) => {
      return name.length > 7
   })
   console.log(someNames)

   const everyCountries = countries.every((country) => {
      return country.includes('land')
   })
   console.log(everyCountries)

   const findCountries = countries.find((country) => {
      return country.length === 6
   })
   console.log(findCountries)
   
   const findIndexCountries = countries.findIndex((country) => {
      return country.length === 6
   })
   console.log(findIndexCountries)

   const findNorway = countries.findIndex((country) => {
      return country.includes('Norway')
   })
   console.log(findNorway)

   const findRussia = countries.findIndex((country) => {
      return country.includes('Russia')
   })
   console.log(findRussia)

}