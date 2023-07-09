// localStorage.setItem('firstName', 'Alfitka')
// console.log(localStorage)

// localStorage.setItem('age', 18)
// console.log(localStorage)

const skills = ['HTML', 'CSS', 'JS', 'React']
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

{
   let skills = [
      { tech: 'HTML', level: 10 },
      { tech: 'CSS', level: 9 },
      { tech: 'JS', level: 8 },
      { tech: 'React', level: 9 },
      { tech: 'Redux', level: 10 },
      { tech: 'Node', level: 8 },
      { tech: 'MongoDB', level: 8 }
   ]
   let skillsJSON = JSON.stringify(skills)
   localStorage.setItem('skills', skillsJSON)
}

{
   const user = {
      firstName: 'Alfitka',
      age: 18,
      skills: ['HTML', 'CSS', 'JS', 'React']
   }

   const userText = JSON.stringify(user, undefined, 4)
   localStorage.setItem('user', userText)
}

{
   let firstName = localStorage.getItem('firstName')
   let age = localStorage.getItem('age')
   let skills = localStorage.getItem('skills')
   let skillsObj = JSON.parse(skills, undefined, 4)
   console.log(firstName, age, skillsObj)
   localStorage.clear()
}
