const F = (n) => n === 0 ? 1 : n - M(F(n - 1));

const M = (n) => n === 0 ? 0 : n - F(M(n - 1));

console.log(F(0));
console.log(M(0));
console.log(F(7));
console.log(M(7));