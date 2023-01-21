Array.prototype.map = function (callback, array) {
  const self = this;
  const keysLength = Object.keys(self);
  let newArray = [];
  let cb = callback.bind(array);
  for (let index = 0; index < self.length; index++) {
    if (!keysLength.length || !keysLength.includes(index.toString())) {
      newArray[index] = self[index];
    } else {
      newArray[index] = cb(self[index], index, self);
    }

  }
  return newArray;
}

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multiply_by_two = function (x) { return x * 2 };
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
console.log(one_to_nine_doubled);
// Expected [2, 4, 6, 8, 10, 12, 16, 18]