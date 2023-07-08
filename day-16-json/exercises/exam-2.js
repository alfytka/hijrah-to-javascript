{
   const student = {
      firstName: 'Alfitka',
      lastName: 'Haerul',
      age: 18,
      isMarried: false,
      skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
   }

   const txt = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
   console.log(txt)
}