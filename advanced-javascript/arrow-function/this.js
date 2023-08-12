// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function() {
//    this.nama = 'Alfitka';
//    this.umur = 18;
//    this.sayHello = function() {
//       console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//    }
// }

// const alfitka = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function()  {
//    this.nama = 'Alfitka';
//    this.umur = 18;
//    this.sayHello = () => {
//       console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//    }
// }

// const alfitka = new Mahasiswa();

// Object Literal
// const mhs1 = {
//    nama: 'Alfitka',
//    umur: 18,
//    sayHello: () => {
//       // console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//       console.log(this);
//    }
// }

// Constructor Function
// const Mahasiswa = function() {
//    this.nama = 'Alfitka';
//    this.umur = 18;
//    this.sayHello = function() {
//       console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//    }

//    setInterval(() => {
//       console.log(this.umur++);
//    }, 500);
// }

// const alfitka = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
   let satu = 'size';
   let dua = 'caption';

   if (this.classList.contains(satu)) {
      [satu, dua] = [dua, satu];
   }

   this.classList.toggle(satu);
   setTimeout(() => {
      this.classList.toggle(dua);
   }, 600);
});

// let total = 0; count = 1;
// while (count <= 10) {
//    total += count;
//    count += 1;
// }
// console.log(total);

function repeat(n, action) {
   for (let i = 0; i < n; i++) {
      action(i);
   }
}

repeat(10, console.log);
repeat(3, alert);

