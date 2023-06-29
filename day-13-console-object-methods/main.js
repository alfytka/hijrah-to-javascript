console.log('30 Days of JavaScript')
console.log('%d %s of JavaScript', 30, 'Days')

console.log('%c30 Days of JavaScript', 'color:green') // log output is green
console.log(
   '%c30 Days%c %cof%c %cJavaScript%c',
   'color:red',
   '',
   'color:green',
   '',
   'color:blue'
) // log output is red green and blue

console.warn('This is a warning')
console.warn(
   'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

console.error('This is an error message')
console.error('We all make mistakes')

const names = ['Alfitka', 'Elfan', 'Hari', 'Budi']
console.table(names)

const user = {
   name: 'Alfitka',
   title: 'Programmer',
   country: 'Indonesia',
   city: 'Banjar',
   age: 18
}
console.table(user)

const countries = [
   ['Indonesia', 'Jakarta'],
   ['Malaysia', 'Kuala Lumpur'],
   ['Thailand', 'Bangkok']
]
console.table(countries)

const users = [
   {
      name: 'Alfitka',
      title: 'Frontend Web Dev',
      country: 'Indonesia',
      city: 'Bandung',
      age: 18
   },
   {
      name: 'Andre',
      title: 'UI/UX Designer',
      country: 'Indonesia',
      city: 'Bekasi',
      age: 19
   },
   {
      name: 'Wahyu',
      title: 'Architect',
      country: 'Singapore',
      city: 'Singapore',
      age: 20
   },
   {
      name: 'Elfan',
      title: 'Fullstack Web Dev',
      country: 'Indonesia',
      city: 'Jakarta',
      age: 18
   },
]

console.table(users)

{
   const countries = [
      ['Indonesia', 'Jakarta'],
      ['Malaysia', 'Kuala Lumpur'],
      ['Thailand', 'Bangkok']
   ]

   console.time('Regular for loop')

   for (let i = 0; i < countries.length; i++) {
      console.log(countries[i][0], countries[i][1])
   }

   console.timeEnd('Regular for loop')

   console.time('for of loop')

   for (const [name, city] of countries) {
      console.log(name, city)
   }

   console.timeEnd('for of loop')
   
   console.time('forEach loop')
   
   countries.forEach(([name, city]) => {
      console.log(name, city)
   })
   
   console.timeEnd('forEach loop')
}

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i++) {
   let errorMessage = `${i} is not even`
   console.log('the # is ' + i)
   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

{
   const names = ['Alfitka', 'Haerul', 'Yogi', 'Budi']
   const countries = [
      ['Indonesia', 'Jakarta'],
      ['Malaysia', 'Kuala Lumpur'],
      ['Thailand', 'Bangkok']
   ]
   const user = {
      name: 'Alfitka',
      title: 'Programmer',
      country: 'Indonesia',
      city: 'Banjar',
      age: 18
   }
   const users = [
      {
         name: 'Alfitka',
         title: 'Frontend Web Dev',
         country: 'Indonesia',
         city: 'Bandung',
         age: 18
      },
      {
         name: 'Andre',
         title: 'UI/UX Designer',
         country: 'Indonesia',
         city: 'Bekasi',
         age: 19
      },
      {
         name: 'Wahyu',
         title: 'Architect',
         country: 'Singapore',
         city: 'Singapore',
         age: 20
      },
      {
         name: 'Elfan',
         title: 'Fullstack Web Dev',
         country: 'Indonesia',
         city: 'Jakarta',
         age: 18
      },
   ]

   console.group('Names')
   console.log(names)
   console.groupEnd()

   console.group('Countries')
   console.log(countries)
   console.groupEnd()

   console.group('Users')
   console.log(user)
   console.log(users)
   console.groupEnd()
}

const func = () => {
   console.count('Function has been called')
}
func()
func()
func()

// console.clear()

console.group('Indonesian')
console.table(countries)
console.table(users)
console.groupEnd()

console.assert(10 > 2 * 10, '10 is not greater than 20')
console.warn('Perhatian, anda memasuki kawasan berbahaya')
console.error('Error, data yang anda masukkan tidak valid')


console.time('for while loop')
let i = 1
while (i <= 10) {
   console.log(i)
   i++
}
console.timeEnd('for while loop')

{
   console.time('for loop')
   for (let i = 1; i <= 10; i++) {
      console.log(i)
   }
   console.timeEnd('for loop')
}

console.time('for of loop')
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (e of num) {
   console.log(e)
}
console.timeEnd('for of loop')

{
   console.time('forEach loop')
   let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   num.forEach((e) => {
      console.log(e)
   })
   console.timeEnd('forEach loop')
}