// function init() {
//    // let nama = 'Alfitka';
//    return function (nama) {
//       console.log(nama);
//    }
// }
// let panggilNama = init();
// panggilNama('Alfitka');
// panggilNama('Haerul');

// function saySalam(waktu) {
//    return function(nama) {
//       console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//    }
// }

// let selamatPagi = saySalam('Pagi');
// let selamatSiang = saySalam('Siang');
// let selamatMalam = saySalam('Malam');

// selamatPagi('Alfitka');
// selamatMalam('Endy');

// console.dir(selamatMalam('Her'));

let add = (function() {
   let counter = 0;
   return function() {
      return ++counter;
   }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
