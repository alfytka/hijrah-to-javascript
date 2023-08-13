// for ..of
// Array
// const mhs = ['Alfitka', 'Ariq', 'Teguh'];

// for (let i = 0; i < mhs.length; i++) {
//    console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs) {
//    console.log(m);
// }

// String
// const nama = 'Alfitka';
// for (const n of nama) {
//    console.log(n);
// }

// const mhs = ['Alfitka', 'Ariq', 'Teguh'];
// mhs.forEach((m, i) => {
//    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach((n) => console.log(n.textContent));
// for (const n of liNama) {
//    console.log(n.innerHTML);
// }

// Arguments
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// function jumlahkanAngka() {
//    // return arguments.reduce((a, i) => a + i); !true
//    // [1, 2, 3, 4, 5].forEach(a => jumlah += a); !true
//    let jumlah = 0;
//    for (const a of arguments) {
//       jumlah += a;
//    }
//    return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for ..in
const mhs = {
   nama: 'Alfitka',
   umur: 18,
   email: 'alfytka@gmail.com'
}

for (m in mhs) {
   console.log(mhs[m]);
}
