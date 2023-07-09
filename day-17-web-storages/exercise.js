{
   const user = {
      firstName: 'Alfitka',
      lastName: 'Haerul',
      age: 18,
      country: 'Indonesia',
      city: 'Bandung'
   }

   const userText = JSON.stringify(user, undefined, 4)
   localStorage.setItem('Manusia', userText)
}

{
   const student = {
      firstName: 'Adi',
      lastName: 'Aprianto',
      age: 20,
      skills: ['HTML', 'CSS', 'JS', 'React', 'Next'],
      country: 'Indonesia',
      nisn: 102020120
   }
   const studentText = JSON.stringify(student, undefined, 4)
   localStorage.setItem('student', studentText)
}
