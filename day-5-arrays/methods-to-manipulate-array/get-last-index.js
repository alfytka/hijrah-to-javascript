{
   const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

   console.log(numbers.lastIndexOf(2)) // 7
   console.log(numbers.lastIndexOf(0)) // -1
   console.log(numbers.lastIndexOf(1)) // 6
   console.log(numbers.lastIndexOf(4)) // 3
   console.log(numbers.lastIndexOf(6)) // -1
}

{
   const numbers = [1, 2, 3, 4, 5]

   console.log(numbers.includes(5)) // true
   console.log(numbers.includes(0)) // false
   console.log(numbers.includes(1)) // true
   console.log(numbers.includes(6)) // false

   const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
   ] // List of web technologies

   console.log(webTechs.includes('Node')) // true
   console.log(webTechs.includes('C')) // false

   // checking array
   console.log(Array.isArray(numbers)) // true
   const number = 100
   console.log(Array.isArray(number)) // false
}

{
   const numbers = [1, 2, 3, 4, 5]
   console.log(numbers.toString())

   const names = ['Alfitka', 'Agung', 'Nasirudin', 'Elfan', 'Khikmal']
   console.log(names.toString())
}