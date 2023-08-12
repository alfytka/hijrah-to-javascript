// Function Expression
// const tampilNama = function(nama) {
//    return `Halo ${nama}`;
// }
// console.log(tampilNama('Alfitka')); 

// const tampilNama = (nama) => { return `Halo ${nama}`; }
// console.log(tampilNama('Alfitka Haerl'));

// const tampilNama = (nama, waktu) => { 
//    return `Selamat ${nama}, ${waktu}`;
// }
// console.log(tampilNama('Alfitka', 'Malam'));

// implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Alfitka'));

// const tampilNama = () => `Hello world`;
// console.log(tampilNama());

let mahasiswa = ['Alfitka Haerl', 'Ariq Robiawan', 'Wahyu Nur'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//    return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }))
console.table(jumlahHuruf);

