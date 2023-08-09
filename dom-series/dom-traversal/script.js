// DOM Selection
// const card = document.querySelector('.card');
// const closeBtn = document.querySelector('.close');
// closeBtn.addEventListener('click', function() {
//    card.style.display = 'none'
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//    close[i].addEventListener('click', function(e) {
//       // close[i].parentElement.style.display = 'none';
//       e.target.parentElement.style.display = 'none';
//    });    
// }

close.forEach(function(el) {
   el.addEventListener('click', function(e) {
      e.target.parentElement.style.display = 'none';
   });
});

const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement)
console.log(nama.nextElementSibling.nextElementSibling)


