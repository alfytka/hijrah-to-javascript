// async and await
// const square = async function(n) {
//    return n * n
// }
// // square(2)
// const value = await square(2)
// console.log(value)

// promise / without async and await
const url = 'https://restcountries.com/v2/all'
fetch(url)
   .then(response => response.json())
   .then(data => {
      console.log(data)
   })
   .catch(error => console.error(error))

// with async and await
const fetchData = async () => {
   try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
   } catch(error) {
      console.error(error)
   }
}
console.log('==== async and await')
fetchData()

