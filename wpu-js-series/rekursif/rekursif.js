function showNum(n) {
   
   if (n === 0) return;

   console.log(n);
   return showNum(n-1);
}

showNum(10);

function factorial(n) {
   if (n === 0) return 1;
   return n * factorial(n-1);
}

console.log(factorial(5));