{
   function greetings(name = 'Wahyu') {
      let message = `${name}, welcome to 30 Days Of JavaScript`
      return message
   }

   console.log(greetings())
   console.log(greetings('Alfitka'))

   function generateFullName(firstName = 'Agung', lastName = 'Badhim') {
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
   }

   console.log(generateFullName())
   console.log(generateFullName('Alfitka', 'Haerul'))
}

{
   function calculateAge(birthYear, currentYear = 2023) {
      let age = currentYear - birthYear
      return age
   }

   console.log('Age: ', calculateAge(2004))

   function weightOfObject(mass, gravity = 9.81) {
      let weight = mass * gravity + ' N' // the value has to be changed to string first
      return weight
   }

   console.log('Weight of an object in Newton: ', weightOfObject(100))
   console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))
}

// using arrow function
{
   const greetings = (name = 'Ahmad') => {
      let message = name + ', welcome to 30 Days Of JavaScript'
      return message
   }

   console.log(greetings())
   console.log(greetings('Alfitka'))

   const generateFullName = (firstName = 'Ahmad', lastName = 'Kanabawi') => {
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
   }

   console.log(generateFullName())
   console.log(generateFullName('Alfitka'))
   console.log(generateFullName('Alfitka', 'Haerul'))

   const calculateAge = (birthYear, currentYear = 2023) => currentYear - birthYear
   console.log('Age: ', calculateAge(2004))

   const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
   console.log('Weight of an object in Newton: ', weightOfObject(100))
   console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))
}