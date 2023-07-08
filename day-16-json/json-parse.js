const userText = `{
   "users": [
      {
         "firstName": "Alfitka",
         "lastName": "Haerul",
         "age": 18,
         "email": "alfitka@alfitka.com"
      },
      {
         "firstName": "Kesya",
         "lastName": "Kiesya",
         "age": 20,
         "email": "kesya@keysa.com"
      },
      {
         "firstName": "Endah",
         "lastName": "Solehah",
         "age": 17,
         "email": "endah@endah.com"
      }
   ]
}`

const userObj = JSON.parse(userText, (key, value) => {
   let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
   return newValue
})
console.log(userObj)


