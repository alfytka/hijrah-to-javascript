{
   const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
   
   const txt = JSON.stringify(skills, undefined, 4)
   console.log(txt)
}

{
   let age = 18
   
   const txt = JSON.stringify(age, undefined, 4)
   console.log(txt)
}

{
   let isMarried = false
   
   const txt = JSON.stringify(isMarried, undefined, 4)
   console.log(txt)
}

{
   const student = {
      firstName: 'Alfitka',
      lastname: 'Haerul',
      age: 18,
      isMarried: false,
      skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
   }

   const txt = JSON.stringify(student, undefined, 4)
   console.log(txt)
}




