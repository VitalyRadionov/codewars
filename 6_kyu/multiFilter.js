let multiFilter = function () {
  let a = [...arguments];
  return (el) => a.reduce((acc, element) => acc ? element(el) : false, 1);
};

let isOdd = function (el) {
  return el % 2 === 1;
};

let isEven = function (el) {
  return el % 2 === 0;
};

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let result = testArray.filter(multiFilter(isEven, isOdd));
console.log(result);