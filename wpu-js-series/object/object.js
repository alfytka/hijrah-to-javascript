const mahasiswa = {
   nama: 'Alfitka Haerul',
   lulus: true,
   IPSemester: [2.90, 3.10, 3.25, 2.88, 3.04],
   IPKumulatif: function() {
      let total = 0;
      let ips = this.IPSemester;
      for (let i = 0; i < ips.length; i++) {
         total += ips[i];
      }
      return total / ips.length;
   }
}

console.log(mahasiswa.IPKumulatif())

const mhs = {
   nama: 'Alfitka',
   umur: 18,
   ips: [3.00, 2.50, 3.20],
   alamat: {
      jalan: 'Jl. Pahlawan No. 99 Banjar',
      kota: 'Banjar',
      provinsi: 'Jawa Barat'
   }
};

// Membuat Object
// Object Literal
const mhs1 = {
   nama: 'Alfitka Haerul',
   nrp: '091897841',
   email: 'alfytka@gmail.com',
   jurusan: 'Teknik Informatika'
};

const mhs2 = {
   nama: 'Elfan Hari',
   nrp: '98789712',
   email: 'elfanhari@gmail.com',
   jurusan: 'Teknik Komputer'
};

// Function Declaration
function createObjectMhs(nama, nrp, email, jurusan) {
   let mhs = {};
   mhs.nama = nama;
   mhs.nrp = nrp;
   mhs.email = email;
   mhs.jurusan = jurusan;
   return mhs;
}

let mhs3 = createObjectMhs('Aji Saputra', 829839281, 'ajisaputra@gmail.com', 'Teknik Kimia');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
   // let this = {};
   this.nama = nama;
   this.nrp = nrp;
   this.email = email;
   this.jurusan = jurusan;
   // return this;
}

let mhs4 = new Mahasiswa('Ariq', 1289023451, 'ariq@gmail.com', 'Teknik Industri');
