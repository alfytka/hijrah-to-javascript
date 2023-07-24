let tanya = true
while (tanya) {
   let p = prompt('Pilih pilihan Anda untuk memainkan Game Suwit Jawa:\ncth: gajah, semut, orang')
   
   let comp = Math.random()
   if (comp < 0.34) {
      comp = 'gajah'
   } else if (comp >= 0.34 && comp < 0.67) {
      comp = 'orang'
   } else {
      comp = 'semut'
   }
   
   let hasil = ''
   if (p == comp) {
      hasil = 'SERI!'
   } else if (p == 'gajah') {
      hasil = comp == 'orang' ? 'MENANG!' : 'KALAH!'
   } else if (p == 'orang') {
      hasil = comp == 'gajah' ? 'KALAH!' : 'MENANG!'
   } else if (p == 'semut') {
      hasil = comp = 'orang' ? 'KALAH!' : 'MENANG!'
   } else {
      hasil = 'Anda memasukkan pilihan yang salah!'
   }
   
   alert('Anda memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nMaka hasilnya: ' + hasil)

   tanya = confirm('Mau main game lagi?')
}

alert('Terima kasih sudah bermain :)')
