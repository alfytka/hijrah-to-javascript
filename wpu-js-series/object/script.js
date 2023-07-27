// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
   this.sopir = sopir;
   this.trayek = trayek;
   this.penumpang = penumpang;
   this.kas = kas;

   this.penumpangNaik = function(nama) {
      this.penumpang.push(nama);
      return penumpang;
   }

   this.penumpangTurun = function(nama, bayar) {
      if (this.penumpang.length == 0) {
         alert('Angkot masih kosong!');
         return false;
      } else {
         for (let i = 0; i < penumpang.length; i++) {
            if (this.penumpang[i] == nama) {
               this.penumpang[i] = undefined;
               this.kas += bayar;
               return penumpang;
            } 
         }
      }
   }
}

let angkot1 = new Angkot('Alfitka', ['Cicaheum', 'Cibiru'], [], 0);
let angkot2 = new Angkot('Surya', ['Langen', 'Banjar'], [], 0);
