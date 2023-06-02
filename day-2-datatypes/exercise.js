let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let txt = 'You cannot end a sentence with because because because is a conjunction'
console.log(txt.indexOf('because'))
console.log(txt.lastIndexOf('because'))
console.log(txt.search('because'))
console.log(txt.substr(31, 23))

challenge = ' 30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.trim())

challenge = '30 Days Of JavaScript'
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))

let js = '30 Days Of '
console.log(js.concat('JavaScript'))
console.log(challenge.repeat(2))

let say = `The quote 'There is no exercise better for the hearth than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(say)
say = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(say)

let a = '10'
let b = 10
console.log(a == b)

let c = parseFloat('9.8')
let d = 10
console.log(Math.round(c) == d)

let py = 'Python'
let jg = 'Jargon'
console.log(py.match('on'))
console.log(jg.match('on'))

let jargon = 'I hope this course is not full of jargon'
console.log(jargon.includes('jargon'))

let num = Math.floor(Math.random() * 100)
console.log(num)

let number = Math.floor(Math.random() * 51) + 50
console.log(number)

let numbers = Math.floor(Math.random() * 255)
console.log(numbers)

chall = 'JavaScript'
console.log(challenge[11])
console.log(challenge[12])
console.log(challenge[13])
console.log(challenge[14])
console.log(challenge[15])
console.log(challenge[16])
console.log(challenge[17])
console.log(challenge[18])
console.log(challenge[19])
console.log(challenge[20])

console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(string.match(pattern))
console.log(txt.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[^\w\s]/gi, ''))

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numberrs = text.match(/\d+/gi)

let totalIncome = 0
for (const numberr of numberrs) {
    totalIncome += parseInt(numberr);
}

console.log(`Total income ${totalIncome} euro.`)

