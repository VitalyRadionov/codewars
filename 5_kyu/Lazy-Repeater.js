// solution 1
const makeLooper = (str, c) => () => str[c++] ?? (c = 0, str[c++]);

//solution 2
// const makeLooper = (str, c = 0) => () => {
//   str += str[c];
//   return str[c++];
// }

const abc = makeLooper("abc");

console.log(abc()); // "a"
console.log(abc()); // "b"
console.log(abc()); // "c"
console.log(abc()); // "a"
console.log(abc()); // "b"
console.log(abc()); // "c"

console.log(abc()); // "a"
console.log(abc()); // "b"
console.log(abc()); // "c"