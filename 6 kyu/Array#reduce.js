// DESCRIPTION:
// In this kata, you must define the Array.reduce method.

// I have disabled the pre - existing reduce methods.

//* Here's how it works:

//*   [1, 2, 3].reduce(function (sum, next) { return sum + next }, 0)
//*   // => 6

//*   ['a', 'b', 'a'].reduce(function (obj, elem) { if (!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj }, {})
//*   // => {'a':2, 'b':1}

// Summary: The reduce method goes through each element of an array,
// applies the function to whatever the function returned last,
// and returns the last outcome.On the first iteration,
// it should pass the initial value to the function, as well as the first element of the array.
// If no initial value is passed, skip to the first element of the array.

// Ruby methods should expect a lambda.

// solution 1
const { runInNewContext } = require("vm");
Array.prototype.reduce = runInNewContext("Array.prototype.reduce");

// solution 2
Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    if (initial === undefined) {
      initial = this[0];
    } else {
      initial = process(initial, this[i]);
    }
  }
  return initial;
}

// solution 3
Array.prototype.reduce = function (process, initial) {
  this.forEach(e => initial = initial === undefined ? this[0] : process(initial, e));
  return initial;
}

// [1, 2, 3].reduce(function (sum, next) { return sum + next }, 0)
// => 6

// ['a', 'b', 'a'].reduce(function (obj, elem) { if (!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj }, {})
// => {'a':2, 'b':1}

console.log([1, 2, 3].reduce(function (sum, next) { return sum + next }, 0));
console.log(['a', 'y', '!'].reduce(function (x, y) { return x + y }, 'y'));
// => 'yay!'