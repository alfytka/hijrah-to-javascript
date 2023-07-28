// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Alfitka Haerl';

// document.getElementsByTagName() -> HTMLCollections
let p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';
for (let i = 0; i < p.length; i++) {
   p[i].style.background = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari JavaScript';

