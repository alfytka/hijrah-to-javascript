const paragraph = document.querySelector('p')
const paragraph1 = document.getElementsByTagName('p')

console.log(paragraph)
console.log(paragraph1)

const firstWebTech = document.querySelector('#first-web-tech')
const secondWebTech = document.querySelector('#second-web-tech')
const thirdWebTech = document.querySelector('#third-web-tech')
const fourthWebTech = document.querySelector('#fourth-web-tech')

console.log(firstWebTech)
console.log(secondWebTech)
console.log(thirdWebTech)
console.log(fourthWebTech)

const allOfP = document.querySelectorAll('p')
allOfP.forEach(text => console.log(text.textContent))
allOfP[3].textContent = 'Fourth Paragraph'
allOfP.forEach((text) => {
   text.id = 'paragraph'
   text.className = 'class-paragraph'
})
allOfP.forEach(text => {
   text.setAttribute('id', 'text-3xl')
   text.setAttribute('class', 'font-bold')
})
console.log(allOfP)