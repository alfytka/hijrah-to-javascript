// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// PROBLEM: Tidak efektif digunakan untuk membuat banyaknya object
// let mahasiswa1 = {
//    nama: 'Alfitka',
//    energi: 10,
//    makan : function(porsi) {
//       this.energi = this.energi + porsi;
//       console.log(`Halo ${this.nama}, selamat makan!`);
//    }
// }

// let mahasiswa2 = {
//    nama: 'Endy',
//    energi: 20,
//    makan : function(porsi) {
//       this.energi = this.energi + porsi;
//       console.log(`Halo ${this.nama}, selamat makan!`);
//    }
// }

// 2. Function Declaration

// const methodMahasiswa = {
//    makan: function(porsi) {
//       this.energi += porsi;
//       console.log(`Halo ${this.nama}, selamat makan!`);
//    },
//    main: function(jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, selamat bermain!`);
//    },
//    tidur: function(jam) {
//       this.energi += jam * 2;
//       console.log(`Halo ${this.nama}, selamat tidur!`);
//    }
// };

// function Mahasiswa(nama, energi) {
//    let mahasiswa = Object.create(methodMahasiswa);
//    mahasiswa.nama = nama;
//    mahasiswa.energi = energi;

//    return mahasiswa;
// }

// let alfitka = Mahasiswa('Alfitka', 10);
// let endy = Mahasiswa('Endy', 20);


// function Mahasiswa(nama, energi) {
//    // let mahasiswa = Object.create(methodMahasiswa);
//    // let mahasiswa = {};
//    // let this = Object.create(Mahasiswa.prototype);
//    this.nama = nama;
//    this.energi = energi;

//    // return mahasiswa;
//    // return this;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//    this.energi += porsi;
//    return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//    this.energi -= jam;
//    return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//    this.energi += jam * 2;
//    return `Halo ${this.nama}, selamat tidur!`;
// }

// let alfitka = new Mahasiswa('Alfitka', 10);

// versi kelas
// class Mahasiswa {
//    constructor(nama, energi) {
//       this.nama = nama;
//       this.energi = energi;
//    }

//    makan (porsi) {
//       this.energi += porsi;
//       return `Halo ${this.nama}, selamat makan!`;
//    }

//    main (jam) {
//       this.energi -= jam;
//       return `Halo ${this.nama}, selamat bermain!`;
//    }

//    tidur (jam) {
//       this.energi += jam * 2;
//       return `Halo ${this.nama}, selamat tidur!`;
//    }
// }

// let alfitka = new Mahasiswa('Alfitka', 10);
// let endy = new Mahasiswa('Endy', 20);

// let angka = [1, 2, 3];
// console.log(angka)
// let angka = new Array();



// 3. Constructor Function
// using keyword 'new'
// function Mahasiswa(nama, energi) {
//    this.nama = nama;
//    this.energi = energi;

//    this.makan = function(porsi) {
//       this.energi += porsi;
//       console.log(`Halo ${this.nama}, selamat makan!`);
//    }

//    this.main = function(jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, selamat bermain!`);
//    }
// }

// let alfitka = new Mahasiswa('Alfitka', 20);

// 4. Object.create


