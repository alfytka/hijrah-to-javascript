{
   const users = {
      Alex: {
         email: 'alex@alex.com',
         skills: ['HTML', 'CSS', 'JavaScript'],
         age: 20,
         isLoggedIn: false,
         points: 30
      },
      Asab: {
         email: 'asab@asab.com',
         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
         age: 25,
         isLoggedIn: false,
         points: 50
      },
      Brook: {
         email: 'daniel@daniel.com',
         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
         age: 30,
         isLoggedIn: true,
         points: 50
      },
      Daniel: {
         email: 'daniel@alex.com',
         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
         age: 20,
         isLoggedIn: false,
         points: 40
      },
      John: {
         email: 'john@john.com',
         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
         age: 20,
         isLoggedIn: true,
         points: 50
      },
      Thomas: {
         email: 'thomas@thomas.com',
         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
         age: 20,
         isLoggedIn: false,
         points: 40
      },
      Paul: {
         email: 'paul@paul.com',
         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
         age: 20,
         isLoggedIn: false,
         points: 40
      }
   }

   let maxSkills = 0
   let skillFullPerson = ''

   for (const user in users) {
      const { skills } = users[user]
      
      if (skills.length > maxSkills) {
         maxSkills = skills.length
         skillFullPerson = user
      }
   }
   console.log(skillFullPerson)

   let countLoggedIn = 0
   let point = 0

   for (const user in users) {
      const { isLoggedIn, points } = users[user]
      if (isLoggedIn) {
         countLoggedIn++
      }

      if (points >= 50) {
         point++
      }
   }
   console.log(countLoggedIn)
   console.log(point)

   let whoMernPeople = []

   for (const user in users) {
      const { skills } = users[user]

      if (
         skills.includes('MongoDB') &&
         skills.includes('Express') &&
         skills.includes('React') &&
         skills.includes('Node')
         ) {
         whoMernPeople.push(user)
      }
   }
   console.log(whoMernPeople)

   const copyUsers = Object.assign({}, users)
   copyUsers.Alfitka = {
      email: 'alfytka@gmail.com',
      skils: ['HTML', 'CSS', 'JavaScript'],
      age: 18,
      isLoggedIn: true,
      points: 80
   }
   console.log(copyUsers)
   console.log(users)

   console.log(Object.keys(users))
   console.log(Object.values(users))

   const countries = {
      Indonesia: {
         name: 'Indonesia',
         capital: 'Jakarta',
         populations: 230000000,
         languages: ['Bahasa Indonesia', 'Jawa', 'Sunda', 'Betawi', 'Madura', 'Batak', 'Banjar']
      },
      Singapore: {
         name: 'Singapore',
         capital: 'Singapore',
         populations: 5400000,
         languages: ['English', 'Melayu']
      },
      Malaysia: {
         name: 'Malaysia',
         capital: 'Kuala Lumpur',
         populations: 33000000,
         languages: ['Melayu', 'English']
      }
   }

   console.log(countries)

}