function nthFibo(n) {
  let phi = 1.6180339887;
  return Math.round(((phi ** (n - 1)) - ((-phi) ** -(n - 1))) / ((2 * phi) - 1));
}

console.log(nthFibo(4)); // 2