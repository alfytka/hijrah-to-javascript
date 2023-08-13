// Rest Parameter

// function myFunc() {
//    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//    // return myArgs;
//    // return Array.from(arguments);
//    return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function sum(...angka) {
//    // let total = 0;
//    // for (const a of angka) {
//    //    total += a;
//    // }
//    // return total;
//    return angka.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Ahmad', 'Ariq', 'Alfitka', 'Khikmal', 'Andre'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//    pm: 'Elfan',
//    frontEnd: 'Alfitka',
//    backEnd1: 'Teguh',
//    backEnd2: 'Khikmal',
//    ux: 'Atyla',
//    devOps: 'Adi'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filter
function filterBy(type, ...values) {
   return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Alfitka', false, 10, true, 'Khikmal'));

