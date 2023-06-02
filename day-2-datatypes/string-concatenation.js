let space = ' '
let firstName = 'Alfitka'
let lastName = 'Haerul'
let country = 'Indonesia'
let city = 'Banjar'
let language = 'JavaScript'
let job = 'Programmer'
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)

// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` // ES6 - String interpolation method
let personInfoTri = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I learn ${language}.`
console.log(personInfoTwo)
console.log(personInfoTri)

