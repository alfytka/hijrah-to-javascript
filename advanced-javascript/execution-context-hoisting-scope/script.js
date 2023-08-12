// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'Alfitka';
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// console.log(sayHello())

// var nama = 'Alfitka';
// var umur = 18;

// function sayHello() {
//    return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution context phase
// window
// arguments
// hoisting


// var nama = 'Alfitka Haerl';
// var username = '@alfytka_';

// function cetakURL() {
//    console.log(arguments);
//    var instagramURL  = 'https://instagram.com/';
//    return instagramURL + username;
// }

// console.log(cetakURL('@elfangaming', '@erik'));

// function a() {
//    console.log('ini a');

//    function b() {
//       console.log('ini b');

//       function c() {
//          console.log('ini c');
//       }
//       c();
//    }
//    b();
// }
// a();


function satu() {
   var nama = 'Alfitka';
   console.log(nama);
}

function dua() {
   console.log(nama);
}

console.log(nama);
var nama = 'Ariq';
satu();
dua('Agung');
console.log(nama);

