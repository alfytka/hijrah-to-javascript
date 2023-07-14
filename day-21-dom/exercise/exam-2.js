const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(text => {
   text.style.color = 'white'
   text.style.background = 'blue'
   text.style.border = '1px solid black'
   text.style.fontSize = '18px'
   text.style.fontFamily = 'sans-serif'
})

paragraphs.forEach((text, i) => {
   text.style.fontSize = '24px'
   if (i % 2 === 0) {
      text.style.color = 'green'
   } else {
      text.style.color = 'red'
   }
})

paragraphs.forEach((text) => {
   text.setAttribute('id', 'text')
   text.setAttribute('class', 'italic')
   text.textContent = 'hello world'
})

