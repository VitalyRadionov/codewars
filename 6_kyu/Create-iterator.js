const createIterator = (array) => {
  return {
    index: 0,
    next() {
      return {
        value: array[this.index],
        done: this.index >= array.length ? (this.index = array.length, true) : (this.index++, false),
      };
    }
  }
};

// const createIterator = (array) => {
//   return {
//     index: 0,
//     next() {
//       return {
//         value: array[this.index],
//         done: this.index >= array.length || !++this.index,
//       }
//     },
//   }
// };

// function createIterator(arr) {
//   var i = 0, it = arr[Symbol.iterator]();
//   return { get index() { return i }, next: _ => (i < arr.length ? i++ : i, it.next()) }
// }

const array = ['One', 'Two'];
const iterator = createIterator(array);
console.log(iterator.index); // 0
console.log(iterator.next()); // { value: array[0], done: false }
console.log(iterator.index); // 1
console.log(iterator.next()); // { value: array[1], done: false }
console.log(iterator.index); // 2
console.log(iterator.next()); // { value: array[1], done: true }
console.log(iterator.index); // 2
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.index); // 2
console.log(iterator.index); // 2
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.index); // 2
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.index); // 2