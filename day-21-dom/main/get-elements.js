
// getting elements by tag name
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles)
console.log(allTitles.length)

for (let i = 0; i < allTitles.length; i++) {
   console.log(allTitles[i])
}

// getting elements by class name
{
   const allTitles = document.getElementsByClassName('title')

   console.log(allTitles)
   console.log(allTitles.length)

   for (let i = 0; i < allTitles.length; i++) {
      console.log(allTitles[i])
   }
}

// getting an element by id
{
   let firstTitle = document.getElementById('first-title')
   console.log(firstTitle)
}

// query selector -> only the first element
{
   let firstTitle = document.querySelector('h1')
   let secondTitle = document.querySelector('#first-title')
   let thirdTitle = document.querySelector('.title')
   
   console.log(firstTitle)
   console.log(secondTitle)
   console.log(thirdTitle)
}

// query selector all
{
   const allTitles = document.querySelectorAll('h1')

   console.log(allTitles)
   console.log(allTitles.length)
   
   for (let i = 0; i < allTitles.length; i++) {
      console.log(allTitles[i])
   }
   
   allTitles.forEach(title => console.log(title))
   const titles = document.querySelectorAll('.title')
   console.log(titles)
}


