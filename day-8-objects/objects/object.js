const rectangle = {
   length: 20,
   width: 20
}
console.log(rectangle)

const person = {
   firstName: 'Alfitka',
   lastName: 'Haerul',
   age: 18,
   country: "Indonesia",
   city: 'Bandung',
   skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
   ],
   isMarried: false
}
console.log(person)

{
   const person = {
      firstName: 'Alfitka',
      lastName: 'Haerul',
      age: 18,
      country: "Indonesia",
      city: 'Bandung',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Node',
         'MongoDB',
         'Python',
         'D3.js'
      ],
      getFullName: function() {
         return `${this.firstName} ${this.lastName}`
      },
      'phone number': '+62819382881'
   }

   // accessing using values
   console.log(person.firstName)
   console.log(person.lastName)
   console.log(person.getFullName())
   console.log(person.age)
   console.log(person.location) // undefined

   // value can be accessed using square bracket and key name
   console.log(person['firstName'])
   console.log(person['lastName'])
   console.log(person['age'])
   console.log(person['location'])

   // for instance to access the phone number we only use the square bracket method
   console.log(person['phone number'])
}

{
   const person = {
      firstName: 'Alfitka',
      lastName: 'Haerul',
      age: 18,
      country: "Indonesia",
      city: 'Bandung',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Node',
         'MongoDB',
         'Python',
         'D3.js'
      ],
      getFullName: function() {
         return `${this.firstName} ${this.lastName}`
      }
   }

   person.nationality = 'Indonesian'
   person.country = 'Indonesia'
   person.title = 'Frontend Dev'
   person.skills.push('Next')
   person.skills.push('Sass')

   person.getPersonInfo = function() {
      let skillsWithoutLastSkill = this.skills
         .splice(0, this.skills.length - 1)
         .join(', ')
      let lastSkill = this.skills.splice(this.skills.length - 1)[0]
      let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
      let fullName = this.getFullName()
      let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
      return statement
   }
   console.log(person)
   console.log(person.getPersonInfo())

}

{
   const person = {
      firstName: 'Alfitka',
      age: 18,
      country: 'Indonesia',
      city: 'Banjar',
      skills: ['HTML', 'Tailwind CSS', 'JavaScript'],
      title: 'Frontend Dev',
      address: {
         street: 'Pahlawan Street',
         pobox: 2002,
         city: 'Banjar'
      },
      getPersonInfo: function() {
         return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
      }
   }

   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
   //hasOwnProperty

   const copyPerson = Object.assign({}, person)
   console.log(copyPerson)

   const keys = Object.keys(copyPerson)
   console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
   const address = Object.keys(copyPerson.address)
   console.log(address)
   
   const values = Object.values(copyPerson)
   console.log(values)
   
   const entris = Object.entries(copyPerson)
   console.log(entris)

   console.log(copyPerson.hasOwnProperty('name'))
   console.log(copyPerson.hasOwnProperty('age'))
}

