
{
   const numbers = [1, 2, 3, 4, 5]
   numbers.reverse() // -> reverse array order
   console.log(numbers) // [5, 4, 3, 2, 1]

   numbers.reverse()
   console.log(numbers) // [1, 2, 3, 4, 5]
}
{
   const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
   ]

   webTechs.sort()
   console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

   webTechs.reverse() // after sorting we can reverse it
   console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
    
}