// solution 1

// class Singleton {
//   constructor() {
//     // example 1
//     // if (typeof Singleton.test === 'object') {
//     //   return Singleton.test;
//     // }
//     // Singleton.test = this;

//     // example 2
//     return Singleton.test = Singleton.test ? Singleton.test : this;
//   }
// };

// solution 2

function Singleton() {
  return Singleton.test = Singleton.test || this;
}

let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2);  // => true
console.log(obj1.test = 1);
console.log(obj2.test);  // => 1
