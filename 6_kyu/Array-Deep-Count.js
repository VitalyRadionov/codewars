function deepCount(a) {
  return a.reduce((p, e) => p += (Array.isArray(e) ? deepCount(e) : 0), 0) + a.length;
}

console.log(deepCount([])); // -- > 0
console.log(deepCount([1, 2, 3])); // -- > 3
console.log(deepCount(["x", "y", ["z"]])); // -- > 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // -- > 7