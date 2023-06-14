{
   // arr.forEach(function (element, index, arr) {
   // console.log(index, element, arr)
   // })
   // // The above code can be written using arrow function
   // arr.forEach((element, index, arr) => {
   // console.log(index, element, arr)
   // })
   // // The above code can be written using arrow function and explicit return
   // arr.forEach((element, index, arr) => console.log(index, element, arr))
}

// forEach
{
   const numbers = [1, 2, 3, 4, 5]
   numbers.forEach(num => console.log(num))
   
   let sum = 0
   numbers.forEach(num => sum += num)
   console.log(sum)

   const countries = ['Indonesia', 'Malaysia', 'Singapore', 'Thailand', 'Vietnam']
   countries.forEach((element) => console.log(element.toUpperCase()))
}

// const modifiedArray = arr.map(function (element, index, arr) {
//    return element
// })
// Map
{
   const numbers = [1, 2, 3 ,4, 5]
   const numbersSquare = numbers.map((num) => num * num)

   console.log(numbersSquare)

   const names = ['Alfitka', 'Sasika', 'Farhan', 'Elfan', 'Khikmal']
   const namesToUpperCase = names.map((name) => name.toUpperCase())

   console.log(namesToUpperCase)

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
      'Kenya',
   ]

   const countriesToUpperCase = countries.map((country) => country.toUpperCase())
   console.log(countriesToUpperCase)

   /* 
      // arrow function
      const countriesToUpperCase = countries.map((country) => {
         return country.toUpperCase()
      })
      // explicit return arrow function
      const countriesToUpperCase = countries.map((country) => country.toUpperCase())
   */

   const threeLetter = countries.map((country) => 
      country.toUpperCase().slice(0, 3)
   )
   console.log(threeLetter)
}

// Filter
{
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
      'Kenya',
   ]

   const countriesContainingLand = countries.filter((country) => 
      country.includes('land')
   )
   console.log(countriesContainingLand)

   const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
   console.log(countriesEndsByia)

   const countriesHaveFiveLetters = countries.filter((country) => 
      country.length === 5
   )
   console.log(countriesHaveFiveLetters)

   const scores = [
      { name: 'Alfitka', score: 75 },
      { name: 'Elfan', score: 98 },
      { name: 'Wahyu', score: 90 },
      { name: 'Abdul', score: 89 },
      { name: 'Alex', score: 100 },
      { name: 'Owel', score: 50 }
   ]

   const scoresGreaterEighty = scores.filter((score) => 
      score.score > 80
   )

   console.log(scoresGreaterEighty)
}

// arr.reduce((acc, cur) => {
//    // some operations goes here before returning a value
//   return 
//  }, initialValue)
// Reduce
{
   const numbers = [1, 2, 3, 4, 5]
   const sum = numbers.reduce((acc, cur) => acc + cur, 0)

   console.log(sum)
}

// Every
{
   const names = ['Alfitka', 'Fahmi', 'Ilham', 'Firman', 'Elfan']
   const areAllStr = names.every((name) => typeof name === 'string')

   console.log(areAllStr)

   const bools = [true, true, true, true]
   const areAllTrue = bools.every((b) => b === true)

   console.log(areAllTrue)
}

// Find 
{
   const ages = [24, 22, 25, 32, 35, 18]
   const age = ages.find((age) => age < 20)

   console.log(age)

   const names = ['Alfitkaaa', 'Elfan', 'Khikmal', 'Wahyu']
   const result = names.find((name) => name.length > 7) 
   
   console.log(result)

   const scores = [
      { name: 'Asabeneh', score: 95 },
      { name: 'Mathias', score: 80 },
      { name: 'Elias', score: 50 },
      { name: 'Martha', score: 85 },
      { name: 'John', score: 100 },
   ]

   const score = scores.find((user) => user.score > 80)
   console.log(score)
}

// findIndex
{
   const names = ['Asabeneh', 'Alex', 'Ervin', 'Brando']
   const ages = [24, 22, 25, 32, 35, 18]

   const result = names.findIndex((name) => name.length > 7)
   console.log(result)

   const age = ages.findIndex((age) => age < 20)
   console.log(age)
}

// some
{
   const names = ['Alfitka', 'Haerul', 'Kurniawan', 'Devan']
   const bools = [true, true, true, true]

   const areSomeTrue = bools.some((b) => b === true)
   console.log(areSomeTrue)

   const areAllStr = names.some((name) => typeof name === 'number')
   console.log(areAllStr)
}

// sort
{
   // sorting string values
   const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
   console.log(products.sort())
   console.log(products) //Now the original products array  is also sorted

   // sorting numeric values
   const numbers = [9.81, 3.14, 100, 37]
   console.log(numbers.sort()) // incorrect

   // this one :)
   numbers.sort(function(a, b) {
      return a - b // ascending
   })
   console.log(numbers) // good

   numbers.sort(function(a, b) {
      return b - a // descending
   })
   console.log(numbers)

   // objArr.sort(function (a, b) {
   //    if (a.key < b.key) return -1
   //    if (a.key > b.key) return 1
   //    return 0
   // })

   const users = [
      { name: 'Alfitka', age: 18 },
      { name: 'Fahmi', age: 25 },
      { name: 'Elfan', age: 21 },
      { name: 'Elsa', age: 15 },
   ]

   users.sort(function(a, b) {
      if (a.age < b.age) return -1
      if (a.age > b.age) return 1
   })

   console.log(users) // sort ascending
}