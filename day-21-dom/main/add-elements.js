// adding attribute
{
   const titles = document.querySelectorAll('h1')
   titles[3].className = 'title'
   titles[3].id = 'fourth-title'

   console.log(titles)
}

// adding attribute using setAttribute
{
   const titles = document.querySelectorAll('h1')
   titles[3].setAttribute('class', 'title')
   titles[3].setAttribute('id', 'fourth-title')

   console.log(titles)
} 

// adding class using classList
{
   const titles = document.querySelectorAll('h1')
   titles[3].classList.add('title', 'header-title')
   console.log(titles)
}

// remove class using classList
{
   const titles = document.querySelectorAll('h1')
   titles[3].classList.remove('title', 'header-title')
   console.log(titles)
}


// adding text to html element
// adding text content using textContent
{
   // textContent
   const titles = document.querySelectorAll('h1')
   titles[3].textContent = 'Fourth title'
}
