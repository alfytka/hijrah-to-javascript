const student = ['Alfitka', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student
let jsScore = scores[2]
let reactScore = scores[scores.length - 1]

console.log(name, skills, jsScore, reactScore);

const students = [
   ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
   ['Alfitka', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (args) => {
   const convertedArray = []

   for (let i = 0; i < args.length; i++) {
      const student = {
         name: args[i][0],
         skills: args[i][1],
         scores: args[i][2]
      }
      convertedArray.push(student)
   }

   return convertedArray
}

console.log(convertArrayToObject(students))

{
   const students = {
      name: 'Alfitka',
      age: 18,
      skills: {
         frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
         ],
         backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
         ],
         dataBase: [
            { skill: 'MongoDB', level: 7.5 },
         ],
         dataScience: ['Python', 'R', 'D3.js']
      }
   }

   const newStudents = Object.assign({}, students)

   const newStudent = {
      ...students, 
      skills: {
         ...students.skills,
         frontEnd: [
            ...students.skills.frontEnd,
            { skill: 'Bootstrap', level: 8 }
         ],
         backEnd: [
            ...students.skills.backEnd,
            { skill: 'Express', level: 9 }
         ],
         dataBase: [
            ...students.skills.dataBase,
            { skill: 'SQL', level: 8 }
         ],
         dataScience: [
            ...students.skills.dataScience,
            'SQL'
         ]
      }
   }

   console.log(newStudent)
   console.log(students)
}