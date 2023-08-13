// Spread Operator
// memecah iterable menjadi single element
// const mhs = ['Alfitka', 'Ariq', 'Endy'];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['Alfitka', 'Ariq', 'Endy'];
// const dosen = ['Agung', 'Febri', 'Dian'];
// const orang = [...mhs, 'Andi', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ['Alfitka', 'Ariq', 'Endy'];
// // const mhs1 = mhs;
// // mhs1[0] = 'Fajar'; // tidak benar-benar meng-copy
// const mhs1 = [...mhs];
// // mhs1[0] = 'Fajar';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//    mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
