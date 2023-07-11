const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI)
   .then((response) => response.json())
   .then((data) => {
      data.forEach((country) => {
         const { name, capital, languages, population, area } = country
         console.log('Country:', name)
         console.log('Capital:', capital)
         console.log('Languages:', languages)
         console.log('Population:', population)
         console.log('Area:', area)
      })
   })
   .catch((error) => {
      console.error('Error', error)
   }) 

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
   .then((response) => response.json())
   .then((data) => {
      console.log(data)
   })
   .catch((err) => {
      console.error(err)
   })

fetch(catsAPI)
   .then((response) => response.json())
   .then((data) => {
      let totalWeight = 0
      let count = 0

      data.forEach((cat) => {
         if (cat.weight && cat.weight.metric) {
            const weightInGrams = parseFloat(cat.weight.metric.split(' - ')[0])
            totalWeight += weightInGrams
            count++
         }
      })

      const averageWeight = totalWeight / count
      console.log('Average Weight:', averageWeight.toFixed(2), 'grams')
   })
   .catch((err) => {
      console.error(err)
   })

fetch(countriesAPI)
   .then((response) => response.json())
   .then((data) => {
      const sorted = data.sort((a, b) => b.area - a.area)
      const tenCountries = sorted.slice(0, 10)
      tenCountries.forEach((country, index) => {
         console.log(`${index + 1}. ${country.name} (${country.area} km2)`)
      })
   })
   .catch((err) => {
      console.error(err)
   })

fetch(countriesAPI)
   .then((response) => response.json())
   .then((data) => {
      const languagesSet = new Set()

      data.forEach((country) => {
         if (country.languages && country.languages.length > 0) {
            country.languages.forEach((language) => {
               if (language.official) {
                  languagesSet.add(language.name)
               }
            })
         }
      })

      return console.log(languagesSet.size)

   })
   .catch((err) => {
      console.error(err)
   })