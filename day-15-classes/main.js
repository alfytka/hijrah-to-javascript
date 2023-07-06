class Person {
   constructor(firstName, lastName) {
      console.log(this)
      this.firstName = firstName
      this.lastName = lastName
   }
}
const person1 = new Person('Alfitka', 'Haerul')
const person2 = new Person('Andre', 'Putra')
const person3 = new Person('Ahmad', 'Sam')

console.log(person1)
console.log(person2)
console.log(person3)

{
   class Person {
      constructor(firstName, lastName, age, country, city) {
         console.log(this)
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.city = city
      }
   }
   const person1 = new Person('Alfitka', 'Haerul', 18, 'Indonesia', 'Banjar')
   console.log(person1)
}

{
   class Person {
      constructor(
         firstName = 'Alfitka',
         lastName = 'Haerul',
         age = 18,
         country = 'Indonesia',
         city = 'Bandung'
      ) {
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.city = city
      }
   }
   const person1 = new Person()
   const person2 = new Person('Andre', 'Irwansyah', 20, 'Thailand', 'Bangkok')

   console.log(person1)
   console.log(person2)
}

{
   class Person {
      constructor(firstName, lastName, age, country, city) {
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.city = city
         this.score = 0
         this.skills = []
      }
      getFullName() {
         const fullName = this.firstName + ' ' + this.lastName
         return fullName
      }
   }
   const person1 = new Person('Elfan', 'Haeri', 21, 'Vietnam', 'Hanoi')
   const person2 = new Person('Falah', 'He', 17, 'Thailand', 'Patarani')

   console.log(person1.getFullName())
   console.log(person2.getFullName())

   console.log(person1.score)
   console.log(person2.score)

   console.log(person1.skills)
   console.log(person2.skills)
}

{
   class Person {
      constructor(firstName, lastName, age, country, city) {
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.city = city
         this.score = 0
         this.skills = []
      }
      getFullName() {
         const fullName = this.firstName + ' ' + this.lastName
         return fullName
      }
      get getScore() {
         return this.score
      }
      get getSkills() {
         return this.skills
      }
      set setScore(score) {
         this.score += score
      }
      set setSkill(skill) {
         this.skills.push(skill)
      }
      getPersonInfo() {
         let fullName = this.getFullName()
         let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') +
         ` and ${this.skills[this.skills.length - 1]}`
         let formattedSkills = skills ? `He knows ${skills}` : ''

         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
         return info
      }
   }
   const person1 = new Person('Sultan', 'Hasanudin', 21, 'Malaysia', 'Johor')
   const person2 = new Person('Haikal', 'Sam', 17, 'Filipina', 'Peso')
   const person3 = new Person('Tasya', 'Asyifa', 23, 'Thailand', 'Patarani')

   // person1.setScore = 1
   // person1.setSkill = 'HTML'
   // person1.setSkill = 'CSS'
   // person1.setSkill = 'JavaScript'

   // person2.setScore = 1
   // person2.setSkill = 'Planning'
   // person2.setSkill = 'Managing'
   // person2.setSkill = 'Organizing'

   // console.log(person1.getScore)
   // console.log(person2.getScore)

   // console.log(person1.getSkills)
   // console.log(person2.getSkills)
   // console.log(person3.getSkills)

   // console.log(person1.getPersonInfo())
   // console.log(person2.getPersonInfo())
   // console.log(person3.getPersonInfo())
}
{
   class Person {
      constructor(firstName, lastName, age, country, city) {
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.city = city
         this.score = 0
         this.skills = []
      }
      getFullName() {
         const fullName = this.firstName + ' ' + this.lastName
         return fullName
      }
      get getScore() {
         return this.score
      }
      get getSkills() {
         return this.skills
      }
      set setScore(score) {
         this.score += score
      }
      set setSkill(skill) {
         this.skills.push(skill)
      }
      getPersonInfo() {
         let fullName = this.getFullName()
         let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') +
         ` and ${this.skills[this.skills.length - 1]}`
         let formattedSkills = skills ? `He knows ${skills}` : ''

         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
         return info
      }
      static favoriteSkill() {
         const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
         const index = Math.floor(Math.random() * skills.length)
         return skills[index]
      }
      static showDateTime() {
         let now = new Date()
         let year = now.getFullYear()
         let month = now.getMonth() + 1
         let date = now.getDate()
         let hours = now.getHours()
         let minutes = now.getMinutes()
         if (hours < 10) {
            hours = '0' + hours
         }
         if (minutes < 10) {
            minutes = '0' + minutes
         }

         let dateMonthYear = date + '.' + month + '.' + year
         let time = hours + ':' + minutes
         let fullTime = dateMonthYear + ' ' + time
         return fullTime
      }
   }
   console.log(Person.favoriteSkill())
   console.log(Person.showDateTime())

   
   class Student extends Person {
      constructor(firstName, lastName, age, country, city, gender) {
         super(firstName, lastName, age, country, city)
         this.gender = gender
      }

      saySomething() {
         console.log('I am a child of the person class')
      }
      getPersonInfo() {
         let fullName = this.getFullName()
         let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') +
         ` and ${this.skills[this.skills.length - 1]}`
         let formattedSkills = skills ? `He knows ${skills}` : ''
         let pronoun = this.gender == 'Male' ? 'He' : 'She'

         let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
         return info
      }
   }

   const s1 = new Student('Alex', 'San', 18, 'Australia', 'Sydney', 'Male')
   const s2 = new Student('Keisay', 'Queue', 20, 'USA', 'Washington DC', 'Female')
   
   s1.setScore = 1
   s1.setSkill = 'HTML'
   s1.setSkill = 'CSS'
   s1.setSkill = 'JavaScript'

   s2.setScore = 1
   s2.setSkill = 'Planning'
   s2.setSkill = 'Managing'
   s2.setSkill = 'Organizing'

   console.log(s1)

   console.log(s1.saySomething())
   console.log(s1.getFullName())
   console.log(s1.getPersonInfo())

   console.log(s2.saySomething())
   console.log(s2.getFullName())
   console.log(s2.getPersonInfo())

}
