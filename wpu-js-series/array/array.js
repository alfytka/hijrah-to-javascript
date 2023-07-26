let arr1 = ['Alfitka', 'Haerul', 'Kurniawan'];
let arr2 = []
arr2 = [30, 12, 2004]

const func = function() {
   console.log('Hello, World!');
}

let arr3 = ['teks', 2, false, func, [4, 5, 6]];

console.log(arr3[4][1])

{
   // Memanipulasi array
   // 1. Menambah isi array
   // let arr = [];
   // arr[0] = 'Alfitka';
   // arr[1] = 'Haerul';
   // arr[2] = 'Kurniawan';
   // arr[4] = 'Ahmad';

   // console.log(arr)
   
   // 2. Memanipulasi array
   // let arr = ['Alfitka', 'Haerul', 'Kurniawan'];
   // arr[1] = undefined;

   // console.log(arr)
   
   // 3. Menampilkan isi array
   let arr = ['Alfitka', 'Haerul', 'Kurniawan'];
   
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
   }
   
}

{
   // Method pada array
   // let arr = ['Alfitka', 'Haerul', 'Kurniawan'];
   // 1. join
   // console.log(arr.join(' - '))
   
   // 2. push & pop
   // arr.push('Ehsan', 'Kamal')
   // arr.pop()
   // arr.pop()
   // console.log(arr.join(' - '))
   
   // 3. unshift & shift
   // arr.unshift('Kamal')
   // arr.shift()
   // console.log(arr.join(' - '))

   // let arr = ['Alfitka', 'Haerul', 'Kurniawan'];
   // 4. splice
   // splice(indexAwal, jumlah(e)Dihapus, elemenBaru1, elemebBaru2, ...)
   // arr.splice(2, 0, 'Ehsan', 'Kamal');
   // arr.splice(1, 2, 'Ehsan', 'Kamal');
   
   // console.log(arr.join(' - '))
   
   let arr = ['Alfitka', 'Haerul', 'Kurniawan', 'Keysa', 'Endah'];
   // 5. slice
   // slice(awal, akhir)
   let arr2 = arr.slice(1, 4)

   console.log(arr.join(' - '))
   console.log(arr2.join(' - '))
}

{
   // 6. foreach
   let angka = [1, 2, 3, 4, 5, 6, 7, 8];
   let nama = ['Alfitka', 'Haerul', 'Kurniawan']

   // from this
   // for (let i = 0; i < angka.length; i++) {
   //    console.log(angka[i])
   // }

   // to this
   angka.forEach(function(e) {
      console.log(e)
   })

   nama.forEach(function(e, i) {
      console.log('Mahasiswa ke-' + (i+1) + ' adalah: ' + e)
   })
}

{
   // 7. map 
   // let numbers = [1, 2, 5, 3, 6, 8, 4]
   // let numArr = numbers.map(function(e) {
      //    return e * 2;
      // })
      
      // console.log(numArr.join(' - '))
}
   
{
   let numbers = [1, 2, 10, 5, 20, 3, 6, 8, 4]
   console.log(numbers.join(' - '))
   // numbers.sort()
   numbers.sort(function(a, b) {
      return a - b;
   })
   console.log(numbers.join(' - '))
}

{
   // 9. filter & find
   let numbers = [1, 2, 10, 5, 20, 3, 6, 8, 4]
   // let numbers2 = numbers.filter(function(x) {
   //    return x > 5;
   // })
   // console.log(numbers2.join(' - '))
   
   let numbers2 = numbers.find(function(x) {
      return x > 5;
   })
   
   console.log(numbers2)

}