// this
// var a = 10;
// console.log(window.a);
// console.log(this.a);

// membuat object
// cara 1 - function declaration
// function halo() {
//    console.log(this);
//    console.log('halo');
// }

// this.halo();
// this mengembalikan object Global

// cara 2 - object literal
// let obj = {a: 10, nama: 'Alfitka'};
// obj.halo = function() {
//    console.log(this);
//    console.log('halo');
// }

// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constuctor
// function Halo() {
//    console.log(this);
//    console.log('halo');
// }

// let obj1 = new Halo();
// let obj2 = new Halo();
// this mengembalikan object yang baru dibuat
