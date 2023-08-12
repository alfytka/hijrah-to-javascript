// 1. HTML Fragments
// const mhs = {
//    nama: 'Alfitka',
//    umur: 18,
//    nrp: '8929409201',
//    email: 'alfytka@gmail.com'
// }

// const el = `<div class="mhs">
//    <h2>${mhs.nama}</h2>
//    <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
const mhs = [
   {
      nama: 'Alfitka Haerul',
      email: 'alfytka@gmail.com'
   },
   {
      nama: 'Ariq Robiawan',
      email: 'ariq@gmail.com'
   },
   {
      nama: 'Aji Saputra',
      email: 'aji@gmail.com'
   },
];

const el = `<div class="mhs">
   ${mhs.map(m => `<ul>
      <li>${m.nama}</li>
      <li>${m.email}</li>
   </ul>`).join('')}
</div>`;

// 3. conditionals
// ternary
const lagu = {
   judul: 'Tak Semanis Dulu',
   penyanyi: 'Maira',
   feat: 'Alfitka'
}

const el1 = `<div class="lagu">
   <ul>
      <li>${lagu.judul}</li>
      <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
   </ul>
</div>`;

// 4. Nested
// HTML Fragments bersarang

const alfitka = {
   nama: 'Alfitka',
   semester: 1,
   mataKuliah: [
      'Rekayasa Web', 
      'Analisis dan Perancangan Sistem Informasi', 
      'Pemrograman Sistem Interaktif',
      'Perancangan Sistem Berorientasi Object'
   ]
};

function cetakMataKuliah(mataKuliah) {
   return `
   <ol>
      ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
   </ol>
   `;
}

const el2 = `<div class="mhs">
   <h2>${alfitka.nama}</h2>
   <span class="semester">Semester: ${alfitka.semester}</span>
   <h4>Mata Kuliah:</h4>
   ${cetakMataKuliah(alfitka.mataKuliah)}
</div>`;


document.body.innerHTML = el;
document.body.innerHTML = el1;
document.body.innerHTML = el2;

