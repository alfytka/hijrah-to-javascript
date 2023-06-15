{
   // const map = new Map()
   // console.log(map)

   const countries = [
      ['Finland', 'Helsinki'],
      ['Sweden', 'Stockholm'],
      ['Norway', 'Oslo']
   ]
   const map = new Map(countries)
   console.log(map)
   console.log(map.size)

   const countriesMap = new Map()
   console.log(countriesMap.size) // 0
   countriesMap.set('Finland', 'Helsinki')
   countriesMap.set('Sweden', 'Stockholm')
   countriesMap.set('Norway', 'Oslo')
   console.log(countriesMap)
   console.log(countriesMap.size)
   console.log(countriesMap.get('Norway'))

   console.log(countriesMap.has('Sweden'))

   for (const country of countriesMap) {
      console.log(country)
   }

   for (const [country, city] of countriesMap) {
      console.log(country, city)
   }
}