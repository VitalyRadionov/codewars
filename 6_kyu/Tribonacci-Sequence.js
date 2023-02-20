function tribonacci(signature, n) {
  // return n ? [...Array(n)].reduce((p, _, i) => i > 2 ? [...p, p[i - 1] + p[i - 2] + p[i - 3]] : [...p, signature[i]], []) : [];
  return [...Array(n)].reduce((p, _, i) => i > 2 ? [...p, p[i - 1] + p[i - 2] + p[i - 3]] : [...p, signature[i]], []);
}

console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]
console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]
console.log(tribonacci([19, 14, 12], 1)); // [ 19 ]
console.log(tribonacci([300, 200, 100], 0)); // [ ]