// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang javascript lanjutan
let jsVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing dari video
   .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
   .map(waktu => {
      // 10:20 -> [10, 20] split
      const parts = waktu.split(':').map(part => parseFloat(part));
      return (parts[0] * 60) + parts[1];
   })

// jumlahkan semua detiknya
   .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam:menit:detik
const jam = Math.floor(jsVideo / 3600);
jsVideo = jsVideo - jam * 3600;
const menit = Math.floor(jsVideo / 60);
const detik = jsVideo - menit * 60;

// simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;

console.log(jmlVideo);