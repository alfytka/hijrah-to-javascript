{
   const personAccount = {
      firstName: 'Alfitka',
      lastName: 'Haerul',
      incomes: new Map(),
      expenses: new Map(),

      totalIncome: function() {
         let total = 0
         for (const amount of this.incomes.values()) {
            total += amount
         }
         return total
      },
      totalExpense: function() {
         let total = 0
         for (const amount of this.expenses.values()) {
            total += amount
         }
         return total
      },
      accountInfo: function() {
         return `Name: ${this.firstName} ${this.lastName}\nTotal Income: Rp${this.totalIncome()}\nTotal Expense: Rp${this.totalExpense()}`
      },
      addIncome: function(description, amount) {
         this.incomes.set(description, amount)
      },
      addExpense: function(description, amount) {
         this.expenses.set(description, amount)
      },
      accountBalance: function() {
         const balance = this.totalIncome() - this.totalExpense()
         return `Account balance: Rp${balance}`
      }
   }

   personAccount.addIncome('Salary', 5000000)
   personAccount.addExpense('Belanja', 1500000)
   personAccount.addExpense('Transportasi', 200000)
   console.log(personAccount)
   console.log(personAccount.accountInfo())
   console.log(personAccount.accountBalance())
}

{
   const users = [
      {
         _id: 'ab12ex',
         username: 'Alex',
         email: 'alex@alex.com',
         password: '123123',
         createdAt: '08/01/2020 9:00 AM',
         isLoggedIn: false
      },
      {
         _id: 'fg12cy',
         username: 'Asab',
         email: 'asab@asab.com',
         password: '123456',
         createdAt:'08/01/2020 9:30 AM',
         isLoggedIn: true
      },
      {
         _id: 'zwf8md',
         username: 'Brook',
         email: 'brook@brook.com',
         password: '123111',
         createdAt:'08/01/2020 9:45 AM',
         isLoggedIn: true
      },
      {
         _id: 'eefamr',
         username: 'Martha',
         email: 'martha@martha.com',
         password: '123222',
         createdAt:'08/01/2020 9:50 AM',
         isLoggedIn: false
      },
      {
         _id: 'ghderc',
         username: 'Thomas',
         email: 'thomas@thomas.com',
         password: '123333',
         createdAt:'08/01/2020 10:00 AM',
         isLoggedIn: false
      }
   ]

   const signUp = (newUser) => {
      const existingUser = users.find(user => user.email === newUser.email)
      if (existingUser) {
         console.log('User already exists. Please log in.')
         return
      }
      users.push(newUser)
      console.log('User signed up successfully.')
   }

   const newUser = {
      _id: 'jkad19',
      username: 'Alfitka',
      email: 'alfitka@alfitka.com',
      password: 'password123',
      createdAt: '08/01/2020 10:20 AM',
      isLoggedIn: false
   }

   signUp(newUser)

   const signIn = (email, password) => {
      const user = users.find(user => user.email === email)

      if (!user) {
         console.log('User not found. Please sign up.')
         return
      }

      if (user.password !== password) {
         console.log('Incorret password. Please try again.')
         return
      }

      user.isLoggedIn = true
      console.log('User signed in successfully.')
   }

   signIn('alex@alex.com', '123123')

   const products = [
      {
         _id: 'eedfcf',
         name: 'Mobile Phone',
         description: 'Huawei Honor',
         price: 200,
         ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5}
         ],
         likes: []
      },
      {
         _id: 'aegfal',
         name: 'Laptop',
         description: 'MacPro: System Darwin',
         price: 2500,
         ratings: [],
         likes: ['fg12cy']
      },
      {
         _id: 'hedfcg',
         name: 'TV',
         description: 'Smart TV:Procaster',
         price: 400,
         ratings: [{ userId: 'fg12cy', rate: 5 }],
         likes: ['fg12cy']
      }
   ]

   const rateProduct = (productId, userId, rating) => {
      const product = products.find(product => product._id === productId)

      if (!product) {
         console.log('Product not found.')
         return
      }

      const existingRating = product.ratings.find(rating => rating.userId === userId)

      if (existingRating) {
         console.log('You have already rated this product.')
         return
      }

      product.ratings.push({ userId, rate: rating})
      console.log('Product rated successfully.')

   }
   rateProduct('aegfal', 'abc123', 4)

   console.log(products)

   function averageRating(productId) {
      const product = products.find(product => product._id === productId)

      if (!product) {
         console.log('Product not found.')
         return
      }

      const totalRatings = product.ratings.length
      if (totalRatings === 0) {
         console.log('No ratings available for this product.')
         return
      }

      const sumRatings = product.ratings.reduce((sum, rating) => sum + rating.rate, 0)
      const average = sumRatings / totalRatings
      console.log(`Agerage rating of ${product.name}: ${average}`)
   }

   averageRating('eedfcf')

   const likeProduct = (productId, userId) => {
      const product = products.find(product => product._id === productId)

      if (!product) {
         console.log('Product not found.')
         return
      }

      const userLikedIndex = product.likes.indexOf(userId)

      if (userLikedIndex > -1) {
         product.likes.splice(userLikedIndex, 1)
         console.log('Product unliked successfully.')
      } else {
         product.likes.push(userId)
         console.log('Product liked successfully.')
      }
   }

   likeProduct('eedfcf', 'abc123')
   console.log(products)
}