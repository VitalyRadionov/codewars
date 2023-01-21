// solution 1

// var countBits = function (n) {
//   let dec = [];
//   while (n > 0) {
//     dec.unshift(n % 2);
//     n = Math.floor(n / 2);
//   }
//   return dec.filter(e => e == 1).length;
// };

// solution 2

// let countBits = (n, a = n % 2) => a += n > 0 ? countBits(Math.trunc(n / 2)) : a;

// solution 3

let countBits = (n, a = n & 1) => a += n ? countBits(Math.trunc(n / 2)) : a;

console.log(countBits(1234)); // 10011010010 -> 5