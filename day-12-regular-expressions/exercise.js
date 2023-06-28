const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g
const matches = txt.match(pattern)

const [perMonth, bonus, courses] = matches

const onlySalary = perMonth * 12
const salaryPlusBonus = onlySalary + parseInt(bonus)

console.log(matches)
console.log(onlySalary)
console.log(salaryPlusBonus)

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
const toInt = []
for (const e of points) {
   toInt.push(parseInt(e))
}

const sortedPoints = toInt.sort((a, b) => a - b)

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]

console.log(sortedPoints)
console.log(distance)

const jsVariable = variable => {
   const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
   return pattern.test(variable)
}

console.log(jsVariable('first_name'))
console.log(jsVariable('first-name'))
console.log(jsVariable('1first_name'))
console.log(jsVariable('firstname'))

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'

const tenMostFrequentWords = (paragraph, howMany = 10) => {
   const words = paragraph.toLowerCase().match(/\b\w+\b/g)
   const wordCountMap = {}

   for (let word of words) {
      wordCountMap[word] = (wordCountMap[word] || 0) + 1
   }

   const sortedWords = Object.keys(wordCountMap).sort((a, b) => wordCountMap[b] - wordCountMap[a])

   const mostFrequentWords = []
   for (let i = 0; i < howMany; i++) {
      const word = sortedWords[i]
      const count = wordCountMap[word]
      mostFrequentWords.push({word, count})
   }

   return mostFrequentWords
}

console.log(tenMostFrequentWords(paragraph, 5))

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// const cleanText = (sentence) => {
//    const replaced = sentence.replace(/[%,&,$,@,;,#,?,!]+/g, '')
//    return replaced
// }

const replaced = sentence.replace(/[%,&,$,@,;,#,?,!]+/g, '')

const mostFrequentWords = (cleanText) => {
   const words = cleanText.match(/\b\w+\b/g)
   const wordCountMap = {}

   for (let word of words) {
      wordCountMap[word] = (wordCountMap[word] || 0) + 1
   }

   const sortedWords = Object.keys(wordCountMap).sort((a, b) => wordCountMap[b] - wordCountMap[a])

   const mostFrequentWords = []
   for (let i = 0; i < Math.min(sortedWords.length, 10); i++) {
      const word = sortedWords[i]
      const count = wordCountMap[word]
      mostFrequentWords.push({word, count})
   }
   return mostFrequentWords
}

console.log(mostFrequentWords(replaced))


