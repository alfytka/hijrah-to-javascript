let string = 'love'
let patternOne = '/love/' // with out any flag
let patternTwo = '/love/gi' // g-means to search in the whole text, i - case sensitive

let stringTwo = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringTwo.match('love'))

let pattern = /love/gi
console.log(stringTwo.match(pattern))

let txt = 'In 2019, I run 30 Days Of Python. Now, in 2023 I super exited to start this challenge'
let regEx = /\d/g
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))
