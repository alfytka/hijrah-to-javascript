// for (let i = 1; i <= 10; i++) {
//    console.log('Hello World ' + i + 'x')
// }

// let number = prompt('Masukkan angka, berapapun nilainya')
// if (number % 2 == 0) {
//    alert(number + ' adalah bilangan GENAP')
// } else if (number % 2 == 1) {
//    alert(number + ' adalah bilangan GANJIL')
// } else {
//    alert('Yang Anda masukkan bukan angka')
// }

let s = ''
for (let i = 10; i > 0; i--) {
   for (let j = 0; j < i; j++) {
      s += '*'
   }
   s += '\n'
}
console.log(s)
