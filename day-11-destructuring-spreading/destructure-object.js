const rectangle = {
   width: 20,
   height: 10,
   area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

// renaming 
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)

{
   const rectangle = {
      width: 20,
      height: 10,
      area: 200
   }  
   let { width, height, area, perimeter = 60} = rectangle

   console.log(width, height, area, perimeter)

   {
      const rectangle = {
         width: 30,
         height: 10,
         area: 200,
         perimeter: 80
      }
      let { width, height, area, perimeter = 60 } = rectangle

      console.log(width, height, area, perimeter)
   }
}

const rect = {
   width: 20,
   height: 10
}
const calculatePerimeter = rectangle => {
   return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect))

{
   // with destructuring
   const rect = {
      width: 20,
      height: 10
   }
   const calculatePerimeter = ({width, height}) => {
      return 2 * (width + height)
   }
   
   console.log(calculatePerimeter(rect))

}

const person = {
   firstName: 'Alfitka',
   lastName: 'Haerul',
   age: 18,
   country: 'Indonesia',
   job: 'Frontend Developer',
   skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python'
   ],
   languages: ['Indonesian', 'Sunda', 'English']
}

const getPersonInfo = obj => {
   const skills = obj.skills
   const formattedSkills = skills.slice(0, -1).join(', ')
   const languages = obj.languages
   const formattedLanguanges = languages.slice(0, -1).join(', ')

   let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguanges} and a little bit of ${languages[2]}.`
   
   return personInfo
}

console.log(getPersonInfo(person))

{
   const person = {
      firstName: 'Alfitka',
      lastName: 'Haerul',
      age: 18,
      country: 'Indonesia',
      job: 'Frontend Developer',
      skills: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Redux',
         'Node',
         'MongoDB',
         'Python'
      ],
      languages: ['Indonesian', 'Sunda', 'English']
   }
   
   const getPersonInfo = ({
      firstName,
      lastName,
      age,
      country,
      job,
      skills,
      languages
   }) => {
      const formattedSkills = skills.slice(0, -1).join(', ')
      const formattedLanguanges = languages.slice(0, -1).join(', ')

      let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguanges} and a little bit of ${languages[languages.length -1]}.`

      return personInfo
   }
   
   console.log(getPersonInfo(person))

}

const todolist = [
   {
      task: 'Prepare JS Test',
      time: '4/1/2020 8:30',
      completed: true,
   },
   {
      task: 'Give JS Test',
      time: '4/1/2020 10:00',
      completed: false,
   },
   {
      task: 'Assess Test Result',
      time: '4/1/2020 1:00',
      completed: false,
   }
]

for (const { task, time, completed } of todolist) {
   console.log(task, time, completed)
} 