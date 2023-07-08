const users = {
   Dyana: {
      email: 'dyana@mail.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 17,
      isLoggedIn: false,
      points: 30
   },
   Alfitka: {
      email: 'alfitka@alfitka.com',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'Redux',
         'MongoDB',
         'Express',
         'React',
         'Node'
      ],
      age: 18,
      isLoggedIn: false,
      points: 50
   },
   Khikmal: {
      email: 'khikmal@khikmal.com',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Redux'
      ],
      age: 19,
      isLoggedIn: true,
      points: 50
   },
   Diva: {
      email: 'diva@mail.com',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'Python'
      ],
      age: 21,
      isLoggedIn: false,
      points: 40
   },
   Reyhan: {
      email: 'reyhan@reyhan.com',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Redux',
         'Node.js'
      ],
      age: 24,
      isLoggedIn: true,
      points: 50
   },
   Firman: {
      email: 'firman@mail.com',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'React'
      ],
      age: 21,
      isLoggedIn: false,
      points: 40
   },
   Teguh: {
      email: 'teguh@mail.com',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'MongoDB',
         'Express',
         'React',
         'Node'
      ]
   }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt)

const user = {
   firstName: 'Alfitka',
   lastName: 'Haerul',
   country: 'Indonesia',
   city: 'Bandung',
   email: 'alfitka@gmail.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
   age: 18,
   isLoggedIn: false,
   points: 50
}

const text = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(text)

