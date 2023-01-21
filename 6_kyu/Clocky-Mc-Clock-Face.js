// solution 1

// let whatTimeIsIt = function (angle) {
//   let h = m = 0
//   if (0 <= angle <= 360) {
//     if (angle < 30) {
//       h = 12;
//       m = Math.floor((angle * 2));
//     } else {
//       h = Math.floor((angle * 2) / 60);
//       m = Math.floor((angle * 2) - (h * 60));
//     }
//     return `${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}`;
//   }
// }

// solution 2

let whatTimeIsIt = (angle, m, h) => {
  h = ((angle * 2) / 60) ^ 0;
  m = ((angle * 2) - (h * 60)) ^ 0;
  return `${(0 !== h) && (h <= 9) ? '0' + h : h || 12}:${m > 9 ? m : '0' + m}`;
}

console.log(whatTimeIsIt(0));
console.log(whatTimeIsIt(10));
console.log(whatTimeIsIt(90));
console.log(whatTimeIsIt(180));
console.log(whatTimeIsIt(360));
console.log(whatTimeIsIt(300));