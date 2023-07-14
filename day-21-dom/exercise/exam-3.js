const items = document.querySelectorAll('li')
items.forEach((text) => {
   if (text.textContent.includes('Done')) {
      text.style.background = 'green'
   } else if (text.textContent.includes('Ongoing')) {
      text.style.background = 'yellow'
   } else {
      text.style.background = 'red'
   }
})

const tanggal = () => {
   const now = new Date()
   let year = now.getFullYear()
   let month = now.getMonth() + 1
   let dates = now.getDate()
   let hours = now.getHours()
   let minutes = now.getMinutes()
   let seconds = now.getSeconds()
   
   let bulanSekarang = ''
   switch (true) {
      case month === 4:
         bulanSekarang = 'April'
         break
      case month === 5:
         bulanSekarang = 'Mey'
         break
      case month === 6:
         bulanSekarang = 'June'
         break
      case month === 7:
         bulanSekarang = 'July'
         break
      case month === 8:
         bulanSekarang = 'August'
         break
      default:
         console.log('somethings wrong')
   }
   
   if (hours < 10) {
      hours = '0' + hours
   }
   if (minutes < 10) {
      minutes = '0' + minutes
   }
   if (seconds < 10) {
      seconds = '0' + seconds
   }
   const date = `${bulanSekarang} ${dates}, ${year} ${hours}:${minutes}:${seconds}`
   const textForDate = document.querySelector('h4')
   textForDate.textContent = date
}

setInterval(tanggal, 1000);

function ubahWarna() {
   const teks = document.querySelector('.year')
   const date = document.querySelector('h4')
   const warna = getRandomColor()

   teks.style.color = warna
   date.style.background = warna
}

function getRandomColor() {
   const letters = '0123456789abcdef'
   let color = '#'
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)]
   }
   return color
}

setInterval(ubahWarna, 1000);
