class Animal {
   constructor(name = 'Mueza', age = 1, color = 'orange', legs = 4) {
      this.name = name
      this.age = age
      this.color = color
      this.legs = legs
   }
   getInfoAnimal() {
      const info = `Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${this.legs}`
      return info
   }
}

class Dog extends Animal {
   constructor(name, age, color, legs, gender) {
      super(name, age, color, legs)
      this.gender = gender
   }
   theDog() {
      console.log('aodjf aodfo og og ggg')
   }
}

class Cat extends Animal {
   theCat() {
      return this.getInfoAnimal()
   }
}

const dog = new Dog('Anjing pintar', 2, 'black', 4, 'male')
const cat = new Cat('Cemeng', 2, 'orange', 4)

console.log(dog)
console.log(cat)