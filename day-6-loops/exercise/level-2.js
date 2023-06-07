{
   // 1) Develop a small script which generate any number of characters random id:
   let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
   let id = ''

   for (let i = 0; i < 12; i++) {
      let random = Math.floor(Math.random() * chars.length) + 1
      id += chars.charAt(random)
   }
   console.log(id)
   
   {
      let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
      let id = ''
   
      for (let i = 0; i < 24; i++) {
         let random = Math.floor(Math.random() * chars.length) + 1
         id += chars.charAt(random)
      }
      console.log(id)
   
   }
}

{
   // 2) Write a script which generates a random hexadecimal number.

   let hexChars = '0123456789ABCDEF'
   let hex = '#'
   
   for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexChars.length)
      hex += hexChars.charAt(randomIndex)
   }
   console.log(hex)
}

{
   // 3) Write a script which generates a random rgb color number.

   let r = Math.floor(Math.random() * 256)
   let g = Math.floor(Math.random() * 256)
   let b = Math.floor(Math.random() * 256)
   console.log(`rgba(${r}, ${g}, ${b})`)
}

{
   // 4) Using the above countries array, create the following new array.

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

   let newArr = []
   for (const country of countries) {
      newArr.push(country.toUpperCase())
   }
   console.log(newArr)

   // 5) Using the above countries array, create an array for countries length'.
   let arr = []
   for (const country of countries) {
      arr.push(country.length)
   }
   console.log(arr)

   // 6) Use the countries array to create the following array of arrays:
   let array = []
   for (const country of countries) {
      let i = country.slice(0, 3).toUpperCase()
      let length = country.length
      array.push([country, i, length])
   }
   console.log(array)
}

{
   // 7) 
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
      'Iceland',
      'Japan',
      'Kenya'
   ]

   let empty = []
   for (const country of countries) {
      if (country.includes('land')) {
         empty.push(country)
         continue
      }
   }
   console.log(empty)

   // 8) 
   let countryWithIa = []
   for (const country of countries) {
      if (country.includes('ia')) {
         countryWithIa.push(country)
      }
   }
   console.log(countryWithIa)

   let countryWithMaxChar = countries[0]
   
   for (let i = 0; i < countries.length; i++) {
      let country = countries[i]
      if (country.length > countryWithMaxChar.length) {
         countryWithMaxChar = country
      }
   }
   console.log(countryWithMaxChar)

   let fiveChar = []
   
   for (let i = 0; i < countries.length; i++) {
      let country = countries[i]
      if (country.length === 5) {
         fiveChar.push(country)
      }
   }
   console.log(fiveChar)
}

{
   const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
   ]

   let longestWord = webTechs[0]

   for (let i = 0; i < webTechs.length; i++) {
      let tech = webTechs[i]
      if (tech.length > longestWord.length) {
         longestWord = tech
      }
   }
   console.log(longestWord)

   let webTechsArr = []

   for (const tech of webTechs) {
      webTechsArr.push([tech, tech.length])
   }
   console.log(webTechsArr)
}

{
   // 13) An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack 

   const mernStack = [
      'MongoDB',
      'Express',
      'React',
      'Node'
   ]

   let stack = ''
   for (const mern of mernStack) {
      stack += mern[0]
   }
   console.log(stack)

   // 14) 
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
      console.log(tech)
   }

   for (let i = 0; i < webTechs.length; i++) {
      console.log(webTechs[i])
   }

   // 15) This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
   const fruits = ['banana', 'orange', 'mango', 'lemon']
   let fruitArr = []
   for (let i = fruits.length - 1; i >= 0; i--) {
      console.log(fruits[i])
      fruitArr.push(fruits[i])
   }
   console.log(fruitArr)
}

{
   // 16) Print all the elements of array as shown below.

   const fullStack = [
      ['HTML', 'CSS', 'JS', 'React'],
      ['Node', 'Express', 'MongoDB']
   ]

   for (const stack of fullStack) {
      console.log(stack)
   }

   for (let i = 0; i < fullStack.length; i++) {
      for (let j = 0; j < fullStack[i].length; j++) {
         console.log(fullStack[i][j].toUpperCase())
      }
   }
}