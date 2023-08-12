// Destructuring Variable / Assignment

// Destructuring Array
// const intro = ['Halo', 'nama', 'saya', 'Alfitka'];

// // const [salam, satu, dua, nama] = intro;
// const [salam, , , nama] = intro; // -> skipping item
// console.log(nama);

// swap items -> menukar items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]; // this->
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//    return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//    nama: 'Alfitka',
//    umur: 18
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object

// ({nama, umur} = { nama: 'Alfitka', umur: 18 });
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//    nama: 'Alfitka',
//    umur: 18
// }

// const {nama: n, umur: u} = mhs;
// console.log(u)

// Memberikan default value
// const mhs = {
//    nama: 'Alfitka',
//    umur: 18,
//    email: 'alfytka@gmail.com'
// }

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

// Memberi nilai default + assign ke variable baru
// const mhs = {
//    nama: 'Alfitka',
//    umur: 18,
//    email: 'alfytka@gmail.com'
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

// Rest parameter
// const mhs = {
//    nama: 'Alfitka',
//    umur: 18,
//    email: 'alfytka@gmail.com'
// }

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
   id: 123,
   nama: 'Alfitka',
   umur: 18,
   email: 'alfytka@gmail.com'
}

function getIdMhs({ id, nama }) {
   return nama;
}

console.log(getIdMhs(mhs));

