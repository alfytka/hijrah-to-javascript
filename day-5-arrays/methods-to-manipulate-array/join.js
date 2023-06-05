{
   const numbers = [1, 2, 3, 4, 5]
   console.log(numbers.join()) // 1,2,3,4,5

   const names = ['Alfitka', 'Haerul', 'Elsa', 'Endah', 'Anisa']

   console.log(names.join()) // Alfitka,Haerul,Elsa,Endah,Anisa
   console.log(names.join('')) // AlfitkaHaerulElsaEndahAnisa
   console.log(names.join(' ')) // Alfitka Haerul Elsa Endah Anisa
   console.log(names.join(', ')) // Alfitka, Haerul, Elsa, Endah, Anisa
   console.log(names.join(' # ')) // Alfitka # Haerul # Elsa # Endah # Anisa

   const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
    ] // List of web technologies
    
    console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
    console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
}