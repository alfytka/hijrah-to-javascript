function outerFunction() {
   let count = 0
   function innerFunction() {
      count++
      return count
   }
   return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// another example
{
   function outerFunction() {
      let count = 0
      function plusOne() {
         count++
         return count
      }
      function minusOne() {
         count--
         return count
      }

      return {
         plusOne: plusOne(),
         minusOne: minusOne()
      }
   }
   const innerFuncs = outerFunction()

   console.log(innerFuncs.plusOne)
   console.log(innerFuncs.minusOne)
}

// exercise
{
   const counter = () => {
      let point = 0
      const countNow = () => {
         point++
         return point
      }
      return countNow
   }
   const counters = counter()
   console.log(counters())
}

{
   const calculate = () => {
      let number = 1
      const plusOne = () => {
         number++
         return number
      }
      const minusOne = () => {
         number--
         return number
      }
      const pangkatOne = () => {
         number * 2
         return number
      }
      return {
         plusOne: plusOne(),
         minusOne: minusOne(),
         pangkatOne: pangkatOne()
      }
   }
   const calculates = calculate()
   console.log(calculates.plusOne)
   console.log(calculates.minusOne)
   console.log(calculates.pangkatOne)
}

{
   class personAccount {
      constructor(firstName, lastName) {
         this.firstName = firstName
         this.lastName = lastName
         this.incomes = new Map()
         this.expenses = new Map()
      }

      totalIncome() {
         let sum = 0
         for (let amount of this.incomes.values()) {
            sum += amount
         }
         return sum
      }

      totalExpense() {
         let sum = 0
         for (let amount of this.expenses.values()) {
            sum += amount
         }
         return sum
      }

      accountInfo() {
         let info = `Account Information for ${this.firstName} ${this.lastName}:\n`
         info += `Total Income: ${this.totalIncome()}\n`
         info += `Total Expense: ${this.totalExpense()}\n`
         info += `Account Balance: ${this.accountBalance()}`
         return info
      }

      addIncome(amount, description) {
         if (amount > 0) {
            this.incomes.set(description, amount)
         }
      }

      addExpense(amount, description) {
         if (amount > 0) {
            this.expenses.set(description, amount)
         }
      }

      accountBalance() {
         return this.totalIncome() - this.totalExpense()
      }
   }

   const person = new personAccount('Alfitka', 'Haerul')
   person.addIncome(1000, 'Salary')
   person.addIncome(200, 'Freelance Work')
   person.addExpense(400, 'Rent')
   person.addExpense(50, 'Groceries')
   person.addExpense(100, 'Utilities')

   console.log(person.accountInfo())
}

