// using getTime()
const getTime = new Date()
console.log(getTime.getTime())

// using Date.now()
const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


// Let us format these values to a human readable time format. Example:
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 - 59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)




