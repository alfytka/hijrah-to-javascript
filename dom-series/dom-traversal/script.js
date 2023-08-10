// DOM Selection
// const card = document.querySelector('.card');
// const closeBtn = document.querySelector('.close');
// closeBtn.addEventListener('click', function() {
//    card.style.display = 'none'
// });

// DOM Traversal
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//    close[i].addEventListener('click', function(e) {
//       // close[i].parentElement.style.display = 'none';
//       e.target.parentElement.style.display = 'none';
//    });    
// }

// KURANG EFEKTIF
// close.forEach(function(el) {
//    el.addEventListener('click', function(e) {
//       e.target.parentElement.style.display = 'none';
//       // PREVENT DEFAULT -> Aksi default dari sebuah element
//       e.preventDefault();
//       // STOP PROPAGATION -> Menghentikan event listener dari parentNode
//       e.stopPropagation();
//    });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//    card.addEventListener('click', function() {
//       alert('ok');
//    });
// });

// const nama = document.querySelector('.nama');
// // console.log(nama.parentElement.parentElement)
// console.log(nama.nextElementSibling.nextElementSibling)

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
   if (e.target.className == 'close') {
      e.target.parentElement.style.display = 'none';
      e.preventDefault();
   }
});
