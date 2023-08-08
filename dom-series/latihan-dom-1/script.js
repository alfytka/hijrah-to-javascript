const button = document.getElementById('color-button');
button.onclick = function() {
   // document.body.style.backgroundColor = 'lightblue';
   // document.body.setAttribute('class', 'biru-muda');
   document.body.classList.toggle('biru-muda');
}

const randomButton = document.createElement('button');
const textButton = document.createTextNode('Random Color');
randomButton.appendChild(textButton);
randomButton.setAttribute('type', 'button');
button.after(randomButton);

randomButton.addEventListener('click', () => {
   const r = Math.round(Math.random() * 255 + 1);
   const g = Math.round(Math.random() * 255 + 1);
   const b = Math.round(Math.random() * 255 + 1);
   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

sliderRed.addEventListener('input', () => {
   const r = sliderRed.value;
   const g = sliderGreen.value;
   const b = sliderBlue.value;
   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sliderGreen.addEventListener('input', () => {
   const r = sliderRed.value;
   const g = sliderGreen.value;
   const b = sliderBlue.value;
   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sliderBlue.addEventListener('input', () => {
   const r = sliderRed.value;
   const g = sliderGreen.value;
   const b = sliderBlue.value;
   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document.body.addEventListener('mousemove', (event) => {
   // mouse position
   // console.log(event.clientX);
   // console.log(event.clientY);
   // browser size
   // console.log(window.innerWidth);

   const xPos = Math.round((event.clientX / window.innerWidth) * 255);
   const yPos = Math.round((event.clientY / window.innerHeight) * 255);
   document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`

});
