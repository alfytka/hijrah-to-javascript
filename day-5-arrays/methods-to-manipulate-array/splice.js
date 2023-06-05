{
   const numbers = [1, 2, 3, 4, 5]
   numbers.splice()
   console.log(numbers) // -> remove all items
}

{
   const numbers = [1, 2, 3, 4, 5]
   numbers.splice(0,1) // remove the first item
   console.log(numbers)
}

{
   const numbers = [1, 2, 3, 4, 5, 6]
   numbers.splice(3, 3, 7, 8, 9)
   console.log(numbers.splice(3, 3, 7, 8, 9))
}