{
   function fullName() {
      console.log('Alfitka Haerul Kurniawan')
   }

   fullName()

   {
      const fullName = () => {
         console.log('Alfitka Haerul Kurniawan')
      }

      fullName()
   }

   function fullNames(firstName, lastName) {
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
   }

   console.log(fullNames('Alfitka', 'Haerul'))

   {
      const fullNames = (firstName, lastName) => {
         let space = ' '
         let fullName = firstName + space + lastName
         return fullName
      }

      console.log(fullNames('Alfitka', 'Haerul'))
   }


   function addNumbers(numOne, numTwo) {
      let sum = numOne + numTwo
      return sum
   }
   
   console.log(addNumbers(5, 5))

   {
      const addNumbers = (numOne, numTwo) => {
         let sum = numOne + numTwo
         return sum
      }

      console.log(addNumbers(5, 5))
   }


   function areaOfRectangle(length, width) {
      let area = length * width
      return area
   }

   console.log(areaOfRectangle(10, 5))

   {
      const areaOfRectangle = (length, width) => {
         let area = length * width
         return area
      }

      console.log(areaOfRectangle(10, 5))
   }

   function perimeterOfRectangle(length, width) {
      let perimeter = 2 * (length + width)
      return perimeter
   }

   console.log(perimeterOfRectangle(10, 5))

   {
      const perimeterOfRectangle = (length, width) => {
         let perimeter = 2 * (length + width)
         return perimeter
      }

      console.log(perimeterOfRectangle(10, 5))
   }
   
   function volumeOfRectPrism(length, width, height) {
      let volume = length * width * height
      return volume
   }

   console.log(volumeOfRectPrism(10, 5, 8))

   {
      const volumeOfRectPrism = (length, width, height) => {
         let volume = length * width * height
         return volume
      }

      console.log(volumeOfRectPrism(10, 5, 8))
   }

   function areaOfCircle(r) {
      let area = 3.14 * r * r
      return area
   }

   console.log(areaOfCircle(10))

   {
      const areaOfCircle = (r) => {
         let area = 3.14 * r * r
         return area
      }

      console.log(areaOfCircle(10))
   }

   function circumOfCircle(r) {
      let circumference = 2 * 3.14 * r
      return circumference
   }

   console.log(circumOfCircle(5))

   {
      const circumOfCircle = (r) => {
         let circumference = 2 * 3.14 * r
         return circumference
      }

      console.log(circumOfCircle(5))
   }

   function calculateDensity(mass, volume) {
      let density = mass / volume
      return density
   } 

   console.log(calculateDensity(10, 2))

   {
      const calculateDensity = (mass, volume) => {
         let density = mass / volume
         return density
      }

      console.log(calculateDensity(10, 2))
   }

   function speed(distance, time) {
      let speed = distance / time
      return speed
   }

   console.log(speed(5000, 80))

   {
      const speed = (distance, time) => {
         let speed = distance / time
         return speed
      }

      console.log(speed(5000, 80))
   }

   function calculateWeight(mass, gravity = 9.81) {
      let weight = mass * gravity
      return weight
   }

   console.log(calculateWeight(5))

   {
      const calculateWeight = (mass, gravity = 9.81) => {
         let weight = mass * gravity
         return weight
      }

      console.log(calculateWeight(5))
   }

   function convertCelsiusToFahrenheit(c) {
      let oF = (c * 9/5) + 32
      return oF
   }

   console.log(convertCelsiusToFahrenheit(35))

   {
      const convertCelsiusToFahrenheit = (c) => {
         let oF = (c * 9/5) + 32
         return oF
      }

      console.log(convertCelsiusToFahrenheit(35))
   }

   function calculateBMI(weight, height) {
      let bmi = weight / (height * height)
      if (bmi < 18.5) {
         console.log(`your bmi: ${bmi} (underweight) bmi is less than 18.5`) 
      } else if (bmi >= 18.5 && bmi < 25) {
         console.log(`your bmi: ${bmi} (normal weight) bmi is 18.5 ot 24.9`) 
      } else if (bmi >= 25 && bmi < 30) {
         console.log(`your bmi: ${bmi} (overweight) bmi is 25 to 29.9`) 
      } else {
         console.log(`your bmi: ${bmi} (obese) bmi is 30 more`) 
      }
      return bmi
   }

   console.log(calculateBMI(48, 1.69))
   
   {
      const calculateBMI = (weight, height) => {
         let bmi = weight / (height * height)
         switch (true) {
            case bmi < 18.5:
               console.log(`your bmi: ${bmi} (underweight) bmi is less than 18.5`) 
               break
            case bmi >= 18.5 && bmi < 25:
               console.log(`your bmi: ${bmi} (normal weight) bmi is 18.5 ot 24.9`) 
               break
            case bmi >= 25 && bmi < 30:
               console.log(`your bmi: ${bmi} (overweight) bmi is 25 to 29.9`) 
               break
            default:
               console.log(`your bmi: ${bmi} (obese) bmi is 30 more`) 
         }
         return bmi
      }

      console.log(calculateBMI(48, 1.69))
   }

   function checkSeason(month) {
      let mnth = month.toLowerCase()
      switch (true) {
         case mnth == 'september' || mnth == 'october' || mnth == 'november':
            console.log('The season is Autumn')
            break
         case mnth == 'december' || mnth == 'january' || mnth == 'february':
            console.log('The season is Winter')
            break
         case mnth == 'march' || mnth == 'april' || mnth == 'may':
            console.log('The season is Spring')
            break
         case mnth == 'june' || mnth == 'july' || mnth == 'august':
            console.log('The season is Summer')
            break
         default:
            console.log('invalid input')
      }
   }

   checkSeason('february')

   {
      const checkSeason = (month) => {
         let mnth = month.toLowerCase()
         switch (true) {
            case mnth == 'september' || mnth == 'october' || mnth == 'november':
               console.log('The season is Autumn')
               break
            case mnth == 'december' || mnth == 'january' || mnth == 'february':
               console.log('The season is Winter')
               break
            case mnth == 'march' || mnth == 'april' || mnth == 'may':
               console.log('The season is Spring')
               break
            case mnth == 'june' || mnth == 'july' || mnth == 'august':
               console.log('The season is Summer')
               break
            default:
               console.log('invalid input')
         }
      }

      checkSeason('june')
   }

   function findMax(numOne, numTwo, numThree) {
      let a = numOne, b = numTwo, c = numThree
      if (a > b && a > c) {
         console.log(numOne)
      } else if (b > a && b > c) {
         console.log(numTwo)
      } else {
         console.log(numThree)
      }
   }

   findMax(5, 10, 2)
   findMax(0, 0, 2)
   findMax(-23, -10, 2)

   {
      const findMax = (numOne, numTwo, numThree) => {
         let a = numOne, b = numTwo, c = numThree
         switch (true) {
            case a > b && a > c:
               console.log(numOne)
               break
            case b > a && b > c:
               console.log(numTwo)
               break
            default:
               console.log(numThree)
         }
      }

      findMax(9, 8, 1)
      findMax(-9, 8, 1)
   }
}