{
   const txt = `{
      "Dyana": {
         "email": "dyana@mail.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript"
         ],
         "age": 17,
         "isLoggedIn": false,
         "points": 30
      },
      "Alfitka": {
         "email": "alfitka@alfitka.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
         ],
         "age": 18,
         "isLoggedIn": false,
         "points": 50
      },
      "Khikmal": {
         "email": "khikmal@khikmal.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
         ],
         "age": 19,
         "isLoggedIn": true,
         "points": 50
      },
      "Diva": {
         "email": "diva@mail.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
         ],
         "age": 21,
         "isLoggedIn": false,
         "points": 40
      },
      "Reyhan": {
         "email": "reyhan@reyhan.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
         ],
         "age": 24,
         "isLoggedIn": true,
         "points": 50
      },
      "Firman": {
         "email": "firman@mail.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
         ],
         "age": 21,
         "isLoggedIn": false,
         "points": 40
      },
      "Teguh": {
         "email": "teguh@mail.com",
         "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
         ]
      }
   }`

   // const txtObj = JSON.parse(txt, undefined, 4)

   const txtObj = JSON.parse(txt)

   let maxSkills = 0
   let userWithMaxSkills = ''

   for (const user in txtObj) {
      const skills = txtObj[user].skills
      if (skills.length > maxSkills) {
         maxSkills = skills.length
         userWithMaxSkills = user
      }
   }

   console.log(userWithMaxSkills)

}