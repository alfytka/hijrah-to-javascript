let ulang = true
while (ulang) {
   alert('Tebak angka dari 1 - 10\nKamu punya 3 kali kesempatan')
   let p = parseInt(prompt('Masukkan angka tebakan'))
   let comp = Math.floor(Math.random() * 10) + 1
   
   let kesempatan = 3
   while (kesempatan > 1) {
      if (p == comp) {
         alert('Kamu benar!\nAngka yang dicari adalah ' + comp)
         break
      } else if (p < comp) {
         kesempatan -= 1
         alert('Terlalu RENDAH!\nKesempatan kamu ' + kesempatan + ' kali kesempatan menebak')
         p = parseInt(prompt('Masukkan angka tebakan'))
      } else if (p > comp) {
         kesempatan -= 1
         alert('Terlalu TINGGI!\nKesempatan kamu sisa ' + kesempatan + ' kali kesempatan menebak')
         p = parseInt(prompt('Masukkan angka tebakan'))
      } else if (kesempatan == 0) {
         // alert('Yahh! Kesempatan kamu sudah habis :(')
         break
      }
   }

   while (kesempatan <= 1) {
      if (p > comp) {
         alert('Terlalu TINGGI!\nKesempatan kamu sisa ' + kesempatan + ' kali kesempatan menebak')
         alert('Kamu gagal!\nAngka yang dicari adalah ' + comp)
         break
      } else if (p < comp) {
         alert('Terlalu RENDAH!\nKesempatan kamu sisa ' + kesempatan + ' kali kesempatan menebak')
         alert('Kamu gagal!\nAngka yang dicari adalah ' + comp)
         break
      }
   }

   
   ulang = confirm('Coba lagi?')
}

alert('Terima kasih sudah bermain')
