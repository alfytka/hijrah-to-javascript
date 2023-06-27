const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

const countries = ['Indonesia', 'Malaysia', 'Thailand', 'Singapore', 'Vietnam']
let [id, my, tha, sg, vt] = countries

console.log(id, my, tha, sg, vt)

const rectangle = {
   width: 20,
   height: 10, 
   area: 200,
   perimeter: 60
}

let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)
