function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length == 0 || arrayOfArrays.some(element => element == null || element.length == 0)) {
    return 0;
  }
  else {
    arrayOfArrays.map((element, index) => arrayOfArrays[index] = element.length);
    arrayOfArrays.sort((a, b) => a - b);
    return arrayOfArrays.find((element, index) => !arrayOfArrays.includes(element + 1)) + 1;
  }
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); // -- > 3