// adding style color
{
   const titles = document.querySelectorAll('h1')
   titles.forEach((title, i) => {
      title.style.fontSize = '24px'
      if (i % 2 === 0) {
         title.style.color = 'green'
      } else {
         title.style.color = 'red'
      }
   })
}

// adding style background color
{
   const titles = document.querySelectorAll('h1')
   titles.forEach((title, i) => {
      title.style.fontSize = '28px'
      if (i % 2 === 0) {
         // title.style.backgroundColor = 'green'
      } else {
         // title.style.backgroundColor = 'red'
      }
   })
}

// adding style font size
{
   const titles = document.querySelectorAll('h1')
   titles.forEach((title, i) => {
      title.style.fontSize = '24px'
      if (i % 2 === 0) {
         title.style.fontSize = '20px'
      } else {
         title.style.fontSize = '30px'
      }
   })
}