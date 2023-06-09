{
   const userIdGenerator = () => {
      let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      let userId = ''
      for (let i = 0; i < 5; i++) {
         let randomIndex = Math.floor(Math.random() * chars.length)
         userId += chars.charAt(randomIndex)
      }
      return userId
   }

   console.log(userIdGenerator())

   // const userIdGeneratedByUser = () => {
   //    let numchars = parseInt(prompt('The number of characters'))
   //    let numIds = prompt('The number of ids')
   //    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   //    let userId = ''
   //    for (let i = 0; i < numchars; i++) {
   //       let generate = Math.floor(Math.random() * numIds.length)
   //       userId += numIds.charAt(generate)
   //    }
   //    return userId
   // }

   // console.log(userIdGeneratedByUser())

   const rgbColorGenerator = () => {
      let r = Math.floor(Math.random() * 256) + 1
      let g = Math.floor(Math.random() * 256) + 1
      let b = Math.floor(Math.random() * 256) + 1
      return `rgb(${r},${g},${b})`
   }

   console.log(rgbColorGenerator())

   const arrayOfHexaColors = () => {
      let hexColorArr = [], hexaCodes = '0123456789ABCDEF', loopCount = Math.floor(Math.random() * 50)
      for (let i = 1; i <= loopCount; i++) {
         let hexChars = []
         for (let j = 0; j < 6; j++) {
            hexChars.push(hexaCodes[Math.floor(Math.random() * hexaCodes.length) - 1])
         }
         hexColorArr.push('#' + hexChars.join(''))
      }
      return hexColorArr
   }

   console.log(arrayOfHexaColors())

   const arrayOfRgbColors = (numColors = 5) => {
      let rgbColors = []
      for (let i = 0; i < numColors; i++) {
         let r = Math.floor(Math.random() * 256)
         let g = Math.floor(Math.random() * 256)
         let b = Math.floor(Math.random() * 256)
         rgbColors.push([r, g, b])
      }
      return rgbColors
   }

   console.log(arrayOfRgbColors())

   const convertHexaToRgb = (hexColor) => {
      if (hexColor.startsWith('#')) {
         hexColor = hexColor.slice(1)
      }

      let r = parseInt(hexColor.substring(0, 2), 16)
      let g = parseInt(hexColor.substring(2, 4), 16)
      let b = parseInt(hexColor.substring(4, 6), 16)

      return 'rgb(' + r + ', ' + g + ', ' + b + ')'
   }

   console.log(convertHexaToRgb('#f29f1f'))

   const convertRgbToHexa = (rgbColor) => {
      // extract
      let rgbValues = rgbColor.match(/\d+/g)

      let r = parseInt(rgbValues[0])
      let g = parseInt(rgbValues[1])
      let b = parseInt(rgbValues[2])

      let hexRed = r.toString(16).padStart(2, '0')
      let hexGreen = g.toString(16).padStart(2, '0')
      let hexBlue = b.toString(16).padStart(2, '0')

      return `#${hexRed}${hexGreen}${hexBlue}`
   }

   console.log(convertRgbToHexa('rgb(252, 155, 205)'))

   const generateColors = (whatColors, nums) => {
      if (whatColors === 'rgb') {
         let rgbColor = []
         for (let i = 0; i < nums; i++) {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            rgbColor.push([`rgb(${r}, ${g}, ${b})`])
         }
         return rgbColor
      } else if (whatColors === 'hexa') {
         let hexColorArr = [], hexCodes = '0123456789ABCDEF'
         for (let i = 1; i <= nums; i++) {
            let hexColors = []
            for (let j = 0; j < 6; j++) {
               hexColors.push(hexCodes[Math.floor(Math.random() * hexCodes.length) - 1])
            }
            hexColorArr.push('#' + hexColors.join(''))
         }
         return hexColorArr
      }
   }
   
   console.log(generateColors('rgb', 2))

   const shuffleArray = (arr) => {
      let shuffledArr = arr.slice()
      for (let i = shuffledArr.length - 1; i > 0; i--) {
         let randNum = Math.floor(Math.random() * (i + 1))
         let temp = shuffledArr[i]
         shuffledArr[i] = shuffledArr[randNum]
         shuffledArr[randNum] = temp
      }
      return shuffledArr
   }

   const mernStack = ['MongoDB', 'Express', 'React', 'Next']
   const numbers = [1, 2, 3, 4, 5]
   console.log(shuffleArray(mernStack))

   const factorial = (number) => {
      if (number === 0 || number === 1) {
         return 1
      } else {
         return number * factorial(number - 1)
      }
   }

   console.log(factorial(5))

   const isEmpty = (value) => {
      if (typeof value === 'undefined' || value === null) {
         return true
      } else if (typeof value === 'string' || Array.isArray(value)) {
         return value.length === 0
      } else if (typeof value === 'object') {
         return Object.keys(value).length === 0
      }
      return false
   }

   console.log(isEmpty(''))

   const sum = (...args) => {
      let calculate = 0
      for (const e of args) {
         calculate += e
      }
      return calculate
   }

   console.log(sum(1, 2, 3, 4, 5))

   const sumOfArrayItems = (array) => {
      let sum = 0
      for (let i = 0; i < array.length; i++) {
         if (typeof array[i] !== 'number') {
            return 'invalid array: all items should be numbers.'
         }

         sum += array[i]
      }
      return sum
   }

   const numbs = [1, 2, 3, 4, 5]
   const numbsnt = [1, 2, "3", 4, 5]
   console.log(sumOfArrayItems(numbs))

   const average = (array) => {
      let sum = 0
      let count = 0
      for (let i = 0; i < array.length; i++) {
         if (typeof array[i] !== 'number') {
            return 'invaid array: all items shoudl be numbers.'
         }
         sum += array[i]
         count++
      }
      if (count === 0) {
         return 'Empty array: cannot calculate average of an empty array.'
      }
      return sum / count
   }

   const num = [1, 2, 3, 4, 5]
   console.log(average(num))

   const modifyArray = (array) => {
      if (array.length < 5) {
         console.log('not found')
      } 
      array[4] = array[4].toUpperCase()
      return array
      
   }

   console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
   console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
}