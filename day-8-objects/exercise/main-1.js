{
   const cat = {
      name: 'Lola',
      legs: 4,
      color: 'Gray',
      age: 1,
      bark: function() {
         return `woof woof`
      }
   }
   console.log(cat.name)
   console.log(cat.legs)
   console.log(cat.color)
   console.log(cat.age)
   console.log(cat.bark())

   console.log(cat['name'])
   console.log(cat['legs'])
   console.log(cat['color'])
   console.log(cat['age'])

   console.log(Object.values(cat))

   cat.breed = 'Kampoeng'
   cat.getInfoDog = function() {
      let statement = `Name: ${this.name}\nLegs: ${this.legs}\nColor: ${this.color}\nAge: ${this.age}`
      return statement
   }

   console.log(cat)
   console.log(cat.getInfoDog())
}