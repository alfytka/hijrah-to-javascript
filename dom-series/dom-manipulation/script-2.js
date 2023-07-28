// DOM Manipulation
// buat element baru
const createP = document.createElement('p');
const textForP = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
createP.appendChild(textForP);

// simpan createP di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(createP);

const liBaru = document.createElement('li');
const textForLi = document.createTextNode('Item Baru');
liBaru.appendChild(textForLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const textForH2 = document.createTextNode('Judul Baru');

h2.appendChild(textForH2);

sectionB.replaceChild(h2, p4);

createP.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2.style.backgroundColor = 'lightgreen';


