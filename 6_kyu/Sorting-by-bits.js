function sortByBit(arr) {
  arr.sort(compareNum)

  function compareNum(a, b) {
    [c, d] = [...[a, b].map(element => element.toString(2).split('0').join('').length)];
    if (c > d) return 1;
    if (c == d) return a > b ? 1 : a == b ? 0 : -1;
    if (c < d) return -1;
  }

  return arr;
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])); // => [1, 8, 3, 3, 5, 6, 9, 7]