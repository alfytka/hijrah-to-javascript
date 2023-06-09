{
   const solveLinEquation = (a, b, n) => {
      for (let i = 0; i * a <= n; i++) {
         if ((n - (i * a)) % b == 0) {
            console.log(`x = ${i}, y = ${(n - (i * a)) / b}`)
            return
         }
      }
   }

   console.log(solveLinEquation(2, 3, 7))

   const solveQuadEquation = (a, b, c) => {
      let result = (((-1 * b) + Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a))
      let result2 = (((-1 * b) - Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a))

      return `${result} \n${result2}`
   }

   console.log(solveQuadEquation(1, 4 ,4))

   const printArray = (arr) => {
      const newArr = []
      for (const element of arr) {
         newArr.push(element)
      }
      return newArr
   }

   const arr = ['Indonesia', 'Singapore', 'Thailand', 'Vietnam', 'Malaysia']
   console.log(printArray(arr))

   const showDateTime = () => {
      const years = new Date().getFullYear()
      const months = new Date().getMonth()
      const dates = new Date().getDate()
      const times = new Date().getHours()
      const minutes = new Date().getMinutes()
      return `${dates}/${months}/${years} ${times}:${minutes}`
   }

   console.log(showDateTime())

   const swapValues = (x, y) => {
      let i = x
      x = y
      y = i
      console.log(`x = ${x}, y = ${y}`)
   }

   swapValues(4, 5)

   const reverseArray = (arr) => {
      const newArr = []
      for (let i = arr.length - 1; i >= 0; i--) {
         newArr.push(arr[i])
      }
      return newArr
   }

   console.log(reverseArray([1, 2, 3, 4, 5]))
   console.log(reverseArray(['A', 'B', 'C']))

   const capitalizeArray = (arr) => {
      const newArr = []
      for (const element of arr) {
         newArr.push(element.toUpperCase())
      }
      return newArr
   }

   const webTechs = ['HTML', 'CSS', 'JS', 'React', 'MongoDB']
   console.log(capitalizeArray(webTechs))

   const addItem = (item) => {
      const mernStack = ['MongoDB', 'Express', 'React']
      mernStack.push(item)
      return mernStack
   }

   console.log(addItem('Next'))

   const removeItem = (i) => {
      const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Vue']
      return frontEnd.splice(0, i)
   }

   console.log(removeItem(4))

   const sumOfNumbers = (num) => {
      let sum = 0
      for (const element of num) {
         sum += element
      }
      return sum
   }

   console.log(sumOfNumbers([1, 2, 3, 4, 5]))

   let oddArr = []
   for (let i = 0; i < 20; i++) {
      if (i % 2 === 0) {
         continue
      }
      oddArr.push(i)
   }

   console.log(oddArr)

   const sumOfOdds = (odds) => {
      let odd = 0
      for (const element of odds) {
         odd += element
      }
      return odd
   }

   console.log(sumOfOdds(oddArr))

   let evenArr = []
   for (let i = 0; i < 20; i++) {
      if (i % 2 === 1) {
         continue
      }
      evenArr.push(i)
   }
   
   console.log(evenArr)

   const sumOfEven = (evenArr) => {
      let even = 0
      for (const element of evenArr) {
         even += element
      }
      return even
   }

   console.log(sumOfEven(evenArr))

   const evenAndOdds = (number) => {
      let oddNum = [], evenNum = []
      for (let i = 0; i <= number; i++) {
         if (i % 2 === 0) {
            evenNum.push(i)
            continue
         }
         oddNum.push(i)
      }
      return `The number of odds are ${oddNum.length}\nThe number of odds are ${evenNum.length}`
   }

   console.log(evenAndOdds(100))

   const sumFunc = (...args) => {
      let sum = 0
      for (const e of args) {
         sum += e
      }
      return sum
   }

   console.log(sumFunc(1, 2, 3))
   console.log(sumFunc(1, 2, 3, 4))

   const randomUserIp = () => {
      return `${Math.floor(Math.random() * 256) + 1}.${Math.floor(Math.random() * 256) + 1}.${Math.floor(Math.random() * 256) + 1}.${Math.floor(Math.random() * 256) + 1}`
   }

   console.log(randomUserIp())

   const randomMacAddress = () => {
      hexDigits = '0123456789ABCDEF'
      let macAddress = ''
      for (let i = 0; i < 6; i++) {
         macAddress += hexDigits.charAt(Math.round(Math.random() * 15))
         macAddress += hexDigits.charAt(Math.round(Math.random() * 15))
         if (i != 5) {
            macAddress += ':'
         }
      }
      return macAddress
   }

   console.log(randomMacAddress())

   const randomHexaNumberGenerator = (num) => {
      let chars = '0123456789abcdef'
      let hex = '#'
      for (let i = 0; i < 6; i++) {
         let randomIndex = Math.floor(Math.random() * chars.length)
         hex += chars.charAt(randomIndex)
      }
      return hex
   }

   console.log(randomHexaNumberGenerator())

   const userIdGenerator = () => {
      let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      let userId = ''
      for (let i = 0; i < 7; i++) {
         let randomIndex = Math.floor(Math.random() * chars.length)
         userId += chars.charAt(randomIndex)
      }
      return userId
   }

   console.log(userIdGenerator())
   
}