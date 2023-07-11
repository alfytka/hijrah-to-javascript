// callback
const doSomething = callback => {
   setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
   }, 2000)
}

const callback = (err, result) => {
   if (err) {
      return console.log(err)
   }
   return console.log(result)
}

doSomething(callback)

// syntax dari pada promis
const promise = new Promise((resolve, reject) => {
   resolve('success')
   reject('failure')
})

// promise
const doPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
         resolve(skills)
      } else {
         reject('Something wrong has happened')
      }
   }, 2000)
})

doPromise.then(result => {
   console.log(result)
}).catch(error => console.error(error))

{
   const doPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
         const skills = ['HTML', 'CSS', 'JS']
         if (skills.includes('Node')) {
            resolve('fullstack developer')
         } else {
            reject('Something wrong has happened')
         }
      }, 2000)
   })

   doPromise.then(result => {
      console.log(result)
   }).catch(error => console.error(error))
}

// fetch api
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
   .then(response => response.json()) // accessing the API data as JSON
   .then(data => {
      // getting data
      console.log(data)
   })
   .catch(error => console.error(error)) // handling error if something wrong happens




