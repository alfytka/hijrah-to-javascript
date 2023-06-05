const webTechs = [
   'HTML',
   'CSS',
   'Sass',
   'JS',
   'React',
   'Redux',
   'Express',
   'Next',
   'Vue',
   'Angular',
   'Vite',
   'MongoDB'
]

let check = webTechs.indexOf('Sass')

if (check === -1) {
   console.log('Add Sass to the array')
   webTechs.unshift('Sass')
   console.log(webTechs)
} else {
   console.log(`Sass is a CSS Preprocess`)
}