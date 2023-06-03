let firstName = 'Alfitka'
let lastName = 'Haerul'
let country = 'Indonesia'
let city = 'Banjar'
let age = 18
let isMarried = false
let year = new Date()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

{
    let a = '10'
    let b = 10
    console.log(a == b)
}

{
    let a = parseFloat('9.8')
    let b = 10
    console.log(Math.round(a) == b)
}

{
    let a = 5 > 1 // true
    let b = 'true' // true
    let c = true // true

    let d = 0 // false
    let e = null // false
    let f = 5 < 1 // false
}

{
    console.log('===========')
    console.log(4 > 3) // true, because 4 is greater than 3
    console.log(4 >= 3) // true, because 4 is greater than 3
    console.log(4 < 3) // false, because 4 is greater than 3
    console.log(4 <= 3) // false, because 4 is greater than 3
    console.log(4 == 4) // true, because 4 is equal to 4
    console.log(4 === 4) // true, compare both value and data type
    console.log(4 != 4) // false, compare only value
    console.log(4 !== 4) // false, compare both value and data type
    console.log(4 != '4') // false, compare only value
    console.log(4 == '4') // true, compare only value
    console.log(4 === '4') // false, compare both value and data type

    console.log('python'.length != 'jargon'.length) // false
} 

{
    console.log('===========')
    let a = 4 > 3 && 10 < 12 // true && true -> true
    let b = 4 > 3 && 10 > 12 // ture && false -> false

    let c = 4 > 3 || 10 < 12 // true || true -> true
    let d = 4 > 3 || 10 > 12 // true || false -> true

    let e = !(4 > 3) // false
    let f = !(4 < 3) // true
    let bool = !false // true

    let g = !(4 > 3 && 10 < 12) // false
    let h = !(4 > 3 && 10 > 12) // true
    let i = !(4 === '4') // true

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(bool)
    console.log(g)
    console.log(h)
    console.log(i)
}

{
    let yearToday = new Date()
    console.log(yearToday.getFullYear())

    let monthToday = new Date()
    console.log(monthToday.getMonth())

    let dateToday = new Date()
    console.log(dateToday.getDate())

    let day = new Date()
    console.log(day.getDay())

    let hours = new Date()
    console.log(hours.getHours())

    let minutes = new Date()
    console.log(minutes.getMinutes())

    let date = new Date()
    console.log(date)
}

{
    // let b = prompt('Enter base', '20')
    // let h = prompt('Enter height', '10')
    // let result = 0.5 * b * h

    // console.log(`Enter base: ${b}`)
    // console.log(`Enter height: ${h}`)
    // console.log(`The area of the triangle is ${result}`)
}

{
    // let a = parseInt(prompt('Side a of the triangle'))
    // let b = parseInt(prompt('Side b of the triangle'))
    // let c = parseInt(prompt('Side c of the triangle'))
    // let perimeter = a + b + c

    // console.log(`Enter side a: ${a}`)
    // console.log(`Enter side b: ${b}`)
    // console.log(`Enter side c: ${c}`)
    // console.log(`The perimeter of the triangle is ${perimeter}`)
}

{
    // let length = parseInt(prompt('length of the rectangle'))
    // let width = parseInt(prompt('width of the rectangle'))
    
    // // calculate the area of rectangle
    // let area = length * width

    // // calculate the perimeter of rectangle
    // let perimeter = 2 * (length + width)
    
    // console.log(`The length of the rectangle ${length}`)
    // console.log(`The width of the rectangle ${width}`)
    // console.log(`The area of rectangle ${area}`)
    // console.log(`The perimeter of rectangle ${perimeter}`)
}

{
    // let r = parseInt(prompt('radius for the area of circle'))
    // let pi = 3.14
    // let area = pi * r * r
    // let c = 2 * pi * r

    // console.log(`The radius of circle is ${r}`)
    // console.log(`The area of a circle area = ${pi} x ${r} x ${r} is ${area}`)
    // console.log(`The circumference of a circle(c = 2 x ${pi} x ${r} where pi = ${pi} is ${c})`)
}

{
    // let hours = parseInt(prompt('Enter hours'))
    // let ratePerHour = parseInt(prompt('Enter rate per hour'))
    // let payOfThePerson = hours * ratePerHour

    // console.log(`Enter hours: ${hours}`)
    // console.log(`Enter rate per hour: ${ratePerHour}`)
    // console.log(`Your weekly earning is ${payOfThePerson}`)
}

{
    let name = 'Alfitka'
    name.length > 7 ? console.log('your name is long') : console.log('your name is short')
}

{
    let firstName = 'Alfitka'
    let middleName = 'Haerul'

    console.log(`your first name, ${firstName} ${firstName.length > middleName.length ? 'longer': 'shorter'} than your middle name, ${middleName}`)
}

{
    let myAge = 20
    let yourAge = 18
    console.log(`I am ${myAge - yourAge} years older than you.`)
}

{
    // let birthYear = parseInt(prompt('Enter birth year'))
    // let userAge = new Date().getFullYear() - birthYear
    // let driverLicense = userAge >= 18 ? `You are ${userAge}. You are old enough to drive` : `You are ${userAge}. You will bi allowed to drive after ${18 - userAge} years.`

    // console.log(`Enter birth year: ${birthYear}`)
    // console.log(driverLicense)
}

{
    // let years = parseInt(prompt('Enter number of years you live'))
    // let second = years * 24 * 60 * 60
    // console.log(`Enter number of years you live: ${years}`)
    // console.log(`You lived ${second} seconds.`)
}

{
    let years = new Date().getFullYear()
    let months = new Date().getMonth()
    let date = new Date().getDate()
    let hours = new Date().getHours()
    let hour = '07:05'
    let minutes = new Date().getMinutes()
    console.log(`${years}-${months}-${date} ${hours}:${minutes}`)
    console.log(`${date}-${months}-${years} ${hours}:${minutes}`)
    console.log(`${date}/${months}/${years} ${hours}:${minutes}`)
}





