// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

console.log(regEx)

// with global flag n case insensitive flag
{
   let pattern = 'love'
   let flag = 'gi'
   let regEx = new RegExp(pattern, flag)

   console.log(regEx)
}

let regExp = new RegExp('love', 'gi')
let regEx1 = /love/gi

console.log(regExp)
console.log(regEx1)

const str = 'I love JavaScript'
const patterns = /love/
const result = patterns.test(str)
console.log(result)

{
   const str = 'I love JavaScript'
   // const pattern = /love/
   const pattern = /love/g
   const result = str.match(pattern)
   console.log(result)
}

{
   const str = 'I love JavaScript'
   const pattern = /love/g
   const result = str.search(pattern)
   console.log(result)
}

// replacing a substring
// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
// console.log(matchReplaced)
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

{
   const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
      T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
      p%e%o%ple.\
      I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
      D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
   
   matches = txt.replace(/%/g, '')
   console.log(matches)
}

{
   const pattern = '[Aa]pple' // this square bracket mean either A or a
   const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor way has been replaced by a banana a day keeps the doctor far far away. '
   const matches = txt.match(pattern)

   console.log(matches)
}

{
   const pattern = /[Aa]pple/g // this square bracket means either A or a
   const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
   const matches = txt.match(pattern)
   
   console.log(matches)
}

{
   const pattern = /[Aa]pple|[Bb]anana/g // this square bracket means either A or a
   const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
   const matches = txt.match(pattern)
   
   console.log(matches)
}

// escape character (\)
{
   const pattern = /\d/g // d is a special character which means digits
   const txt = 'This regular expression example was made in January 12,  2020.'
   const matches = txt.match(pattern)

   console.log(matches)
}
{
   const pattern = /\d+/g // d is a special character which means digits
   const txt = 'This regular expression example was made in January 12,  2020.'
   const matches = txt.match(pattern)

   console.log(matches)
}

// period (.)
{
   const pattern = /[a]./g // this square bracket means a and . means any character except new line
   const txt = 'Apple and banana are fruits'
   const matches = txt.match(pattern)

   console.log(matches)
}
{
   const pattern = /[a].+/g // . any character, + any character one or more times 
   const txt = 'Apple and banana are fruits'
   const matches = txt.match(pattern)

   console.log(matches)
}

// zero or more times (*)
{
   const pattern = /[a].*/g
   const txt = 'Apple and banana are fruits'
   const matches = txt.match(pattern)

   console.log(matches)
}

// zero or on times (?)
{
   const txt = 'I am not sure if there is a convention how to write the word e-mail. \
   Some people write it email others may write it as Email or E-mail.'
   const pattern = /[Ee]-?mail/g // ? means optional
   const matches = txt.match(pattern)
   
   console.log(matches)
}

{
   const txt = 'This regular expression example was made in December 6,  2019.'
   const pattern = /\b\w{4}\b/g // exactly four character words
   const matches = txt.match(pattern)
   
   console.log(matches)
}
{
   const txt = 'This regular expression example was made in December 6,  2019.'
   const pattern = /\b[a-zA-Z]{4}\b/g // exactly four character words without numbers
   const matches = txt.match(pattern)
   
   console.log(matches)
}
{
   const txt = 'This regular expression example was made in December 6,  2019.'
   const pattern = /\d{4}/g // a numbers and exactly four digits
   const matches = txt.match(pattern)
   
   console.log(matches)
}
{
   const txt = 'This regular expression example was made in December 6,  2019.'
   const pattern = /\d{1,4}/g // 1 to 4
   const matches = txt.match(pattern)
   
   console.log(matches)
}

// cart (^)
{
   const txt = 'This regular expression example was made in December 6,  2019.'
   // const pattern = /^This/ // ^ means starts with
   const pattern = /^This/g // ^ means starts with
   const matches = txt.match(pattern)
   
   console.log(matches)
}
{
   const txt = 'This regular expression example was made in December 6,  2019.'
   const pattern = /[^A-Za-z,. ]+/g // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
   const matches = txt.match(pattern)
   
   console.log(matches)
}

{
   let pattern = /^[A-Z][a-z]{3,12}$/
   let name = 'Alfitka'
   let result = pattern.test(name)

   console.log(result)
}