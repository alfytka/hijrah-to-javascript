{
   // const companies = new Set()
   // console.log(companies)

   const languages = [
      'English',
      'Finnish',
      'English',
      'French',
      'Spanish',
      'English',
      'French'
   ]

   const setOfLanguages = new Set(languages)
   console.log(setOfLanguages)

   for (const language of setOfLanguages) {
      console.log(language)
   }

   const companies = new Set()
   console.log(companies.size)

   companies.add('Google')
   companies.add('Facebook')
   companies.add('Amazon')
   companies.add('Oracle')
   companies.add('Microsoft')
   console.log(companies.size)
   console.log(companies)
   console.log(companies.delete('Google')) // true
   console.log(companies.size)
   console.log(companies.has('Apple')) // false
   console.log(companies.has('Amazon')) // true
   companies.clear()
   console.log(companies)
} 

{
   const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
   setOfCompanies = new Set()
   for (const company of companies) {
      setOfCompanies.add(company)
   }
   console.log(companies)
   console.log(setOfCompanies)
}

{
   const languages = [
      'English',
      'Finnish',
      'English',
      'French',
      'Spanish',
      'English',
      'French'
   ]

   const langSet = new Set(languages)
   console.log(langSet)
   console.log(langSet.size)

   const counts = []
   const count = {}

   for (const l of langSet) {
      const filteredLang = languages.filter((lng) => lng === l)
      console.log(filteredLang)
      counts.push({ lang: l, count: filteredLang.length})
   }
   console.log(counts)

   const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
   const setOfNumbers = new Set(numbers)
   console.log(setOfNumbers)

   // union of sets
   let a = [1, 2, 3, 4, 5]
   let b = [3, 4, 5, 6]
   let c = [...a, ...b]

   let A = new Set(a)
   let B = new Set(b)
   let C = new Set(c)

   console.log(C)
}

{
   // intersection of sets
   let a = [1, 2, 3, 4, 5]
   let b = [3, 4, 5, 6]

   let A = new Set(a)
   let B = new Set(b)

   let c = a.filter((num) => B.has(num))
   let C = new Set(c)

   console.log(C)
   
   let d = a.filter((num) => !B.has(num))
   let D = new Set(d)
   
   console.log(D)
}