let jmlAngkot = 10;
let angkotBeroperasi = 6;
let angkotLembur = 8;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
   if (noAngkot <= angkotBeroperasi) {
      console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
   } else if (noAngkot == angkotLembur) {
      console.log('Angko No. ' + noAngkot + ' sedang lembur.')
   } else {
      console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
   }
}
