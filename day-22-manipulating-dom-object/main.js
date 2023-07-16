// let title = document.createElement('h1')
// title.className = 'title'
// title.style.fontSize = '24px'
// title.textContent = 'Creatint HTML element DOM Day 2'

let title
for (let i = 0; i < 3; i++) {
   title = document.createElement('h1')
   title.className = 'title'
   title.style.fontSize = '24px'
   title.textContent = i
   console.log(title)

   // creating multiple elements and appending to parent element
   document.body.appendChild(title)
}

