let penumpang = [];
const tambahPenumpang = function(namaPenumpang, penumpang) {
   if (penumpang.length == 0) {
      penumpang.push(namaPenumpang);
      return penumpang;
   } else {
      for (let i = 0; i < penumpang.length; i++) {
         if (penumpang[i] == undefined) {
            penumpang[i] = namaPenumpang;
            return penumpang;
         } else if (penumpang[i] == namaPenumpang) {
            console.log(namaPenumpang + ' sudah ada di dalam angkot.')
            return penumpang;
         } else if (i == penumpang.length - 1) {
            penumpang.push(namaPenumpang);
            return penumpang;
         }
      }
   }
}

const hapusPenumpang = function(namaPenumpang, penumpang) {
   if (penumpang.length == 0) {
      console.log('Angkot masing kosong!');
   } else {
      for (let i = 0; penumpang.length; i++) {
         if (penumpang[i] == namaPenumpang) {
            penumpang[i] = undefined;
            return console.log(penumpang);
         } else {
            console.log(namaPenumpang + ' tidak ada di dalam angkot.')
            return penumpang;
         }
      }
   }
   return penumpang;
}

// console.log(tambahPenumpang('Alfitka', penumpang));
